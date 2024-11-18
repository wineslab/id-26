interface Props {
    buttonType?:
        | "button-primary"
        | "button-secondary"
        | "button-tertiary"
        | "button-large"
        | "button-floating"
    textStyle?:
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6"
        | "subtitle"
        | "p"
        | "callout"
    children: string;
}

const Button = ({ buttonType, textStyle, children }: Props)  => {
    return (
        <button type="button" className={`button ${buttonType}`}>
            <p className={textStyle}>{children}</p>
        </button>
    );
}

export default Button;