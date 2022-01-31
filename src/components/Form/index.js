import './Form.css'

const Form = (props) => {
    const { children, handleSubmit } = props;
    return (
        <form onSubmit={handleSubmit}>

            {children}
        </form>
    )
}

export default Form;