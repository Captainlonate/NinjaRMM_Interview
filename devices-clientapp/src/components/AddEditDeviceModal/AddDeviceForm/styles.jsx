import styled from 'styled-components'

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
`



export const InputGroupLeft = styled.label`
  padding: 0 0.5rem;
  flex: 1;
  font-size: 1.3rem;
  font-weight: bold;
`

export const InputGroupRight = styled.div`
  padding: 0 0.5rem;
  flex: 2;
`

export const InputGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.25rem 0;
  margin: 0.75rem 0;

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    ${InputGroupLeft} {
      width: 100%;
      padding-bottom: 0.5rem;
    }

    ${InputGroupRight} {
      width: 100%;
    }
  }
`