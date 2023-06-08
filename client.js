import { createClient } from 'next-sanity';

const client = createClient({
  projectId: "7e5xclrs",
  dataset: "production",
  apiVersion: "2023-03-09",
});

export default client;
