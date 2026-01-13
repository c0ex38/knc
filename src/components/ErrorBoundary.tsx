import { Component, type ErrorInfo, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
    children?: ReactNode;
}

interface State {
    hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        console.error('Error caught by boundary:', error);
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'var(--color-black)',
                    color: 'var(--color-white)',
                    fontFamily: 'var(--font-family-base)'
                }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-orange)' }}>Bir şeyler ters gitti.</h1>
                    <p style={{ marginBottom: '2rem' }}>Beklenmedik bir hata oluştu.</p>
                    <Link to="/" onClick={() => this.setState({ hasError: false })} style={{
                        padding: '10px 20px',
                        backgroundColor: 'var(--color-orange)',
                        color: 'white',
                        borderRadius: '5px',
                        textDecoration: 'none'
                    }}>
                        Ana Sayfaya Dön
                    </Link>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
