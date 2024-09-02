var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#home",
    start: "top top",
    pin: true,
    scrub: 1,
    end: "bottom -400%",
  },
});
tl.to("#center-image", {
  left: "50%",
  duration: 0.5,
  ease: "sine.out",
}).to("#overlay .bg-container", {
  scale: 1,
  duration: 5,
  ease: "sine.out",
});
tl.to(
  "#circle #circle-btm img",
  {
    rotate: "-180deg",
    stagger: 0.1,
    duration: 1,
    scale: 0.6,
    ease: "sine.out",
  },
  "1"
)

  .to(
    "#circle #circle-top img",
    {
      scale: 0.6,
      stagger: 0.1,
      duration: 1,
      ease: "sine.out",
    },
    "1"
  )
  .to(
    "#circle ",
    {
      scale: 0.6,
      duration: 1,
      ease: "sine.out",
    },
    "1"
  )
  .to(
    "#smcircle ",
    {
      scale: 0.5,
      duration: 0.8,
      ease: "sine.out",
    },
    "1"
  )
  .to(
    "#cimage ",
    {
      scale: 0,
      duration: 1,
      ease: "sine.out",
    },
    "1"
  )
  .to(
    "#center-image h5 ",
    {
      opacity: 0,
      duration: 0.2,
      ease: "sine.out",
    },
    "1"
  )
  .to(
    "#overlay>h1#gallery ",
    {
      bottom: "-50%",
      ease: "sine.out",
    },
    "1"
  )
  .to(
    "#overlay #pink-circle ",
    {
      top: "50%",
      scale: 1.5,
      ease: "sine.out",
    },
    "1"
  )
  .to(
    "#overlay #pink-circle ",
    {
      opacity: 0,
      duration:0.45,
      delay:-0.1,
      ease: "sine.out",
    },
    "2"
  )
  .to(
    "#overlay>h1#pinkflare ",
    {
      bottom: "8%",
      rotate: 0,
      delay: -0.4,
      duration:1,
      ease: "sine.out",
    },
    "2"
  )
  .to(
    "#smcircle ",
    {
      scale: 0,
      duration: 1,
      ease: "sine.out",
    },
    "2"
  )
  .to(
    "#circle ",
    {
      scale: 0,
      duration: 1,
      ease: "sine.out",
    },
    "2"
  )
  .to(
    ".pink-div ",
    {
      top: 0,
      duration: 2.5,
      ease: "sine.out",
    },
    "2"
  )
  .to(".pink-div ", {
    top: "-100%",
    duration: 1,
    ease: "sine.out",
  });

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: "#page2",
    start: "top top",
    pin: true,
    scrub: 1,
    end: "bottom -400%",
  },
});

tl2
 .to("#page2-top .circle", {
 top: "50%",
  stagger: 0.1,
  duration: 1,
    ease: "sine.out",
})
.to("#page2-top .circle", {
    left: "50%",
     duration: 1,
       ease: "sine.out",
})
.to("#page2-top .circle", {
    scale:10,
    background: "linear-gradient(to right,#b4aad5,#dfa7b4)",
    duration: 1,
    ease: "sine.out",
})
.to("#page2-top h1", {
    left:"-250%",
    duration: 8,
    ease: "sine.out",
 },"page2")

 .to("#page2-btm #p1", {
    opacity:0,
    duration: 1,
    ease: "sine.out",
 },"page2")

 .to("#page2-btm #p2", {
    opacity:1,
    duration: 1,
    ease: "sine.out",
    delay:1,
 },"page2")

 .to("#page2-top .color-combinations .color-strip", {
    height:"100%",
    top:0,
    duration: 1,
  stagger: 0.3,
    ease: "sine.out",
    delay:1,
 },"page2-2")

 .to("#page2-top .color-combinations .color-strip .strip2", {
    left:"-10%",
    duration: 1,
    ease: "sine.out",
 },"page2-3")
 .to("#page2-top .color-combinations .color-strip .strip3", {
    left:"-20%",
    duration: 1,
    delay:0.1,
    ease: "sine.out",
 },"page2-3")