import 'zone.js/dist/zone';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { gsap } from 'gsap';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'home.html',
})
export class App implements AfterViewInit {
  @ViewChildren('box')
  box!: QueryList<ElementRef>;

  name = 'Angular';

  ngAfterViewInit(): void {
    this.box.forEach((boxDiv: ElementRef<HTMLDivElement>) => {
      gsap.to('.box', {
        rotation: 27,
        x: 100,
        duration: 3,
        delay: 0.5,
        ease: 'elastic',
      });
    });
  }
}

bootstrapApplication(App);
