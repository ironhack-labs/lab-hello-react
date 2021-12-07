import React from "react";

export default function Intro() {
  return (
    <>
      <div class="blogs__wraper bg-white  py-20 px-20">
        <div class="flex justify-between items-center">
          <div class="blogs bg-white mr-5">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
              class="" alt="algo1"
            />
            <div class="p-5">
              <h1 class="text-2xl font-bold text-gray-800 py-2">
                Declarative
              </h1>
              <p class="bg-white text-sm text-black">
                React makes it painless to create interactive UIs.
              </p>
            </div>
          </div>

          <div class="blogs bg-white mr-5">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
              class="" alt="algo2"
            />
            <div class="p-5">
              <h1 class="text-2xl font-bold text-gray-800 py-2">
                Components
              </h1>
              <p class="bg-white text-sm text-black">
                Build encapsulated components that manage their state.
              </p>
            </div>
          </div>

          <div class="blogs bg-white mr-5">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
              class="" alt="algo3"
            />
            <div class="p-5">
              <h1 class="text-2xl font-bold text-gray-800 py-2">
                Single-Way
              </h1>
              <p class="bg-white text-sm text-black">
              A set of immutable values are passed to the component's.
              </p>
            </div>
          </div>

          <div class="blogs bg-white mr-5">
            <img
              src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" class="" alt="algo4"
            />
            <div class="p-5">
              <h1 class="text-2xl font-bold text-gray-800 py-2">
                JSX
              </h1>
              <p class="bg-white text-sm text-black">
              Statically-typed, designed to run on modern browsers.
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
