import { withNxPWA } from '@nx/next/pwa';
import { withNxReactQuery } from '@nx/next/react-query';
import { withNxSass } from '@nx/next/sass';
import { withNxTailwind } from '@nx/next/tailwind';

const config = {
  // ... other options ...
  experimental: {
    externalDir: true,
  },
  sassOptions: {
    includePaths: ["app/layout"],
  },
};

export default withNxPWA(
  withNxReactQuery(
    withNxSass(
      withNxTailwind(config)
    )
  )
);