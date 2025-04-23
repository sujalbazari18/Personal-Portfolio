import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  FileDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ResumeSection = () => {
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Try to download the file
  
    try {
      const link = document.createElement('a');
      link.href = "Sujal_bazari_1.pdf";
      link.download = "Sujal_bazari_1.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast.success("Resume download started!");
    } catch (error) {
      toast.error("Could not download resume. Please try again later.");
      console.error("Download error:", error);
    }
  };

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mx-auto">My Resume</h2>
        
        <div className="mt-12 flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-portfolio-blue/10 rounded-full mr-4">
                <Briefcase className="text-portfolio-blue" size={24} />
              </div>
              <h3 className="text-2xl font-bold">Work Experience</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
              
              <div className="relative flex items-start group">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full border-2 border-portfolio-blue flex items-center justify-center bg-white z-10">
                    <Calendar size={16} className="text-portfolio-blue" />
                  </div>
                  <div className="h-full w-px bg-gray-300"></div>
                </div>
                
                <div className="ml-6 bg-white p-5 rounded-lg shadow-md border-l-4 border-portfolio-blue">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-bold text-portfolio-dark">Full-Stack Web Development</h4>
                    <span className="text-sm text-gray-500">Mar 2025</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin size={14} className="mr-1" />
                    <span>Freelance | Remote</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    <li>Developed scalable web applications using modern technologies</li>
                    <li>Implemented responsive design and cross-browser compatibility</li>
                    <li>Collaborated with clients to define project requirements</li>
                    <li>Optimized application performance and user experience</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative flex items-start group">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full border-2 border-portfolio-blue flex items-center justify-center bg-white z-10">
                    <Calendar size={16} className="text-portfolio-blue" />
                  </div>
                  <div className="h-full w-px bg-gray-300"></div>
                </div>
                
                <div className="ml-6 bg-white p-5 rounded-lg shadow-md border-l-4 border-portfolio-blue">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-bold text-portfolio-dark">Web Development Internship</h4>
                    <span className="text-sm text-gray-500">Jan 2025</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin size={14} className="mr-1" />
                    <span>Tech Startup | Learning & Development</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    <li>Gained hands-on experience in modern web development practices</li>
                    <li>Assisted in developing internal tools and web applications</li>
                    <li>Participated in code reviews and agile development processes</li>
                    <li>Learned advanced frontend and backend development techniques</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative flex items-start group">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full border-2 border-portfolio-blue flex items-center justify-center bg-white z-10">
                    <Calendar size={16} className="text-portfolio-blue" />
                  </div>
                </div>
                
                <div className="ml-6 bg-white p-5 rounded-lg shadow-md border-l-4 border-portfolio-blue">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="text-lg font-bold text-portfolio-dark">Technical Support</h4>
                    <span className="text-sm text-gray-500">Jul 2024</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MapPin size={14} className="mr-1" />
                    <span>IT Services | Customer Support</span>
                  </div>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    <li>Provided technical support for software and hardware issues</li>
                    <li>Diagnosed and resolved complex technical problems</li>
                    <li>Documented troubleshooting steps and customer interactions</li>
                    <li>Maintained high customer satisfaction ratings</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div>
              <div className="flex items-center mb-8">
                <div className="p-3 bg-portfolio-teal/10 rounded-full mr-4">
                  <GraduationCap className="text-portfolio-teal" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                <div className="relative flex items-start group">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full border-2 border-portfolio-teal flex items-center justify-center bg-white z-10">
                      <GraduationCap size={16} className="text-portfolio-teal" />
                    </div>
                    <div className="h-full w-px bg-gray-300"></div>
                  </div>
                  
                  <div className="ml-6 bg-white p-5 rounded-lg shadow-md border-l-4 border-portfolio-teal">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-lg font-bold text-portfolio-dark">Lovely Professional University</h4>
                      <span className="text-sm text-gray-500">2022 - 2026</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin size={14} className="mr-1" />
                      <span>Jalandhar, Punjab</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      B.Tech in Computer Science and Engineering<br/>
                      <span className="text-portfolio-teal">CGPA: 7.84</span>
                    </p>
                  </div>
                </div>
                
                <div className="relative flex items-start group">
                  <div className="flex flex-col items-center">
                    <div className="h-10 w-10 rounded-full border-2 border-portfolio-teal flex items-center justify-center bg-white z-10">
                      <GraduationCap size={16} className="text-portfolio-teal" />
                    </div>
                  </div>
                  
                  <div className="ml-6 bg-white p-5 rounded-lg shadow-md border-l-4 border-portfolio-teal">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-lg font-bold text-portfolio-dark">Santi Niketan School</h4>
                      <span className="text-sm text-gray-500">2020 - 2021</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <MapPin size={14} className="mr-1" />
                      <span>Balotra, Rajasthan</span>
                    </div>
                    <p className="text-gray-700 text-sm">
                      12th with Science<br/>
                      <span className="text-portfolio-teal">Percentage: 88.60%</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-16">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-portfolio-amber/10 rounded-full mr-4">
                  <Award className="text-portfolio-amber" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Certifications & Achievements</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Data Structures & Algorithms (DSA) Certification</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Udemy</span>
                    <span className="text-gray-500">Dec 2024</span>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-2">Privacy and Security of Social Media and Cloud Computing</h4>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">NPTEL</span>
                    <span className="text-gray-500">Dec 2024</span>
                  </div>
                </div>
                
                <div className="bg-white p-5 rounded-lg shadow-md">
                  <h4 className="font-bold mb-1">Achievements</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm mt-2">
                    <li>Achieved 1580+ rating on LeetCode with 400+ solved problems</li>
                    <li>Earned 2-star rating on CodeChef showcasing competitive programming proficiency</li>
                    <li>Secured top 10 rank in Capture the Flag (CTF) competition</li>
                    <li>Participated in "Incredible India V" cultural showcase</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="default"
            className="btn-primary inline-flex items-center gap-2"
            onClick={handleDownloadCV}
          >
            Download CV
            <FileDown size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
