console.clear()

gsap.registerPlugin(ScrollTrigger);
gsap.config({trialWarn: false});


// const split = new SplitText(".wrapper p", {
//   type: "chars",
// });

const split = new SplitType('#target', { types: 'chars' })

console.log(split);

const tl  = gsap.timeline({
  scrollTrigger: {
    trigger: "#about",
    start: "top top",
    end: "+=100%",
    pin: true,
    scrub: 0.75,
  }
})
  .set(split.chars, {
    color: "#efefef",
    stagger: 0.1,
  }, 0.1);
