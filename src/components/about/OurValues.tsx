const values = [
  {
    number: "01",
    title: "Acceptance & Inclusion",
    description:
      "A culture where different voices belong.",
  },
  {
    number: "02",
    title: "Community",
    description:
      "Thought-provoking conversation and empowerment of the underrepresented.",
  },
  {
    number: "03",
    title: "Cinema With Purpose",
    description:
      "Work that is exhilarating, enthralling and educational.",
  },
];

export default function OurValues() {
  return (
    <section className="bg-white py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8">
        <div>
          <h2 className="font-[family-name:var(--font-cormorant)] text-[40px] leading-none font-medium md:text-[46px]">
            Our Values
          </h2>

          <div className="mt-4 h-[2px] w-8 bg-[#e69a2d]" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-0 md:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={value.number}
              className={`py-8 md:px-10 md:py-4 ${
                index !== values.length - 1
                  ? "border-b border-neutral-200 md:border-r md:border-b-0"
                  : ""
              } ${index === 0 ? "md:pl-0" : ""}`}
            >
              <div className="font-[family-name:var(--font-cormorant)] text-[48px] leading-none text-[#e69a2d]">
                {value.number}
              </div>

              <h3 className="mt-6 text-[13px] font-semibold tracking-[0.12em] uppercase">
                {value.title}
              </h3>

              <p className="mt-4 max-w-[290px] text-[14px] leading-6 text-neutral-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}