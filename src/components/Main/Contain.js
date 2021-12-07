import React from 'react'
import icon1 from '../../images/icon1.png';
import icon2 from '../../images/icon2.png';
import icon3 from '../../images/icon3.png';
import icon4 from '../../images/icon4.png';

export default function Contain() {
      return (
          <div>
              <div class="blogs__wraper bg-white  py-20 px-20">
                  <div class="flex justify-between items-center">
                      <div class="blogs bg-white mr-5">
                          <img id="icons" src={icon1} alt="img1" />
                          <div class="p-2">
                              <h1 class="text-2xl font-bold text-gray-800 py-2">
                                  Declarative
                              </h1>
                              <p class="bg-white text-sm text-black">
                                  React makes it painless to create interactive
                                  UIs.
                              </p>
                          </div>
                      </div>

                      <div class="blogs bg-white mr-5">
                          <img id="icons" src={icon2} class="" alt="img2" />
                          <div class="p-2">
                              <h1 class="text-2xl font-bold text-gray-800 py-2">
                                  Components
                              </h1>
                              <p class="bg-white text-sm text-black">
                                  Build encapsulated components that manage
                                  their state.
                              </p>
                          </div>
                      </div>

                      <div class="blogs bg-white mr-5">
                          <img id="icons" src={icon3} class="" alt="img3" />
                          <div class="p-2">
                              <h1 class="text-2xl font-bold text-gray-800 py-2">
                                  Single-Way
                              </h1>
                              <p class="bg-white text-sm text-black">
                                  A set of immutable values are passed to the
                                  component's.
                              </p>
                          </div>
                      </div>

                      <div class="blogs bg-white mr-5">
                          <img id="icons" src={icon4} class="" alt="img4" />
                          <div class="p-2">
                              <h1 class="text-2xl font-bold text-gray-800 py-2">
                                  JSX
                              </h1>
                              <p class="bg-white text-sm text-black">
                                  Statically-typed, designed to run on modern
                                  browsers.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
}
