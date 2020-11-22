import React, { useState } from "react";
import { Formik, ErrorMessage as FormikErrorMessage } from "formik";
import styled from "styled-components";

import Form, {
  Field,
  Label,
  ErrorMessage,
  RadioGroup,
} from "../components/Form";
import Container from "../components/Container";
import Button from "../components/Button";
import Card, { Top, Bottom } from "../components/Card";
import { leaveLetters, removeLetters } from "../helpers/helpers";
import { filterValidationSchema as validationSchema } from "../helpers/validationSchema";

const Result = styled.div`
  text-align: center;
  width: 100%;
  border: 1px solid rgb(236, 236, 236);
  margin-top: 1rem;
  padding: 0.5rem;
`;

export interface FilterProps {}

const Filter: React.SFC<FilterProps> = () => {
  const [result, setResult] = useState("");
  return (
    <Container>
      <Card>
        <Top>Filtr</Top>
        <Bottom>
          <Formik
            initialValues={{
              letters: "",
              text: "",
              select: "leave",
            }}
            validationSchema={validationSchema}
            onSubmit={async ({ letters, text, select }) => {
              select === "remove"
                ? setResult(removeLetters(letters, text))
                : setResult(leaveLetters(letters, text));
            }}
          >
            <Form>
              <Label htmlFor="letters">Litery</Label>
              <Field id="letters" name="letters" placeholder="[a-Z]" />
              <ErrorMessage>
                <FormikErrorMessage name="letters" />
              </ErrorMessage>
              <Label htmlFor="text">Tekst</Label>
              <Field
                component="textarea"
                rows="4"
                cols="17"
                id="text"
                name="text"
                placeholder="[a-Z\s]"
              />
              <ErrorMessage>
                <FormikErrorMessage name="text" />
              </ErrorMessage>
              <RadioGroup>
                <Label>
                  <Field type="radio" id="select" name="select" value="leave" />
                  Pozostaw
                </Label>
                <Label>
                  <Field
                    type="radio"
                    id="select"
                    name="select"
                    value="remove"
                  />
                  Usuń
                </Label>
              </RadioGroup>
              <ErrorMessage>
                <FormikErrorMessage name="select" />
              </ErrorMessage>
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
          {result && (
            <Result>
              <p>Result: {result}</p>
            </Result>
          )}
        </Bottom>
      </Card>
    </Container>
  );
};

export default Filter;
