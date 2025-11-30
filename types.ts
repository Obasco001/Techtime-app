import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TimeEntry {
  id: string;
  project: string;
  task: string;
  duration: number; // in minutes
  date: string;
  status: 'Completed' | 'In Progress' | 'Blocked';
}

export interface UserStats {
  totalHours: number;
  projectsCompleted: number;
  efficiencyScore: number;
}

export enum AppView {
  LANDING = 'LANDING',
  DASHBOARD = 'DASHBOARD'
}