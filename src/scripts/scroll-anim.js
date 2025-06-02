import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



document.addEventListener("DOMContentLoaded", () => {
    // Animar formulario desde la izquierda
  gsap.from(".cont_form", {
    scrollTrigger: {
      trigger: ".cont_form",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: -150,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

  // Animar ubicación desde la derecha
  gsap.from(".cont_ubicacion", {
    scrollTrigger: {
      trigger: ".cont_ubicacion",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    x: 150,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  });
    
     gsap.from(".cont_trayect", {
    scrollTrigger: {
      trigger: ".cont_trayect",
      start: "top 80%",              // inicia cuando el top de .cont_trayect llega al 80% de la pantalla
      toggleActions: "play none none none",
    },
    x: -200,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  });

     gsap.from("nav", {
    x: -200,       // Desde la izquierda
    opacity: 0,
    duration: 1.2,
    ease: "power3.out",
    delay: 0.3
  });
    
    gsap.from(".portada__video", {
    opacity: 0,
    scale: 1.1,
    duration: 2,
    ease: "power2.out",
    delay: 0.3,
  });

     gsap.from(".portada__texto", {
    opacity: 0,
    y: -50,
    duration: 3,
    ease: "power2.out",
  });

  const secciones = [".trayecto", ".cards_cont", ".preguntas", ".contacto"];

  secciones.forEach((selector) => {
    const elemento = document.querySelector(selector);
    if (elemento) {
      gsap.from(elemento, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: elemento,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }
  });
});
