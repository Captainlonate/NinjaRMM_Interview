import styled from 'styled-components'

export const StyledSelect = styled.select`
  border-radius: 5px;
  width: 100%;
  padding: 0.5rem;
  border-color: ${({ theme }) => theme.colors.secondary};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.focus};
  }
`