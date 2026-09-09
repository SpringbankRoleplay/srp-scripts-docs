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
        <div className="mt-1 max-w-[68ch] text-sm text-srp-dim">
          {description}
        </div>
      )}
      <div className={title || description ? 'mt-5' : undefined}>
        {children}
      </div>
    </section>
  )
}