import tutorialkit from '@tutorialkit/astro';
import { defineConfig } from 'astro/config';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  integrations: [tutorialkit({
    components: {
      TopBar: './src/components/TopBar.astro',
    },
  })],
  site: 'https://kitten-tutorial.meowingcat.io',
});
