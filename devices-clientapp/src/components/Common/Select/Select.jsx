import { isNonEmptyArray } from '../../../utils'
import { StyledSelect } from './styles'

const Select = ({ activeChoice, options = [], onChange }) => (
  <StyledSelect
    value={activeChoice?.value || options[0]?.value}
    onChange={(e) => {
      onChange(options.find(({ value }) => value === e.target.value))
    }}
  >
    {
      isNonEmptyArray(options)
        ? (
          options.map(({ value, label }) => (
            <option key={value} value={value}>{label}</option>
          ))
        )
        : null
    }
  </StyledSelect>
)

export default Select
