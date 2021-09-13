import styled from 'styled-components'

const sizingChart = (size = null) => {
  switch (size) {
    case 'xs':
      return '0.1rem'
    case 'sm':
      return '0.25rem'
    case 'md':
      return '0.5rem'
    case 'lg':
      return '1rem'
    case 'xl':
      return '1.5rem'
    default:
      return '0'
  }
}

export const TableCell = styled.div`
  flex: 0 0 ${(props) => props.flex || '1'};
  word-break: break-word;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
`

export const TableHeaderRow = styled(TableRow)`
  ${TableCell} {
    font-weight: bold;
    font-size: 1.2em;
  }
`

export const EmptyRow = styled.div`
  flex: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem 0 0;
`

export const TableActionsSection = styled.section`
  margin-bottom: 1rem;
`

export const TableTitle = styled.h2`
  margin: 0;
  display: block;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 1px;
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.colors.secondary};
`

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${(props) => sizingChart(props.size)};

  ${TableCell} {
    padding: ${(props) => sizingChart(props.size)} 0.5rem;
  }

  ${TableActionsSection} {
    padding: ${(props) => sizingChart(props.size)} 0.5rem;
  }
`
