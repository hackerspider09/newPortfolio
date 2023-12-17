import React from "react";
import Typewriter from "typewriter-effect";
function Typing() {
    return (
        <Typewriter
            options={{
            strings: ['Prasad Khatake'],
            autoStart: true,
            loop: true,
            // delay: 100,
            pauseFor:1000,
            skipAddStyles:false,
            }}
        />
    )
}

export default Typing