import { FormEventHandler } from "react";
import styled from "styled-components";

export const Form = () => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    const name = new FormData(e.currentTarget).get("name");

    if (name && typeof name === "string") {
      window.location.assign(`?name=${name}`);
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit}>
        <NameQuestionText>What's your name?</NameQuestionText>
        <input name="name" autoFocus />
        <OKButton>OK</OKButton>
      </FormContainer>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;

  background-color: #7bed9f;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NameQuestionText = styled.h1`
  font-size: 2rem;
  font-weight: 600;
`;

const OKButton = styled.button`
  padding: 0.5rem;

  border-radius: 10px;
  color: white;
  background-color: #5890ff;
`;
