/* empty css                                         */
import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as createAstro } from '../chunks/astro/server_DZiJVVAQ.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DfrG_cOY.mjs';
import { $ as $$Container } from '../chunks/ViewTransitions_C8S_-SWg.mjs';
import 'clsx';
import { $ as $$SwiperSlider } from '../chunks/SwiperSlider_CtletNCK.mjs';
import { $ as $$BottomHero } from '../chunks/BottomHero_Cs90zGt3.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class=""> <div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <main class="px-6 py-16 max-w-7xl mx-auto"> <div class="space-y-20"> <!-- Main Heading --> <h1 class="text-5xl md:text-8xl max-w-4xl my-10">
Accelerate your company with <br><span class="text-primary">AI superpowers</span><span class="text-black">.</span> </h1> <!-- Subscription Section --> <div class="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"> <div class="space-y-4 max-w-xl"> <h2 class="text-3xl md:text-3xl">What can AI do for your business?</h2> <p class="text-gray-600 text-lg">
We are an AI accelerator agency. We help businesses ride the AI revolution.
                                We help you with AI Strategy, AI Development, and AI Automation
</p> </div> <!--<div class="flex flex-col md:flex-row content-start items-start gap-4 w-full md:w-auto">--> <!--    <div class="space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto">--> <!--        <h3 class="text-3xl md:text-4xl text-primary p-4">Start here</h3>--> <!--        <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-3">--> <!--            <input type="email" placeholder="Email Address"--> <!--                   class="w-full md:w-[300px] border border-gray-300 p-2 rounded">--> <!--            <button--> <!--                    class="bg-black text-white hover:bg-primary/90 w-full sm:w-auto px-4 py-2 rounded">--> <!--                Subscribe--> <!--            </button>--> <!--        </div>--> <!--    </div>--> <!--</div>--> </div> </div> </main> </div> <!--<div class="flex-row items-center">--> <!--    <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6">--> <!--        <div class="p-4 grayscale transition duration-200 hover:grayscale-0">--> <!--            <img src="./clients/01.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width=""--> <!--                 height=""/>--> <!--        </div>--> <!--        <div class="p-4 grayscale transition duration-200 hover:grayscale-0">--> <!--            <img src="./clients/02.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width=""--> <!--                 height=""/>--> <!--        </div>--> <!--        <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0">--> <!--            <img src="./clients/03.svg" class="h-9 w-auto m-auto" loading="lazy" alt="client logo" width=""--> <!--                 height=""/>--> <!--        </div>--> <!--        <div class="p-4 grayscale transition duration-200 hover:grayscale-0">--> <!--            <img src="./clients/04.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width=""--> <!--                 height=""/>--> <!--        </div>--> <!--        <div class="p-4 flex grayscale transition duration-200 hover:grayscale-0">--> <!--            <img src="./clients/05.svg" class="h-8 w-auto m-auto" loading="lazy" alt="client logo" width=""--> <!--                 height=""/>--> <!--        </div>--> <!--        <div class="p-4 grayscale transition duration-200 hover:grayscale-0">--> <!--            <img src="./clients/06.svg" class="h-12 w-auto mx-auto" loading="lazy" alt="client logo" width=""--> <!--                 height=""/>--> <!--        </div>--> <!--    </div>--> <!--</div>--> </div> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://memorelab.com");
const $$Topic = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Topic;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid place-items-center gap-5 mb-10 md:flex"> <h2 class="text-4xl sm:text-5xl px-1.5 font-medium bg-primary rounded-md"> ${title} </h2> <p class="text-xl font-normal text-center md:text-start lg:w-2/3"> ${description} </p> </div>`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/Topic.astro", void 0);

const $$Testimonial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "What people say about us", "description": "Inspired by experience, driven by results." })} </div> <div class="rounded-[45px] bg-black mb-[150px] text-white"> ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/Testimonial.astro", void 0);

