var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// node_modules/@remix-run/server-runtime/esm/responses.js
function json(data, init = {}) {
  let responseInit = init;
  if (typeof init === "number") {
    responseInit = {
      status: init
    };
  }
  let headers = new Headers(responseInit.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json; charset=utf-8");
  }
  return new Response(JSON.stringify(data), {
    ...responseInit,
    headers
  });
}
function redirect(url2, init = 302) {
  let responseInit = init;
  if (typeof responseInit === "number") {
    responseInit = {
      status: responseInit
    };
  } else if (typeof responseInit.status === "undefined") {
    responseInit.status = 302;
  }
  let headers = new Headers(responseInit.headers);
  headers.set("Location", url2);
  return new Response(null, {
    ...responseInit,
    headers
  });
}
function isResponse(value) {
  return value != null && typeof value.status === "number" && typeof value.statusText === "string" && typeof value.headers === "object" && typeof value.body !== "undefined";
}
function isRedirectResponse(response) {
  return redirectStatusCodes.has(response.status);
}
function isCatchResponse(response) {
  return response.headers.get("X-Remix-Catch") != null;
}
var redirectStatusCodes;
var init_responses = __esm({
  "node_modules/@remix-run/server-runtime/esm/responses.js"() {
    redirectStatusCodes = new Set([301, 302, 303, 307, 308]);
  }
});

// node_modules/@remix-run/server-runtime/esm/data.js
async function callRouteAction({
  loadContext,
  match,
  request
}) {
  let action2 = match.route.module.action;
  if (!action2) {
    throw new Error(`You made a ${request.method} request to ${request.url} but did not provide an \`action\` for route "${match.route.id}", so there is no way to handle the request.`);
  }
  let result;
  try {
    result = await action2({
      request: stripDataParam(stripIndexParam(request.clone())),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error)) {
      throw error;
    }
    if (!isRedirectResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
    }
    result = error;
  }
  if (result === void 0) {
    throw new Error(`You defined an action for route "${match.route.id}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json(result);
}
async function callRouteLoader({
  loadContext,
  match,
  request
}) {
  let loader3 = match.route.module.loader;
  if (!loader3) {
    throw new Error(`You made a ${request.method} request to ${request.url} but did not provide a \`loader\` for route "${match.route.id}", so there is no way to handle the request.`);
  }
  let result;
  try {
    result = await loader3({
      request: stripDataParam(stripIndexParam(request.clone())),
      context: loadContext,
      params: match.params
    });
  } catch (error) {
    if (!isResponse(error)) {
      throw error;
    }
    if (!isRedirectResponse(error)) {
      error.headers.set("X-Remix-Catch", "yes");
    }
    result = error;
  }
  if (result === void 0) {
    throw new Error(`You defined an action for route "${match.route.id}" but didn't return anything from your \`action\` function. Please return a value or \`null\`.`);
  }
  return isResponse(result) ? result : json(result);
}
function stripIndexParam(request) {
  let url2 = new URL(request.url);
  let indexValues = url2.searchParams.getAll("index");
  url2.searchParams.delete("index");
  let indexValuesToKeep = [];
  for (let indexValue of indexValues) {
    if (indexValue) {
      indexValuesToKeep.push(indexValue);
    }
  }
  for (let toKeep of indexValuesToKeep) {
    url2.searchParams.append("index", toKeep);
  }
  return new Request(url2.toString(), request);
}
function stripDataParam(request) {
  let url2 = new URL(request.url);
  url2.searchParams.delete("_data");
  return new Request(url2.toString(), request);
}
function extractData(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
var init_data = __esm({
  "node_modules/@remix-run/server-runtime/esm/data.js"() {
    init_responses();
  }
});

// node_modules/@remix-run/server-runtime/esm/entry.js
function createEntryMatches(matches, routes3) {
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: routes3[match.route.id]
  }));
}
function createEntryRouteModules(manifest) {
  return Object.keys(manifest).reduce((memo, routeId) => {
    memo[routeId] = manifest[routeId].module;
    return memo;
  }, {});
}
var init_entry = __esm({
  "node_modules/@remix-run/server-runtime/esm/entry.js"() {
  }
});

// node_modules/@remix-run/server-runtime/esm/errors.js
async function serializeError(error) {
  return {
    message: error.message,
    stack: error.stack
  };
}
var init_errors = __esm({
  "node_modules/@remix-run/server-runtime/esm/errors.js"() {
  }
});

// node_modules/@remix-run/server-runtime/esm/headers.js
import { splitCookiesString } from "https://esm.sh/set-cookie-parser@2.4.8?no-check";
function getDocumentHeaders(build, matches, routeLoaderResponses, actionResponse) {
  return matches.reduce((parentHeaders, match, index) => {
    let routeModule = build.routes[match.route.id].module;
    let loaderHeaders = routeLoaderResponses[index] ? routeLoaderResponses[index].headers : new Headers();
    let actionHeaders = actionResponse ? actionResponse.headers : new Headers();
    let headers = new Headers(routeModule.headers ? typeof routeModule.headers === "function" ? routeModule.headers({
      loaderHeaders,
      parentHeaders,
      actionHeaders
    }) : routeModule.headers : void 0);
    prependCookies(actionHeaders, headers);
    prependCookies(loaderHeaders, headers);
    prependCookies(parentHeaders, headers);
    return headers;
  }, new Headers());
}
function prependCookies(parentHeaders, childHeaders) {
  let parentSetCookieString = parentHeaders.get("Set-Cookie");
  if (parentSetCookieString) {
    let cookies = splitCookiesString(parentSetCookieString);
    cookies.forEach((cookie) => {
      childHeaders.append("Set-Cookie", cookie);
    });
  }
}
var init_headers = __esm({
  "node_modules/@remix-run/server-runtime/esm/headers.js"() {
  }
});

// node_modules/@remix-run/server-runtime/esm/routeMatching.js
import { matchRoutes } from "https://esm.sh/react-router-dom@6.1.0?no-check";
function matchServerRoutes(routes3, pathname) {
  let matches = matchRoutes(routes3, pathname);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}
var init_routeMatching = __esm({
  "node_modules/@remix-run/server-runtime/esm/routeMatching.js"() {
  }
});

// node_modules/@remix-run/server-runtime/esm/mode.js
function isServerMode(value) {
  return value === ServerMode.Development || value === ServerMode.Production || value === ServerMode.Test;
}
var ServerMode;
var init_mode = __esm({
  "node_modules/@remix-run/server-runtime/esm/mode.js"() {
    (function(ServerMode2) {
      ServerMode2["Development"] = "development";
      ServerMode2["Production"] = "production";
      ServerMode2["Test"] = "test";
    })(ServerMode || (ServerMode = {}));
  }
});

// node_modules/@remix-run/server-runtime/esm/routes.js
function createRoutes(manifest, parentId) {
  return Object.keys(manifest).filter((key) => manifest[key].parentId === parentId).map((id) => ({
    ...manifest[id],
    children: createRoutes(manifest, id)
  }));
}
var init_routes = __esm({
  "node_modules/@remix-run/server-runtime/esm/routes.js"() {
  }
});

// node_modules/@remix-run/server-runtime/esm/serverHandoff.js
import jsesc from "https://esm.sh/jsesc@3.0.2?no-check";
function createServerHandoffString(serverHandoff) {
  return jsesc(serverHandoff, {
    isScriptContext: true
  });
}
var init_serverHandoff = __esm({
  "node_modules/@remix-run/server-runtime/esm/serverHandoff.js"() {
  }
});

