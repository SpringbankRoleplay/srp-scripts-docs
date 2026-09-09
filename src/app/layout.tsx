// Nextra
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'

// Next
import Image from 'next/image'
import Link from "next/link";

//Style
import './globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'

export const metadata = {
  // Define your metadata here
  // For more information on the Metadata API, see:
  // https://nextjs.org/docs/app/building-your-application/optimizing/metadata

  title: "SRP Gaming - Documentation",
  description: "Official documentation for SRP Gaming scripts",

  metadataBase: new URL("https://docs.srp-scripts.com"),

  openGraph: {
    type: "website",
    url: "https://docs.srp-scripts.com",
    title: "SRP Gaming - Documentation",
    description: "Official documentation for SRP Gaming scripts",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "SRP Gaming Docs",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SRP Gaming - Documentation",
    description: "Official documentation for SRP Gaming scripts",
    images: ["https://docs.srp-scripts.com/logo.png"],
  },
};

const banner = (
  <Banner
    storageKey="springbank-scripts-betarelease"
    className="bg-blue-400"
  >
    Springbank - Scripts | Beta Release🎉
  </Banner>
)

const navbar = (
  <Navbar
    logo={
      <span className="flex items-center gap-2">
        <Image src="/logo.png" alt="" width={45} height={45} />
        <span className="text-xl font-bold">SRP Scripts</span>
      </span>
    }
    logoLink="/"
    chatLink="https://discord.gg/5H6kG8XAur"
    projectLink="https://github.com/SpringbankRoleplay/srp-tebex-docs"
  >
    <Link
      href="https://srp-scripts.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Webshop"
      className="hidden md:flex items-center"
    >
      <FontAwesomeIcon icon={faStore} className="w-5 h-5" />
    </Link>
  </Navbar>
)

const footer = <Footer>{new Date().getFullYear()} © SRP Gaming.</Footer>



export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head
      // ... Your additional head options
      >
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/SpringbankRoleplay/srp-tebex-docs/tree/main"
          footer={footer}
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
