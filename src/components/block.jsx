export const Block = ({ children, className = '' }) => {
    return (
        <div className={`block ${className}`}>
            {children}
        </div>
    );
}
