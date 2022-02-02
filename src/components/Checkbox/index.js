import './Checkbox.css'

const Checkbox = ({ name,
    label,
    isChecked,
    handleCheckbox }) => {
    return (
        <label htmlFor={name}>
            {label}
            <br />
            <input
                onChange={handleCheckbox}
                type="checkbox"
                name={name}
                checked={isChecked}
            />
        </label>
    )
}

export default Checkbox;