const DEFAULT_LOCALE_PATH = '/en/'

export const metadata = { title: 'SRP Scripts' }

export default function RootRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${DEFAULT_LOCALE_PATH}`} />
      <link rel="canonical" href={DEFAULT_LOCALE_PATH} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(DEFAULT_LOCALE_PATH)})`,
        }}
      />
      <a href={DEFAULT_LOCALE_PATH}>Go to the docs</a>
    </>
  )
}
