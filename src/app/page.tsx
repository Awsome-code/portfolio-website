import ContactSection from "@/component/contact/ContactSection";

import HeroSection from "@/component/home/hero/HeroSection";
import ServiceSection from "@/component/services/ServiceSection";
import ProjectSection from "@/component/projects/ProjectSection";
import ResumeSection from "@/component/resume/ResumeSection";
import SkillSection from "@/component/skills/SkillSection";
import TestimonialsSection from "@/component/testimonials/TestimonialsSection";
import { Toaster } from "react-hot-toast";




export default function Home() {
  return (
    
           <>
         <HeroSection />  
         <ServiceSection />         
         <ResumeSection />
         <ProjectSection />     
         <SkillSection />
         <TestimonialsSection />
         <ContactSection />
         <Toaster />
        
           </>        
  );
}
