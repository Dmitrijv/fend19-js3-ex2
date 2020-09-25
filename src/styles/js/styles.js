import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  *:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const ColumnForm = styled.form`
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
  flex-direction: column;
  input {
    background-color: white;
  }
  select {
    margin-bottom: 10px;
  }
  label {
    margin-bottom: 4px;
  }
`;

const InfoSheet = styled.div`
  padding: 15px;
  background-color: #fafafa;
  margin-bottom: 10px;
  -webkit-box-shadow: 0 5px 7px -6px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 5px 7px -6px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 7px -6px rgba(0, 0, 0, 0.2);
  h2 {
    margin: 0 0 10px 0;
  }
`;

const SimpleFormSheet = styled(InfoSheet)`
  border: 1px solid whitesmoke;
  max-width: 350px;
  margin: 0 auto;
  input {
    margin-bottom: 10px;
  }
`;

const styles = {
  FlexContainer: FlexContainer,
  FormContainer: FormContainer,
  InputContainer: InputContainer,
  ColumnForm: ColumnForm,
  SimpleFormSheet: SimpleFormSheet,
  InfoSheet: InfoSheet
};

export default styles;