// node_modules/@remix-run/server-runtime/esm/server.js
function createRequestHandler(build, platform, mode) {
  let routes3 = createRoutes(build.routes);
  let serverMode = isServerMode(mode) ? mode : ServerMode.Production;
  return async function requestHandler(request, loadContext) {
    let url2 = new URL(request.url);
    let matches = matchServerRoutes(routes3, url2.pathname);
    let requestType = getRequestType(url2, matches);
    let response;
    switch (requestType) {
      case "data":
        response = await handleDataRequest({
          request,
          loadContext,
          matches,
          handleDataRequest: build.entry.module.handleDataRequest,
          serverMode
        });
        break;
      case "document":
        response = await renderDocumentRequest({
          build,
          loadContext,
          matches,
          request,
          routes: routes3,
          serverMode
        });
        break;
      case "resource":
        response = await handleResourceRequest({
          request,
          loadContext,
          matches,
          serverMode
        });
        break;
    }
    if (request.method.toLowerCase() === "head") {
      return new Response(null, {
        headers: response.headers,
        status: response.status,
        statusText: response.statusText
      });
    }
    return response;
  };
}
async function handleDataRequest({
  handleDataRequest: handleDataRequest2,
  loadContext,
  matches,
  request,
  serverMode
}) {
  if (!isValidRequestMethod(request)) {
    return errorBoundaryError(new Error(`Invalid request method "${request.method}"`), 405);
  }
  let url2 = new URL(request.url);
  if (!matches) {
    return errorBoundaryError(new Error(`No route matches URL "${url2.pathname}"`), 404);
  }
  let response;
  let match;
  try {
    if (isActionRequest(request)) {
      match = getActionRequestMatch(url2, matches);
      response = await callRouteAction({
        loadContext,
        match,
        request
      });
    } else {
      let routeId = url2.searchParams.get("_data");
      if (!routeId) {
        return errorBoundaryError(new Error(`Missing route id in ?_data`), 403);
      }
      let tempMatch = matches.find((match2) => match2.route.id === routeId);
      if (!tempMatch) {
        return errorBoundaryError(new Error(`Route "${routeId}" does not match URL "${url2.pathname}"`), 403);
      }
      match = tempMatch;
      response = await callRouteLoader({
        loadContext,
        match,
        request
      });
    }
    if (isRedirectResponse(response)) {
      let headers = new Headers(response.headers);
      headers.set("X-Remix-Redirect", headers.get("Location"));
      headers.delete("Location");
      return new Response(null, {
        status: 204,
        headers
      });
    }
    if (handleDataRequest2) {
      response = await handleDataRequest2(response.clone(), {
        context: loadContext,
        params: match.params,
        request: request.clone()
      });
    }
    return response;
  } catch (error) {
    if (serverMode !== ServerMode.Test) {
      console.error(error);
    }
    if (serverMode === ServerMode.Development) {
      return errorBoundaryError(error, 500);
    }
    return errorBoundaryError(new Error("Unexpected Server Error"), 500);
  }
}
async function renderDocumentRequest({
  build,
  loadContext,
  matches,
  request,
  routes: routes3,
  serverMode
}) {
  let url2 = new URL(request.url);
  let appState = {
    trackBoundaries: true,
    trackCatchBoundaries: true,
    catchBoundaryRouteId: null,
    renderBoundaryRouteId: null,
    loaderBoundaryRouteId: null,
    error: void 0,
    catch: void 0
  };
  if (!isValidRequestMethod(request)) {
    matches = null;
    appState.trackCatchBoundaries = false;
    appState.catch = {
      data: null,
      status: 405,
      statusText: "Method Not Allowed"
    };
  } else if (!matches) {
    appState.trackCatchBoundaries = false;
    appState.catch = {
      data: null,
      status: 404,
      statusText: "Not Found"
    };
  }
  let actionStatus;
  let actionData;
  let actionMatch;
  let actionResponse;
  if (matches && isActionRequest(request)) {
    actionMatch = getActionRequestMatch(url2, matches);
    try {
      actionResponse = await callRouteAction({
        loadContext,
        match: actionMatch,
        request
      });
      if (isRedirectResponse(actionResponse)) {
        return actionResponse;
      }
      actionStatus = {
        status: actionResponse.status,
        statusText: actionResponse.statusText
      };
      if (isCatchResponse(actionResponse)) {
        appState.catchBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "CatchBoundary");
        appState.trackCatchBoundaries = false;
        appState.catch = {
          ...actionStatus,
          data: await extractData(actionResponse)
        };
      } else {
        actionData = {
          [actionMatch.route.id]: await extractData(actionResponse)
        };
      }
    } catch (error) {
      appState.loaderBoundaryRouteId = getDeepestRouteIdWithBoundary(matches, "ErrorBoundary");
      appState.trackBoundaries = false;
      appState.error = await serializeError(error);
      if (serverMode !== ServerMode.Test) {
        console.error(`There was an error running the action for route ${actionMatch.route.id}`);
      }
    }
  }
  let routeModules = createEntryRouteModules(build.routes);
  let matchesToLoad = matches || [];
  if (appState.catch) {
    matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad.slice(0, -1), "CatchBoundary");
  } else if (appState.error) {
    matchesToLoad = getMatchesUpToDeepestBoundary(matchesToLoad.slice(0, -1), "ErrorBoundary");
  }
  let routeLoaderResults = await Promise.allSettled(matchesToLoad.map((match) => match.route.module.loader ? callRouteLoader({
    loadContext,
    match,
    request
  }) : Promise.resolve(void 0)));
  let actionCatch = appState.catch;
  let actionError = appState.error;
  let actionCatchBoundaryRouteId = appState.catchBoundaryRouteId;
  let actionLoaderBoundaryRouteId = appState.loaderBoundaryRouteId;
  appState.catch = void 0;
  appState.error = void 0;
  let routeLoaderResponses = [];
  let loaderStatusCodes = [];
  let routeData = {};
  for (let index = 0; index < matchesToLoad.length; index++) {
    let match = matchesToLoad[index];
    let result = routeLoaderResults[index];
    let error = result.status === "rejected" ? result.reason : void 0;
    let response = result.status === "fulfilled" ? result.value : void 0;
    let isRedirect = response ? isRedirectResponse(response) : false;
    let isCatch = response ? isCatchResponse(response) : false;
    if (appState.catch || appState.error) {
      break;
    }
    if (!actionCatch && !actionError && response && isRedirect) {
      return response;
    }
    if (match.route.module.CatchBoundary) {
      appState.catchBoundaryRouteId = match.route.id;
    }
    if (match.route.module.ErrorBoundary) {
      appState.loaderBoundaryRouteId = match.route.id;
    }
    if (error) {
      loaderStatusCodes.push(500);
      appState.trackBoundaries = false;
      appState.error = await serializeError(error);
      if (serverMode !== ServerMode.Test) {
        console.error(`There was an error running the data loader for route ${match.route.id}`);
      }
      break;
    } else if (response) {
      routeLoaderResponses.push(response);
      loaderStatusCodes.push(response.status);
      if (isCatch) {
        appState.trackCatchBoundaries = false;
        appState.catch = {
          data: await extractData(response),
          status: response.status,
          statusText: response.statusText
        };
        break;
      } else {
        routeData[match.route.id] = await extractData(response);
      }
    }
  }
  if (!appState.catch) {
    appState.catchBoundaryRouteId = actionCatchBoundaryRouteId;
  }
  if (!appState.error) {
    appState.loaderBoundaryRouteId = actionLoaderBoundaryRouteId;
  }
  appState.catch = actionCatch || appState.catch;
  appState.error = actionError || appState.error;
  let renderableMatches = getRenderableMatches(matches, appState);
  if (!renderableMatches) {
    renderableMatches = [];
    let root = routes3[0];
    if (root && root.module.CatchBoundary) {
      appState.catchBoundaryRouteId = "root";
      renderableMatches.push({
        params: {},
        pathname: "",
        route: routes3[0]
      });
    }
  }
  let notOkResponse = actionStatus && actionStatus.status !== 200 ? actionStatus.status : loaderStatusCodes.find((status) => status !== 200);
  let responseStatusCode = appState.error ? 500 : typeof notOkResponse === "number" ? notOkResponse : appState.catch ? appState.catch.status : 200;
  let responseHeaders = getDocumentHeaders(build, renderableMatches, routeLoaderResponses, actionResponse);
  let entryMatches = createEntryMatches(renderableMatches, build.assets.routes);
  let serverHandoff = {
    actionData,
    appState,
    matches: entryMatches,
    routeData
  };
  let entryContext = {
    ...serverHandoff,
    manifest: build.assets,
    routeModules,
    serverHandoffString: createServerHandoffString(serverHandoff)
  };
  let handleDocumentRequest = build.entry.module.default;
  try {
    return await handleDocumentRequest(request.clone(), responseStatusCode, responseHeaders, entryContext);
  } catch (error) {
    responseStatusCode = 500;
    appState.trackBoundaries = false;
    appState.error = await serializeError(error);
    entryContext.serverHandoffString = createServerHandoffString(serverHandoff);
    try {
      return await handleDocumentRequest(request.clone(), responseStatusCode, responseHeaders, entryContext);
    } catch (error2) {
      if (serverMode !== ServerMode.Test) {
        console.error(error2);
      }
      let message = "Unexpected Server Error";
      if (serverMode === ServerMode.Development) {
        message += `

${String(error2)}`;
      }
      return new Response(message, {
        status: 500,
        headers: {
          "Content-Type": "text/plain"
        }
      });
    }
  }
}
async function handleResourceRequest({
  loadContext,
  matches,
  request,
  serverMode
}) {
  let match = matches.slice(-1)[0];
  try {
    if (isActionRequest(request)) {
      return await callRouteAction({
        match,
        loadContext,
        request
      });
    } else {
      return await callRouteLoader({
        match,
        loadContext,
        request
      });
    }
  } catch (error) {
    if (serverMode !== ServerMode.Test) {
      console.error(error);
    }
    let message = "Unexpected Server Error";
    if (serverMode === ServerMode.Development) {
      message += `

${String(error)}`;
    }
    return new Response(message, {
      status: 500,
      headers: {
        "Content-Type": "text/plain"
      }
    });
  }
}
function getRequestType(url2, matches) {
  if (url2.searchParams.has("_data")) {
    return "data";
  }
  if (!matches) {
    return "document";
  }
  let match = matches.slice(-1)[0];
  if (!match.route.module.default) {
    return "resource";
  }
  return "document";
}
function isActionRequest(request) {
  let method = request.method.toLowerCase();
  return method === "post" || method === "put" || method === "patch" || method === "delete";
}
function isHeadRequest(request) {
  return request.method.toLowerCase() === "head";
}
function isValidRequestMethod(request) {
  return request.method.toLowerCase() === "get" || isHeadRequest(request) || isActionRequest(request);
}
async function errorBoundaryError(error, status) {
  return json(await serializeError(error), {
    status,
    headers: {
      "X-Remix-Error": "yes"
    }
  });
}
function isIndexRequestUrl(url2) {
  let indexRequest = false;
  for (let param of url2.searchParams.getAll("index")) {
    if (!param) {
      indexRequest = true;
    }
  }
  return indexRequest;
}
function getActionRequestMatch(url2, matches) {
  let match = matches.slice(-1)[0];
  if (!isIndexRequestUrl(url2) && match.route.id.endsWith("/index")) {
    return matches.slice(-2)[0];
  }
  return match;
}
function getDeepestRouteIdWithBoundary(matches, key) {
  let matched = getMatchesUpToDeepestBoundary(matches, key).slice(-1)[0];
  return matched ? matched.route.id : null;
}
function getMatchesUpToDeepestBoundary(matches, key) {
  let deepestBoundaryIndex = -1;
  matches.forEach((match, index) => {
    if (match.route.module[key]) {
      deepestBoundaryIndex = index;
    }
  });
  if (deepestBoundaryIndex === -1) {
    return [];
  }
  return matches.slice(0, deepestBoundaryIndex + 1);
}
function getRenderableMatches(matches, appState) {
  if (!matches) {
    return null;
  }
  if (!appState.catch && !appState.error) {
    return matches;
  }
  let lastRenderableIndex = -1;
  matches.forEach((match, index) => {
    let id = match.route.id;
    if (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id || appState.catchBoundaryRouteId === id) {
      lastRenderableIndex = index;
    }
  });
  return matches.slice(0, lastRenderableIndex + 1);
}
var init_server = __esm({
  "node_modules/@remix-run/server-runtime/esm/server.js"() {
    init_data();
    init_entry();
    init_errors();
    init_headers();
    init_routeMatching();
    init_mode();
    init_routes();
    init_responses();
    init_serverHandoff();
  }
});

// node_modules/@remix-run/server-runtime/esm/index.js
var init_esm = __esm({
  "node_modules/@remix-run/server-runtime/esm/index.js"() {
    init_responses();
    init_server();
  }
});

// deno/entry.ts
init_esm();
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import mime from "https://esm.sh/mime@3.0.0?no-check";

// build/index.js
var build_exports = {};
__export(build_exports, {
  assets: () => assets_default,
  entry: () => entry2,
  routes: () => routes2
});
import {
  Fragment,
  createElement as createElement2
} from "https://esm.sh/react@17.0.2?no-check";
import { renderToString } from "https://esm.sh/react-dom@17.0.2/server?no-check";

// node_modules/@remix-run/react/esm/_virtual/_rollupPluginBabelHelpers.js
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

// node_modules/@remix-run/react/esm/components.js
import React__default3 from "https://esm.sh/react@17.0.2?no-check";
import { useHref, NavLink as NavLink$1, Link as Link$1, useLocation, useResolvedPath, useNavigate, Router, useRoutes } from "https://esm.sh/react-router-dom@6.1.0?no-check";

// node_modules/@remix-run/react/esm/errorBoundaries.js
import React__default, { useContext } from "https://esm.sh/react@17.0.2?no-check";
var RemixErrorBoundary = class extends React__default.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: props.error || null,
      location: props.location
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error || null,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  render() {
    if (this.state.error) {
      return /* @__PURE__ */ React__default.createElement(this.props.component, {
        error: this.state.error
      });
    } else {
      return this.props.children;
    }
  }
};
function RemixRootDefaultErrorBoundary({
  error
}) {
  console.error(error);
  return /* @__PURE__ */ React__default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React__default.createElement("head", null, /* @__PURE__ */ React__default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React__default.createElement("title", null, "Uncaught Exception!")), /* @__PURE__ */ React__default.createElement("body", null, /* @__PURE__ */ React__default.createElement("main", {
    style: {
      border: "solid 2px hsl(10, 50%, 50%)",
      padding: "2rem"
    }
  }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("h1", null, "Uncaught Exception!"), /* @__PURE__ */ React__default.createElement("p", null, "If you are not the developer, please click back in your browser and try again."), /* @__PURE__ */ React__default.createElement("div", {
    style: {
      fontFamily: `"SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace`,
      padding: "1rem",
      margin: "1rem 0",
      border: "solid 4px"
    }
  }, error.message), /* @__PURE__ */ React__default.createElement("p", null, "There was an uncaught exception in your application. Check the browser console and/or server console to inspect the error."), /* @__PURE__ */ React__default.createElement("p", null, "If you are the developer, consider adding your own error boundary so users don't see this page when unexpected errors happen in production!"), /* @__PURE__ */ React__default.createElement("p", null, "Read more about", " ", /* @__PURE__ */ React__default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://remix.run/guides/errors"
  }, "Error Handling in Remix"), ".")))));
}
var RemixCatchContext = /* @__PURE__ */ React__default.createContext(void 0);
function useCatch() {
  return useContext(RemixCatchContext);
}
function RemixCatchBoundary({
  catch: catchVal,
  component: Component,
  children
}) {
  if (catchVal) {
    return /* @__PURE__ */ React__default.createElement(RemixCatchContext.Provider, {
      value: catchVal
    }, /* @__PURE__ */ React__default.createElement(Component, null));
  }
  return /* @__PURE__ */ React__default.createElement(React__default.Fragment, null, children);
}
function RemixRootDefaultCatchBoundary() {
  return /* @__PURE__ */ React__default.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React__default.createElement("head", null, /* @__PURE__ */ React__default.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React__default.createElement("title", null, "Unhandled Thrown Response!")), /* @__PURE__ */ React__default.createElement("body", null, /* @__PURE__ */ React__default.createElement("main", {
    style: {
      border: "solid 2px hsl(10, 50%, 50%)",
      padding: "2rem"
    }
  }, /* @__PURE__ */ React__default.createElement("div", null, /* @__PURE__ */ React__default.createElement("h1", null, "Unhandled Thrown Response!"), /* @__PURE__ */ React__default.createElement("p", null, "If you are not the developer, please click back in your browser and try again."), /* @__PURE__ */ React__default.createElement("p", null, "There was an unhandled thrown response in your application."), /* @__PURE__ */ React__default.createElement("p", null, "If you are the developer, consider adding your own catch boundary so users don't see this page when unhandled thrown response happen in production!"), /* @__PURE__ */ React__default.createElement("p", null, "Read more about", " ", /* @__PURE__ */ React__default.createElement("a", {
    target: "_blank",
    rel: "noreferrer",
    href: "https://remix.run/guides/errors"
  }, "Throwing Responses in Remix"), ".")))));
}

