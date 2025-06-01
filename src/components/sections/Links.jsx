import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const links = [
  {
    name: 'GitHub',
    icon: <Github size={32} />,
    url: 'https://github.com/xyrois',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={32} />,
    url: 'https://www.linkedin.com/in/brinta-kundu-55736a302/',
  },
  {
    name: 'Instagram',
    icon: <Instagram size={32} />,
    url: 'https://instagram.com/xyrois', 
  },
];

const Links = () => (
  <div>
    <h2 className="text-2xl font-bold mb-4">Links</h2>
    <div className="grid grid-cols-3 gap-4 justify-items-center text-center">
      {links.map(({ name, icon, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center bg-gray-300 dark:bg-gray-800 p-4 rounded-lg transition hover:scale-105"
        >
          {icon}
          <span className="mt-2 text-sm text-black">{name}</span>
        </a>
      ))}
    </div>
  </div>
);

export default Links;
