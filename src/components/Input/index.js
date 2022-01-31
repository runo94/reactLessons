import './Input.css'

const Input = ({placeholder, type, name, label, handleChange, handleBlur}) => {
    return (
        <label htmlFor={name}>
            {label}
            <br/>
            <input 
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder={placeholder} 
                type={type}
                name={name}
            />
        </label>
    )
}

export default Input;