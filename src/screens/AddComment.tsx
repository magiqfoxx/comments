import React from "react";
import { Formik, ErrorMessage as FormikErrorMessage } from "formik";

import { useDispatch } from "react-redux";

import { commentAdded } from "../store/comments";
import Form, { Field, Label, ErrorMessage } from "../components/Form";
import Container from "../components/Container";
import Button from "../components/Button";
import Card, { Top, Bottom } from "../components/Card";
import { addCommentValidationSchema as validationSchema } from "../helpers/validationSchema";

export interface AddCommentProps {}

const AddComment: React.SFC<AddCommentProps> = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Card>
        <Top>Add a new comment</Top>
        <Bottom>
          <Formik
            initialValues={{
              name: "",
              email: "",
              body: "",
            }}
            validationSchema={validationSchema}
            onSubmit={({ name, email, body }) => {
              dispatch(commentAdded({ name, email, body }));
            }}
          >
            <Form>
              <Label htmlFor="name">Name</Label>
              <Field id="name" name="name" placeholder="Jane" />
              <ErrorMessage>
                <FormikErrorMessage name="name" />
              </ErrorMessage>
              <Label htmlFor="email">Email</Label>
              <Field
                id="email"
                name="email"
                placeholder="jane@acme.com"
                type="email"
              />
              <ErrorMessage>
                <FormikErrorMessage name="email" />
              </ErrorMessage>
              <Label htmlFor="body">Contents</Label>
              <Field
                component="textarea"
                id="body"
                name="body"
                placeholder="This is the content of your comment"
              />
              <ErrorMessage>
                <FormikErrorMessage name="body" />
              </ErrorMessage>
              <Button type="submit">Submit</Button>
            </Form>
          </Formik>
        </Bottom>
      </Card>
    </Container>
  );
};

export default AddComment;
