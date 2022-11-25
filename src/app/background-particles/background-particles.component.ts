import { Component } from '@angular/core';


import { MoveDirection, ClickMode, HoverMode, OutMode, Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

@Component({
  selector: 'app-background-particles',
  templateUrl: './background-particles.component.html',
  styleUrls: ['./background-particles.component.css']
})
export class BackgroundParticlesComponent {
  id = "tsparticles";

  particlesOptions = {
    background: {
      color: {
        value: "#000"
      },
    },
    fullScreen: {
      enable: true,
      zIndex: -1
    },
    duration: 0,
    particles: {
      color: {
        value: "#fff"
      },
      number: {
        density: {
          enable: true,
          area: 800,
          factor: 1000
        },
        limit: 0,
        value: 300
      },
      shape: {
        options: {},
        type: "circle"
      },
      size: {
        value: 1
      }
    }
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    await loadFull(engine);
  }
}
