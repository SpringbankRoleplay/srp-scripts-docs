import { Badge } from './Badge'

/**
 * Documents one config option, export parameter or return value.
 * Reads better than a wide table once descriptions get long.
 */
export function Property({
  name,
  type,
  defaultValue,
  required,
  children,
}: {
  name: string
  type: string
  defaultValue?: string
  required?: boolean
  children?: React.ReactNode
}) {
  return (
    <div className="border-b border-srp-border py-3 last:border-b-0">
      <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
        <code className="font-mono text-sm font-semibold text-srp-text">
          {name}
        </code>
        <span className="font-mono text-xs text-srp-accent-hover">{type}</span>
        {required && <Badge variant="required">required</Badge>}
        {defaultValue !== undefined && (
          <span className="font-mono text-xs text-srp-dim">
            default: {defaultValue}
          </span>
        )}
      </div>
      {children && (
        <div className="mt-1.5 text-sm leading-relaxed text-srp-dim [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </div>
      )}
    </div>
  )
}

export function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 rounded-xl border border-srp-border bg-srp-surface px-4">
      {children}
    </div>
  )
}