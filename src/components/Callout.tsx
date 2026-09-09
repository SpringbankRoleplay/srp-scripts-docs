import clsx from 'clsx'
import { Info, CircleCheck, TriangleAlert, CircleX } from 'lucide-react'

type Type = 'info' | 'success' | 'warning' | 'error'

const styles: Record<Type, string> = {
  info: 'border-l-srp-accent bg-srp-accent/[0.07]',
  success: 'border-l-green-500 bg-green-500/[0.07]',
  warning: 'border-l-yellow-500 bg-yellow-500/[0.07]',
  error: 'border-l-red-500 bg-red-500/[0.07]',
}

const iconColor: Record<Type, string> = {
  info: 'text-srp-accent-hover',
  success: 'text-green-400',
  warning: 'text-yellow-400',
  error: 'text-red-400',
}

const icons: Record<Type, React.ElementType> = {
  info: Info,
  success: CircleCheck,
  warning: TriangleAlert,
  error: CircleX,
}

export function Callout({
  type = 'info',
  title,
  children,
}: {
  type?: Type
  title?: string
  children: React.ReactNode
}) {
  const Icon = icons[type]

  return (
    <div
      className={clsx(
        'my-6 flex gap-3 rounded-r-lg border border-srp-border border-l-2 p-3.5',
        styles[type],
      )}
    >
      <Icon
        className={clsx('mt-0.5 h-4 w-4 shrink-0', iconColor[type])}
        aria-hidden
      />
      <div className="min-w-0">
        {title && (
          <div className="mb-1 text-sm font-semibold text-srp-text">
            {title}
          </div>
        )}
        <div className="text-sm leading-relaxed text-srp-text/90 [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </div>
      </div>
    </div>
  )
}