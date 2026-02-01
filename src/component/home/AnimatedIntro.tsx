"use client"
import Typewriter from "typewriter-effect";


export default function AnimatedIntro ( ) {
    return(
        <div className="text-lg sm:text-2xl h-30 px-8 text-center font-medium text-gray-400">
            Hi, I&apos;m Aravan -A  passionate
            <span className="text-indigo-400 font-bold">
                <Typewriter  options={{
                    strings: [
                        "Wordpress Developer",
                        "Digital Marketer",
                        "Nextjs Developer",
                        "React Expert",
                        "Graphic Desiner",
                    ],
                    autoStart: true ,
                    loop: true,
                    delay:75,
                    deleteSpeed:50,
                    wrapperClassName: "inline-block py-6"
                }}/>
            </span> 

        </div>
    )
}