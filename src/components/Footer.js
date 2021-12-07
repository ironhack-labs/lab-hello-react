import React from "react";

function Footer() {
    return (
<>

<div class="bg-white mt-20">
      <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div class="mt-6 grid grid-cols-3 gap-8 md:grid-cols-4 lg:grid-cols-4">
          <div class="col-span-1 flex justify-center flex-col md:col-span-2 lg:col-span-1">
            <img class="h-50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png" alt="Tuple"/>
            <h1 class="text-4xl font-normal leading-normal mt-0 ml-8 mb-2 text-black">Declarative</h1>
            <h3 class="text-2xl font-normal leading-normal mt-0 ml-8 mb-2 text-gray-600">React makes it <br/>painless to create <br/>interactive UIs </h3>
          </div>
          <div class="col-span-1 flex justify-center flex-col md:col-span-2 lg:col-span-1">
            <img class="h-50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png" alt="Mirage"/>
            <h1 class="text-4xl font-normal leading-normal mt-0 ml-8 mb-2 text-black">Components</h1>
            <h3 class="text-2xl font-normal leading-normal mt-0 ml-8 mb-2 text-gray-600">Build encapsulated <br/>components that<br/>manage their state </h3>
          </div>
          <div class="col-span-1 flex justify-center flex-col md:col-span-2 lg:col-span-1">
            <img class="h-50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png" alt="StaticKit"/>
            <h1 class="text-4xl font-normal leading-normal mt-0 ml-8 mb-2 text-black">Single-Way</h1>
            <h3 class="text-2xl font-normal leading-normal mt-0 ml-8 mb-2 text-gray-600">A set of immutable<br/>values are passed to<br/>the component's.</h3>
          </div>
          <div class="col-span-1 flex justify-center flex-col md:col-span-2 md:col-start-2 lg:col-span-1">
            <img class="h-50" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png" alt="Transistor"/>
            <h1 class="text-4xl font-normal leading-normal mt-0 mb-2 ml-8 text-black">JSX</h1>
            <h3 class="text-2xl font-normal leading-normal mt-0 ml-8 mb-2 text-gray-600">Statically-typed, <br/>designed to run on<br/>modern browsers</h3>
          </div>
        </div>
      </div>
    </div>

    </>
    )
}


export default Footer