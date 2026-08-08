import React from 'react';
import { motion } from 'framer-motion';
import { CheckIcon } from 'lucide-react';
import { skillGroups } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="border-b border-ink-500 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          title="Skills"
          description="Grouped by the work they belong to — monitoring and response first, then the infrastructure and networking foundations underneath it." />
        

        <div className="grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, i) =>
          <motion.article
            key={group.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.24), ease: 'easeOut' }}
            className={`rounded-lg border border-ink-500 bg-ink-700 p-6 ${
            i === 0 ? 'md:col-span-2' : ''}`
            }>
            
              <h3 className="text-base font-semibold text-slateish-100 sm:text-lg">{group.title}</h3>
              <ul
              className={`mt-5 grid gap-x-8 gap-y-2.5 ${
              i === 0 ? 'sm:grid-cols-2' : ''}`
              }>
              
                {group.items.map((item) =>
              <li key={item} className="flex items-start gap-2.5 text-sm text-slateish-200">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
              )}
              </ul>
            </motion.article>
          )}
        </div>
      </div>
    </section>);

}