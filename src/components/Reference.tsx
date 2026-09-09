import { Badge } from './Badge'

type Side = 'server' | 'client' | 'shared'

/**
 * Documents one export, event or function. Put <Property> children inside
 * for parameters.
 *
 *   <Reference name="srp:getPlayer" side="server" kind="export"
 *              signature="exports['srp-core']:getPlayer(source)">
 *     <Properties>
 *       <Property name="source" type="number" required>Player server ID.</Property>
 *     </Properties>
 *   </Reference>
 */
export function Reference({
  name,
  side = 'shared',
  kind,
  signature,
  returns,
  children,
}: {
  name: string
  side?: Side
  kind?: 'export' | 'event' | 'function'
  signature?: string
  returns?: string
  children?: React.ReactNode
}) {
  return (
    <div className="my-6 overflow-hidden rounded-xl border border-srp-border">
      <div className="flex flex-wrap items-center gap-2 border-b border-srp-border bg-srp-raised px-4 py-2.5">
        <code className="font-mono text-sm font-semibold text-srp-text">
          {name}
        </code>
        <Badge variant={side}>{side}</Badge>
        {kind && <span className="text-xs text-srp-dim">{kind}</span>}
      </div>

      <div className="bg-srp-surface px-4 py-3.5">
        {signature && (
          <pre className="mb-3 overflow-x-auto rounded-lg border border-srp-border bg-srp-bg px-3 py-2 text-[13px]">
            <code className="font-mono text-srp-text">{signature}</code>
          </pre>
        )}

        {children}

        {returns && (
          <div className="mt-3 flex items-baseline gap-2 border-t border-srp-border pt-3">
            <span className="text-xs text-srp-dim">returns</span>
            <code className="font-mono text-xs text-srp-accent-hover">
              {returns}
            </code>
          </div>
        )}
      </div>
    </div>
  )
}
