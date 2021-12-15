var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// deno/entry.ts
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
import mime from "https://esm.sh/mime@3.0.0";
import { createRequestHandler } from "https://esm.sh/@remix-run/server-runtime@0.0.0-experimental-c73398fb";

// build/index.js
var build_exports = {};
__export(build_exports, {
  assets: () => assets_default,
  entry: () => entry2,
  routes: () => routes2
});
import {
  Fragment,
  createElement
} from "https://esm.sh/react@17.0.2?no-check";
import { renderToString } from "https://esm.sh/react-dom@17.0.2/server?no-check";

// node_modules/remix/esm/client.js
import { Form, Link, Links, LiveReload, Meta, NavLink, Outlet, PrefetchPageLinks, RemixBrowser, RemixServer, Scripts, ScrollRestoration, useActionData, useBeforeUnload, useCatch, useFetcher, useFetchers, useFormAction, useHref, useLoaderData, useLocation, useMatches, useNavigate, useNavigationType, useOutlet, useOutletContext, useParams, useResolvedPath, useSearchParams, useSubmit, useTransition } from "https://esm.sh/@remix-run/react@0.0.0-experimental-c73398fb?no-check";

// node_modules/remix/esm/server.js
import { createCookie, createCookieSessionStorage, createMemorySessionStorage, createSession, createSessionStorage, isCookie, isSession, json, redirect } from "https://esm.sh/@remix-run/server-runtime@0.0.0-experimental-c73398fb?no-check";

// build/index.js
import { useEffect, useRef } from "https://esm.sh/react@17.0.2?no-check";

