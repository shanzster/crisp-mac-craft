import { c as createStartHandler } from "./tanstack__start-server-core.mjs";
import { d as defaultStreamHandler } from "./tanstack__react-start-server.mjs";
import "./react.mjs";
import "node:async_hooks";
import "./h3-v2.mjs";
import "./rou3.mjs";
import "./srvx.mjs";
import "node:stream";
import "./tanstack__router-core.mjs";
import "./tanstack__history.mjs";
import "./seroval.mjs";
import "./seroval-plugins.mjs";
import "./cookie-es.mjs";
import "node:stream/web";
import "./@tanstack/start-client-core.mjs";
import "./tanstack__start-fn-stubs.mjs";
import "./@tanstack/start-storage-context+[...].mjs";
import "./tanstack__react-router.mjs";
import "./react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./isbot.mjs";
import "./tanstack__react-query.mjs";
import "./tanstack__query-core.mjs";
var fetch = createStartHandler(defaultStreamHandler);
function createServerEntry(entry) {
  return { async fetch(...args) {
    return await entry.fetch(...args);
  } };
}
var server_default = createServerEntry({ fetch });
export {
  createServerEntry,
  server_default as default
};
