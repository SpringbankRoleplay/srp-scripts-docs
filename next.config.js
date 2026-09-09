export default withNextra({
  ...(isProd && { output: 'export' }),
  trailingSlash: true,
  images: { unoptimized: true },
  ...(!isProd && {
    async redirects() {
      return [{ source: '/', destination: '/en', permanent: false }]
    },
  }),
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './src/mdx-components.tsx',
    },
  },
  webpack(config) {
    config.resolve.alias['next-mdx-import-source-file'] =
      './src/mdx-components.tsx'
    return config
  },
})