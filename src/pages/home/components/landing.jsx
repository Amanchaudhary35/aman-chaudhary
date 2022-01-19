import React from "react";
import ButtonComponent from '../../../components/button';
import Typewriter from 'typewriter-effect';

const NameString = [
    'V',
    'I',
    'N',
    'E',
    'E',
    'T',
    '',
    'T',
    'A',
    'N',
    'W',
    'A',
    'R',
]

const LandingComponent = (props) => {
    return (
        <div className="hor-row sticky-component landing-component-main">
            <div className="hor-row app-content-container">
                <div className="left-side-container">
                    <div className="hor-row intro-label-container">
                        Hii, I am 
                    </div>
                    <h1 className="hor-row name-info-container">
                        { NameString.map((letter)=>{
                            return letter ? (<span>{letter}</span>)
                                    : (<><br/> &emsp;&emsp;</>)
                        }) }
                    </h1>
                    <h3 className='hor-row post-container'>
                        <Typewriter
                        options={{
                            strings: [ 'Javascript Developer', 'Project Architecture', 'UI-UX Developer', ],
                            autoStart: true,
                            loop: true,
                        }}
                        />
                    </h3>
                    <h5>
                        I am a developer based in Lagos, Nigeria focused on creating interactive digital experiences on the web, working with brands and industry leaders such as DISNEY, PAYSTACK, PRINTIVO, and WILD amongst others to achieve this.
                    </h5>
                    <ButtonComponent/>
                </div>
                <div className="left-side-container right-side-container">
                    <div className="developer-image-container"></div>
                </div>
            </div>
        </div>
    )
}

export default LandingComponent;