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
  //   form input,
  //   form button {
  //     margin-right: 0px;
  //   }
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

const styles = {
  FlexContainer: FlexContainer,
  FormContainer: FormContainer,
  InputContainer: InputContainer,
  ColumnForm: ColumnForm,
  InfoSheet: InfoSheet
};

export default styles;
