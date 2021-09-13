import { makeApiCall } from './APIUtils'

const FetchAllDevices = async () => (
  makeApiCall({
    url: process.env.REACT_APP_DEVICES_URL
  })
)

const FetchOneDevice = async (deviceId) => (
  makeApiCall({
    url: `${process.env.REACT_APP_DEVICES_URL}/${deviceId}`
  })
)

const DeleteOneDevice = async (deviceId) => (
  makeApiCall({
    url: `${process.env.REACT_APP_DEVICES_URL}/${deviceId}`,
    method: 'DELETE'
  })
)

const CreateOneDevice = async (newDeviceDataObj) => (
  makeApiCall({
    url: process.env.REACT_APP_DEVICES_URL,
    method: 'POST',
    body: JSON.stringify(newDeviceDataObj),
    headers: {
      'Content-Type': 'application/json',
    }
  })
)

const UpdateOneDevice = async (deviceId, updatedDeviceDataObj) => (
  makeApiCall({
    url: `${process.env.REACT_APP_DEVICES_URL}/${deviceId}`,
    method: 'PUT',
    body: JSON.stringify(updatedDeviceDataObj),
    headers: {
      'Content-Type': 'application/json',
    }
  })
)

const DevicesAPI = {
  FetchAllDevices,
  FetchOneDevice,
  DeleteOneDevice,
  CreateOneDevice,
  UpdateOneDevice,
}

export default DevicesAPI
