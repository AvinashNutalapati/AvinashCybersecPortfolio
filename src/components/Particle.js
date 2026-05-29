import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        fpsLimit: 60,
        particles: {
          number: {
            value: 70,
            density: { enable: true, value_area: 1200 },
          },
          color: { value: ["#38bdf8", "#818cf8", "#2dd4bf"] },
          shape: { type: "circle" },
          opacity: {
            value: 0.5,
            random: true,
            anim: { enable: true, speed: 0.6, opacity_min: 0.1 },
          },
          size: {
            value: 2.4,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 140,
            color: "#38bdf8",
            opacity: 0.12,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.7,
            direction: "none",
            random: true,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "window",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 160, line_linked: { opacity: 0.3 } },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
