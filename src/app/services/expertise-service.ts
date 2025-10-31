import { Injectable } from '@angular/core';

export interface ExpertiseItem {
  name: string;
  icon: string;
}

export type ExpertiseKey =
  | 'intent-note'
  | 'benchmark'
  | 'data-collection'
  | 'personas'
  | 'empathy-maps'
  | 'experience-vision'
  | 'content-mapping'
  | 'flow-diagrams'
  | 'composition-sketches'
  | 'graphic-mockups'
  | 'low-fidelity-prototype'
  | 'five-second-test'
  | 'high-fidelity-prototype'
  | 'user-test-protocol'
  | 'portfolio-page'
  | 'presentation-video';

@Injectable({
  providedIn: 'root'
})
export class ExpertiseService {
  protected readonly expertise: Record<ExpertiseKey, ExpertiseItem> = {
    'intent-note': { name: 'Intent Note', icon: '/icons/intent-note.svg' },
    'benchmark' : { name: 'Benchmark', icon: '/icons/benchmark.svg' },
    'data-collection' : { name: 'Data collection', icon: '/icons/data-collection.svg' },
    'personas': { name: 'Personas', icon: '/icons/personas.svg' },
    'empathy-maps': { name: 'Empathy maps', icon: '/icons/empathy-maps.svg' },
    'experience-vision': { name: 'Experience Vision', icon: '/icons/experience-vision.svg' },
    'content-mapping': { name: 'Content Mapping', icon: '/icons/content-mapping.svg' },
    'flow-diagrams': { name: 'Flow Diagrams', icon: '/icons/flow-diagrams.svg' },
    'composition-sketches': { name: 'Composition Sketches', icon: '/icons/composition-sketches.svg' },
    'graphic-mockups': { name: 'Graphic Mockups', icon: '/icons/graphic-mockups.svg' },
    'low-fidelity-prototype': { name: 'Low-Fidelity Prototype', icon: '/icons/low-fidelity-prototype.svg' },
    'five-second-test': { name: 'Five-Second Test Protocol & Report', icon: '/icons/five-second-test.svg' },
    'high-fidelity-prototype': { name: 'High-Fidelity Prototype', icon: '/icons/high-fidelity-prototype.svg' },
    'user-test-protocol': { name: 'User Test Protocol & Report', icon: '/icons/user-test-protocol.svg' },
    'portfolio-page': { name: 'Portfolio Page', icon: '/icons/portfolio-page.svg' },
    'presentation-video': { name: 'Presentation Video', icon: '/icons/presentation-video.svg' }
  };

  public getExpertiseItem(key: ExpertiseKey): ExpertiseItem {
    return this.expertise[key];
  }

  public getAllExpertiseItems(): ExpertiseItem[] {
    return Object.values(this.expertise);
  }

  public getExpertiseCollection(keys: ExpertiseKey[]): ExpertiseItem[] {
    return keys.map(key => this.expertise[key]);
  }
}
