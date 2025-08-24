import { useState, useEffect } from 'react';
import { Github, Facebook, Linkedin, ExternalLink, Heart } from 'lucide-react';

const maintenanceLines = [
  'SITE STATUS: WORK IN PROGRESS',
  '',
  'Hey there!',
  'You\'ve stumbled into my digital workspace',
  '',
  'Currently tinkering with things behind the scenes...',
  'Probably chasing CG',
  'or getting distracted by yet another side project.',
  'But best guess, doom-scrolling brain-rots',
  '',
  'Check back soon - promise it\'ll be worth it!',
];

export function MaintenancePage() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [showContent, setShowContent] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [statusGlow, setStatusGlow] = useState(false);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Status glow effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setStatusGlow(true);
      setTimeout(() => setStatusGlow(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for maintenance message
  useEffect(() => {
    if (currentLine < maintenanceLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, maintenanceLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, currentLine === 0 ? 1000 : Math.random() * 300 + 150);

      return () => clearTimeout(timer);
    } else {
      // Show contact section after message is complete
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  const contactLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/itzMRZ',
      color: '#00ff88', // matrix green
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/AlifMeheraz/',
      color: '#00ccff', // electric blue
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/mrzalif/',
      color: '#9966ff', // purple
    },
    {
      name: 'OnlyFans',
      icon: Heart,
      url: 'https://creations.mtdv.me/onlyfans-itzmrz',
      color: '#ff6b35', // orange
    },
  ];

  return (
    <div className="h-screen bg-black text-primary">
      <div className="crt h-full m-2 sm:m-4">
        <div className="terminal-content flicker h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-2 border-b border-border mb-4 sm:mb-8">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-400"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
              <span className="font-mono text-xs sm:text-sm ml-2 sm:ml-4">MRZ's Corner</span>
            </div>
            <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="font-mono hidden sm:inline">
                {currentTime.toLocaleTimeString()}
              </span>
              <span className="font-mono">
                {currentTime.toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 flex flex-col justify-center items-center p-4 sm:p-8">
            <div className="w-full max-w-3xl">
              {/* Maintenance Message */}
              <div className="startup-text mb-8 sm:mb-12">
                {displayedLines.map((line, index) => (
                  <div key={`maintenance-line-${line}-${index}`} className="mb-1 sm:mb-2 font-mono">
                    {index === 0 ? (
                      <div className={`text-center text-lg sm:text-xl text-red-400 mb-2 sm:mb-4 transition-all duration-300 ${
                        statusGlow ? 'text-shadow-lg text-shadow-red-400' : ''
                      }`}>
                        {line}
                      </div>
                    ) : index === 2 ? (
                      <div className="text-xl sm:text-2xl text-blue-400 mb-1 sm:mb-2">
                        {line}
                      </div>
                    ) : index === 3 ? (
                      <div className="text-base sm:text-lg text-purple-400 mb-2 sm:mb-4">
                        {line}
                      </div>
                    ) : (
                      <div className={line === '' ? 'h-2 sm:h-4' : 'text-sm sm:text-base'}>
                        {line}
                      </div>
                    )}
                  </div>
                ))}
                {currentLine < maintenanceLines.length && (
                  <span className="cursor w-2 h-4">&nbsp;</span>
                )}
              </div>

              {/* Contact Section */}
              {showContent && (
                <div className="animate-in fade-in duration-1000">
                  <div className="border-t border-border pt-4 sm:pt-8">
                    <div className="text-center mb-4 sm:mb-8">
                      <h3 className="text-base sm:text-lg text-blue-400 mb-1 sm:mb-2 font-mono">
                        {`// FIND_ME_HERE`}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 font-mono px-2 sm:px-0">
                        Hit me up if you want to chat about code, projects, or random stuff
                      </p>
                    </div>

                    <div className="flex justify-center gap-3 sm:gap-6 flex-wrap px-2 sm:px-0">
                      {contactLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex flex-col items-center p-2 sm:p-3 border border-border rounded hover:bg-accent transition-all duration-200 hover:border-primary"
                          style={{
                            boxShadow: `0 0 10px ${link.color}20`,
                          }}
                        >
                          <link.icon
                            className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2 transition-colors duration-200"
                            style={{ color: link.color }}
                          />
                          <span className="font-mono text-xs text-foreground group-hover:text-primary">
                            {link.name}
                          </span>
                          <ExternalLink className="w-2 h-2 mt-1 text-muted-foreground group-hover:text-primary" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="border-t border-border p-2 text-xs font-mono text-muted-foreground">
            <div className="flex justify-between items-center">
              <span className="hidden sm:inline">Made by MRZ / VibeCoded *wink wink*</span>
              <span className="sm:hidden">Made by MRZ</span>
              <span>UPTIME: {Math.floor(Date.now() / 1000)} sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}