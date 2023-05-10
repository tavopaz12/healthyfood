import { inputStyle, titleInputStyle } from './StylesPublishForm'

export default function TextArea({
  title,
  placeholder,
  name,
  onChangeInput,
  height,
  inputValue,
  maxLength,
  textLength,
  required,
}) {
  return (
    <div className="w-full">
      <label htmlFor={name} className={titleInputStyle}>
        {title}
      </label>
      <textarea
        value={inputValue}
        maxLength={maxLength}
        onChange={onChangeInput}
        id={name}
        rows={height}
        required={required && true}
        className={inputStyle}
        name={name}
        placeholder={placeholder}></textarea>
      {maxLength && (
        <span className="block mt-1 text-sm font-medium text-gray-700 text-right">
          {textLength} / {maxLength}
        </span>
      )}
    </div>
  )
}
