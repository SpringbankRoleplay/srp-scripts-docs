import clsx from 'clsx'

type Kind = 'added' | 'changed' | 'fixed' | 'removed'

const kindStyles: Record<Kind, string> = {
  added: 'text-green-400',
  changed: 'text-sky-400',
  fixed: 'text-yellow-400',
  removed: 'text-red-400',
}

/**
 * Per-resource version history. Mirrors the changelog format on the main
 * site so people recognise it.
 */
export function Changelog({ children }: { children: React.ReactNode }) {
  return <div className="my-6 space-y-6">{children}</div>
}

export function Release({
  version,
  date,
  children,
}: {
  version: string
  date?: string
  children: React.ReactNode
}) {
  return (
    <div className="border-l-2 border-srp-border pl-4">
      <div className="mb-2 flex items-baseline gap-2.5">
        <span className="font-mono text-sm font-semibold text-srp-text">
          v{version}
        </span>
        {date && <span className="text-xs text-srp-dim">{date}</span>}
      </div>
      <ul className="space-y-1.5">{children}</ul>
    </div>
  )
}

export function Change({
  kind = 'changed',
  children,
}: {
  kind?: Kind
  children: React.ReactNode
}) {
  return (
    <li className="flex gap-2.5 text-sm leading-relaxed">
      <span
        className={clsx(
          'shrink-0 font-mono text-[11px] uppercase leading-5',
          kindStyles[kind],
        )}
      >
        {kind}
      </span>
      <span className="text-srp-dim">{children}</span>
    </li>
  )
}
