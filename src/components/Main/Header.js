import React from 'react'


export default function Header() {
    return (
        <div>
            <nav id="div1" class="flex items-right justify-between flex-wrap bg-gray-800 p-6">
                <div class="flex items-right flex-shrink-0 text-white mr-6">
                    <img
                        src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/ironhack-logo-xs.png"
                        alt="imagelogo"
                    />
                </div>
                <div class="block">
                    <button class="flex items-right px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                        <svg
                            class="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </nav>
        </div>
    );
}