// node_modules/@remix-run/react/esm/invariant.js
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}

// node_modules/@remix-run/react/esm/links.js
import { parsePath } from "https://esm.sh/history@5.1.0?no-check";

// node_modules/@remix-run/react/esm/routeModules.js
async function loadRouteModule(route, routeModulesCache) {
  if (route.id in routeModulesCache) {
    return routeModulesCache[route.id];
  }
  try {
    let routeModule = await import(route.module);
    routeModulesCache[route.id] = routeModule;
    return routeModule;
  } catch (error) {
    window.location.reload();
    return new Promise(() => {
    });
  }
}

// node_modules/@remix-run/react/esm/links.js
function getLinksForMatches(matches, routeModules, manifest) {
  let descriptors = matches.map((match) => {
    let module = routeModules[match.route.id];
    return module.links && module.links() || [];
  }).flat(1);
  let preloads = getCurrentPageModulePreloadHrefs(matches, manifest);
  return dedupe(descriptors, preloads);
}
async function prefetchStyleLinks(routeModule) {
  if (!routeModule.links)
    return;
  let descriptors = routeModule.links();
  if (!descriptors)
    return;
  let styleLinks = [];
  for (let descriptor of descriptors) {
    if (!isPageLinkDescriptor(descriptor) && descriptor.rel === "stylesheet") {
      styleLinks.push({
        ...descriptor,
        rel: "preload",
        as: "style"
      });
    }
  }
  let matchingLinks = styleLinks.filter((link) => !link.media || window.matchMedia(link.media).matches);
  await Promise.all(matchingLinks.map(prefetchStyleLink));
}
async function prefetchStyleLink(descriptor) {
  return new Promise((resolve) => {
    let link = document.createElement("link");
    Object.assign(link, descriptor);
    function removeLink() {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    }
    link.onload = () => {
      removeLink();
      resolve();
    };
    link.onerror = () => {
      removeLink();
      resolve();
    };
    document.head.appendChild(link);
  });
}
function isPageLinkDescriptor(object) {
  return object != null && typeof object.page === "string";
}
function isHtmlLinkDescriptor(object) {
  return object != null && typeof object.rel === "string" && typeof object.href === "string";
}
async function getStylesheetPrefetchLinks(matches, routeModules) {
  let links3 = await Promise.all(matches.map(async (match) => {
    let mod = await loadRouteModule(match.route, routeModules);
    return mod.links ? mod.links() : [];
  }));
  return links3.flat(1).filter(isHtmlLinkDescriptor).filter((link) => link.rel === "stylesheet" || link.rel === "preload").map(({
    rel,
    ...attrs
  }) => {
    if (rel === "preload") {
      return {
        rel: "prefetch",
        ...attrs
      };
    }
    return {
      rel: "prefetch",
      as: "style",
      ...attrs
    };
  });
}
function getNewMatchesForLinks(page, nextMatches, currentMatches, location, mode) {
  let path = parsePathPatch(page);
  let isNew = (match, index) => {
    if (!currentMatches[index])
      return true;
    return match.route.id !== currentMatches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _currentMatches$index;
    return currentMatches[index].pathname !== match.pathname || ((_currentMatches$index = currentMatches[index].route.path) === null || _currentMatches$index === void 0 ? void 0 : _currentMatches$index.endsWith("*")) && currentMatches[index].params["*"] !== match.params["*"];
  };
  let newMatches = mode === "data" && location.search !== path.search ? nextMatches.filter((match, index) => {
    if (!match.route.hasLoader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldReload) {
      return match.route.shouldReload({
        params: match.params,
        prevUrl: new URL(location.pathname + location.search + location.hash, window.origin),
        url: new URL(page, window.origin)
      });
    }
    return true;
  }) : nextMatches.filter((match, index) => {
    return match.route.hasLoader && (isNew(match, index) || matchPathChanged(match, index));
  });
  return newMatches;
}
function getDataLinkHrefs(page, matches, manifest) {
  let path = parsePathPatch(page);
  return dedupeHrefs(matches.filter((match) => manifest.routes[match.route.id].hasLoader).map((match) => {
    let {
      pathname,
      search
    } = path;
    let searchParams = new URLSearchParams(search);
    searchParams.append("_data", match.route.id);
    return `${pathname}?${searchParams}`;
  }));
}
function getModuleLinkHrefs(matches, manifestPatch) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifestPatch.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function getCurrentPageModulePreloadHrefs(matches, manifest) {
  return dedupeHrefs(matches.map((match) => {
    let route = manifest.routes[match.route.id];
    let hrefs = [route.module];
    if (route.imports) {
      hrefs = hrefs.concat(route.imports);
    }
    return hrefs;
  }).flat(1));
}
function dedupeHrefs(hrefs) {
  return [...new Set(hrefs)];
}
function dedupe(descriptors, preloads) {
  let set = new Set();
  let preloadsSet = new Set(preloads);
  return descriptors.reduce((deduped, descriptor) => {
    let alreadyModulePreload = !isPageLinkDescriptor(descriptor) && descriptor.as === "script" && descriptor.href && preloadsSet.has(descriptor.href);
    if (alreadyModulePreload) {
      return deduped;
    }
    let str = JSON.stringify(descriptor);
    if (!set.has(str)) {
      set.add(str);
      deduped.push(descriptor);
    }
    return deduped;
  }, []);
}
function parsePathPatch(href) {
  let path = parsePath(href);
  if (path.search === void 0)
    path.search = "";
  return path;
}

// node_modules/@remix-run/react/esm/markup.js
function createHtml(html) {
  return {
    __html: html
  };
}

// node_modules/@remix-run/react/esm/routes.js
import React__default2 from "https://esm.sh/react@17.0.2?no-check";

// node_modules/@remix-run/react/esm/data.js
function isCatchResponse2(response) {
  return response instanceof Response && response.headers.get("X-Remix-Catch") != null;
}
function isErrorResponse(response) {
  return response instanceof Response && response.headers.get("X-Remix-Error") != null;
}
function isRedirectResponse2(response) {
  return response instanceof Response && response.headers.get("X-Remix-Redirect") != null;
}
async function fetchData(url2, routeId, signal, submission) {
  url2.searchParams.set("_data", routeId);
  url2.searchParams.sort();
  let init = submission ? getActionInit(submission, signal) : {
    credentials: "same-origin",
    signal
  };
  let response = await fetch(url2.href, init);
  if (isErrorResponse(response)) {
    let data = await response.json();
    let error = new Error(data.message);
    error.stack = data.stack;
    return error;
  }
  return response;
}
async function extractData2(response) {
  let contentType = response.headers.get("Content-Type");
  if (contentType && /\bapplication\/json\b/.test(contentType)) {
    return response.json();
  }
  return response.text();
}
function getActionInit(submission, signal) {
  let {
    encType,
    method,
    formData
  } = submission;
  let headers = void 0;
  let body = formData;
  if (encType === "application/x-www-form-urlencoded") {
    body = new URLSearchParams();
    for (let [key, value] of formData) {
      invariant(typeof value === "string", `File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.`);
      body.append(key, value);
    }
    headers = {
      "Content-Type": encType
    };
  }
  return {
    method,
    body,
    signal,
    credentials: "same-origin",
    headers
  };
}

// node_modules/@remix-run/react/esm/transition.js
import { Action } from "https://esm.sh/history@5.1.0?no-check";

// node_modules/@remix-run/react/esm/routeMatching.js
import { matchRoutes as matchRoutes2 } from "https://esm.sh/react-router-dom@6.1.0?no-check";
function matchClientRoutes(routes3, location) {
  let matches = matchRoutes2(routes3, location);
  if (!matches)
    return null;
  return matches.map((match) => ({
    params: match.params,
    pathname: match.pathname,
    route: match.route
  }));
}

