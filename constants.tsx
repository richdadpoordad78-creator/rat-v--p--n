
import React from 'react';
import { Monitor, Smartphone, Apple, Laptop, Terminal, Shield, Zap, Globe, MessageCircle, AlertTriangle, HelpCircle, Heart } from 'lucide-react';

export const OS_CARDS = [
  { id: 'windows', name: 'Windows', icon: <Monitor size={24} />, link: 'https://download.wireguard.com/windows-client/wireguard-installer.exe' },
  { id: 'android', name: 'Android', icon: <Smartphone size={24} />, link: 'https://play.google.com/store/apps/details?id=com.wireguard.android' },
  { id: 'ios', name: 'iOS', icon: <Apple size={24} />, link: 'https://apps.apple.com/us/app/wireguard/id1441195209' },
  { id: 'macos', name: 'macOS', icon: <Laptop size={24} />, link: 'https://apps.apple.com/us/app/wireguard/id1451685025' },
  { id: 'linux', name: 'Linux', icon: <Terminal size={24} />, link: 'https://www.wireguard.com/install/' },
];

export const MOCK_ANNOUNCEMENTS = [
  { id: '1', date: '2024-05-20', type: 'urgent', title: 'New Iran Bridge Servers', content: 'We have added 5 new obfuscated servers to bypass recent protocol filtering.' },
  { id: '2', date: '2024-05-18', type: 'info', title: 'System Maintenance', content: 'Main core updated for better performance on high-latency mobile networks.' },
  { id: '3', date: '2024-05-15', type: 'warning', title: 'DPI Alert', content: 'Observed increased DPI throttling on MCI network. Please use the latest config files.' },
];

export const FAQ_ITEMS = [
  { q: 'Why is it not connecting?', a: 'Check if you have the latest configuration file. Try switching from UDP to TCP if your network allows, or use our specialized bridge configs.' },
  { q: 'Is it really free?', a: 'Yes, this project is funded by digital rights organizations and volunteers. No ads, no fees.' },
  { q: 'How do I import the QR code?', a: 'Open the WireGuard app, tap "+" and select "Scan from QR code".' },
];
