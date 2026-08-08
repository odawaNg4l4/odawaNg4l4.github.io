import React from 'react';
import { motion } from 'framer-motion';
import { AwardIcon } from 'lucide-react';
import { credentials } from '../data/projects';
import { SectionHeading } from './SectionHeading';

export function Certifications() {
  return (
    <section id="certifications" className="border-b border-ink-500 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading index="05" title="Certifications & Education" />

        <ul className="grid gap-px overflow-hidden rounded-lg border border-ink-500 bg-ink-500 sm:grid-cols-2">
          {credentials.map((credential, i) =>
          <motion.li
            key={credential.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35, delay: Math.min(i * 0.05, 0.3) }}
            className="flex items-start justify-between gap-4 bg-ink-700 p-6">
            
              <div className="flex items-start gap-3">
                <AwardIcon className="mt-0.5 h-4 w-4 shrink-0 text-slateish-500" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium leading-snug text-slateish-100">{credential.name}</p>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-widest text-slateish-500">
                    {credential.issuer}
                  </p>
                </div>
              </div>
              <span
              className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
              credential.status === 'In Progress' ?
              'border-mint-400/40 bg-mint-400/10 text-mint-400' :
              'border-ink-500 bg-ink-600 text-slateish-400'}`
              }>
              
                {credential.status}
              </span>
            </motion.li>
          )}
        </ul>
      </div>
    </section>);

}