import { c as createIsomorphicFn } from "../tanstack__start-fn-stubs.mjs";
import { g as getStartContext } from "./start-storage-context+[...].mjs";
import { h as defaultSerovalPlugins, C as makeSerovalPlugin, E as notFound } from "../tanstack__router-core.mjs";
import "../seroval.mjs";
import { a as createRootRouteWithContext, d as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, u as useNavigate, b as createRouter } from "../tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../react.mjs";
import { Q as QueryClientProvider } from "../tanstack__react-query.mjs";
import { r as reactDomExports } from "../react-dom.mjs";
import { Q as QueryClient } from "../tanstack__query-core.mjs";
function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
var TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
var TSS_SERVER_FUNCTION = /* @__PURE__ */ Symbol.for("TSS_SERVER_FUNCTION");
var X_TSS_SERIALIZED = "x-tss-serialized";
var X_TSS_RAW_RESPONSE = "x-tss-raw";
var TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
var FrameType = {
  JSON: 0,
  CHUNK: 1,
  END: 2,
  ERROR: 3
};
var FRAME_HEADER_SIZE = 9;
var TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
function isSafeKey(key) {
  return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
function safeObjectMerge(target, source) {
  const result = /* @__PURE__ */ Object.create(null);
  if (target) {
    for (const key of Object.keys(target)) if (isSafeKey(key)) result[key] = target[key];
  }
  if (source && typeof source === "object") {
    for (const key of Object.keys(source)) if (isSafeKey(key)) result[key] = source[key];
  }
  return result;
}
function createNullProtoObject(source) {
  if (!source) return /* @__PURE__ */ Object.create(null);
  const obj = /* @__PURE__ */ Object.create(null);
  for (const key of Object.keys(source)) if (isSafeKey(key)) obj[key] = source[key];
  return obj;
}
var getStartOptions = createIsomorphicFn().client(() => window.__TSS_START_OPTIONS__).server(() => getStartContext().startOptions);
function flattenMiddlewares(middlewares, maxDepth = 100) {
  const seen = /* @__PURE__ */ new Set();
  const flattened = [];
  const recurse = (middleware, depth) => {
    if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
    middleware.forEach((m) => {
      if (m.options.middleware) recurse(m.options.middleware, depth + 1);
      if (!seen.has(m)) {
        seen.add(m);
        flattened.push(m);
      }
    });
  };
  recurse(middlewares, 0);
  return flattened;
}
var createMiddleware = (options, __opts) => {
  const resolvedOptions = {
    type: "request",
    ...__opts || options
  };
  return {
    options: resolvedOptions,
    middleware: (middleware) => {
      return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
    },
    inputValidator: (inputValidator) => {
      return createMiddleware({}, Object.assign(resolvedOptions, { inputValidator }));
    },
    client: (client) => {
      return createMiddleware({}, Object.assign(resolvedOptions, { client }));
    },
    server: (server) => {
      return createMiddleware({}, Object.assign(resolvedOptions, { server }));
    }
  };
};
var innerCreateCsrfMiddleware = (opts = {}) => {
  const middleware = createMiddleware().server(async (ctx) => {
    const csrfCtx = ctx;
    if (opts.filter && !await opts.filter(csrfCtx)) return ctx.next();
    if (await isCsrfRequestAllowed(opts, csrfCtx)) return ctx.next();
    return getFailureResponse(opts, csrfCtx);
  });
  return middleware;
};
var createCsrfMiddleware = createIsomorphicFn().server(innerCreateCsrfMiddleware);
async function isCsrfRequestAllowed(opts, ctx) {
  const result = await getCsrfRequestValidationResult(opts, ctx);
  return result === true || result === void 0 && opts.allowRequestsWithoutOriginCheck === true;
}
async function getCsrfRequestValidationResult(opts, ctx) {
  const fetchSite = ctx.request.headers.get("Sec-Fetch-Site");
  if (fetchSite !== null) return matchValue(opts.secFetchSite ?? "same-origin", fetchSite, ctx);
  const origin = ctx.request.headers.get("Origin");
  if (origin !== null) {
    if (opts.origin) return matchValue(opts.origin, origin, ctx);
    return origin === new URL(ctx.request.url).origin;
  }
  const referer = ctx.request.headers.get("Referer");
  if (referer === null || opts.referer === false) return;
  if (typeof opts.referer === "function") return opts.referer(referer, ctx);
  if (opts.origin) {
    const refererOrigin = getOriginFromUrl(referer);
    return refererOrigin !== void 0 && matchValue(opts.origin, refererOrigin, ctx);
  }
  return isRefererSameOrigin(referer, new URL(ctx.request.url).origin);
}
async function matchValue(matcher, value, ctx) {
  if (typeof matcher === "function") return matcher(value, ctx);
  if (Array.isArray(matcher)) return matcher.includes(value);
  return value === matcher;
}
function getOriginFromUrl(url) {
  try {
    return new URL(url).origin;
  } catch {
    return;
  }
}
function isRefererSameOrigin(referer, requestOrigin) {
  if (referer === requestOrigin) return true;
  if (!referer.startsWith(requestOrigin)) return false;
  if (referer.length === requestOrigin.length) return true;
  const code = referer.charCodeAt(requestOrigin.length);
  return code === 47 || code === 63 || code === 35;
}
async function getFailureResponse(opts, ctx) {
  if (typeof opts.failureResponse === "function") return opts.failureResponse(ctx);
  return opts.failureResponse?.clone() ?? new Response("Forbidden", { status: 403 });
}
function dedupeSerializationAdapters(deduped, serializationAdapters) {
  for (let i = 0, len = serializationAdapters.length; i < len; i++) {
    const current = serializationAdapters[i];
    if (!deduped.has(current)) {
      deduped.add(current);
      if (current.extends) dedupeSerializationAdapters(deduped, current.extends);
    }
  }
}
var createStart = (getOptions) => {
  return {
    getOptions: async () => {
      const options = await getOptions();
      if (options.serializationAdapters) {
        const deduped = /* @__PURE__ */ new Set();
        dedupeSerializationAdapters(deduped, options.serializationAdapters);
        options.serializationAdapters = Array.from(deduped);
      }
      return options;
    },
    createMiddleware
  };
};
function getDefaultSerovalPlugins() {
  return [...getStartOptions()?.serializationAdapters?.map(makeSerovalPlugin) ?? [], ...defaultSerovalPlugins];
}
const appCss = "/assets/styles-DYh7xiyc.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lovable App" },
      { name: "description", content: "Lovable Generated Project" },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Lovable App" },
      { property: "og:description", content: "Lovable Generated Project" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  const [showMobileNotice, setShowMobileNotice] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;
    const dismissed = window.sessionStorage.getItem("mobile-site-notice-dismissed") === "1";
    if (isMobile && !dismissed) {
      setShowMobileNotice(true);
    }
  }, []);
  reactExports.useEffect(() => {
    const previous = document.body.style.overflow;
    if (showMobileNotice) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = previous;
    };
  }, [showMobileNotice]);
  const closeMobileNotice = () => {
    window.sessionStorage.setItem("mobile-site-notice-dismissed", "1");
    setShowMobileNotice(false);
  };
  const mobileNotice = showMobileNotice ? reactDomExports.createPortal(
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-[200] flex items-center justify-center bg-black/55 px-4",
        onClick: closeMobileNotice,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "w-full max-w-sm rounded-[20px] border border-border bg-card p-5 text-center mac-shadow",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.22em] text-foreground/45", children: "Best viewed on desktop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-[22px] font-bold tracking-tightest text-foreground", children: "This portfolio is better viewed on Desktop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-foreground/65", children: "You can continue on mobile, but the full layout is designed for a larger screen." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: closeMobileNotice,
                  className: "mt-5 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90",
                  children: "Continue anyway"
                }
              )
            ]
          }
        )
      }
    ),
    document.body
  ) : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    mobileNotice,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {})
  ] });
}
const DOCK_ITEMS = [
  {
    label: "Home",
    href: "/",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 28 28", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "28", rx: "7", fill: "oklch(0.74 0.13 240)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 7L6 13.5V22h5.5v-5h5v5H22V13.5L14 7Z", fill: "white", fillOpacity: "0.9" })
    ] })
  },
  {
    label: "About",
    href: "/about",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 28 28", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "28", rx: "7", fill: "oklch(0.62 0.16 145)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "14", cy: "10", r: "3.5", fill: "white", fillOpacity: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 22c0-3.866 3.134-7 7-7s7 3.134 7 7", stroke: "white", strokeOpacity: "0.9", strokeWidth: "2", strokeLinecap: "round" })
    ] })
  },
  {
    label: "Gallery",
    href: "/gallery",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 28 28", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "28", rx: "7", fill: "oklch(0.62 0.20 255)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "6", width: "7", height: "7", rx: "1.5", fill: "white", fillOpacity: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "15", y: "6", width: "7", height: "7", rx: "1.5", fill: "white", fillOpacity: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "6", y: "15", width: "7", height: "7", rx: "1.5", fill: "white", fillOpacity: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "15", y: "15", width: "7", height: "7", rx: "1.5", fill: "white", fillOpacity: "0.9" })
    ] })
  },
  {
    label: "Work",
    href: "/#work",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 28 28", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "28", rx: "7", fill: "oklch(0.68 0.14 238)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 10.5C5 9.67 5.67 9 6.5 9H12l2 2.5H21.5c.83 0 1.5.67 1.5 1.5V20c0 .83-.67 1.5-1.5 1.5h-15C5.67 21.5 5 20.83 5 20V10.5Z", fill: "white", fillOpacity: "0.9" })
    ] })
  },
  {
    label: "Clients",
    href: "/clients",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 28 28", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "28", rx: "7", fill: "oklch(0.68 0.14 55)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "10", cy: "11", r: "3", fill: "white", fillOpacity: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "11", r: "3", fill: "white", fillOpacity: "0.9" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M4 22c0-3 2.686-5 6-5", stroke: "white", strokeOpacity: "0.9", strokeWidth: "1.8", strokeLinecap: "round" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M24 22c0-3-2.686-5-6-5", stroke: "white", strokeOpacity: "0.9", strokeWidth: "1.8", strokeLinecap: "round" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M10 17c0-2.21 1.79-4 4-4s4 1.79 4 4", stroke: "white", strokeOpacity: "0.9", strokeWidth: "1.8", strokeLinecap: "round" })
    ] })
  },
  {
    label: "Services",
    href: "/#services",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 28 28", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "28", rx: "7", fill: "oklch(0.60 0.16 170)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 9h12M8 14h8M8 19h10", stroke: "white", strokeOpacity: "0.9", strokeWidth: "2", strokeLinecap: "round" })
    ] })
  },
  {
    label: "Contact",
    href: "/#contact",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 28 28", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "28", rx: "7", fill: "oklch(0.68 0.18 27)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9.5C6 8.67 6.67 8 7.5 8h13c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-13C6.67 20 6 19.33 6 18.5v-9Z", stroke: "white", strokeOpacity: "0.9", strokeWidth: "1.8" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 10l8 5.5L22 10", stroke: "white", strokeOpacity: "0.9", strokeWidth: "1.8", strokeLinecap: "round" })
    ] })
  },
  { divider: true },
  {
    label: "Hire me",
    href: "/#contact",
    cta: true,
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 28 28", fill: "none", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "28", height: "28", rx: "7", fill: "oklch(0.18 0.01 240)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 8v12M8 14h12", stroke: "white", strokeOpacity: "0.9", strokeWidth: "2.2", strokeLinecap: "round" })
    ] })
  }
];
function NavBar() {
  const [hoveredIndex, setHoveredIndex] = reactExports.useState(null);
  const [tooltip, setTooltip] = reactExports.useState(null);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const update = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  const getScale = (i) => {
    if (isMobile) return 1;
    if (hoveredIndex === null) return 1;
    const dist = Math.abs(i - hoveredIndex);
    if (dist === 0) return 1.55;
    if (dist === 1) return 1.28;
    if (dist === 2) return 1.1;
    return 1;
  };
  const allItems = DOCK_ITEMS;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    tooltip && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none",
        style: {
          transform: `translateX(-50%)`,
          bottom: isMobile ? "calc(env(safe-area-inset-bottom, 0px) + 68px)" : 92
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-[8px] px-3 py-1.5 text-[12px] font-medium tracking-tight text-foreground",
            style: {
              background: "oklch(1 0 0 / 0.88)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "0 2px 12px -2px oklch(0.2 0.02 240 / 0.18), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.15)"
            },
            children: tooltip
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "fixed left-1/2 z-50",
        style: {
          bottom: isMobile ? "calc(env(safe-area-inset-bottom, 0px) + 8px)" : 20,
          transform: "translateX(-50%)",
          width: isMobile ? "100%" : "auto",
          pointerEvents: "none"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mx-auto flex w-fit items-end rounded-[20px]",
              style: {
                pointerEvents: "auto",
                gap: isMobile ? 4 : 8,
                padding: isMobile ? "4px 6px" : "8px 16px",
                background: "oklch(0.97 0.005 240 / 0.72)",
                backdropFilter: "blur(28px) saturate(1.8)",
                WebkitBackdropFilter: "blur(28px) saturate(1.8)",
                border: "1px solid oklch(0.88 0.005 240 / 0.8)",
                boxShadow: "0 8px 32px -8px oklch(0.2 0.02 240 / 0.22), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.12), inset 0 1px 0 oklch(1 0 0 / 0.6)"
              },
              children: allItems.map((item, i) => {
                if ("divider" in item && item.divider) {
                  return /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "self-center mx-1",
                      style: {
                        width: 1,
                        height: isMobile ? 18 : 32,
                        background: "oklch(0.18 0.01 240 / 0.15)"
                      }
                    },
                    `div-${i}`
                  );
                }
                const navItem = item;
                const realIndex = allItems.slice(0, i).filter((x) => !("divider" in x && x.divider)).length;
                const scale = getScale(realIndex);
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: navItem.href,
                    className: "relative flex flex-col items-center",
                    style: {
                      transition: "transform 0.2s cubic-bezier(.2,.8,.2,1)",
                      transform: `scale(${scale})`,
                      transformOrigin: "bottom center",
                      margin: isMobile ? "0 1px" : void 0
                    },
                    onMouseEnter: () => {
                      setHoveredIndex(realIndex);
                      setTooltip(navItem.label);
                    },
                    onMouseLeave: () => {
                      setHoveredIndex(null);
                      setTooltip(null);
                    },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        style: { width: isMobile ? 30 : 48, height: isMobile ? 30 : 48 },
                        className: "rounded-[12px] overflow-hidden shadow-[0_2px_8px_-2px_oklch(0.2_0.02_240/0.25)]",
                        children: navItem.icon
                      }
                    )
                  },
                  navItem.label
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "mx-auto mt-1 rounded-full",
              style: {
                width: isMobile ? "52%" : "60%",
                height: 1,
                background: "linear-gradient(90deg, transparent, oklch(0.18 0.01 240 / 0.12), transparent)"
              }
            }
          )
        ]
      }
    )
  ] });
}
const Route$8 = createFileRoute("/videos")({
  component: VideosPage,
  head: () => ({
    meta: [
      { title: "Videos & Reels — Shanzster" },
      { name: "description", content: "Reels, vlogs, promo videos, motion captions, and collection launches." }
    ]
  })
});
const VIDEOS = [
  { id: "v1", title: "Collection Launch Reel", client: "Steal & Style", category: "Reel", bg: "linear-gradient(135deg, oklch(0.14 0.02 240), oklch(0.28 0.06 250))" },
  { id: "v2", title: "Promotional Video", client: "Masinloc Tourism", category: "Promo", bg: "linear-gradient(135deg, oklch(0.18 0.03 240), oklch(0.32 0.08 245))" },
  { id: "v3", title: "Vlog Edit", client: "Steal & Style", category: "Vlog", bg: "linear-gradient(135deg, oklch(0.22 0.04 240), oklch(0.40 0.10 255))" },
  { id: "v4", title: "Motion Caption Overlay", client: "Steal & Style", category: "Motion", bg: "linear-gradient(135deg, oklch(0.16 0.02 240), oklch(0.30 0.07 248))" },
  { id: "v5", title: "Freeze Frame Reel", client: "Steal & Style", category: "Reel", bg: "linear-gradient(135deg, oklch(0.20 0.03 240), oklch(0.35 0.09 252))" },
  { id: "v6", title: "Restaurant Promo", client: "Junz Restaurant", category: "Promo", bg: "linear-gradient(135deg, oklch(0.18 0.02 240), oklch(0.28 0.06 248))" },
  { id: "v7", title: "Behind the Scenes", client: "Steal & Style", category: "BTS", bg: "linear-gradient(135deg, oklch(0.15 0.02 240), oklch(0.26 0.06 246))" },
  { id: "v8", title: "Product Showcase Video", client: "CSA Print", category: "Showcase", bg: "linear-gradient(135deg, oklch(0.19 0.03 240), oklch(0.33 0.08 250))" }
];
function VideoCard({ video, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "group relative w-full text-left cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]",
            style: { aspectRatio: "9 / 16", background: video.bg },
            children: [
              video.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "video",
                {
                  src: video.src,
                  className: "w-full h-full object-cover",
                  muted: true,
                  loop: true,
                  playsInline: true
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[32px]", children: "▶" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[10px] tracking-[0.14em] uppercase", children: "Add Video" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "currentColor", className: "text-foreground ml-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M5 3L17 10L5 17V3Z" }) }) }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30", children: video.category }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors", children: video.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/50 mt-1", children: video.client })
        ] })
      ]
    }
  );
}
function FullViewModal$3({
  video,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in duration-200",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 2L14 14M14 2L2 14" }) })
          }
        ),
        currentIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            className: "absolute left-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4L6 10L12 16" }) })
          }
        ),
        currentIndex < total - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            className: "absolute right-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 4L14 10L8 16" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative max-w-2xl max-h-[85vh] w-full mx-6",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative w-full rounded-xl overflow-hidden border border-border shadow-2xl",
                  style: { aspectRatio: "9 / 16", background: video.bg },
                  children: video.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "video",
                    {
                      src: video.src,
                      className: "w-full h-full object-cover",
                      controls: true,
                      autoPlay: true,
                      loop: true
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[48px]", children: "▶" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[12px] tracking-[0.14em] uppercase", children: "Add Video" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60", children: video.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-foreground/30", children: [
                    currentIndex + 1,
                    " / ",
                    total
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold tracking-tight text-foreground leading-snug", children: video.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] tracking-tight text-foreground/50 mt-1", children: video.client })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function VideosPage() {
  const [selectedVideo, setSelectedVideo] = reactExports.useState(null);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const openVideo = (video, index) => {
    setSelectedVideo(video);
    setSelectedIndex(index);
  };
  const closeVideo = () => {
    setSelectedVideo(null);
  };
  const goToNext = () => {
    if (selectedIndex < VIDEOS.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedVideo(VIDEOS[nextIndex]);
    }
  };
  const goToPrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedVideo(VIDEOS[prevIndex]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/gallery",
          className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10",
          children: "← Back to Gallery"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Gallery · Videos" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "font-bold tracking-tightest text-foreground leading-[0.88]",
            style: { fontSize: "clamp(36px, 5vw, 64px)" },
            children: "Videos & Reels"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md", children: [
          "Reels, vlogs, promo videos, motion captions, and collection launches — ",
          VIDEOS.length,
          " video pieces."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8", children: VIDEOS.map((video, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        VideoCard,
        {
          video,
          onClick: () => openVideo(video, index)
        },
        video.id
      )) })
    ] }),
    selectedVideo && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FullViewModal$3,
      {
        video: selectedVideo,
        onClose: closeVideo,
        onNext: goToNext,
        onPrev: goToPrev,
        currentIndex: selectedIndex,
        total: VIDEOS.length
      }
    )
  ] });
}
const Route$7 = createFileRoute("/graphics")({
  component: GraphicsPage,
  head: () => ({
    meta: [
      { title: "Graphics — Shanzster" },
      { name: "description", content: "Brand posts, story templates, promo graphics and more." }
    ]
  })
});
const GRAPHICS = [
  { id: "g1", title: "Steal & Style — Brand Post", client: "Steal & Style", category: "Social Post", bg: "linear-gradient(135deg, oklch(0.22 0.04 290), oklch(0.42 0.18 280))" },
  { id: "g2", title: "Story Template", client: "Steal & Style", category: "Story", bg: "linear-gradient(135deg, oklch(0.32 0.12 300), oklch(0.55 0.20 285))" },
  { id: "g3", title: "Highlight Cover Set", client: "Steal & Style", category: "Profile", bg: "linear-gradient(135deg, oklch(0.45 0.18 270), oklch(0.65 0.14 300))" },
  { id: "g4", title: "Promo Graphic", client: "Steal & Style", category: "Promotion", bg: "linear-gradient(135deg, oklch(0.60 0.22 285), oklch(0.40 0.20 270))" },
  { id: "g5", title: "Caption Card", client: "Steal & Style", category: "Engagement", bg: "linear-gradient(135deg, oklch(0.50 0.20 275), oklch(0.35 0.16 290))" },
  { id: "g6", title: "Collection Launch Graphic", client: "Steal & Style", category: "Launch", bg: "linear-gradient(135deg, oklch(0.38 0.22 280), oklch(0.58 0.18 295))" },
  { id: "g7", title: "Destination Post", client: "Masinloc Tourism", category: "Social Post", bg: "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.72 0.12 210))" },
  { id: "g8", title: "Food Feature Post", client: "Junz Restaurant", category: "Social Post", bg: "linear-gradient(135deg, oklch(0.65 0.16 55),  oklch(0.78 0.12 70))" },
  { id: "g9", title: "Product Showcase", client: "CSA Print", category: "Showcase", bg: "linear-gradient(135deg, oklch(0.50 0.14 255), oklch(0.68 0.10 270))" },
  { id: "g10", title: "Event Announcement", client: "Masinloc Tourism", category: "Event", bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))" },
  { id: "g11", title: "Brand Voice Post", client: "Steal & Style", category: "Engagement", bg: "linear-gradient(135deg, oklch(0.45 0.16 240), oklch(0.62 0.12 250))" },
  { id: "g12", title: "Weekend Special Promo", client: "Junz Restaurant", category: "Promotion", bg: "linear-gradient(135deg, oklch(0.70 0.14 60),  oklch(0.82 0.10 75))" }
];
function GraphicCard({ graphic, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "group relative w-full text-left cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]",
            style: { aspectRatio: "1 / 1", background: graphic.bg },
            children: [
              graphic.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: graphic.src,
                  alt: graphic.title,
                  className: "w-full h-full object-contain"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[32px]", children: "✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[10px] tracking-[0.14em] uppercase", children: "Add Graphic" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30", children: graphic.category }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[11px] tracking-tight text-foreground", children: "View Full Size" }) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors", children: graphic.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/50 mt-1", children: graphic.client })
        ] })
      ]
    }
  );
}
function FullViewModal$2({
  graphic,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in duration-200",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 2L14 14M14 2L2 14" }) })
          }
        ),
        currentIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            className: "absolute left-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4L6 10L12 16" }) })
          }
        ),
        currentIndex < total - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            className: "absolute right-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 4L14 10L8 16" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative max-w-5xl max-h-[85vh] w-full mx-6",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative w-full rounded-xl overflow-hidden border border-border shadow-2xl",
                  style: { aspectRatio: "1 / 1", background: graphic.bg },
                  children: graphic.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: graphic.src,
                      alt: graphic.title,
                      className: "w-full h-full object-contain"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[48px]", children: "✦" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[12px] tracking-[0.14em] uppercase", children: "Add Graphic" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60", children: graphic.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-foreground/30", children: [
                    currentIndex + 1,
                    " / ",
                    total
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold tracking-tight text-foreground leading-snug", children: graphic.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] tracking-tight text-foreground/50 mt-1", children: graphic.client })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function GraphicsPage() {
  const [selectedGraphic, setSelectedGraphic] = reactExports.useState(null);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const openGraphic = (graphic, index) => {
    setSelectedGraphic(graphic);
    setSelectedIndex(index);
  };
  const closeGraphic = () => {
    setSelectedGraphic(null);
  };
  const goToNext = () => {
    if (selectedIndex < GRAPHICS.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedGraphic(GRAPHICS[nextIndex]);
    }
  };
  const goToPrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedGraphic(GRAPHICS[prevIndex]);
    }
  };
  const handleKeyDown = (e) => {
    if (!selectedGraphic) return;
    if (e.key === "Escape") closeGraphic();
    if (e.key === "ArrowRight") goToNext();
    if (e.key === "ArrowLeft") goToPrev();
  };
  if (typeof window !== "undefined") {
    window.addEventListener("keydown", handleKeyDown);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/gallery",
          className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10",
          children: "← Back to Gallery"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Gallery · Graphics" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "font-bold tracking-tightest text-foreground leading-[0.88]",
            style: { fontSize: "clamp(36px, 5vw, 64px)" },
            children: "Graphics & Visuals"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md", children: [
          "Brand posts, story templates, promo graphics and more — ",
          GRAPHICS.length,
          " pieces showcasing social media design work."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10", children: GRAPHICS.map((graphic, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        GraphicCard,
        {
          graphic,
          onClick: () => openGraphic(graphic, index)
        },
        graphic.id
      )) })
    ] }),
    selectedGraphic && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FullViewModal$2,
      {
        graphic: selectedGraphic,
        onClose: closeGraphic,
        onNext: goToNext,
        onPrev: goToPrev,
        currentIndex: selectedIndex,
        total: GRAPHICS.length
      }
    )
  ] });
}
const Route$6 = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Shanzster" },
      { name: "description", content: "All creative work — graphics, videos, content calendars, and campaign ads." }
    ]
  })
});
const FOLDERS = [
  {
    id: "graphics",
    label: "Graphics",
    icon: "✦",
    color: "oklch(0.70 0.18 290)",
    tabColor: "oklch(0.63 0.19 290)",
    description: "Brand posts, story templates, promo graphics, highlight covers.",
    items: [
      { id: "g1", title: "Steal & Style — Brand Post", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.22 0.04 290), oklch(0.42 0.18 280))", type: "image", aspect: "portrait" },
      { id: "g2", title: "Story Template", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.32 0.12 300), oklch(0.55 0.20 285))", type: "image", aspect: "portrait" },
      { id: "g3", title: "Highlight Cover Set", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.45 0.18 270), oklch(0.65 0.14 300))", type: "image", aspect: "square" },
      { id: "g4", title: "Promo Graphic", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.60 0.22 285), oklch(0.40 0.20 270))", type: "image", aspect: "landscape" },
      { id: "g5", title: "Caption Card", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.50 0.20 275), oklch(0.35 0.16 290))", type: "image", aspect: "square" },
      { id: "g6", title: "Collection Launch Graphic", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.38 0.22 280), oklch(0.58 0.18 295))", type: "image", aspect: "portrait" },
      { id: "g7", title: "Destination Post", client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.55 0.16 200), oklch(0.72 0.12 210))", type: "image", aspect: "square" },
      { id: "g8", title: "Food Feature Post", client: "Junz Restaurant", bg: "linear-gradient(135deg, oklch(0.65 0.16 55),  oklch(0.78 0.12 70))", type: "image", aspect: "portrait" },
      { id: "g9", title: "Product Showcase", client: "CSA Print", bg: "linear-gradient(135deg, oklch(0.50 0.14 255), oklch(0.68 0.10 270))", type: "image", aspect: "landscape" }
    ]
  },
  {
    id: "videos",
    label: "Videos & Reels",
    icon: "▶",
    color: "oklch(0.28 0.04 240)",
    tabColor: "oklch(0.22 0.04 240)",
    description: "Reels, vlogs, promo videos, motion captions, collection launches.",
    items: [
      { id: "v1", title: "Collection Launch Reel", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.14 0.02 240), oklch(0.28 0.06 250))", type: "video", aspect: "portrait" },
      { id: "v2", title: "Promotional Video", client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.18 0.03 240), oklch(0.32 0.08 245))", type: "video", aspect: "landscape" },
      { id: "v3", title: "Vlog Edit", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.22 0.04 240), oklch(0.40 0.10 255))", type: "video", aspect: "portrait" },
      { id: "v4", title: "Motion Caption Overlay", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.16 0.02 240), oklch(0.30 0.07 248))", type: "video", aspect: "square" },
      { id: "v5", title: "Freeze Frame Reel", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.20 0.03 240), oklch(0.35 0.09 252))", type: "video", aspect: "portrait" },
      { id: "v6", title: "Restaurant Promo", client: "Junz Restaurant", bg: "linear-gradient(135deg, oklch(0.18 0.02 240), oklch(0.28 0.06 248))", type: "video", aspect: "landscape" }
    ]
  },
  {
    id: "calendars",
    label: "Content Calendars",
    icon: "◈",
    color: "oklch(0.72 0.14 240)",
    tabColor: "oklch(0.66 0.15 240)",
    description: "Monthly editorial calendars, posting schedules, campaign timelines.",
    items: [
      { id: "cal1", title: "Steal & Style — October 2024", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.55 0.14 240), oklch(0.72 0.10 250))", type: "image", aspect: "landscape" },
      { id: "cal2", title: "Masinloc Tourism — Q4 2024", client: "Masinloc Tourism", bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))", type: "image", aspect: "landscape" },
      { id: "cal3", title: "Junz Restaurant — November 2024", client: "Junz Restaurant", bg: "linear-gradient(135deg, oklch(0.65 0.14 55),  oklch(0.78 0.10 65))", type: "image", aspect: "landscape" },
      { id: "cal4", title: "CSA Print — Campaign Brief", client: "CSA Print", bg: "linear-gradient(135deg, oklch(0.55 0.12 270), oklch(0.68 0.10 280))", type: "image", aspect: "landscape" },
      { id: "cal5", title: "Holiday Campaign Timeline", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.50 0.16 240), oklch(0.65 0.12 255))", type: "image", aspect: "landscape" }
    ]
  },
  {
    id: "ads",
    label: "Campaign Ads",
    icon: "⬡",
    color: "oklch(0.62 0.20 255)",
    tabColor: "oklch(0.55 0.21 255)",
    description: "Meta ad creatives, story ads, carousel frames, A/B test variants.",
    items: [
      { id: "a1", title: "Meta Ad Creative", client: "CSA Print", bg: "linear-gradient(135deg, oklch(0.38 0.20 255), oklch(0.55 0.18 260))", type: "image", aspect: "square" },
      { id: "a2", title: "Story Ad", client: "Junz Restaurant", bg: "linear-gradient(135deg, oklch(0.45 0.22 250), oklch(0.62 0.16 265))", type: "image", aspect: "portrait" },
      { id: "a3", title: "Carousel Ad Frame", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.30 0.16 255), oklch(0.50 0.20 258))", type: "image", aspect: "landscape" },
      { id: "a4", title: "A/B Test Variant", client: "CSA Print", bg: "linear-gradient(135deg, oklch(0.48 0.20 258), oklch(0.65 0.14 265))", type: "image", aspect: "square" },
      { id: "a5", title: "Lookalike Audience Ad", client: "Steal & Style", bg: "linear-gradient(135deg, oklch(0.35 0.22 252), oklch(0.52 0.18 260))", type: "image", aspect: "portrait" },
      { id: "a6", title: "Retargeting Creative", client: "Junz Restaurant", bg: "linear-gradient(135deg, oklch(0.42 0.18 255), oklch(0.58 0.14 262))", type: "image", aspect: "square" }
    ]
  }
];
function FolderIcon$1({ color, tabColor, size = 72 }) {
  const h = Math.round(size * 0.8125);
  const tabH = Math.round(size * 0.09);
  const tabW = Math.round(size * 0.42);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", style: { width: size, height: h + tabH, paddingTop: tabH }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-t-[6px]", style: { top: 0, left: Math.round(size * 0.013), width: tabW, height: tabH, background: `linear-gradient(90deg, ${tabColor}, ${color})` } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-[10px]", style: { top: tabH, left: 0, right: 0, bottom: 0, background: `linear-gradient(160deg, ${color}, ${tabColor})` } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-[10px]", style: {
      top: tabH,
      left: 0,
      right: 0,
      bottom: 0,
      background: "linear-gradient(160deg, oklch(0.78 0.12 232) 0%, oklch(0.68 0.15 242) 100%)",
      boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.25)"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute rounded-full", style: { top: tabH + Math.round(h * 0.18), left: "10%", right: "10%", height: 1, background: "oklch(1 0 0 / 0.20)" } })
  ] });
}
function FolderCard({ folder, onClick }) {
  const [hovered, setHovered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      className: "group relative flex flex-col items-center gap-3 focus:outline-none p-6 rounded-[20px] border border-border bg-card transition-all duration-300 hover:shadow-[0_12px_40px_-10px_oklch(0.2_0.02_240/0.18)] hover:-translate-y-1",
      onClick,
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      "aria-label": `Open ${folder.label}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "transition-transform duration-300 group-hover:-translate-y-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(FolderIcon$1, { color: folder.color, tabColor: folder.tabColor, size: 80 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold tracking-tight text-foreground", children: folder.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] tracking-tight text-foreground/40 leading-snug max-w-[160px]", children: folder.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-full px-3 py-1 text-[10px] tracking-tight transition-colors duration-200",
            style: {
              background: hovered ? folder.color : "var(--secondary)",
              color: hovered ? "white" : "oklch(0.18 0.01 240 / 0.45)"
            },
            children: [
              folder.items.length,
              " items"
            ]
          }
        )
      ]
    }
  );
}
const ASPECT_CLASSES = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  landscape: "aspect-[16/9]"
};
function MediaCard({ item, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "group relative focus:outline-none text-left", onClick, "aria-label": `View ${item.title}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `relative w-full rounded-[10px] overflow-hidden border border-border/40 ${ASPECT_CLASSES[item.aspect]} transition-all duration-300 group-hover:scale-[1.03] group-hover:shadow-[0_10px_30px_-8px_oklch(0.2_0.02_240/0.22)]`,
        style: { background: item.bg },
        children: [
          item.src && item.type === "image" && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.title, className: "absolute inset-0 w-full h-full object-cover" }),
          !item.src && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[24px]", children: item.type === "video" ? "▶" : "✦" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-black/0 group-hover:bg-black/18 transition-colors duration-300 flex items-end p-2.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0 text-white text-[9px] tracking-[0.16em] uppercase font-medium", children: "View →" }) }),
          item.type === "video" && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 flex items-center gap-1 rounded-full bg-black/40 px-1.5 py-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white text-[8px]", children: "▶" }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[10px] font-medium tracking-tight text-foreground/60 leading-snug", children: item.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-foreground/30 mt-0.5", children: item.client })
  ] });
}
function Lightbox({ item, onClose }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[300] flex items-center justify-center p-6",
      style: { background: "oklch(0.04 0.01 240 / 0.96)", backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)", animation: "lb-bg-in 0.2s ease both" },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl w-full", style: { animation: "modal-in 0.35s cubic-bezier(.2,.8,.2,1) both" }, onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `relative w-full rounded-[16px] overflow-hidden border border-white/10 ${ASPECT_CLASSES[item.aspect]}`,
            style: { background: item.bg, boxShadow: "0 32px 80px -16px oklch(0.04 0.01 240 / 0.8)" },
            children: [
              item.src && item.type === "image" && /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.src, alt: item.title, className: "w-full h-full object-cover" }),
              item.src && item.type === "video" && /* @__PURE__ */ jsxRuntimeExports.jsx("video", { src: item.src, controls: true, className: "w-full h-full" }),
              !item.src && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[48px]", children: item.type === "video" ? "▶" : "✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/15 text-[11px] tracking-[0.2em] uppercase", children: "add media" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-start justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white font-semibold tracking-tight text-[15px]", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40 text-[12px] tracking-tight mt-0.5", children: item.client })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/15 text-white/50 hover:bg-white/20 hover:text-white transition-all text-[13px]", "aria-label": "Close", children: "✕" })
        ] })
      ] })
    }
  );
}
function FolderView({ folder, onClose, onItemClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { animation: "modal-in 0.3s cubic-bezier(.2,.8,.2,1) both" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(FolderIcon$1, { color: folder.color, tabColor: folder.tabColor, size: 36 }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-bold tracking-tightest text-foreground", children: folder.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] tracking-tight text-foreground/40", children: [
            folder.items.length,
            " items"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: onClose,
          className: "flex items-center gap-1.5 rounded-full border border-border bg-secondary px-4 py-1.5 text-[11px] tracking-tight text-foreground/50 hover:text-foreground transition",
          children: "← All folders"
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { columns: "3 160px", columnGap: "1rem" }, children: folder.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4 break-inside-avoid", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MediaCard, { item, onClick: () => onItemClick(item) }) }, item.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-[12px] border border-border bg-secondary/40 px-5 py-4 flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/25 text-[16px] mt-0.5", children: "📁" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[11px] tracking-tight text-foreground/40 leading-relaxed", children: [
        "Add real files to ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { className: "bg-secondary px-1 py-0.5 rounded text-[10px]", children: [
          "public/gallery/",
          folder.id,
          "/"
        ] }),
        " and set the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-secondary px-1 py-0.5 rounded text-[10px]", children: "src" }),
        " field in the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-secondary px-1 py-0.5 rounded text-[10px]", children: "FOLDERS" }),
        " array."
      ] })
    ] })
  ] });
}
function GalleryPage() {
  const [openFolder, setOpenFolder] = reactExports.useState(null);
  const [lightbox, setLightbox] = reactExports.useState(null);
  const navigate = useNavigate();
  function handleFolderClick(folder) {
    if (folder.id === "graphics") {
      navigate({ to: "/graphics" });
    } else if (folder.id === "videos") {
      navigate({ to: "/videos" });
    } else if (folder.id === "calendars") {
      navigate({ to: "/calendars" });
    } else if (folder.id === "ads") {
      navigate({ to: "/ads" });
    } else {
      setOpenFolder(folder);
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    lightbox && /* @__PURE__ */ jsxRuntimeExports.jsx(Lightbox, { item: lightbox, onClose: () => setLightbox(null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1100px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10", children: "← Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Gallery" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.88]", style: { fontSize: "clamp(44px, 6vw, 80px)" }, children: [
          "All the work.",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.18 0.01 240 / 0.22)" }, children: "Every piece." })
        ] })
      ] }),
      !openFolder ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-5", children: FOLDERS.map((folder) => /* @__PURE__ */ jsxRuntimeExports.jsx(FolderCard, { folder, onClick: () => handleFolderClick(folder) }, folder.id)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
        FolderView,
        {
          folder: openFolder,
          onClose: () => setOpenFolder(null),
          onItemClick: (item) => setLightbox(item)
        }
      )
    ] })
  ] });
}
const Route$5 = createFileRoute("/clients")({
  component: ClientsPage,
  head: () => ({
    meta: [
      { title: "Clients — Shanzster" },
      { name: "description", content: "Brands and businesses I've worked with." }
    ]
  })
});
const CLIENTS = [
  {
    id: "steal-and-style",
    name: "Steal & Style",
    handle: "@stealandstyle.co",
    platform: "Instagram",
    category: "Fashion Brand",
    description: "A Filipino fashion brand built around affordable, trendy pieces. I managed their Instagram presence — brand voice, content calendar, captions, templates, and community management.",
    services: ["Social Media Management", "Content Strategy", "Video Editing"],
    link: "https://instagram.com/stealandstyle.co",
    color: "oklch(0.16 0.02 240)",
    status: "Active",
    screenshots: [
      { caption: "Feed overview — consistent visual identity across posts" },
      { caption: "Story template in use — new arrival announcement" },
      { caption: "Reel thumbnail — collection launch" },
      { caption: "Engagement post — caption card format" }
    ],
    interviews: [
      { caption: "Initial discovery call notes — brand goals and target audience" },
      { caption: "Brand voice questionnaire — defining the tone" }
    ],
    meetings: [
      { caption: "Monthly content calendar — October 2024" },
      { caption: "Campaign brief — holiday collection drop" }
    ],
    replies: [
      { caption: "Client feedback on first batch of posts" },
      { caption: "Approval message — story templates" }
    ]
  },
  {
    id: "masinloc-tourism",
    name: "Masinloc Tourism Office",
    handle: "Masinloc Tourism Office",
    platform: "Facebook",
    category: "Government · Tourism",
    description: "The official tourism office of Masinloc, Zambales. I managed their Facebook page — creating content that showcased local destinations, events, and culture to drive tourism.",
    services: ["Social Media Management", "Content Strategy", "Graphic Design"],
    link: "https://facebook.com/masinloctourismoffice",
    color: "oklch(0.58 0.14 200)",
    status: "Active",
    screenshots: [
      { caption: "Destination feature post — Masinloc beach" },
      { caption: "Event coverage — local festival" },
      { caption: "Tourism promo graphic" }
    ],
    interviews: [
      { caption: "Coordination meeting with tourism office" }
    ],
    meetings: [
      { caption: "Content calendar — tourism peak season" }
    ],
    replies: [
      { caption: "Office coordinator feedback" }
    ]
  },
  {
    id: "junz-restaurant",
    name: "Junz Restaurant",
    handle: "Junz Restaurant",
    platform: "Facebook",
    category: "Food & Beverage",
    description: "A local restaurant. I handled their Facebook social media — food photography direction, promotional posts, and community engagement to drive foot traffic.",
    services: ["Social Media Management", "Graphic Design"],
    link: "https://facebook.com/junzrestaurant",
    color: "oklch(0.70 0.14 55)",
    status: "Active",
    screenshots: [
      { caption: "Food feature post — hero menu item" },
      { caption: "Promo graphic — weekend special" },
      { caption: "Community post — customer engagement" }
    ],
    meetings: [
      { caption: "Menu review notes — identifying hero items" }
    ],
    replies: [
      { caption: "Owner approval — promo graphics" }
    ]
  },
  {
    id: "csa-print",
    name: "CSA Print and Design",
    handle: "CSA Print and Design",
    platform: "Facebook",
    category: "Print & Design",
    description: "A local print and design shop. I managed their Facebook content and designed print materials — flyers, posters, and promotional assets.",
    services: ["Social Media Management", "Brand Identity", "Print Design"],
    link: "https://facebook.com/CSAPrintandDesign",
    color: "oklch(0.65 0.12 290)",
    status: "Active",
    screenshots: [
      { caption: "Product showcase post — tarpaulin samples" },
      { caption: "Flyer design — shop promotion" },
      { caption: "Brand identity — color and type system" }
    ],
    meetings: [
      { caption: "Brand assessment notes" }
    ],
    replies: [
      { caption: "Client sign-off on brand identity" }
    ]
  }
];
const STATS = [
  { v: "4", l: "clients managed" },
  { v: "100s", l: "posts published" },
  { v: "2+", l: "years freelancing" },
  { v: "3", l: "platforms" }
];
function ImgSlot({ src, caption, color }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "w-full rounded-[12px] border border-border/40 overflow-hidden flex items-center justify-center",
        style: { height: 200, background: color },
        children: src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: caption, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/10 text-[24px]", children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] uppercase tracking-[0.14em] text-white/20", children: "add screenshot" })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/45 leading-snug", children: caption })
  ] });
}
function ClientModal({ client, onClose }) {
  reactExports.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  const sections = [
    { key: "screenshots", label: "Work & Content", items: client.screenshots },
    { key: "interviews", label: "Discovery & Interviews", items: client.interviews },
    { key: "meetings", label: "Meetings & Briefs", items: client.meetings },
    { key: "replies", label: "Client Replies & Feedback", items: client.replies }
  ].filter((s) => s.items && s.items.length > 0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex flex-col justify-end",
      style: { background: "oklch(0.1 0.01 240 / 0.5)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative w-full bg-card",
          style: {
            borderRadius: "20px 20px 0 0",
            maxHeight: "92vh",
            animation: "sheet-up 0.45s cubic-bezier(.2,.8,.2,1) both",
            boxShadow: "0 -8px 48px -8px oklch(0.2 0.02 240 / 0.22), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.12)"
          },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 items-center justify-between border-b border-border bg-secondary/60 px-5 sticky top-0 z-10", style: { borderRadius: "20px 20px 0 0" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "h-[11px] w-[11px] rounded-full hover:opacity-80 transition", style: { background: "var(--traffic-red)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: client.handle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-[11px] tracking-tight text-foreground/35 hover:text-foreground transition", children: "✕ close" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "overflow-y-auto",
                style: { maxHeight: "calc(92vh - 40px)" },
                onWheel: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "w-full relative flex items-end",
                      style: { height: 320, background: client.color },
                      children: [
                        client.coverImg ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: client.coverImg, alt: client.name, className: "absolute inset-0 w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/10 text-[72px] font-bold tracking-tightest", children: client.name[0] }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0", style: { height: "55%", background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)" } }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 px-10 pb-8 w-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.24em] text-foreground/40 mb-1", children: client.category }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(28px,4vw,52px)] font-bold tracking-tightest text-foreground leading-tight", children: client.name }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] tracking-tight text-foreground/50", children: [
                              client.platform,
                              " · ",
                              client.handle
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-end gap-2 shrink-0", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.14em]", style: { background: "oklch(0.78 0.17 145 / 0.15)", color: "oklch(0.55 0.17 145)" }, children: client.status }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: client.link, target: "_blank", rel: "noopener noreferrer", className: "rounded-full border border-border bg-card/80 px-4 py-1.5 text-[11px] tracking-tight text-foreground/60 hover:bg-card transition", children: "View page ↗" })
                          ] })
                        ] }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border border-b border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-7 lg:col-span-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-3", children: "About this client" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed tracking-tight text-foreground/65", children: client.description })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-7", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.2em] text-foreground/30 mb-3", children: "Services provided" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: client.services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/55", children: s }, s)) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                        Link,
                        {
                          to: "/work/$id",
                          params: { id: client.id },
                          className: "inline-flex rounded-full bg-foreground px-4 py-2 text-[11px] tracking-tight text-background hover:opacity-85 transition",
                          onClick: onClose,
                          children: "Full case study →"
                        }
                      ) })
                    ] })
                  ] }),
                  sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-8 border-b border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-6", children: section.label }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4", children: section.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(ImgSlot, { src: item.src, caption: item.caption, color: `${client.color}${i % 2 === 0 ? "cc" : "99"}` }, i)) })
                  ] }, section.key)),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12" })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function ClientsPage() {
  const [active, setActive] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    active && /* @__PURE__ */ jsxRuntimeExports.jsx(ClientModal, { client: active, onClose: () => setActive(null) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1100px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10", children: "← Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Clients" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.88]", style: { fontSize: "clamp(44px, 6vw, 80px)" }, children: [
          "Brands I've",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.18 0.01 240 / 0.25)" }, children: "worked with." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[14px] leading-relaxed tracking-tight text-foreground/55 max-w-lg", children: "Every client is different — different audience, different voice, different goal. Click a client to see how I worked with them." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-4 divide-x divide-border border border-border rounded-[14px] overflow-hidden bg-card mb-10", children: STATS.map(({ v, l }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold tracking-tightest leading-none text-foreground", children: v }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40", children: l })
      ] }, l)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden mac-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "Finder — clients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-tight text-foreground/30", children: [
            CLIENTS.length,
            " items"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-10 grid grid-cols-2 sm:grid-cols-4 gap-8", children: CLIENTS.map((client) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            className: "group flex flex-col items-center gap-2.5 cursor-default select-none",
            onClick: () => setActive(client),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative rounded-[20px] overflow-hidden transition-all duration-200 group-hover:scale-105 group-hover:shadow-[0_12px_32px_-8px_oklch(0.2_0.02_240/0.25)]",
                  style: { width: 120, height: 120 },
                  children: [
                    client.coverImg || client.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: client.coverImg ?? client.logo,
                        alt: client.name,
                        className: "w-full h-full object-cover"
                      }
                    ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-full h-full flex items-center justify-center",
                        style: { background: `linear-gradient(145deg, ${client.color}, ${client.color}88)` },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[48px] font-bold text-white/25 tracking-tightest leading-none", children: client.name[0] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "absolute top-2.5 right-2.5 h-2.5 w-2.5 rounded-full border-2 border-white",
                        style: { background: "var(--traffic-green)" }
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "px-2 py-0.5 rounded-[4px] transition-colors duration-150 text-center",
                  style: {
                    background: "transparent"
                  },
                  onMouseEnter: (e) => {
                    e.currentTarget.style.background = "oklch(0.62 0.18 255)";
                    e.currentTarget.style.color = "white";
                  },
                  onMouseLeave: (e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "";
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-medium tracking-tight text-foreground leading-tight", children: client.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-tight text-foreground/40 mt-0.5", children: client.platform })
                  ]
                }
              )
            ]
          },
          client.id
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border px-5 py-2 flex items-center justify-between bg-secondary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-tight text-foreground/35", children: [
            CLIENTS.length,
            " items · click to open"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: "var(--traffic-green)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-tight text-foreground/35", children: "All active" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 rounded-[14px] border border-border bg-card px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Want to be on this list?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] tracking-tight text-foreground/50", children: "I'm open to new clients. Let's talk." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "contact", className: "rounded-full bg-foreground px-6 py-2.5 text-[12px] tracking-tight text-background transition hover:opacity-85 shrink-0", children: "Get in touch →" })
      ] })
    ] })
  ] });
}
const Route$4 = createFileRoute("/calendars")({
  component: CalendarsPage,
  head: () => ({
    meta: [
      { title: "Content Calendars — Shanzster" },
      { name: "description", content: "Monthly editorial calendars, posting schedules, and campaign timelines." }
    ]
  })
});
const CALENDARS = [
  { id: "cal1", title: "Steal & Style — October 2024", client: "Steal & Style", category: "Monthly", bg: "linear-gradient(135deg, oklch(0.55 0.14 240), oklch(0.72 0.10 250))" },
  { id: "cal2", title: "Masinloc Tourism — Q4 2024", client: "Masinloc Tourism", category: "Quarterly", bg: "linear-gradient(135deg, oklch(0.60 0.14 220), oklch(0.75 0.10 230))" },
  { id: "cal3", title: "Junz Restaurant — November 2024", client: "Junz Restaurant", category: "Monthly", bg: "linear-gradient(135deg, oklch(0.65 0.14 55),  oklch(0.78 0.10 65))" },
  { id: "cal4", title: "CSA Print — Campaign Brief", client: "CSA Print", category: "Campaign", bg: "linear-gradient(135deg, oklch(0.55 0.12 270), oklch(0.68 0.10 280))" },
  { id: "cal5", title: "Holiday Campaign Timeline", client: "Steal & Style", category: "Campaign", bg: "linear-gradient(135deg, oklch(0.50 0.16 240), oklch(0.65 0.12 255))" },
  { id: "cal6", title: "Summer Content Strategy", client: "Masinloc Tourism", category: "Seasonal", bg: "linear-gradient(135deg, oklch(0.58 0.14 210), oklch(0.72 0.10 220))" }
];
function CalendarCard({ calendar, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "group relative w-full text-left cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]",
            style: { aspectRatio: "16 / 9", background: calendar.bg },
            children: [
              calendar.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: calendar.src,
                  alt: calendar.title,
                  className: "w-full h-full object-contain"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[32px]", children: "◈" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[10px] tracking-[0.14em] uppercase", children: "Add Calendar" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30", children: calendar.category }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[11px] tracking-tight text-foreground", children: "View Full Size" }) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors", children: calendar.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/50 mt-1", children: calendar.client })
        ] })
      ]
    }
  );
}
function FullViewModal$1({
  calendar,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in duration-200",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 2L14 14M14 2L2 14" }) })
          }
        ),
        currentIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            className: "absolute left-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4L6 10L12 16" }) })
          }
        ),
        currentIndex < total - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            className: "absolute right-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 4L14 10L8 16" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative max-w-5xl max-h-[85vh] w-full mx-6",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative w-full rounded-xl overflow-hidden border border-border shadow-2xl",
                  style: { aspectRatio: "16 / 9", background: calendar.bg },
                  children: calendar.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: calendar.src,
                      alt: calendar.title,
                      className: "w-full h-full object-contain"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[48px]", children: "◈" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[12px] tracking-[0.14em] uppercase", children: "Add Calendar" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60", children: calendar.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-foreground/30", children: [
                    currentIndex + 1,
                    " / ",
                    total
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold tracking-tight text-foreground leading-snug", children: calendar.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] tracking-tight text-foreground/50 mt-1", children: calendar.client })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function CalendarsPage() {
  const [selectedCalendar, setSelectedCalendar] = reactExports.useState(null);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const openCalendar = (calendar, index) => {
    setSelectedCalendar(calendar);
    setSelectedIndex(index);
  };
  const closeCalendar = () => {
    setSelectedCalendar(null);
  };
  const goToNext = () => {
    if (selectedIndex < CALENDARS.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedCalendar(CALENDARS[nextIndex]);
    }
  };
  const goToPrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedCalendar(CALENDARS[prevIndex]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/gallery",
          className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10",
          children: "← Back to Gallery"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Gallery · Calendars" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "font-bold tracking-tightest text-foreground leading-[0.88]",
            style: { fontSize: "clamp(36px, 5vw, 64px)" },
            children: "Content Calendars"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md", children: [
          "Monthly editorial calendars, posting schedules, and campaign timelines — ",
          CALENDARS.length,
          " planning documents."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10", children: CALENDARS.map((calendar, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CalendarCard,
        {
          calendar,
          onClick: () => openCalendar(calendar, index)
        },
        calendar.id
      )) })
    ] }),
    selectedCalendar && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FullViewModal$1,
      {
        calendar: selectedCalendar,
        onClose: closeCalendar,
        onNext: goToNext,
        onPrev: goToPrev,
        currentIndex: selectedIndex,
        total: CALENDARS.length
      }
    )
  ] });
}
const Route$3 = createFileRoute("/ads")({
  component: AdsPage,
  head: () => ({
    meta: [
      { title: "Campaign Ads — Shanzster" },
      { name: "description", content: "Meta ad creatives, story ads, carousel frames, and A/B test variants." }
    ]
  })
});
const ADS = [
  { id: "a1", title: "Meta Ad Creative", client: "CSA Print", category: "Meta Ads", bg: "linear-gradient(135deg, oklch(0.38 0.20 255), oklch(0.55 0.18 260))" },
  { id: "a2", title: "Story Ad", client: "Junz Restaurant", category: "Stories", bg: "linear-gradient(135deg, oklch(0.45 0.22 250), oklch(0.62 0.16 265))" },
  { id: "a3", title: "Carousel Ad Frame", client: "Steal & Style", category: "Carousel", bg: "linear-gradient(135deg, oklch(0.30 0.16 255), oklch(0.50 0.20 258))" },
  { id: "a4", title: "A/B Test Variant", client: "CSA Print", category: "Testing", bg: "linear-gradient(135deg, oklch(0.48 0.20 258), oklch(0.65 0.14 265))" },
  { id: "a5", title: "Lookalike Audience Ad", client: "Steal & Style", category: "Meta Ads", bg: "linear-gradient(135deg, oklch(0.35 0.22 252), oklch(0.52 0.18 260))" },
  { id: "a6", title: "Retargeting Creative", client: "Junz Restaurant", category: "Retarget", bg: "linear-gradient(135deg, oklch(0.42 0.18 255), oklch(0.58 0.14 262))" },
  { id: "a7", title: "Lead Generation Ad", client: "Masinloc Tourism", category: "Lead Gen", bg: "linear-gradient(135deg, oklch(0.40 0.20 250), oklch(0.60 0.16 260))" },
  { id: "a8", title: "Video Ad Creative", client: "Steal & Style", category: "Video Ads", bg: "linear-gradient(135deg, oklch(0.36 0.18 255), oklch(0.54 0.16 258))" }
];
function AdCard({ ad, onClick }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      onClick,
      className: "group relative w-full text-left cursor-pointer",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative w-full rounded-lg overflow-hidden border border-border/20 transition-all duration-300 hover:border-border/40 hover:shadow-lg hover:scale-[1.02]",
            style: { aspectRatio: "1 / 1", background: ad.bg },
            children: [
              ad.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: ad.src,
                  alt: ad.title,
                  className: "w-full h-full object-contain"
                }
              ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[32px]", children: "⬡" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[10px] tracking-[0.14em] uppercase", children: "Add Ad" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-[9px] uppercase tracking-[0.2em] text-foreground/60 border border-border/30", children: ad.category }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-background/0 group-hover:bg-background/10 transition-colors duration-300 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-2 rounded-full bg-background/90 backdrop-blur-sm border border-border text-[11px] tracking-tight text-foreground", children: "View Full Size" }) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[13px] font-semibold tracking-tight text-foreground leading-snug group-hover:text-foreground/70 transition-colors", children: ad.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/50 mt-1", children: ad.client })
        ] })
      ]
    }
  );
}
function FullViewModal({
  ad,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-sm animate-in fade-in duration-200",
      onClick: onClose,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: onClose,
            className: "absolute top-6 right-6 w-10 h-10 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Close",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2 2L14 14M14 2L2 14" }) })
          }
        ),
        currentIndex > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onPrev();
            },
            className: "absolute left-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Previous",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 4L6 10L12 16" }) })
          }
        ),
        currentIndex < total - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: (e) => {
              e.stopPropagation();
              onNext();
            },
            className: "absolute right-6 w-12 h-12 rounded-full bg-card border border-border hover:bg-secondary transition-colors flex items-center justify-center text-foreground/60 hover:text-foreground z-10",
            "aria-label": "Next",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M8 4L14 10L8 16" }) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "relative max-w-3xl max-h-[85vh] w-full mx-6",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "relative w-full rounded-xl overflow-hidden border border-border shadow-2xl",
                  style: { aspectRatio: "1 / 1", background: ad.bg },
                  children: ad.src ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: ad.src,
                      alt: ad.title,
                      className: "w-full h-full object-contain"
                    }
                  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[48px]", children: "⬡" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/12 text-[12px] tracking-[0.14em] uppercase", children: "Add Ad" })
                  ] })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-start justify-between gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block px-2.5 py-1 rounded-full bg-card border border-border text-[9px] uppercase tracking-[0.2em] text-foreground/60", children: ad.category }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] text-foreground/30", children: [
                    currentIndex + 1,
                    " / ",
                    total
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[18px] font-semibold tracking-tight text-foreground leading-snug", children: ad.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] tracking-tight text-foreground/50 mt-1", children: ad.client })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
function AdsPage() {
  const [selectedAd, setSelectedAd] = reactExports.useState(null);
  const [selectedIndex, setSelectedIndex] = reactExports.useState(0);
  const openAd = (ad, index) => {
    setSelectedAd(ad);
    setSelectedIndex(index);
  };
  const closeAd = () => {
    setSelectedAd(null);
  };
  const goToNext = () => {
    if (selectedIndex < ADS.length - 1) {
      const nextIndex = selectedIndex + 1;
      setSelectedIndex(nextIndex);
      setSelectedAd(ADS[nextIndex]);
    }
  };
  const goToPrev = () => {
    if (selectedIndex > 0) {
      const prevIndex = selectedIndex - 1;
      setSelectedIndex(prevIndex);
      setSelectedAd(ADS[prevIndex]);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/gallery",
          className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10",
          children: "← Back to Gallery"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "Gallery · Ads" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "font-bold tracking-tightest text-foreground leading-[0.88]",
            style: { fontSize: "clamp(36px, 5vw, 64px)" },
            children: "Campaign Ads"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[13px] tracking-tight text-foreground/40 max-w-md", children: [
          "Meta ad creatives, story ads, carousel frames, and A/B test variants — ",
          ADS.length,
          " ad pieces."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10", children: ADS.map((ad, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        AdCard,
        {
          ad,
          onClick: () => openAd(ad, index)
        },
        ad.id
      )) })
    ] }),
    selectedAd && /* @__PURE__ */ jsxRuntimeExports.jsx(
      FullViewModal,
      {
        ad: selectedAd,
        onClose: closeAd,
        onNext: goToNext,
        onPrev: goToPrev,
        currentIndex: selectedIndex,
        total: ADS.length
      }
    )
  ] });
}
const Route$2 = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Shanzster" },
      { name: "description", content: "Social media manager, brand identity designer, and creative developer from Subic Bay, Philippines." }
    ]
  })
});
function PHClock() {
  const [time, setTime] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const tick = () => {
      setTime(new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "Asia/Manila" })));
    };
    tick();
    const id = setInterval(tick, 1e3);
    return () => clearInterval(id);
  }, []);
  if (!time) return null;
  const h = time.getHours();
  const m = time.getMinutes();
  const s = time.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";
  const h12 = h % 12 || 12;
  const secDeg = s * 6;
  const minDeg = m * 6 + s * 0.1;
  const hourDeg = h12 % 12 * 30 + m * 0.5;
  const pad = (n) => String(n).padStart(2, "0");
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dayName = dayNames[time.getDay()];
  const dateStr = `${dayName}, ${monthNames[time.getMonth()]} ${time.getDate()}`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center gap-1.5 border-b border-border bg-secondary/60 px-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[11px] tracking-tight text-foreground/40", children: "Philippine Standard Time · UTC+8" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 flex items-center gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 relative", style: { width: 100, height: 100 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "100", height: "100", viewBox: "0 0 100 100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "46", fill: "var(--card)", stroke: "var(--border)", strokeWidth: "1.5" }),
        Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180);
          const x1 = 50 + 38 * Math.cos(angle);
          const y1 = 50 + 38 * Math.sin(angle);
          const x2 = 50 + 43 * Math.cos(angle);
          const y2 = 50 + 43 * Math.sin(angle);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1, y1, x2, y2, stroke: "oklch(0.18 0.01 240 / 0.2)", strokeWidth: "1.5", strokeLinecap: "round" }, i);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "50",
            y1: "50",
            x2: 50 + 24 * Math.cos((hourDeg - 90) * Math.PI / 180),
            y2: 50 + 24 * Math.sin((hourDeg - 90) * Math.PI / 180),
            stroke: "oklch(0.18 0.01 240)",
            strokeWidth: "3",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "50",
            y1: "50",
            x2: 50 + 32 * Math.cos((minDeg - 90) * Math.PI / 180),
            y2: 50 + 32 * Math.sin((minDeg - 90) * Math.PI / 180),
            stroke: "oklch(0.18 0.01 240)",
            strokeWidth: "2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "line",
          {
            x1: "50",
            y1: "50",
            x2: 50 + 34 * Math.cos((secDeg - 90) * Math.PI / 180),
            y2: 50 + 34 * Math.sin((secDeg - 90) * Math.PI / 180),
            stroke: "oklch(0.62 0.20 27)",
            strokeWidth: "1.2",
            strokeLinecap: "round"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "3", fill: "oklch(0.18 0.01 240)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "50", cy: "50", r: "1.5", fill: "oklch(0.62 0.20 27)" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "p",
          {
            className: "font-bold tracking-tightest leading-none text-foreground",
            style: { fontSize: "clamp(32px, 4vw, 48px)", fontVariantNumeric: "tabular-nums" },
            children: [
              pad(h12),
              ":",
              pad(m),
              ":",
              pad(s),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/30 ml-2", style: { fontSize: "0.45em" }, children: ampm })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[12px] tracking-tight text-foreground/40", children: dateStr }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full", style: { background: "var(--traffic-green)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/40", children: "Online · Philippines 🇵🇭" })
        ] })
      ] })
    ] })
  ] });
}
const CREDENTIALS = [
  {
    type: "Experience",
    icon: "◈",
    items: [
      { title: "Freelance Social Media Manager", sub: "Self-employed · 2022 – Present", detail: "Managing social media for local businesses across fashion, food, tourism, and print." },
      { title: "Brand Identity Designer", sub: "Self-employed · 2022 – Present", detail: "Logo design, visual systems, and brand guidelines for local clients." },
      { title: "Video Editor", sub: "Self-employed · 2023 – Present", detail: "Short-form video editing for Instagram Reels and Facebook — CapCut, motion captions, sound design." }
    ]
  },
  {
    type: "Skills",
    icon: "✦",
    items: [
      { title: "Social Media Management", sub: "Instagram · Facebook · Content Strategy", detail: "Brand voice, content calendars, community management, and organic growth." },
      { title: "Graphic Design", sub: "Canva · Adobe Illustrator · Photoshop", detail: "Post templates, brand identity, print materials, and ad creatives." },
      { title: "Paid Advertising", sub: "Meta Ads Manager", detail: "Campaign setup, audience targeting, A/B testing, and performance reporting." },
      { title: "Video Editing", sub: "CapCut · Short-form", detail: "Reels, vlogs, promotional videos, motion captions, and color grading." }
    ]
  }
];
const DEVICES = [
  {
    name: "MacBook Air M2",
    role: "Primary workstation",
    icon: "💻",
    specs: ["Apple M2 chip", "8GB RAM", "256GB SSD", "macOS Sonoma"],
    color: "oklch(0.94 0.005 240)"
  },
  {
    name: "iPhone",
    role: "Content capture",
    icon: "📱",
    specs: ["Primary camera", "Content shooting", "Social monitoring", "On-the-go editing"],
    color: "oklch(0.94 0.005 240)"
  },
  {
    name: "iPad",
    role: "Design & sketching",
    icon: "🖥",
    specs: ["Canva design", "Mood boarding", "Client presentations", "Reference screen"],
    color: "oklch(0.94 0.005 240)"
  },
  {
    name: "External Monitor",
    role: "Extended workspace",
    icon: "🖥",
    specs: ["Dual-screen setup", "Color-accurate display", "Design review", "Video editing"],
    color: "oklch(0.94 0.005 240)"
  }
];
const TOOLS_STACK = [
  { name: "Canva", category: "Design", color: "oklch(0.55 0.22 290)" },
  { name: "Adobe Illustrator", category: "Design", color: "oklch(0.55 0.20 55)" },
  { name: "Photoshop", category: "Design", color: "oklch(0.50 0.18 240)" },
  { name: "CapCut", category: "Video", color: "oklch(0.20 0.02 240)" },
  { name: "Meta Ads Manager", category: "Marketing", color: "oklch(0.50 0.20 255)" },
  { name: "Notion", category: "Planning", color: "oklch(0.30 0.01 240)" },
  { name: "SocialBlade", category: "Analytics", color: "oklch(0.45 0.20 27)" },
  { name: "ChatGPT", category: "AI", color: "oklch(0.50 0.16 165)" },
  { name: "Adobe Firefly", category: "AI", color: "oklch(0.40 0.22 290)" }
];
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1100px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-10", children: "← Back" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative w-full flex items-end",
              style: {
                height: 280,
                background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))"
              },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/src/image_reference/profile.png",
                    alt: "Shanzster",
                    className: "absolute inset-0 w-full h-full object-cover object-top",
                    onError: (e) => {
                      e.target.style.display = "none";
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 h-1/2", style: { background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 px-7 pb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-1", children: "Based in" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] font-semibold tracking-tight text-foreground", children: "Subic Bay, Philippines 🇵🇭" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-7 py-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-bold tracking-tightest text-foreground leading-[0.9]", style: { fontSize: "clamp(32px, 4vw, 52px)" }, children: "Shanzster" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] tracking-tight text-foreground/50", children: "Social Media Manager · Brand Designer · Video Editor" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/60 max-w-sm", children: "I grow pages, build brands, and make content stick. 2+ years freelancing for local businesses across fashion, food, tourism, and print — from zero to consistent." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid grid-cols-3 divide-x divide-border border border-border rounded-[10px] overflow-hidden", children: [
              { v: "6+", l: "clients" },
              { v: "2+", l: "yrs exp" },
              { v: "3+", l: "brands" }
            ].map(({ v, l }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 py-3 text-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[22px] font-bold tracking-tightest leading-none text-foreground", children: v }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[9px] uppercase tracking-[0.14em] text-foreground/35", children: l })
            ] }, l)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(PHClock, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card px-6 py-5 flex items-center justify-between gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: "var(--traffic-green)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold tracking-tight text-foreground", children: "Available for work" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] tracking-tight text-foreground/45", children: "Open to new clients · 2026" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/",
                hash: "contact",
                className: "rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background hover:opacity-85 transition shrink-0",
                children: "Hire me →"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card px-6 py-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Platforms I manage" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: ["Instagram", "Facebook", "TikTok", "Meta Ads"].map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/60", children: p }, p)) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-[16px] border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center gap-1.5 border-b border-border bg-secondary/60 px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-auto text-[11px] tracking-tight text-foreground/40", children: "intro.mp4" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "relative w-full flex items-center justify-center",
            style: { aspectRatio: "16/9", background: "oklch(0.10 0.01 240)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-3 text-center px-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex h-16 w-16 items-center justify-center rounded-full border border-white/10",
                  style: { background: "oklch(0.18 0.02 240)" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-[22px] ml-1", children: "▶" })
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/25 text-[12px] tracking-tight", children: "Video intro coming soon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-white/15 text-[11px] tracking-tight max-w-xs", children: [
                "Drop your video file at ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-white/5 px-1.5 py-0.5 rounded", children: "public/videos/intro.mp4" }),
                " and uncomment the video tag above."
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5", children: "Credentials" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4", children: CREDENTIALS.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 border-b border-border bg-secondary/40 flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/40", children: section.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-medium", children: section.type })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: section.items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: item.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/40 mt-0.5", children: item.sub }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] tracking-tight text-foreground/55 mt-2 leading-relaxed", children: item.detail })
          ] }, i)) })
        ] }, section.type)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-[16px] border border-border bg-card overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-6 py-4 border-b border-border bg-secondary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.2em] text-foreground/50 font-medium", children: "Tools I use daily" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-6 flex flex-wrap gap-2", children: TOOLS_STACK.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-3 py-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "h-2 w-2 rounded-full shrink-0",
                  style: { background: tool.color }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] tracking-tight text-foreground/70", children: tool.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/30", children: tool.category })
            ]
          },
          tool.name
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-5", children: "Setup & devices" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4", children: DEVICES.map((device) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card px-5 py-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex h-12 w-12 items-center justify-center rounded-[12px] text-[24px] mb-4",
              style: { background: "var(--secondary)" },
              children: device.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: device.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/40 mt-0.5 mb-3", children: device.role }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-1", children: device.specs.map((spec) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-foreground/20 shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: spec })
          ] }, spec)) })
        ] }, device.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Let's work together." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] tracking-tight text-foreground/50", children: "I'm open to new clients and projects." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/clients", className: "rounded-full border border-border bg-secondary px-5 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-card transition shrink-0", children: "See clients →" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", hash: "contact", className: "rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background hover:opacity-85 transition shrink-0", children: "Hire me →" })
        ] })
      ] })
    ] })
  ] });
}
function MacWindow({ label, title, children, rightChip, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `mac-shadow overflow-hidden rounded-[12px] border border-border bg-card ${className}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3 backdrop-blur", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full bg-[var(--traffic-red)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full bg-[var(--traffic-yellow)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full bg-[var(--traffic-green)]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] tracking-tight text-foreground/70", children: [
        label ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-2 text-foreground/40", children: label }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-[44px] text-right", children: rightChip && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-background px-2 py-0.5 text-[10px] tracking-tight text-foreground/70 border border-border", children: rightChip }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children })
  ] });
}
const ROLES = [
  "content strategist",
  "growth marketer",
  "social media manager",
  "brand storyteller",
  "video editor"
];
function SelectingRoles() {
  const [i, setI] = reactExports.useState(0);
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
    const id = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setI((v) => (v + 1) % ROLES.length);
        setVisible(true);
      }, 180);
    }, 2600);
    return () => clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "auto-select",
      style: {
        opacity: visible ? 1 : 0,
        transition: "opacity 0.18s ease"
      },
      children: ROLES[i]
    },
    i
  );
}
const SERVICES = [
  {
    label: "Content Strategist",
    icon: "✦",
    tagline: "Words that build systems, not just posts.",
    story: [
      "I don't just write — I architect content that compounds. Every piece I create is part of a larger system designed to attract, educate, and convert.",
      "From editorial calendars to topic clusters, I build content engines that keep working long after I've shipped them. I've managed pages where a single strategy shift tripled organic reach in under 60 days.",
      "My approach: understand the audience deeply, map the funnel honestly, then create content that earns attention instead of begging for it."
    ],
    tags: ["Editorial Systems", "SEO Writing", "Content Calendars", "Storytelling"],
    angle: -26,
    x: -260,
    y: -80
  },
  {
    label: "Social Media Marketing",
    icon: "◈",
    tagline: "Scroll-stopping content for real audiences.",
    story: [
      "I've managed social pages for local businesses, tourism offices, and fashion brands — each with a completely different voice, audience, and goal.",
      "For Steal & Style, I built a playful, witty brand voice that blends Filipino internet humor with trendy aesthetics. For Masinloc Tourism, I created content that made people actually want to visit.",
      "I understand the algorithm, but more importantly I understand people. Engagement isn't a metric I chase — it's a result of content that genuinely resonates."
    ],
    tags: ["Instagram", "Facebook", "Reels", "Community Building", "Brand Voice"],
    angle: -13,
    x: -130,
    y: -140
  },
  {
    label: "Brand Identity",
    icon: "◉",
    tagline: "Visuals that make people feel something.",
    story: [
      "Brand identity is more than a logo. It's the feeling someone gets when they see your content before they even read a word.",
      "I work in Illustrator, Photoshop, and Canva to build visual systems — color palettes, typography hierarchies, and design languages that stay consistent across every touchpoint.",
      "My design taste leans premium and modern: clean layouts, strong type, and just enough personality to feel human. I've built identities for print shops, restaurants, and social-first brands."
    ],
    tags: ["Visual Identity", "Adobe Illustrator", "Typography", "Canva", "Design Systems"],
    angle: 0,
    x: 0,
    y: -165
  },
  {
    label: "Video Editing",
    icon: "▶",
    tagline: "Edits that hit before the caption loads.",
    story: [
      "I edit with the same instinct I use for design — every cut, caption, and sound choice is intentional. My style is cinematic but internet-native: freeze frames, motion text, and sound design that makes people rewatch.",
      "I've produced vlogs, promotional reels, collection launches, and campaign content. I know the difference between a video that gets views and one that gets saved.",
      "The goal is always the same: make it feel like it was made for the person watching it."
    ],
    tags: ["Reels", "Vlogs", "Motion Captions", "Sound Design", "Promotional Content"],
    angle: 13,
    x: 130,
    y: -140
  },
  {
    label: "Campaign Strategy",
    icon: "⬡",
    tagline: "From idea to execution, start to finish.",
    story: [
      "A campaign without strategy is just noise. I plan launches, promotions, and awareness pushes with a clear narrative arc — what we're saying, who we're saying it to, and why they should care.",
      "I've run campaigns for local businesses with zero budget that outperformed paid ads, purely through timing, creative, and community leverage.",
      "My process: define the goal, reverse-engineer the audience journey, build the content stack, then execute with consistency. No guesswork."
    ],
    tags: ["Launch Strategy", "Campaign Planning", "Organic Growth", "Local Marketing"],
    angle: 26,
    x: 260,
    y: -80
  }
];
const DESKTOP_ELEMENTS = [
  // ── Left side ──
  {
    id: "folder-webdesign",
    type: "folder",
    label: "web design",
    top: "8%",
    left: "4%",
    size: "sm"
  },
  {
    id: "app-photoshop",
    type: "app",
    label: "Photoshop",
    top: "5%",
    left: "16%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/PS.png", alt: "Photoshop", className: "w-full h-full object-cover" })
  },
  {
    id: "app-capcut",
    type: "app",
    label: "CapCut",
    top: "38%",
    left: "4%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/capcut.png", alt: "CapCut", className: "w-full h-full object-cover" })
  },
  {
    id: "app-illustrator",
    type: "app",
    label: "Illustrator",
    top: "58%",
    left: "16%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/AI.png", alt: "Illustrator", className: "w-full h-full object-cover" })
  },
  {
    id: "folder-portfolio-sm",
    type: "folder",
    label: "portfolio",
    top: "76%",
    left: "5%",
    size: "sm"
  },
  // ── Right side ──
  {
    id: "file-brand",
    type: "file",
    label: "brand_kit.jpeg",
    top: "6%",
    right: "18%",
    preview: {
      bg: "linear-gradient(135deg, oklch(0.75 0.12 260), oklch(0.65 0.18 290))",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/90 text-[11px] font-bold tracking-widest uppercase", children: "Brand" }) })
    }
  },
  {
    id: "folder-socialmedia",
    type: "folder",
    label: "social media",
    top: "10%",
    right: "4%",
    size: "sm"
  },
  {
    id: "app-meta-ads",
    type: "app",
    label: "Meta Ads",
    top: "38%",
    right: "4%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/meta.png", alt: "Meta Ads", className: "w-full h-full object-cover" })
  },
  {
    id: "app-canva",
    type: "app",
    label: "Canva",
    top: "58%",
    right: "16%",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/canva.png", alt: "Canva", className: "w-full h-full object-cover" })
  },
  {
    id: "file-campaign",
    type: "file",
    label: "campaign_2025.jpeg",
    top: "76%",
    right: "5%",
    preview: {
      bg: "linear-gradient(135deg, oklch(0.82 0.08 85), oklch(0.72 0.14 55))",
      content: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-full flex flex-col items-center justify-center gap-1 p-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white/90 text-[9px] font-bold tracking-wider uppercase text-center leading-tight", children: [
        "Campaign",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "2025"
      ] }) })
    }
  }
];
function FolderIcon({ size = "sm" }) {
  const w = size === "md" ? 72 : 56;
  const h = size === "md" ? 58 : 46;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: w, height: h, viewBox: "0 0 72 58", fill: "none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "8", width: "72", height: "50", rx: "6", fill: "oklch(0.68 0.14 240)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "0", y: "8", width: "72", height: "50", rx: "6", fill: "url(#fgrad)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0 14 Q0 8 6 8 L28 8 Q32 8 34 12 L36 16 L72 16 L72 58 Q72 58 66 58 L6 58 Q0 58 0 52 Z", fill: "oklch(0.72 0.13 240)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "fgrad", x1: "36", y1: "8", x2: "36", y2: "58", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.78 0.12 235)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.64 0.15 242)" })
    ] }) })
  ] });
}
function DesktopItem({ el }) {
  const pos = {
    position: "absolute",
    top: el.top,
    left: el.left,
    right: el.right
  };
  if (el.type === "folder") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: pos, className: "flex flex-col items-center gap-1 select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FolderIcon, { size: el.size }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/55 text-center leading-tight max-w-[70px]", children: el.label })
    ] });
  }
  if (el.type === "app") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: pos, className: "flex flex-col items-center gap-1 select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-[16px] overflow-hidden shadow-[0_4px_16px_-4px_oklch(0.2_0.02_240/0.22)]",
          style: { width: 52, height: 52 },
          children: el.icon
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/55", children: el.label })
    ] });
  }
  if (el.type === "file") {
    const preview = el.preview;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: pos, className: "flex flex-col items-center gap-1 select-none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-[6px] overflow-hidden border border-border/60 shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.18)]",
          style: {
            width: 72,
            height: 88,
            background: preview.bg
          },
          children: preview.content
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/55 text-center leading-tight max-w-[80px]", children: el.label })
    ] });
  }
  return null;
}
function ServiceModal({
  service,
  onClose
}) {
  const modal = /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 flex items-center justify-center p-4",
      style: { zIndex: 99999, background: "rgba(0,0,0,0.6)" },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative w-full max-w-lg rounded-[20px] border border-border bg-card overflow-hidden mac-shadow",
          style: { animation: "modal-in 0.38s cubic-bezier(.2,.8,.2,1) both" },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    onClick: onClose,
                    className: "flex h-[11px] w-[11px] items-center justify-center rounded-full transition hover:opacity-80",
                    style: { background: "var(--traffic-red)" },
                    "aria-label": "Close"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] tracking-tight text-foreground/60", children: [
                service.label,
                ".md"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[44px]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] text-[20px]",
                    style: { background: "var(--folder)", color: "white" },
                    children: service.icon
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[22px] font-bold tracking-tightest leading-tight text-foreground", children: service.label }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[13px] tracking-tight text-foreground/50", children: service.tagline })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-3", children: service.story.map((para, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13.5px] leading-relaxed tracking-tight text-foreground/75", children: para }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-wrap gap-2", children: service.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: "rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] tracking-tight text-foreground/60",
                  children: tag
                },
                tag
              )) })
            ] })
          ]
        }
      )
    }
  );
  return reactDomExports.createPortal(modal, document.body);
}
function ServicePaper({
  service,
  index,
  open,
  hoveredIndex,
  onHover,
  onLeave,
  onClick
}) {
  const isHovered = hoveredIndex === index;
  const isNeighbor = hoveredIndex !== null && hoveredIndex !== index && Math.abs(hoveredIndex - index) === 1;
  const isFarNeighbor = hoveredIndex !== null && hoveredIndex !== index && Math.abs(hoveredIndex - index) >= 2;
  const extraX = isNeighbor ? index < (hoveredIndex ?? 0) ? -36 : 36 : isFarNeighbor ? index < (hoveredIndex ?? 0) ? -18 : 18 : 0;
  const extraY = isHovered ? -32 : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute",
      style: {
        bottom: 168,
        left: "50%",
        transform: open ? `translateX(-50%) translateX(${service.x + extraX}px) translateY(${service.y + extraY}px) rotate(${isHovered ? 0 : service.angle}deg) scale(${isHovered ? 1.07 : 1})` : `translateX(-50%) translateX(0px) translateY(20px) rotate(0deg) scale(1)`,
        opacity: open ? 1 : 0,
        transition: `transform 0.52s cubic-bezier(.2,.8,.2,1) ${index * 45}ms, opacity 0.38s ease ${index * 45}ms`,
        zIndex: isHovered ? 30 : 10 + index,
        cursor: open ? "pointer" : "default",
        pointerEvents: open ? "auto" : "none"
      },
      onMouseEnter: () => open && onHover(index),
      onMouseLeave: () => open && onLeave(),
      onClick: () => open && onClick(service),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "rounded-[10px] border bg-paper transition-all duration-300",
          style: {
            width: isHovered ? 196 : 162,
            borderColor: isHovered ? "oklch(0.74 0.13 240 / 0.5)" : "oklch(0.88 0.005 240)",
            boxShadow: isHovered ? "0 18px 44px -8px oklch(0.2 0.02 240 / 0.24), 0 0 0 1px oklch(0.74 0.13 240 / 0.15)" : "0 6px 18px -6px oklch(0.2 0.02 240 / 0.18)",
            padding: isHovered ? "12px 14px 14px" : "10px 12px"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 absolute left-2.5 top-1/2 -translate-y-1/2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-foreground/12" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-1 rounded-full bg-foreground/12" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pl-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px]", style: { color: "var(--folder)" }, children: service.icon }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold tracking-tight text-foreground/85 leading-snug", children: service.label })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "overflow-hidden transition-all duration-300",
                  style: { maxHeight: isHovered ? 70 : 0, opacity: isHovered ? 1 : 0 },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[10.5px] leading-snug tracking-tight text-foreground/55", children: service.tagline }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] tracking-[0.12em] uppercase text-foreground/35", children: "click to read more →" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  );
}
function BigFolder$1({ open }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative select-none cursor-default",
      style: { width: "min(320px, 80vw)", height: "min(260px, 65vh)", perspective: 1100 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full",
            style: {
              width: 260,
              height: 24,
              background: "oklch(0.55 0.12 240 / 0.22)",
              filter: "blur(14px)",
              transition: "opacity 0.4s",
              opacity: open ? 0.5 : 0.8
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-[20px]",
            style: {
              background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-5 left-4 h-7 w-[42%] rounded-t-[12px]",
            style: {
              background: "linear-gradient(90deg, oklch(0.68 0.14 238), oklch(0.64 0.15 242))"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 rounded-[20px] origin-bottom",
            style: {
              background: "linear-gradient(160deg, oklch(0.78 0.12 232) 0%, oklch(0.68 0.15 242) 100%)",
              boxShadow: "inset 0 1.5px 0 oklch(1 0 0 / 0.28), inset 0 -1px 0 oklch(0.5 0.1 240 / 0.15), 0 12px 40px -10px oklch(0.3 0.1 240 / 0.4)",
              transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
              transition: "transform 0.52s cubic-bezier(.2,.8,.2,1)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-x-6 top-4 h-px rounded-full",
                  style: { background: "oklch(1 0 0 / 0.22)" }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "absolute inset-x-10 top-6 h-px rounded-full",
                  style: { background: "oklch(1 0 0 / 0.10)" }
                }
              ),
              !open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-4 right-5 text-[11px] tracking-[0.22em] uppercase text-white/45 font-medium", children: "portfolio" })
            ]
          }
        )
      ]
    }
  );
}
function HeroFolder() {
  const [open, setOpen] = reactExports.useState(false);
  const [hoveredIndex, setHoveredIndex] = reactExports.useState(null);
  const [activeService, setActiveService] = reactExports.useState(null);
  const [isMobile, setIsMobile] = reactExports.useState(false);
  const [mobileModalOpen, setMobileModalOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const m = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    m();
    window.addEventListener("resize", m);
    return () => window.removeEventListener("resize", m);
  }, []);
  reactExports.useEffect(() => {
    const locked = mobileModalOpen || !!activeService;
    const prev = document.body.style.overflow;
    if (locked) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileModalOpen, activeService]);
  const [expandedIndex, setExpandedIndex] = reactExports.useState(null);
  const [modalExpandedIndex, setModalExpandedIndex] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    activeService && /* @__PURE__ */ jsxRuntimeExports.jsx(ServiceModal, { service: activeService, onClose: () => setActiveService(null) }),
    mobileModalOpen && reactDomExports.createPortal(
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 flex items-center justify-center p-2", style: { zIndex: 99999, background: "rgba(0,0,0,0.6)" }, onClick: () => setMobileModalOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full rounded-[12px] border border-border bg-card p-3", style: { width: "100%", maxWidth: 360, margin: "0 8px" }, onClick: (e) => e.stopPropagation(), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-sm", children: "Choose a service" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setMobileModalOpen(false), className: "text-sm text-foreground/60", children: "Close" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { maxHeight: "78vh", overflow: "auto" }, className: "space-y-2", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[10px] border border-border bg-secondary/5 p-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px]", style: { color: "var(--folder)" }, children: s.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: s.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-foreground/60", children: s.tagline })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setModalExpandedIndex(modalExpandedIndex === i ? null : i), className: "text-sm text-foreground/50", children: modalExpandedIndex === i ? "Hide" : "Show" })
          ] }),
          modalExpandedIndex === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[13px] text-foreground/75", children: s.story.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px]", children: p }, idx)) })
        ] }, s.label)) })
      ] }) }),
      document.body
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: DESKTOP_ELEMENTS.map((el) => /* @__PURE__ */ jsxRuntimeExports.jsx(DesktopItem, { el }, el.id)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "absolute left-1/2 -translate-x-1/2 bottom-0",
          style: { width: "90vw", maxWidth: 700 },
          onMouseEnter: () => !isMobile && setOpen(true),
          onMouseLeave: () => {
            if (!isMobile) {
              setOpen(false);
              setHoveredIndex(null);
            }
          },
          onClick: () => {
            if (isMobile) {
              setMobileModalOpen(true);
            } else {
              setOpen((o) => !o);
            }
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block", children: SERVICES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              ServicePaper,
              {
                service: s,
                index: i,
                open,
                hoveredIndex,
                onHover: setHoveredIndex,
                onLeave: () => setHoveredIndex(null),
                onClick: setActiveService
              },
              s.label
            )) }),
            isMobile && /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "md:hidden absolute left-1/2 -translate-x-1/2",
                style: { bottom: "calc(100% + 12px)", width: "100%", zIndex: 20 },
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid grid-cols-2 gap-2", style: { width: "min(360px, calc(100% - 24px))", maxHeight: "56vh", overflow: "auto" }, children: SERVICES.slice(0, 6).map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[10px] p-2 bg-paper border border-border/60 text-left shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[18px]", style: { color: "var(--folder)" }, children: s.icon }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold tracking-tight text-foreground", children: s.label }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => {
                        setExpandedIndex(expandedIndex === i ? null : i);
                      }, className: "text-[11px] text-foreground/50", children: expandedIndex === i ? "close" : "open" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[11px] text-foreground/60", children: s.tagline }),
                    expandedIndex === i && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[12.5px] text-foreground/75", children: s.story.map((p, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12.5px]", children: p }, idx)) })
                  ] })
                ] }) }, s.label)) })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pb-6", style: { paddingTop: 260 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BigFolder$1, { open }) })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "hidden md:block absolute left-1/2 -translate-x-1/2 pointer-events-none",
          style: { bottom: 8, opacity: open ? 0 : 1, transition: "opacity 0.3s" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-[0.2em] uppercase text-foreground/25", children: "hover the folder" })
        }
      )
    ] })
  ] });
}
function AboutScene() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative w-full h-full rounded-[16px] overflow-hidden",
      style: { minHeight: 500 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: "/src/image_reference/profile.png",
            alt: "Shanzster",
            className: "absolute inset-0 w-full h-full object-cover object-top",
            style: { mixBlendMode: "multiply" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-x-0 bottom-0",
            style: {
              height: "45%",
              background: "linear-gradient(to top, oklch(0.97 0.005 240) 0%, oklch(0.97 0.005 240 / 0.85) 40%, transparent 100%)",
              zIndex: 2
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute bottom-0 inset-x-0 px-7 pb-7",
            style: { zIndex: 3 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.28em] text-foreground/40 mb-1", children: "about me" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold tracking-tightest text-foreground leading-tight", children: "Shanzster" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[13px] tracking-tight text-foreground/55", children: "Creative Developer · Social Media Manager" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: [
                { v: "4+", l: "pages managed" },
                { v: "3", l: "brands built" },
                { v: "2+", l: "yrs freelance" }
              ].map(({ v, l }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-1.5 rounded-full border border-border/60 bg-background/80 px-3 py-1",
                  style: { backdropFilter: "blur(8px)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-bold tracking-tightest text-foreground", children: v }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/45", children: l })
                  ]
                },
                l
              )) })
            ]
          }
        )
      ]
    }
  );
}
const POSITIONS = [
  // Left column — top to bottom
  { x: -380, y: -200, rot: -5, side: "left" },
  { x: -380, y: 0, rot: -3, side: "left" },
  { x: -380, y: 200, rot: -7, side: "left" },
  // Right column — top to bottom
  { x: 380, y: -200, rot: 5, side: "right" },
  { x: 380, y: 0, rot: 3, side: "right" },
  { x: 380, y: 200, rot: 7, side: "right" }
];
function WorkPaper({
  item,
  index,
  open,
  hoveredIndex,
  onHover,
  onLeave
}) {
  const navigate = useNavigate();
  const isHovered = hoveredIndex === index;
  const pos = POSITIONS[index];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "absolute cursor-pointer select-none",
      style: {
        top: "50%",
        left: "50%",
        width: 200,
        height: 260,
        marginTop: -130,
        marginLeft: -100,
        transform: open ? `translate(${pos.x}px, ${pos.y + (isHovered ? -14 : 0)}px) rotate(${isHovered ? 0 : pos.rot}deg) scale(${isHovered ? 1.05 : 1})` : `translate(0px, 30px) rotate(0deg) scale(0.8)`,
        opacity: open ? 1 : 0,
        transition: `transform 0.65s cubic-bezier(.2,.8,.2,1) ${index * 60}ms, opacity 0.4s ease ${index * 60}ms`,
        zIndex: isHovered ? 40 : 20 + index
      },
      onMouseEnter: () => open && onHover(index),
      onMouseLeave: () => open && onLeave(),
      onClick: () => open && navigate({ to: "/work/$id", params: { id: item.id } }),
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "w-full h-full rounded-[14px] border overflow-hidden transition-all duration-300",
          style: {
            borderColor: isHovered ? "oklch(0.74 0.13 240 / 0.55)" : "oklch(0.88 0.005 240)",
            boxShadow: isHovered ? "0 28px 60px -10px oklch(0.2 0.02 240 / 0.35), 0 0 0 1.5px oklch(0.74 0.13 240 / 0.2)" : "0 8px 28px -6px oklch(0.2 0.02 240 / 0.22)"
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "w-full relative flex items-center justify-center",
                style: { height: 165, background: item.color },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/10 text-[40px]", children: "✦" }),
                  isHovered && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2.5 right-2.5 rounded-full bg-black/25 px-2 py-0.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-white/80 font-medium", children: "open →" }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-paper px-4 py-3 border-t border-border/40", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.14em] text-foreground/35", children: item.tag }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13px] font-semibold tracking-tight text-foreground/85 leading-snug", children: item.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1.5 text-[10.5px] tracking-tight text-foreground/45 leading-snug line-clamp-2", children: [
                item.overview.slice(0, 72),
                "…"
              ] })
            ] })
          ]
        }
      )
    }
  );
}
function BigFolder({ open }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "relative select-none shrink-0",
      style: { width: 480, height: 390, perspective: 1400 },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-full",
            style: {
              width: 380,
              height: 32,
              background: "oklch(0.55 0.12 240 / 0.22)",
              filter: "blur(20px)",
              opacity: open ? 0.3 : 0.65,
              transition: "opacity 0.4s"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 rounded-[28px]",
            style: { background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -top-7 left-6 h-10 w-[38%] rounded-t-[16px]",
            style: { background: "linear-gradient(90deg, oklch(0.68 0.14 238), oklch(0.64 0.15 242))" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "absolute inset-0 rounded-[28px] origin-bottom",
            style: {
              background: "linear-gradient(160deg, oklch(0.82 0.10 230) 0%, oklch(0.72 0.13 242) 100%)",
              boxShadow: "inset 0 2.5px 0 oklch(1 0 0 / 0.30), inset 0 -1px 0 oklch(0.5 0.1 240 / 0.12), 0 20px 60px -14px oklch(0.3 0.1 240 / 0.5)",
              transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
              transition: "transform 0.55s cubic-bezier(.2,.8,.2,1)"
            },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-10 top-6 h-px rounded-full", style: { background: "oklch(1 0 0 / 0.24)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-16 top-9 h-px rounded-full", style: { background: "oklch(1 0 0 / 0.12)" } }),
              !open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-6 right-8 text-[13px] tracking-[0.24em] uppercase text-white/35 font-medium", children: "selected work" })
            ]
          }
        )
      ]
    }
  );
}
function WorkFolderScene({ items }) {
  const [open, setOpen] = reactExports.useState(false);
  const [hoveredIndex, setHoveredIndex] = reactExports.useState(null);
  const visible = items.slice(0, 6);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative flex items-center justify-center w-full",
        style: { height: 720 },
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => {
          setOpen(false);
          setHoveredIndex(null);
        },
        children: [
          visible.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            WorkPaper,
            {
              item,
              index: i,
              open,
              hoveredIndex,
              onHover: setHoveredIndex,
              onLeave: () => setHoveredIndex(null)
            },
            item.id
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { position: "relative", zIndex: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(BigFolder, { open }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] uppercase tracking-[0.2em] text-foreground/25", children: "hover to open · click a card to view" })
  ] });
}
const WORK_ITEMS = [
  {
    id: "steal-and-style",
    title: "Steal & Style",
    client: "Steal & Style",
    tag: "Instagram · Fashion",
    category: "Social Media Management",
    color: "oklch(0.16 0.02 240)",
    platform: "Instagram",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop", "CapCut", "Notion"],
    overview: "Steal & Style is a Filipino fashion brand built around affordable, trendy pieces with a strong local identity. They needed a social media presence that felt alive — not just product posts, but a personality that people actually wanted to follow.",
    challenge: "The brand had no established voice, no content system, and no visual consistency. Posts were sporadic and didn't reflect the brand's playful, internet-native personality. Engagement was low and the page felt like a catalog rather than a community.",
    approach: "I started by defining who the brand was talking to — young Filipino fashion consumers who live on the internet. From there I built a voice that mixed local humor, trending formats, and genuine fashion commentary. The goal was to make the page feel like a person, not a store.",
    workflow: [
      "Brand audit — reviewed existing content and identified what wasn't working",
      "Audience research — mapped the target demographic and what content they engage with",
      "Voice & tone guide — documented the brand personality, language style, and content rules",
      "Content pillars — defined 4 recurring content types to keep the feed varied and strategic",
      "Monthly calendar — planned posts around product drops, trends, and key dates",
      "Template system — built reusable Canva templates for posts and stories",
      "Execution — wrote captions, designed graphics, scheduled and published",
      "Review — monthly performance check and strategy adjustment"
    ],
    what: [
      "Brand voice and tone guidelines",
      "Monthly content calendar",
      "Caption writing with Filipino internet humor",
      "Post and story template design in Canva",
      "Community management and DM responses",
      "Reels editing for product showcases"
    ],
    result: "Consistent brand identity from day one. The page started feeling like a real brand — posts had personality, the feed had visual consistency, and engagement grew organically through content people actually wanted to share.",
    graphics: [
      {
        title: "Brand Post Template",
        description: "Reusable Canva template for product showcase posts. Designed to keep the feed visually consistent while being fast to update each week.",
        tools: ["Canva"],
        process: [
          "Studied the brand colors and existing content to understand the visual direction",
          "Sketched a layout that puts the product front and center with minimal distraction",
          "Built the template in Canva with locked brand elements and editable zones",
          "Tested with 3 different product photos to make sure it worked across styles",
          "Delivered as a shared Canva template the client can update themselves"
        ]
      },
      {
        title: "Story Template",
        description: "Instagram story template for new arrivals and promotions. Bold typography, minimal layout — designed to stop the scroll.",
        tools: ["Canva"],
        process: [
          "Analyzed top-performing fashion stories to understand what formats get taps",
          "Chose a bold, full-bleed layout that works with both product photos and flat lays",
          "Built 3 variations: new arrival, sale, and poll — all matching the brand palette",
          "Added animated text elements for the versions that needed more energy"
        ]
      },
      {
        title: "Promo Graphic",
        description: "Sale announcement graphic. Used for flash sales and collection drops — high contrast, urgency-driven design.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Briefed on the sale details — discount amount, duration, and key products",
          "Designed with high contrast and large type to communicate the offer instantly",
          "Used Photoshop to cut out product images for a cleaner, more premium look",
          "Created feed post and story versions for consistent cross-format promotion"
        ]
      },
      {
        title: "Highlight Cover Set",
        description: "Custom highlight cover icons matching the brand palette. Small detail that makes the profile look polished and intentional.",
        tools: ["Canva", "Adobe Illustrator"],
        process: [
          "Audited the profile and identified which highlight categories were needed",
          "Designed minimal icon set in Illustrator — clean lines, consistent stroke weight",
          "Applied brand colors as backgrounds to tie the covers to the overall aesthetic",
          "Exported at correct Instagram dimensions and uploaded to the profile"
        ]
      },
      {
        title: "Caption Card",
        description: "Quote-style caption card for engagement posts. Encourages saves and shares by making the caption the visual.",
        tools: ["Canva"],
        process: [
          "Identified high-engagement caption formats from competitor research",
          "Wrote the copy first, then designed around it — text is the hero here",
          "Kept the layout clean so the words are readable even at thumbnail size",
          "A/B tested two versions to see which drove more saves"
        ]
      },
      {
        title: "Collection Launch",
        description: "Launch graphic for a new collection drop. Built hype before the release with a teaser-style layout.",
        tools: ["Canva", "Photoshop"],
        process: [
          "Planned a 3-post teaser sequence leading up to the launch date",
          "Used Photoshop to create a blurred/cropped product reveal for the teaser",
          "Designed the full reveal graphic with the collection name and key pieces",
          "Coordinated the posting schedule to maximize anticipation"
        ]
      }
    ]
  },
  {
    id: "masinloc-tourism",
    title: "Masinloc Tourism Office",
    client: "Masinloc Tourism Office",
    tag: "Facebook · Government",
    category: "Social Media Management",
    color: "oklch(0.58 0.14 200)",
    platform: "Facebook",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop", "CapCut"],
    overview: "The Masinloc Tourism Office is the official government body promoting tourism in Masinloc, Zambales. The municipality has beautiful beaches, heritage sites, and local events — but the social media presence wasn't doing them justice.",
    challenge: "The page was inconsistent and underutilized. Posts were infrequent, visuals were low quality, and the content didn't inspire people to actually visit. A government tourism page needs to feel both official and inviting — a hard balance to strike.",
    approach: "I focused on making the content feel aspirational — the kind of posts that make someone say 'I want to go there.' That meant better visuals, storytelling-driven captions, and a consistent posting rhythm that kept Masinloc top of mind.",
    workflow: [
      "Content audit — reviewed existing posts and identified gaps",
      "Destination mapping — catalogued key spots, events, and stories worth featuring",
      "Visual direction — established a clean, bright aesthetic that matched the destination",
      "Content calendar — planned posts around local events, seasons, and tourism peaks",
      "Coordination — worked with the tourism office on event coverage and announcements",
      "Execution — wrote copy, designed graphics, published and managed the page"
    ],
    what: [
      "Regular tourism content (destinations, events, culture)",
      "Visual direction for photography",
      "Caption writing that highlights Masinloc's appeal",
      "Event coverage coordination",
      "Consistent posting schedule",
      "Promotional graphics for local events"
    ],
    result: "Increased reach on tourism posts and a stronger, more professional local presence. The page started functioning as an actual tourism resource rather than an afterthought."
  },
  {
    id: "junz-restaurant",
    title: "Junz Restaurant",
    client: "Junz Restaurant",
    tag: "Facebook · Food & Beverage",
    category: "Social Media Management",
    color: "oklch(0.70 0.14 55)",
    platform: "Facebook",
    duration: "Ongoing",
    tools: ["Canva", "Photoshop"],
    overview: "Junz Restaurant is a local food business that needed a social media presence to drive foot traffic and build a loyal customer base. Food businesses live and die by their online presence — a good-looking page can fill tables.",
    challenge: "The restaurant had no consistent social media strategy. Posts were random, visuals were inconsistent, and there was no system for promoting specials or new menu items. The page wasn't working as a marketing tool.",
    approach: "Food content is about making people hungry. I focused on high-quality visuals, appetite-driven copy, and a posting rhythm that kept the restaurant top of mind — especially around meal times and weekends.",
    workflow: [
      "Menu review — understood the offerings and identified hero items worth featuring",
      "Visual direction — established a warm, appetizing aesthetic for food photography",
      "Content calendar — planned posts around meal times, specials, and local events",
      "Template design — built Canva templates for menu features and promotions",
      "Caption writing — wrote copy that made the food sound as good as it looks",
      "Community management — responded to comments and messages"
    ],
    what: [
      "Food photography direction",
      "Promotional content for menu items and specials",
      "Facebook page management",
      "Consistent weekly posting schedule",
      "Promotional graphics design",
      "Community engagement"
    ],
    result: "Regular weekly content and increased customer engagement. The page became a functional marketing tool that drove awareness and kept existing customers coming back."
  },
  {
    id: "csa-print",
    title: "CSA Print and Design",
    client: "CSA Print and Design",
    tag: "Facebook · Print & Design",
    category: "Brand Identity + Social",
    color: "oklch(0.65 0.12 290)",
    platform: "Facebook",
    duration: "Project-based",
    tools: ["Photoshop", "Illustrator", "Canva"],
    overview: "CSA Print and Design is a local print shop offering flyers, tarpaulins, business cards, and custom design work. They needed both a stronger brand presence and better social media content to attract more clients.",
    challenge: "The shop's social media didn't reflect the quality of their work. Product posts were plain, there was no visual identity, and the page wasn't generating inquiries. A print shop should look like it knows design — theirs didn't.",
    approach: "I treated this as both a branding and social media project. First, establish a clean visual identity that signals quality. Then build content that showcases their work in a way that makes potential clients think 'I want that for my business.'",
    workflow: [
      "Brand assessment — reviewed existing materials and identified inconsistencies",
      "Visual identity — established consistent colors, fonts, and layout style",
      "Template creation — built post templates that showcased products professionally",
      "Content planning — mapped out product features, promotions, and client showcases",
      "Print material design — created flyers and promotional materials for the shop itself",
      "Page management — published content and managed inquiries"
    ],
    what: [
      "Flyers, posters, and promotional material design",
      "Facebook page content and promotions",
      "Product showcase posts",
      "Print-ready file preparation in Photoshop",
      "Consistent brand visuals across all materials"
    ],
    result: "Regular client inquiries and a professional online presence that matched the quality of their actual work."
  },
  {
    id: "brand-identity",
    title: "Brand Identity Work",
    client: "Various clients",
    tag: "Illustrator · Branding",
    category: "Brand Identity",
    color: "oklch(0.45 0.18 270)",
    platform: "Print + Digital",
    duration: "Project-based",
    tools: ["Adobe Illustrator", "Photoshop", "Canva"],
    overview: "Brand identity projects for local businesses that needed to look professional — logos, color systems, typography, and the guidelines to keep everything consistent.",
    challenge: "Most small local businesses operate without any real brand identity. They use inconsistent fonts, random colors, and logos that don't scale. This makes them look amateur even when their product or service is genuinely good.",
    approach: "Every brand identity starts with understanding the business — who they serve, what they stand for, and how they want to be perceived. From there I build a visual system that communicates that clearly and consistently.",
    workflow: [
      "Discovery — understand the business, audience, and positioning",
      "Mood board — establish visual direction and references",
      "Logo concepts — sketch and develop primary logo options",
      "Refinement — iterate based on feedback",
      "System build — extend the logo into a full color, type, and usage system",
      "Guidelines — document everything so the client can stay consistent",
      "Delivery — export all files in required formats"
    ],
    what: [
      "Logo design (primary + variations)",
      "Color palette and typography selection",
      "Brand guidelines document",
      "Social media template kits in Canva",
      "Print-ready file preparation"
    ],
    result: "Full brand systems delivered to multiple local clients — businesses that went from looking amateur to looking like they mean business."
  },
  {
    id: "video-content",
    title: "Video & Reels Editing",
    client: "Various clients",
    tag: "CapCut · Short-form Video",
    category: "Video Editing",
    color: "oklch(0.20 0.02 240)",
    platform: "Instagram · Facebook",
    duration: "Ongoing",
    tools: ["CapCut", "Photoshop"],
    overview: "Short-form video editing for clients across fashion, food, and tourism. Reels, promotional videos, and vlog content edited to perform on Instagram and Facebook.",
    challenge: "Raw footage is just footage. The difference between a video that gets 200 views and one that gets 20,000 is almost entirely in the edit — the pacing, the music, the captions, the hook in the first 3 seconds.",
    approach: "I edit with the same instinct I use for design — every cut is intentional. I study what's performing in the niche, identify the format that fits the content, and build the edit around keeping people watching.",
    workflow: [
      "Brief — understand the goal of the video (awareness, promotion, storytelling)",
      "Footage review — assess what's available and identify the best moments",
      "Structure — plan the narrative arc and pacing",
      "Rough cut — assemble the core edit",
      "Polish — add captions, music, effects, and color grade",
      "Export — deliver in platform-optimized format"
    ],
    what: [
      "Reels editing with freeze-frame and motion effects",
      "Animated caption overlays",
      "Sound design and music sync",
      "Collection launch videos for Steal & Style",
      "Vlog-style content with color grading",
      "Promotional videos for events and products"
    ],
    result: "Higher reach and watch time compared to static posts. Video content consistently outperformed photo posts for every client it was used for."
  },
  {
    id: "meta-ads",
    title: "Meta Ads Campaigns",
    client: "Various clients",
    tag: "Meta Ads · Paid Social",
    category: "Paid Advertising",
    color: "oklch(0.42 0.20 255)",
    platform: "Facebook · Instagram",
    duration: "Campaign-based",
    tools: ["Meta Ads Manager", "Canva", "Photoshop"],
    overview: "Facebook and Instagram ad campaigns for local businesses — from initial setup to creative design to performance reporting.",
    challenge: "Most small businesses either don't run ads at all, or they boost posts randomly without a strategy. Neither works. Effective paid social requires the right audience, the right creative, and the right objective — all aligned.",
    approach: "I treat every campaign as a system. Define the goal first, then work backwards — who needs to see this, what do they need to feel, what action do we want them to take. The creative and targeting follow from that.",
    workflow: [
      "Goal setting — define what success looks like (reach, clicks, conversions)",
      "Audience research — identify targeting parameters and build custom audiences",
      "Creative brief — plan the ad formats and messaging",
      "Creative production — design ad visuals in Canva and Photoshop",
      "Campaign setup — configure in Meta Ads Manager",
      "Launch and monitor — watch performance in the first 48 hours",
      "Optimize — adjust targeting, budget, or creative based on data",
      "Report — deliver clear performance summary with recommendations"
    ],
    what: [
      "Campaign setup and audience targeting",
      "Custom and lookalike audience building",
      "Ad creative design",
      "Budget allocation and bid strategy",
      "Performance reporting with Meta Insights",
      "A/B testing on creatives and audiences"
    ],
    result: "Measurable reach growth and lower cost per result across campaigns. Paid spend that actually worked."
  },
  {
    id: "content-strategy",
    title: "Content Strategy",
    client: "All clients",
    tag: "Strategy · Planning",
    category: "Content Strategy",
    color: "oklch(0.55 0.18 245)",
    platform: "All platforms",
    duration: "Ongoing",
    tools: ["Notion", "SocialBlade", "Meta Insights"],
    overview: "The content strategy work that underpins everything else — editorial calendars, brand voice documentation, content pillars, and the planning systems that make consistent content possible.",
    challenge: "Most businesses post reactively — when they remember, when something happens, when they feel like it. This creates an inconsistent presence that audiences don't trust and algorithms don't reward.",
    approach: "Strategy before content, always. I start by understanding the business goal, then map the audience, then define what content serves both. The calendar and templates come last — they're just the execution layer on top of a clear strategy.",
    workflow: [
      "Audit — review existing content and identify what's working and what isn't",
      "Goal alignment — understand what the business actually needs from social media",
      "Audience mapping — define who we're talking to and what they care about",
      "Content pillars — establish 3–5 recurring content types that serve the strategy",
      "Voice guide — document tone, language style, and content rules",
      "Calendar build — plan 30–90 days of content in Notion",
      "Handoff — deliver the system so the client can maintain it"
    ],
    what: [
      "Monthly editorial calendar planning",
      "Brand voice and tone documentation",
      "Trend research using SocialBlade",
      "Content pillar definition per client",
      "Performance review and strategy adjustment",
      "Content brief templates"
    ],
    result: "Every client I've built a strategy for posts more consistently, with more intention, and sees better results than when they were posting randomly."
  }
];
function useScrollReveal(threshold = 0.12) {
  const ref = reactExports.useRef(null);
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}
function Reveal({
  children,
  delay = 0,
  className = ""
}) {
  const { ref, visible } = useScrollReveal();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className,
      style: {
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(.2,.8,.2,1) ${delay}ms`
      },
      children
    }
  );
}
const Route$1 = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Shanzster — Social Media Manager & Creative Developer" },
      {
        name: "description",
        content: "Shanzster — Social media manager, brand identity designer, and creative developer from Subic Bay, Philippines. I grow pages, build brands, and make content stick."
      },
      { property: "og:title", content: "Shanzster — Social Media Manager & Creative Developer" },
      { property: "og:description", content: "Social media manager, brand identity designer, and creative developer from Subic Bay, Philippines." },
      { property: "og:type", content: "website" }
    ]
  })
});
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1400px] px-6 pb-28 pt-6 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Toolkit, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Work, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Process, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(SocialFeed, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 50, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
    ] })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: "relative overflow-hidden",
      style: { height: "calc(100dvh - 6rem)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 50% at 50% 100%, oklch(0.74 0.13 240 / 0.13) 0%, transparent 70%), radial-gradient(ellipse 45% 35% at 88% 12%, oklch(0.78 0.10 260 / 0.07) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center px-8 pt-6 pb-2 text-center sm:px-14", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 mb-3 hero-drop hero-drop-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: "/src/image_reference/logos/Shanzster_Logo.png",
                  alt: "Shanzster Logo",
                  className: "h-8 w-auto object-contain"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "span",
                  {
                    className: "h-1.5 w-1.5 rounded-full",
                    style: { background: "var(--traffic-green)" }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] uppercase tracking-[0.26em] text-foreground/40", children: "Social Media Manager · Content Creator · Available 2026" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-bold tracking-tightest text-foreground leading-[0.9] hero-drop hero-drop-2",
                style: { fontSize: "clamp(38px, 6vw, 88px)" },
                children: "Your One Man"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "h1",
              {
                className: "font-bold tracking-tightest leading-[0.9] hero-drop hero-drop-3",
                style: {
                  fontSize: "clamp(38px, 6vw, 88px)",
                  color: "oklch(0.18 0.01 240 / 0.25)"
                },
                children: "Creative."
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-[clamp(13px,1.3vw,16px)] tracking-tight text-foreground/45 max-w-sm hero-drop hero-drop-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectingRoles, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "blink text-foreground/40", children: "|" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 min-h-0 hero-drop hero-drop-5", style: { minHeight: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroFolder, {}) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 py-4 hero-drop hero-drop-6", style: { flexShrink: 0 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#work",
                className: "rounded-full bg-foreground px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] tracking-tight text-background transition hover:opacity-85",
                children: "See the work →"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "#contact",
                className: "rounded-full border border-border bg-card px-4 py-1.5 sm:px-5 sm:py-2 text-[11px] sm:text-[12px] tracking-tight text-foreground transition hover:bg-secondary",
                children: "Hire me"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "grid grid-cols-2 sm:grid-cols-4 divide-x sm:divide-x divide-border border-t border-border/40 hero-drop hero-drop-7",
              style: { flexShrink: 0 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "6+", label: "brands managed" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "3+", label: "brands built" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "2+", label: "yrs freelancing" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Stat, { value: "↑", label: "organic growth always" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "overflow-hidden border-t border-border/30 bg-secondary/30",
              style: { flexShrink: 0 },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "ticker flex gap-10 whitespace-nowrap py-2.5 text-[11px] tracking-tight text-foreground/35", children: [
                "Social Media Management",
                "Brand Identity",
                "Content Strategy",
                "Meta Ads",
                "Video Editing",
                "Canva Templates",
                "Reels & Short-form",
                "Community Management",
                "Campaign Planning",
                "Visual Storytelling"
              ].flatMap((t, i, a) => [...a, ...a]).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-10", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/20", children: "✦" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
              ] }, i)) })
            }
          )
        ] })
      ]
    }
  );
}
function Stat({ value, label }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 py-2 sm:px-5 sm:py-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[22px] sm:text-[28px] leading-none tracking-tightest font-bold", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[9px] sm:text-[10px] uppercase tracking-[0.12em] text-foreground/45", children: label })
  ] });
}
const TOOLS = [
  // ── Creative ──
  {
    name: "Photoshop",
    category: "Photo editing",
    group: "Creative",
    how: "I use Photoshop for retouching campaign photos, building social media templates, and creating high-quality thumbnails and promotional visuals that stop the scroll.",
    usedFor: ["Campaign visuals", "Photo retouching", "Thumbnail design", "Ad creatives"],
    lineX: -70,
    lineY: 38,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/PS.png", alt: "Photoshop", className: "w-full h-full object-cover rounded-[16px]" })
  },
  {
    name: "Illustrator",
    category: "Vector design",
    group: "Creative",
    how: "Illustrator is my go-to for building brand identities from scratch — logos, icon sets, brand guidelines, and print-ready assets that scale perfectly at any size.",
    usedFor: ["Logo design", "Brand identity", "Icon sets", "Print assets"],
    lineX: 70,
    lineY: -38,
    labelAlign: "left",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/AI.png", alt: "Illustrator", className: "w-full h-full object-cover rounded-[16px]" })
  },
  {
    name: "Canva",
    category: "Brand visuals",
    group: "Creative",
    how: "Canva is where I build fast, on-brand content at scale — social posts, stories, decks, and client-ready presentations. I use it to maintain visual consistency across all platforms.",
    usedFor: ["Social posts", "Stories", "Pitch decks", "Brand templates"],
    lineX: 70,
    lineY: 44,
    labelAlign: "left",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/canva.png", alt: "Canva", className: "w-full h-full object-cover rounded-[16px]" })
  },
  {
    name: "CapCut",
    category: "Video editing",
    group: "Creative",
    how: "CapCut is my primary video editor for Reels and short-form content. I use it for freeze-frame edits, motion captions, sound design, and cinematic cuts that drive replays.",
    usedFor: ["Reels editing", "Motion captions", "Vlogs", "Promo videos"],
    lineX: -70,
    lineY: 44,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/capcut.png", alt: "CapCut", className: "w-full h-full object-cover rounded-[16px]" })
  },
  // ── Marketing ──
  {
    name: "Meta Ads",
    category: "Paid social",
    group: "Marketing",
    how: "I use Meta Ads Manager to plan, launch, and optimize paid campaigns on Facebook and Instagram — from audience targeting and creative testing to budget management and performance reporting.",
    usedFor: ["Campaign setup", "Audience targeting", "A/B testing", "Performance reports"],
    lineX: -70,
    lineY: -38,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/src/image_reference/logos/meta.png", alt: "Meta Ads", className: "w-full h-full object-cover rounded-[16px]" })
  },
  {
    name: "SocialBlade",
    category: "Analytics & trends",
    group: "Marketing",
    how: "SocialBlade helps me track competitor growth, benchmark page performance, and spot trends before they peak. I use it to inform content strategy and identify what's working in a niche.",
    usedFor: ["Competitor tracking", "Growth benchmarking", "Trend spotting", "Niche research"],
    lineX: 70,
    lineY: -38,
    labelAlign: "left",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", rx: "16", fill: "#1a1a2e" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "58", textAnchor: "middle", fontSize: "13", fontWeight: "800", fill: "#e94560", fontFamily: "Arial, sans-serif", children: "SB" })
    ] })
  },
  // ── Productivity ──
  {
    name: "Notion",
    category: "Planning & docs",
    group: "Productivity",
    how: "Notion is my content command center. I use it to build editorial calendars, track campaign briefs, manage client deliverables, and document brand guidelines — everything in one place.",
    usedFor: ["Content calendars", "Campaign briefs", "Client docs", "Brand guidelines"],
    lineX: -70,
    lineY: 44,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", rx: "16", fill: "#fff", stroke: "#e5e5e5", strokeWidth: "2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "66", textAnchor: "middle", fontSize: "48", fontWeight: "900", fill: "#000", fontFamily: "Arial, sans-serif", children: "N" })
    ] })
  },
  // ── AI ──
  {
    name: "ChatGPT",
    category: "AI writing",
    group: "AI",
    how: "I use ChatGPT to accelerate content creation — drafting captions, brainstorming campaign angles, writing ad copy variations, and refining brand voice. It's a creative partner, not a replacement.",
    usedFor: ["Caption writing", "Ad copy", "Campaign ideation", "Brand voice"],
    lineX: 70,
    lineY: 44,
    labelAlign: "left",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", rx: "16", fill: "#10a37f" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "62", textAnchor: "middle", fontSize: "13", fontWeight: "700", fill: "#fff", fontFamily: "Arial, sans-serif", children: "ChatGPT" })
    ] })
  },
  {
    name: "Adobe Firefly",
    category: "AI image gen",
    group: "AI",
    how: "Adobe Firefly lets me generate and edit visuals directly inside Photoshop and Illustrator — filling backgrounds, generating concept art, and creating on-brand imagery faster than traditional methods.",
    usedFor: ["Generative fill", "Concept visuals", "Background gen", "Creative exploration"],
    lineX: -70,
    lineY: -38,
    labelAlign: "right",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 100", className: "w-full h-full", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { width: "100", height: "100", rx: "16", fill: "#1c0a3a" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "50", y: "62", textAnchor: "middle", fontSize: "13", fontWeight: "700", fill: "#e040fb", fontFamily: "Arial, sans-serif", children: "Firefly" })
    ] })
  }
];
function ToolsShowcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[16px] border border-border bg-card overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative px-10 pt-12 pb-10 border-b border-border", children: [
      [
        { top: "14%", left: "3%" },
        { top: "10%", left: "20%" },
        { top: "12%", right: "22%" },
        { top: "14%", right: "4%" }
      ].map((pos, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute select-none pointer-events-none text-[11px]", style: { ...pos, color: "oklch(0.18 0.01 240 / 0.15)" }, children: "★" }, i)),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center font-bold tracking-tightest leading-none", style: { fontSize: "clamp(34px, 5.5vw, 72px)", color: "oklch(0.38 0.22 255)" }, children: "[ my toolkit ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex items-center justify-center gap-5 flex-wrap", children: TOOLS.map((tool) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-1.5 group", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-[16px] overflow-hidden shadow-[0_4px_14px_-4px_oklch(0.2_0.02_240/0.18)] transition-transform duration-200 group-hover:-translate-y-1",
            style: { width: 52, height: 52 },
            children: tool.icon
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] tracking-tight text-foreground/40", children: tool.name })
      ] }, tool.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-border", children: TOOLS.map((tool, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex items-start gap-4 px-7 py-6 border-b border-border",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "rounded-[12px] overflow-hidden shrink-0 shadow-[0_3px_10px_-3px_oklch(0.2_0.02_240/0.18)]",
              style: { width: 44, height: 44 },
              children: tool.icon
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: tool.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2 py-0.5 text-[9px] tracking-tight text-foreground/40", children: tool.category })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[12px] leading-relaxed tracking-tight text-foreground/55", children: tool.how })
          ] })
        ]
      },
      tool.name
    )) })
  ] });
}
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "about", className: "mt-20", style: { height: "calc(100dvh - 5rem)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "01", title: "About" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2", style: { height: "calc(100% - 3rem)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col rounded-[16px] border border-border bg-card overflow-hidden h-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 pt-8 pb-6 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-3", children: "01 — who i am" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "p",
            {
              className: "font-bold tracking-tightest text-foreground leading-[0.92]",
              style: { fontSize: "clamp(26px, 2.6vw, 40px)" },
              children: [
                "I grow pages.",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.18 0.01 240 / 0.28)" }, children: "Build brands." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "oklch(0.18 0.01 240 / 0.28)" }, children: "Make content stick." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/55 max-w-sm", children: "Social media manager & creative developer from Subic Bay, Philippines. I've grown pages from zero, launched brand identities, and run campaigns without a budget — just strategy and consistency." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 divide-x divide-border border-b border-border", children: [
          { v: "6+", l: "brands managed" },
          { v: "2+", l: "yrs freelancing" },
          { v: "3+", l: "brands built" }
        ].map(({ v, l }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[26px] font-bold tracking-tightest leading-none text-foreground", children: v }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40", children: l })
        ] }, l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 border-b border-border", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-4", children: "02 — clients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-2", children: [
            { name: "Steal & Style", sub: "Fashion brand · Instagram" },
            { name: "Masinloc Tourism Office", sub: "Gov't page · Facebook" },
            { name: "Junz Restaurant", sub: "Local business · Facebook" },
            { name: "CSA Print and Design", sub: "Print shop · Facebook" }
          ].map(({ name, sub }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[8px] border border-border bg-secondary/40 px-3 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-medium tracking-tight text-foreground/80", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] tracking-tight text-foreground/40 mt-0.5", children: sub })
          ] }, name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-5 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-4", children: "03 — tools & skills" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
            { cat: "Design", items: ["Adobe Illustrator", "Photoshop", "Canva"] },
            { cat: "Social & Ads", items: ["Meta Ads Manager", "Instagram", "Facebook", "Content Strategy"] },
            { cat: "Video", items: ["CapCut", "Reels", "Motion captions"] }
          ].map(({ cat, items }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-20 shrink-0 text-[10px] uppercase tracking-[0.12em] text-foreground/35 pt-0.5", children: cat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] tracking-tight text-foreground/65", children: item }, item)) })
          ] }, cat)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AboutScene, {}) })
    ] })
  ] });
}
function Toolkit() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToolsShowcase, {}) });
}
function Work() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "work", className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "02", title: "Selected work" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-between px-1 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: "var(--traffic-green)" } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "Available for new projects" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-[0.18em] uppercase text-foreground/30", children: "Shanzster · 2024–2025" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-[200px_1fr_200px] gap-8 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-3", children: "currently" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
            { dot: "var(--traffic-green)", label: "Social media strategy" },
            { dot: "var(--traffic-yellow)", label: "Brand identity work" },
            { dot: "oklch(0.74 0.13 240)", label: "Video content" }
          ].map(({ dot, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full shrink-0", style: { background: dot } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] tracking-tight text-foreground/65", children: label })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "by the numbers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [
            { v: "6+", l: "brands managed" },
            { v: "3+", l: "brands built" },
            { v: "2+", l: "yrs freelancing" },
            { v: "3", l: "platforms" }
          ].map(({ v, l }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[24px] font-bold tracking-tightest leading-none text-foreground", children: v }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[10px] uppercase tracking-[0.12em] text-foreground/35", children: l })
          ] }, l)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-3", children: "services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-1.5", children: ["Social Media Mgmt", "Brand Identity", "Content Strategy", "Video Editing", "Meta Ads", "Copywriting"].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-secondary/50 px-2.5 py-1 text-[10px] tracking-tight text-foreground/55 w-fit", children: s }, s)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", style: { overflow: "visible" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/30 mb-6", children: "hover to open · click to view" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflow: "visible", width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(WorkFolderScene, { items: WORK_ITEMS }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "clients" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
            { name: "Steal & Style", tag: "Fashion · IG" },
            { name: "Masinloc Tourism", tag: "Gov't · FB" },
            { name: "Junz Restaurant", tag: "F&B · FB" },
            { name: "CSA Print", tag: "Print · FB" }
          ].map(({ name, tag }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-7 w-7 rounded-[6px] shrink-0 border border-border bg-secondary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-bold text-foreground/40", children: name[0] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium tracking-tight text-foreground/75 leading-tight", children: name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-foreground/35", children: tag })
            ] })
          ] }, name)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "recent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [
            { label: "Steal & Style rebrand", time: "2024" },
            { label: "Masinloc tourism campaign", time: "2024" },
            { label: "Junz promo content", time: "2024" },
            { label: "CSA print materials", time: "2023" }
          ].map(({ label, time }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/60 leading-snug", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] tracking-tight text-foreground/30 shrink-0", children: time })
          ] }, label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/45 leading-relaxed mb-4", children: "Want something like this for your brand?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "#contact",
              className: "rounded-full bg-foreground px-4 py-2 text-[11px] tracking-tight text-background text-center block transition hover:opacity-85",
              children: "Let's work together →"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function Services() {
  const services = [
    {
      k: "01",
      title: "Social Media Management",
      file: "social_media.app",
      tagline: "Your pages, handled end-to-end.",
      description: "I take full ownership of your social media presence — strategy, content, posting, and community management. You run your business, I keep your pages alive and growing.",
      includes: ["Monthly content calendar", "Caption writing & copywriting", "Post & story design", "Scheduling & publishing", "Community management", "Monthly performance review"],
      tools: ["Instagram", "Facebook", "Canva", "Notion"],
      bestFor: "Businesses that need a consistent presence without hiring in-house."
    },
    {
      k: "02",
      title: "Brand Identity Design",
      file: "brand_identity.ai",
      tagline: "A visual identity that looks like you.",
      description: "I design brand identities from scratch — logos, color systems, typography, and usage guidelines. Visual systems that hold up everywhere.",
      includes: ["Logo design (primary + variations)", "Color palette & typography", "Brand guidelines document", "Social media template kit", "Print-ready file delivery", "2 rounds of revisions"],
      tools: ["Illustrator", "Photoshop", "Canva"],
      bestFor: "New businesses, rebrands, or anyone who needs to look professional fast."
    },
    {
      k: "03",
      title: "Content Strategy",
      file: "content_strategy.md",
      tagline: "A plan that makes every post intentional.",
      description: "I audit your presence, define content pillars, map your audience, and build a system that makes content creation repeatable and consistent.",
      includes: ["Social media audit", "Audience & competitor research", "Content pillar definition", "Brand voice & tone guide", "3-month editorial calendar", "Hashtag & posting strategy"],
      tools: ["Notion", "SocialBlade", "Meta Insights"],
      bestFor: "Brands that post randomly and want a clear, structured direction."
    },
    {
      k: "04",
      title: "Video Editing & Reels",
      file: "reels_edit.mp4",
      tagline: "Edits that earn replays.",
      description: "I edit short-form video for Instagram Reels and Facebook. Freeze frames, motion captions, sound design, and pacing that keeps people watching.",
      includes: ["Reels editing (up to 60 sec)", "Motion caption overlays", "Sound design & music sync", "Color grading", "Thumbnail design", "Platform-optimized export"],
      tools: ["CapCut", "Photoshop"],
      bestFor: "Businesses with footage that needs turning into scroll-stopping content."
    },
    {
      k: "05",
      title: "Meta Ads Management",
      file: "meta_ads.json",
      tagline: "Paid campaigns that reach the right people.",
      description: "I set up, run, and optimize Facebook and Instagram ad campaigns. Audience targeting, creative design, and performance reporting — full cycle.",
      includes: ["Campaign setup & structure", "Audience targeting & segmentation", "Ad creative design", "A/B testing", "Budget management", "Weekly performance reports"],
      tools: ["Meta Ads Manager", "Canva", "Photoshop"],
      bestFor: "Businesses ready to invest in paid reach and want measurable results."
    },
    {
      k: "06",
      title: "Content Creation Package",
      file: "content_package.zip",
      tagline: "Graphics, captions, and a plan — all in one.",
      description: "A full content creation package — I design the posts, write the captions, and build the calendar so you always have ready-to-post content.",
      includes: ["12–20 designed posts per month", "Caption writing for each post", "Story templates", "Highlight cover design", "Content calendar", "One revision round per batch"],
      tools: ["Canva", "Photoshop", "Notion"],
      bestFor: "Small businesses that need a full month of content without the hassle."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "services", className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "03", title: "Services" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-3 shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: s.file }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-[0.14em] uppercase text-foreground/25", children: s.k })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col flex-1 p-5 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[16px] font-bold tracking-tightest text-foreground leading-tight", children: s.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[11px] tracking-tight text-foreground/40 italic", children: s.tagline })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] leading-relaxed tracking-tight text-foreground/55", children: s.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.18em] text-foreground/30 mb-2", children: "Includes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: s.includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-[11px] tracking-tight text-foreground/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 h-3.5 w-3.5 rounded-full shrink-0 flex items-center justify-center text-[7px] font-bold text-white", style: { background: "oklch(0.62 0.18 255)" }, children: "✓" }),
                item
              ] }, item)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto pt-3 border-t border-border space-y-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: s.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-2 py-0.5 text-[9.5px] tracking-tight text-foreground/45", children: t }, t)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-tight text-foreground/35 leading-snug", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/50", children: "Best for: " }),
                s.bestFor
              ] })
            ] })
          ] })
        ]
      },
      s.k
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 rounded-[14px] border border-border bg-card px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tight text-foreground", children: "Not sure which fits?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[12px] tracking-tight text-foreground/50", children: "Send me a message and we'll figure it out." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "rounded-full bg-foreground px-6 py-2.5 text-[12px] tracking-tight text-background transition hover:opacity-85 shrink-0", children: "Get in touch →" })
    ] })
  ] });
}
function Process() {
  const steps = [
    {
      n: "01",
      file: "discovery.md",
      title: "Discovery",
      desc: "We talk about your business, your audience, and what you actually need. I ask a lot of questions — the more I understand, the better the work.",
      details: ["Brand audit", "Audience research", "Goal setting", "Competitor review"]
    },
    {
      n: "02",
      file: "strategy.md",
      title: "Strategy",
      desc: "I build the plan — content pillars, brand voice, posting schedule, and the system that makes everything repeatable.",
      details: ["Content pillars", "Brand voice guide", "Editorial calendar", "Platform strategy"]
    },
    {
      n: "03",
      file: "creation.app",
      title: "Creation",
      desc: "I design, write, and produce the content. Posts, stories, reels, graphics — everything built to the strategy.",
      details: ["Graphic design", "Caption writing", "Video editing", "Template systems"]
    },
    {
      n: "04",
      file: "delivery.zip",
      title: "Delivery",
      desc: "Content is scheduled, published, and managed. I handle the posting so you don't have to think about it.",
      details: ["Scheduling & publishing", "Community management", "DM responses", "Story posting"]
    },
    {
      n: "05",
      file: "review.csv",
      title: "Review",
      desc: "Every month I review what's working, what isn't, and adjust the strategy. Data-informed, not guesswork.",
      details: ["Performance analysis", "Strategy adjustment", "Monthly report", "Next month planning"]
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "04", title: "How I Work", subtitle: "The process, start to finish." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center justify-between border-b border-border bg-secondary/60 px-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-red)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-green)" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] tracking-tight text-foreground/40", children: s.file })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 flex flex-col flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "h-6 w-6 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0",
              style: { background: "oklch(0.62 0.18 255)" },
              children: s.n
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[14px] font-bold tracking-tightest text-foreground", children: s.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] leading-relaxed tracking-tight text-foreground/55 mb-3", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-auto space-y-1", children: s.details.map((d) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5 text-[10.5px] tracking-tight text-foreground/45", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/20", children: "›" }),
          d
        ] }, d)) })
      ] })
    ] }, s.n)) })
  ] });
}
function Testimonials() {
  const testimonials = [
    {
      quote: "Add a real quote from a client here — even a DM or message works.",
      name: "Client Name",
      brand: "Brand Name",
      platform: "Instagram",
      initials: "CN",
      color: "oklch(0.72 0.14 240)"
    },
    {
      quote: "Add another real quote here. Something specific about the results or the experience.",
      name: "Client Name",
      brand: "Brand Name",
      platform: "Facebook",
      initials: "CN",
      color: "oklch(0.60 0.16 170)"
    },
    {
      quote: "A third testimonial. Even 'the page finally looks professional' is a real result worth sharing.",
      name: "Client Name",
      brand: "Brand Name",
      platform: "Facebook",
      initials: "CN",
      color: "oklch(0.68 0.14 55)"
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "05", title: "What Clients Say" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-1 md:grid-cols-3 gap-4", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card p-6 flex flex-col gap-4 mac-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "rounded-[14px] rounded-tl-[4px] px-4 py-3",
          style: { background: "oklch(0.62 0.18 255 / 0.1)", border: "1px solid oklch(0.62 0.18 255 / 0.2)" },
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] leading-relaxed tracking-tight text-foreground/70 italic", children: [
            '"',
            t.quote,
            '"'
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mt-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "h-9 w-9 rounded-full shrink-0 flex items-center justify-center text-[11px] font-bold text-white",
            style: { background: t.color },
            children: t.initials
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] font-semibold tracking-tight text-foreground/80", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] tracking-tight text-foreground/40", children: [
            t.brand,
            " · ",
            t.platform
          ] })
        ] })
      ] })
    ] }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-center text-[11px] tracking-tight text-foreground/30", children: "↑ Replace with real client quotes — DMs, messages, or emails count" })
  ] });
}
function SocialFeed() {
  const posts = Array.from({ length: 6 }, (_, i) => ({ id: i }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "06", title: "Latest Work", subtitle: "From the pages I manage." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-[16px] border border-border bg-card overflow-hidden mac-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "latest_posts.grid" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] tracking-tight text-foreground/30", children: "6 items" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-px bg-border", children: posts.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "aspect-square bg-secondary/40 flex items-center justify-center",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[10px] uppercase tracking-[0.16em] text-foreground/20", children: [
              "Post ",
              p.id + 1
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-foreground/15 mt-1", children: "screenshot here" })
          ] })
        },
        p.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-6 py-4 flex items-center justify-between border-t border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] tracking-tight text-foreground/40", children: "Add real screenshots from your managed pages" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://instagram.com/stealandstyle.co",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-[11px] tracking-tight text-foreground/50 hover:text-foreground transition",
            children: "View live ↗"
          }
        )
      ] })
    ] })
  ] });
}
function FAQ() {
  const faqs = [
    {
      q: "How long does it take to see results?",
      a: "For social media management, you'll see a more consistent and professional presence immediately. Organic growth typically takes 2–3 months of consistent posting. Paid ads can show results within the first week."
    },
    {
      q: "Do you work with businesses outside the Philippines?",
      a: "Yes. I work remotely and have no location restrictions. As long as we can communicate clearly and you're targeting a market I can research, we can work together."
    },
    {
      q: "What do you need from me to get started?",
      a: "Access to your social media pages, a brief about your business and goals, and any existing brand assets (logo, colors, photos). I'll handle the rest."
    },
    {
      q: "Do you offer one-time projects or only retainers?",
      a: "Both. Brand identity and content strategy are typically one-time projects. Social media management and Meta Ads work best as ongoing retainers since consistency is what drives results."
    },
    {
      q: "How do revisions work?",
      a: "Every project includes at least one round of revisions. For ongoing work, feedback is built into the monthly review cycle. I'd rather get it right than deliver something you're not happy with."
    },
    {
      q: "Can I see examples of your work before hiring you?",
      a: "Yes — the Selected Work section has case studies for each client. You can also visit the live pages I manage directly."
    }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "07", title: "FAQ", subtitle: "Questions I get asked a lot." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-[16px] border border-border bg-card overflow-hidden mac-shadow", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "faq.txt" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "divide-y divide-border", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-4 px-7 py-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold tracking-tight text-foreground", children: f.q }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-relaxed tracking-tight text-foreground/60", children: f.a })
      ] }, i)) })
    ] })
  ] });
}
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "contact", className: "mt-20", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { index: "08", title: "Contact" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 grid gap-6 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MacWindow, { label: "Mail —", title: "New message", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-8 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-[clamp(32px,4.5vw,60px)] leading-[0.95] tracking-tightest font-bold", children: [
          "Let's work",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "selected-text", children: "together." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[13px] leading-relaxed tracking-tight text-foreground/55 max-w-md", children: "Whether you need a social media manager, a brand identity, or just want to talk strategy — I'm open. Send me a message and I'll get back to you within 24 hours." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-4 text-[13px] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "To", value: "your@email.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "From", value: "you@yourbusiness.com" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", value: "I'd like to work with you" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "mailto:your@email.com",
            className: "mt-8 inline-flex rounded-full bg-foreground px-5 py-2.5 text-[13px] tracking-tight text-background transition hover:opacity-90",
            children: "Send message →"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 grid gap-4 content-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MacWindow, { title: "availability.md", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-[13px] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full", style: { background: "var(--traffic-green)" } }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground/80", children: "Available for new projects" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/50 text-[12px]", children: "Currently taking on social media management, brand identity, and content strategy projects." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MacWindow, { title: "socials.url", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "p-5 text-[13px] tracking-tight space-y-2.5", children: [
          { label: "Instagram", href: "https://instagram.com", handle: "@yourhandle" },
          { label: "Facebook", href: "https://facebook.com", handle: "Your Page" },
          { label: "Email", href: "mailto:your@email.com", handle: "your@email.com" }
        ].map(({ label, href, handle }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground/60", children: label }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href, target: "_blank", rel: "noopener noreferrer", className: "text-foreground/40 hover:text-foreground transition text-[11px]", children: [
            handle,
            " ↗"
          ] })
        ] }, label)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MacWindow, { title: "location.txt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5 text-[13px] tracking-tight", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-[10px] uppercase tracking-[0.18em] mb-1", children: "Based in" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70", children: "Subic Bay, Philippines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/40 text-[11px] mt-1", children: "Available remotely worldwide" })
        ] }) })
      ] })
    ] })
  ] });
}
function Field({ label, value }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 border-b border-border pb-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-16 text-foreground/40", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: value })
  ] });
}
function SectionHeader({
  index,
  title,
  subtitle
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] tracking-[0.2em] uppercase text-foreground/40", children: index }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(28px,3.4vw,44px)] tracking-tightest font-semibold", children: title })
    ] }),
    subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] tracking-tight text-foreground/50", children: subtitle })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "mt-20 border-t border-border pt-6 pb-4 text-[12px] tracking-tight text-foreground/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "© 2026 Shanzster · Subic Bay, Philippines" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Built like a Mac. Designed to convert." })
  ] }) });
}
const Route = createFileRoute("/work/$id")({
  component: WorkDetail,
  loader: ({ params }) => {
    const item = WORK_ITEMS.find((w) => w.id === params.id);
    if (!item) throw notFound();
    return item;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title} — Shanzster` }]
  })
});
function ImgBox({
  src,
  alt,
  color,
  label,
  className = "",
  style = {}
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `relative overflow-hidden rounded-[12px] border border-border/40 flex items-center justify-center ${className}`,
      style: { background: color, ...style },
      children: src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: alt ?? "", className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/15 text-[28px]", children: "✦" }),
        label && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[9px] uppercase tracking-[0.16em] text-white/20", children: label })
      ] })
    }
  );
}
function GraphicModal({
  graphic,
  color,
  onClose
}) {
  reactExports.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex flex-col justify-end",
      style: { background: "oklch(0.1 0.01 240 / 0.5)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" },
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "relative w-full bg-card overflow-hidden",
          style: {
            borderRadius: "20px 20px 0 0",
            maxHeight: "92vh",
            animation: "sheet-up 0.45s cubic-bezier(.2,.8,.2,1) both",
            boxShadow: "0 -8px 48px -8px oklch(0.2 0.02 240 / 0.22), 0 0 0 0.5px oklch(0.5 0.01 240 / 0.12)"
          },
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-10 items-center justify-between border-b border-border bg-secondary/60 px-5 shrink-0 sticky top-0 z-10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "h-[11px] w-[11px] rounded-full transition hover:opacity-80", style: { background: "var(--traffic-red)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[11px] tracking-tight text-foreground/50", children: [
                graphic.title,
                ".jpeg"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: onClose, className: "text-[11px] tracking-tight text-foreground/35 hover:text-foreground transition", children: "✕ close" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "overflow-y-auto",
                style: { maxHeight: "calc(92vh - 40px)" },
                onWheel: (e) => e.stopPropagation(),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "w-full flex items-center justify-center relative",
                      style: { height: 480, background: color },
                      children: [
                        graphic.src ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: graphic.src, alt: graphic.title, className: "w-full h-full object-cover" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/10 text-[64px]", children: "✦" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] uppercase tracking-[0.2em] text-white/20", children: "add screenshot" })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "div",
                          {
                            className: "absolute inset-x-0 bottom-0",
                            style: { height: "40%", background: "linear-gradient(to top, oklch(1 0 0 / 0.95), transparent)" }
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 px-10 pb-8", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/40 mb-1", children: "Graphic" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-[clamp(28px,4vw,48px)] font-bold tracking-tightest text-foreground leading-tight", children: graphic.title })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-8 py-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-4", children: "About this graphic" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-relaxed tracking-tight text-foreground/65 mb-6", children: graphic.description }),
                      graphic.tools && graphic.tools.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-3", children: "Made with" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: graphic.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-3 py-1 text-[11px] tracking-tight text-foreground/55", children: t }, t)) })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 px-8 py-8", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] uppercase tracking-[0.22em] text-foreground/30 mb-6", children: "How I made it" }),
                      graphic.process && graphic.process.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "grid grid-cols-1 sm:grid-cols-2 gap-5", children: graphic.process.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-4", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            className: "shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-[11px] font-bold text-white mt-0.5",
                            style: { background: "oklch(0.62 0.18 255)" },
                            children: i + 1
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] tracking-tight text-foreground/65 leading-relaxed", children: step })
                      ] }, i)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-[12px] border border-dashed border-border p-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[12px] tracking-tight text-foreground/30", children: [
                        "Add ",
                        /* @__PURE__ */ jsxRuntimeExports.jsx("code", { className: "bg-secondary px-1.5 py-0.5 rounded text-[11px]", children: "process: [...]" }),
                        " in work-data.ts"
                      ] }) })
                    ] })
                  ] })
                ]
              }
            )
          ]
        }
      )
    }
  );
}
function GraphicsFolder({ item }) {
  const [open, setOpen] = reactExports.useState(false);
  const [tooltip, setTooltip] = reactExports.useState(null);
  const [modal, setModal] = reactExports.useState(null);
  const containerRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setOpen(true), 400);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const graphics = item.graphics ?? [];
  const slots = Array.from({ length: 6 }, (_, i) => graphics[i] ?? null);
  const activeGraphic = modal !== null ? slots[modal] : null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    activeGraphic && /* @__PURE__ */ jsxRuntimeExports.jsx(
      GraphicModal,
      {
        graphic: activeGraphic ?? { title: `Graphic ${modal + 1}`, description: "Add a description in work-data.ts.", process: [], tools: [] },
        color: item.color,
        onClose: () => setModal(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: containerRef,
        className: "relative w-full overflow-hidden rounded-[16px] border border-border bg-card",
        style: { height: 380 },
        onMouseEnter: () => setOpen(true),
        onMouseLeave: () => {
          setOpen(false);
          setTooltip(null);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "p",
            {
              className: "absolute top-4 left-5 text-[10px] uppercase tracking-[0.18em] text-foreground/25 transition-opacity duration-300 z-20",
              style: { opacity: open ? 0 : 1 },
              children: "hover to open"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-start pl-8 gap-4 z-10", children: slots.map((graphic, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "relative",
              style: {
                width: 130,
                height: 160,
                flexShrink: 0,
                transform: open ? `translateX(0px) rotate(${[-3, 1, -2, 2, -1, 3][i]}deg)` : `translateX(${120 + i * 40}px) rotate(0deg)`,
                opacity: open ? 1 : 0,
                transition: `transform 0.55s cubic-bezier(.2,.8,.2,1) ${i * 60}ms, opacity 0.4s ease ${i * 60}ms`,
                zIndex: tooltip === i ? 40 : 10 + i,
                cursor: open ? "pointer" : "default"
              },
              onMouseEnter: () => open && setTooltip(i),
              onMouseLeave: () => setTooltip(null),
              onClick: () => open && setModal(i),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  ImgBox,
                  {
                    src: graphic?.src,
                    color: item.color,
                    label: graphic?.title ?? `graphic ${i + 1}`,
                    className: "w-full h-full shadow-[0_8px_28px_-6px_oklch(0.2_0.02_240/0.25)]",
                    style: {
                      borderRadius: 12,
                      outline: tooltip === i ? "2px solid oklch(0.62 0.18 255)" : "none",
                      outlineOffset: 2
                    }
                  }
                ),
                tooltip === i && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute pointer-events-none z-50",
                    style: { bottom: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)", animation: "modal-in 0.18s ease both" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-[8px] px-3 py-2 text-center whitespace-nowrap",
                          style: { background: "oklch(0.18 0.01 240 / 0.92)", backdropFilter: "blur(8px)", boxShadow: "0 4px 16px -4px oklch(0.2 0.02 240 / 0.3)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold tracking-tight text-white", children: graphic?.title ?? `Graphic ${i + 1}` }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] tracking-tight text-white/50 mt-0.5", children: "click to learn more" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rotate-45", style: { background: "oklch(0.18 0.01 240 / 0.92)", marginTop: -4 } }) })
                    ]
                  }
                )
              ]
            },
            i
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "absolute select-none",
              style: { width: 340, height: 280, right: -120, top: "50%", marginTop: -140, transform: "rotate(22deg)", transformOrigin: "center center", perspective: 1e3, zIndex: 15 },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full", style: { width: 280, height: 24, background: "oklch(0.55 0.12 240 / 0.25)", filter: "blur(16px)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-[22px]", style: { background: "linear-gradient(160deg, oklch(0.70 0.14 238), oklch(0.62 0.16 244))" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-6 left-5 h-8 w-[40%] rounded-t-[14px]", style: { background: "oklch(0.66 0.14 240)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "absolute inset-0 rounded-[22px] origin-bottom",
                    style: {
                      background: "linear-gradient(160deg, oklch(0.80 0.11 232), oklch(0.70 0.14 242))",
                      boxShadow: "inset 0 2px 0 oklch(1 0 0 / 0.28), 0 16px 48px -12px oklch(0.3 0.1 240 / 0.45)",
                      transform: open ? "rotateX(46deg)" : "rotateX(0deg)",
                      transition: "transform 0.52s cubic-bezier(.2,.8,.2,1)"
                    },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-8 top-5 h-px rounded-full", style: { background: "oklch(1 0 0 / 0.22)" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-12 top-8 h-px rounded-full", style: { background: "oklch(1 0 0 / 0.10)" } }),
                      !open && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "absolute bottom-5 right-6 text-[11px] tracking-[0.2em] uppercase text-white/35", children: "graphics" })
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    )
  ] });
}
function WorkDetail() {
  const item = Route.useLoaderData();
  const galleryItems = [
    ...item.gallery ?? [],
    ...(item.graphics ?? []).map((g) => g.src),
    ...item.reels ?? []
  ];
  const galleryPlaceholders = Array.from({ length: Math.max(8, galleryItems.length) });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background pb-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(NavBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 pt-10 sm:px-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: "/",
          hash: "work",
          className: "inline-flex items-center gap-2 text-[12px] tracking-tight text-foreground/40 hover:text-foreground transition mb-8",
          children: "← Back to work"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.26em] text-foreground/35 mb-2", children: item.category }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h1",
            {
              className: "font-bold tracking-tightest text-foreground leading-[0.88]",
              style: { fontSize: "clamp(44px, 6vw, 88px)" },
              children: item.title
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50", children: item.tag }),
            item.platform && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50", children: item.platform }),
            item.duration && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card px-3 py-1 text-[11px] tracking-tight text-foreground/50", children: item.duration })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-[16px] border border-border overflow-hidden shrink-0 flex items-center justify-center",
            style: { width: 80, height: 80, background: item.color },
            children: item.logo ? /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.logo, alt: `${item.client} logo`, className: "w-full h-full object-contain p-2" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/30 text-[11px] tracking-tight", children: "logo" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Before & After" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border overflow-hidden mac-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-red)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-green)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] tracking-tight text-foreground/40", children: "before.jpeg" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ImgBox,
              {
                src: item.beforeImg,
                color: `${item.color}88`,
                label: "before",
                style: { height: 280 }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border overflow-hidden mac-shadow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-red)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-green)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 text-[10px] tracking-tight text-foreground/40", children: "after.jpeg" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ImgBox,
              {
                src: item.afterImg,
                color: item.color,
                label: "after",
                style: { height: 280 }
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-6", children: "Graphics I Designed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GraphicsFolder, { item })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Content Calendar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "content_calendar.notion" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-[18px] font-bold tracking-tightest text-foreground mb-3", children: "The system behind the content." }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-[13px] leading-relaxed tracking-tight text-foreground/55", children: [
                  "Every post on ",
                  item.client,
                  " was planned. This is the content calendar I built — mapping out posts by content pillar, format, and date so nothing was ever random."
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-2", children: ["Content pillars defined", "Posts planned 2–4 weeks ahead", "Format variety (posts, stories, reels)", "Aligned with key dates & trends"].map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-[12px] tracking-tight text-foreground/60", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full shrink-0", style: { background: "oklch(0.62 0.18 255)" } }),
                point
              ] }, point)) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ImgBox,
                {
                  src: item.calendarImg,
                  color: `${item.color}22`,
                  label: "content calendar screenshot",
                  style: { height: 280, borderRadius: 10 }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[10px] tracking-tight text-foreground/30 text-center", children: item.calendarImg ? "Content calendar" : "Add your Notion/calendar screenshot here" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Analytics & Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "analytics.csv" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
            item.analytics && item.analytics.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6", children: item.analytics.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[10px] border border-border bg-secondary/40 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold tracking-tightest leading-none text-foreground", children: a.value }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/40", children: a.label })
            ] }, a.label)) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6", children: ["Reach", "Engagement", "Followers", "Posts"].map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[10px] border border-border bg-secondary/40 p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[28px] font-bold tracking-tightest leading-none text-foreground/20", children: "—" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[10px] uppercase tracking-[0.14em] text-foreground/30", children: l })
            ] }, l)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              ImgBox,
              {
                color: `${item.color}22`,
                label: "analytics screenshot",
                style: { height: 180, borderRadius: 10 }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "mt-4 rounded-[10px] p-4",
                style: { background: `${item.color}18` },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.18em] text-foreground/35 mb-1", children: "Result" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-semibold tracking-tightest text-foreground", children: item.result })
                ]
              }
            )
          ] })
        ] })
      ] }),
      item.reels && item.reels.length > 0 || true ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Reels & Video" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 gap-3", children: (item.reels ?? [null, null, null]).map((reel, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: "rounded-[14px] border border-border overflow-hidden mac-shadow",
            style: { aspectRatio: "9/16" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-8 items-center gap-1.5 border-b border-border bg-secondary/60 px-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-red)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[9px] w-[9px] rounded-full", style: { background: "var(--traffic-green)" } }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-[9px] tracking-tight text-foreground/40", children: [
                  "reel_",
                  i + 1,
                  ".mp4"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ImgBox,
                {
                  src: reel ?? void 0,
                  color: item.color,
                  label: `reel ${i + 1}`,
                  style: { height: "calc(100% - 32px)" }
                }
              )
            ]
          },
          i
        )) })
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.22em] text-foreground/35 mb-4", children: "Everything I Made" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] border border-border bg-card overflow-hidden mac-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 items-center justify-between border-b border-border bg-secondary/60 px-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-red)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-yellow)" } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-[11px] w-[11px] rounded-full", style: { background: "var(--traffic-green)" } })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] tracking-tight text-foreground/50", children: "gallery.finder" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-[10px] tracking-tight text-foreground/30", children: [
              galleryPlaceholders.length,
              " items"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-4 space-y-3 overflow-hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex gap-3 animate-marquee-left", children: [...galleryPlaceholders.slice(0, Math.ceil(galleryPlaceholders.length / 2)), ...galleryPlaceholders.slice(0, Math.ceil(galleryPlaceholders.length / 2))].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", style: { width: 180 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ImgBox,
              {
                src: galleryItems[i % Math.max(galleryItems.length, 1)],
                color: item.color,
                label: `item ${i + 1}`,
                style: { height: 160, borderRadius: 10 }
              }
            ) }, `row1-${i}`)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex gap-3 animate-marquee-right", children: [...galleryPlaceholders.slice(Math.ceil(galleryPlaceholders.length / 2)), ...galleryPlaceholders.slice(Math.ceil(galleryPlaceholders.length / 2))].map((_, i) => {
              const actualIndex = Math.ceil(galleryPlaceholders.length / 2) + i;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0", style: { width: 180 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                ImgBox,
                {
                  src: galleryItems[actualIndex % Math.max(galleryItems.length, 1)],
                  color: item.color,
                  label: `item ${actualIndex + 1}`,
                  style: { height: 160, borderRadius: 10 }
                }
              ) }, `row2-${i}`);
            }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: item.tools.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-secondary border border-border px-2.5 py-0.5 text-[10px] tracking-tight text-foreground/45", children: t }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "/#contact",
              className: "rounded-full bg-foreground px-5 py-2 text-[12px] tracking-tight text-background transition hover:opacity-85",
              children: "Work with me →"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              hash: "work",
              className: "rounded-full border border-border bg-card px-5 py-2 text-[12px] tracking-tight text-foreground/60 hover:bg-secondary transition",
              children: "← All work"
            }
          )
        ] })
      ] })
    ] })
  ] });
}
const VideosRoute = Route$8.update({
  id: "/videos",
  path: "/videos",
  getParentRoute: () => Route$9
});
const GraphicsRoute = Route$7.update({
  id: "/graphics",
  path: "/graphics",
  getParentRoute: () => Route$9
});
const GalleryRoute = Route$6.update({
  id: "/gallery",
  path: "/gallery",
  getParentRoute: () => Route$9
});
const ClientsRoute = Route$5.update({
  id: "/clients",
  path: "/clients",
  getParentRoute: () => Route$9
});
const CalendarsRoute = Route$4.update({
  id: "/calendars",
  path: "/calendars",
  getParentRoute: () => Route$9
});
const AdsRoute = Route$3.update({
  id: "/ads",
  path: "/ads",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$2.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route$1.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const WorkIdRoute = Route.update({
  id: "/work/$id",
  path: "/work/$id",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  AdsRoute,
  CalendarsRoute,
  ClientsRoute,
  GalleryRoute,
  GraphicsRoute,
  VideosRoute,
  WorkIdRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getRouter
});
const pluginSerializationAdapters = [];
const hasPluginAdapters = false;
const __23tanstackStartPluginAdapters = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasPluginAdapters,
  pluginSerializationAdapters
});
const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" }
    });
  }
});
const startInstance = createStart(() => ({
  requestMiddleware: [errorMiddleware]
}));
const start = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  startInstance
});
export {
  FRAME_HEADER_SIZE as F,
  TSS_CONTENT_TYPE_FRAMED_VERSIONED as T,
  X_TSS_RAW_RESPONSE as X,
  __23tanstackStartPluginAdapters as _,
  FrameType as a,
  TSS_FORMDATA_CONTEXT as b,
  TSS_SERVER_FUNCTION as c,
  X_TSS_SERIALIZED as d,
  createCsrfMiddleware as e,
  createNullProtoObject as f,
  flattenMiddlewares as g,
  getDefaultSerovalPlugins as h,
  router as i,
  start as j,
  renderErrorPage as r,
  safeObjectMerge as s
};
