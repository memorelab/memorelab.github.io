/* empty css                                         */
import { b as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, d as addAttribute, e as renderHead, f as renderSlot } from '../chunks/astro/server_DZiJVVAQ.mjs';
import 'kleur/colors';
import { $ as $$Container, a as $$ViewTransitions, b as $$Navbar } from '../chunks/ViewTransitions_C8S_-SWg.mjs';
/* empty css                                  */
import 'clsx';
import { $ as $$SwiperSlider } from '../chunks/SwiperSlider_CtletNCK.mjs';
import { $ as $$, a as $$ChevronDown } from '../chunks/ChevronDown_Ci2nL6iK.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://memorelab.com");
const $$Check = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Check;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "check", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M20 6 9 17l-5-5"></path> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/node_modules/lucide-astro/dist/Check.astro", void 0);

const $$Astro$3 = createAstro("https://memorelab.com");
const $$Star = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Star;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "star", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/node_modules/lucide-astro/dist/Star.astro", void 0);

const $$Astro$2 = createAstro("https://memorelab.com");
const $$X = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$X;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "x", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M18 6 6 18"></path> <path d="m6 6 12 12"></path> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/node_modules/lucide-astro/dist/X.astro", void 0);

const qa_pairs = [
	{
		index: 1,
		question: "I don't have a technical background. How can I leverage AI in my company?",
		answer: "Our mission at Memorelab is to demystify AI and make it easy for domain experts and entrepreneurs to build AI products. Previous knowledge in AI is optional - we teach you the foundational and critical ideas and guide you to bring your AI product to life."
	},
	{
		index: 2,
		question: "How much capital do I need to get started?",
		answer: "The investment can significantly vary depending on the product specs, so we created the Memorelab AI FastTrack program to estimate the level of investment needed. We give you everything you need to understand your industry's opportunities, how much it would cost to implement them, and the detailed blueprint to bring them to life."
	},
	{
		index: 3,
		question: "What cost-effective AI strategies do you offer for startups?",
		answer: "We offer the Memorelab AI FastTrack, where you will get everything you need to understand the AI landscape in your industry- from current opportunities to how competitors are using AI, plus a detailed blueprint to develop AI product extensions using resources efficiently. Also, you have an hour of free consultation with our AI engineer to review the material and answer any questions."
	},
	{
		index: 4,
		question: "What AI models do you work with?",
		answer: "We're model agnostic, meaning we can work with GPT-4, Claude, LLama, or Mixtral models. Our approach focuses on selecting the models that best fit your specific needs, factoring in both performance considerations and total cost of ownership. When advantageous, we may employ a mixture of models within a single solution to optimize cost-benefit."
	},
	{
		index: 5,
		question: "I already know what I want to build. How can we work together?",
		answer: "Awesome! We can help you bring that product to life. We offer product consultation and development services. Let's talk!"
	}
];
const faq = {
	qa_pairs: qa_pairs
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$FooterExtended = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-primary bg-fixed bg-bottom text-black"> ', ' </footer> <script>\n    const year = new Date().getFullYear();\n    document.getElementById("currentYear").innerHTML = `${year}`;\n<\/script>'], ["", '<footer class="bg-primary bg-fixed bg-bottom text-black"> ', ' </footer> <script>\n    const year = new Date().getFullYear();\n    document.getElementById("currentYear").innerHTML = \\`\\${year}\\`;\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-6"> <div class="flex flex-col items-center justify-between md:flex-row"> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <img class="w-auto h-20" src="/logotipo_memorelab_negative.svg" alt="Logo"> </div> <div class="flex mt-4 md:m-0"> <div class="-mx-4">
@ <span id="currentYear"></span> Memorelab | Made with ❤️ from SP,Brazil
</div> </div> </div> </div> ` }));
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/FooterExtended.astro", void 0);

const $$Astro$1 = createAstro("https://memorelab.com");
const $$LayoutFastTrack = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutFastTrack;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Memorelab</title><meta name="description" content="Memorelab is your dev AI partner. We help you to build better products by providing you with the right tools and resources."><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white font-SpaceGrotesk flex flex-col min-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "FooterExtended", $$FooterExtended, {})} </body></html>`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/layouts/LayoutFastTrack.astro", void 0);

const $$Astro = createAstro("https://memorelab.com");
const $$AccordionOpen = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AccordionOpen;
  const { index, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div id="accordion__item" class="accordion__item group h-[160px] bg-zinc-100 overflow-hidden w-full transition-all duration-500 mb-[30px] rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23] active bg-lime" style="height: 100%;"> <div class="accordion__toggle w-full h-[160px] flex items-center justify-between p-5"> <h4 class="flex items-center gap-[25px]"><span class="hidden sm:block sm:text-6xl">0${index}</span> ${title}</h4></div> </div> <div id="Optimization accordion__item menu content" aria-labelledby="Optimization accordion__item menu button " class="accordion__content px-5"> <div class="w-full h-[2px] bg-black"></div> <p class="mb-4 mt-1 max-w-full pt-5 pb-[60px] transition-[height]">${description}</p></div>`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/AccordionOpen.astro", void 0);

const $$AiFastTrack = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutFastTrack", $$LayoutFastTrack, { "title": "Memorelab AI FastTrack" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <div class="w-full flex flex-col items-center justify-center bg-primary"> <div class="relative flex flex-col-reverse min-h-screen  items-center md:flex-row mx-auto"> <div class="row items-center"> <div class="md:text-center space-y-10 px-10 py-20"> <h1 class="text-5xl font-medium leading-none md:text-6xl">Your product + <br class="md:hidden"> AI superpowers</h1> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12">Everything you need to start your AI journey. <br> From strategy and ideation to execution.</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="#CTA"> <h2 class="text-center text-xl font-normal leading-7">Start your AI journey</h2> </a> <div class="flex items-center justify-center"> <div class="max-w-2xl p-6 bg-zinc-950 rounded-lg mx-auto"> <div class="flex gap-1 mb-4 mx-auto justify-center"> ${renderComponent($$result2, "Star", $$Star, { "class": "w-5 h-5 fill-emerald-400 stroke-emerald-400", "viewBox": "0 0 24 24", "aria-hidden": "true" })} ${renderComponent($$result2, "Star", $$Star, { "class": "w-5 h-5 fill-emerald-400 stroke-emerald-400", "viewBox": "0 0 24 24", "aria-hidden": "true" })} ${renderComponent($$result2, "Star", $$Star, { "class": "w-5 h-5 fill-emerald-400 stroke-emerald-400", "viewBox": "0 0 24 24", "aria-hidden": "true" })} ${renderComponent($$result2, "Star", $$Star, { "class": "w-5 h-5 fill-emerald-400 stroke-emerald-400", "viewBox": "0 0 24 24", "aria-hidden": "true" })} ${renderComponent($$result2, "Star", $$Star, { "class": "w-5 h-5 fill-emerald-400 stroke-emerald-400", "viewBox": "0 0 24 24", "aria-hidden": "true" })} </div> <blockquote class="space-y-4"> <p class="text-black text-lg leading-relaxed">
"We had high expectations, but Luis and his team delivered. We’re seeing a reduction in 22% in serving costs!"
</p> <footer class="text-lg"> <span class="font-medium text-emerald-400">Genevieve J.</span> <span class="text-emerald-400 italic font-normal">@</span> <span class="font-medium text-emerald-400">ByteCraft</span> </footer> </blockquote> </div> </div> </div> </div> </div> </div> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="space-y-6 mt-20"> <h1 class="text-4xl md:text-center md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight mb-10">
History's Lessons Are Clear...
</h1> <p class="text-xl md:text-2xl leading-relaxed space-y-3">
Those who bet against technological revolutions have lost.
<br> <br>
Think of the businesses that ignored the Internet boom or dismissed the digital age.
<br> <br>
Today, they only serve as cautionary tales.
</p> <p class="text-xl md:text-2xl leading-relaxed space-y-3">
As a startup owner, <em class="font-semibold">you understand that innovation is your lifeline</em>.
<br> <br>
You thrive on change, disruption, and the pursuit of the next big idea.
<br> <br>
However, without a solid AI strategy, are you not effectively betting against this new tech revolution?
<br> <br> <em class="font-semibold">Failing to harness AI is more than merely a matter of standing still - it means moving backward.</em> </p> <p class="text-xl md:text-2xl leading-relaxed space-y-3">
Your startup is founded on bold ideas.
<br> <br>
Equip it with the power of AI and position yourself to thrive in
                    this new era of artificial intelligence.
</p> </div> ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="space-y-6 mt-20"> <h1 class="text-4xl md:text-center md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight mb-10">
What we offer?
</h1> </div> <div class="flex-row items-center my-6 rounded-[45px]"> <div class="h-full p-6 md:p-12 bg-primary rounded-[45px] shadow-card border border-black justify-between items-center flex text-black"> <div class="flex-col justify-center items-start gap-12 inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-primary-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex mb-5"> <div class="text-4xl font-semibold">Memorelab AI FastTrack</div> </div> <div class="px-[7px] bg-primary-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-xl font-medium">All you need to jumpstart your AI project <br> with an
                                    AI opportunities report, competitor analysis, <br> detailed product blueprint, and
                                    more.
</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex" href="#CTA"> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute" src="./services/aw.svg" alt=""> </div> <div class="text-xl font-normal leading-7">Book now!</div> </a> </div> <div class="md:w-[210px] md:h-[170px] md:pt-0.5 md:pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block" src="./services/04.svg" alt=""> </div> </div> </div> <div class="flex-row items-center my-6 rounded-[45px]"> <div class="h-full p-6 md:p-12 bg-black rounded-[45px] shadow-card border border-black justify-between items-center flex text-white"> <div class="flex-col justify-center items-start gap-12 inline-flex"> <div class="flex-col justify-start items-start flex"> <div class="px-[7px] bg-primary-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex mb-5"> <div class="text-4xl font-semibold">Memorelab AI Dev Program</div> </div> <div class="px-[7px] bg-primary-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex"> <div class="text-xl font-medium">Already know exactly what you want to build? <br> <br>Get
                                    your MVP live in 4 weeks. <br><br>Let's make your idea happen.
</div> </div> </div> <a class="justify-start items-center gap-[15px] inline-flex" href="https://app.pipefy.com/public/form/GYGkwXKS"> <div class="w-[41px] h-[41px] relative"> <img class="w-[41px] h-[41px] left-0 top-0 absolute" src="./services/aw.svg" alt=""> </div> <div class="text-xl font-normal leading-7">Let's talk!</div> </a> </div> <div class="md:w-[210px] md:h-[170px] md:pt-0.5 md:pb-[1.95px] justify-center items-center flex"> <img class="hidden md:block" src="./services/03.svg" alt=""> </div> </div> </div> ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="rounded-[45px] bg-black mb-[150px] text-white mt-20"> ${renderComponent($$result3, "SwiperSlider", $$SwiperSlider, {})} </div> ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="max-w-6xl mx-auto px-4 py-12 space-y-20"> <!-- Header Section --> <div class="space-y-6"> <p class="text-center text-cyan-400 uppercase tracking-wider">Memorelab’s AI FastTrack</p> <h1 class="text-4xl md:text-center md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
Everything you need to start and launch a successful AI product.
</h1> <!--<p class="max-w-3xl mx-auto text-lg leading-relaxed">--> <!--    Description--> <!--</p>--> </div> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="space-y-4"> <h2 class="text-3xl ">AI Opportunities Report</h2> <ul class="text-gray-200 list-disc"> <li>Identifies specific AI opportunities that fit your company's goals and product
                                capabilities.
</li> <li>Features real-world examples of companies successfully leveraging AI for innovation and
                                efficiency.
</li> <li>Provides actionable pathways and suggestions specific to your business environment.</li> </ul> </div> <div class="relative aspect-video"> <img src="/fastai/p9.png?height=400&width=600" alt=" presentation slide" class="rounded-lg shadow-2xl w-full h-full object-cover"> </div> </div> <div class="grid md:grid-cols-2 gap-12 items-center md:grid-flow-row-dense"> <div class="relative aspect-video md:col-start-1"> <img src="/fastai/p2.png?height=400&width=600" alt="Business idea framework screenshot" class="rounded-lg shadow-2xl w-full h-full object-cover"> </div> <div class="space-y-4 md:col-start-2"> <h2 class="text-3xl">AI Competitor Analysis with Recommendations</h2> <ul class="text-gray-200 list-disc"> <li>Analyzes competitors' AI strategies and their successes.</li> <li>Offers actionable recommendations to enhance your competitive position.</li> <li>Includes case studies of competitors effectively using AI to gain market advantage.</li> </ul> </div> </div> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="space-y-4"> <h2 class="text-3xl ">Personalized AI Trend Report</h2> <ul class="text-gray-200 list-disc"> <li>Highlights the latest AI trends relevant to your industry, with real case
                                examples.
</li> <li>Covers emerging technologies, market shifts, and industry best practices.</li> <li>Helps you strategically integrate AI into your business plan using proven methods.</li> </ul> </div> <div class="relative aspect-video"> <img src="/fastai/p1.png?height=400&width=600" alt=" presentation slide" class="rounded-lg shadow-2xl w-full h-full object-cover"> </div> </div> <div class="grid md:grid-cols-2 gap-12 items-center md:grid-flow-row-dense"> <div class="relative aspect-video md:col-start-1"> <img src="/fastai/p3.png?height=400&width=600" alt="Business idea framework screenshot" class="rounded-lg shadow-2xl w-full h-full object-cover"> </div> <div class="space-y-4 md:col-start-2"> <h2 class="text-3xl ">Detailed Blueprint for Your AI Product Development</h2> <ul class="text-gray-200 list-disc"> <li>Provides a step-by-step plan for developing and launching your AI product.</li> <li>Includes guidelines on technical architecture, phases, resources, and timelines.</li> <li>Utilizes real-world examples to illustrate successful AI product development
                                strategies.
</li> </ul> </div> </div> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="space-y-4"> <h2 class="text-3xl ">Budget and ROI Analysis</h2> <ul class="text-gray-200 list-disc"> <li>Offers an in-depth financial analysis of AI initiatives with tangible benefits.</li> <li>Covers estimated costs, potential savings, and revenue enhancements.</li> <li>Provides case studies of companies achieving significant ROI through AI adoption.</li> </ul> </div> <div class="relative aspect-video"> <img src="/fastai/p4.png?height=400&width=600" alt=" presentation slide" class="rounded-lg shadow-2xl w-full h-full object-cover"> </div> </div> <div class="grid md:grid-cols-2 gap-12 items-center md:grid-flow-row-dense"> <div class="relative aspect-video md:col-start-1"> <img src="/fastai/p5.png?height=400&width=600" alt="Business idea framework screenshot" class="rounded-lg shadow-2xl w-full h-full object-cover"> </div> <div class="space-y-4 md:col-start-2"> <h2 class="text-3xl ">AI Risk and Regulatory Compliance Assessment Checklist</h2> <ul class="text-gray-200 list-disc"> <li>Provides a comprehensive checklist for monitoring AI deployment risks and ensuring
                                compliance.
</li> <li>Includes examples of companies successfully navigating AI regulations and mitigating
                                risks.
</li> <li>Helps safeguard your organization's reputation and operational integrity.</li> </ul> </div> </div> <div class="grid md:grid-cols-2 gap-12 items-center"> <div class="space-y-4"> <h2 class="text-3xl ">1 hr Consulting Session + Q&A</h2> <ul class="text-gray-200 list-disc"> <li>Features a personalized one-hour consulting session and Q&A for tailored guidance.</li> <li>Delves deeper into insights, strategy clarification, and specific query exploration.
</li> <li>Draws on successful case examples to provide context and practical advice.</li> </ul> </div> <div class="relative aspect-video"> <img src="/fastai/p6.png?height=400&width=600" alt=" presentation slide" class="rounded-lg shadow-2xl w-full h-full object-cover"> </div> </div> </div>  <div class="space-y-6"> <h1 class="text-4xl md:text-center md:text-5xl lg:text-6xl max-w-4xl mx-auto leading-tight">
More than just "consulting"
</h1> <p class="max-w-3xl mx-auto text-lg leading-relaxed">
We aim to provide you with the most up-to-date knowledge on how to build effective AI products.
</p> <div class="grid gap-8 md:grid-cols-2"> <div class="rounded-lg bg-white p-6"> <div class="mb-6 overflow-hidden rounded-lg"> <img src="/fastai/p7.png?height=600&width=800" alt="Workshop screenshot" class="w-full"> </div> <h3 class="mb-2 text-2xl font-bold text-gray-900">
Bonus Exclusive Access to AI Training Workshops
</h3> <ul class="text-gray-200 list-disc"> <li>Enhances your team's capabilities with exclusive training sessions.</li> <li>Covers foundational concepts,the latest industry applications, and state-of-the-art
                                techniques.
</li> <li>Offers practical tutorials with real-world case studies for effective AI development.
</li> </ul> </div> <div class="rounded-lg bg-white p-6"> <div class="mb-6 overflow-hidden rounded-lg"> <img src="/fastai/p8.png?height=600&width=800" alt="Bonus newsletter image" class="w-full"> </div> <h3 class="mb-2 text-2xl font-bold text-gray-900">
Bonus AI Monthly Opportunity Report for Emerging Trends and Insights
</h3> <ul class="text-gray-200 list-disc"> <li>Identifies emerging trends, potential AI applications, and competitive insights specific
                                to your market.
</li> <li>Positions your organization for long-term success by capturing AI opportunities before
                                they reach mass adoption.
</li> </ul> </div> </div> </div> ` })} ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="my-20 px-6 py-12"> <div class="max-w-7xl mx-auto space-y-12"> <h2 class="text-left md:text-center mb-4">Who's the right fit for our services?</h2> <p class="text-xl md:text-center">
Our AI framework is tailored for <br> startups and medium-sized companies eager to harness the
                        transformative power of AI.
