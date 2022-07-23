import React from 'react'
import './Hero.css';

export default function Hero(){
    return(
        <section className='heroBG'>
            <div className='flex-container'>
                <div className='flex-container'>
                    <div className='flex-child'>        
                        <h1>Say hello to<br/>React</h1>
                        <h2>You will learn how to use<br/>
                        the most popular frontend library,<br/>
                        and become a usper Ninja developer.<br/>
                        <button className='btn-cta'>Awesome!</button>
                        </h2>
                    </div>
                    <div className='flex-child'></div>
                </div>
            </div>

            </section>
    )
    
}
