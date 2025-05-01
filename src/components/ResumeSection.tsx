
import React, { useEffect } from 'react';
import { 
  GraduationCap, 
  Award,
  MapPin,
  FileDown,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ResumeSection = () => {
  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault();
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

  useEffect(() => {
    // Animation for timeline elements with staggered delay
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
      item.classList.add('opacity-0', 'translate-y-8');
      setTimeout(() => {
        item.classList.remove('opacity-0', 'translate-y-8');
        item.classList.add('opacity-100', 'translate-y-0');
      }, 300 + index * 200);
    });

    // Animation for certification cards
    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, index) => {
      card.classList.add('opacity-0', 'scale-95');
      setTimeout(() => {
        card.classList.remove('opacity-0', 'scale-95');
        card.classList.add('opacity-100', 'scale-100');
      }, 500 + index * 150);
    });
  }, []);

  return (
    <div className="bg-[#1a1f2e] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Education Section */}
        <section id="education" className="mb-20">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <div className="bg-[#1a3246] rounded-full p-4 mr-4 shadow-lg shadow-[#00a0a0]/20">
              <GraduationCap className="text-[#00a0a0]" size={32} />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* First Education Card */}
            <div className="relative mb-8 timeline-item transition-all duration-500 ease-out">
              <div className="flex items-start">
                <div className="hidden md:flex flex-col items-center mr-6">
                  <div className="h-12 w-12 rounded-full border-2 border-[#00a0a0] bg-[#1a3246] flex items-center justify-center shadow-[0_0_15px_rgba(0,160,160,0.3)]">
                    <GraduationCap size={20} className="text-[#00a0a0]" />
                  </div>
                  <div className="h-full w-px bg-gradient-to-b from-[#00a0a0] to-transparent mt-2"></div>
                </div>
                
                <Card className="w-full bg-[#262b3c] border-l-4 border-[#00a0a0] hover:shadow-[0_5px_20px_rgba(0,160,160,0.2)] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00a0a0] transition-colors duration-300">Lovely Professional University</h3>
                      <span className="text-gray-300">2022 - 2026</span>
                    </div>
                    <div className="flex items-center text-gray-300 mb-3">
                      <MapPin size={16} className="mr-2" />
                      <span>Jalandhar, Punjab</span>
                    </div>
                    <p className="text-gray-200">
                      B.Tech in Computer Science and Engineering<br/>
                      <span className="text-[#00a0a0] font-medium">CGPA: 7.84</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Second Education Card */}
            <div className="relative timeline-item transition-all duration-500 ease-out">
              <div className="flex items-start">
                <div className="hidden md:flex flex-col items-center mr-6">
                  <div className="h-12 w-12 rounded-full border-2 border-[#00a0a0] bg-[#1a3246] flex items-center justify-center shadow-[0_0_15px_rgba(0,160,160,0.3)]">
                    <GraduationCap size={20} className="text-[#00a0a0]" />
                  </div>
                </div>
                
                <Card className="w-full bg-[#262b3c] border-l-4 border-[#00a0a0] hover:shadow-[0_5px_20px_rgba(0,160,160,0.2)] transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-[#00a0a0] transition-colors duration-300">Santi Niketan School</h3>
                      <span className="text-gray-300">2020 - 2021</span>
                    </div>
                    <div className="flex items-center text-gray-300 mb-3">
                      <MapPin size={16} className="mr-2" />
                      <span>Balotra, Rajasthan</span>
                    </div>
                    <p className="text-gray-200">
                      12th with Science<br/>
                      <span className="text-[#00a0a0] font-medium">Percentage: 88.60%</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Certifications & Achievements Section */}
        <section id="certifications" className="mb-12">
          <div className="flex items-center justify-center mb-12 animate-fade-in">
            <div className="bg-[#2b2515] rounded-full p-4 mr-4 shadow-lg shadow-[#f59e0b]/20">
              <Award className="text-[#f59e0b]" size={32} />
            </div>
            <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* First Certification Card */}
            <Collapsible>
              <Card className="bg-[#262b3c] border-l-4 border-[#f59e0b] cert-card hover:shadow-[0_5px_20px_rgba(245,158,11,0.2)] transition-all duration-300">
                <CardContent className="p-6">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white hover:text-[#f59e0b] transition-colors duration-300 text-left">Data Structures & Algorithms (DSA) Certification</h3>
                        <div className="mt-2 text-gray-300 text-left">Udemy</div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-300">Dec 2024</span>
                        <ChevronRight className="w-5 h-5 ml-2 text-gray-400 transform transition-transform duration-300 collapsible-icon" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4 text-gray-300">
                    <Separator className="my-3 bg-gray-700" />
                    <p className="text-sm">
                      Comprehensive certification covering advanced data structures and algorithms concepts
                      including graph algorithms, dynamic programming, and optimization techniques.
                      Completed with a 95% score on the final assessment.
                    </p>
                  </CollapsibleContent>
                </CardContent>
              </Card>
            </Collapsible>
            
            {/* Second Certification Card */}
            <Collapsible>
              <Card className="bg-[#262b3c] border-l-4 border-[#f59e0b] cert-card hover:shadow-[0_5px_20px_rgba(245,158,11,0.2)] transition-all duration-300">
                <CardContent className="p-6">
                  <CollapsibleTrigger className="w-full">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="text-xl font-bold text-white hover:text-[#f59e0b] transition-colors duration-300 text-left">Privacy and Security of Social Media and Cloud Computing</h3>
                        <div className="mt-2 text-gray-300 text-left">NPTEL</div>
                      </div>
                      <div className="flex items-center">
                        <span className="text-gray-300">Dec 2024</span>
                        <ChevronRight className="w-5 h-5 ml-2 text-gray-400 transform transition-transform duration-300 collapsible-icon" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-4 text-gray-300">
                    <Separator className="my-3 bg-gray-700" />
                    <p className="text-sm">
                      In-depth exploration of security challenges in social media platforms and cloud environments.
                      Covered encryption methods, privacy regulations, and best practices for secure data handling
                      in distributed systems.
                    </p>
                  </CollapsibleContent>
                </CardContent>
              </Card>
            </Collapsible>
            
            {/* Achievements Card with Animation */}
            <Card className="bg-[#262b3c] border-l-4 border-[#f59e0b] cert-card hover:shadow-[0_5px_20px_rgba(245,158,11,0.2)] transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 relative">
                  <span className="relative inline-block">
                    Achievements
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#f59e0b] animate-[expandWidth_2s_ease_forwards]"></span>
                  </span>
                </h3>
                <ul className="list-none text-gray-200 space-y-3 ml-2">
                  {[
                    "Achieved 1580+ rating on LeetCode with 400+ solved problems",
                    "Earned 2-star rating on CodeChef showcasing competitive programming proficiency",
                    "Secured top 10 rank in Capture the Flag (CTF) competition",
                    "Participated in \"Incredible India V\" cultural showcase"
                  ].map((achievement, index) => (
                    <li key={index} className="pl-6 relative achievement-item opacity-0 animate-[fadeIn_0.5s_ease_forwards]" style={{ animationDelay: `${0.3 + index * 0.2}s` }}>
                      <Award className="absolute left-0 top-1 text-[#f59e0b]" size={16} />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Download CV Button */}
        <div className="text-center mt-12">
          <Button 
            variant="default"
            className="bg-[#00a0a0] hover:bg-[#008080] text-white inline-flex items-center gap-2 px-6 py-6 rounded-md transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[0_5px_20px_rgba(0,160,160,0.4)]"
            onClick={handleDownloadCV}
          >
            <span className="text-lg">Download CV</span>
            <FileDown size={20} className="animate-bounce-soft" />
          </Button>
        </div>
      </div>

      {/* Fixed the style tag by removing the jsx attribute */}
      <style>
        {`
        @keyframes expandWidth {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .collapsible-icon {
          transition: transform 0.3s ease;
        }
        
        [data-state="open"] .collapsible-icon {
          transform: rotate(90deg);
        }
        `}
      </style>
    </div>
  );
};

export default ResumeSection;
