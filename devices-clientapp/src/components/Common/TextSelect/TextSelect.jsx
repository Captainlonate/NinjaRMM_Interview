import { useState } from 'react'
import {
  TextSelectContainer,
  Label,
  DropdownContent,
  DropdownItem,
  ActiveChoice,
  ActiveChoicesContainer,
  ActiveOptionText,
} from './styles'
import { isNonEmptyArray } from '../../../utils'

const Dropdown = ({ options = [], onSelect }) => (
  <DropdownContent>
    {
      isNonEmptyArray(options)
        ? (
          options.map((option) => (
            <DropdownItem
              key={option.key}
              onClick={() => onSelect && onSelect(option)}
            >
              {option.label}
            </DropdownItem>
          ))
        )
        : (
          <DropdownItem>No Options</DropdownItem>
        )
    }
  </DropdownContent>
)

const ActiveChoices = ({ activeOptions, onDeSelect }) => (
  isNonEmptyArray(activeOptions)
    ? (
      <ActiveChoicesContainer>
        {
          activeOptions.map((selectedChoice) => (
            <ActiveChoice
              key={selectedChoice.key}
              onClick={(e) => {
                onDeSelect && onDeSelect(selectedChoice)
                e.stopPropagation()
              }}
            >
              {selectedChoice.label} X
            </ActiveChoice>
          ))
        }
      </ActiveChoicesContainer>
    )
    : null
)

const TextSelect = ({
  label = '',
  activeOptionText = '',
  options = [],
  onSelect,
  onDeSelect,
  activeOptions = []
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false)
  
  return (
    <TextSelectContainer onClick={() => setDropdownVisible(!dropdownVisible)}>
      <div>
        <Label>{label}</Label>
        <ActiveOptionText> {activeOptionText}</ActiveOptionText>
      </div>
      <ActiveChoices
        activeOptions={activeOptions}
        onDeSelect={onDeSelect}
      />
      {
        dropdownVisible && <Dropdown options={options} onSelect={onSelect} />
      }
    </TextSelectContainer>
  )
}

export default TextSelect