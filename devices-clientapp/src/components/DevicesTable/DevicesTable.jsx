import { useState, useMemo, useCallback } from 'react'
import { uniq, prop } from 'ramda'
import Table from '../Common/Table/Table'
import { RowActions, RowAction, ActionButton } from './styles'
import { isFunction, propNotEq } from '../../utils'
import {
  makeTypeFiltersFromDevices,
  sortSelectChoices,
  determineWhichRowsToShow,
  devicesTableColumnConfig,
} from './devicesTableUtils'
import DevicesAPI from '../../api/DevicesAPI'
import DevicesTableActions from './DevicesTableActions'
import AddEditDeviceModal from '../AddEditDeviceModal/AddEditDeviceModal'
import { deviceTypeOptions } from '../AddEditDeviceModal/AddDeviceForm/formReducer'

export const DevicesTableWithLoading = ({ allDevices = [], refreshDevices }) => {
  const [typeFilters, setTypeFilters] = useState([])
  const [sortCol, setSortCol] = useState(sortSelectChoices[0])
  const [editModalData, setEditModalData] = useState(null)

  // Create the options for the "Device Type" filter
  const filterSelectChoices = useMemo(() => (
    makeTypeFiltersFromDevices(allDevices)
  ), [allDevices])

  // Determine which rows should be visible after filtering
  const visibleRows = useMemo(() => (
    determineWhichRowsToShow({
      allDevices,
      sortColumn: sortCol?.key,
      typeFilters: typeFilters.map(prop('key'))
    })
  ), [sortCol, typeFilters, allDevices])

  // When the user chooses a new "Device Type" filter (can choose multiple)
  const addFilter = (newFilter) => {
    setTypeFilters(uniq([...typeFilters, newFilter]))
  }

  // When the user removes a "Device Type" filter
  const removeFilter = (filterToRemove) => {
    const newTypeFilters = typeFilters.filter(propNotEq('key', filterToRemove.key))
    setTypeFilters(newTypeFilters)
  }

  // When the user clicks the delete button next to a device
  const handleDeleteDevice = (deviceId) => async (e) => {
    if (deviceId) {
      await DevicesAPI.DeleteOneDevice(deviceId)
      if (isFunction(refreshDevices)) {
        refreshDevices()
      }
    }
    e.stopPropagation()
  }

  // When the user Saves the Edit Device Modal
  const handleEditDeviceAndReFetch = useCallback(async (formData) => {
    await DevicesAPI.UpdateOneDevice(editModalData.id, formData)
    await refreshDevices()
    setEditModalData(null)
  }, [editModalData, refreshDevices])

  return (
    <>
      <Table
        size='lg'
        rows={visibleRows}
        columns={devicesTableColumnConfig}
        title='NinjaRMM Devices'
        renderTableActions={() => (
          <DevicesTableActions
            activeFilters={typeFilters}
            activeSort={sortCol?.label}
            onSelectFilter={addFilter}
            onSelectSort={setSortCol}
            onRemoveFilter={removeFilter}
            filterChoices={filterSelectChoices}
            sortChoices={sortSelectChoices}
          />
        )}
        renderRowActions={(rowData) => (
          <RowActions>
            <RowAction>
              <ActionButton
              variant='secondary'
              onClick={() => {
                setEditModalData({
                  id: rowData.id,
                  system_name: rowData.system_name,
                  type: deviceTypeOptions.find((option) => option.value === rowData.type) || deviceTypeOptions[0],
                  hdd_capacity: rowData.hdd_capacity_int
                })
              }}
              >Edit</ActionButton>
            </RowAction>
            <RowAction>
              <ActionButton
                variant='primary'
                onClick={handleDeleteDevice(rowData?.id)}
              >Delete</ActionButton>
            </RowAction>
          </RowActions>
        )}
      />
      {
        editModalData && (
          <AddEditDeviceModal
            titleText='Edit Device Record'
            startingData={editModalData}
            onSubmit={handleEditDeviceAndReFetch}
            onClose={() => setEditModalData(null)}
          />
        )
      }
    </>
  )
}

export default DevicesTableWithLoading
