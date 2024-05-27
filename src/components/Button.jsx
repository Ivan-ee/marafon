import React, { forwardRef } from "react";

export const Button = forwardRef(({ children, href }, ref) => {
    return (
        <div className="button" ref={ref}>
            <a href={href} className="button-text">
                {children}
            </a>
        </div>
    );
});
