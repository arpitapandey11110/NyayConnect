
import React, { useState } from 'react';
import { AppTab } from './types';
import Sidebar from './components/Sidebar';
import ChatSection from './components/ChatSection';
import LetterGenerator from './components/LetterGenerator';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<AppTab>(AppTab.LETTER_GEN);

  const renderContent = () => {
    switch (activeTab) {
      case AppTab.CHAT:
        return <ChatSection />;
      case AppTab.LETTER_GEN:
        return <LetterGenerator />;
      default:
        return <LetterGenerator />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden bg-slate-950 text-slate-200">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        <header className="h-16 border-b border-slate-800 flex items-center px-8 bg-slate-900/50 backdrop-blur-md sticky top-0 z-10">
          <h1 className="text-xl font-bold tracking-tight text-white capitalize">
            {activeTab === AppTab.LETTER_GEN ? 'Nyay Connect: Formal Drafting' : 'Nyay Assistant Chat'}
          </h1>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
