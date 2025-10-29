import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  protected readonly projects = [
    {
      id: 'lightcrowd',
      title: 'LightCrowd : When light becomes language',
      subtitle: 'A connected bracelet transforming crowds into supportive communities through universal light signals',
      tags: 'UX Research • Product Design • IoT',
      tagColor: 'purple',
      challenge: 'Anxiety and invisibility in dense crowds at concerts',
      impact: 'Universal signaling system for distress and group reconnection',
      backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      illustration: 'hand-light-1.svg'
    },
    {
      id: 'pluka',
      title: 'Pluka – Bringing Science-Based Wellness to the Public',
      subtitle: 'Transforming a professional health app into an accessible lifestyle experience (2024–2025)',
      tags: 'UX Research • UI Design • Health Tech • Web App',
      tagColor: 'teal',
      challenge: 'Translating clinical rigor into human-centered experience',
      impact: 'From B2B expert tool to consumer-friendly health companion',
      backgroundColor: '#224452',
      illustration: 'pluka-illustration.svg'
    }
  ];
}
