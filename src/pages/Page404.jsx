import React from "react";

const Page404 = () => {
  return (
    <section className="h-dvh w-full p-4">
      <div className="max-w-6xl mx-auto h-full grid place-content-center text-center gap-7">
        <h1 className="md:text-9xl text-6xl font-bold font-[Poppins] bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Oops!
        </h1>
        <p className="md:text-2xl text-1xl font-medium">404-PAGE NOT FOUND</p>
        <p className="md:text-1xl text-sm font-medium">
          😕{" "}
          <span className="text-nowrap">
            Oops! The page you're looking for doesn't exist.
          </span>{" "}
          <br /> It may have been moved, deleted, or the URL may be incorrect.
        </p>

        <a
          href="/"
          className="md:p-3 p-2 font-[Poppins] bg-sky-500 hover:bg-sky-700 duration-500 text-white rounded-sm md:my-5 my-2"
        >
          Back to Homepage
        </a>
      </div>
    </section>
  );
};

export default Page404;
