import { generateStaticParamsFor, importPage } from 'nextra/pages'
import { useMDXComponents as getMDXComponents } from '@/mdx-components'

type PageProps = {
  params: Promise<{ lang: string; mdxPath?: string[] }>
}

export const generateStaticParams = generateStaticParamsFor('mdxPath', 'lang')

export const dynamicParams = false

const Wrapper = getMDXComponents().wrapper!

export async function generateMetadata(props: PageProps) {
  const { lang, mdxPath } = await props.params
  const { metadata } = await importPage(mdxPath, lang)
  return metadata
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const { default: MDXContent, toc, metadata, sourceCode } =
    await importPage(params.mdxPath, params.lang)

  return (
    <Wrapper toc={toc} metadata={metadata} sourceCode={sourceCode}>
      <MDXContent {...props} params={params} />
    </Wrapper>
  )
}