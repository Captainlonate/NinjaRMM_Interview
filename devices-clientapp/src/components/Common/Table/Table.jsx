import { useMemo } from 'react'
import { TableContainer, TableActionsSection, TableTitle } from './styles'
import TableColumnHeaders from './TableColumnHeaders'
import TableRows from './TableRows'
import { isFunction, calculateEvenPercent } from '../../../utils'

const TableActions = ({ renderTableActions }) => (
  isFunction(renderTableActions)
    ? (
      <TableActionsSection>
        {renderTableActions()}
      </TableActionsSection>
    ) : null
)

const ACTIONS_COLUMN = { key: 'tableColActionsKey', label: 'Actions' }

const Table = ({
  rows = [],
  columns = [],
  size = 'md',
  renderTableActions,
  renderRowActions,
  activeSortCol,
  title = ''
}) => {
  const allColumns = useMemo(() => (
    isFunction(renderRowActions) ? [...columns, ACTIONS_COLUMN] : columns
  ), [columns, renderRowActions])
  const cellWidth = calculateEvenPercent(allColumns.length)

  return (
    <TableContainer size={size}>
      { title && (<TableTitle>{title}</TableTitle>) }
      <TableActions renderTableActions={renderTableActions} />
      <TableColumnHeaders columns={allColumns} cellWidth={cellWidth} activeSortCol={activeSortCol} />
      <TableRows {...{ rows, renderRowActions, cellWidth }} />
    </TableContainer>
  )
}

export default Table