import React from 'react';
import './Review.css';
import next from './icons8-circled-right-48.png';

export const Review = ({onRouteChange}) =>{
    return (
        <section className="">
            <article className="br3 ba  shadow-5 b--black-10 mv4 w-150 w-100-m w-25-l mw6 center">
                <main className="pa4 black-80">
                        <div className="review-body">
                        <div className="top-rnds">
                        <svg className="rondt" width="133" height="63" viewBox="0 0 133 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="66.6696" cy="-3.33189" r="66.1429" transform="rotate(-15.8189 66.6696 -3.33189)" fill="url(#paint0_linear)"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="181.943" y1="-110.913" x2="-44.895" y2="87.966" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#2DEEF9"/>
                        <stop offset="1" stop-color="#E084F1"/>
                        </linearGradient>
                        </defs>
                        </svg>
                        <div class="small"/>
                        </div>
                        <div className="mid-rnds">
                            <div class="elispe1 ">
                                <svg class="star" width="88" height="86" viewBox="0 0 88 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M55 31.9997L44 0.407715L33 31.9997L0 31.9997L26.895 53.0537L16.324 85.5917L44 65.4837L71.676 85.5917L61.105 53.0537L88 31.9997H55Z" fill="white"/>
                            </svg>
                            </div>
                        </div>
                        
                        <div className="intro pt7 pb5">
                    <h1 className="b light-blue  pt6">Review Them</h1>    
                    <p>Create your accountto get started. After that, you can share books and make friends. </p>        
                   </div>
                   <div className="route pt4 ">
                            <div onClick={() => onRouteChange('readbook')} class="rect-1"/>
                            <div class="rect"/>
                            <div class="rect-2"/>
                            <img onClick={() => onRouteChange('welcome')} className="next ml7 pt5" src={next} alt="next"/>
                   </div>
                        
                    <div className="lh-copy mt4">
                        <p onClick={() => onRouteChange('welcome')}  className="b  mb3 mt4 f5 link dim black db pointer underline">Skip Intro</p>
                    </div>

                    <div className="">
                    <svg className="bot-pg2" width="220" height="113" viewBox="0 0 220 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="84.2011" cy="135.9" r="135.533" transform="rotate(-15.8189 84.2011 135.9)" fill="url(#paint0_linear)" fill-opacity="0.15"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="320.408" y1="-84.5435" x2="-144.406" y2="322.979" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2DEEF9"/>
                    <stop offset="1" stop-color="#E084F1"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    </div>
                
                </div>
            </main>
            </article>
        </section>
        
        

    );
}
 