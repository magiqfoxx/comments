import styled from "styled-components";
import { Field as FormikField, Form as FormikForm } from "formik";

const Form = styled(FormikForm)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Label = styled.label`
  color: #607d8b;
`;
export const Field = styled(FormikField)`
  border-radius: 2px;
  border: 1px solid #d9d9d9;
  margin: 0.5rem 0;
  padding: 0.2rem 0.8rem;
  color: rgba(0,0,0,.85);
  font-size: 14px;
  ::placeholder{
      color:rgb(181,177,177);
  }
`;
export const ErrorMessage = styled.div`
  font-size:14px;
  color: #E91E63;
  margin-bottom: 0.5rem;
  height: 1rem;`;

export const RadioGroup = styled.div`
label:not(:last-child){
  margin-right: 1rem;
}
input{
    margin-right: 0.5rem;
  }
`;

export default Form;