import Image from 'next/image'

/**
 * Shows what a script actually looks like in game. For a paid resource this
 * matters more than any paragraph of description.
 */
export function Preview({
  src,
  alt,
  caption,
  video,
}: {
  src: string
  alt: string
  caption?: string
  video?: boolean
}) {
  return (
    <figure className="my-6">
      <div className="overflow-hidden rounded-xl border border-srp-border bg-srp-surface">
        {video ? (
          <video
            src={src}
            controls
            loop
            muted
            playsInline
            className="block w-full"
            aria-label={alt}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1600}
            height={900}
            className="block h-auto w-full"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-srp-dim">{caption}</figcaption>
      )}
    </figure>
  )
}

export function PreviewGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 grid gap-3 sm:grid-cols-2 [&_figure]:my-0">
      {children}
    </div>
  )
}
