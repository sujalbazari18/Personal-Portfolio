import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 relative after:content-[''] after:block after:mx-auto after:w-full after:max-w-xs md:after:max-w-md after:h-2 after:bg-portfolio-teal after:rounded-full after:mt-2 tracking-widest">
          ABOUT
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1472"
              alt="Workspace setup"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-portfolio-blue">
              A Little Bit About Me
            </h3>
            <p className="text-gray-700 mb-4">
              I am a passionate full-stack developer with over 5 years of experience in
              creating web and mobile applications. My expertise lies in crafting
              efficient, scalable, and user-friendly solutions.
            </p>
            <p className="text-gray-700 mb-4">
              I have a strong foundation in software engineering principles and a proven
              track record of delivering high-quality products. I enjoy staying up-to-date
              with the latest technologies and trends in the industry.
            </p>
            <p className="text-gray-700">
              When I'm not coding, I love to explore new places, read books, and spend
              time with my family.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
