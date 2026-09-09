/**
 * A grouped block of content.
 *
 * NOTE: headings rendered inside a React component do NOT show up in
 * Nextra's table of contents — Nextra reads the MDX source, not the DOM.
 * So write the heading as markdown and use Section only for the body:
 *
 *   ## Requirements
 *
 *   <Section description="Two resources, and that's it.">
 *     ...
 *   </Section>
 *
 * Pass `title` only for sections you deliberately want out of the TOC.
 */
export function Section({
  title,
  description,
  children,
}: {
  title?: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="my-10">
      {title && (
        <h2 className="text-xl font-semibold tracking-tight text-srp-text">
          {title}
        </h2>
      )}
      {description && (
        <p className="mt-1 max-w-[68ch] text-sm text-srp-dim">{description}</p>
      )}
      <div className={title || description ? 'mt-5' : undefined}>
        {children}
      </div>
    </section>
  )
}