import React from 'react';

const Experience = () => (
  <div className="space-y-8 text-sm text-black">

    {/* Education */}
    <div>
      <h2 className="text-xl font-bold mb-2">Education</h2>

      <div className="mb-2">
        <div className="flex justify-between">
          <strong>Hunter College</strong>
          <span className="text-gray-500 text-xs">Fall 2023 – Spring 2026</span>
        </div>
        <p className="ml-1 text-gray-700">
          B.S. in Computer Science · GPA: 3.7
        </p>
      </div>

      <div>
        <div className="flex justify-between">
          <strong>Bard High School Early College</strong>
          <span className="text-gray-500 text-xs">Fall 2019 – Spring 2023</span>
        </div>
        <p className="ml-1 text-gray-700">
          A.A. Degree + High School Diploma
        </p>
      </div>
    </div>

    {/* Professional Experience */}
    <div>
      <h2 className="text-xl font-bold mb-2">Professional Experience</h2>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between">
            <strong>Tutor</strong>
            <span className="text-gray-500 text-xs">August 2023 – Present</span>
          </div>

          <ul className="list-disc list-inside ml-2 text-gray-800">
            <li>Provided one-on-one K–12 tutoring focused on academic growth.</li>
            <li>Developed learning strategies to build independence and confidence.</li>
          </ul>
        </div>

        <div>
          <strong>iOS Engineering Intern — Stretchmode (formerly Movement Vault)</strong>
          <ul className="list-disc list-inside ml-2 text-gray-800">
            <li>Built and polished SwiftUI features to improve usability and consistency.</li>
            <li>Supported build, testing, and deployment pipelines.</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Highlights */}
    <div>
      <h2 className="text-xl font-bold mb-2">Experience Highlights</h2>
      <ul className="list-disc list-inside ml-2 text-gray-800">
        <li>
          Built AI applications during a Headstarter fellowship, mentored by engineers
          from Amazon and Bloomberg
        </li>
        <li>
          Freelance tutor helping K–10 students strengthen STEM fundamentals
        </li>
        <li>
          Selected for GSWEP — a Basta/Google program focused on technical and career growth
        </li>
      </ul>
    </div>

  </div>
);

export default Experience;
