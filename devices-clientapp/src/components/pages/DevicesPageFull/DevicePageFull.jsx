import { useState, useEffect, useCallback } from 'react'
import { defaultTo, map, filter, pipe } from 'ramda'
import DevicesAPI from '../../../api/DevicesAPI'
import { Panel } from '../../Common/Panel'
import DevicesTable from '../../DevicesTable/DevicesTable'
import { DevicesProvider, useDevicesContext } from '../../../state/devices/context'
import withApiDataHoc from '../../../api/withApiDataHoc'
import { DevicePageFullWrapper } from './styles'
import { AlignRight } from '../../Common/Layout'
import { isString, replaceSeparators, isNonEmptyArray } from '../../../utils'
import { BasicButton } from '../../Common/Button/BasicButton'
import AddEditDeviceModal from '../../AddEditDeviceModal/AddEditDeviceModal'

const processDevicesApiData = pipe(
  // Remove any items without an id or system_name
  filter(({ id, system_name }) => id && system_name),
  // Add some new fields to each device for use within the App
  map((device) => ({
    ...device,
    hdd_capacity_int: parseInt(device.hdd_capacity, 10),
    hdd_capacity_label: `${defaultTo('???', device.hdd_capacity)} GB`,
    system_name_label: isString(device.system_name) ? replaceSeparators(device.system_name) : '',
    system_name_sortable: isString(device.system_name) ? device.system_name.toLowerCase() : '',
    type_label: isString(device.type) ? replaceSeparators(device.type) : '',
  }))
)

const DevicePageFull = ({ devicesApi = {} }) => {
  const [deviceContext, dispatchDeviceContext] = useDevicesContext()
  const [showingAddModal, setShowingAddModal] = useState(false)
  
  useEffect(() => {
    if (isNonEmptyArray(devicesApi.data)) {
      const transformedDevices = processDevicesApiData(devicesApi.data)
      dispatchDeviceContext({ type: 'SET_ALL_DEVICES', payload: transformedDevices })
    }
  }, [devicesApi.data, dispatchDeviceContext])

  const createNewDeviceAndReFetch = useCallback(async (formData) => {
    await DevicesAPI.CreateOneDevice(formData)
    await devicesApi.reFetch()
    setShowingAddModal(false)
  }, [devicesApi])

  return (
    <DevicePageFullWrapper>
      <Panel>
        <AlignRight>
          <BasicButton onClick={() => setShowingAddModal(true)}>Add New Device</BasicButton>
        </AlignRight>
        <DevicesTable
          allDevices={deviceContext?.allDevices || []}
          refreshDevices={devicesApi.reFetch}
        />
      </Panel>
      {
        showingAddModal && (
          <AddEditDeviceModal
            titleText='Add Device'
            onSubmit={createNewDeviceAndReFetch}
            onClose={() => setShowingAddModal(false)}
          />
        )
      }
    </DevicePageFullWrapper>
  )
}

const DevicePageFullWithApi = withApiDataHoc(DevicePageFull, {
  propName: 'devicesApi',
  fetchFn: DevicesAPI.FetchAllDevices
})

const DevicePageFullWithProvider = (props) => (
  <DevicesProvider>
    <DevicePageFullWithApi {...props} />
  </DevicesProvider>
)

export default DevicePageFullWithProvider
