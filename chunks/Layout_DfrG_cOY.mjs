import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, b as createAstro, d as addAttribute, e as renderHead, f as renderSlot } from './astro/server_DZiJVVAQ.mjs';
import 'kleur/colors';
/* empty css                          */
import { $ as $$Container, a as $$ViewTransitions, b as $$Navbar } from './ViewTransitions_C8S_-SWg.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<footer class="bg-primary bg-fixed bg-bottom text-black"> ', ' </footer> <script>\n    const year = new Date().getFullYear();\n    document.getElementById("currentYear").innerHTML = `${year}`;\n<\/script>'], ["", '<footer class="bg-primary bg-fixed bg-bottom text-black"> ', ' </footer> <script>\n    const year = new Date().getFullYear();\n    document.getElementById("currentYear").innerHTML = \\`\\${year}\\`;\n<\/script>'])), maybeRenderHead(), renderComponent($$result, "Container", $$Container, {}, { "default": ($$result2) => renderTemplate` <div class="py-6"> <div class="flex flex-col items-center justify-between md:flex-row"> <div class="flex items-center space-x-3 rtl:space-x-reverse"> <img class="w-auto h-8" src="/logotipo_memorelab_negative.svg" alt="Logo"> </div> <div class="flex mt-4 md:m-0"> <div class="-mx-4">
@ <span id="currentYear"></span> Memorelab
</div> </div> </div> </div> ` }));
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://memorelab.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Memorelab</title><meta name="description" content="Memorelab is your dev AI partner. We help you to build better products by providing you with the right tools and resources."><link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet">${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="bg-white font-SpaceGrotesk flex flex-col min-h-screen"> ${renderComponent($$result, "Navbar", $$Navbar, {})} <div class="flex-grow"> ${renderSlot($$result, $$slots["default"])} </div> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
