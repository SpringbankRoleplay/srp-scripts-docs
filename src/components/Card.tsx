import Link from 'next/link'
import clsx from 'clsx'
import { ArrowUpRight } from 'lucide-react'

type CardProps = {
  title: string
  description?: string
  href?: string
  badge?: React.ReactNode
  icon?: React.ReactNode
  children?: React.ReactNode
}

export function Card({
  title,
  description,
  href,
  badge,
  icon,
  children,
}: CardProps) {
  const external = href?.startsWith('http')

  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          {icon && <span className="text-srp-dim">{icon}</span>}
          <span className="font-mono text-[15px] font-semibold text-srp-text">
            {title}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          {badge}
          {external && (
            <ArrowUpRight
              className="h-3.5 w-3.5 text-srp-dim transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
              aria-hidden
            />
          )}
        </div>
      </div>
      {description && (
        <p className="mt-2 text-sm leading-relaxed text-srp-dim">
          {description}
        </p>
      )}
      {children && <div className="mt-3">{children}</div>}
    </>
  )

  const classes = clsx(
    'group block rounded-xl border border-srp-border bg-srp-surface p-4',
    'no-underline transition-colors',
    href && 'hover:border-srp-accent/40 hover:bg-srp-raised',
  )

  if (!href) {
    return <div className={classes}>{inner}</div>
  }

  return (
    <Link
      href={href}
      className={classes}
      {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
    >
      {inner}
    </Link>
  )
}

export function CardGrid({
  children,
  columns = 2,
}: {
  children: React.ReactNode
  columns?: 1 | 2 | 3
}) {
  return (
    <div
      className={clsx(
        'my-6 grid gap-3',
        columns === 2 && 'sm:grid-cols-2',
        columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
      )}
    >
      {children}
    </div>
  )
}