import styled from 'styled-components'

export const DevicePageFullWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.ninjaBg};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`
