const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", {y:"100%", y:"0%", opacity:1, duration:2, stagger:0.25});