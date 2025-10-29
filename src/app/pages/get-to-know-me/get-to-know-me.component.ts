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
      bgColor: 'rgba(45,143,204,0.05)'
    },
    {
      title: 'Nudge Theory',
      description: 'Subtle interventions that guide choices without restricting freedom',
      bgColor: 'rgba(165,0,9,0.05)'
    },
    {
      title: 'Enactive design',
      description: 'Designing for embodied cognition and sensorimotor experience',
      bgColor: 'rgba(45,143,204,0.05)'
    }
  ];

  protected readonly expertise = [
    'Intent Note', 'Benchmark', 'Data collection', 'Personas',
    'Empathy maps', 'Experience Vision', 'Content Mapping', 'Flow Diagrams',
    'Composition Sketches', 'Graphic Mockups', 'Low-Fidelity Prototype', 'Five-Second Test Protocol & Report',
    'High-Fidelity Prototype', 'User Test Protocol & Report', 'Portfolio Page', 'Presentation Video'
  ];
}
