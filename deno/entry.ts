import { serve } from "https://deno.land/std@0.114.0/http/server.ts";

import mime from "mime";
import { createRequestHandler } from "@remix-run/server-runtime";

import * as build from "../build/index.js";

let handler = createRequestHandler(build);

async function denoHandler(_req: Request): Promise<Response> {
  try {
    let url = new URL(_req.url);
    let file = await Deno.readFile(`./public${url.pathname}`);
    return new Response(file, {
      headers: {
        "Content-Type": mime.getType(url.pathname),
      },
    });
  } catch (e: any) {
    console.log(e.code);
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
