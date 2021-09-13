import { isNonEmptyArray } from '../../../utils';
import { FormErrorMessagesWrapper, ErrorMessage } from './styles'

const FormErrorMessages = ({ errors = [] }) => (
  isNonEmptyArray(errors) && (
    <FormErrorMessagesWrapper>
      {
        errors.map((errorMessage, idx) => (
          <ErrorMessage key={idx}>{errorMessage}</ErrorMessage>
        ))
      }
    </FormErrorMessagesWrapper>
  )
)

export default FormErrorMessages