// node_modules/@remix-run/react/esm/transition.js
var CatchValue = class {
  constructor(status, statusText, data) {
    this.status = status;
    this.statusText = statusText;
    this.data = data;
  }
};
function isActionSubmission(submission) {
  return ["POST", "PUT", "PATCH", "DELETE"].includes(submission.method);
}
function isLoaderSubmission(submission) {
  return submission.method === "GET";
}
function isRedirectLocation(location) {
  return Boolean(location.state) && location.state.isRedirect;
}
function isLoaderRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "loader";
}
function isActionRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "action";
}
function isFetchActionRedirect(location) {
  return isRedirectLocation(location) && location.state.type === "fetchAction";
}
function isLoaderSubmissionRedirectLocation(location) {
  return isRedirectLocation(location) && location.state.type === "loaderSubmission";
}
var TransitionRedirect = class {
  constructor(location) {
    this.location = typeof location === "string" ? location : location.pathname + location.search;
  }
};
var IDLE_TRANSITION = {
  state: "idle",
  submission: void 0,
  location: void 0,
  type: "idle"
};
var IDLE_FETCHER = {
  state: "idle",
  type: "init",
  data: void 0,
  submission: void 0
};
function createTransitionManager(init) {
  let {
    routes: routes3
  } = init;
  let pendingNavigationController;
  let fetchControllers = new Map();
  let incrementingLoadId = 0;
  let navigationLoadId = -1;
  let fetchReloadIds = new Map();
  let matches = matchClientRoutes(routes3, init.location);
  if (!matches) {
    matches = [{
      params: {},
      pathname: "",
      route: routes3[0]
    }];
  }
  let state = {
    location: init.location,
    loaderData: init.loaderData || {},
    actionData: init.actionData,
    catch: init.catch,
    error: init.error,
    catchBoundaryId: init.catchBoundaryId || null,
    errorBoundaryId: init.errorBoundaryId || null,
    matches,
    nextMatches: void 0,
    transition: IDLE_TRANSITION,
    fetchers: new Map()
  };
  function update(updates) {
    state = Object.assign({}, state, updates);
    init.onChange(state);
  }
  function getState() {
    return state;
  }
  function getFetcher(key) {
    return state.fetchers.get(key) || IDLE_FETCHER;
  }
  function deleteFetcher(key) {
    if (fetchControllers.has(key))
      abortFetcher(key);
    fetchReloadIds.delete(key);
    state.fetchers.delete(key);
  }
  async function send(event) {
    switch (event.type) {
      case "navigation": {
        let {
          action: action2,
          location,
          submission
        } = event;
        let matches2 = matchClientRoutes(routes3, location);
        if (!matches2) {
          matches2 = [{
            params: {},
            pathname: "",
            route: routes3[0]
          }];
          await handleNotFoundNavigation(location, matches2);
        } else if (!submission && isHashChangeOnly(location)) {
          await handleHashChange(location, matches2);
        } else if (action2 === Action.Pop) {
          await handleLoad(location, matches2);
        } else if (submission && isActionSubmission(submission)) {
          await handleActionSubmissionNavigation(location, submission, matches2);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderSubmissionNavigation(location, submission, matches2);
        } else if (isActionRedirectLocation(location)) {
          await handleActionRedirect(location, matches2);
        } else if (isLoaderSubmissionRedirectLocation(location)) {
          await handleLoaderSubmissionRedirect(location, matches2);
        } else if (isLoaderRedirectLocation(location)) {
          await handleLoaderRedirect(location, matches2);
        } else if (isFetchActionRedirect(location)) {
          await handleFetchActionRedirect(location, matches2);
        } else {
          await handleLoad(location, matches2);
        }
        navigationLoadId = -1;
        break;
      }
      case "fetcher": {
        let {
          key,
          submission,
          href
        } = event;
        let matches2 = matchClientRoutes(routes3, href);
        invariant(matches2, "No matches found");
        let match = matches2.slice(-1)[0];
        if (fetchControllers.has(key))
          abortFetcher(key);
        if (submission && isActionSubmission(submission)) {
          await handleActionFetchSubmission(key, submission, match);
        } else if (submission && isLoaderSubmission(submission)) {
          await handleLoaderFetchSubmission(href, key, submission, match);
        } else {
          await handleLoaderFetch(href, key, match);
        }
        break;
      }
      default: {
        throw new Error(`Unknown data event type: ${event.type}`);
      }
    }
  }
  function dispose() {
    abortNormalNavigation();
    for (let [, controller] of fetchControllers) {
      controller.abort();
    }
  }
  async function handleActionFetchSubmission(key, submission, match) {
    let fetcher = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      data: void 0
    };
    state.fetchers.set(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callAction(submission, match, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "fetchAction"
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let loadFetcher = {
      state: "loading",
      type: "actionReload",
      data: result.value,
      submission
    };
    state.fetchers.set(key, loadFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let maybeActionErrorResult = isErrorResult(result) ? result : void 0;
    let maybeActionCatchResult = isCatchResult(result) ? result : void 0;
    let loadId = ++incrementingLoadId;
    fetchReloadIds.set(key, loadId);
    let matchesToLoad = state.nextMatches || state.matches;
    let hrefToLoad = createHref(state.transition.location || state.location);
    let results = await callLoaders(state, createUrl(hrefToLoad), matchesToLoad, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, match.route.id, loadFetcher);
    if (controller.signal.aborted) {
      return;
    }
    fetchReloadIds.delete(key);
    fetchControllers.delete(key);
    let redirect2 = findRedirect(results);
    if (redirect2) {
      let locationState = {
        isRedirect: true,
        type: "loader"
      };
      init.onRedirect(redirect2.location, locationState);
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, state.matches, maybeActionErrorResult);
    let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, state.matches, maybeActionCatchResult);
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    state.fetchers.set(key, doneFetcher);
    let abortedKeys = abortStaleFetchLoads(loadId);
    if (abortedKeys) {
      markFetchersDone(abortedKeys);
    }
    let yeetedNavigation = yeetStaleNavigationLoad(loadId);
    if (yeetedNavigation) {
      let {
        transition
      } = state;
      invariant(transition.state === "loading", "Expected loading transition");
      update({
        location: transition.location,
        matches: state.nextMatches,
        error,
        errorBoundaryId,
        catch: catchVal,
        catchBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad),
        actionData: transition.type === "actionReload" ? state.actionData : void 0,
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers)
      });
    } else {
      update({
        fetchers: new Map(state.fetchers),
        error,
        errorBoundaryId,
        loaderData: makeLoaderData(state, results, matchesToLoad)
      });
    }
  }
  function yeetStaleNavigationLoad(landedId) {
    let isLoadingNavigation = state.transition.state === "loading";
    if (isLoadingNavigation && navigationLoadId < landedId) {
      abortNormalNavigation();
      return true;
    }
    return false;
  }
  function markFetchersDone(keys) {
    for (let key of keys) {
      let fetcher = getFetcher(key);
      let doneFetcher = {
        state: "idle",
        type: "done",
        data: fetcher.data,
        submission: void 0
      };
      state.fetchers.set(key, doneFetcher);
    }
  }
  function abortStaleFetchLoads(landedId) {
    let yeetedKeys = [];
    for (let [key, id] of fetchReloadIds) {
      if (id < landedId) {
        let fetcher = state.fetchers.get(key);
        invariant(fetcher, `Expected fetcher: ${key}`);
        if (fetcher.state === "loading") {
          abortFetcher(key);
          fetchReloadIds.delete(key);
          yeetedKeys.push(key);
        }
      }
    }
    return yeetedKeys.length ? yeetedKeys : false;
  }
  async function handleLoaderFetchSubmission(href, key, submission, match) {
    let fetcher = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      data: void 0
    };
    state.fetchers.set(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    fetchControllers.delete(key);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader"
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    state.fetchers.set(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function handleLoaderFetch(href, key, match) {
    let fetcher = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      data: void 0
    };
    state.fetchers.set(key, fetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
    let controller = new AbortController();
    fetchControllers.set(key, controller);
    let result = await callLoader(match, createUrl(href), controller.signal);
    if (controller.signal.aborted)
      return;
    fetchControllers.delete(key);
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "loader"
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (maybeBailOnError(match, key, result)) {
      return;
    }
    if (await maybeBailOnCatch(match, key, result)) {
      return;
    }
    let doneFetcher = {
      state: "idle",
      type: "done",
      data: result.value,
      submission: void 0
    };
    state.fetchers.set(key, doneFetcher);
    update({
      fetchers: new Map(state.fetchers)
    });
  }
  async function maybeBailOnCatch(match, key, result) {
    if (isCatchResult(result)) {
      let catchBoundaryId = findNearestCatchBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        transition: IDLE_TRANSITION,
        fetchers: new Map(state.fetchers),
        catch: {
          data: result.value.data,
          status: result.value.status,
          statusText: result.value.statusText
        },
        catchBoundaryId
      });
      return true;
    }
    return false;
  }
  function maybeBailOnError(match, key, result) {
    if (isErrorResult(result)) {
      let errorBoundaryId = findNearestBoundary(match, state.matches);
      state.fetchers.delete(key);
      update({
        fetchers: new Map(state.fetchers),
        error: result.value,
        errorBoundaryId
      });
      return true;
    }
    return false;
  }
  async function handleNotFoundNavigation(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    let catchBoundaryId = findNearestCatchBoundary(matches2[0], matches2);
    update({
      location,
      matches: matches2,
      catch: {
        data: null,
        status: 404,
        statusText: "Not Found"
      },
      catchBoundaryId,
      transition: IDLE_TRANSITION
    });
  }
  async function handleActionSubmissionNavigation(location, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "actionSubmission",
      submission,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    let controller = new AbortController();
    pendingNavigationController = controller;
    if (!isIndexRequestAction(submission.action) && matches2[matches2.length - 1].route.id.endsWith("/index")) {
      matches2 = matches2.slice(0, -1);
    }
    let leafMatch = matches2.slice(-1)[0];
    let result = await callAction(submission, leafMatch, controller.signal);
    if (controller.signal.aborted) {
      return;
    }
    if (isRedirectResult(result)) {
      let locationState = {
        isRedirect: true,
        type: "action"
      };
      init.onRedirect(result.value.location, locationState);
      return;
    }
    if (isCatchResult(result)) {
      let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId([result], matches2, result);
      update({
        transition: IDLE_TRANSITION,
        catch: catchVal,
        catchBoundaryId
      });
      return;
    }
    let loadTransition = {
      state: "loading",
      type: "actionReload",
      submission,
      location
    };
    update({
      transition: loadTransition,
      actionData: {
        [leafMatch.route.id]: result.value
      }
    });
    await loadPageData(location, matches2, submission, leafMatch.route.id, result);
  }
  async function handleLoaderSubmissionNavigation(location, submission, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "submitting",
      type: "loaderSubmission",
      submission,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2, submission);
  }
  async function handleHashChange(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await Promise.resolve();
    update({
      location,
      matches: matches2,
      transition: IDLE_TRANSITION
    });
  }
  async function handleLoad(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalLoad",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2);
  }
  async function handleLoaderRedirect(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "normalRedirect",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2);
  }
  async function handleLoaderSubmissionRedirect(location, matches2) {
    abortNormalNavigation();
    invariant(state.transition.type === "loaderSubmission", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "loaderSubmissionRedirect",
      submission,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2, submission);
  }
  async function handleFetchActionRedirect(location, matches2) {
    abortNormalNavigation();
    let transition = {
      state: "loading",
      type: "fetchActionRedirect",
      submission: void 0,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2);
  }
  async function handleActionRedirect(location, matches2) {
    abortNormalNavigation();
    invariant(state.transition.type === "actionSubmission" || state.transition.type === "actionReload", `Unexpected transition: ${JSON.stringify(state.transition)}`);
    let {
      submission
    } = state.transition;
    let transition = {
      state: "loading",
      type: "actionRedirect",
      submission,
      location
    };
    update({
      transition,
      nextMatches: matches2
    });
    await loadPageData(location, matches2, submission);
  }
  function isHashChangeOnly(location) {
    return createHref(state.location) === createHref(location) && state.location.hash !== location.hash;
  }
  async function loadPageData(location, matches2, submission, submissionRouteId, actionResult) {
    let maybeActionErrorResult = actionResult && isErrorResult(actionResult) ? actionResult : void 0;
    let maybeActionCatchResult = actionResult && isCatchResult(actionResult) ? actionResult : void 0;
    let controller = new AbortController();
    pendingNavigationController = controller;
    navigationLoadId = ++incrementingLoadId;
    let results = await callLoaders(state, createUrl(createHref(location)), matches2, controller.signal, maybeActionErrorResult, maybeActionCatchResult, submission, submissionRouteId);
    if (controller.signal.aborted) {
      return;
    }
    let redirect2 = findRedirect(results);
    if (redirect2) {
      if (state.transition.type === "actionReload") {
        let locationState = {
          isRedirect: true,
          type: "action"
        };
        init.onRedirect(redirect2.location, locationState);
      } else if (state.transition.type === "loaderSubmission") {
        let locationState = {
          isRedirect: true,
          type: "loaderSubmission"
        };
        init.onRedirect(redirect2.location, locationState);
      } else {
        let locationState = {
          isRedirect: true,
          type: "loader"
        };
        init.onRedirect(redirect2.location, locationState);
      }
      return;
    }
    let [error, errorBoundaryId] = findErrorAndBoundaryId(results, matches2, maybeActionErrorResult);
    let [catchVal, catchBoundaryId] = await findCatchAndBoundaryId(results, matches2, maybeActionErrorResult);
    let abortedIds = abortStaleFetchLoads(navigationLoadId);
    if (abortedIds) {
      markFetchersDone(abortedIds);
    }
    update({
      location,
      matches: matches2,
      error,
      errorBoundaryId,
      catch: catchVal,
      catchBoundaryId,
      loaderData: makeLoaderData(state, results, matches2),
      actionData: state.transition.type === "actionReload" ? state.actionData : void 0,
      transition: IDLE_TRANSITION,
      fetchers: abortedIds ? new Map(state.fetchers) : state.fetchers
    });
  }
  function abortNormalNavigation() {
    var _pendingNavigationCon;
    (_pendingNavigationCon = pendingNavigationController) === null || _pendingNavigationCon === void 0 ? void 0 : _pendingNavigationCon.abort();
  }
  function abortFetcher(key) {
    let controller = fetchControllers.get(key);
    invariant(controller, `Expected fetch controller: ${key}`);
    controller.abort();
    fetchControllers.delete(key);
  }
  return {
    send,
    getState,
    getFetcher,
    deleteFetcher,
    dispose,
    get _internalFetchControllers() {
      return fetchControllers;
    }
  };
}
function isIndexRequestAction(action2) {
  let indexRequest = false;
  let searchParams = new URLSearchParams(action2.split("?", 2)[1] || "");
  for (let param of searchParams.getAll("index")) {
    if (!param) {
      indexRequest = true;
    }
  }
  return indexRequest;
}
async function callLoaders(state, url2, matches, signal, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher) {
  let matchesToLoad = filterMatchesToLoad(state, url2, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher);
  return Promise.all(matchesToLoad.map((match) => callLoader(match, url2, signal)));
}
async function callLoader(match, url2, signal) {
  invariant(match.route.loader, `Expected loader for ${match.route.id}`);
  try {
    let {
      params
    } = match;
    let value = await match.route.loader({
      params,
      url: url2,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
async function callAction(submission, match, signal) {
  if (!match.route.action) {
    throw new Error(`Route "${match.route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);
  }
  try {
    let value = await match.route.action({
      url: createUrl(submission.action),
      params: match.params,
      submission,
      signal
    });
    return {
      match,
      value
    };
  } catch (error) {
    return {
      match,
      value: error
    };
  }
}
function filterMatchesToLoad(state, url2, matches, actionErrorResult, actionCatchResult, submission, submissionRouteId, fetcher) {
  if (submissionRouteId && (actionCatchResult || actionErrorResult)) {
    let foundProblematicRoute = false;
    matches = matches.filter((match) => {
      if (foundProblematicRoute) {
        return false;
      }
      if (match.route.id === submissionRouteId) {
        foundProblematicRoute = true;
        return false;
      }
      return true;
    });
  }
  let isNew = (match, index) => {
    if (!state.matches[index])
      return true;
    return match.route.id !== state.matches[index].route.id;
  };
  let matchPathChanged = (match, index) => {
    var _state$matches$index$;
    return state.matches[index].pathname !== match.pathname || ((_state$matches$index$ = state.matches[index].route.path) === null || _state$matches$index$ === void 0 ? void 0 : _state$matches$index$.endsWith("*")) && state.matches[index].params["*"] !== match.params["*"];
  };
  let filterByRouteProps = (match, index) => {
    if (!match.route.loader) {
      return false;
    }
    if (isNew(match, index) || matchPathChanged(match, index)) {
      return true;
    }
    if (match.route.shouldReload) {
      let prevUrl = createUrl(createHref(state.location));
      return match.route.shouldReload({
        prevUrl,
        url: url2,
        submission,
        params: match.params
      });
    }
    return true;
  };
  let isInRootCatchBoundary = state.matches.length === 1;
  if (isInRootCatchBoundary) {
    return matches.filter((match) => !!match.route.loader);
  }
  if ((fetcher === null || fetcher === void 0 ? void 0 : fetcher.type) === "actionReload") {
    return matches.filter(filterByRouteProps);
  } else if (state.transition.type === "actionReload" || state.transition.type === "actionRedirect" || createHref(url2) === createHref(state.location) || url2.searchParams.toString() !== state.location.search) {
    return matches.filter(filterByRouteProps);
  }
  return matches.filter((match, index, arr) => {
    if ((actionErrorResult || actionCatchResult) && arr.length - 1 === index) {
      return false;
    }
    return match.route.loader && (isNew(match, index) || matchPathChanged(match, index));
  });
}
function isRedirectResult(result) {
  return result.value instanceof TransitionRedirect;
}
function createHref(location) {
  return location.pathname + location.search;
}
function findRedirect(results) {
  for (let result of results) {
    if (isRedirectResult(result)) {
      return result.value;
    }
  }
  return null;
}
async function findCatchAndBoundaryId(results, matches, actionCatchResult) {
  let loaderCatchResult;
  for (let result of results) {
    if (isCatchResult(result)) {
      loaderCatchResult = result;
      break;
    }
  }
  let extractCatchData = async (res) => ({
    status: res.status,
    statusText: res.statusText,
    data: res.data
  });
  if (actionCatchResult && loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(actionCatchResult.value), boundaryId];
  }
  if (loaderCatchResult) {
    let boundaryId = findNearestCatchBoundary(loaderCatchResult.match, matches);
    return [await extractCatchData(loaderCatchResult.value), boundaryId];
  }
  return [void 0, void 0];
}
function findErrorAndBoundaryId(results, matches, actionErrorResult) {
  let loaderErrorResult;
  for (let result of results) {
    if (isErrorResult(result)) {
      loaderErrorResult = result;
      break;
    }
  }
  if (actionErrorResult && loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (actionErrorResult) {
    let boundaryId = findNearestBoundary(actionErrorResult.match, matches);
    return [actionErrorResult.value, boundaryId];
  }
  if (loaderErrorResult) {
    let boundaryId = findNearestBoundary(loaderErrorResult.match, matches);
    return [loaderErrorResult.value, boundaryId];
  }
  return [void 0, void 0];
}
function findNearestCatchBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.CatchBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function findNearestBoundary(matchWithError, matches) {
  let nearestBoundaryId = null;
  for (let match of matches) {
    if (match.route.ErrorBoundary) {
      nearestBoundaryId = match.route.id;
    }
    if (match === matchWithError) {
      break;
    }
  }
  return nearestBoundaryId;
}
function makeLoaderData(state, results, matches) {
  let newData = {};
  for (let {
    match,
    value
  } of results) {
    newData[match.route.id] = value;
  }
  let loaderData = {};
  for (let {
    route
  } of matches) {
    let value = newData[route.id] !== void 0 ? newData[route.id] : state.loaderData[route.id];
    if (value !== void 0) {
      loaderData[route.id] = value;
    }
  }
  return loaderData;
}
function isCatchResult(result) {
  return result.value instanceof CatchValue;
}
function isErrorResult(result) {
  return result.value instanceof Error;
}
function createUrl(href) {
  return new URL(href, window.location.origin);
}

// node_modules/@remix-run/react/esm/routes.js
function createClientRoute(entryRoute, routeModulesCache, Component) {
  return {
    caseSensitive: !!entryRoute.caseSensitive,
    element: /* @__PURE__ */ React__default2.createElement(Component, {
      id: entryRoute.id
    }),
    id: entryRoute.id,
    path: entryRoute.path,
    index: entryRoute.index,
    module: entryRoute.module,
    loader: createLoader(entryRoute, routeModulesCache),
    action: createAction(entryRoute),
    shouldReload: createShouldReload(entryRoute, routeModulesCache),
    ErrorBoundary: entryRoute.hasErrorBoundary,
    CatchBoundary: entryRoute.hasCatchBoundary,
    hasLoader: entryRoute.hasLoader
  };
}
function createClientRoutes(routeManifest, routeModulesCache, Component, parentId) {
  return Object.keys(routeManifest).filter((key) => routeManifest[key].parentId === parentId).map((key) => {
    let route = createClientRoute(routeManifest[key], routeModulesCache, Component);
    let children = createClientRoutes(routeManifest, routeModulesCache, Component, route.id);
    if (children.length > 0)
      route.children = children;
    return route;
  });
}
function createShouldReload(route, routeModules) {
  let shouldReload = (arg) => {
    let module = routeModules[route.id];
    invariant(module, `Expected route module to be loaded for ${route.id}`);
    if (module.unstable_shouldReload) {
      return module.unstable_shouldReload(arg);
    }
    return true;
  };
  return shouldReload;
}
async function loadRouteModuleWithBlockingLinks(route, routeModules) {
  let routeModule = await loadRouteModule(route, routeModules);
  await prefetchStyleLinks(routeModule);
  return routeModule;
}
function createLoader(route, routeModules) {
  let loader3 = async ({
    url: url2,
    signal,
    submission
  }) => {
    if (route.hasLoader) {
      let [result] = await Promise.all([fetchData(url2, route.id, signal, submission), loadRouteModuleWithBlockingLinks(route, routeModules)]);
      if (result instanceof Error)
        throw result;
      let redirect2 = await checkRedirect(result);
      if (redirect2)
        return redirect2;
      if (isCatchResponse2(result)) {
        throw new CatchValue(result.status, result.statusText, await extractData2(result.clone()));
      }
      return extractData2(result);
    } else {
      await loadRouteModuleWithBlockingLinks(route, routeModules);
    }
  };
  return loader3;
}
function createAction(route) {
  if (!route.hasAction)
    return void 0;
  let action2 = async ({
    url: url2,
    signal,
    submission
  }) => {
    let result = await fetchData(url2, route.id, signal, submission);
    if (result instanceof Error) {
      throw result;
    }
    let redirect2 = await checkRedirect(result);
    if (redirect2)
      return redirect2;
    if (isCatchResponse2(result)) {
      throw new CatchValue(result.status, result.statusText, await extractData2(result.clone()));
    }
    return extractData2(result);
  };
  return action2;
}
async function checkRedirect(response) {
  if (isRedirectResponse2(response)) {
    let url2 = new URL(response.headers.get("X-Remix-Redirect"), window.location.origin);
    if (url2.origin !== window.location.origin) {
      await new Promise(() => {
        window.location.replace(url2.href);
      });
    } else {
      return new TransitionRedirect(url2.pathname + url2.search);
    }
  }
  return null;
}

// node_modules/@remix-run/react/esm/components.js
var RemixEntryContext = /* @__PURE__ */ React__default3.createContext(void 0);
function useRemixEntryContext() {
  let context = React__default3.useContext(RemixEntryContext);
  invariant(context, "You must render this element inside a <Remix> element");
  return context;
}
function RemixEntry({
  context: entryContext,
  action: action2,
  location: historyLocation,
  navigator: _navigator,
  static: staticProp = false
}) {
  let {
    manifest,
    routeData: documentLoaderData,
    actionData: documentActionData,
    routeModules,
    serverHandoffString,
    appState: entryComponentDidCatchEmulator
  } = entryContext;
  let clientRoutes = React__default3.useMemo(() => createClientRoutes(manifest.routes, routeModules, RemixRoute), [manifest, routeModules]);
  let [clientState, setClientState] = React__default3.useState(entryComponentDidCatchEmulator);
  let [transitionManager] = React__default3.useState(() => {
    return createTransitionManager({
      routes: clientRoutes,
      actionData: documentActionData,
      loaderData: documentLoaderData,
      location: historyLocation,
      catch: entryComponentDidCatchEmulator.catch,
      catchBoundaryId: entryComponentDidCatchEmulator.catchBoundaryRouteId,
      onRedirect: _navigator.replace,
      onChange: (state) => {
        setClientState({
          catch: state.catch,
          error: state.error,
          catchBoundaryRouteId: state.catchBoundaryId,
          loaderBoundaryRouteId: state.errorBoundaryId,
          renderBoundaryRouteId: null,
          trackBoundaries: false,
          trackCatchBoundaries: false
        });
      }
    });
  });
  let navigator = React__default3.useMemo(() => {
    let push = (to, state) => {
      return transitionManager.getState().transition.state !== "idle" ? _navigator.replace(to, state) : _navigator.push(to, state);
    };
    return {
      ..._navigator,
      push
    };
  }, [_navigator, transitionManager]);
  let {
    location,
    matches,
    loaderData,
    actionData
  } = transitionManager.getState();
  React__default3.useEffect(() => {
    let {
      location: location2
    } = transitionManager.getState();
    if (historyLocation === location2)
      return;
    transitionManager.send({
      type: "navigation",
      location: historyLocation,
      submission: consumeNextNavigationSubmission(),
      action: action2
    });
  }, [transitionManager, historyLocation, action2]);
  let ssrErrorBeforeRoutesRendered = clientState.error && clientState.renderBoundaryRouteId === null && clientState.loaderBoundaryRouteId === null ? deserializeError(clientState.error) : void 0;
  let ssrCatchBeforeRoutesRendered = clientState.catch && clientState.catchBoundaryRouteId === null ? clientState.catch : void 0;
  return /* @__PURE__ */ React__default3.createElement(RemixEntryContext.Provider, {
    value: {
      matches,
      manifest,
      appState: clientState,
      routeModules,
      serverHandoffString,
      clientRoutes,
      routeData: loaderData,
      actionData,
      transitionManager
    }
  }, /* @__PURE__ */ React__default3.createElement(RemixErrorBoundary, {
    location,
    component: RemixRootDefaultErrorBoundary,
    error: ssrErrorBeforeRoutesRendered
  }, /* @__PURE__ */ React__default3.createElement(RemixCatchBoundary, {
    location,
    component: RemixRootDefaultCatchBoundary,
    catch: ssrCatchBeforeRoutesRendered
  }, /* @__PURE__ */ React__default3.createElement(Router, {
    navigationType: action2,
    location,
    navigator,
    static: staticProp
  }, /* @__PURE__ */ React__default3.createElement(Routes, null)))));
}
function deserializeError(data) {
  let error = new Error(data.message);
  error.stack = data.stack;
  return error;
}
function Routes() {
  let {
    clientRoutes
  } = useRemixEntryContext();
  let element = useRoutes(clientRoutes) || clientRoutes[0].element;
  return element;
}
var RemixRouteContext = /* @__PURE__ */ React__default3.createContext(void 0);
function useRemixRouteContext() {
  let context = React__default3.useContext(RemixRouteContext);
  invariant(context, "You must render this element in a remix route element");
  return context;
}
function DefaultRouteComponent({
  id
}) {
  throw new Error(`Route "${id}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`);
}
function RemixRoute({
  id
}) {
  let location = useLocation();
  let {
    routeData,
    routeModules,
    appState
  } = useRemixEntryContext();
  let data = routeData[id];
  let {
    default: Component,
    CatchBoundary: CatchBoundary3,
    ErrorBoundary: ErrorBoundary3
  } = routeModules[id];
  let element = Component ? /* @__PURE__ */ React__default3.createElement(Component, null) : /* @__PURE__ */ React__default3.createElement(DefaultRouteComponent, {
    id
  });
  let context = {
    data,
    id
  };
  if (CatchBoundary3) {
    let maybeServerCaught = appState.catch && appState.catchBoundaryRouteId === id ? appState.catch : void 0;
    if (appState.trackCatchBoundaries) {
      appState.catchBoundaryRouteId = id;
    }
    context = maybeServerCaught ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in a catch boundary.");
        return void 0;
      }
    } : {
      id,
      data
    };
    element = /* @__PURE__ */ React__default3.createElement(RemixCatchBoundary, {
      location,
      component: CatchBoundary3,
      catch: maybeServerCaught
    }, element);
  }
  if (ErrorBoundary3) {
    let maybeServerRenderError = appState.error && (appState.renderBoundaryRouteId === id || appState.loaderBoundaryRouteId === id) ? deserializeError(appState.error) : void 0;
    if (appState.trackBoundaries) {
      appState.renderBoundaryRouteId = id;
    }
    context = maybeServerRenderError ? {
      id,
      get data() {
        console.error("You cannot `useLoaderData` in an error boundary.");
        return void 0;
      }
    } : {
      id,
      data
    };
    element = /* @__PURE__ */ React__default3.createElement(RemixErrorBoundary, {
      location,
      component: ErrorBoundary3,
      error: maybeServerRenderError
    }, element);
  }
  return /* @__PURE__ */ React__default3.createElement(RemixRouteContext.Provider, {
    value: context
  }, element);
}
function usePrefetchBehavior(prefetch, theirElementProps) {
  let [maybePrefetch, setMaybePrefetch] = React__default3.useState(false);
  let [shouldPrefetch, setShouldPrefetch] = React__default3.useState(false);
  let {
    onFocus,
    onBlur,
    onMouseEnter,
    onMouseLeave,
    onTouchStart
  } = theirElementProps;
  React__default3.useEffect(() => {
    if (prefetch === "render") {
      setShouldPrefetch(true);
    }
  }, [prefetch]);
  let setIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(true);
    }
  };
  let cancelIntent = () => {
    if (prefetch === "intent") {
      setMaybePrefetch(false);
    }
  };
  React__default3.useEffect(() => {
    if (maybePrefetch) {
      let id = setTimeout(() => {
        setShouldPrefetch(true);
      }, 100);
      return () => {
        clearTimeout(id);
      };
    }
  }, [maybePrefetch]);
  return [shouldPrefetch, {
    onFocus: composeEventHandlers(onFocus, setIntent),
    onBlur: composeEventHandlers(onBlur, cancelIntent),
    onMouseEnter: composeEventHandlers(onMouseEnter, setIntent),
    onMouseLeave: composeEventHandlers(onMouseLeave, cancelIntent),
    onTouchStart: composeEventHandlers(onTouchStart, setIntent)
  }];
}
var Link = /* @__PURE__ */ React__default3.forwardRef(({
  to,
  prefetch = "none",
  ...props
}, forwardedRef) => {
  let href = useHref(to);
  let [shouldPrefetch, prefetchHandlers] = usePrefetchBehavior(prefetch, props);
  return /* @__PURE__ */ React__default3.createElement(React__default3.Fragment, null, /* @__PURE__ */ React__default3.createElement(Link$1, _extends({
    ref: forwardedRef,
    to
  }, prefetchHandlers, props)), shouldPrefetch ? /* @__PURE__ */ React__default3.createElement(PrefetchPageLinks, {
    page: href
  }) : null);
});
function composeEventHandlers(theirHandler, ourHandler) {
  return (event) => {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      ourHandler(event);
    }
  };
}
function Links() {
  let {
    matches,
    routeModules,
    manifest
  } = useRemixEntryContext();
  let links3 = React__default3.useMemo(() => getLinksForMatches(matches, routeModules, manifest), [matches, routeModules, manifest]);
  return /* @__PURE__ */ React__default3.createElement(React__default3.Fragment, null, links3.map((link) => isPageLinkDescriptor(link) ? /* @__PURE__ */ React__default3.createElement(PrefetchPageLinks, _extends({
    key: link.page
  }, link)) : /* @__PURE__ */ React__default3.createElement("link", _extends({
    key: link.rel + link.href
  }, link))));
}
function PrefetchPageLinks({
  page,
  ...dataLinkProps
}) {
  let {
    clientRoutes
  } = useRemixEntryContext();
  let matches = React__default3.useMemo(() => matchClientRoutes(clientRoutes, page), [clientRoutes, page]);
  if (!matches) {
    console.warn(`Tried to prefetch ${page} but no routes matched.`);
    return null;
  }
  return /* @__PURE__ */ React__default3.createElement(PrefetchPageLinksImpl, _extends({
    page,
    matches
  }, dataLinkProps));
}
function usePrefetchedStylesheets(matches) {
  let {
    routeModules
  } = useRemixEntryContext();
  let [styleLinks, setStyleLinks] = React__default3.useState([]);
  React__default3.useEffect(() => {
    let interrupted = false;
    getStylesheetPrefetchLinks(matches, routeModules).then((links3) => {
      if (!interrupted)
        setStyleLinks(links3);
    });
    return () => {
      interrupted = true;
    };
  }, [matches, routeModules]);
  return styleLinks;
}
function PrefetchPageLinksImpl({
  page,
  matches: nextMatches,
  ...linkProps
}) {
  let location = useLocation();
  let {
    matches,
    manifest
  } = useRemixEntryContext();
  let newMatchesForData = React__default3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location, "data"), [page, nextMatches, matches, location]);
  let newMatchesForAssets = React__default3.useMemo(() => getNewMatchesForLinks(page, nextMatches, matches, location, "assets"), [page, nextMatches, matches, location]);
  let dataHrefs = React__default3.useMemo(() => getDataLinkHrefs(page, newMatchesForData, manifest), [newMatchesForData, page, manifest]);
  let moduleHrefs = React__default3.useMemo(() => getModuleLinkHrefs(newMatchesForAssets, manifest), [newMatchesForAssets, manifest]);
  let styleLinks = usePrefetchedStylesheets(newMatchesForAssets);
  return /* @__PURE__ */ React__default3.createElement(React__default3.Fragment, null, dataHrefs.map((href) => /* @__PURE__ */ React__default3.createElement("link", _extends({
    key: href,
    rel: "prefetch",
    as: "fetch",
    href
  }, linkProps))), moduleHrefs.map((href) => /* @__PURE__ */ React__default3.createElement("link", _extends({
    key: href,
    rel: "modulepreload",
    href
  }, linkProps))), styleLinks.map((link) => /* @__PURE__ */ React__default3.createElement("link", _extends({
    key: link.href
  }, link))));
}
function Meta() {
  let {
    matches,
    routeData,
    routeModules
  } = useRemixEntryContext();
  let location = useLocation();
  let meta6 = {};
  let parentsData = {};
  for (let match of matches) {
    let routeId = match.route.id;
    let data = routeData[routeId];
    let params = match.params;
    let routeModule = routeModules[routeId];
    if (routeModule.meta) {
      let routeMeta = typeof routeModule.meta === "function" ? routeModule.meta({
        data,
        parentsData,
        params,
        location
      }) : routeModule.meta;
      Object.assign(meta6, routeMeta);
    }
    parentsData[routeId] = data;
  }
  return /* @__PURE__ */ React__default3.createElement(React__default3.Fragment, null, Object.keys(meta6).map((name) => {
    let value = meta6[name];
    let isOpenGraphTag = name.startsWith("og:");
    return name === "title" ? /* @__PURE__ */ React__default3.createElement("title", {
      key: "title"
    }, meta6[name]) : Array.isArray(value) ? value.map((content) => isOpenGraphTag ? /* @__PURE__ */ React__default3.createElement("meta", {
      key: name + content,
      property: name,
      content
    }) : /* @__PURE__ */ React__default3.createElement("meta", {
      key: name + content,
      name,
      content
    })) : isOpenGraphTag ? /* @__PURE__ */ React__default3.createElement("meta", {
      key: name,
      property: name,
      content: value
    }) : /* @__PURE__ */ React__default3.createElement("meta", {
      key: name,
      name,
      content: value
    });
  }));
}
function Scripts(props) {
  let {
    manifest,
    matches,
    pendingLocation,
    clientRoutes,
    serverHandoffString
  } = useRemixEntryContext();
  let initialScripts = React__default3.useMemo(() => {
    let contextScript = serverHandoffString ? `window.__remixContext = ${serverHandoffString};` : "";
    let routeModulesScript = `${matches.map((match, index) => `import * as route${index} from ${JSON.stringify(manifest.routes[match.route.id].module)};`).join("\n")}
window.__remixRouteModules = {${matches.map((match, index) => `${JSON.stringify(match.route.id)}:route${index}`).join(",")}};`;
    return /* @__PURE__ */ React__default3.createElement(React__default3.Fragment, null, /* @__PURE__ */ React__default3.createElement("script", _extends({}, props, {
      suppressHydrationWarning: true,
      dangerouslySetInnerHTML: createHtml(contextScript)
    })), /* @__PURE__ */ React__default3.createElement("script", _extends({}, props, {
      src: manifest.url
    })), /* @__PURE__ */ React__default3.createElement("script", _extends({}, props, {
      dangerouslySetInnerHTML: createHtml(routeModulesScript),
      type: "module"
    })), /* @__PURE__ */ React__default3.createElement("script", _extends({}, props, {
      src: manifest.entry.module,
      type: "module"
    })));
  }, []);
  let nextMatches = React__default3.useMemo(() => {
    if (pendingLocation) {
      let matches2 = matchClientRoutes(clientRoutes, pendingLocation);
      invariant(matches2, `No routes match path "${pendingLocation.pathname}"`);
      return matches2;
    }
    return [];
  }, [pendingLocation, clientRoutes]);
  let routePreloads = matches.concat(nextMatches).map((match) => {
    let route = manifest.routes[match.route.id];
    return (route.imports || []).concat([route.module]);
  }).flat(1);
  let preloads = manifest.entry.imports.concat(routePreloads);
  return /* @__PURE__ */ React__default3.createElement(React__default3.Fragment, null, dedupe2(preloads).map((path) => /* @__PURE__ */ React__default3.createElement("link", {
    key: path,
    rel: "modulepreload",
    href: path,
    crossOrigin: props.crossOrigin
  })), initialScripts);
}
function dedupe2(array) {
  return [...new Set(array)];
}
var Form = /* @__PURE__ */ React__default3.forwardRef((props, ref) => {
  return /* @__PURE__ */ React__default3.createElement(FormImpl, _extends({}, props, {
    ref
  }));
});
var FormImpl = /* @__PURE__ */ React__default3.forwardRef(({
  reloadDocument = false,
  replace = false,
  method = "get",
  action: action2 = ".",
  encType = "application/x-www-form-urlencoded",
  fetchKey,
  onSubmit,
  ...props
}, forwardedRef) => {
  let submit = useSubmitImpl(fetchKey);
  let formMethod = method.toLowerCase() === "get" ? "get" : "post";
  let formAction = useFormAction(action2, formMethod);
  let formRef = React__default3.useRef();
  let ref = useComposedRefs(forwardedRef, formRef);
  let clickedButtonRef = React__default3.useRef();
  React__default3.useEffect(() => {
    let form = formRef.current;
    if (!form)
      return;
    function handleClick(event) {
      if (!(event.target instanceof HTMLElement))
        return;
      let submitButton = event.target.closest("button,input[type=submit]");
      if (submitButton && submitButton.type === "submit") {
        clickedButtonRef.current = submitButton;
      }
    }
    form.addEventListener("click", handleClick);
    return () => {
      form && form.removeEventListener("click", handleClick);
    };
  }, []);
  return /* @__PURE__ */ React__default3.createElement("form", _extends({
    ref,
    method: formMethod,
    action: formAction,
    encType,
    onSubmit: reloadDocument ? void 0 : (event) => {
      onSubmit && onSubmit(event);
      if (event.defaultPrevented)
        return;
      event.preventDefault();
      submit(clickedButtonRef.current || event.currentTarget, {
        method,
        replace
      });
      clickedButtonRef.current = null;
    }
  }, props));
});
function isActionRequestMethod(method) {
  method = method.toLowerCase();
  return method === "post" || method === "put" || method === "patch" || method === "delete";
}
function useFormAction(action2 = ".", method = "get") {
  let {
    id
  } = useRemixRouteContext();
  let path = useResolvedPath(action2);
  let search = path.search;
  let isIndexRoute = id.endsWith("/index");
  if (action2 === "." && isIndexRoute && isActionRequestMethod(method)) {
    search = search ? search.replace(/^\?/, "?index&") : "?index";
  }
  return path.pathname + search;
}
function useSubmitImpl(key) {
  let navigate = useNavigate();
  let defaultAction = useFormAction();
  let {
    transitionManager
  } = useRemixEntryContext();
  return React__default3.useCallback((target, options = {}) => {
    let method;
    let action2;
    let encType;
    let formData;
    if (isFormElement(target)) {
      let submissionTrigger = options.submissionTrigger;
      method = options.method || target.method;
      action2 = options.action || target.action;
      encType = options.encType || target.enctype;
      formData = new FormData(target);
      if (submissionTrigger && submissionTrigger.name) {
        formData.append(submissionTrigger.name, submissionTrigger.value);
      }
    } else if (isButtonElement(target) || isInputElement(target) && (target.type === "submit" || target.type === "image")) {
      let form = target.form;
      if (form == null) {
        throw new Error(`Cannot submit a <button> without a <form>`);
      }
      method = options.method || target.getAttribute("formmethod") || form.method;
      action2 = options.action || target.getAttribute("formaction") || form.action;
      encType = options.encType || target.getAttribute("formenctype") || form.enctype;
      formData = new FormData(form);
      if (target.name) {
        formData.set(target.name, target.value);
      }
    } else {
      if (isHtmlElement(target)) {
        throw new Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);
      }
      method = options.method || "get";
      action2 = options.action || defaultAction;
      encType = options.encType || "application/x-www-form-urlencoded";
      if (target instanceof FormData) {
        formData = target;
      } else {
        formData = new FormData();
        if (target instanceof URLSearchParams) {
          for (let [name, value] of target) {
            formData.append(name, value);
          }
        } else if (target != null) {
          for (let name of Object.keys(target)) {
            formData.append(name, target[name]);
          }
        }
      }
    }
    let {
      protocol,
      host
    } = window.location;
    let url2 = new URL(action2, `${protocol}//${host}`);
    if (method.toLowerCase() === "get") {
      for (let [name, value] of formData) {
        if (typeof value === "string") {
          url2.searchParams.append(name, value);
        } else {
          throw new Error(`Cannot submit binary form data using GET`);
        }
      }
    }
    let submission = {
      formData,
      action: url2.pathname + url2.search,
      method: method.toUpperCase(),
      encType,
      key: Math.random().toString(36).substr(2, 8)
    };
    if (key) {
      transitionManager.send({
        type: "fetcher",
        href: submission.action,
        submission,
        key
      });
    } else {
      setNextNavigationSubmission(submission);
      navigate(url2.pathname + url2.search, {
        replace: options.replace
      });
    }
  }, [defaultAction, key, navigate, transitionManager]);
}
var nextNavigationSubmission;
function setNextNavigationSubmission(submission) {
  nextNavigationSubmission = submission;
}
function consumeNextNavigationSubmission() {
  let submission = nextNavigationSubmission;
  nextNavigationSubmission = void 0;
  return submission;
}
function isHtmlElement(object) {
  return object != null && typeof object.tagName === "string";
}
function isButtonElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "button";
}
function isFormElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "form";
}
function isInputElement(object) {
  return isHtmlElement(object) && object.tagName.toLowerCase() === "input";
}
function useBeforeUnload(callback) {
  React__default3.useEffect(() => {
    window.addEventListener("beforeunload", callback);
    return () => {
      window.removeEventListener("beforeunload", callback);
    };
  }, [callback]);
}
function useLoaderData() {
  return useRemixRouteContext().data;
}
function useActionData() {
  let {
    id: routeId
  } = useRemixRouteContext();
  let {
    transitionManager
  } = useRemixEntryContext();
  let {
    actionData
  } = transitionManager.getState();
  return actionData ? actionData[routeId] : void 0;
}
function useTransition() {
  let {
    transitionManager
  } = useRemixEntryContext();
  return transitionManager.getState().transition;
}
function useComposedRefs(...refs) {
  return React__default3.useCallback((node) => {
    for (let ref of refs) {
      if (ref == null)
        continue;
      if (typeof ref === "function") {
        ref(node);
      } else {
        try {
          ref.current = node;
        } catch (_) {
        }
      }
    }
  }, refs);
}

