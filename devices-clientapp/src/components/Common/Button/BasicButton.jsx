import styled from 'styled-components'

export const BasicButton = styled.button`
  padding: 0.5rem 1rem;
  font-weight: bold;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  background-color: white;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  box-shadow: 3px 4px 7px rgba(0,0,0,0.4);
  
  &:hover {
    box-shadow: 2px 2px 3px rgba(0,0,0,0.25);
  }
  
  &:active {
    box-shadow: none;
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
`