import React from "react";

import desktopBg from "../assets/img/vr-banner-1920-1080.jpg";

const PageBanner = ({ bannerTitle }) => {
  return (
    <div className="text-white lg:h-[400px] md:h-[350px] h-[250px] relative p-4">
      <figure className="absolute inset-0 -z-1 w-full overflow-hidden">
        <picture>
          <img
            src={desktopBg}
            alt="Hero"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </picture>
      </figure>

      <div className="max-w-7xl mx-auto flex items-center justify-start h-full">
        <h1 className="text-left lg:text-6xl md:text-4xl text-3xl  font-semibold font-[Poppins]">
          {bannerTitle}
        </h1>
      </div>
    </div>
  );
};

export default PageBanner;
