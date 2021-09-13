export const deviceTypeOptions = [
  { value: 'default', label: 'Select Type' },
  { value: 'MAC', label: 'Mac' },
  { value: 'WINDOWS_SERVER', label: 'Windows Server' },
  { value: 'WINDOWS_WORKSTATION', label: 'Windows Workstation' },
]

export const initialDevicesFormState = {
  system_name: '',
  type: deviceTypeOptions[0],
  hdd_capacity: 0,
  deviceTypeOptions,
  errors: []
}

export const devicesFormReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_SYSTEM_NAME':
      return {
        ...state,
        system_name: payload
      }
    case 'SET_TYPE':
      return {
        ...state,
        type: payload
      }
    case 'SET_CAPACITY':
      return {
        ...state,
        hdd_capacity: payload
      }
    case 'SET_ERRORS':
      return {
        ...state,
        errors: payload
      }
    default:
      return state
  }
}
