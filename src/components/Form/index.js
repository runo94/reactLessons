import './form.css'

const Form = (props) => {
    const {handleClick} = props;
    return (
        <form onSubmit={(e) => handleClick(e)}>
            <input type="text" name="task" placeholder="Enter your task" />
            <input type="submit" value="GO" />
        </form>
    )
};

export default Form;