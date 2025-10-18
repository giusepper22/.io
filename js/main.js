$(document).ready(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
}); 

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 40
    },
    "color": {
      "value": "#000000"
    },
    "opacity": {
      "value": 0.4
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "color": "#000000",
      "opacity": 0.1
    },
    "move": {
      "enable": true,
      "speed": 0.6
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true
      },
      "onclick": {
        "enable": true
      }
    }
  },
  "retina_detect": true
});
