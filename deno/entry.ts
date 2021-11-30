// @ts-ignore
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

import mime from "mime";
import { createRequestHandler } from "@remix-run/server-runtime";

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

    // @ts-expect-error
    let file = await Deno.readFile(`./public${url.pathname}`);
    files.set(url.pathname, file);

    return new Response(file, { headers });
  } catch (e: any) {
    if (e.code !== "EISDIR" && e.code !== "ENOENT") {
      throw e;
    }
  }

  try {
    return await handler(_req);
  } catch (e: any) {
    // if (process.env.NODE_ENV === "development") {
    return new Response(e.message || e.toString(), {
      status: 500,
    });
    // }

    return new Response("Internal Error", { status: 500 });
  }
}

console.log("Listening on http://localhost:8000");
serve(denoHandler);
