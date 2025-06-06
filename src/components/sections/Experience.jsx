import React from 'react';

const Experience = () => (
  <div className="space-y-6 text-sm text-black">
    {/* Education */}
    <div>
      <h2 className="text-xl font-bold mb-2">Education</h2>
      <div className="mb-2">
       <div className="flex justify-between">
          <strong>Hunter College</strong>
          <span className="text-gray-500 text-xs">Fall 2023– Spring 2026</span>
        </div>
        <p className="ml-1 text-gray-700">Pursuing B.S. in Computer Science · GPA: 3.7</p>
      </div>

      <div>
        <div className="flex justify-between">
          <strong>Bard High School Early College</strong>
          <span className="text-gray-500 text-xs">Fall 2019– Spring 2023</span>
        </div>
        <p className="ml-1 text-gray-700">A.A. Degree + High School Diploma</p>
      </div>
    </div>

    {/* Highlights */}
    <div>
      <h2 className="text-xl font-bold mb-2">Experience Highlights</h2>
      <ul className="list-disc list-inside ml-2 text-gray-800">
        <li>Built AI apps during a Headstarter fellowship, mentored by engineers from Amazon & Bloomberg</li>
        <li>Freelance tutor helping students improve in STEM subjects (K–10th)</li>
        <li>Selected for GSWEP — a Basta/Google program focused on technical & career growth</li>
      </ul>
    </div>
  </div>

);

export default Experience;
