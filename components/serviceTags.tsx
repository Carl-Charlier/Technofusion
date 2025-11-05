"use client";

import services from "../data/services";

export default function ServiceTags() {
  return (
    <div className="relative w-full flex justify-center items-center my-20">
      <div className="goal-text text-center text-white text-lg md:text-xl max-w-3xl z-10">
        <h1>
          Our goal is clear, build great things with great people. If that’s something we can do together, I’d love to chat.
        </h1>
      </div>

      {/* === Floating Tags Positioned Around the Goal Text === */}
      {services.map((service, index) => (
        <div
          key={index}
          className={`service-tag-floating service-tag-${index + 1} bg-[#101010]`}
        >
          <span>{service.icon} {service.name}</span>
        </div>
      ))}
    </div>
  );
}
