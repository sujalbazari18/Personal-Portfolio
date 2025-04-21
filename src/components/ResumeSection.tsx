import { useState } from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = [
    { id: 'experience', label: 'Experience', icon: <Briefcase className="mr-2" size={18} /> },
    { id: 'education', label: 'Education', icon: <GraduationCap className="mr-2" size={18} /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="mr-2" size={18} /> },
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description: "Led development of enterprise SaaS platform using React, Node.js, and AWS. Improved system performance by 40% and implemented CI/CD pipelines."
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description: "Developed and maintained multiple client websites and applications. Worked with React, Angular, Express, and MongoDB."
    },
    {
      title: "Frontend Developer",
      company: "Creative Web Agency",
      period: "2016 - 2018",
      description: "Created responsive web interfaces for clients across various industries. Specialized in HTML5, CSS3, and JavaScript frameworks."
    }
  ];

  const education = [
    {
      degree: "Master of Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description: "Specialized in Software Engineering with focus on distributed systems and cloud computing."
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "State University",
      period: "2010 - 2014",
      description: "Graduated with honors. Coursework included data structures, algorithms, database systems, and web development."
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2022",
      description: "Professional level certification validating expertise in designing distributed systems on AWS."
    },
    {
      title: "Google Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2021",
      description: "Demonstrates ability to build scalable and highly available applications using Google Cloud technologies."
    },
    {
      title: "MongoDB Certified Developer",
      issuer: "MongoDB Inc.",
      date: "2020",
      description: "Validates skills in developing applications using MongoDB, including data modeling and query optimization."
    }
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-8 relative after:content-[''] after:block after:mx-auto after:w-full after:max-w-xs md:after:max-w-md after:h-2 after:bg-portfolio-teal after:rounded-full after:mt-2 tracking-widest">
          RESUME
        </h2>
        
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-4 py-2 text-sm font-medium ${
                  activeTab === tab.id
                    ? 'bg-portfolio-blue text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                } ${
                  tab.id === 'experience'
                    ? 'rounded-l-lg'
                    : tab.id === 'certifications'
                    ? 'rounded-r-lg'
                    : ''
                } border border-gray-200`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="animate-on-scroll">
          {activeTab === 'experience' && (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-portfolio-blue hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-dark">{exp.title}</h3>
                    <span className="text-sm font-medium text-portfolio-blue bg-portfolio-blue/10 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-portfolio-teal mb-3">{exp.company}</h4>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-portfolio-teal hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-dark">{edu.degree}</h3>
                    <span className="text-sm font-medium text-portfolio-blue bg-portfolio-blue/10 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <h4 className="text-lg text-portfolio-teal mb-3">{edu.institution}</h4>
                  <p className="text-gray-600">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-md border-l-4 border-portfolio-amber hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-portfolio-dark">{cert.title}</h3>
                    <span className="text-sm font-medium text-portfolio-blue bg-portfolio-blue/10 px-3 py-1 rounded-full">
                      {cert.date}
                    </span>
                  </div>
                  <h4 className="text-lg text-portfolio-teal mb-3">{cert.issuer}</h4>
                  <p className="text-gray-600">{cert.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-10 text-center">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
