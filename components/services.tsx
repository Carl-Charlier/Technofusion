// components/services.tsx
import OverviewContainer from "./overview-container";

export default function Services() {
  return (
    <section className="w-full flex justify-center mt-10">

      <div className="w-full bg-[#181715] rounded-t-3xl py-16 px-6 md:px-12">
                <h1 className="text-5xl md:text-6xl font-light text-center">
                    <span className="text-white-500 font-normal">Its Simple:</span>
          <span className="text-orange-500 font-normal">Building</span>
          <span className="text-wheat"> for</span>
        </h1>
        <h2 className="text-5xl md:text-7xl text-center mt-2">
          <span className="text-white font-bold">Unlimited </span>
          <span className="text-orange-500">Possibilities</span>
        </h2>
        <OverviewContainer />
      </div>
    </section>
  );
}