// build/assets.json
var version = "ce6ac41d";
var entry = {
  module: "/build/entry.client-2I32ZBOC.js",
  imports: [
    "/build/_shared/chunk-PAAJOYA3.js",
    "/build/_shared/chunk-AKSB5QXU.js"
  ]
};
var routes = {
  root: {
    id: "root",
    path: "",
    module: "/build/root-LOQCW6EO.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: true,
    hasErrorBoundary: true
  },
  "routes/demos/about": {
    id: "routes/demos/about",
    parentId: "root",
    path: "demos/about",
    module: "/build/routes/demos/about-M2CCRZBH.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/about/index": {
    id: "routes/demos/about/index",
    parentId: "routes/demos/about",
    index: true,
    module: "/build/routes/demos/about/index-I2GEQTRB.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/about/whoa": {
    id: "routes/demos/about/whoa",
    parentId: "routes/demos/about",
    path: "whoa",
    module: "/build/routes/demos/about/whoa-IEH52SCO.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/actions": {
    id: "routes/demos/actions",
    parentId: "root",
    path: "demos/actions",
    module: "/build/routes/demos/actions-JOENP2QW.js",
    hasAction: true,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/correct": {
    id: "routes/demos/correct",
    parentId: "root",
    path: "demos/correct",
    module: "/build/routes/demos/correct-M4AHMNOP.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/params": {
    id: "routes/demos/params",
    parentId: "root",
    path: "demos/params",
    module: "/build/routes/demos/params-TWSDWEXT.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/demos/params/$id": {
    id: "routes/demos/params/$id",
    parentId: "routes/demos/params",
    path: ":id",
    module: "/build/routes/demos/params/$id-BEAHB7RM.js",
    hasAction: false,
    hasLoader: true,
    hasCatchBoundary: true,
    hasErrorBoundary: true
  },
  "routes/demos/params/index": {
    id: "routes/demos/params/index",
    parentId: "routes/demos/params",
    index: true,
    module: "/build/routes/demos/params/index-UE4IVIP5.js",
    hasAction: false,
    hasLoader: false,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    index: true,
    module: "/build/routes/index-QUA3R5MC.js",
    hasAction: false,
    hasLoader: true,
    hasCatchBoundary: false,
    hasErrorBoundary: false
  }
};
var url = "/build/manifest-CE6AC41D.js";
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
  let markup = renderToString(/* @__PURE__ */ createElement(RemixServer, {
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
  return /* @__PURE__ */ createElement(Document, null, /* @__PURE__ */ createElement(Layout, null, /* @__PURE__ */ createElement(Outlet, null)));
}
function ErrorBoundary({ error }) {
  console.error(error);
  return /* @__PURE__ */ createElement(Document, {
    title: "Error!"
  }, /* @__PURE__ */ createElement(Layout, null, /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("h1", null, "There was an error"), /* @__PURE__ */ createElement("p", null, error.message), /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement("p", null, "Hey, developer, you should replace this with what you want your users to see."))));
}
function CatchBoundary() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ createElement("p", null, "Oops! Looks like you tried to visit a page that you do not have access to.");
      break;
    case 404:
      message = /* @__PURE__ */ createElement("p", null, "Oops! Looks like you tried to visit a page that does not exist.");
      break;
    default:
      throw new Error(caught.data || caught.statusText);
  }
  return /* @__PURE__ */ createElement(Document, {
    title: `${caught.status} ${caught.statusText}`
  }, /* @__PURE__ */ createElement(Layout, null, /* @__PURE__ */ createElement("h1", null, caught.status, ": ", caught.statusText), message));
}
function Document({
  children,
  title
}) {
  return /* @__PURE__ */ createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ createElement("head", null, /* @__PURE__ */ createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), title ? /* @__PURE__ */ createElement("title", null, title) : null, /* @__PURE__ */ createElement(Meta, null), /* @__PURE__ */ createElement(Links, null)), /* @__PURE__ */ createElement("body", null, children, /* @__PURE__ */ createElement(ScrollRestoration, null), /* @__PURE__ */ createElement(Scripts, null), false));
}
function Layout({ children }) {
  return /* @__PURE__ */ createElement("div", {
    className: "remix-app"
  }, /* @__PURE__ */ createElement("header", {
    className: "remix-app__header"
  }, /* @__PURE__ */ createElement("div", {
    className: "container remix-app__header-content"
  }, /* @__PURE__ */ createElement(Link, {
    to: "/",
    title: "Remix",
    className: "remix-app__header-home-link"
  }, /* @__PURE__ */ createElement(RemixLogo, null)), /* @__PURE__ */ createElement("nav", {
    "aria-label": "Main navigation",
    className: "remix-app__header-nav"
  }, /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(Link, {
    to: "/"
  }, "Home")), /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement("a", {
    href: "https://remix.run/docs"
  }, "Remix Docs")), /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement("a", {
    href: "https://github.com/remix-run/remix"
  }, "GitHub")))))), /* @__PURE__ */ createElement("div", {
    className: "remix-app__main"
  }, /* @__PURE__ */ createElement("div", {
    className: "container remix-app__main-content"
  }, children)), /* @__PURE__ */ createElement("footer", {
    className: "remix-app__footer"
  }, /* @__PURE__ */ createElement("div", {
    className: "container remix-app__footer-content"
  }, /* @__PURE__ */ createElement("p", null, "\xA9 You!"))));
}
function RemixLogo() {
  return /* @__PURE__ */ createElement("svg", {
    viewBox: "0 0 659 165",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    "aria-labelledby": "remix-run-logo-title",
    role: "img",
    width: "106",
    height: "30",
    fill: "currentColor"
  }, /* @__PURE__ */ createElement("title", {
    id: "remix-run-logo-title"
  }, "Remix Logo"), /* @__PURE__ */ createElement("path", {
    d: "M0 161V136H45.5416C53.1486 136 54.8003 141.638 54.8003 145V161H0Z M133.85 124.16C135.3 142.762 135.3 151.482 135.3 161H92.2283C92.2283 158.927 92.2653 157.03 92.3028 155.107C92.4195 149.128 92.5411 142.894 91.5717 130.304C90.2905 111.872 82.3473 107.776 67.7419 107.776H54.8021H0V74.24H69.7918C88.2407 74.24 97.4651 68.632 97.4651 53.784C97.4651 40.728 88.2407 32.816 69.7918 32.816H0V0H77.4788C119.245 0 140 19.712 140 51.2C140 74.752 125.395 90.112 105.665 92.672C122.32 96 132.057 105.472 133.85 124.16Z"
  }), /* @__PURE__ */ createElement("path", {
    d: "M229.43 120.576C225.59 129.536 218.422 133.376 207.158 133.376C194.614 133.376 184.374 126.72 183.35 112.64H263.478V101.12C263.478 70.1437 243.254 44.0317 205.11 44.0317C169.526 44.0317 142.902 69.8877 142.902 105.984C142.902 142.336 169.014 164.352 205.622 164.352C235.83 164.352 256.822 149.76 262.71 123.648L229.43 120.576ZM183.862 92.6717C185.398 81.9197 191.286 73.7277 204.598 73.7277C216.886 73.7277 223.542 82.4317 224.054 92.6717H183.862Z"
  }), /* @__PURE__ */ createElement("path", {
    d: "M385.256 66.5597C380.392 53.2477 369.896 44.0317 349.672 44.0317C332.52 44.0317 320.232 51.7117 314.088 64.2557V47.1037H272.616V161.28H314.088V105.216C314.088 88.0638 318.952 76.7997 332.52 76.7997C345.064 76.7997 348.136 84.9917 348.136 100.608V161.28H389.608V105.216C389.608 88.0638 394.216 76.7997 408.04 76.7997C420.584 76.7997 423.4 84.9917 423.4 100.608V161.28H464.872V89.5997C464.872 65.7917 455.656 44.0317 424.168 44.0317C404.968 44.0317 391.4 53.7597 385.256 66.5597Z"
  }), /* @__PURE__ */ createElement("path", {
    d: "M478.436 47.104V161.28H519.908V47.104H478.436ZM478.18 36.352H520.164V0H478.18V36.352Z"
  }), /* @__PURE__ */ createElement("path", {
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
  let answerRef = useRef(null);
  useEffect(() => {
    if (actionMessage && answerRef.current) {
      answerRef.current.select();
    }
  }, [actionMessage]);
  return /* @__PURE__ */ createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ createElement("main", null, /* @__PURE__ */ createElement("h2", null, "Actions!"), /* @__PURE__ */ createElement("p", null, "This form submission will send a post request that we handle in our `action` export. Any route can export an action to handle data mutations."), /* @__PURE__ */ createElement(Form, {
    method: "post",
    className: "remix__form"
  }, /* @__PURE__ */ createElement("h3", null, "Post an Action"), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("i", null, "What is more useful when it is broken?")), /* @__PURE__ */ createElement("label", null, /* @__PURE__ */ createElement("div", null, "Answer:"), /* @__PURE__ */ createElement("input", {
    ref: answerRef,
    name: "answer",
    type: "text"
  })), /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("button", null, "Answer!")), actionMessage ? /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("b", null, actionMessage)) : null)), /* @__PURE__ */ createElement("aside", null, /* @__PURE__ */ createElement("h3", null, "Additional Resources"), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, "Guide:", " ", /* @__PURE__ */ createElement("a", {
    href: "https://remix.run/guides/data-writes"
  }, "Data Writes")), /* @__PURE__ */ createElement("li", null, "API:", " ", /* @__PURE__ */ createElement("a", {
    href: "https://remix.run/api/conventions#action"
  }, "Route Action Export")), /* @__PURE__ */ createElement("li", null, "API:", " ", /* @__PURE__ */ createElement("a", {
    href: "https://remix.run/api/remix#useactiondata"
  }, /* @__PURE__ */ createElement("code", null, "useActionData"))))));
}
var correct_exports = {};
__export2(correct_exports, {
  default: () => NiceWork
});
function NiceWork() {
  return /* @__PURE__ */ createElement("h1", null, "You got it right!");
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
  return /* @__PURE__ */ createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ createElement("main", null, /* @__PURE__ */ createElement(Outlet, null)), /* @__PURE__ */ createElement("aside", null, /* @__PURE__ */ createElement("h2", null, "Click these Links"), /* @__PURE__ */ createElement("ul", null, /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(Link, {
    to: "."
  }, "Start over")), /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(Link, {
    to: "one"
  }, "Param: ", /* @__PURE__ */ createElement("i", null, "one"))), /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(Link, {
    to: "two"
  }, "Param: ", /* @__PURE__ */ createElement("i", null, "two"))), /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(Link, {
    to: "this-record-does-not-exist"
  }, "This will be a 404")), /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(Link, {
    to: "shh-its-a-secret"
  }, "And this will be 401 Unauthorized")), /* @__PURE__ */ createElement("li", null, /* @__PURE__ */ createElement(Link, {
    to: "kaboom"
  }, "This one will throw an error")))));
}
var params_exports2 = {};
__export2(params_exports2, {
  default: () => Boundaries2
});
function Boundaries2() {
  return /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement("h2", null, "Params"), /* @__PURE__ */ createElement("p", null, "When you name a route segment with $ like", " ", /* @__PURE__ */ createElement("code", null, "routes/users/$userId.js"), ", the $ segment will be parsed from the URL and sent to your loaders and actions by the same name."), /* @__PURE__ */ createElement("h2", null, "Errors"), /* @__PURE__ */ createElement("p", null, "When a route throws and error in it's action, loader, or component, Remix automatically catches it, won't even try to render the component, but it will render the route's ErrorBoundary instead. If the route doesn't have one, it will bubble up to the routes above it until it hits the root."), /* @__PURE__ */ createElement("p", null, "So be as granular as you want with your error handling."), /* @__PURE__ */ createElement("h2", null, "Not Found"), /* @__PURE__ */ createElement("p", null, "(and other", " ", /* @__PURE__ */ createElement("a", {
    href: "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses"
  }, "client errors"), ")"), /* @__PURE__ */ createElement("p", null, "Loaders and Actions can throw a ", /* @__PURE__ */ createElement("code", null, "Response"), " instead of an error and Remix will render the CatchBoundary instead of the component. This is great when loading data from a database isn't found. As soon as you know you can't render the component normally, throw a 404 response and send your app into the catch boundary. Just like error boundaries, catch boundaries bubble, too."));
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
  return /* @__PURE__ */ createElement("h1", null, "The param is ", /* @__PURE__ */ createElement("i", {
    style: { color: "red" }
  }, data.param));
}
function CatchBoundary2() {
  let caught = useCatch();
  let message;
  switch (caught.status) {
    case 401:
      message = /* @__PURE__ */ createElement("p", null, "Looks like you tried to visit a page that you do not have access to. Maybe ask the webmaster (", caught.data.webmasterEmail, ") for access.");
    case 404:
      message = /* @__PURE__ */ createElement("p", null, "Looks like you tried to visit a page that does not exist.");
    default:
      message = /* @__PURE__ */ createElement("p", null, "There was a problem with your request!", /* @__PURE__ */ createElement("br", null), caught.status, " ", caught.statusText);
  }
  return /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement("h2", null, "Oops!"), /* @__PURE__ */ createElement("p", null, message), /* @__PURE__ */ createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
}
function ErrorBoundary2({ error }) {
  console.error(error);
  return /* @__PURE__ */ createElement(Fragment, null, /* @__PURE__ */ createElement("h2", null, "Error!"), /* @__PURE__ */ createElement("p", null, error.message), /* @__PURE__ */ createElement("p", null, "(Isn't it cool that the user gets to stay in context and try a different link in the parts of the UI that didn't blow up?)"));
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
  return /* @__PURE__ */ createElement("div", {
    className: "about"
  }, /* @__PURE__ */ createElement("div", {
    className: "about__intro"
  }, /* @__PURE__ */ createElement("h2", null, "About Us"), /* @__PURE__ */ createElement("p", null, "Ok, so this page isn't really ", /* @__PURE__ */ createElement("em", null, "about us"), ", but we did want to show you a few more things Remix can do."), /* @__PURE__ */ createElement("p", null, "Did you notice that things look a little different on this page? The CSS that we import in the route file and include in its", " ", /* @__PURE__ */ createElement("code", null, "links"), " export is only included on this route and its children."), /* @__PURE__ */ createElement("p", null, "Wait a sec...", /* @__PURE__ */ createElement("em", null, "its children"), "? To understand what we mean by this,", " ", /* @__PURE__ */ createElement("a", {
    href: "https://remix.run/tutorial/4-nested-routes-params"
  }, "read all about nested routes in the docs"), "."), /* @__PURE__ */ createElement("hr", null), /* @__PURE__ */ createElement(Outlet, null)));
}
var about_exports2 = {};
__export2(about_exports2, {
  default: () => AboutIndex
});
function AboutIndex() {
  return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "You are looking at the index route for the ", /* @__PURE__ */ createElement("code", null, "/about"), " URL segment, but there are nested routes as well!"), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("strong", null, /* @__PURE__ */ createElement(Link, {
    to: "whoa"
  }, "Check out one of them here."))));
}
var whoa_exports = {};
__export2(whoa_exports, {
  default: () => AboutIndex2
});
function AboutIndex2() {
  return /* @__PURE__ */ createElement("div", null, /* @__PURE__ */ createElement("p", null, "Whoa, this is a nested route! We render the ", /* @__PURE__ */ createElement("code", null, "/about"), " layout route component, and its ", /* @__PURE__ */ createElement("code", null, "Outlet"), " renders our route component. \u{1F92F}"), /* @__PURE__ */ createElement("p", null, /* @__PURE__ */ createElement("strong", null, /* @__PURE__ */ createElement(Link, {
    to: ".."
  }, "Go back to the ", /* @__PURE__ */ createElement("code", null, "/about"), " index."))));
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
  return /* @__PURE__ */ createElement("div", {
    className: "remix__page"
  }, /* @__PURE__ */ createElement("main", null, /* @__PURE__ */ createElement("h2", null, "Welcome to Remix!!"), /* @__PURE__ */ createElement("p", null, "We're stoked that you're here. \u{1F973}"), /* @__PURE__ */ createElement("p", null, "Feel free to take a look around the code to see how Remix does things, it might be a bit different than what you\u2019re used to. When you're ready to dive deeper, we've got plenty of resources to get you up-and-running quickly."), /* @__PURE__ */ createElement("p", null, "Check out all the demos in this starter, and then just delete the", " ", /* @__PURE__ */ createElement("code", null, "app/routes/demos"), " and ", /* @__PURE__ */ createElement("code", null, "app/styles/demos"), " ", "folders when you're ready to turn this into your next project.")), /* @__PURE__ */ createElement("aside", null, /* @__PURE__ */ createElement("h2", null, "Demos In This App"), /* @__PURE__ */ createElement("ul", null, data.demos.map((demo) => /* @__PURE__ */ createElement("li", {
    key: demo.to,
    className: "remix__page__resource"
  }, /* @__PURE__ */ createElement(Link, {
    to: demo.to,
    prefetch: "intent"
  }, demo.name)))), /* @__PURE__ */ createElement("h2", null, "Resources"), /* @__PURE__ */ createElement("ul", null, data.resources.map((resource) => /* @__PURE__ */ createElement("li", {
    key: resource.url,
    className: "remix__page__resource"
  }, /* @__PURE__ */ createElement("a", {
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
    let file = await Deno.readFile(`./public${url2.pathname}`);
    return new Response(file, { headers });
  } catch (e) {
    if (e.code !== "EACCES" && e.code !== "EISDIR" && e.code !== "ENOENT") {
      throw e;
    }
  }
  try {
    return await handler(_req);
  } catch (e) {
    console.error(e);
    if (false) {
      return new Response(e.message || e.toString(), {
        status: 500
      });
    }
    return new Response("Internal Error", { status: 500 });
  }
}
console.log("Listening on http://localhost:8000");
serve(denoHandler);
/**
 * @remix-run/react v0.0.0-experimental-c73398fb
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v0.0.0-experimental-c73398fb
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
