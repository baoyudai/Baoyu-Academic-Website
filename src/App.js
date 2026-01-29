import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const palatinoStack = {
    fontFamily: '"Palatino", "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif'
  };

  const profile = {
    name: "Baoyu (Brian) Dai",
    title: "Ph.D. Student in Philosophy",
    institution: "University of California, Davis",
    email: "dbydai@ucdavis.edu",
    bio: "I am a Ph.D. student in the Department of Philosophy at the University of California, Davis. My research is situated at the intersection of the Philosophy of Science, the Philosophy of Mathematics, and Metaphysics. I am particularly interested in the epistemic nature of intra-mathematical explanation and the evolution of desire-satisfaction theories in moral psychology.",
    researchStatement: "My research agenda currently investigates how mathematical proofs provide explanatory power, specifically arguing for an epistemic approach to intra-mathematical explanations. I am also exploring the challenges facing desire-satisfaction theories of well-being, specifically focusing on the 'problem of remote desires' and 'prudential neutrality'.",
    teachingPhilosophy: "I aim to bridge the gap between formal logical systems and intuitive philosophical reasoning. In my time as a Teaching Assistant for courses ranging from Elementary Logic to Minds, Brains, and Computers, I have focused on helping students master symbolic tools."
  };

  const publications = [
    { title: "Rethinking the Reproductive Autonomy Rationale", venue: "Under Review", year: "2024" },
    { title: "A New Attempt Against Hirsch's Deflationism", venue: "Dianoia, (IX), 32-41", year: "2022" }
  ];

  const presentations = [
    { title: "Understanding Mathematics: Explaining Proofs", event: "7th Meeting of the APMP", location: "Pavia, Italy", year: "2024" },
    { title: "How to Read Intra-Mathematical Explanations", event: "IV Unifesp Conference", location: "São Paulo, Brazil", year: "2023" }
  ];

  const teaching = [
    { code: "PHI 013", name: "Minds, Brains, and Computers", role: "Teaching Assistant", term: "UC Davis, 2024–2025" },
    { code: "PHILOS 211", name: "Elementary Logic", role: "Teaching Assistant", term: "UW Milwaukee, 2022–2024" }
  ];

  const theme = {
    bg: isDarkMode ? 'bg-[#020617]' : 'bg-white',
    textMain: isDarkMode ? 'text-slate-100' : 'text-slate-900',
    textMuted: isDarkMode ? 'text-slate-300' : 'text-slate-800',
    header: isDarkMode ? 'text-white' : 'text-slate-900',
    sectionTitle: isDarkMode ? 'text-blue-400/80' : 'text-slate-300',
    sectionBorder: isDarkMode ? 'border-blue-900' : 'border-slate-100',
    navUnselected: isDarkMode ? 'text-slate-500 hover:text-blue-300' : 'text-slate-400 hover:text-slate-600',
    navSelected: isDarkMode ? 'text-blue-400 border-blue-400' : 'text-slate-900 border-slate-900',
    itemTitle: isDarkMode ? 'text-white' : 'text-slate-900',
    itemSub: isDarkMode ? 'text-slate-400' : 'text-slate-500',
    year: isDarkMode ? 'text-blue-500' : 'text-slate-200'
  };

  return (
    <div style={palatinoStack} className={`min-h-screen w-full transition-colors duration-500 flex flex-col p-6 md:p-10 lg:p-12 ${theme.bg} ${theme.textMain}`}>
      <div className={`max-w-3xl w-full mx-auto flex flex-col flex-grow transition-colors duration-500 ${theme.bg}`}>
        <header className="mb-6 pb-4 flex-shrink-0 flex flex-col md:flex-row justify-between items-center md:items-baseline gap-4">
          <h1 className={`text-2xl md:text-3xl font-normal tracking-tight transition-colors ${theme.header}`}>{profile.name}</h1>
          <div className="flex items-center gap-6">
            <nav className="flex gap-4 md:gap-6 text-[12px] uppercase tracking-wider items-center">
              {['home', 'research', 'teaching'].map((tab) => (
                <button key={tab} onClick={() => setActiveTab(tab)} className={`pb-1 border-b-2 transition-all capitalize ${activeTab === tab ? `${theme.navSelected} font-bold` : `border-transparent ${theme.navUnselected}`}`}>{tab}</button>
              ))}
            </nav>
            <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-1 rounded-full transition-all flex items-center justify-center -mt-1 ${isDarkMode ? 'hover:bg-slate-800 text-blue-400' : 'hover:bg-slate-100 text-slate-400'}`}>
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </header>

        <div className="flex-grow overflow-hidden">
          {activeTab === 'home' && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-full">
              <aside className="md:col-span-7">
                <h2 className={`text-[10px] uppercase tracking-wider mb-3 border-b pb-1 transition-colors ${theme.sectionTitle} ${theme.sectionBorder}`}>About</h2>
                <p className={`text-[13px] leading-relaxed text-justify transition-colors ${theme.textMuted}`}>{profile.bio}</p>
              </aside>
              <main className="md:col-span-5 flex flex-col gap-6">
                <section>
                  <h2 className={`text-[10px] uppercase tracking-wider mb-3 border-b pb-1 transition-colors ${theme.sectionTitle} ${theme.sectionBorder}`}>Recent Presentations</h2>
                  <div className="space-y-4">
                    {presentations.map((pres, i) => (
                      <div key={i}>
                        <div className="flex items-baseline gap-3 mb-0.5">
                          <span className={`text-[10px] font-bold shrink-0 transition-colors ${theme.year}`}>{pres.year}</span>
                          <h3 className={`text-[12px] font-normal leading-snug transition-colors ${theme.itemTitle}`}>{pres.title}</h3>
                        </div>
                        <div className="pl-9">
                          <p className={`text-[11px] mb-0.5 transition-colors ${theme.itemSub}`}>{pres.event}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </main>
            </div>
          )}
          {activeTab === 'research' && (
            <div className="flex flex-col gap-8 h-full">
              <section className="flex-shrink-0">
                <h2 className={`text-[10px] uppercase tracking-wider mb-3 border-b pb-1 transition-colors ${theme.sectionTitle} ${theme.sectionBorder}`}>Research Agenda</h2>
                <p className={`text-[14px] leading-relaxed text-justify transition-colors ${theme.textMuted}`}>{profile.researchStatement}</p>
              </section>
              <section className="flex-grow">
                <h2 className={`text-[10px] uppercase tracking-wider mb-3 border-b pb-1 transition-colors ${theme.sectionTitle} ${theme.sectionBorder}`}>Selected Publications</h2>
                <div className="space-y-4">
                  {publications.map((pub, i) => (
                    <div key={i}>
                      <div className="flex items-baseline gap-3 mb-0.5">
                        <span className={`text-[10px] font-bold shrink-0 transition-colors ${theme.year}`}>{pub.year}</span>
                        <h3 className={`text-[13px] font-normal leading-snug transition-colors ${theme.itemTitle}`}>{pub.title}</h3>
                      </div>
                      <div className="pl-9"><p className={`text-[11px] mb-0.5 transition-colors ${theme.itemSub}`}>{pub.venue}</p></div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
          {activeTab === 'teaching' && (
            <div className="flex flex-col gap-8 h-full">
              <section className="flex-shrink-0">
                <h2 className={`text-[10px] uppercase tracking-wider mb-3 border-b pb-1 transition-colors ${theme.sectionTitle} ${theme.sectionBorder}`}>Teaching Philosophy</h2>
                <p className={`text-[14px] leading-relaxed text-justify transition-colors ${theme.textMuted}`}>{profile.teachingPhilosophy}</p>
              </section>
              <section className="flex-grow">
                <h2 className={`text-[10px] uppercase tracking-wider mb-3 border-b pb-1 transition-colors ${theme.sectionTitle} ${theme.sectionBorder}`}>Courses</h2>
                <div className="space-y-4">
                  {teaching.map((course, i) => (
                    <div key={i} className={`flex justify-between items-start gap-4 pb-2 border-b transition-colors ${isDarkMode ? 'border-blue-900/40' : 'border-slate-50'}`}>
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-0.5">
                          <span className={`text-[11px] font-bold uppercase tracking-tighter shrink-0 transition-colors ${isDarkMode ? 'text-blue-400' : 'text-slate-400'}`}>{course.code}</span>
                          <h3 className={`text-[13px] font-normal transition-colors ${theme.itemTitle}`}>{course.name}</h3>
                        </div>
                        <p className={`text-[10px] uppercase tracking-widest pl-12 transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-400'}`}>{course.role}</p>
                      </div>
                      <span className={`text-[10px] uppercase tracking-wider shrink-0 transition-colors ${isDarkMode ? 'text-slate-500' : 'text-slate-300'}`}>{course.term}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>

        <footer className={`mt-auto pt-4 border-t flex justify-between items-center text-[9px] uppercase tracking-widest flex-shrink-0 transition-colors ${isDarkMode ? 'border-slate-800 text-slate-600' : 'border-slate-100 text-slate-400'}`}>
          <span>{profile.name} — 2026</span>
          <div className="flex gap-4 lowercase tracking-normal opacity-60">
            <span>{profile.email}</span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
