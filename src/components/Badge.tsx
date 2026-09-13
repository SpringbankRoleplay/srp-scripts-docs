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
  default: 'bg-slate-500/10 text-slate-300 ring-slate-400/20',
  free: 'bg-emerald-500/10 text-emerald-300 ring-emerald-400/25',
  paid: 'bg-amber-500/10 text-amber-300 ring-amber-400/25',
  required: 'bg-rose-500/10 text-rose-300 ring-rose-400/25',
  optional: 'bg-slate-500/10 text-slate-300 ring-slate-400/20',
  new: 'bg-cyan-500/10 text-cyan-300 ring-cyan-400/25',
  beta: 'bg-violet-500/10 text-violet-300 ring-violet-400/25',
  deprecated: 'bg-orange-500/10 text-orange-300 ring-orange-400/25',
  server: 'bg-indigo-500/10 text-indigo-300 ring-indigo-400/25',
  client: 'bg-sky-500/10 text-sky-300 ring-sky-400/25',
  shared: 'bg-teal-500/10 text-teal-300 ring-teal-400/25',
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