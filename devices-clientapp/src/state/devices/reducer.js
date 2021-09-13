export const initialDevicesContextState = {
  allDevices: [],
}

const devicesReducer = (state, { type, payload }) => {
  switch (type) {
    case 'SET_ALL_DEVICES':
      return {
        ...state,
        allDevices: Array.isArray(payload) ? [...payload] : []
      }
    default:
      return state
  }
}

export default devicesReducer