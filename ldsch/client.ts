import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.SANITY_PROJ,
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: string) => builder.image(source);
