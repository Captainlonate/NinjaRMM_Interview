import styled from 'styled-components'

export const BasicInput = styled.input`
  border-radius: 4px;
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  width: 100%;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.focus};
  }
`