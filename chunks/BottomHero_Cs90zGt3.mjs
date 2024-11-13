import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as renderComponent } from './astro/server_DZiJVVAQ.mjs';
import 'kleur/colors';
import { a as $$ChevronDown } from './ChevronDown_Ci2nL6iK.mjs';

const $$BottomHero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full"> <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center"> ${renderComponent($$result, "ChevronDown", $$ChevronDown, { "class": "w-12 h-12 text-blue-200 mb-8 animate-bounce" })} <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-4xl mb-12">
Start your AI journey today
</h1> <button class="bg-primary hover:bg-[#0a192f]/90 text-white px-8 py-4 rounded-full font-semibold tracking-wide transition-colors"> <a href="/ai-fast-track">Learn more</a> </button> </div> </div>`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/BottomHero.astro", void 0);

export { $$BottomHero as $ };
