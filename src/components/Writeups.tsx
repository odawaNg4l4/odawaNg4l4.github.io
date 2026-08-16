import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, FileTextIcon, ExternalLinkIcon } from 'lucide-react';
import { writeups } from '../data/projects';
import { SectionHeading } from './SectionHeading';

export function Writeups() {
  const [openId, setOpenId] = useState<string | null>(writeups[0]?.id ?? null);

  return (
    <section id="writeups" className="border-b border-ink-500 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Writeups"
          description="Technical walkthroughs of lab work — the reasoning, not just the commands." />

        <div className="mb-6 rounded-lg border border-accent-400/30 bg-ink-700 p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-accent-400">Featured incident report</p>
              <h3 className="mt-2 text-xl font-semibold text-slateish-100">Carnage PCAP Analysis — Network Forensics Incident Report</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slateish-400">Investigation of malicious file delivery, post-infection traffic, Cobalt Strike infrastructure, DNS activity and SMTP traffic using Wireshark.</p>
            </div>
            <a href="/carnage-pcap-analysis.html" className="inline-flex shrink-0 items-center justify-center gap-2 rounded border border-accent-400 px-4 py-2 text-sm font-semibold text-accent-400 transition-colors hover:bg-accent-400 hover:text-ink-900">
              View full report <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          {writeups.map((writeup) => {
            const isOpen = openId === writeup.id;
            return (
              <article key={writeup.id} className="overflow-hidden rounded-lg border border-ink-500 bg-ink-700">
                <h3>
                  <button type="button" onClick={() => setOpenId(isOpen ? null : writeup.id)} aria-expanded={isOpen} aria-controls={`writeup-${writeup.id}`} className="flex w-full items-start gap-4 p-6 text-left transition-colors hover:bg-ink-600 sm:p-8">
                    <FileTextIcon className="mt-1 h-5 w-5 shrink-0 text-accent-400" aria-hidden="true" />
                    <span className="flex-1">
                      <span className="block text-lg font-semibold text-slateish-100">{writeup.title}</span>
                      <span className="mt-2 block text-sm leading-relaxed text-slateish-400">{writeup.summary}</span>
                    </span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25, ease: 'easeOut' }} className="mt-1 shrink-0 text-slateish-400"><ChevronDownIcon className="h-5 w-5" aria-hidden="true" /></motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen ? <motion.div id={`writeup-${writeup.id}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                    <div className="border-t border-ink-500 px-6 pb-8 pt-6 sm:px-8">
                      <ul className="mb-7 flex flex-wrap gap-2">{writeup.tools.map((tool) => <li key={tool} className="rounded border border-ink-500 bg-ink-600 px-2 py-1 font-mono text-[11px] text-slateish-200">{tool}</li>)}</ul>
                      <div className="space-y-6">{writeup.sections.map((section) => <div key={section.heading}><h4 className="font-mono text-sm font-medium text-accent-400">{section.heading}</h4><p className="mt-2 max-w-3xl text-sm leading-relaxed text-slateish-200">{section.body}</p></div>)}</div>
                    </div>
                  </motion.div> : null}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}