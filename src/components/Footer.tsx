import React from 'react';
import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-ink-500 bg-ink-900 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 font-mono text-xs text-slateish-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. Built and deployed by hand.</p>
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-mint-400">
          
          Source on GitHub
        </a>
      </div>
    </footer>);

}