import TextSelect from '../Common/TextSelect/TextSelect'
import { TableActions, TableAction } from './styles'
import { isNonEmptyArray } from '../../utils'

const DevicesTableActions = ({
  activeFilters,
  activeSort,
  filterChoices,
  sortChoices,
  onSelectSort,
  onSelectFilter,
  onRemoveFilter,
}) => (
  <TableActions>
    <TableAction>
      <TextSelect
        label='Device Type:'
        activeOptionText={!isNonEmptyArray(activeFilters) ? 'All' : ''}
        activeOptions={activeFilters}
        options={filterChoices}
        onSelect={onSelectFilter}
        onDeSelect={onRemoveFilter}
      />
    </TableAction>
    <TableAction>
      <TextSelect
        label='Sort By:'
        activeOptionText={activeSort}
        options={sortChoices}
        onSelect={onSelectSort}
      />
    </TableAction>
  </TableActions>
)

export default DevicesTableActions
