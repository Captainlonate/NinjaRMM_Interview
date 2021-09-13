import { memo } from 'react'
import { TableCell, TableHeaderRow } from './styles'

const TableColumnHeaders = ({ columns = [], cellWidth = '100%' }) => (
  <TableHeaderRow>
    {
      columns.map(({ key, label }) => (
        <TableCell key={key} flex={cellWidth}>
          {label}
        </TableCell>
      ))
    }
  </TableHeaderRow>
)

export default memo(TableColumnHeaders)
