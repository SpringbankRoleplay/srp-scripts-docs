import nextra from 'nextra'

const withNextra = nextra({})

const isProd = process.env.NODE_ENV === 'production'

export default withNextra({
  ...(isProd && { output: 'export' }),
  trailingSlash: true,
  images: { unoptimized: true },
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