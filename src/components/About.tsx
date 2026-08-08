import React from 'react';
import { about } from '../data/profile';
import { toolkit } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function About() {
  return (
    <section id="about" className="border-b border-ink-500 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="01" title="About" />

        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="space-y-5">
            {about.map((paragraph) =>
            <p key={paragraph.slice(0, 24)} className="text-base leading-relaxed text-slateish-200">
                {paragraph}
              </p>
            )}
          </div>

          <aside className="rounded-lg border border-ink-500 bg-ink-700 p-6">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-mint-400">
              Core toolkit
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {toolkit.map((tool) =>
              <li
                key={tool}
                className="rounded border border-ink-500 bg-ink-600 px-2.5 py-1.5 font-mono text-xs text-slateish-200">
                
                  {tool}
                </li>
              )}
            </ul>
          </aside>
        </div>
      </div>
    </section>);

}