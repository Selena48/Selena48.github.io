import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-get-to-know-me',
  imports: [CommonModule],
  templateUrl: './get-to-know-me.component.html',
  styleUrl: './get-to-know-me.component.css'
})
export class GetToKnowMeComponent {
  protected readonly approaches = [
    {
      emoji: '🤸‍♀️',
      title: 'Human-Centered',
      description: 'Cognitive science and psychology inform every design decision, ensuring solutions align with how people actually think and behave.'
    },
    {
      emoji: '🔍️',
      title: 'Research-Driven',
      description: 'User research, testing, and data guide iterations. I believe in validating assumptions rather than relying on intuition alone.'
    },
    {
      emoji: '💻',
      title: 'Technically Grounded',
      description: 'Understanding development constraints (Angular, React, Vue, Laravel) helps me design solutions that are both beautiful and buildable.'
    },
    {
      emoji: '👁️',
      title: 'Critically Reflective',
      description: 'Every project is a learning opportunity. I actively seek feedback and question my own designs to continuously improve.'
    }
  ];

  protected readonly explorations = [
    {
      title: 'Behavior design',
      description: 'How small changes in design can shape user habits and decisions',
      bgColor: 'rgba(45,143,204,0.05)',
      image: '/assets/4.png',
    },
    {
      title: 'Nudge Theory',
      description: 'Subtle interventions that guide choices without restricting freedom',
      bgColor: 'rgba(165,0,9,0.05)',
      image: '/assets/5.png',
    },
    {
      title: 'Enactive design',
      description: 'Designing for embodied cognition and sensorimotor experience',
      bgColor: 'rgba(45,143,204,0.05)',
      image: '/assets/6.png',
    }
  ];

  protected readonly expertise = [
    { name: 'Intent Note', icon: '/icons/intent-note.svg' },
    { name: 'Benchmark', icon: '/icons/benchmark.svg' },
    { name: 'Data collection', icon: '/icons/data-collection.svg' },
    { name: 'Personas', icon: '/icons/personas.svg' },
    { name: 'Empathy maps', icon: '/icons/empathy-maps.svg' },
    { name: 'Experience Vision', icon: '/icons/experience-vision.svg' },
    { name: 'Content Mapping', icon: '/icons/content-mapping.svg' },
    { name: 'Flow Diagrams', icon: '/icons/flow-diagrams.svg' },
    { name: 'Composition Sketches', icon: '/icons/composition-sketches.svg' },
    { name: 'Graphic Mockups', icon: '/icons/graphic-mockups.svg' },
    { name: 'Low-Fidelity Prototype', icon: '/icons/low-fidelity-prototype.svg' },
    { name: 'Five-Second Test Protocol & Report', icon: '/icons/five-second-test.svg' },
    { name: 'High-Fidelity Prototype', icon: '/icons/high-fidelity-prototype.svg' },
    { name: 'User Test Protocol & Report', icon: '/icons/user-test-protocol.svg' },
    { name: 'Portfolio Page', icon: '/icons/portfolio-page.svg' },
    { name: 'Presentation Video', icon: '/icons/presentation-video.svg' }
  ];
}