// node_modules/@remix-run/react/esm/index.js
import { Outlet, useHref as useHref2, useLocation as useLocation3, useNavigate as useNavigate2, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath as useResolvedPath2, useSearchParams } from "https://esm.sh/react-router-dom@6.1.0?no-check";

// node_modules/@remix-run/react/esm/scroll-restoration.js
import {
  createElement,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef
} from "https://esm.sh/react@17.0.2?no-check";
import { useLocation as useLocation2 } from "https://esm.sh/react-router-dom@6.1.0?no-check";
var STORAGE_KEY = "positions";
var positions = {};
if (typeof window !== "undefined") {
  let sessionPositions = sessionStorage.getItem(STORAGE_KEY);
  if (sessionPositions) {
    positions = JSON.parse(sessionPositions);
  }
}
function ScrollRestoration() {
  useScrollRestoration();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  useBeforeUnload(useCallback(() => {
    window.history.scrollRestoration = "auto";
  }, []));
  return /* @__PURE__ */ createElement("script", {
    dangerouslySetInnerHTML: {
      __html: `
          let STORAGE_KEY = ${JSON.stringify(STORAGE_KEY)};
          if (!window.history.state || !window.history.state.key) {
            window.history.replaceState({ key: Math.random().toString(32).slice(2) }, null);
          }
          try {
            let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}')
            let storedY = positions[window.history.state.key];
            if (typeof storedY === 'number') {
              window.scrollTo(0, storedY)
            }
          } catch(error) {
            console.error(error)
            sessionStorage.removeItem(STORAGE_KEY)
          }
        `
    }
  });
}
var hydrated = false;
function useScrollRestoration() {
  let location = useLocation2();
  let transition = useTransition();
  let wasSubmissionRef = useRef(false);
  useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
  useEffect(() => {
    if (transition.location) {
      positions[location.key] = window.scrollY;
    }
  }, [transition, location]);
  useBeforeUnload(useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  }, []));
  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (!hydrated) {
        hydrated = true;
        return;
      }
      let y = positions[location.key];
      if (y) {
        window.scrollTo(0, y);
        return;
      }
      if (location.hash) {
        let el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView();
          return;
        }
      }
      if (wasSubmissionRef.current === true) {
        wasSubmissionRef.current = false;
        return;
      }
      window.scrollTo(0, 0);
    }, [location]);
  }
  useEffect(() => {
    if (transition.submission) {
      wasSubmissionRef.current = true;
    }
  }, [transition]);
}

