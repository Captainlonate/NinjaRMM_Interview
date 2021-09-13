import { memo } from 'react'
import { TableCell, TableRow, EmptyRow } from './styles'
import { isFunction, isNonEmptyArray } from '../../../utils'

const TableRows = ({ rows = [], renderRowActions, cellWidth = '100%' }) => (
  isNonEmptyArray(rows)
    ? (
      rows.map(({ rowKey, rowData, rowCells }) => (
        <TableRow key={rowKey}>
          {
            rowCells.map((cellContents, idx) => (
              <TableCell key={`row-${rowKey}-col-${idx}`} flex={cellWidth}>
                {cellContents}
              </TableCell>
            ))
          }
          {
            isFunction(renderRowActions) && (
              <TableCell key={`row-${rowKey}-actions`} flex={cellWidth}>
                {renderRowActions(rowData)}
              </TableCell>
            )
          }
        </TableRow>
      ))
    )
    : (
      <EmptyRow>No Results</EmptyRow>
    )
)

export default memo(TableRows)
