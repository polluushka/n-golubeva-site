type ButtonProps = {
    content: string
}

const Button = ({ content }: ButtonProps) => {
    return(
        <button type="button" className="custom-button">{ content }</button>
    )
}

export default Button;