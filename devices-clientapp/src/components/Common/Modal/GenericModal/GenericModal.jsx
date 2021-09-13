import React from 'react'
import {
  ModalRoot,
  ModalFrame,
  ModalHeader,
  ModalBody,
  ModalFooter,
  OptionOneButton,
  CancelButton
} from './styles'

export const GenericModal = ({
  themeColor,
  titleText,
  content,
  onOptionOne,
  onClose,
  optionOneText,
  cancelText
}) => (
  <ModalRoot onClick={onClose}>
    <ModalFrame onClick={(e) => { e.stopPropagation() }}>
      <ModalHeader themeColor={themeColor}>
        <span>{titleText}</span>
      </ModalHeader>
      <ModalBody>
        {content}
      </ModalBody>
      <ModalFooter>
        {
          (typeof onOptionOne === 'function') ? (
            <OptionOneButton themeColor={themeColor} text={optionOneText} onClick={onOptionOne} />
          ) : null
        }
        {
          (typeof onClose === 'function') ? (
            <CancelButton themeColor={themeColor} text={cancelText} onClick={onClose} />
          ) : null
        }
      </ModalFooter>
    </ModalFrame>
  </ModalRoot>
)

GenericModal.defaultProps = {
  content: null,
  titleText: 'Header',
  themeColor: '#0000ff',
  optionOneText: 'OK',
  cancelText: 'CANCEL'
}

export default GenericModal
