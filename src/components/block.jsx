export const Block = ({ children, className = '' }) => {
    return (
        <section className={`block ${className}`}>
            {children}
        </section>
    );
}
