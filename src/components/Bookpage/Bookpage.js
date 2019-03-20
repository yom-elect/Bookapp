import React from 'react'; 
import './Bookpage.css';
import ball2  from './ball2.PNG';
import book from './book.PNG';
import next from './icons8-circled-right-48.png';



export  const Bookpage=({onRouteChange}) =>{
    return (
        <section className="section">
            <article className="br3 ba  shadow-5 b--black-10 mv4 w-150 w-100-m w-25-l mw6 center">
                <main className="pa4 black-80">
                
                    <div className="body mt0">
            <div className="balls ">
            <svg className="ball1" width="54" height="75" viewBox="0 0 55 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16.5" cy="37.5" r="37.5" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="100.279" y1="-22.2467" x2="-24.437" y2="87.0968" gradientUnits="userSpaceOnUse">
            <stop stop-color="#2DEEF9"/>
            <stop offset="1" stop-color="#E084F1"/>
            </linearGradient>
            </defs>
            </svg>

            <img className="ball2" src={ball2} alt="ball2"/>
            </div>
                <div className="book-image "><img  className="book mt6"src={book} alt="book"/></div>
                <div className="intro">
                    <h1 className="b light-blue ">Read Books</h1>    
                    <p>Create your account to get started. After that, you can share books and make friends.</p>        
                </div>
                <div className="route ">
                <div class="rect-pg1"/>
                <div class="rect1-pg1  "/>
 	            <div class="rect2-pg1"/>
            <img onClick={()=>onRouteChange('review')} className="next ml7 pt5" src={next} alt="next"/>
            </div>
            <div className="lh-copy mt3">
                        <p  onClick={()=>onRouteChange('review')} className="b pb4 mb3 mt4 f5 link dim black db pointer underline">Skip Intro</p>
                    </div>
                    <svg className=" bot" width="220" height="113" viewBox="0 0 220 113" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="84.2011" cy="135.9" r="135.533" transform="rotate(-15.8189 84.2011 135.9)" fill="url(#paint0_linear)" fill-opacity="0.15"/>
                    <defs>
                    <linearGradient id="paint0_linear" x1="320.408" y1="-84.5435" x2="-144.406" y2="322.979" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2DEEF9"/>
                    <stop offset="1" stop-color="#E084F1"/>
                    </linearGradient>
                    </defs>
                    </svg>
            </div> 
                </main>
                </article>
        </section>
        
    );
}