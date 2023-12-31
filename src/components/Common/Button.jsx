export const Button = ({ href, type, bgColor, textColor, borderColor, children  }) => {
    const baseStyle = "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg hover-animation";

    const style = `${baseStyle} text-${textColor ? textColor : 'dark'} ${bgColor ? `bg-${bgColor}-800 hover:bg-${bgColor}-900 focus:ring-4 focus:ring-${bgColor}-300` : 'light-50'} ${borderColor ? `border border-${borderColor} hover:bg-light-100` : ''}`

    if (href) {
        return (
            <a href={href} className={style}>
                {children}
            </a>
        )
    } else {
        return (
            <button type={type} className={style}>
                {children}
            </button>
        );
    }
}