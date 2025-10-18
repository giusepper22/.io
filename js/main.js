$(document).ready(() => {
  $(() => {
    $('[data-toggle="tooltip"]').tooltip();
  });
}); 

particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 50,            // buon numero di particelle senza appesantire
      "density": {
        "enable": true,
        "value_area": 800     // distribuzione uniforme su diverse risoluzioni
      }
    },
    "color": {
      "value": "#000000"      // particelle nere
    },
    "shape": {
      "type": "polygon",       //"triangle", "edge", "polygon"
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,           // semi-trasparente per effetto morbido
      "random": true,         // opacità variabile per effetto naturale
      "anim": {
        "enable": true,
        "speed": 0.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,             // dimensione media
      "random": true,
      "anim": {
        "enable": true,
        "speed": 3,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,           
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "bounce",
      "bounce": true,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"       // particelle attratte dal mouse con linee
      },
      "onclick": {
        "enable": true,
        "mode": "push"      
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 180,
        "line_linked": {
          "opacity": 0.5
        }
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true       // ottimizzato per schermi ad alta risoluzione
});
