import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute } from './astro/server_DZiJVVAQ.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  const slides = [
    { index: 1, name: "Genevieve J.", description: "@ByteCraft", testimonial: "We had high expectations, but Luis and his team delivered. We\u2019re seeing a reduction in 22% in serving costs!" },
    { index: 2, name: "Laura I.", description: "Data Scientist", testimonial: "Luis is professional, dedicated, tries to understand the client's core problems... always giving insightful solutions. I would totally come back with new projects and definitely recommend him to others." },
    {
      index: 3,
      name: "Camilo C.",
      description: "@MindBees",
      testimonial: "I\u2019m really excited about the impact Memorelab has had on our business! AI models have improved our funnels by 14% increase in conversion rates ... partnering with Memorelab has truly been a game-changer for us!"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="ProjectSlider" class="swiper mt-10"${addAttribute({
    "--swiper-pagination-color": "#FF7614",
    "--swiper-pagination-bullet-inactive-color": "#fff",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-size": "19px",
    "--swiper-pagination-bullet-horizontal-gap": "10px"
  }, "style")} data-astro-cid-g42mys5r> <div class="swiper-wrapper mt-[84px] mb-[124px]" data-cursor="swipe" data-astro-cid-g42mys5r> ${slides.map((slide) => renderTemplate`<div class="swiper-slide text-white flex flex-col" role="group"${addAttribute(`${slide.index} / ${slides.length}`, "aria-label")} data-astro-cid-g42mys5r> <div class="flex flex-col justify-center items-center py-[48px] px-6 sm:px-[52px]" data-astro-cid-g42mys5r> <p class="bubble" data-astro-cid-g42mys5r> ${slide.testimonial} </p> </div> <div class="w-full px-10 sm:px-20 " data-astro-cid-g42mys5r> <div class="text-lime text-base md:text-xl font-medium" data-astro-cid-g42mys5r>${slide.name}</div> <div data-astro-cid-g42mys5r>${slide.description}</div> </div> </div>`)} </div> <div class="flex justify-around lg:justify-center mb-[68px] lg:gap-[189px]" data-astro-cid-g42mys5r> <div class="swiper-button-prev w-7 h-7 sm:w-10 sm:h-10" data-astro-cid-g42mys5r> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-astro-cid-g42mys5r><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-g42mys5r></path></svg> </div> <div class="swiper-pagination" data-astro-cid-g42mys5r></div> <div class="swiper-button-next w-7 h-7 sm:w-10 sm:h-10 rotate-180" data-astro-cid-g42mys5r> <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 448 512" data-astro-cid-g42mys5r><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> <path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" data-astro-cid-g42mys5r></path></svg> </div> </div> </div>  `;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/SwiperSlider.astro", void 0);

export { $$SwiperSlider as $ };