// node_modules/@remix-run/react/esm/server.js
import { Action as Action2, createPath } from "https://esm.sh/history@5.1.0?no-check";
import React__default4 from "https://esm.sh/react@17.0.2?no-check";
function RemixServer({
  context,
  url: url2
}) {
  if (typeof url2 === "string") {
    url2 = new URL(url2);
  }
  let location = {
    pathname: url2.pathname,
    search: url2.search,
    hash: "",
    state: null,
    key: "default"
  };
  let staticNavigator = {
    createHref(to) {
      return typeof to === "string" ? to : createPath(to);
    },
    push(to) {
      throw new Error(`You cannot use navigator.push() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)})\` somewhere in your app.`);
    },
    replace(to) {
      throw new Error(`You cannot use navigator.replace() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${JSON.stringify(to)}, { replace: true })\` somewhere in your app.`);
    },
    go(delta) {
      throw new Error(`You cannot use navigator.go() on the server because it is a stateless environment. This error was probably triggered when you did a \`navigate(${delta})\` somewhere in your app.`);
    },
    back() {
      throw new Error(`You cannot use navigator.back() on the server because it is a stateless environment.`);
    },
    forward() {
      throw new Error(`You cannot use navigator.forward() on the server because it is a stateless environment.`);
    },
    block() {
      throw new Error(`You cannot use navigator.block() on the server because it is a stateless environment.`);
    }
  };
  return /* @__PURE__ */ React__default4.createElement(RemixEntry, {
    context,
    action: Action2.Pop,
    location,
    navigator: staticNavigator,
    static: true
  });
}

