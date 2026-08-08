import type { NavItem } from '../types/portfolio';

export const profile = {
  name: 'Odawa Ngala',
  roles: ['Cybersecurity', 'Security Operations', 'Network Engineer', 'SOC Analyst'],
  tagline: 'Detect early. Triage fast. Document everything.',
  location: 'Nairobi, Kenya',
  email: 'odawangala99@gmail.com',
  linkedin: 'https://www.linkedin.com/in/odawa-ngala-54b980222',
  github: 'https://github.com/odawaNg4l4',
  tryhackme: 'https://tryhackme.com/p/odawangala',
  cvUrl: '/Odawa-Ngala-CV.pdf'
};

export const about: string[] = [
"I'm an entry-level cybersecurity professional with hands-on experience in security monitoring, incident triage, penetration testing, and vulnerability assessment. I work regularly with tools like Burp Suite, Nmap, and Linux-based security environments to identify and mitigate system vulnerabilities.",
'My practical exposure to SIEM concepts and log management comes from self-directed research and lab practice with Wazuh, Splunk, and Syslog, alongside extensive hands-on labs on TryHackMe covering network reconnaissance, SQL injection, Windows security, Linux systems, and SIEM fundamentals.',
'I have experience with log analysis, threat detection, and incident response in simulated enterprise environments, with a strong focus on identifying indicators of compromise and reducing organizational risk. What I bring is curiosity, discipline in documentation, and a habit of not stopping at the first alert.'];


export const stats = [
{ label: 'Focus', value: 'SOC / Blue Team' },
{ label: 'SIEM stack', value: 'Wazuh · Splunk' },
{ label: 'Lab platforms', value: 'TryHackMe · HTB' },
{ label: 'Availability', value: 'Open to roles' }];


export const navItems: NavItem[] = [
{ label: 'About', href: '#about' },
{ label: 'Skills', href: '#skills' },
{ label: 'Projects', href: '#projects' },
{ label: 'Writeups', href: '#writeups' },
{ label: 'Certifications', href: '#certifications' },
{ label: 'Contact', href: '#contact' }];