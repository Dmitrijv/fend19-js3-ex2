import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.div`
  text-align: left;
  margin: auto;
  button {
    display: block;
    margin: 1rem auto;
    font-size: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 0.5rem 0;
  font-size: 1.2rem;
  label {
    margin-right: 1rem;
  }
  input {
    font-size: 1rem;
    width: 200px;
  }
`;

const styles = {
  FlexContainer: FlexContainer,
  FormContainer: FormContainer,
  InputContainer: InputContainer
};

export default styles;
