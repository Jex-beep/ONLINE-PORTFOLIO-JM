import { Component, type ReactNode } from 'react'

type Props = { children: ReactNode }
type State = { hasError: boolean }

/** Root error boundary — keeps a runtime error from blanking the whole site. */
export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-dvh flex-col items-center justify-center gap-5 px-6 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-gold">
            Something went wrong
          </p>
          <h1 className="font-display text-4xl font-semibold text-ivory md:text-5xl">
            This page hit a snag<span className="text-gold">.</span>
          </h1>
          <a
            href="/"
            className="mt-2 border border-gold/40 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            Reload home
          </a>
        </div>
      )
    }
    return this.props.children
  }
}
