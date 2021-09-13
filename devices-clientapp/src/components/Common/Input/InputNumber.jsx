import { BasicInput } from './styles'

const InputNumber = ({ value, onChange, ...props }) => {
  const handleChange = (e) => {
    const textValue = e.target.value
    if (textValue === '' || textValue === undefined || textValue === null) {
      onChange(0)
    }
    const parsedValue = parseInt(textValue, 10)
    if (!isNaN(parsedValue)) {
      onChange(parsedValue)
    }
  }

  return (
    <BasicInput
      {...props}
      type='text'
      value={value}
      onChange={handleChange}
    />
  )
}

export default InputNumber