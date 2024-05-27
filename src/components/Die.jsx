export const Die = ({icon1, icon2, icon3, icon4, style, children}) => {
    return (
        <div className={`${style} die`}>
            {children}
        </div>
    )
}

