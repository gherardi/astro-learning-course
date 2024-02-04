import { defineConfig } from 'astro/config';
import AstroDevtoolbarTailwind from 'astro-devtoolbar-tailwind';
import tunnel from 'astro-tunnel';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
  //
  tunnel(), AstroDevtoolbarTailwind(), tailwind()]
});