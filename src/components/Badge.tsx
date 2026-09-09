import clsx from 'clsx'

type Variant =
  | 'default'
  | 'free'
  | 'paid'
  | 'required'
  | 'optional'
  | 'new'
  | 'beta'
  | 'deprecated'
  | 'server'
  | 'client'
  | 'shared'

const styles: Record<Variant, string> = {
  default: 'bg-srp-raised text-srp-dim ring-srp-border',
  free: 'bg-green-500/12 text-green-300 ring-green-500/25',
  paid: 'bg-srp-accent/12 text-srp-accent-hover ring-srp-accent/25',
  required: 'bg-srp-accent/12 text-srp-accent-hover ring-srp-accent/25',
  optional: 'bg-srp-raised text-srp-dim ring-srp-border',
  new: 'bg-green-500/12 text-green-300 ring-green-500/25',
  beta: 'bg-yellow-500/12 text-yellow-300 ring-yellow-500/25',
  deprecated: 'bg-red-500/12 text-red-300 ring-red-500/25',
  server: 'bg-purple-500/12 text-purple-300 ring-purple-500/25',
  client: 'bg-sky-500/12 text-sky-300 ring-sky-500/25',
  shared: 'bg-srp-raised text-srp-dim ring-srp-border',
}

export function Badge({
  children,
  variant = 'default',
  className,
}: {
  children?: React.ReactNode
  variant?: Variant
  className?: string
}) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] font-medium leading-4 ring-1 ring-inset',
        styles[variant],
        className,
      )}
    >
      {children ?? variant}
    </span>
  )
}