import React from 'react';

const skills = [
  'JavaScript', 'HTML', 'CSS', 'Python', 'C++',
  'React', 'Node.js', 'Next.js','REST APIs',
  'Team Collaboration', 'Critical Thinking',
];

const tools = ['GitHub','Tableau', 'Google Sheets', 'Photoshop', 'Figma'];

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
              className="bg-gray-300 dark:bg-gray-800 px-3 py-1 rounded-full text-black dark:text-white text-xs font-medium"
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
              className="bg-gray-300 dark:bg-gray-800 px-3 py-1 rounded-full text-black dark:text-white text-xs font-medium"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>

      <p>
        [ Click on the title of the projects to check them out! ]
      </p>

    {/* Project 3 */}
    <div>
      <h3 className="text-lg font-semibold">
        <a 
          href="https://personal-website-pi-swart-62.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:underline"
        >
          Personal Portfolio Website
        </a>{' '}
        <span className="text-xs text-gray-500">June 2025</span>
      </h3>
      <p>
        Inspired by <a href="https://www.sharyap.com/" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
        sharyap.com</a> and her <a href="https://www.youtube.com/watch?v=_tWh4cYCTv0&t" target="_blank" rel="noopener noreferrer" className="text-black hover:underline">
        video</a>  
      </p>
      <p>
        A custom-built interactive portfolio showcasing my work, skills, and contact information. 
        Features draggable modal windows, a dark/light theme toggle, and a dynamic contact form that 
        sends messages via email and logs submissions to Google Sheets using Make (Integromat) webhooks. 
        Built with React and Tailwind CSS for a clean, responsive, desktop-like experience.
      </p>
    </div>

    {/* Project 2 */}
    <div>
      <h3 className="text-lg font-semibold">
        <a 
          href="https://judykuang.github.io/Quiz-App/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:underline"
        >
          Quiz App
        </a>{' '}
        <span className="text-xs text-gray-500">May 2025</span>
      </h3>
      <p>
        Collaboratively built a dynamic quiz application using HTML, CSS, and JavaScript in a team of four. 
        Led backend integration with the Open Trivia Database API to enable user-customizable quizzes, 
        including real-time selection of category, difficulty, and number of questions. Designed for an 
        interactive and responsive user experience.
      </p>
    </div>

    {/* Project 1 */}
    <div>
      <h3 className="text-lg font-semibold">
        <a 
          href="https://pix-mix.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-black hover:underline"
        >
          PixMix
        </a>{' '}
        <span className="text-xs text-gray-500">March 2025</span>
      </h3>
      <p>
        Created an interactive web tool that transforms user uploaded images with real-time visual effects 
        like pixelation, color inversion, and blur, all processed in the browser using the HTML5 Canvas API. 
        Built with React and deployed to Vercel with automated CI/CD via GitHub.
      </p>
    </div>
  </div>
);

export default Projects;
