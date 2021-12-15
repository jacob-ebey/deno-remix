// @ts-ignore
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";
// @ts-ignore
import mime from "https://esm.sh/mime@3.0.0";
// @ts-ignore
import { createRequestHandler } from "https://esm.sh/@remix-run/server-runtime@0.0.0-experimental-c73398fb";

// @ts-expect-error
import * as build from "../build/index.js";

let handler = createRequestHandler(build, {});

let files = new Map<string, Uint8Array>();

setInterval(() => {
  files = new Map();
}, 300);

async function denoHandler(_req: Request): Promise<Response> {
  try {
    let url = new URL(_req.url);

    let headers = new Headers();
    let contentType = mime.getType(url.pathname);
    if (contentType) {
      headers.set("Content-Type", contentType);
    }

    if (url.pathname.startsWith("/build/")) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else {
      headers.set("Cache-Control", "public, max-age=600");
    }

    if (files.has(url.pathname)) {
      return new Response(files.get(url.pathname), { headers });
    }

    let file = await Deno.readFile(`./public${url.pathname}`);
    files.set(url.pathname, file);

    return new Response(file, { headers });
  } catch (e: any) {
    if (e.code !== "EACCES" && e.code !== "EISDIR" && e.code !== "ENOENT") {
      throw e;
    }
  }

  try {
    return await handler(_req);
  } catch (e: any) {
    console.error(e);
    if (process.env.NODE_ENV === "development") {
      return new Response(e.message || e.toString(), {
        status: 500,
      });
    }

    return new Response("Internal Error", { status: 500 });
  }
}

console.log("Listening on http://localhost:8000");
serve(denoHandler);
