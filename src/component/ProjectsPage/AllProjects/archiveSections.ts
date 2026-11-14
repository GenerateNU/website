import img0 from '@/assets/images/projectspage/archive/baked/img0.svg';
import img2 from '@/assets/images/projectspage/archive/baked/img2.svg';
import img3 from '@/assets/images/projectspage/archive/baked/img3.svg';
import img4 from '@/assets/images/projectspage/archive/baked/img4.png';
import img5 from '@/assets/images/projectspage/archive/baked/img5.png';
import img6 from '@/assets/images/projectspage/archive/baked/img6.png';
import img7 from '@/assets/images/projectspage/archive/baked/img7.svg';
import img8 from '@/assets/images/projectspage/archive/baked/img8.svg';
import img9 from '@/assets/images/projectspage/archive/baked/img9.png';
import img10 from '@/assets/images/projectspage/archive/baked/img10.png';
import img12 from '@/assets/images/projectspage/archive/baked/img12.png';
import img13 from '@/assets/images/projectspage/archive/baked/img13.png';
import img15 from '@/assets/images/projectspage/archive/baked/img15.png';
import img16 from '@/assets/images/projectspage/archive/baked/img16.svg';
import img17 from '@/assets/images/projectspage/archive/baked/img17.png';
import logo_acrylix from '@/assets/images/projectspage/archive/baked/logo_acrylix.png';
import logo_board from '@/assets/images/projectspage/archive/baked/logo_board.svg';
import logo_candlemaker from '@/assets/images/projectspage/archive/baked/logo_candlemaker.png';
import logo_gce from '@/assets/images/projectspage/archive/baked/logo_gce.png';
import logo_greentower from '@/assets/images/projectspage/archive/baked/logo_greentower.png';
import logo_growver from '@/assets/images/projectspage/archive/baked/logo_growver.png';
import logo_sageware from '@/assets/images/projectspage/archive/baked/logo_sageware.png';
import logo_stridetrack from '@/assets/images/projectspage/archive/baked/logo_stridetrack.png';
import logo_unsprawl from '@/assets/images/projectspage/archive/baked/logo_unsprawl.png';
import placeholderData from '@/assets/images/projectspage/archive/baked/placeholderData.svg';
import placeholderHardware from '@/assets/images/projectspage/archive/baked/placeholderHardware.svg';
import placeholderSoftware from '@/assets/images/projectspage/archive/baked/placeholderSoftware.svg';
import logo_cortexventures from '@/assets/images/projectspage/archive/logos/cortexventures.png';
import logo_matchaflow from '@/assets/images/projectspage/archive/logos/matchaflow.png';
import logo_remetra from '@/assets/images/projectspage/archive/logos/remetra-slide.png';
import logo_rivergauge from '@/assets/images/projectspage/archive/logos/rivergauge.jpg';

// Generated from the verified repo list. Projects without a thumbnail use the shared blank placeholder.
import type { ProjectTeam } from './Project/Project';

export type ArchiveProject = {
  name: string;
  image: string;
  teams: ProjectTeam[];
  padding?: number;
  background?: string;
  fit?: 'cover';
};

export type ArchiveSection = { label: string; projects: ArchiveProject[] };

// Shared placeholder images. Cards using these are listed after cards with a real logo.
export const placeholderImages: string[] = [placeholderData, placeholderHardware, placeholderSoftware];

