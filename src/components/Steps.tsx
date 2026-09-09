import { Children, isValidElement } from 'react'

/**
 * Numbered steps with a connecting rail.
 *
 * Use <Step title="..."> children so the step headings stay out of the
 * page's table of contents — a sequence isn't document structure.
 */
export function Steps({ children }: { children: React.ReactNode }) {
  const steps = Children.toArray(children).filter(isValidElement)

  return (
    <div className="my-6">
      {steps.map((child, i) => (
        <div key={i} className="relative flex gap-4 pb-6 last:pb-0">
          {/* rail */}
          {i < steps.length - 1 && (
            <div
              className="absolute left-[13px] top-7 bottom-0 w-px bg-srp-border"
              aria-hidden
            />
          )}
          <div className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-srp-border bg-srp-raised text-xs font-medium text-srp-dim">
            {i + 1}
          </div>
          <div className="min-w-0 flex-1 pt-0.5">{child}</div>
        </div>
      ))}
    </div>
  )
}

export function Step({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <>
      <div className="mb-1.5 font-semibold text-srp-text">{title}</div>
      <div className="text-sm leading-relaxed text-srp-dim [&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </>
  )
}