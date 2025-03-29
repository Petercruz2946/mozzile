import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "tgw7kf6f",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
