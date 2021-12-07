//1. IMPORTACIONES
import React from 'react'
import Contain from './Contain'


export default function Main() {
      return (
          <div>
              <div id="div2" class="justify-between items-center">
                  <div class="flex justify-between items-center bg-gray-800  pr-20 p-20">
                      <div class="flex justify-between items-center">
                          <div class="p-5">
                              <h1 class="text-6xl font-bold text-white py-2">
                                  Say hello to ReactJS
                              </h1>
                              <p class="bg-gray-800 text-sm text-white">
                                  You will learn how to use the most popular
                                  frontend library, and become a super Ninja
                                  developer.
                              </p>
                              <a
                                  href="/"
                                  class="py-2 px-3 mt-4 px-6 font-bold text-grey-800 bg-white inline-block rounded"
                              >
                                  Awesome!
                              </a>
                          </div>
                      </div>
                  </div>
              </div>

              <Contain />
          </div>
      );
}




//2.FUNCIONES




//3. EXPORTACIONES