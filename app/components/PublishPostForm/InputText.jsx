import { inputStyle, titleInputStyle } from './StylesPublishForm'
export default function InputText({
  title,
  placeholder,
  name,
  onChangeInput,
  inputValue,
  onFocus,
  required,
}) {
  return (
    <div className="w-full">
      <label htmlFor={name} className={titleInputStyle}>
        {title}
      </label>

      <input
        autoFocus={onFocus && true}
        value={inputValue}
        type="text"
        onChange={onChangeInput}
        name={name}
        id={name}
        placeholder={placeholder}
        className={inputStyle}
        required={required && true}
      />
    </div>
  )
}
