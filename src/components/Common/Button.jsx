export const Button = ({ href, type, variant, children  }) => {
    const baseStyle = "inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center rounded-lg animate-hover";
    let style = "";

    if (variant === "primary") {
        style = `${baseStyle} text-white bg-primary-800 hover:bg-primary-900 focus:ring-4 focus:ring-primary-300 border border-transparent`;
    } else if (variant === "bordered") {
        style = `${baseStyle} text-dark bg-light-50 border border-dark hover:bg-light-100`;
    } else {
        style = baseStyle;
    }

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