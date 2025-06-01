import React from 'react';

const skills = [
  'JavaScript', 'HTML', 'CSS', 'Python', 'C++',
  'React', 'Node.js', 'Next.js','REST APIs',
 'Team Collaboration', 'Critical Thinking',
];

const tools = ['Tableau', 'Google Sheets', 'Photoshop'];

const Projects = () => (
  <div className="space-y-6 text-black text-sm">
    {/* Skills & Tools */}
    <div className="flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-300 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2">Tools</h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool, index) => (
            <span
              key={index}
              className="bg-gray-300 dark:bg-gray-800 px-3 py-1 rounded-full text-xs font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>

    {/* Project 1 */}
    <div>
      <h3 className="text-lg font-semibold">
        PixMix <span className="text-xs text-gray-500">March 2025</span>
      </h3>
      <p>
        A web-based image manipulation tool built with React and the HTML5 Canvas API. Allows users to pixelate,
        invert, and stylize images directly in-browser. Deployed to Vercel with GitHub-integrated CI/CD.
      </p>
    </div>

    {/* Project 2 */}
    <div>
      <h3 className="text-lg font-semibold">
        Quiz App <span className="text-xs text-gray-500">May 2025</span>
      </h3>
      <p>
        Developed in a team of four using HTML, CSS, and JavaScript. Led backend integration with the Open Trivia
        Database API, enabling dynamic quiz settings like category, difficulty, and number of questions.
      </p>
    </div>
  </div>
);

export default Projects;
