import React from 'react'
import styled, { keyframes } from 'styled-components'

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
`

export const ModalRoot = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 1500;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  animation: ${fadeIn} 200ms ease-out;
  * {
    box-sizing: border-box;
  }
`

export const ModalFrame = styled.div`
  background-color: white;
  width: 70%;
  max-width: 975px;
  height: 50%;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.4);
  overflow: hidden;
`

export const ModalHeader = styled.div`
  padding: 1rem;
  width: 100%;
  flex: 0 0 5em;
  background-color: ${props => props.themeColor};
  color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  span {
    font-size: 1.25em;
  }
`

export const ModalBody = styled.div`
  width: 100%;
  flex: 1 1 auto;
  overflow-y: auto;
  border-bottom: 1px solid grey;
`

export const ModalFooter = styled.div`
  padding: 1em;
  width: 100%;
  flex: 0 0 7em;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ModalBodyInner = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;
`

export const ButtonWrapper = styled.div`
  padding: 1.2rem 3.2rem;
  margin: 0 1rem;
  text-align: center;
  cursor: pointer;
  box-shadow: 3px 4px 7px rgba(0,0,0,0.4);
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    box-shadow: 2px 2px 3px rgba(0,0,0,0.25)
  }
`

export const OptionOneButtonWrapper = styled(ButtonWrapper)`
  border: 1px solid ${props => props.themeColor};
  background-color: ${props => props.themeColor};
  color: white;
`

export const CancelButtonWrapper = styled(ButtonWrapper)`
  border: 1px solid ${props => props.themeColor};
  border-width: 3px;
  color: ${props => props.themeColor};
`

export const OptionOneButton = ({ themeColor, text, onClick, className }) => (
  <OptionOneButtonWrapper
    themeColor={themeColor}
    className={className}
    onClick={onClick}
  >
    {text}
  </OptionOneButtonWrapper>
)

export const CancelButton = ({ themeColor, text, onClick, className }) => (
  <CancelButtonWrapper
    themeColor={themeColor}
    className={className}
    onClick={onClick}
  >
    {text}
  </CancelButtonWrapper>
)
