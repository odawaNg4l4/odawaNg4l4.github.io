import React from 'react';
import { DownloadIcon, GithubIcon, LinkedinIcon, MailIcon, TerminalSquareIcon } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';

const links = [
{
  label: 'Email',
  value: profile.email,
  href: `mailto:${profile.email}`,
  Icon: MailIcon,
  external: false
},
{
  label: 'LinkedIn',
  value: 'odawa-ngala',
  href: profile.linkedin,
  Icon: LinkedinIcon,
  external: true
},
{
  label: 'GitHub',
  value: 'odawaNg4l4',
  href: profile.github,
  Icon: GithubIcon,
  external: true
},
{
  label: 'TryHackMe',
  value: 'odawangala',
  href: profile.tryhackme,
  Icon: TerminalSquareIcon,
  external: true
}];


export function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          title="Contact"
          description="Open to SOC analyst, security operations, and IT infrastructure roles. The fastest way to reach me is email." />
        

        <ul className="grid gap-px overflow-hidden rounded-lg border border-ink-500 bg-ink-500 sm:grid-cols-2">
          {links.map(({ label, value, href, Icon, external }) =>
          <li key={label} className="bg-ink-700">
              <a
              href={href}
              {...external ? { target: '_blank', rel: 'noreferrer' } : {}}
              className="flex items-center gap-4 p-6 transition-colors hover:bg-ink-600">
              
                <Icon className="h-5 w-5 shrink-0 text-mint-400" aria-hidden="true" />
                <span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-slateish-500">
                    {label}
                  </span>
                  <span className="mt-1 block break-all text-sm text-slateish-100">{value}</span>
                </span>
              </a>
            </li>
          )}
        </ul>

        <div className="mt-8">
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-2 rounded bg-mint-400 px-5 py-3 text-sm font-semibold text-ink-900 transition-colors hover:bg-mint-500">
            
            <DownloadIcon className="h-4 w-4" aria-hidden="true" />
            Download CV (PDF)
          </a>
        </div>
      </div>
    </section>);

}