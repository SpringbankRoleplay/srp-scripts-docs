import clsx from 'clsx'
import { Check, Minus } from 'lucide-react'

type Support = 'yes' | 'no' | 'partial'

/**
 * Shows what a resource supports out of the box. This is the thing people
 * check before buying, so it belongs near the top of a resource page.
 */
export function Compatibility({
    frameworks = [],
    inventories = [],
    targets = [],
}: {
    frameworks?: { name: string; support?: Support; note?: string }[]
    inventories?: { name: string; support?: Support; note?: string }[]
    targets?: { name: string; support?: Support; note?: string }[]
}) {
    return (
        <div className="my-6 grid gap-3 sm:grid-cols-2">
            <Group title="Frameworks" items={frameworks} />
            <Group title="Inventories" items={inventories} />
            <Group title="Targets" items={targets} />
        </div>
    )
}

function Group({
    title,
    items,
}: {
    title: string
    items: { name: string; support?: Support; note?: string }[]
}) {
    if (!items.length) return null

    return (
        <div className="rounded-xl border border-srp-border bg-srp-surface p-4">
            <div className="mb-2.5 text-xs font-medium text-srp-dim">{title}</div>
            <ul className="space-y-1.5">
                {items.map(({ name, support = 'yes', note }) => (
                    <li key={name} className="flex items-center gap-2 text-sm">
                        {support === 'no' ? (
                            <Minus className="h-3.5 w-3.5 shrink-0 text-srp-dim" aria-hidden />
                        ) : (
                            <Check
                                className={clsx(
                                    'h-3.5 w-3.5 shrink-0',
                                    support === 'partial' ? 'text-yellow-400' : 'text-green-400',
                                )}
                                aria-hidden
                            />
                        )}
                        <span
                            className={clsx(
                                'font-mono text-[13px]',
                                support === 'no' ? 'text-srp-dim line-through' : 'text-srp-text',
                            )}
                        >
                            {name}
                        </span>
                        {note && <span className="text-xs text-srp-dim">{note}</span>}
                    </li>
                ))}
            </ul>
        </div>
    )
}