</p> <div class="grid md:grid-cols-2 gap-12">  <div class="space-y-6"> <h4 class="mb-6 font-semibold">
If you identify with any of the following, our services are designed with you in mind:
</h4> <ul class="space-y-4"> <li class="flex gap-3"> ${renderComponent($$result3, "Check", $$Check, { "class": "h-6 w-6 text-green-400 flex-shrink-0" })} <span>You want to position yourself as a forward-thinking startup founder, capitalizing on the AI wave to gain a competitive edge.</span> </li> <li class="flex gap-3"> ${renderComponent($$result3, "Check", $$Check, { "class": "h-6 w-6 text-green-400 flex-shrink-0" })} <span>You're eager to leverage AI technology to increase automation and streamline operations, driving efficiency and revenue growth.</span> </li> <li class="flex gap-3"> ${renderComponent($$result3, "Check", $$Check, { "class": "h-6 w-6 text-green-400 flex-shrink-0" })} <span>You aim to integrate AI into your product offerings, enhancing features and user experience to stand out in the market.</span> </li> <li class="flex gap-3"> ${renderComponent($$result3, "Check", $$Check, { "class": "h-6 w-6 text-green-400 flex-shrink-0" })} <span>You're motivated by the potential of AI to transform your business and secure its future.</span> </li> <li class="flex gap-3"> ${renderComponent($$result3, "Check", $$Check, { "class": "h-6 w-6 text-green-400 flex-shrink-0" })} <span>You appreciate strategic partnerships that provide expert guidance in AI without requiring you to build an in-house team of specialists.</span> </li> </ul> </div> <div class="space-y-6"> <h4 class="font-semibold mb-6">
You're <em>not</em> a good fit for our services if:
</h4> <ul class="space-y-4"> <li class="flex gap-3"> ${renderComponent($$result3, "X", $$X, { "class": "h-6 w-6 text-red-400 flex-shrink-0" })} <span>You dismiss AI as a passing trend and are willing to gamble your company’s future by ignoring its transformative potential.</span> </li> <li class="flex gap-3"> ${renderComponent($$result3, "X", $$X, { "class": "h-6 w-6 text-red-400 flex-shrink-0" })} <span>You expect overnight miracles from AI without strategic planning and deliberate implementation.</span> </li> <li class="flex gap-3"> ${renderComponent($$result3, "X", $$X, { "class": "h-6 w-6 text-red-400 flex-shrink-0" })} <span>You cling to outdated beliefs that AI is a labyrinth only navigable by math wizards and PhDs, refusing to embrace accessible expert collaboration.</span> </li> <li class="flex gap-3"> ${renderComponent($$result3, "X", $$X, { "class": "h-6 w-6 text-red-400 flex-shrink-0" })} <span>You are unwilling to invest the necessary resources and time, preferring to watch from the sidelines as industry leaders soar past.</span> </li> <li class="flex gap-3"> ${renderComponent($$result3, "X", $$X, { "class": "h-6 w-6 text-red-400 flex-shrink-0" })} <span>You stubbornly resist adapting your business strategy, clinging to short-sighted gains while the world evolves quickly.</span> </li> </ul> </div> </div> </div> </div> ` })} <div class="w-full mb-20" id="CTA"> <div class="min-h-screen bg-black flex flex-col items-center justify-center"> <h2 class="text-white p-20">Ready to start your AI journey?</h2> <!-- Pricing Card --> <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-3xl border border-gray-100 shadow-card mb-20"> <h3 class="mb-4 text-2xl font-semibold">Memorelab's AI FastTrack</h3> <p class="font-light text-gray-500 sm:text-lg">Everything you need to bring your AI product to
                        life.</p> <div class="flex justify-center items-baseline my-8"> <span class="mr-2 text-5xl font-extrabold">$500</span> <!--<span class="text-gray-500">no hidden</span>--> </div> <!-- List --> <ul role="list" class="mb-8 space-y-4 text-left"> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>AI Opportunities Report tailored to your company/product</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>AI Competitor Analysis with Recommendations</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>Personalized AI Trend Report</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>Detailed blueprint for your AI product development</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>Budget and ROI Analysis</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>AI Risk and Regulatory Compliance Assessment Checklist</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span>1 hr Consulting Session + Q&A</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span><span class="font-semibold">Bonus</span> Exclusive Access to AI Training Workshops</span> </li> <li class="flex items-center space-x-3"> <!-- Icon --> <svg class="flex-shrink-0 w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path> </svg> <span><span class="font-semibold">Bonus</span> AI Monthly Opportunity Report for emerging trends and insights</span> </li> </ul> <a href="https://app.pipefy.com/public/form/weAsBwe0" class="text-black hover:text-white bg-primary hover:bg-black focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center" target="_blank">Book now</a> </div> </div> </div> <!------------------------------------FAQ---------------------------------------------> ${renderComponent($$result2, "Container", $$Container, {}, { "default": ($$result3) => renderTemplate` <div class="bg-white text-center p-2 mb-20"> <h2>Frequently Asked Questions</h2> </div> <div class="my-6"> <div class="space-y-10"> ${faq.qa_pairs.map((item) => {
    return renderTemplate`${renderComponent($$result3, "AccordionOpen", $$AccordionOpen, { "index": item.index, "title": item.question, "description": item.answer })}`;
  })} </div> </div> ` })} <div class="w-full"> <div class="min-h-screen bg-primary flex flex-col items-center justify-center"> ${renderComponent($$result2, "ChevronDown", $$ChevronDown, { "class": "w-12 h-12 text-blue-200 mb-8 animate-bounce" })} <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mb-12">
Start your AI journey today
</h1> <button class="bg-[#0a192f] hover:bg-[#0a192f]/90 text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-colors"> <a href="#CTA">BOOK NOW</a> </button> </div> </div> </main> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/ai-fast-track.astro", void 0);

const $$file = "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/ai-fast-track.astro";
const $$url = "/ai-fast-track";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$AiFastTrack,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
