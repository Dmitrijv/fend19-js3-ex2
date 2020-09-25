import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ColumnForm = styled.form`
  ${FlexContainer};
  button,
  input,
  select {
    width: 100%;
  }
`;

const FormContainer = styled.div`
  text-align: left;
  margin: 0 auto;
  button {
    display: block;
    margin: 1rem auto;
    font-size: 1rem;
  }
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
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
`;

const SimpleBtn = styled.button`
  text-align: center;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 6px 12px;
`;

const WhiteBtn = styled(SimpleBtn)`
  color: #333;
  background-color: #fff;
  border-color: #ccc;
`;

const RedBtn = styled(SimpleBtn)`
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
`;

const styles = {
  FlexContainer: FlexContainer,
  FormContainer: FormContainer,
  InputContainer: InputContainer,
  ColumnForm: ColumnForm,
  SimpleFormSheet: SimpleFormSheet,
  SimpleBtn: SimpleBtn,
  WhiteBtn: WhiteBtn,
  RedBtn: RedBtn,
  InfoSheet: InfoSheet
};

export default styles;
