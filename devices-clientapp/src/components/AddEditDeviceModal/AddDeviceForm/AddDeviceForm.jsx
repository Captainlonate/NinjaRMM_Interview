import { useEffect, useRef } from 'react'
import { FormWrapper, InputGroup, InputGroupLeft, InputGroupRight } from './styles'
import InputText from '../../Common/Input/InputText'
import InputNumber from '../../Common/Input/InputNumber'
import Select from '../../Common/Select/Select'
import FormErrorMessages from '../../Common/FormErrorMessages/FormErrorMessages'

const AddDeviceForm = ({ formState, setFormState }) => {
  const updateForm = (type) => (payload) => setFormState({ type, payload })
  const inputToFocusRef = useRef(null)

  useEffect(() => {
    // When the form loads, auto focus the first input field
    inputToFocusRef.current.focus()
  }, [])

  return (
    <FormWrapper>
      <FormErrorMessages errors={formState.errors || []} />
      <InputGroup>
        <InputGroupLeft>System Name*</InputGroupLeft>
        <InputGroupRight>
          <InputText
            ref={inputToFocusRef}
            value={formState.system_name}
            onChange={updateForm('SET_SYSTEM_NAME')}
          />
        </InputGroupRight>
      </InputGroup>
      <InputGroup>
        <InputGroupLeft>Type*</InputGroupLeft>
        <InputGroupRight>
          <Select
            activeChoice={formState.type}
            options={formState.deviceTypeOptions}
            onChange={updateForm('SET_TYPE')}
          />
        </InputGroupRight>
      </InputGroup>
      <InputGroup>
        <InputGroupLeft>HDD Capacity (GB)*</InputGroupLeft>
        <InputGroupRight>
          <InputNumber
            value={formState.hdd_capacity}
            onChange={updateForm('SET_CAPACITY')}
          />
        </InputGroupRight>
      </InputGroup>
    </FormWrapper>
  )
}

export default AddDeviceForm
