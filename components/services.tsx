// components/services.tsx
import OverviewContainer from "./overview-container";

export default function Services() {
  return (
    <section className="w-full flex justify-center mt-10">
      <div className="w-full bg-[#181715] rounded-t-3xl py-10 px-6 md:px-12 relative overflow-hidden">
        {/* === Section Title === */}
        <h1 className="text-5xl md:text-6xl font-light text-center">
          <span className="text-white-500 font-normal">Its Simple:</span>
          <span className="text-orange-500 font-normal">Building</span>
          <span className="text-wheat"> for</span>
        </h1>
        <h2 className="text-5xl md:text-7xl text-center mt-2">
          <span className="text-white font-bold">Unlimited </span>
          <span className="text-orange-500">Possibilities</span>
        </h2>

        {/* === Overview Section === */}
        <OverviewContainer />

        {/* === Floating Service Tags === */}
        <div className="service-tags-container">
          <div className="service-tag bg-[#101010]">
            <span>💻 Software & Systems Development</span>
          </div>
          <div className="service-tag bg-[#101010]">
            <span>🤖 Artificial Intelligence (AI) & Machine Learning (ML)</span>
          </div>
          <div className="service-tag bg-[#101010]">
            <span>📊 Data Science & Business Intelligence</span>
          </div>
          <div className="service-tag bg-[#101010]">
            <span>⚙️ Automation & Intelligent Systems</span>
          </div>
          <div className="service-tag bg-[#101010]">
            <span>🌐 AI Integration Across Industries</span>
          </div>
        </div>

        {/* === Closing Statement === */}
        <div className="mt-20 text-center text-white text-lg md:text-xl">
          <h1>
            Our goal is clear, build great things with great people. If that’s something we can do together, I’d love to chat.
          </h1>
        </div>
      </div>
    </section>
  );
}
