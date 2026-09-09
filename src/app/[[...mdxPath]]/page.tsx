import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '@/mdx-components'

type PageProps = {
  params: Promise<{ mdxPath?: string[] }>
}

export const generateStaticParams = generateStaticParamsFor('mdxPath')

// Met output: 'export' bestaat er geen fallback-render,
// dus alles wat niet in generateStaticParams zit hoort een 404 te zijn.
export const dynamicParams = false

const Wrapper = getMDXComponents().wrapper!

export async function generateMetadata(props: PageProps) {
  const { mdxPath } = await props.params
  const { metadata } = await importPage(mdxPath)
  return metadata
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } =
    await importPage(params.mdxPath)

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}