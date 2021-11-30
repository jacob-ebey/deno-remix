// @ts-ignore
import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

import mime from "mime";
import { createRequestHandler } from "@remix-run/server-runtime";

// @ts-expect-error
import * as build from "../build/index.js";

let handler = createRequestHandler(build, {});

async function denoHandler(_req: Request): Promise<Response> {
  try {
    let url = new URL(_req.url);

    // @ts-expect-error
    let file = await Deno.readFile(`./public${url.pathname}`);
    let headers = new Headers();
    let contentType = mime.getType(url.pathname);
    if (contentType) {
      headers.set("Content-Type", contentType);
    }

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
