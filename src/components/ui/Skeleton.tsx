import { type CSSProperties } from 'react';

interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    borderRadius?: string | number;
    className?: string;
    style?: CSSProperties;
}

const Skeleton = ({
    width = '100%',
    height = '1em',
    borderRadius = '4px',
    className = '',
    style,
}: SkeletonProps) => {
    const skeletonStyle: CSSProperties = {
        width,
        height,
        borderRadius,
        backgroundColor: '#1A1A1A',
        backgroundImage: 'linear-gradient(90deg, #1A1A1A 0%, #2A2A2A 50%, #1A1A1A 100%)',
        backgroundSize: '200% 100%',
        animation: 'skeleton-shimmer 1.5s infinite linear',
        display: 'inline-block',
        ...style,
    };

    return (
        <>
            <style>
                {`
                    @keyframes skeleton-shimmer {
                        0% { background-position: 200% 0; }
                        100% { background-position: -200% 0; }
                    }
                `}
            </style>
            <span className={`skeleton ${className}`} style={skeletonStyle} aria-hidden="true" />
        </>
    );
};

export default Skeleton;