// node_modules/remix/esm/server.js
init_esm();

// build/index.js
import { useEffect as useEffect2, useRef as useRef2 } from "https://esm.sh/react@17.0.2?no-check";

// build/assets.json
var version = "ef00b86e";
var entry = {
  module: "/build/entry.client-KEM5NJM4.js",
  imports: [
    "/build/_shared/chunk-3VKNKTAT.js",
    "/build/_shared/chunk-AKSB5QXU.js"
  ]
};
var routes = {
  root: {
    id: "root",
    path: "",
    module: "/build/root-5CIOO5T3.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: true,
    hasErrorBoundary: true
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    module: "/build/routes/demos/about-PB5QQA5A.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    index: true,
    module: "/build/routes/demos/about/index-6NHL2GX3.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    module: "/build/routes/demos/about/whoa-FTS4YHHM.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    module: "/build/routes/demos/actions-K2NIDXPE.js",
    hasAction: true,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    module: "/build/routes/demos/correct-JLTYRM3I.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    module: "/build/routes/demos/params-UPBRU6EY.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    module: "/build/routes/demos/params/$id-ZVGPIF7Z.js",
    hasAction: false,
    hasLoader: true,
    hasCatchBoundary: true,
    hasErrorBoundary: true
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    index: true,
    module: "/build/routes/demos/params/index-3C3XWELU.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    index: true,
    module: "/build/routes/index-367WEKCX.js",
    hasAction: false,
    hasLoader: true,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  }
};
var url = "/build/manifest-EF00B86E.js";
var assets_default = {
  version,
  entry,
  routes,
  url
};

