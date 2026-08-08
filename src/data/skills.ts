import type { SkillGroup } from '../types/portfolio';

export const toolkit: string[] = [
'Wazuh (SIEM)',
'Splunk (SIEM)',
'Syslog',
'Linux (Kali, Ubuntu)',
'Nmap',
'Wireshark',
'Burp Suite',
'Git & GitHub',
'OpenVPN'];


export const skillGroups: SkillGroup[] = [
{
  id: 'soc',
  title: 'Security Monitoring & Incident Response',
  items: [
  'SIEM concepts and log analysis (Wazuh, Splunk, Syslog)',
  'Security alert triage and validation',
  'Incident investigation and documentation',
  'Indicators of Compromise (IOC) identification',
  'Endpoint and network log analysis',
  'Incident response fundamentals',
  'Tabletop exercise participation (lab)']

},
{
  id: 'infrastructure',
  title: 'IT Infrastructure & Systems Administration',
  items: [
  'Linux and UNIX administration',
  'Windows Server (basic administration)',
  'Server setup and configuration',
  'Local and cloud infrastructure maintenance',
  'Virtualization (VirtualBox / VMware)',
  'VPN setup and administration',
  'Email server concepts',
  'System monitoring and performance optimization']

},
{
  id: 'network',
  title: 'Networking & Cloud',
  items: [
  'Network troubleshooting',
  'TCP/IP fundamentals',
  'Firewall configuration (lab)',
  'IDS / IPS (lab)',
  'AWS (IAM, EC2 concepts)',
  'Azure fundamentals',
  'Cloud-based system integration']

},
{
  id: 'vuln',
  title: 'Cybersecurity & Vulnerability Management',
  items: [
  'Vulnerability scanning',
  'Server hardening and security best practices',
  'Risk awareness',
  'Data backup and restoration',
  'Business continuity support',
  'Security awareness and phishing simulation concepts']

},
{
  id: 'hardware',
  title: 'Hardware & Technical Support',
  items: [
  'Hardware diagnostics and repairs',
  'Installation and replacement of components',
  'Peripheral configuration',
  'Remote and onsite technical support']

}];