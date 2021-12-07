import React from "react";
import Intro from "./Intro";


export default function Main() {
  return (
    <>
    <div class="flex justify-start">
      <div class="flex justify-start bg-gray-800  pr-20 p-20">
        <div class="flex justify-start">
          <div class="p-5">
            <h1 class="text-2xl font-bold text-white py-2">
              Say hello to ReactJS
            </h1>
            <p class="bg-gray-800 text-sm text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis vitae qui distinctio ex soluta? Voluptates, ea! Esse,
              natus. Quas possimus laboriosam consectetur deserunt ea sapiente.
              Dicta ipsam atque voluptatem provident!
            </p>
            <a
              href="/"
              class="py-2 px-3 mt-4 px-6 text-grey-900 bg-white inline-block rounded">
              Awesome!
            </a>
          </div>
        </div>
      </div>
    </div>

        <Intro />

    </>
  );
}
