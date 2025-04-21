import React from 'react';

const ResumeSection = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-serif font-bold text-center mb-10 tracking-widest relative section-underline">
          RESUME
        </h2>
        {/* Resume Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-portfolio-blue">Education</h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-portfolio-dark">Master of Science in Computer Science</h4>
              <p className="text-gray-600">University of Example, City, State</p>
              <p className="text-gray-600">2018 - 2020</p>
              <p className="text-gray-700 mt-2">Relevant coursework: Data Structures and Algorithms, Database Systems, Artificial Intelligence.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-portfolio-dark">Bachelor of Science in Software Engineering</h4>
              <p className="text-gray-600">University of Example, City, State</p>
              <p className="text-gray-600">2014 - 2018</p>
              <p className="text-gray-700 mt-2">GPA: 3.8/4.0, Dean's List all semesters.</p>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-3xl font-semibold mb-4 text-portfolio-blue">Experience</h3>
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-portfolio-dark">Senior Software Engineer</h4>
              <p className="text-gray-600">Tech Company, City, State</p>
              <p className="text-gray-600">2020 - Present</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Led a team of 5 engineers in developing and maintaining web applications.</li>
                <li>Implemented new features that increased user engagement by 30%.</li>
                <li>Improved code quality and reduced technical debt through code reviews and refactoring.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-portfolio-dark">Software Engineer Intern</h4>
              <p className="text-gray-600">Startup Company, City, State</p>
              <p className="text-gray-600">Summer 2017</p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Developed a mobile app feature using React Native.</li>
                <li>Assisted in testing and debugging software applications.</li>
                <li>Contributed to the design and implementation of new features.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
