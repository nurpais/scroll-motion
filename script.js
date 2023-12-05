gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

window.addEventListener('DOMContentLoaded', () => {
  const blocks = gsap.utils.toArray('.block');

  blocks.forEach((block, i) => {
    if (block.querySelector('.box-place')) {
      const place = block.querySelector('.box-place');

      let test = gsap.timeline({
        scrollTrigger: {
          trigger: block,
          start: '-=' + blocks[i].clientHeight + ' 500px',
          end: 'top 500px',
          scrub: 1.6,
          // markers: true,
        },
      });

      test.to('.box', {
        ease: 'none',
        motionPath: {
          path: [{ x: place.offsetLeft, y: place.offsetTop - 296 }],
        },
      });
    }
  });
});
// const lenis = new Lenis();

// lenis.on('scroll', ScrollTrigger.update);

// gsap.ticker.add((time) => {
//   lenis.raf(time * 1000);
// });

// gsap.ticker.lagSmoothing(0);

// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);
