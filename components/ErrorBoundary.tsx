import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    // It will update the state so the next render shows the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: any) {
    // It will catch error in any component below. We can also log the error to an error reporting service.
  }
  render() {
    if (this.state?.hasError) {
      return <div>Something is wrong.</div>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
