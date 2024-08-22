import { createClient, SanityClient } from "next-sanity";

export const client = createClient({
  apiVersion: "v2022-03-07",
  dataset: "production",
  projectId: "59mrl9xu",
  useCdn: false,
});

const builder = imageUrlBuilder(client);
