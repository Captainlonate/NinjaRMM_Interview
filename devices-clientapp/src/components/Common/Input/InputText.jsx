import { forwardRef } from 'react'
import { BasicInput } from './styles'

// The ref is forwarded in case the user wants to auto focus this input
const InputText = forwardRef(({ value, onChange, ...props }, ref) => (
  <BasicInput
    {...props}
    type='text'
    ref={ref}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
))

export default InputText