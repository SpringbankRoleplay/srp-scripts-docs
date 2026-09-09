import Link from 'next/link'
import { Badge } from './Badge'
import { Download, ShoppingCart, Code } from 'lucide-react'

export function ResourceHeader({
  version,
  price,
  status,
  storeUrl,
  downloadUrl,
  githubUrl,
  children,
}: {
  version?: string
  price?: string
  status?: 'stable' | 'beta' | 'deprecated'
  storeUrl?: string
  downloadUrl?: string
  githubUrl?: string
  children?: React.ReactNode
}) {
  return (
    <div className="mb-8 border-b border-srp-border pb-6">
      {children && (
        <div className="mb-4 max-w-[68ch] leading-relaxed text-srp-dim [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-2">
        {version && (
          <span className="font-mono text-xs text-srp-dim">v{version}</span>
        )}
        {status && status !== 'stable' && <Badge variant={status} />}
        {price && (
          <Badge variant={price.toLowerCase() === 'free' ? 'free' : 'paid'}>
            {price}
          </Badge>
        )}
      </div>

      {(storeUrl || downloadUrl || githubUrl) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {storeUrl && (
            <Action href={storeUrl} icon={ShoppingCart} primary>
              Buy on Tebex
            </Action>
          )}
          {downloadUrl && (
            <Action href={downloadUrl} icon={Download}>
              Download
            </Action>
          )}
          {githubUrl && (
            <Action href={githubUrl} icon={Code}>
              Source
            </Action>
          )}
        </div>
      )}
    </div>
  )
}

function Action({
  href,
  icon: Icon,
  primary,
  children,
}: {
  href: string
  icon: React.ElementType
  primary?: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        primary
          ? 'inline-flex items-center gap-1.5 rounded-lg bg-srp-accent px-3 py-1.5 text-[13px] font-medium text-white no-underline transition-colors hover:bg-srp-accent-hover'
          : 'inline-flex items-center gap-1.5 rounded-lg border border-srp-border bg-srp-surface px-3 py-1.5 text-[13px] font-medium text-srp-text no-underline transition-colors hover:bg-srp-raised'
      }
    >
      <Icon className="h-3.5 w-3.5" aria-hidden />
      {children}
    </Link>
  )
}