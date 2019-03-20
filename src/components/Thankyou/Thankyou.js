import React from 'react';
import './Thankyou.css';


export const Thankyou = () =>
{
 return (
    <section className="section">
    <article className=" br3 ba  shadow-5 b--black-10 mv4 w-150 w-100-m w-25-l mw6 center">
        <main className="main1 pa4 black-80">
            <div className="body-thank">
                <div className="success">
                <svg width="136" height="136" viewBox="0 0 136 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="68" cy="68" r="68" fill="url(#paint0_linear)" fill-opacity="0.6"/>
                <path d="M56.518 104.746C56.2799 104.746 56.0441 104.699 55.8242 104.608C55.6042 104.517 55.4043 104.384 55.2359 104.215L32.2051 81.1833L34.768 78.6205L56.327 100.18L100.872 41.1875L103.764 43.371L57.968 104.021C57.8118 104.23 57.6121 104.404 57.3827 104.529C57.1533 104.654 56.8995 104.728 56.6388 104.746C56.6013 104.746 56.559 104.746 56.518 104.746Z" fill="white"/>
                <defs>
                <linearGradient id="paint0_linear" x1="-114" y1="-144" x2="412.88" y2="129.7" gradientUnits="userSpaceOnUse">
                <stop stop-color="#72FF99"/>
                <stop offset="1" stop-color="#00D23A"/>
                </linearGradient>
                </defs>
                </svg>
            </div>
            <div className=" pt5 pb4">
                    <h1 className="appr b  pt6">Thank you!</h1>    
                    <p className="narr">You have submitted your first book review. Now it's time to make some friends. </p>        
            </div>
            <div className="addup">
            <input  className="b signup white ph3 pv2 input-reset  ba b--light-gray  grow pointer f6 " type="submit" value="ADD FRIENDS" />
            </div>
            <div className="interest pt6">
                <p>YOU MAY ALSO BE INTERESTED IN:</p>
            </div>
                <div>
                <svg width="95" height="120" viewBox="0 0 95 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="95" height="120">
                <rect width="95" height="120" rx="8" fill="#B8B3F6"/>
                </mask>
                <g mask="url(#mask0)">
                <rect y="-1" width="95" height="140" fill="url(#pattern0)"/>
                </g>
                <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use href="#image0" transform="translate(0 -0.00339127) scale(0.00296736 0.00201357)"/>
                </pattern>

               </defs>
                </svg>
            </div>
            </div>
            
        </main>
        <footer className="pa2 footer input-reset ba b--light-gray " >
                <div>
                   <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M16.5183 9.91935C16.2524 9.91935 16.0367 10.1362 16.0367 10.4036V19.0315H10.8682V13.6155C10.8682 13.3481 10.6525 13.1312 10.3865 13.1312H6.61355C6.3476 13.1312 6.13189 13.3481 6.13189 13.6155V17.91C6.13189 18.1774 6.3476 18.3943 6.61355 18.3943C6.87951 18.3943 7.09521 18.1774 7.09521 17.91V14.0997H9.90487V19.0315H0.963314V7.17783L8.49996 1.10501L16.2171 7.32319C16.4247 7.49051 16.7278 7.45677 16.8941 7.24813C17.0604 7.0394 17.0271 6.73471 16.8195 6.56739L8.80116 0.106421C8.62519 -0.0354737 8.37473 -0.0354737 8.19876 0.106421L0.180461 6.56739C0.0663883 6.65932 1.83738e-08 6.79823 1.83738e-08 6.94529V19.5157C1.83738e-08 19.7831 0.215622 20 0.481657 20H16.5183C16.7844 20 17 19.7831 17 19.5157V10.4036C17 10.1361 16.7844 9.91935 16.5183 9.91935Z" fill="#384F7D" fill-opacity="0.45"/>
                 </svg>  
                 <p>Timeline</p>
                </div>
                <div>
                <svg width="31" height="24" viewBox="0 0 31 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.04 5V11" stroke="#384F7D" stroke-miterlimit="10"/>
                <path d="M25.0667 5H28.8267V21H1.25342V5H5.01342" stroke="#384F7D" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M17.5468 3C16.1618 3 15.0401 3.895 15.0401 5C15.0401 3.895 13.9184 3 12.5334 3H5.01343V17H12.5334C13.9184 17 15.0401 17.895 15.0401 19C15.0401 17.895 16.1618 17 17.5468 17H25.0668V3H17.5468Z" stroke="#384F7D" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
                <p> My Books</p>
                </div>
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.625 19.375C17.6961 19.375 19.375 17.6961 19.375 15.625C19.375 13.5539 17.6961 11.875 15.625 11.875C13.5539 11.875 11.875 13.5539 11.875 15.625C11.875 17.6961 13.5539 19.375 15.625 19.375Z" stroke="#A5B0C4" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M15.625 14.375V16.875" stroke="#A5B0C4" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M14.375 15.625H16.875" stroke="#A5B0C4" stroke-miterlimit="10" stroke-linecap="square"/>
                <path d="M9.375 15.3788L4.5925 17.8925L5.625 11.8706L1.25 7.60625L7.29625 6.7275L10 1.25L12.7038 6.7275L18.75 7.60625L16.875 9.43375" stroke="#A5B0C4" stroke-miterlimit="10" stroke-linecap="square"/>
                </svg>
                <p>Add Review</p>
                </div>
                <div>
                <svg width="17" height="23" viewBox="0 0 17 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8432 18.6487L15.6996 16.5428V11.3423C15.6996 8.12745 13.4989 5.40761 10.4978 4.55598V1.96003C10.4978 0.879256 9.60166 0 8.50001 0C7.39837 0 6.50219 0.879256 6.50219 1.96003V4.55602C3.50122 5.4077 1.30041 8.12749 1.30041 11.3423V16.5428L0.156783 18.6487C-0.0634628 19.0542 -0.0510083 19.5315 0.190026 19.9255C0.431105 20.3194 0.854609 20.5546 1.32299 20.5546H5.86334C5.94068 21.9158 7.09351 23 8.50001 23C9.90647 23 11.0594 21.9158 11.1367 20.5546H15.6771C16.1454 20.5546 16.5689 20.3194 16.81 19.9255C17.051 19.5315 17.0634 19.0542 16.8432 18.6487ZM7.55928 1.96003C7.55928 1.45107 7.98127 1.03707 8.49997 1.03707C9.01867 1.03707 9.44066 1.45107 9.44066 1.96003V4.33945C9.13268 4.29983 8.81871 4.27917 8.49997 4.27917C8.18114 4.27917 7.86721 4.29988 7.55928 4.33945V1.96003ZM2.35754 11.3423C2.35754 8.0195 5.11304 5.31614 8.50001 5.31614C11.887 5.31614 14.6425 8.0195 14.6425 11.3423V16.1137H2.35754V11.3423ZM8.50001 21.9629C7.67668 21.9629 6.99836 21.3434 6.92327 20.5546H10.0769C10.0017 21.3434 9.32326 21.9629 8.50001 21.9629ZM15.9037 19.3917C15.8805 19.4296 15.8121 19.5176 15.6771 19.5176H1.32299C1.188 19.5176 1.11954 19.4296 1.09642 19.3917C1.07325 19.3539 1.02627 19.2532 1.08978 19.1363L2.16807 17.1508H14.8321L15.9103 19.1363C15.9738 19.2532 15.9267 19.3539 15.9037 19.3917Z" fill="#384F7D" fill-opacity="0.45"/>
                <path d="M8.49994 6.69824C5.88987 6.69824 3.76636 8.78154 3.76636 11.3422C3.76636 11.6285 4.003 11.8607 4.2949 11.8607C4.58681 11.8607 4.82344 11.6285 4.82344 11.3422C4.82344 9.35339 6.47272 7.73531 8.49994 7.73531C8.79185 7.73531 9.02849 7.50311 9.02849 7.21678C9.02849 6.93035 8.79185 6.69824 8.49994 6.69824Z" fill="#384F7D" fill-opacity="0.45"/>
                </svg>
                <p>Notifications</p>
                </div>
            </footer>
    </article>
    </section>



 );

}