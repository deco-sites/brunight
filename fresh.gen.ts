// DO NOT EDIT. This file is generated by deco.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import { DecoManifest } from "$live/types.ts";
import * as $0 from "./routes/[...catchall].tsx";
import * as $1 from "./routes/_app.tsx";
import * as $2 from "./routes/_middleware.ts";
import * as $3 from "./routes/index.tsx";
import * as $$0 from "./islands/LiveControls.tsx";
import * as $$$0 from "./sections/Banner.tsx";
import * as $$$1 from "./sections/GetStarted.tsx";
import * as $$$2 from "./sections/Head.tsx";
import * as $$$3 from "./sections/Header.tsx";
import * as $$$4 from "./sections/Informacoes.tsx";
import * as $$$5 from "./sections/SectionTitle.tsx";

const manifest: DecoManifest = {
  routes: {
    "./routes/[...catchall].tsx": $0,
    "./routes/_app.tsx": $1,
    "./routes/_middleware.ts": $2,
    "./routes/index.tsx": $3,
  },
  islands: { "./islands/LiveControls.tsx": $$0 },
  sections: {
    "./sections/Banner.tsx": $$$0,
    "./sections/GetStarted.tsx": $$$1,
    "./sections/Head.tsx": $$$2,
    "./sections/Header.tsx": $$$3,
    "./sections/Informacoes.tsx": $$$4,
    "./sections/SectionTitle.tsx": $$$5,
  },
  functions: {},
  schemas: {
    "./sections/Banner.tsx": {
      "inputSchema": {
        "title": " Banner",
        "type": "object",
        "properties": {
          "image": {
            "format": "image-uri",
            "type": "string",
            "title": "Image",
          },
          "imageMobile": {
            "format": "image-uri",
            "type": "string",
            "title": "Image Mobile",
          },
          "altText": {
            "type": "string",
            "title": "Alt Text",
          },
          "title": {
            "type": "string",
            "title": "Title",
          },
          "subTitle": {
            "type": "string",
            "title": "Sub Title",
          },
        },
        "required": [
          "image",
          "imageMobile",
          "altText",
          "title",
          "subTitle",
        ],
      },
      "outputSchema": null,
    },
    "./sections/GetStarted.tsx": {
      "inputSchema": {
        "title": " Get Started",
        "type": "object",
        "properties": {
          "enableInspectVSCode": {
            "type": [
              "boolean",
              "null",
            ],
            "title": "Enable Inspect V S Code",
          },
        },
        "required": [],
      },
      "outputSchema": null,
    },
    "./sections/Head.tsx": {
      "inputSchema": {
        "title": " Head",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "description": {
            "type": "string",
            "title": "Description",
          },
          "url": {
            "type": "string",
            "title": "Url",
          },
          "imageUrl": {
            "type": "string",
            "title": "Image Url",
          },
          "faviconUrl": {
            "type": "string",
            "title": "Favicon Url",
          },
          "styleUrls": {
            "type": "array",
            "items": {
              "type": "string",
            },
            "title": "Style Urls",
          },
          "themeColor": {
            "type": "string",
            "title": "Theme Color",
          },
        },
        "required": [
          "title",
          "description",
          "url",
          "imageUrl",
          "faviconUrl",
          "styleUrls",
          "themeColor",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Header.tsx": {
      "inputSchema": {
        "title": " Header",
        "type": "object",
        "properties": {
          "logoSvg": {
            "type": "string",
            "title": "Logo Svg",
          },
          "navlinks": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "href": {
                  "type": "string",
                  "title": "Href",
                },
                "text": {
                  "type": "string",
                  "title": "Text",
                },
              },
              "required": [
                "href",
                "text",
              ],
            },
            "title": "Navlinks",
          },
          "phoneLabel": {
            "type": "string",
            "title": "Phone Label",
          },
          "phone": {
            "type": "string",
            "title": "Phone",
          },
        },
        "required": [
          "logoSvg",
          "phoneLabel",
          "phone",
        ],
      },
      "outputSchema": null,
    },
    "./sections/Informacoes.tsx": {
      "inputSchema": {
        "title": " Informacoes",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
        },
        "required": [
          "title",
        ],
      },
      "outputSchema": null,
    },
    "./sections/SectionTitle.tsx": {
      "inputSchema": {
        "title": " Section Title",
        "type": "object",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
          },
          "subTitle": {
            "type": [
              "string",
              "null",
            ],
            "title": "Sub Title",
          },
        },
        "required": [
          "title",
        ],
      },
      "outputSchema": null,
    },
  },
  baseUrl: import.meta.url,
  config,
};

// live — this exposes the manifest so the live server can render components dynamically
globalThis.manifest = manifest;

export default manifest;
