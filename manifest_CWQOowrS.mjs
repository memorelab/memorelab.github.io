import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { k as decodeKey } from './chunks/astro/server_DZiJVVAQ.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/","adapterName":"","routes":[{"file":"file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/ai-fast-track/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ai-fast-track","isIndex":false,"type":"page","pattern":"^\\/ai-fast-track\\/?$","segments":[[{"content":"ai-fast-track","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ai-fast-track.astro","pathname":"/ai-fast-track","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/articles/api/search.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles/api/search.json","isIndex":false,"type":"endpoint","pattern":"^\\/articles\\/api\\/search\\.json\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}],[{"content":"api","dynamic":false,"spread":false}],[{"content":"search.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/api/search.json.ts","pathname":"/articles/api/search.json","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/articles/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/articles","isIndex":true,"type":"page","pattern":"^\\/articles\\/?$","segments":[[{"content":"articles","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/articles/index.astro","pathname":"/articles","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://memorelab.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/ai-fast-track.astro",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/articles/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/articles/api/search.json.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/articles/api/search.json@_@ts",{"propagation":"in-tree","containsHead":false}],["/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/articles/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/articles/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/ai-fast-track@_@astro":"pages/ai-fast-track.astro.mjs","\u0000@astro-page:src/pages/articles/api/search.json@_@ts":"pages/articles/api/search.json.astro.mjs","\u0000@astro-page:src/pages/articles/index@_@astro":"pages/articles.astro.mjs","\u0000@astro-page:src/pages/articles/[...slug]@_@astro":"pages/articles/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CWQOowrS.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/are-legacy-systems-holding-you-back.md?astroContentCollectionEntry=true":"chunks/are-legacy-systems-holding-you-back_DT-A8K54.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/case-study-mindbees.md?astroContentCollectionEntry=true":"chunks/case-study-mindbees_KIhdwfLm.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/case-study-report-automation.md?astroContentCollectionEntry=true":"chunks/case-study-report-automation_AnCnI0Y6.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/supercharge-growth-with-ai.md?astroContentCollectionEntry=true":"chunks/supercharge-growth-with-ai_CHsfctUi.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/what-you-need-to-know-about-ai.md?astroContentCollectionEntry=true":"chunks/what-you-need-to-know-about-ai_B1nSKbD-.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/are-legacy-systems-holding-you-back.md?astroPropagatedAssets":"chunks/are-legacy-systems-holding-you-back_DC4Kk-ft.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/case-study-mindbees.md?astroPropagatedAssets":"chunks/case-study-mindbees_APhb782c.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/case-study-report-automation.md?astroPropagatedAssets":"chunks/case-study-report-automation_BggQJLck.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/supercharge-growth-with-ai.md?astroPropagatedAssets":"chunks/supercharge-growth-with-ai_DLhp7N4x.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/what-you-need-to-know-about-ai.md?astroPropagatedAssets":"chunks/what-you-need-to-know-about-ai_Cfs0hVdK.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/are-legacy-systems-holding-you-back.md":"chunks/are-legacy-systems-holding-you-back_D9nDWu_M.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/case-study-mindbees.md":"chunks/case-study-mindbees_is9TcH-7.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/case-study-report-automation.md":"chunks/case-study-report-automation_BNb8O9B3.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/supercharge-growth-with-ai.md":"chunks/supercharge-growth-with-ai_Bj7a5rqF.mjs","/Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/src/content/blog/what-you-need-to-know-about-ai.md":"chunks/what-you-need-to-know-about-ai_B1M18ozs.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.2hw9OXau.js","/astro/hoisted.js?q=0":"_astro/hoisted.2daoxv0f.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/404.html","/file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/ai-fast-track/index.html","/file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/articles/api/search.json","/file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/articles/index.html","/file:///Users/paulorcf/projects/memorelab/landpages/astro-memorelab-landpage/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"zHR2/+8FRX9IEH0TeKvYs06YkEJZKJ7X9Q/i0SYkrQY=","experimentalEnvGetSecretEnabled":false});

export { manifest };
