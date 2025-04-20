
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">About Me</h2>
        
        <div className="mt-16 flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-2/5">
            <div className="relative">
              <div className="w-full max-w-md mx-auto aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1472" 
                  alt="Sujal Bazari working on code" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-portfolio-blue/10 rounded-full -z-10"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-portfolio-teal/10 rounded-full -z-10"></div>
            </div>
          </div>
          
          <div className="md:w-3/5">
            <h3 className="text-2xl font-bold mb-4 font-serif">Software Engineer & Problem Solver</h3>
            
            <p className="text-gray-700 mb-4">
              Hello! I'm Sujal Bazari, a passionate software engineer with expertise in full-stack development, 
              mobile applications, and system architecture. I love turning complex problems into elegant, 
              efficient solutions through clean code and thoughtful design.
            </p>
            
            <p className="text-gray-700 mb-6">
              With a strong foundation in computer science from Lovely Professional University and experience
              across various projects, I specialize in creating robust applications that deliver exceptional
              user experiences while maintaining solid backend performance.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-portfolio-teal rounded-full mr-2"></div>
                <span className="text-gray-700"><span className="font-medium">Name:</span> Sujal Bazari</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-portfolio-teal rounded-full mr-2"></div>
                <span className="text-gray-700"><span className="font-medium">Email:</span> bazarisujal815@gmail.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-portfolio-teal rounded-full mr-2"></div>
                <span className="text-gray-700"><span className="font-medium">Degree:</span> B.Tech in Computer Science</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-portfolio-teal rounded-full mr-2"></div>
                <span className="text-gray-700"><span className="font-medium">Location:</span> Jalandhar, Punjab</span>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              Beyond coding, I'm passionate about solving algorithmic problems, with a 1580+ rating on LeetCode
              and 400+ solved problems. I'm also involved in community development projects and enjoy participating
              in cultural events like "Incredible India V".
            </p>
            
            <a href="#contact" className="btn-primary">Let's Connect</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
