document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);
  //   ------------
  gsap.from(".one", {
    duration: 1,
    delay: 1,
    x:"100%",
  });
  gsap.from(".two", {
    duration: 1,
    delay: 1,
    x: "-100%"
  });
  gsap.to(".content--top", {
    duration: 0.5,
    delay: 2,
    y:"0%",
  });
  gsap.to(".content--bottom", {
    duration: 0.5,
    delay: 2,
    y: "100%"
  });
//   ------------
  gsap.from(".about__text", {
    y: 100,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".about__text",
      start: "top bottom",
      end: "top top",
    },
  });
  gsap.from(".about__img", {
    x: -100,
    duration: 1,
    opacity: 0,
    delay: 1,
    scrollTrigger: {
      trigger: ".about__block",
      start: "center bottom",
    },
  }); 
//   ------------
  let images = document.querySelectorAll(".portfolio__img img");

  images = Array.from(images);

  images.forEach((img, index) => {
    gsap.set(img, { opacity: 0 });

    gsap.to(img, {
      opacity: 1,
      scale: 1,
      scrollTrigger: {
        trigger: img,
        start: "top bottom",
        end: "center center",
        scrub: true,
        toggleActions: "play none none none",
      },
    });
  });

});