// build/index.js
var __defProp2 = Object.defineProperty;
var __markAsModule2 = (target) => __defProp2(target, "__esModule", { value: true });
var __export2 = (target, all) => {
  __markAsModule2(target);
  for (var name in all)
    __defProp2(target, name, { get: all[name], enumerable: true });
};
var entry_server_exports = {};
__export2(entry_server_exports, {
  default: () => handleRequest
});
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = renderToString(/* @__PURE__ */ createElement2(RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}
var root_exports = {};
__export2(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links
});
var global_default = "/build/_assets/global-4MW7DZR4.css";
var dark_default = "/build/_assets/dark-APYDFYJA.css";
var links = () => {
  return [
    { rel: "stylesheet", href: global_default },
    {
      rel: "stylesheet",
      href: dark_default,
      media: "(prefers-color-scheme: dark)"
    }
  ];
};
function App() {
  return /* @__PURE__ */ createElement2(Document, null, /* @__PURE__ */ createElement2(Layout, null, /* @__PURE__ */ createElement2(Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ createElement2(Document, {
    title: "Error!"
  }, /* @__PURE__ */ createElement2(Layout, null, /* @__PURE__ */ createElement2("div", null, /* @__PURE__ */ createElement2("h1", null, "There was an error"), /* @__PURE__ */ createElement2("p", null, error.message), /* @__PURE__ */ createElement2("hr", null), /* @__PURE__ */ createElement2("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ createElement2("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ createElement2("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ createElement2(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ createElement2(Layout, null, /* @__PURE__ */ createElement2("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ createElement2("html", {
    lang: "en"
  }, /* @__PURE__ */ createElement2("head", null, /* @__PURE__ */ createElement2("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ createElement2("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ createElement2("title", null, title) : null, /* @__PURE__ */ createElement2(Meta, null), /* @__PURE__ */ createElement2(Links, null)), /* @__PURE__ */ createElement2("body", null, children, /* @__PURE__ */ createElement2(ScrollRestoration, null), /* @__PURE__ */ createElement2(Scripts, null), false));
}
function Layout({ children }) {
  return /* @__PURE__ */ createElement2("div", {
    className: "remix-app"
  }, /* @__PURE__ */ createElement2("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ createElement2("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ createElement2(Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ createElement2(RemixLogo, null)), /* @__PURE__ */ createElement2("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ createElement2("ul", null, /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2("a", {
    href: "https://remix.run/docs"
  }, "Remix Docs")), /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2("a", {
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))))), /* @__PURE__ */ createElement2("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ createElement2("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ createElement2("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ createElement2("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ createElement2("p", null, "\xA9 You!"))));
}
function RemixLogo() {
  return /* @__PURE__ */ createElement2("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, /* @__PURE__ */ createElement2("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ createElement2("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ createElement2("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ createElement2("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ createElement2("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ createElement2("path", {
    d: "M654.54 47.1035H611.788L592.332 74.2395L573.388 47.1035H527.564L568.78 103.168L523.98 161.28H566.732L589.516 130.304L612.3 161.28H658.124L613.068 101.376L654.54 47.1035Z"
  }));
}
var actions_exports = {};
__export2(actions_exports, {
  action: () => action,
  default: () => ActionsDemo,
  meta: () => meta
});
function meta() {
  return { title: "Actions Demo" };
}
var action = async ({ request }) => {
  let formData = await request.formData();
  let answer = formData.get("answer");
  if (typeof answer !== "string") {
    return json("Come on, at least try!", { status: 400 });
  }
  if (answer !== "egg") {
    return json(`Sorry, ${answer} is not right.`, { status: 400 });
  }
  return redirect("/demos/correct");
};
function ActionsDemo() {
  let actionMessage = useActionData();
  let answerRef = useRef2(null);
  useEffect2(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ createElement2("div", {
    className: "remix__page"
  }, /* @__PURE__ */ createElement2("main", null, /* @__PURE__ */ createElement2("h2", null, "Actions!"), /* @__PURE__ */ createElement2("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ createElement2(Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ createElement2("h3", null, "Post an Action"), /* @__PURE__ */ createElement2("p", null, /* @__PURE__ */ createElement2("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ createElement2("label", null, /* @__PURE__ */ createElement2("div", null, "Answer:"), /* @__PURE__ */ createElement2("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ createElement2("div", null, /* @__PURE__ */ createElement2("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ createElement2("p", null, /* @__PURE__ */ createElement2("b", null, actionMessage)) : null)), /* @__PURE__ */ createElement2("aside", null, /* @__PURE__ */ createElement2("h3", null, "Additional Resources"), /* @__PURE__ */ createElement2("ul", null, /* @__PURE__ */ createElement2("li", null, "Guide:", " ", /* @__PURE__ */ createElement2("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ createElement2("li", null, "API:", " ", /* @__PURE__ */ createElement2("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ createElement2("li", null, "API:", " ", /* @__PURE__ */ createElement2("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ createElement2("code", null, "useActionData"))))));
}
var correct_exports = {};
__export2(correct_exports, {
  default: () => NiceWork
});
function NiceWork() {
  return /* @__PURE__ */ createElement2("h1", null, "You got it right!");
}
var params_exports = {};
__export2(params_exports, {
  default: () => Boundaries,
  meta: () => meta2
});
function meta2() {
  return { title: "Boundaries Demo" };
}
function Boundaries() {
  return /* @__PURE__ */ createElement2("div", {
    className: "remix__page"
  }, /* @__PURE__ */ createElement2("main", null, /* @__PURE__ */ createElement2(Outlet, null)), /* @__PURE__ */ createElement2("aside", null, /* @__PURE__ */ createElement2("h2", null, "Click these Links"), /* @__PURE__ */ createElement2("ul", null, /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2(Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2(Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ createElement2("i", null, "one"))), /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2(Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ createElement2("i", null, "two"))), /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2(Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2(Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ createElement2("li", null, /* @__PURE__ */ createElement2(Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}
var params_exports2 = {};
__export2(params_exports2, {
  default: () => Boundaries2
});
function Boundaries2() {
  return /* @__PURE__ */ createElement2(Fragment, null, /* @__PURE__ */ createElement2("h2", null, "Params"), /* @__PURE__ */ createElement2("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ createElement2("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ createElement2("h2", null, "Errors"), /* @__PURE__ */ createElement2("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ createElement2("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ createElement2("h2", null, "Not Found"), /* @__PURE__ */ createElement2("p", null, "(and other", " ", /* @__PURE__ */ createElement2("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ createElement2("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ createElement2("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
}
var id_exports = {};
__export2(id_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => ParamDemo,
  loader: () => loader,
  meta: () => meta3
});
var loader = async ({ params }) => {
  if (params.id === "this-record-does-not-exist") {
    throw new Response("Not Found", { status: 404 });
  }
  if (params.id === "shh-its-a-secret") {
    throw json({ webmasterEmail: "hello@remix.run" }, { status: 401 });
  }
  if (params.id === "kaboom") {
    lol();
  }
  return { param: params.id };
};
function ParamDemo() {
  let data = useLoaderData();
  return /* @__PURE__ */ createElement2("h1", null, "The param is ", /* @__PURE__ */ createElement2("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ createElement2("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ createElement2("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ createElement2("p", null, "There was a problem with your request!", /* @__PURE__ */ createElement2("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ createElement2(Fragment, null, /* @__PURE__ */ createElement2("h2", null, "Oops!"), /* @__PURE__ */ createElement2("p", null, message), /* @__PURE__ */ createElement2("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ createElement2(Fragment, null, /* @__PURE__ */ createElement2("h2", null, "Error!"), /* @__PURE__ */ createElement2("p", null, error.message), /* @__PURE__ */ createElement2("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
var meta3 = ({ data }) => {
  return {
    title: data ? `Param: ${data.param}` : "Oops..."
  };
};
var about_exports = {};
__export2(about_exports, {
  default: () => Index,
  links: () => links2,
  meta: () => meta4
});
var about_default = "/build/_assets/about-GGM5BPB3.css";
var meta4 = () => {
  return {
    title: "About Remix"
  };
};
var links2 = () => {
  return [{ rel: "stylesheet", href: about_default }];
};
function Index() {
  return /* @__PURE__ */ createElement2("div", {
    className: "about"
  }, /* @__PURE__ */ createElement2("div", {
    className: "about__intro"
  }, /* @__PURE__ */ createElement2("h2", null, "About Us"), /* @__PURE__ */ createElement2("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ createElement2("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ createElement2("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ createElement2("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ createElement2("p", null, "Wait a sec...", /* @__PURE__ */ createElement2("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ createElement2("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ createElement2("hr", null), /* @__PURE__ */ createElement2(Outlet, null)));
}
var about_exports2 = {};
__export2(about_exports2, {
  default: () => AboutIndex
});
function AboutIndex() {
  return /* @__PURE__ */ createElement2("div", null, /* @__PURE__ */ createElement2("p", null, "You are looking at the index route for the ", /* @__PURE__ */ createElement2("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ createElement2("p", null, /* @__PURE__ */ createElement2("strong", null, /* @__PURE__ */ createElement2(Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}
var whoa_exports = {};
__export2(whoa_exports, {
  default: () => AboutIndex2
});
function AboutIndex2() {
  return /* @__PURE__ */ createElement2("div", null, /* @__PURE__ */ createElement2("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ createElement2("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ createElement2("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ createElement2("p", null, /* @__PURE__ */ createElement2("strong", null, /* @__PURE__ */ createElement2(Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ createElement2("code", null, "/about"), " index."))));
}
var routes_exports = {};
__export2(routes_exports, {
  default: () => Index2,
  loader: () => loader2,
  meta: () => meta5
});
var loader2 = () => {
  let data = {
    resources: [
      {
        name: "Remix Docs",
        url: "https://remix.run/docs"
      },
      {
        name: "React Router Docs",
        url: "https://reactrouter.com/docs"
      },
      {
        name: "Remix Discord",
        url: "https://discord.gg/VBePs6d"
      }
    ],
    demos: [
      {
        to: "demos/actions",
        name: "Actions"
      },
      {
        to: "demos/about",
        name: "Nested Routes, CSS loading/unloading"
      },
      {
        to: "demos/params",
        name: "URL Params and Error Boundaries"
      }
    ]
  };
  return json(data);
};
var meta5 = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};
function Index2() {
  let data = useLoaderData();
  return /* @__PURE__ */ createElement2("div", {
    className: "remix__page"
  }, /* @__PURE__ */ createElement2("main", null, /* @__PURE__ */ createElement2("h2", null, "Welcome to Remix!!"), /* @__PURE__ */ createElement2("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ createElement2("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ createElement2("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ createElement2("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ createElement2("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ createElement2("aside", null, /* @__PURE__ */ createElement2("h2", null, "Demos In This App"), /* @__PURE__ */ createElement2("ul", null, data.demos.map((demo) => /* @__PURE__ */ createElement2("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ createElement2(Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ createElement2("h2", null, "Resources"), /* @__PURE__ */ createElement2("ul", null, data.resources.map((resource) => /* @__PURE__ */ createElement2("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ createElement2("a", {
    href: resource.url
  }, resource.name))))));
}
var entry2 = { module: entry_server_exports };
var routes2 = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    index: void 0,
    caseSensitive: void 0,
    module: actions_exports
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    index: void 0,
    caseSensitive: void 0,
    module: correct_exports
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    index: void 0,
    caseSensitive: void 0,
    module: params_exports
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: params_exports2
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    index: void 0,
    caseSensitive: void 0,
    module: id_exports
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: about_exports2
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    index: void 0,
    caseSensitive: void 0,
    module: whoa_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// deno/entry.ts
var handler = createRequestHandler(build_exports, {});
var files = new Map();
setInterval(() => {
  files = new Map();
}, 300);
async function denoHandler(_req) {
  try {
    let url2 = new URL(_req.url);
    let headers = new Headers();
    let contentType = mime.getType(url2.pathname);
    if (contentType) {
      headers.set("Content-Type", contentType);
    }
    if (url2.pathname.startsWith("/build/")) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else {
      headers.set("Cache-Control", "public, max-age=600");
    }
    if (files.has(url2.pathname)) {
      return new Response(files.get(url2.pathname), { headers });
    }
    let file = await Deno.readFile(`./public${url2.pathname}`);
    files.set(url2.pathname, file);
    return new Response(file, { headers });
  } catch (e) {
    if (e.code !== "EISDIR" && e.code !== "ENOENT") {
      throw e;
    }
  }
  try {
    return await handler(_req);
  } catch (e) {
    return new Response(e.message || e.toString(), {
      status: 500
    });
    return new Response("Internal Error", { status: 500 });
  }
}
console.log("Listening on http://localhost:8000");
serve(denoHandler);
/**
 * @remix-run/react v0.0.0-experimental-db4e08b8
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v0.0.0-experimental-db4e08b8
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
