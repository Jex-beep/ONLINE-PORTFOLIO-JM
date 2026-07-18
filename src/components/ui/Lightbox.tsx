import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export interface LightboxItem {
  src: string
  title: string
  subtitle?: string
}

type LightboxProps = {
  items: readonly LightboxItem[]
  index: number
  onClose: () => void
  onNavigate: (nextIndex: number) => void
}

/**
 * Accessible image lightbox rendered via portal outside #root:
 * Esc closes, arrows navigate, focus is trapped, the app behind is inert,
 * and focus returns to the trigger on close.
 */
export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const item = items[index]

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null
    const appRoot = document.getElementById('root')

    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    appRoot?.setAttribute('inert', '')

    return () => {
      document.body.style.overflow = ''
      appRoot?.removeAttribute('inert')
      previouslyFocused?.focus()
    }
  }, [])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight') onNavigate((index + 1) % items.length)
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + items.length) % items.length)
      if (event.key === 'Tab') {
        // Trap focus across the dialog's tabbable buttons only
        const focusables = containerRef.current?.querySelectorAll<HTMLElement>(
          'button:not([tabindex="-1"])',
        )
        if (!focusables || focusables.length === 0) return
        const first = focusables[0]
        const last = focusables[focusables.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [index, items.length, onClose, onNavigate])

  if (!item) return null

  return createPortal(
    <div
      ref={containerRef}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-10"
    >
      <button
        type="button"
        aria-label="Close viewer"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/95 backdrop-blur-sm"
        tabIndex={-1}
      />

      <div
        aria-live="polite"
        className="relative z-10 flex max-h-full w-full max-w-4xl flex-col items-center gap-4"
      >
        <img
          src={item.src}
          alt={item.title}
          className="max-h-[72vh] w-auto max-w-full border border-line object-contain"
        />
        <div className="text-center">
          <p className="text-sm text-ivory">{item.title}</p>
          {item.subtitle && (
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-fog">
              {item.subtitle}
            </p>
          )}
          <p className="mt-2 font-mono text-[11px] text-fog">
            {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
          </p>
        </div>
      </div>

      <button
        ref={closeRef}
        type="button"
        aria-label="Close viewer"
        onClick={onClose}
        className="absolute top-4 right-4 z-20 flex h-11 w-11 cursor-pointer items-center justify-center border border-line bg-ink-2 text-fog transition-colors hover:border-gold/50 hover:text-gold"
      >
        <X className="h-5 w-5" />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => onNavigate((index - 1 + items.length) % items.length)}
            className="absolute top-1/2 left-3 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center border border-line bg-ink-2 text-fog transition-colors hover:border-gold/50 hover:text-gold md:left-6"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => onNavigate((index + 1) % items.length)}
            className="absolute top-1/2 right-3 z-20 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center border border-line bg-ink-2 text-fog transition-colors hover:border-gold/50 hover:text-gold md:right-6"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}
    </div>,
    document.body,
  )
}
