import { useState } from 'react'

export const useEventValue = (initialValue) => {
  const [inputValue, setInputValue] = useState(initialValue)

  const setNewInputValue = ({ target: { value } }) => {
    setInputValue(value)
  }

  return [inputValue, setNewInputValue]
}
