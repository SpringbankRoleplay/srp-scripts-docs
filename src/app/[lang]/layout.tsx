import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { Inter, JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

import '../globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const SITE_URL = 'https://docs.srp-scripts.com'
const REPO = 'https://github.com/SpringbankRoleplay/srp-scripts-docs'

const locales = [
  { locale: 'en', name: 'English' },
  { locale: 'nl', name: 'Nederlands' },
]

export function generateStaticParams() {
  return locales.map(({ locale }) => ({ lang: locale }))
}

export const metadata = {
  title: {
    default: 'SRP Scripts',
    template: '%s – SRP Scripts',
  },
  description: 'Documentation for the FiveM resources by SRP Gaming.',
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'SRP Scripts',
    title: 'SRP Scripts',
    description: 'Documentation for the FiveM resources by SRP Gaming.',
    images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'SRP Scripts' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SRP Scripts',
    description: 'Documentation for the FiveM resources by SRP Gaming.',
    images: ['/logo.png'],
  },
}

const banner = (
  <Banner storageKey="srp-scripts-beta">
    <span className="flex items-center justify-center gap-2">
      <span className="rounded bg-srp-accent/15 px-1.5 py-0.5 text-[11px] font-medium text-srp-accent-hover ring-1 ring-inset ring-srp-accent/25">
        Beta
      </span>
      <span>Docs are still being written — some pages are incomplete.</span>
    </span>
  </Banner>
)

const footer = (
  <Footer className="flex-col items-start text-sm">
    <div className="text-srp-dim">
      Not affiliated with Cfx.re, Take-Two Interactive or Rockstar Games.
    </div>
    <div className="mt-1">© {new Date().getFullYear()} SRP Gaming</div>
  </Footer>
)

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang = 'en' } = await params

  const navbar = (
    <Navbar
      logo={
        <span className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="" width={28} height={28} priority />
          <span className="text-[15px] font-semibold tracking-tight">
            SRP Scripts
          </span>
        </span>
      }
      logoLink={`/${lang}`}
      chatLink="https://discord.gg/5H6kG8XAur"
      projectLink={REPO}
    >
      <Link
        href="https://srp-scripts.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Store"
        className="hidden items-center px-2 md:flex"
      >
        <ShoppingCart className="h-4 w-4" aria-hidden />
      </Link>
    </Navbar>
  )

  return (
    <html
      lang={lang}
      dir="ltr"
      className={`${inter.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <Head color={{ hue: 217, saturation: 91, lightness: 60 }} />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap(`/${lang}`)}
          docsRepositoryBase={`${REPO}/tree/main`}
          sidebar={{ defaultMenuCollapseLevel: 1, toggleButton: true }}
          toc={{ backToTop: null, float: true }}
          editLink="Edit this page on GitHub"
          feedback={{ content: 'Report an issue' }}
          i18n={locales}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}