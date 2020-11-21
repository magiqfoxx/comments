import React, { useState } from "react";
import { Formik, ErrorMessage as FormikErrorMessage } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import Form, { Field, Label, ErrorMessage } from "../components/Form";
import Container from "../components/Container";
import Button from "../components/Button";
import Card, { Top, Bottom } from "../components/Card";
import { leaveLetters, removeLetters } from "../helpers";

const Result = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  width: 100%;
`;

const validationSchema = Yup.object().shape({
  letters: Yup.string()
    .matches(/[a-zA-Z]/)
    .required("Required"),
  text: Yup.string()
    .matches(/^[a-zA-Z\s]*$/)
    .required("Required"),
  select: Yup.string().min(2, "Too Short!").required("Required"),
});

export interface FilterProps {}

const Filter: React.SFC<FilterProps> = () => {
  const [result, setResult] = useState("");
  return (
    <Container>
      <Card>
        <Top>Filter letters</Top>
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
              <Label htmlFor="letters">Letters</Label>
              <Field id="letters" name="letters" placeholder="[a-Z]" />
              <ErrorMessage>
                <FormikErrorMessage name="letters" />
              </ErrorMessage>
              <Label htmlFor="text">Text</Label>
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
              <div>
                <Label>
                  Leave
                  <Field type="radio" id="select" name="select" value="leave" />
                </Label>
                <Label>
                  Remove
                  <Field
                    type="radio"
                    id="select"
                    name="select"
                    value="remove"
                  />
                </Label>
              </div>
              <ErrorMessage>
                <FormikErrorMessage name="select" />
              </ErrorMessage>
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
          {result && <Result>{result}</Result>}
        </Bottom>
      </Card>
    </Container>
  );
};

export default Filter;
