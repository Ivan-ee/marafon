import React, { forwardRef } from "react";

export const Button = forwardRef(({ children, href, style}, ref) => {
    return (
        <div className={`button ${style}`} ref={ref}>
            <a href={href} className="button-text">
                {children}
            </a>
        </div>
    );
});
