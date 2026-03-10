'use client';

import TeamHero from './components/TeamHero';
import TeamGrid from './components/TeamGrid';
import TeamValues from './components/TeamValues';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <main>
        <TeamHero />
        <TeamGrid />
        <TeamValues />
      </main>
    </div>
  );
}
