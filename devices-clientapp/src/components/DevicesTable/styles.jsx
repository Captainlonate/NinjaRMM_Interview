import styled from 'styled-components'

export const TableActions = styled.div`
  display: flex;
  flex-direction: row;
`

export const TableAction = styled.div`
  min-width: 22rem;
  max-width: 30rem;
  &:not(:last-child) {
    padding-right: 2rem;
  }
`

export const RowActions = styled.div`
  display: flex;
  flex-direction: row;
`

export const RowAction = styled.div`
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 2rem;
  }
`

const matchVariantToColor = (variant, theme) => {
  switch (variant) {
    case 'primary':
      return theme.colors.primary;
    case 'secondary':
      return theme.colors.secondary
    default:
      return 'grey'
  }
}

export const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border: 1px solid ${({ theme, variant }) => matchVariantToColor(variant, theme)};
  color: ${({ theme, variant }) => matchVariantToColor(variant, theme)};
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.1s linear;

  &:hover {
    background-color: ${({ theme, variant }) => matchVariantToColor(variant, theme)};
    color: white;
  }
`