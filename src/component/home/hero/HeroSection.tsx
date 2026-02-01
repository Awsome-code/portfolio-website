import LinkButton from "@/component/general/LinkButton";
import AnimatedIntro from "../AnimatedIntro";
import { LuArrowRight } from "react-icons/lu";
import Particles from "./Particles";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative flex justify-center items-center overflow-hidden flex-col"
    >
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="absolute z-10 flex flex-col items-center">
        {/* glowing image    */}
        <div className="w-35.5 h-37.5 relative">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-lg animate-pluse opacity-50"></div>
         <Image src="/images/Aravan.png" alt="image" className="rounded-full object-cover" fill />
        </div>
        <h1
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl my-6 font-bold tracking-wide text-transparent bg-clip-text
                    bg-linear-to-r from-indigo-500 to-gray-300"
        >
          Hi, I&apos;m a Web Developer
        </h1>
        <AnimatedIntro />
        <LinkButton
          href="#projects"
          text="See my work"
          icon={LuArrowRight}
          rounded
        />
      </div>
    </section>
  );
}
