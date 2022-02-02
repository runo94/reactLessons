import './Input.css'

const Input = ({ placeholder,
    type,
    name,
    label,
    handleChange,
    handleBlur,
    isChecked,
    handleCheckbox,
    errorMsg }) => {
    return (
        <label htmlFor={name}>
            {label}
            <br />
            <input
                onChange={handleChange}
                onBlur={handleBlur}
                onClick={handleCheckbox}
                placeholder={placeholder}
                type={type}
                name={name}
                checked={isChecked}
            />
            {!!errorMsg && <span>{errorMsg}</span>}
        </label>
    )
}

export default Input;