export const archiveSections: ArchiveSection[] = [
  {
    label: 'Fall 2025',
    projects: [
      { name: 'Candle Maker', image: logo_candlemaker, teams: ['hardware'], padding: 0 },
      { name: 'Cedar', image: placeholderHardware, teams: ['hardware'], padding: 0 },
      { name: 'GCE', image: logo_gce, teams: ['software'], padding: 0 },
      { name: 'GreenTower', image: logo_greentower, teams: ['hardware'], padding: 0 },
      { name: 'Sageware', image: logo_sageware, teams: ['hardware'], padding: 0 },
      { name: 'StrideTrack', image: logo_stridetrack, teams: ['data'], padding: 0 },
      { name: 'Unsprawl', image: logo_unsprawl, teams: ['data'], padding: 0 },
    ],
  },
  {
    label: 'Spring 2025',
    projects: [
      { name: 'Arcade', image: placeholderHardware, teams: ['hardware'], padding: 0 },
      { name: 'Candle Maker', image: logo_candlemaker, teams: ['hardware'], padding: 0 },
      { name: 'PlaitPilot', image: placeholderHardware, teams: ['hardware'], padding: 0 },
      { name: 'Uplift', image: placeholderHardware, teams: ['hardware'], padding: 0 },

      { name: 'Vetted', image: img16, teams: ['software'], padding: 0 },
      { name: 'Dearly', image: img7, teams: ['software'], padding: 0 },
      { name: 'Platemate', image: img10, teams: ['software'], padding: 0 },
      { name: 'Arenius', image: placeholderSoftware, teams: ['software'], padding: 0 },
    ],
  },
  {
    label: 'Fall 2024',
    projects: [
      { name: '3Stones', image: placeholderSoftware, teams: ['software'], padding: 0 },
      { name: 'Apprenta', image: img0, teams: ['software'], padding: 0 },
      { name: 'Nightlife', image: placeholderSoftware, teams: ['software'], padding: 0 },
      { name: 'Platnm', image: placeholderSoftware, teams: ['software'], padding: 0 },
      { name: 'Snapper', image: placeholderSoftware, teams: ['software'], padding: 0 },
    ],
  },
  {
    label: 'Spring 2024',
    projects: [
      { name: 'Algo', image: placeholderData, teams: ['data'], padding: 0 },
      { name: 'Care Wallet', image: img3, teams: ['software'], padding: 0 },
      { name: 'Concrete', image: img5, teams: ['hardware'], padding: 0 },
      { name: 'Couplet', image: img6, teams: ['software'], padding: 0 },
      { name: 'FufuPot', image: placeholderHardware, teams: ['hardware'], padding: 0 },
      { name: 'Muscle Recovery', image: placeholderHardware, teams: ['hardware'], padding: 0 },
      { name: 'SAC', image: placeholderSoftware, teams: ['software'], padding: 0 },
      { name: 'Tubender', image: img15, teams: ['hardware', 'software'], padding: 0 },
    ],
  },
  {
    label: 'Fall 2023',
    projects: [
      { name: 'Caits Curates', image: img2, teams: ['software'], padding: 0 },
      { name: 'Compound', image: img4, teams: ['software'], padding: 0 },
      { name: 'Legacy', image: placeholderSoftware, teams: ['software'], padding: 0 },
      { name: 'RoboUmp', image: placeholderHardware, teams: ['hardware'], padding: 0 },
      { name: 'SaluTemp', image: img13, teams: ['hardware'], padding: 0 },
      { name: 'SEBIK', image: placeholderHardware, teams: ['hardware'], padding: 0 },
      { name: 'Voxeti', image: img17, teams: ['software'], padding: 0 },
      { name: 'WaveWise', image: placeholderHardware, teams: ['hardware'], padding: 0 },
    ],
  },
  {
    label: 'Spring 2023',
    projects: [
      { name: 'FindHer', image: img8, teams: ['software'], padding: 0 },
      { name: 'Hidden Lock', image: placeholderHardware, teams: ['hardware'], padding: 0 },
      { name: 'My Atlas', image: img9, teams: ['software'], padding: 0 },
      { name: 'ReMo', image: img12, teams: ['software'], padding: 0 },
      { name: 'Tatum Robotics', image: placeholderHardware, teams: ['hardware'], padding: 0 },
    ],
  },
  {
    label: 'Spring 2026',
    projects: [
      { name: 'Acrylix', image: logo_acrylix, teams: ['hardware'], padding: 0 },
      { name: 'Growver', image: logo_growver, teams: ['hardware'], padding: 0 },
      { name: 'Remetra', image: logo_remetra, teams: ['data'], padding: 0, fit: 'cover' },
      { name: 'River Gauge', image: logo_rivergauge, teams: ['hardware'], padding: 0, background: '#0c1037' },
      { name: 'Matcha Flow', image: logo_matchaflow, teams: ['hardware'], padding: 0, fit: 'cover' },
      { name: 'Board', image: logo_board, teams: ['games'], padding: 0 },
      { name: 'Cortex Ventures', image: logo_cortexventures, teams: ['data'], padding: 0, background: '#16101c' },
    ],
  },
];
