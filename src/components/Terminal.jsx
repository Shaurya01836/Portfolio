"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Terminal,
  User,
  Code,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Zap,
  Coffee,
  Music,
  Book,
} from "lucide-react";

export default function UniqueTerminalPortfolioV2() {
  const [activeTab, setActiveTab] = useState("home");
  const [typedContent, setTypedContent] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullContent =
    "Welcome to my unique terminal portfolio! Type 'help' or click on the tabs to explore.";
  const terminalRef = useRef(null);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTypedContent((prev) => {
        if (prev.length < fullContent.length) {
          return fullContent.slice(0, prev.length + 1);
        }
        clearInterval(typingInterval);
        return prev;
      });
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [typedContent]);

  const tabs = [
    { id: "home", icon: Terminal, color: "text-green-500" },
    { id: "about", icon: User, color: "text-blue-500" },
    { id: "skills", icon: Code, color: "text-yellow-500" },
    { id: "projects", icon: Briefcase, color: "text-purple-500" },
    { id: "contact", icon: Mail, color: "text-red-500" },
  ];

  const tabContent = {
    home: (
      <div>
        <p className="mb-2">Welcome to my interactive terminal portfolio!</p>
        <p className="mb-2">Available commands:</p>
        <ul className="list-disc list-inside">
          <li>about - Learn more about me</li>
          <li>skills - View my technical skills</li>
          <li>projects - Check out my projects</li>
          <li>contact - Get in touch</li>
          <li>clear - Clear the terminal</li>
        </ul>
      </div>
    ),
    about: (
      <div>
        <h2 className="text-xl font-bold mb-4">About Me</h2>
        <p className="mb-4">
          I'm a passionate engineering student focused on developing technical
          skills in web development. I enjoy solving complex problems with
          innovative solutions and I am dedicated to contributing to meaningful
          projects in the IT sector.
        </p>
        {/* <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center">
            <Coffee className="mr-2" /> Coffee Enthusiast
          </div>
          <div className="flex items-center">
            <Music className="mr-2" /> Amateur Musician
          </div>
          <div className="flex items-center">
            <Book className="mr-2" /> Avid Reader
          </div>
          <div className="flex items-center">
            <Zap className="mr-2" /> Tech Innovator
          </div>
        </div> */}
      </div>
    ),
    skills: (
      <div>
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              category: "Frontend",
              skills: ["HTML", "CSS", "JS", "Tailwind CSS", "React"],
            },
            {
              category: "Backend",
              skills: ["Node.js", "Express"],
            },
            {
              category: "Databases",
              skills: ["MySQL", "MongoDB"],
            },
          ].map((category, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">{category.category}</h3>
              <ul className="list-disc list-inside">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
    projects: (
      <div>
        <h2 className="text-xl font-bold mb-4">Projects</h2>
        <div className="space-y-4">
          {[
            {
              name: "Virtual Herbal Garden ",
              description:
                "A project that showcases different herbs with a chatbot integrated to provide detailed information.",
              technologies: ["React", "MongoDB", "CosmoCloud"],
            },
            {
              name: "Web Development Mini Projects",
              description:
                "A collection of mini projects demonstrating various web development skills, including BMI Calculator, Quiz Game, and Weather Watch.",
              technologies: ["HTML", "CSS", "JS", "REMIX ICONS"],
            },
            {
              name: "ache_wale_bhaiya",
              description:
                "Ache Wale Bhaiya is an e-commerce platform dedicated to selling both new tech products and second-hand tech gadgets. Whether you're looking for affordable used tech or the latest hardware components like DC motors, male jumper wires, and more, this platform has got you covered!",
              technologies: ["React", "Firebase", "Tailwind css"],
            },
          ].map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-4">
              <h3 className="text-lg font-bold mb-1">{project.name}</h3>
              <p className="mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    contact: (
      <div>
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          I'm always open to new opportunities and collaborations. Feel free to
          reach out!
        </p>
        <ul className="space-y-2">
          <li className="flex items-center">
            <Mail className="mr-2 w-5 h-5" />
            <a
              href="mailto:shaurya01836@gmail.com"
              className="hover:underline"
            >
              shaurya01836@gmail.com
            </a>
          </li>
          <li className="flex items-center">
            <Github className="mr-2 w-5 h-5" />
            <a
              href="https://github.com/unique-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              github.com/unique-coder
            </a>
          </li>
          <li className="flex items-center">
            <Linkedin className="mr-2 w-5 h-5" />
            <a
              href="https://linkedin.com/in/unique-coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              linkedin.com/in/unique-coder
            </a>
          </li>
          <li className="flex items-center">
            <Twitter className="mr-2 w-5 h-5" />
            <a
              href="https://twitter.com/unique_coder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @unique_coder
            </a>
          </li>
        </ul>
      </div>
    ),
  };

  const handleCommand = (command) => {
    switch (command.toLowerCase()) {
      case "about":
      case "skills":
      case "projects":
      case "contact":
        setActiveTab(command.toLowerCase());
        break;
      case "clear":
        setTypedContent("");
        break;
      case "help":
        setActiveTab("home");
        break;
      default:
        setTypedContent(
          (prev) =>
            `${prev}\nCommand not recognized: ${command}. Type 'help' for a list of commands.`
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-green-500 p-4 font-mono flex flex-col">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">
          Shaurya Upadhyay's Portfolio
        </h1>
      </header>

      <main className="flex-grow flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-3/4 bg-black rounded-lg p-4 border border-green-500 shadow-lg shadow-green-500/20 flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs">unique-coder@portfolio:~$</div>
          </div>
          <div
            ref={terminalRef}
            className="flex-grow overflow-y-auto mb-4 scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800"
          >
            <pre className="whitespace-pre-wrap">
              {typedContent}
              {showCursor && <span className="animate-pulse">▋</span>}
            </pre>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const input = e.currentTarget.command.value;
              setTypedContent((prev) => `${prev}\n$ ${input}`);
              handleCommand(input);
              e.currentTarget.reset();
            }}
            className="flex"
          >
            <span className="mr-2">$</span>
            <input
              type="text"
              name="command"
              className="flex-grow bg-transparent border-none outline-none"
              aria-label="Terminal input"
              autoComplete="off"
            />
          </form>
        </div>

        <nav className="w-full md:w-1/4 bg-gray-800 rounded-lg p-4 border border-green-500 shadow-lg shadow-green-500/20">
          <ul className="space-y-2">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-2 rounded flex items-center ${
                    activeTab === tab.id ? "bg-gray-700" : "hover:bg-gray-700"
                  }`}
                >
                  <tab.icon className={`mr-2 ${tab.color}`} />
                  <span className="capitalize">{tab.id}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </main>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="mt-8 bg-gray-800 rounded-lg p-6 border border-green-500 shadow-lg shadow-green-500/20"
        >
          {tabContent[activeTab]}
        </motion.div>
      </AnimatePresence>

      <footer className="mt-8 text-center">
        <p>
          &copy; {new Date().getFullYear()} Unique Coder. All rights reserved.
        </p>
        <p className="mt-2 flex items-center justify-center">
          <Terminal className="w-4 h-4 mr-2" />
          <span>v1.0.1</span>
        </p>
      </footer>
    </div>
  );
}
