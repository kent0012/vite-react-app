import desktopBg from "../assets/img/vr-1920-1080.jpg";
import mobileBg from "../assets/img/vr-570-799.jpg";
import starSparkle from "../assets/img/sparkle.png";
import ButtonFilled from "./ButtonFilled";
import ButtonOutlined from "./ButtonOutlined";

const Hero = () => {
  return (
    <section className="w-full min-h-screen absolute top-0 flex items-center justify-center p-4 ">
      <figure className="absolute inset-0 -z-1 w-full h-full overflow-hidden">
        <picture>
          <source srcSet={mobileBg} media="(max-width: 768px)" />
          <source srcSet={desktopBg} media="(min-width: 769px)" />
          <img
            src={desktopBg}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </picture>
      </figure>

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center text-white">
        <button className="flex hover:bg-sky-500 duration-500 cursor-pointer items-center space-x-2 border border-solid border-sky-500 rounded-full px-4 py-2 mb-5">
          <img
            className="w-5 h-5"
            src={starSparkle}
            alt="star sparkle"
            loading="lazy"
          />

          <span className="md:text-xm text-sm font-[Poppins]">
            AI Integration
          </span>
        </button>

        <h1 className="text-4xl leading-[1] sm:text-5xl md:text-6xl lg:text-7xl font-[Poppins] font-semibold">
          Step Into the Future: Experience Reality Like Never Before
        </h1>

        <p className="text-sm sm:text-lg md:text-xl leading-relaxed mt-4 mb-8 font-[Poppins]">
          Immerse in extraordinary adventures with our cutting-edge VR headset.
          Crystal-clear visuals, immersive sound, and ergonomic
          design—experience the future of entertainment today.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <ButtonFilled type="button" btnName="Get Started" />
          <ButtonOutlined type="button" btnName="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
