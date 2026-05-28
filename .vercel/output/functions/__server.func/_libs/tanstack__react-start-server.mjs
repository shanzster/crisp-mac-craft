import { j as jsxRuntimeExports } from "./react.mjs";
import { R as RouterProvider, r as renderRouterToStream } from "./tanstack__react-router.mjs";
import { i as defineHandlerCallback } from "./tanstack__router-core.mjs";
function StartServer(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RouterProvider, { router: props.router });
}
var defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
  request,
  router,
  responseHeaders,
  children: /* @__PURE__ */ jsxRuntimeExports.jsx(StartServer, { router })
}));
export {
  defaultStreamHandler as d
};
