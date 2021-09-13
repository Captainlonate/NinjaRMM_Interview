import React, { useReducer } from 'react'
import ModalPortal from '../Common/Modal/ModalPortal'
import GenericModal from '../Common/Modal/GenericModal/GenericModal'
import AddDeviceForm from './AddDeviceForm/AddDeviceForm'
import { devicesFormReducer, initialDevicesFormState } from './AddDeviceForm/formReducer'
import { validateFormData } from './AddEditDeviceModalUtils'
import { isFunction } from '../../utils'

const pickFormFields = (formState) => ({
  system_name: formState?.system_name,
  type: formState?.type?.value,
  hdd_capacity: formState?.hdd_capacity
})

const AddEditDeviceModal = ({ titleText, onSubmit, onClose, startingData = {} }) => {
  const [formState, setFormState] = useReducer(
    devicesFormReducer,
    { ...initialDevicesFormState, ...startingData }
  )

  const checkBeforeSubmit = () => {
    const errors = validateFormData(formState)
    if (errors.length > 0) {
      setFormState({ type: 'SET_ERRORS', payload: errors })
    } else if (isFunction(onSubmit)) {
      setFormState({ type: 'SET_ERRORS', payload: [] })
      onSubmit(pickFormFields(formState))
    }
  }

  return (
    <ModalPortal>
      <GenericModal
        titleText={titleText}
        optionOneText='SAVE'
        cancelText='Close'
        themeColor='#ce2043'
        content={
          <AddDeviceForm
            formState={formState}
            setFormState={setFormState}
          />
        }
        onOptionOne={checkBeforeSubmit}
        onClose={onClose}
      />
    </ModalPortal>
  )
}

export default AddEditDeviceModal
