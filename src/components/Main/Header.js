import React from 'react'
import myimage from '../../images/ironhack-logo-xs.png';
import myimage2 from '../../images/menu-top-xs.png';
export default function Header() {
    return (
        <div>
            <nav
                id="div1"
                class="flex items-right justify-between flex-wrap bg-gray-800 p-6"
            >
                <div class="flex items-right flex-shrink-0 text-white mr-6">
                    <img src={myimage} alt="img1" />
                </div>
                <div
                    id="img2"
                    class="flex items-right flex-shrink-0 text-white mr-6"
                >
                    <img src={myimage2} alt="img2" />
                </div>
            </nav>
        </div>
    );
}


