import styled from 'styled-components'

export const TextSelectContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const Label = styled.label`
  font-size: 1.3rem;
  cursor: pointer;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: underline;
`

export const ActiveOptionText = styled.label`
  font-size: 1.1rem;
  font-style: italic;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
`

export const ActiveChoice = styled.div`
  display: inline-block;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.25rem 0.5rem;
  cursor: pointer;
  user-select: none;
  margin: 0 0.25rem 0.25rem 0;

  &:hover {
    border-color: white;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`

export const ActiveChoicesContainer = styled.div`
  padding: 1rem 0;
`

export const DropdownContent = styled.ul`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  padding: 0;
  margin: 0;
  background-color: white;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
  border-radius: 4px;
  z-index: 1;
`

export const DropdownItem = styled.li`
  list-style: none;
  cursor: pointer;
  padding: 1rem 2rem;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`