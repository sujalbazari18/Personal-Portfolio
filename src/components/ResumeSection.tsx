
import React from 'react';
import { 
  GraduationCap, 
  Award,
  MapPin,
  FileDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

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

  return (
    <div className="bg-[#1a1f2e] text-white py-16">
      <div className="container mx-auto px-4">
        {/* Education Section */}
        <section id="education" className="mb-20">
          <div className="flex items-center justify-center mb-12">
            <div className="bg-[#1a3246] rounded-full p-4 mr-4">
              <GraduationCap className="text-[#00a0a0]" size={32} />
            </div>
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* First Education Card */}
            <div className="relative mb-8">
              <div className="flex items-start">
                <div className="hidden md:flex flex-col items-center mr-6">
                  <div className="h-12 w-12 rounded-full border-2 border-[#00a0a0] bg-[#1a3246] flex items-center justify-center">
                    <GraduationCap size={20} className="text-[#00a0a0]" />
                  </div>
                  <div className="h-full w-px bg-gray-600 mt-2"></div>
                </div>
                
                <Card className="w-full bg-[#262b3c] border-l-4 border-[#00a0a0]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white">Lovely Professional University</h3>
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
            <div className="relative">
              <div className="flex items-start">
                <div className="hidden md:flex flex-col items-center mr-6">
                  <div className="h-12 w-12 rounded-full border-2 border-[#00a0a0] bg-[#1a3246] flex items-center justify-center">
                    <GraduationCap size={20} className="text-[#00a0a0]" />
                  </div>
                </div>
                
                <Card className="w-full bg-[#262b3c] border-l-4 border-[#00a0a0]">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-white">Santi Niketan School</h3>
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
          <div className="flex items-center justify-center mb-12">
            <div className="bg-[#2b2515] rounded-full p-4 mr-4">
              <Award className="text-[#f59e0b]" size={32} />
            </div>
            <h2 className="text-3xl font-bold">Certifications & Achievements</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {/* First Certification Card */}
            <Card className="bg-[#262b3c] border-l-4 border-[#f59e0b]">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Data Structures & Algorithms (DSA) Certification</h3>
                  <span className="text-gray-300">Dec 2024</span>
                </div>
                <div className="mt-2 text-gray-300">Udemy</div>
              </CardContent>
            </Card>
            
            {/* Second Certification Card */}
            <Card className="bg-[#262b3c] border-l-4 border-[#f59e0b]">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Privacy and Security of Social Media and Cloud Computing</h3>
                  <span className="text-gray-300">Dec 2024</span>
                </div>
                <div className="mt-2 text-gray-300">NPTEL</div>
              </CardContent>
            </Card>
            
            {/* Achievements Card */}
            <Card className="bg-[#262b3c] border-l-4 border-[#f59e0b]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">Achievements</h3>
                <ul className="list-disc list-inside text-gray-200 space-y-2 ml-2">
                  <li>Achieved 1580+ rating on LeetCode with 400+ solved problems</li>
                  <li>Earned 2-star rating on CodeChef showcasing competitive programming proficiency</li>
                  <li>Secured top 10 rank in Capture the Flag (CTF) competition</li>
                  <li>Participated in "Incredible India V" cultural showcase</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
        
        {/* Download CV Button */}
        <div className="text-center mt-12">
          <Button 
            variant="default"
            className="bg-[#00a0a0] hover:bg-[#008080] text-white inline-flex items-center gap-2 px-6 py-2 rounded-md"
            onClick={handleDownloadCV}
          >
            Download CV
            <FileDown size={18} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ResumeSection;
