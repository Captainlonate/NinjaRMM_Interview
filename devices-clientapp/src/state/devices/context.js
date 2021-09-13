import React, { createContext, useReducer, useContext } from 'react'
import devicesReducer, { initialDevicesContextState } from './reducer'

export const DevicesContext = createContext({})

// Example: const [devicesState, dispatchDevices] = useDevicesContext()
export const useDevicesContext = () => useContext(DevicesContext)

/*
  The DevicesProvider makes use of a reducer to manage it's state.
*/
export const DevicesProvider = ({ children }) => (
  <DevicesContext.Provider value={useReducer(devicesReducer, initialDevicesContextState)}>
    {children}
  </DevicesContext.Provider>
)
