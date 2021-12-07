import React from "react";

function Header() {
    return (
<>

<div>
  <header class="bg-gradient-to-r from-gray-800 to-gray-900 mix-blend-multiply">
  <div>

    <div class="relative">
      <div class="flex justify-between items-center max-w-20xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-20">
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <img class="h-20 w-auto sm:h-10" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png" alt=""/>
          </a>
        </div>

        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a href="#">
          <img class="h-20 w-auto sm:h-10" src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/menu-top-xs-dark.png" alt=""/>
          </a>

        </div>
      </div>
    </div>
    </div>



    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 bg-gray-100"></div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div class="absolute inset-0">

            <div class="absolute inset-0 "></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 class="text-left text-5xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-6xl leading-normal mt-0 mb-2">
              <span class="block text-white">Say hello to <br/> ReactJS</span>
             </h1>
            <p class="mt-6 max-w-lg text-left text-xl text-indigo-200 sm:max-w-3xl">
              You will learn how to use <br/>the most popular frontend library,<br/>and become a super ninja developer.
            </p>
            <div class="mt-10 ml-0 max-w-sm max-w-none flex justify-start">
              <div class="space-y-0 flex sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-indigo-50 sm:px-8">
                  Awesome!
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</header>
</div>


</>
    )
}


export default Header