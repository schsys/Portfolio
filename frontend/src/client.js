import { createClient } from '@sanity/client';
import imgUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJ,
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true
});

const builder = imgUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