const $$Case = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="projects"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Case Studies", "description": "Success stories from our latest projects." })} </div> <div class="w-full p-12 bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex text-white"> <div class="grid grid-cols-1 md:grid-cols-2 gap-2 divide-x-0 md:divide-x divide-y md:divide-y-0"> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">
Automated 90% data aggregation efforts and reduced report generation time by 80% using AI Agents
</div> <a href="/articles/transforming-daily-report-generation-ai-agents"> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Learn more</div> <img src="/services/agc.svg" alt="arrow"> </div> </a> </div> <div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2"> <div class="w-full text-lg font-normal">
Conversational AI solution using GPT-4 and LLama models to overcome chatbot limitations, resulting in a 14% increase in conversion rates
</div> <a href="/articles/transforming-sales-pipelines-conversational-ai"> <div class="justify-start items-center gap-[15px] inline-flex"> <div class="text-lime text-xl font-normal leading-7">Learn more</div> <img src="/services/agc.svg" alt="arrow"> </div> </a> </div> <!--<div class="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">--> <!--    <div class="w-full text-lg font-normal">--> <!--        Fusce sit amet iaculis ipsum. Donec mi ante, lobortis in lacus ac, scelerisque accumsan est. Vivamus at lectus malesuada, iaculis neque eget,--> <!--    </div>--> <!--    <div class="justify-start items-center gap-[15px] inline-flex">--> <!--        <div class="text-lime text-xl font-normal leading-7">Learn more</div>--> <!--        <img src="/services/agc.svg" alt="arrow">--> <!--    </div>--> <!--</div>--> </div> <!-- <div class="w-[186px] h-[0px] origin-top-left rotate-90 border border-white"></div> --> <!-- <div class="w-[186px] h-[0px] origin-top-left rotate-90 border border-white"></div> --> </div> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/Case.astro", void 0);

const $$MainServicesBase = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="services"> ${renderComponent($$result2, "Topic", $$Topic, { "title": "Our Services", "description": "How we can help transform your business with AI." })} </div> <div class="flex-row items-center my-6 rounded-[45px]"> <div class="h-full p-12 md:p-12 bg-primary rounded-[45px] shadow-card border border-black justify-between items-center flex text-black"> <div class="flex-col justify-center items-start gap-12 inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-primary-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex mb-5"> <div class="text-4xl font-semibold">Memorelab AI FastTrack</div> </div> <div class="px-[7px] bg-primary-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-xl font-medium">All you need to jumpstart your AI project <br> with an
                            AI opportunities report, competitor analysis, <br> detailed product blueprint, and
                            more.
</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex" href="/ai-fast-track"> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute" src="./services/aw.svg" alt=""> </div> <div class="text-xl font-normal leading-7">Learn more</div> </a> </div> <div class="md:w-[210px] md:h-[170px] md:pt-0.5 md:pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block" src="./services/04.svg" alt=""> </div> </div> </div> <div class="flex-row items-center my-6 rounded-[45px]"> <div class="h-full p-12 md:p-12 bg-black rounded-[45px] shadow-card border border-black justify-between items-center flex text-white"> <div class="flex-col justify-center items-start gap-12 inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-primary-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex mb-5"> <div class="text-4xl font-semibold">Memorelab AI Dev Program</div> </div> <div class="px-[7px] bg-primary-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-xl font-medium">Already know exactly what you want to build? <br> <br>Get
                            your MVP live in 4 weeks. <br><br>Let's make your idea happen.
</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex" href="https://app.pipefy.com/public/form/GYGkwXKS"> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute" src="./services/aw.svg" alt=""> </div> <div class="text-xl font-normal leading-7">Let's talk!</div> </a> </div> <div class="md:w-[210px] md:h-[170px] md:pt-0.5 md:pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block" src="./services/03.svg" alt=""> </div> </div> </div> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/MainServicesBase.astro", void 0);

const $$Astro = createAstro("https://memorelab.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<!-- Memorelab Official Astro theme -->${renderComponent($$result, "Layout", $$Layout, { "title": "Memorelab" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> ${renderComponent($$result2, "Hero", $$Hero, {})} <!--<MainServices/>--> ${renderComponent($$result2, "MainServicesBase", $$MainServicesBase, {})} <!--<EmailCTA/>--> ${renderComponent($$result2, "Case", $$Case, {})} ${renderComponent($$result2, "Testimonial", $$Testimonial, {})} <!--<Contact/>--> ${renderComponent($$result2, "BottomHero", $$BottomHero, {})} </main> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/index.astro", void 0);

const $$file = "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
