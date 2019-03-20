import React from 'react';
import './Signup.css'


export const Signup =({onRouteChange}) => {
    return (
        <section>
            <article className="br3 ba  shadow-5 b--black-10 mv4 w-150 w-100-m w-25-l mw6 center">
                <main className="pa4 black-80">
                
                <div className="top-cirl">
                <svg className=" rndt-2" width="242" height="160" viewBox="0 0 242 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="92.5" cy="10.5" r="149.5" fill="url(#paint0_linear)" fill-opacity="0.61"/>
                        <defs>
                        <linearGradient id="paint0_linear" x1="242" y1="143" x2="-191.5" y2="-290.5" gradientUnits="userSpaceOnUse">
                        <stop offset="0.00452904" stop-color="white"/>
                        <stop offset="0.626054" stop-color="#79ABFC"/>
                        <stop offset="1" stop-color="#606CFF"/>
                        </linearGradient>
                        </defs>
                 </svg>
                
                </div>
                <div className="mid-rnd">
                <svg className="overlay" width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g >
                <path d="M7.82609 37.565H1.56522C0.701217 37.565 0 36.8654 0 35.9998C0 35.1342 0.701217 34.4346 1.56522 34.4346H7.82609C8.69009 34.4346 9.3913 35.1342 9.3913 35.9998C9.3913 36.8654 8.69009 37.565 7.82609 37.565Z" fill="white"/>
                <path d="M16.078 17.6433C15.6773 17.6433 15.2766 17.4899 14.9714 17.1847L10.5449 12.7567C9.93294 12.1447 9.93294 11.1555 10.5449 10.5435C11.1569 9.93147 12.1462 9.93147 12.7582 10.5435L17.1846 14.9715C17.7966 15.5835 17.7966 16.5727 17.1846 17.1847C16.8794 17.4915 16.4787 17.6433 16.078 17.6433Z" fill="white"/>
                <path d="M36 9.3913C35.136 9.3913 34.4348 8.69165 34.4348 7.82609V1.56522C34.4348 0.699652 35.136 0 36 0C36.864 0 37.5652 0.699652 37.5652 1.56522V7.82609C37.5652 8.69165 36.864 9.3913 36 9.3913Z" fill="white"/>
                <path d="M55.9221 17.6433C55.5214 17.6433 55.1207 17.4899 54.8154 17.1847C54.2034 16.5727 54.2034 15.5835 54.8154 14.9715L59.2419 10.5435C59.8523 9.93147 60.8431 9.93147 61.4551 10.5435C62.0671 11.1555 62.0671 12.1447 61.4551 12.7567L57.0287 17.1847C56.7234 17.4915 56.3228 17.6433 55.9221 17.6433Z" fill="white"/>
                <path d="M70.4347 37.565H64.1739C63.3099 37.565 62.6086 36.8654 62.6086 35.9998C62.6086 35.1342 63.3099 34.4346 64.1739 34.4346H70.4347C71.2987 34.4346 71.9999 35.1342 71.9999 35.9998C71.9999 36.8654 71.2987 37.565 70.4347 37.565Z" fill="white"/>
                <path d="M35.9999 15.6523C24.7804 15.6523 15.6521 24.7807 15.6521 36.0002C15.6521 44.2176 20.6404 51.621 28.1738 54.764L28.1738 64.1741H43.826V54.764C51.3594 51.621 56.3478 44.2176 56.3478 36.0002C56.3478 24.7807 47.2194 15.6523 35.9999 15.6523Z" fill="white"/>
                <path d="M32.8695 71.9999H39.1304C41.7239 71.9999 43.826 69.8978 43.826 67.3042H28.1738C28.1738 69.8978 30.2759 71.9999 32.8695 71.9999Z" fill="white"/>
                </g>
                </svg>
                </div>
                <div className="intro pt5 pb4">
                    <h1 className="b light-blue  pt6">Welcome!</h1>    
                    <p>Create your accountto get started. After that, you can share books and make friends. </p>        
                </div>
                <div>
                <svg className="behind o-30" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="28.3534" cy="28.3536" r="27.8227" transform="rotate(-15.8189 28.3534 28.3536)" fill="url(#paint0_linear)"/>
                <defs>
                <linearGradient id="paint0_linear" x1="76.8427" y1="-16.8998" x2="-18.5757" y2="66.7576" gradientUnits="userSpaceOnUse">
                <stop stop-color="#2DEEF9"/>
                <stop offset="1" stop-color="#E084F1"/>
                </linearGradient>
                </defs>
                </svg>
                </div>
                <div className="measure ">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0 pb4">
        
                    <div className="mt3">
                    <label className="label3 pb2 db fw7 lh-copy f7 o-20 " htmlFor="email-address">EMAIL</label>
                    <input pattern=".+@globex.com"  required className="pa2 shadow input-reset ba b--light-gray hover-bg-light-silver hover-white w-100" type="email" name="email-address"  id="email-address" placeholder="ducawizard@gmail.com" />
                    </div>
                    <div className="mv3">
                    <label className="label2 b o-20 db pb2 fw7 lh-copy f7 bg-lighter-grey" htmlFor="password">PASSWORD</label>
                    <input className="b pa2 shadow input-reset ba  hover-bg-light-silver hover-white w-100 b--light-gray" type="password" name="password"  id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
                   /><svg className="secure1" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M18.7018 1.75853C16.6175 0.624479 14.3063 1.67707e-07 12.1936 1.67707e-07C10.0809 1.67707e-07 7.76972 0.624479 5.68538 1.75853C3.46871 2.96253 1.72468 4.65112 0.76522 6.50958C0.547806 6.92923 0.694324 7.45379 1.09134 7.6836C1.21423 7.75354 1.35129 7.78851 1.48363 7.78851C1.77194 7.78851 2.05552 7.62365 2.20204 7.33888C3.46871 4.88593 6.14384 3.1224 8.83316 2.2831C7.70355 3.29226 6.98041 4.80599 6.98041 6.49459C6.98041 9.53705 9.31525 12 12.1889 12C15.0673 12 17.3974 9.53206 17.3974 6.49459C17.3974 4.80599 16.679 3.29725 15.5446 2.2831C18.2339 3.1224 20.9091 4.88593 22.1757 7.33888C22.3223 7.62864 22.6058 7.78851 22.8941 7.78851C23.0265 7.78851 23.1588 7.75354 23.2864 7.6836C23.6835 7.45379 23.83 6.92923 23.6126 6.50958C22.6626 4.65112 20.9185 2.96253 18.7018 1.75853ZM12.1936 8.76769C11.0073 8.76769 10.0478 7.75853 10.0431 6.50458C10.0384 5.23564 10.9931 4.22148 12.1936 4.21649C12.2314 4.21649 12.2645 4.21649 12.3023 4.22148C12.2314 4.41132 12.1936 4.62115 12.1936 4.83597C12.1983 5.7552 12.8978 6.49459 13.7675 6.49459C13.9707 6.49459 14.1645 6.45462 14.3441 6.37968C14.3441 6.41465 14.3488 6.44463 14.3488 6.4796C14.3441 7.74854 13.3941 8.7627 12.1936 8.76769Z" fill="#1E1D20" fill-opacity="0.1"/>
                   </svg>
                    </div>
                    <div className="mv3">
                    <label className="label1 b o-20 db fw7 lh-copy pb2 f7 " htmlFor="password"><p>TYPE PASSWORD AGAIN</p></label>
                    <input className="b pa2 shadow1 input-reset ba hover-bg-light-silver hover-white w-100 b--light-gray" type="password" name="password"  id="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                   /><svg className="secure2" width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M18.7018 1.75853C16.6175 0.624479 14.3063 1.67707e-07 12.1936 1.67707e-07C10.0809 1.67707e-07 7.76972 0.624479 5.68538 1.75853C3.46871 2.96253 1.72468 4.65112 0.76522 6.50958C0.547806 6.92923 0.694324 7.45379 1.09134 7.6836C1.21423 7.75354 1.35129 7.78851 1.48363 7.78851C1.77194 7.78851 2.05552 7.62365 2.20204 7.33888C3.46871 4.88593 6.14384 3.1224 8.83316 2.2831C7.70355 3.29226 6.98041 4.80599 6.98041 6.49459C6.98041 9.53705 9.31525 12 12.1889 12C15.0673 12 17.3974 9.53206 17.3974 6.49459C17.3974 4.80599 16.679 3.29725 15.5446 2.2831C18.2339 3.1224 20.9091 4.88593 22.1757 7.33888C22.3223 7.62864 22.6058 7.78851 22.8941 7.78851C23.0265 7.78851 23.1588 7.75354 23.2864 7.6836C23.6835 7.45379 23.83 6.92923 23.6126 6.50958C22.6626 4.65112 20.9185 2.96253 18.7018 1.75853ZM12.1936 8.76769C11.0073 8.76769 10.0478 7.75853 10.0431 6.50458C10.0384 5.23564 10.9931 4.22148 12.1936 4.21649C12.2314 4.21649 12.2645 4.21649 12.3023 4.22148C12.2314 4.41132 12.1936 4.62115 12.1936 4.83597C12.1983 5.7552 12.8978 6.49459 13.7675 6.49459C13.9707 6.49459 14.1645 6.45462 14.3441 6.37968C14.3441 6.41465 14.3488 6.44463 14.3488 6.4796C14.3441 7.74854 13.3941 8.7627 12.1936 8.76769Z" fill="#1E1D20" fill-opacity="0.1"/>
                   </svg>
                   
                    </div>
                    {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                </fieldset>
                <div className="">
                    <input onClick={() => onRouteChange('readbook')} className="b signup white ph3 pv2 input-reset  ba b--light-gray  grow pointer f6 " type="submit" value="SIGN UP" />
                </div>
                <div className="lh-copy mt3">
                  <span className="dark-blue o-50 f6  pb4">Already have an account?<span  className="f6 link dim pointer underline b"> Login</span></span>
                </div>
                </div>








                </main>
            </article>
        </section>
    );
}