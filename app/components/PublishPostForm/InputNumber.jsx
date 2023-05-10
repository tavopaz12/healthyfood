import { inputStyle, titleInputStyle } from './StylesPublishForm'

export default function InputNumber({
  title,
  placeholder,
  name,
  onChangeInput,
  inputValue,
  required
}) {
  return (
    <div className="w-3/4">
      <label htmlFor={name} className={titleInputStyle}>
        {title}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span className="text-gray-500">&#65284;</span>
        </div>
        <input
          min="0"
          value={inputValue}
          type="number"
          onChange={onChangeInput}
          name={name}
          id={name}
          placeholder={placeholder}
          className={`pl-8 ${inputStyle}`}
          required={required && true}
        />
      </div>
    </div>
  )
}
