import { pipe, map, prop, uniq, values, pick } from 'ramda'
import { sortObjectsByKey, filterObjectsWithKeyAmong } from '../../utils'

export const makeTypeFiltersFromDevices = pipe(
  map(prop('type')),
  uniq,
  map((label) => ({ key: label, label }))
)

export const deviceSortOptions = {
  'system_name_sortable': {
    key: 'system_name_sortable',
    label: 'System Name',
    sortFns: {
      'ASC': sortObjectsByKey('system_name_sortable')('ASC'),
      'DESC': sortObjectsByKey('system_name_sortable')('DESC')
    }
  },
  'hdd_capacity_int': {
    key: 'hdd_capacity_int',
    label: 'HDD Capacity',
    sortFns: {
      'ASC': sortObjectsByKey('hdd_capacity_int')('ASC'),
      'DESC': sortObjectsByKey('hdd_capacity_int')('DESC')
    }
  }
}

export const sortSelectChoices = pipe(
  values,
  map(pick(['key', 'label']))
)(deviceSortOptions)

const filterDevicesByType = filterObjectsWithKeyAmong('type')

export const filterAndSortDevices = ({ sortDirection = 'ASC', sortColumn, allDevices, typeFilters }) => {
  const filteredDevices = filterDevicesByType(typeFilters, allDevices)
  if (sortColumn) {
    const sortFn = deviceSortOptions[sortColumn]?.sortFns[sortDirection]
    return sortFn ? sortFn(filteredDevices) : filteredDevices
  }
  return filteredDevices
}

export const devicesTableColumnConfig = [
  { key: 'system_name_label', label: 'Name' },
  { key: 'type_label', label: 'Type' },
  { key: 'hdd_capacity_label', label: 'Capacity' },
]

export const mapDevicesToRows = map((rowData) => ({
  rowKey: rowData.id,
  rowData,
  rowCells: (
    devicesTableColumnConfig
      .map(prop('key'))
      .map((key) => rowData[key])
  )
}))

export const determineWhichRowsToShow = pipe(
  filterAndSortDevices,
  mapDevicesToRows
)