import React from "react";
import { Link } from "react-router-dom";

export const Redirect = () => {
  return (
    <main className="mx-auto my-40 flex w-4/5 flex-col items-center justify-between text-gray-50 lg:flex-row">
      <img src="/404.png?url" alt="404: Not Found!" className="font-semibold" />
      <section className="mt-8 flex h-full w-full cursor-default flex-col items-center justify-center text-gray-50 lg:mt-0 lg:w-1/2 lg:items-start">
        <p className="h-fit w-fit text-4xl font-bold lg:text-5xl">Oops!</p>
        <p className="mt-2 h-fit w-fit text-3xl font-medium lg:text-4xl">
          Didn't find anything here.
        </p>
        <br />
        <p className="text-justify text-lg font-normal lg:text-2xl">
          Seems like this page took a brushstroke in the wrong direction. Let's
          navigate back to the main exhibit together.
        </p>
        <br />
        <br />
        <Link
          to="/"
          className="flex h-fit w-fit cursor-pointer items-center justify-between rounded-full bg-gray-200 py-2 pl-3 pr-8 transition-all duration-300 ease-in-out hover:bg-gray-300"
        >
          <div
            className="grid h-14 w-14 place-items-center rounded-full bg-gray-950 text-xl text-gray-50 transition-all duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-200"
            style={{ transform: "rotate(225deg)" }}
          >
            &#10132;
          </div>
          <h5 className="ml-4 text-lg font-bold text-gray-950">Drift Home</h5>
        </Link>
      </section>
    </main>
  );
};