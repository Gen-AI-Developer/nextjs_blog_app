import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = createClient({
  apiVersion: "v2022-03-07",
  dataset: "production",
  projectId: "59mrl9xu",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
export function urlFor(source: any) {
  return builder.image(source);
}
