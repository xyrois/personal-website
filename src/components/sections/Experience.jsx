import React from 'react';

const Experience = () => (
  <div className="space-y-6 text-sm text-black dark:text-white">
    {/* Education */}
    <div>
      <h2 className="text-xl font-bold mb-2">Education</h2>
      <p><strong>Hunter College</strong> — Pursuing B.S. in Computer Science, GPA: 3.7</p>
      <p><strong>Bard High School Early College</strong> — A.A. Degree + High School Diploma</p>
    </div>

    {/* Highlights */}
    <div>
      <h2 className="text-xl font-bold mb-2">Experience Highlights</h2>
      <ul className="list-disc list-inside ml-2">
        <li>Built AI apps during a Headstarter fellowship, mentored by engineers from Amazon & Bloomberg</li>
        <li>Freelance tutor helping students improve in STEM subjects (K–10th)</li>
        <li>Selected for GSWEP — a Basta/Google program focused on technical & career growth</li>
      </ul>
    </div>
  </div>
);

export default Experience;
