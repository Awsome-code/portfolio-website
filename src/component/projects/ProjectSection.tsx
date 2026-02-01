import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects">
      <Header title="Recent Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <ProjectCard
          title="Modern Dashboard UI"
          imagePath="/images/wordpress.jpg"
          description="A responsive admin 
                dashboard with data visulization charts, user management, and real-time analytics. Built with React, 
                Tailwind css, and Recharts."
        />

        <ProjectCard
          title="Modern Health Care Website"
          imagePath="/images/wordpress1.jpg"
          description="A responsive WordPress website with custom-designed pages, optimized performance, 
          and SEO-friendly structure. Features include dynamic content management, mobile-first design, and integration of plugins for security, speed, and scalability."
        />

        <ProjectCard
          title="Social Media Creative Design ( Practice Project )"
          imagePath="/images/practice.jpg"
          description="Practice-based graphic design project focused on creating visually engaging creatives for social media and digital marketing. 
          Designed using Adobe Photoshop with emphasis on color theory, typography, layout composition, and brand-style experimentation."
        />
        <ProjectCard
          title="Social Media Creative Design ( Practice Project )"
          imagePath="/images/practice1.jpg"
          description="Practice-based graphic design project focused on creating visually engaging creatives for social media and digital marketing. 
          Designed using Adobe Photoshop with emphasis on color theory, typography, layout composition, and brand-style experimentation."
        />

        
      </div>
    </section>
  );
}
