import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, User, Code, Briefcase, Mail, X } from "lucide-react";

export default function UniqueTerminalPortfolio() {
  const [activeWindow, setActiveWindow] = useState(null);
  const [typedContent, setTypedContent] = useState("");
  const fullContent =
    "Welcome to my terminal portfolio! Click on the icons to explore.";
  const terminalRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTypedContent(fullContent.slice(0, typedContent.length + 1));
    }, 50);

    return () => clearTimeout(timeout);
  }, [typedContent]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [typedContent]);

  const windows = [
    {
      id: "about",
      icon: User,
      title: "About Me",
      content:
        "I'm a passionate engineering student focused on developing technical skills in web development. I enjoy solving complex problems with innovative solutions and am dedicated to contributing to meaningful projects in the IT sector.",
    },
    {
      id: "skills",
      icon: Code,
      title: "Skills",
      content:
        "• HTML, CSS & JavaScript\n• React.js\n• Node.js\n• Firebase\n• MongoDB\n• Git & GitHub\n",
    },
    {
      id: "projects",
      icon: Briefcase,
      title: "Projects",
      content:
        "1. Virtual Herbal Garden : A project that showcases different herbs with a chatbot integrated to provide detailed information.\n\n2. Web Development Mini Projects: A collection of mini projects demonstrating various web development skills, including BMI Calculator, Quiz Game, and Weather Watch.\n",
    },
    {
      id: "contact",
      icon: Mail,
      title: "Contact",
      content:
        "Email: shauryaupadhyay@example.com\nGitHub: github.com/Shaurya01836\nLinkedIn: linkedin.com/in/shaurya-upadhyay\nTwitter: @Shaurya01836",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-green-500 p-4 font-mono relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="bg-black rounded-lg p-4 mb-4 border border-green-500 shadow-lg shadow-green-500/20">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs">Shaurya@portfolio:~$</div>
          </div>
          <div
            ref={terminalRef}
            className="h-40 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-800"
          >
            <pre className="whitespace-pre-wrap">{typedContent}</pre>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {windows.map((window) => (
            <button
              key={window.id}
              onClick={() => setActiveWindow(window.id)}
              className="flex flex-col items-center justify-center bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
              aria-label={`Open ${window.title}`}
            >
              <window.icon className="w-8 h-8 mb-2" />
              <span className="text-xs">{window.title}</span>
            </button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {activeWindow && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <div className="bg-gray-800 rounded-lg w-full max-w-md border border-green-500 shadow-lg shadow-green-500/20">
              <div className="flex justify-between items-center p-4 border-b border-green-500">
                <h2 className="text-lg font-bold">
                  {windows.find((w) => w.id === activeWindow)?.title}
                </h2>
                <button
                  onClick={() => setActiveWindow(null)}
                  aria-label="Close window"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4 h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-gray-700">
                <pre className="whitespace-pre-wrap">
                  {windows.find((w) => w.id === activeWindow)?.content}
                </pre>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="fixed bottom-4 right-4 flex space-x-2">
        <Terminal className="w-6 h-6 animate-pulse" />
        <span className="text-xs">v1.0.0</span>
      </div>
    </div>
  );
}
