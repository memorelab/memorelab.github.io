import { b as createAstro, c as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, d as addAttribute, f as renderSlot, a as renderComponent } from './astro/server_DZiJVVAQ.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$1 = createAstro("https://memorelab.com");
const $$ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  const size = Astro2.props.size;
  const cls = Astro2.props.class;
  const name = Astro2.props.iconName;
  delete Astro2.props.size;
  delete Astro2.props.class;
  delete Astro2.props.iconName;
  const props = Object.assign({
    "xmlns": "http://www.w3.org/2000/svg",
    "stroke-width": 2,
    "width": size ?? 24,
    "height": size ?? 24,
    "stroke": "currentColor",
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "fill": "none",
    "viewBox": "0 0 24 24"
  }, Astro2.props);
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)}${addAttribute(["lucide", { [`lucide-${name}`]: name }, cls], "class:list")}> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/node_modules/lucide-astro/dist/.Layout.astro", void 0);

const $$Astro = createAstro("https://memorelab.com");
const $$ChevronDown = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ChevronDown;
  return renderTemplate`${renderComponent($$result, "Layout", $$, { "iconName": "chevron-down", ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m6 9 6 6 6-6"></path> ` })}`;
}, "/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/node_modules/lucide-astro/dist/ChevronDown.astro", void 0);

export { $$ as $, $$ChevronDown as a };
