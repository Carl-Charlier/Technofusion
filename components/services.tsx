import OverviewContainer from "./overview-container";

export default function Services() {
  return (
    <section className="w-full flex justify-center mt-8 relative">
      <div className="w-full bg-[#181715] rounded-t-3xl py-8 px-4 md:px-8 relative overflow-hidden">
        {/* === Section Title === */}
        <h1 className="text-3xl md:text-4xl font-light text-center">
          <span className="text-white font-normal">It's Simple:</span>{" "}
          <span className="text-orange-500 font-normal">Building</span>{" "}
          <span className="text-[#f5deb3]">for</span>
        </h1>

        <h2 className="text-3xl md:text-5xl text-center mt-1">
          <span className="text-white font-bold">Unlimited </span>
          <span className="text-orange-500">Possibilities</span>
        </h2>

        {/* === Overview Section === */}
        <OverviewContainer />

        {/* === Converging Service Tags Section === */}
        <div className="relative mt-12">
          <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-8 max-w-[1000px] mx-auto px-3 py-6">

            {/* LEFT COLUMN - 3 Tags */}
            <div className="flex flex-col items-end gap-3 justify-self-end pr-4">
              <div className="service-tag tag-left-1 bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                <span className="text-[1rem]">💻</span>
                <span>Software & Systems</span>
              </div>
              <div className="service-tag tag-left-2 bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                <span className="text-[1rem]">🤖</span>
                <span>AI & Machine Learning</span>
              </div>
              <div className="service-tag tag-left-3 bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                <span className="text-[1rem]">📊</span>
                <span>Data Science</span>
              </div>
            </div>

            {/* CENTER COLUMN - Goal Text */}
            <div className="max-w-[400px] text-center text-white text-sm leading-relaxed">
              <h1>
                Our goal is clear — build great things with great people. If that's
                something we can do together, I'd love to chat.
              </h1>
            </div>

            {/* RIGHT COLUMN - 2 Tags */}
            <div className="flex flex-col items-start gap-3 justify-self-start pl-4">
              <div className="service-tag tag-right-1 bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                <span className="text-[1rem]">⚙️</span>
                <span>Automation Systems</span>
              </div>
              <div className="service-tag tag-right-2 bg-white text-[#181715] text-xs font-semibold px-4 py-2 rounded-full border border-black/10 shadow-md hover:-translate-y-[2px] hover:scale-[1.02] hover:shadow-lg transition flex items-center gap-1.5">
                <span className="text-[1rem]">🌐</span>
                <span>AI Integration</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
