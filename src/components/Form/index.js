const Form = (props) => {

    const { handler } = props;

    return (
        <form onSubmit={handler}>
            <input
                type='text'
                placeholder="Write some"
                name='thing'
            />
            <input type='submit' value='Sumbit' />
        </form>
    )
}

export default Form;