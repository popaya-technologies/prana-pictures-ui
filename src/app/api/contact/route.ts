import { NextResponse } from "next/server";

type ContactRequestBody = {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  captchaToken?: string;
};

type RecaptchaResponse = {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  "error-codes"?: string[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactRequestBody;

    const {
      name,
      email,
      phone,
      subject,
      message,
      captchaToken,
    } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields.",
        },
        {
          status: 400,
        }
      );
    }

    if (!captchaToken) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete the CAPTCHA.",
        },
        {
          status: 400,
        }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;

    if (!secretKey) {
      console.error("RECAPTCHA_SECRET_KEY is missing.");

      return NextResponse.json(
        {
          success: false,
          message: "Server configuration error.",
        },
        {
          status: 500,
        }
      );
    }

    const verificationBody = new URLSearchParams({
      secret: secretKey,
      response: captchaToken,
    });

    const recaptchaResponse = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: verificationBody.toString(),
        cache: "no-store",
      }
    );

    const recaptchaResult =
      (await recaptchaResponse.json()) as RecaptchaResponse;

    if (!recaptchaResult.success) {
      console.error(
        "reCAPTCHA verification failed:",
        recaptchaResult["error-codes"]
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "CAPTCHA verification failed. Please try again.",
        },
        {
          status: 400,
        }
      );
    }

    /*
      CAPTCHA is valid here.

      Later this is where we will:
      - send an email
      - store the inquiry
      - or forward it to another service
    */

    console.log("Contact form received:", {
      name,
      email,
      phone,
      subject,
      message,
    });

    return NextResponse.json({
      success: true,
      message: "Thank you. Your message has been received.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}