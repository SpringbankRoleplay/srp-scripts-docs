import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, MapPinned, MessagesSquare, Package, BookOpen } from 'lucide-react'
import './globals.css'

export const metadata = { title: 'Page not found' }

export default function NotFound() {
  return (
    <div className="dark flex min-h-screen flex-col items-center justify-center bg-srp-bg px-6 py-16 text-center">
      <div className="mb-10 flex items-center gap-3">
        <Image src="/logo.png" alt="" width={34} height={34} />
        <div className="text-left leading-none">
          <div className="text-lg font-bold text-srp-text">Springbank</div>
          <div className="mt-0.5 font-mono text-[10px] tracking-[0.2em] text-srp-accent">
            SCRIPTS
          </div>
        </div>
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-srp-accent/10 ring-1 ring-inset ring-srp-accent/20">
        <MapPinned className="h-6 w-6 text-srp-accent" aria-hidden />
      </div>

      <div className="mt-7 font-mono text-xs font-semibold tracking-[0.15em] text-srp-accent">
        404 · PAGE NOT FOUND
      </div>

      <h1 className="mt-3 text-2xl font-bold tracking-tight text-srp-text">
        This page doesn&apos;t exist
      </h1>

      <p className="mt-3 max-w-md text-sm leading-relaxed text-srp-dim">
        The link may be outdated, or the page moved when the docs were
        restructured. Try one of these instead.
      </p>

      <div className="mt-8 grid w-full max-w-2xl gap-3 sm:grid-cols-3">
        <Tile
          icon={Package}
          title="Resources"
          description="Browse every script"
          href="/en"
        />
        <Tile
          icon={MessagesSquare}
          title="Discord"
          description="Ask the community"
          href="https://discord.gg/5H6kG8XAur"
          external
        />
        <Tile
          icon={BookOpen}
          title="Store"
          description="See what's available"
          href="https://srp-scripts.com"
          external
        />
      </div>

      <Link
        href="/en"
        className="mt-9 inline-flex items-center gap-2 rounded-lg bg-srp-accent px-4 py-2.5 text-sm font-medium text-white no-underline transition-colors hover:bg-srp-accent-hover"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden />
        Back to the docs
      </Link>
    </div>
  )
}

function Tile({
  icon: Icon,
  title,
  description,
  href,
  external,
}: {
  icon: React.ElementType
  title: string
  description: string
  href: string
  external?: boolean
}) {
  return (
    <Link
      href={href}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
      className="rounded-xl border border-srp-border bg-srp-surface px-4 py-5 no-underline transition-colors hover:border-srp-accent/40 hover:bg-srp-raised"
    >
      <Icon className="mx-auto h-5 w-5 text-srp-accent" aria-hidden />
      <div className="mt-2.5 text-sm font-semibold text-srp-text">{title}</div>
      <div className="mt-1 text-xs leading-relaxed text-srp-dim">
        {description}
      </div>
    </Link>
  )
}