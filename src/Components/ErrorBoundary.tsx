import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
  };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="animate-fade-in rounded-2xl border-2 border-fuchsia-400/30 bg-gradient-to-br from-fuchsia-900/60 via-cyan-900/40 to-blue-900/60 p-6 text-fuchsia-200 shadow-2xl">
            <h2 className="drop-shadow-glow mb-2 bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent">
              Something went wrong
            </h2>
            <p className="text-sm text-cyan-200">{this.state.error?.message}</p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
