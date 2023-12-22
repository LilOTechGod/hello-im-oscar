import React from 'react';
import Typewriter from 'typewriter-effect';

const TypeWriter = () => {
    return (
        <div className="App">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .pauseFor(2000)
                        .typeString("I'm a Full Stack Software Engineer")
                        .pauseFor(2000)
                        .deleteChars(17)
                        .typeString("Web Developer")
                        .pauseFor(2000)
                        .deleteChars(24)
                        .typeString("Problem Solver")
                        .pauseFor(2000)
                        .start();
                }}
            />
        </div>
    );
};

export default TypeWriter;
