const Button = (props) => {
    const { type, link, targetType, text, handler } = props;
    
    if (type === 'link') {
        return (
            <a href={link} target={targetType}>
                {text}
            </a>
        )
    }

    return (
        <button onClick={handler}>
            {text}
        </button>
    )
}

Button.defaultProps = { type: 'button' }

export default Button;