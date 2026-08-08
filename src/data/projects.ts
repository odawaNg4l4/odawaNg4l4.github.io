import type { Credential, Project, Writeup } from '../types/portfolio';

export const projects: Project[] = [
{
  id: 'soc-siem-research',
  title: 'SOC & SIEM Self-Directed Research',
  context: 'Self-directed · Ongoing',
  problem:
  'I wanted to understand how a real SOC actually turns raw log noise into an actionable alert, instead of only knowing SIEM as a buzzword.',
  actions: [
  'Researched and practiced core SOC analyst workflows, including SIEM-based log monitoring and alert triage.',
  'Used Wazuh as an open-source SIEM/XDR platform to explore log collection, correlation rules, and alert generation.',
  'Studied Syslog as a standard logging protocol for centralizing and forwarding log data from endpoints and network devices into SIEM platforms.',
  "Explored Splunk's approach to log ingestion, search, and dashboarding to compare enterprise SIEM workflows.",
  'Followed cybersecurity communities and sources including CyberNews to build awareness of current threats, vulnerabilities, and attack techniques.'],

  tools: ['Wazuh', 'Splunk', 'Syslog', 'Linux'],
  outcome:
  'I can now explain and demonstrate the full path from endpoint log to correlated alert to triage decision, and compare open-source vs enterprise SIEM workflows.'
},
{
  id: 'bootcamp',
  title: 'Cybersecurity Boot Camp — WomenTechstars Fellowship',
  context: 'Fellowship programme · Hands-on labs',
  problem:
  'I needed end-to-end infrastructure and defence experience, not just isolated tool knowledge.',
  actions: [
  'Intensive hands-on training in Linux systems administration, networking, and security monitoring.',
  'Practical labs in vulnerability scanning, penetration testing fundamentals, and incident response.',
  'Log analysis and threat detection in simulated enterprise environments.',
  'Configured firewalls and implemented IDS/IPS solutions in lab environments.',
  'Executed server configuration and system hardening aligned with security best practices.'],

  tools: ['Linux', 'Nmap', 'Burp Suite', 'Firewalls', 'IDS/IPS'],
  outcome:
  'Built a foundation in both proactive and reactive security practices: reduced lab-environment vulnerabilities through hardening, and improved my ability to identify and respond to simulated incidents.'
},
{
  id: 'lab-platforms',
  title: 'Practical Lab Platforms',
  context: 'TryHackMe · Hack The Box · Home lab',
  problem:
  'Reading about attacks is not the same as running them. I needed repeatable hands-on reps.',
  actions: [
  'Completed TryHackMe learning paths covering network reconnaissance, SQL injection, Windows security, Linux systems, and SIEM fundamentals.',
  'Ran self-directed Linux administration labs in virtualised environments.',
  'Worked Hack The Box machines to practise enumeration and exploitation methodology.',
  'Published lab work and notes to GitHub.'],

  tools: ['TryHackMe', 'Hack The Box', 'Kali Linux', 'VirtualBox', 'Git'],
  outcome:
  'A consistent, documented practice record across offensive and defensive fundamentals — with writeups and configs available publicly on GitHub.'
}];


export const writeups: Writeup[] = [
{
  id: 'wazuh-brute-force',
  title: 'Detecting SSH Brute Force with Wazuh: From Syslog to Triage',
  summary:
  'A walkthrough of how I built a small lab to catch repeated failed SSH authentications, correlate them into a single alert, and then triage that alert the way an analyst would on shift.',
  tools: ['Wazuh', 'Syslog', 'Ubuntu', 'Kali Linux', 'VirtualBox'],
  sections: [
  {
    heading: '1. The lab',
    body: 'Two VirtualBox hosts on an internal network: an Ubuntu server running the Wazuh agent and OpenSSH, and a Kali box acting as the attacker. The Wazuh manager and dashboard ran on a separate Ubuntu host so ingestion and analysis stayed separated, mirroring how a SIEM sits outside the monitored asset.'
  },
  {
    heading: '2. Getting the logs in',
    body: 'The agent forwarded /var/log/auth.log to the manager. I confirmed ingestion by tailing the manager side while generating a single failed login — if you cannot see one event end to end, you should not trust a hundred. Syslog gave me a consistent format to reason about: timestamp, host, process, message.'
  },
  {
    heading: '3. The detection',
    body: "Wazuh's default ruleset flags individual failed authentications at a low level, which is noise on its own. The value is in the correlation rule that fires when the same source IP produces repeated failures inside a short window — that is what turns dozens of level 5 events into one level 10 alert worth an analyst's attention."
  },
  {
    heading: '4. Triage',
    body: 'When the alert fired I worked it as a ticket: what is the source IP, is it internal or external, did any attempt succeed, which account was targeted, and is this account privileged? The pivot that matters is looking for an "Accepted password" event from the same IP immediately after the failures — failures alone are an attempt, a success after failures is an incident.'
  },
  {
    heading: '5. Indicators and takeaways',
    body: 'IOCs collected: attacking source IP, targeted usernames, and the burst timing pattern. Remediation in the lab was straightforward — key-based authentication only, root login disabled, and rate limiting at the firewall. The bigger lesson was that detection engineering is mostly about thresholds: too tight and you drown in alerts, too loose and a slow brute force walks past you.'
  }]

}];


export const credentials: Credential[] = [
{
  id: 'womentechsters',
  name: 'Women Techsters Fellowship Program — Cybersecurity Track',
  issuer: 'Tech4Dev',
  status: 'In Progress'
},
{
  id: 'tryhackme',
  name: 'Cyber Security Learning Paths',
  issuer: 'TryHackMe',
  status: 'In Progress'
},
{
  id: 'isoc',
  name: 'Designing and Deploying Computer Networks',
  issuer: 'ISOC',
  status: 'Completed'
},
{
  id: 'cisco-essentials',
  name: 'Introduction to Cybersecurity Essentials',
  issuer: 'Cisco',
  status: 'Completed'
},
{
  id: 'cisco-ethical-hacker',
  name: 'Ethical Hacker',
  issuer: 'Cisco',
  status: 'Completed'
},
{
  id: 'cisco-threat',
  name: 'Cyber Threat Management',
  issuer: 'Cisco',
  status: 'Completed'
},
{
  id: 'hp-ai',
  name: 'Introduction to AI',
  issuer: 'HP',
  status: 'Completed'
}];