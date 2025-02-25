particlesJS("particles-js", {
  particles: {
    number: { value: 150, density: { enable: true, value_area: 1000 } },
    color: { value: "#00ffff" },
    shape: { type: "circle" },
    opacity: { value: 0.6, random: true },
    size: { value: 5, random: true },
    move: { enable: true, speed: 3, direction: "none", out_mode: "out" }
  },
  interactivity: {
    events: {
      onhover: { enable: true, mode: "grab" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      grab: { distance: 140, line_linked: { opacity: 1 } },
      push: { particles_nb: 6 }
    }
  }
});
