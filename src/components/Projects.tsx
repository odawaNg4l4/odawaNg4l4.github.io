import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="border-b border-ink-500 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Projects & Labs"
          description="Each entry covers the problem, what I actually did, the tooling, and the outcome." />
        

        <div className="space-y-6">
          {projects.map((project, i) =>
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: Math.min(i * 0.08, 0.24), ease: 'easeOut' }}
            className="rounded-lg border border-ink-500 bg-ink-700 p-6 transition-colors hover:border-accent-400 sm:p-8">
            
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-lg font-semibold text-slateish-100 sm:text-xl">{project.title}</h3>
                <p className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-slateish-500">
                  {project.context}
                </p>
              </div>

              <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-widest text-accent-400">
                      Problem
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slateish-200">{project.problem}</p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-widest text-accent-400">
                      Tools
                    </h4>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.tools.map((tool) =>
                    <li
                      key={tool}
                      className="rounded border border-ink-500 bg-ink-600 px-2 py-1 font-mono text-[11px] text-slateish-200">
                      
                          {tool}
                        </li>
                    )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-mono text-[11px] uppercase tracking-widest text-accent-400">
                      Outcome
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slateish-200">{project.outcome}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-mono text-[11px] uppercase tracking-widest text-accent-400">
                    What I did
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {project.actions.map((action) =>
                  <li key={action} className="flex items-start gap-3 text-sm leading-relaxed text-slateish-200">
                        <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slateish-500"
                      aria-hidden="true" />
                    
                        <span>{action}</span>
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </motion.article>
          )}
        </div>

        <p className="mt-8 font-mono text-xs text-slateish-500">
          Screenshots and lab configs live in the{' '}
          <a
            href="https://github.com/odawaNg4l4"
            target="_blank"
            rel="noreferrer"
            className="text-accent-400 underline underline-offset-4">
            
            GitHub repositories
          </a>
          .
        </p>
      </div>
    </section>);

}