import React, { useState, useEffect } from 'react';
import IconButton from './components/IconButton';
import Modal from './components/Modal';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Contact from './components/sections/Contact';
import Links from './components/sections/Links';
import Resume from './components/sections/Resume';
import ThemeToggle from './components/ThemeToggle';

const sectionComponents = {
  about: <About />,
  experience: <Experience />,
  projects: <Projects />,
  contact: <Contact />,
  links: <Links />,
  resume: <Resume />,
};

const App = () => {
  const [openWindows, setOpenWindows] = useState([]);
  const [zCounter, setZCounter] = useState(10);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileActiveSection, setMobileActiveSection] = useState(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openWindow = (type, event) => {
    if (isMobile) {
      setMobileActiveSection(type);
      return;
    }

    const existing = openWindows.find((w) => w.type === type);
    if (existing) {
      bringToFront(existing.id);
      return;
    }

    const rect = event.currentTarget.getBoundingClientRect();
    const modalWidth = type === 'projects' ? 1000 : 500;
    const modalHeight =
      type === 'about' ? 450 :
      type === 'experience' ? 600 :
      type === 'contact' ? 500 :
      type === 'links' ? 450 :
      type === 'projects' ? 650 : 500;

    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let x = rect.left - rect.width;
    let y = rect.top + window.scrollY + rect.height - 100;

    // Clamp position to viewport
    x = Math.max(20, Math.min(x, viewportWidth - modalWidth - 20));
    y = Math.max(20, Math.min(y, viewportHeight - modalHeight - 20));

    const position = { x, y };

    const newWindow = {
      id: Date.now(),
      type,
      z: zCounter,
      position,
    };

    setOpenWindows((prev) => [...prev, newWindow]);
    setZCounter((prev) => prev + 1);
  };

  const closeWindow = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const bringToFront = (id) => {
    setOpenWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, z: zCounter } : w
      )
    );
    setZCounter((prev) => prev + 1);
  };

  const closeMobileSection = () => {
    setMobileActiveSection(null);
  };

  // Mobile Layout
  if (isMobile) {
    return (
      <div className="min-h-screen transition-all duration-500 bg-star-light text-white relative overflow-y-auto">
        <ThemeToggle />

        {/* Mobile Home View */}
        {!mobileActiveSection && (
          <div className="flex flex-col items-center py-10 px-6 min-h-screen">
            <div className="w-full max-w-md bg-white text-black rounded-md shadow-lg border border-gray-600 mb-6">
              <div className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-t-md font-mono text-sm">
                home
              </div>

              <div className="p-8 flex flex-col items-center">
                <h1 className="text-4xl font-bold mb-3 text-center">
                  Hi! <span className="text-orange-400">I'm Brinta</span>
                </h1>
                <p className="text-gray-700 mb-8 text-base text-center">
                  aspiring developer eager to learn, grow, and contribute through real-world projects
                </p>

                {/* Vertical Button Stack */}
                <div className="w-full flex flex-col gap-4">
                  <button
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-mono text-black dark:text-white p-4 rounded-2xl transition duration-200 text-lg w-full shadow-md border border-gray-600"
                    onClick={() => setMobileActiveSection('about')}
                  >
                    About
                  </button>
                  
                  <button
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-mono text-black dark:text-white p-4 rounded-2xl transition duration-200 text-lg w-full shadow-md border border-gray-600"
                    onClick={() => setMobileActiveSection('experience')}
                  >
                    Experience
                  </button>
                  
                  <button
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-mono text-black dark:text-white p-4 rounded-2xl transition duration-200 text-lg w-full shadow-md border border-gray-600"
                    onClick={() => setMobileActiveSection('projects')}
                  >
                    Projects
                  </button>
                  
                  <button
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-mono text-black dark:text-white p-4 rounded-2xl transition duration-200 text-lg w-full shadow-md border border-gray-600"
                    onClick={() => setMobileActiveSection('contact')}
                  >
                    Contact
                  </button>
                  
                  <button
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-mono text-black dark:text-white p-4 rounded-2xl transition duration-200 text-lg w-full shadow-md border border-gray-600"
                    onClick={() => setMobileActiveSection('links')}
                  >
                    Links
                  </button>
                  
                  <button
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 font-mono text-black dark:text-white p-4 rounded-2xl transition duration-200 text-lg w-full shadow-md border border-gray-600"
                    onClick={() => window.open('/Brinta_Kundu_CV.pdf', '_blank')}
                  >
                    CV
                  </button>
                </div>
              </div>
            </div>

            <footer className="text-center text-sm text-gray-600 dark:text-gray-400 pb-6">
              © 2025 Brinta Kundu
            </footer>
          </div>
        )}

        {/* Mobile Section View */}
        {mobileActiveSection && (
          <div className="fixed inset-0 bg-star-light overflow-y-auto z-50">
            <div className="min-h-screen flex flex-col">
              <div className="bg-white text-black m-4 rounded-md shadow-lg border border-gray-600 flex-1 flex flex-col">
                <div className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white font-mono flex justify-between items-center px-4 py-3 rounded-t-md sticky top-0 z-10">
                  <span className="capitalize text-sm">{mobileActiveSection}</span>
                  <button 
                    onClick={closeMobileSection} 
                    className="text-xl font-bold"
                  >
                    [ x ]
                  </button>
                </div>
                <div className="p-6 overflow-auto flex-1">
                  {sectionComponents[mobileActiveSection]}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Desktop Layout (unchanged)
  return (
    <div className="min-h-screen transition-all duration-500 bg-star-light text-white relative overflow-hidden flex items-center justify-center">
      <ThemeToggle />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[55vw] max-w-[900px] bg-white text-black rounded-md shadow-lg border border-gray-600 z-0">
        <div className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white px-4 py-2 rounded-t-md font-mono text-sm">
          home
        </div>

        <div className="p-10 flex flex-col items-center">
          <h1 className="text-6xl font-bold mb-3 text-center">
            Hi! <span className="text-orange-400">I'm Brinta</span>
          </h1>
          <p className="text-gray-700 mb-8 text-lg text-center">
            aspiring developer eager to learn, grow, and contribute through real-world projects
          </p>

          {/* BUTTON GRID */}
          <div className="text-white grid grid-cols-4 gap-6">
            {/* Row 1 */}
            <IconButton label="About" onClick={(e) => openWindow('about', e)} />
            <IconButton label="Experience" onClick={(e) => openWindow('experience', e)} />
            <IconButton label="Projects" onClick={(e) => openWindow('projects', e)} />
            <IconButton label="Contact" onClick={(e) => openWindow('contact', e)} />

            {/* Row 2 */}
            <IconButton label="Links" onClick={(e) => openWindow('links', e)} />

            {/* Resume button using JS open */}
            <IconButton 
              label="CV"
              onClick={() => window.open('/Brinta_Kundu_CV.pdf', '_blank')}
            />

            {/* Invisible placeholders to keep the grid 4×2 */}
            <div className="invisible">
              <IconButton label="" />
            </div>
            <div className="invisible">
              <IconButton label="" />
            </div>
          </div>
        </div>
      </div>

      {/* Render Windows */}
      {[...openWindows]
        .sort((a, b) => a.z - b.z)
        .map((win) => (
          <Modal
            key={win.id}
            title={win.type}
            zIndex={win.z}
            initialPosition={win.position}
            onClose={() => closeWindow(win.id)}
            onClick={() => bringToFront(win.id)}
            maxHeight={
              win.type === 'about' ? 400 :
              win.type === 'work' ? 600 :
              win.type === 'contact' ? 500 :
              win.type === 'links' ? 450 :
              win.type === 'projects' ? 650 : 500
            }
            customWidth={
              win.type === 'projects' ? '1000px' :
              win.type === 'experience' ? '600px' : undefined
            }
          >
            {sectionComponents[win.type]}
          </Modal>
        ))}

      <footer className="absolute bottom-4 w-full text-center text-sm text-gray-600 dark:text-gray-400 z-0">
        © 2025 Brinta Kundu
      </footer>
    </div>
  );
};

export default App;