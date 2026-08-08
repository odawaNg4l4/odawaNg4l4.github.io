import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, DownloadIcon, MapPinIcon } from 'lucide-react';
import { profile, stats } from '../data/profile';

export function Hero() {
  return (
    <section id="top" className="border-b border-ink-500 pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}>
          
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-slateish-100 sm:text-6xl md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-sm text-accent-400 sm:text-base">
            {profile.roles.map((role, i) =>
            <span key={role} className="flex items-center gap-3">
                {i > 0 ? <span className="text-slateish-500" aria-hidden="true">|</span> : null}
                {role}
              </span>
            )}
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slateish-400 sm:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded bg-accent-400 px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-accent-500">
              
              View projects &amp; labs
              <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={profile.cvUrl}
              download
              className="inline-flex items-center gap-2 rounded border border-ink-500 px-5 py-3 text-sm font-semibold text-slateish-200 transition-colors hover:border-accent-400 hover:text-accent-400">
              
              <DownloadIcon className="h-4 w-4" aria-hidden="true" />
              Download CV
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 font-mono text-xs text-slateish-500">
            <MapPinIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.location}
          </p>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink-500 bg-ink-500 sm:grid-cols-4">
          
          {stats.map((stat) =>
          <div key={stat.label} className="bg-ink-700 px-4 py-5">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-slateish-500">
                {stat.label}
              </dt>
              <dd className="mt-2 text-sm font-medium text-slateish-100">{stat.value}</dd>
            </div>
          )}
        </motion.dl>
      </div>
    </section>);

}