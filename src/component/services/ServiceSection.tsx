import Header from "@/component/general/Header";
import ServiceCard from "./ServiceCard";

export default function ServiceSection() {
  return (
    <section id="services">
      {/* Header        */}
      <Header title="Whats I Offer" />
      <div className="  w-[60%] mx-auto mt-[-60] ">
      <p className="flex items-center justify-center mb-10 text-gray-200 text-center ">I help businesses build a strong online presence through creative design, modern web development, data-driven digital marketing, and effective SEO strategies.</p>
      </div>
      <div className="  w-[90%] sm:[80%] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
        <ServiceCard
          name="Graphic Design"
          icon="/images/ux.png"
          description="Visually appealing designs that strengthen your brand identity and leave a lasting impression."
        />
        <ServiceCard
          name="Web Development"
          icon="/images/s2.png"
          description="Responsive, fast, and user-friendly websites built to deliver great user experience and performance."
        />
        <ServiceCard
          name="Digital Marketing"
          icon="/images/s3.png"
          description="Strategic marketing solutions designed to increase reach, engagement, and conversions."
        />
        <ServiceCard
          name="SEO"
          icon="/images/s4.png"
          description="Effective SEO strategies that improve search rankings and drive organic traffic to your website."
        />
      </div>

      
    </section>
  );
}
