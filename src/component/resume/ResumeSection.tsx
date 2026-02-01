import {
  LuAward,
  LuBookOpen,
  LuGraduationCap,
  LuPackage,
  LuServer,
} from "react-icons/lu";
import Header from "../general/Header";
import ResumeCard from "./ResumeCard";
import { RiNextjsFill } from "react-icons/ri";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Education Section    */}
        <div>
          <Header title="Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="B.A (Bachelor of Arts)"
              description="Bachelor of Science in Computer | 
                        Bachelor of Arts (B.A) | Bhupendra Narayan Mandal University (BNMU) | Studied humanities and social sciences, 
                        developing skills in research, communication, analysis, and academic writing."
              date="April 2014 - Dec. 2017"
            />
            <ResumeCard
              icon={LuBookOpen}
              role="Relevant Coursework"
              description="Web Development, Digital Marketing Fundamentals, Social Media Strategy & Analytics, Database Systems, 
              UI/UX Design Principles, Graphic Design Tools, Search Engine Optimization (SEO), Online Advertising (Meta Ads & Google Ads)."
            />
            <ResumeCard
              icon={LuAward}
              role="Social Media Manager"
              description="
              Raghavan Naturopathy Ltd | Managing brand presence across digital platforms, 
              specializing in web development, Meta Ads & Google Ads campaign management, graphic design, and performance-driven social media strategies."
              date="March 2022 - Jan. 2026"
            />
          </div>
        </div>
        {/* Work Experience   */}
        <div>
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="Performance Marketing (Meta & Google Ads)"
              description="Planned, executed, and optimized paid advertising campaigns across Meta (Facebook & Instagram) and
              Google Ads, focusing on audience targeting, conversions, and ROI-driven growth."
            />
            <ResumeCard
              icon={LuServer}
              role="WordPress Website Development"
              description="Designed and developed responsive WordPress websites tailored for performance, usability, and easy content management."
            />
            <ResumeCard
              icon={LuPackage}
              role="Modern Web Development (React & Next.js)"
              description="Built fast, scalable, and SEO-friendly web applications using React and Next.js, ensuring smooth user experience and modern UI."
            />
            <ResumeCard
              icon={LuPackage}
              role="Graphic Design"
              description="Created visually compelling designs including branding, social media creatives, and marketing assets that strengthen brand identity."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
