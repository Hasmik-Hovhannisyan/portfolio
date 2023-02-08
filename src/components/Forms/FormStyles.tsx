import styled from "styled-components";

const Form = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.7),
    rgba(255, 255, 255, 0.3)
  );
`;

const Input = styled.input`
  padding: 7px;
  margin: 4px 0px;
  border-radius: 5px;
  border: 1px solid grey;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  color: grey;
`;

const Div = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap:5px;
  width: 300px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
const FeedBack = styled.p`
  color: red;
  font-size: 10px;
`;
const Button = styled.button`
  height: 50px;
  padding: 10px;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 15px;
  text-transform: uppercase;
  cursor: pointer;
  margin:10px auto;
`;

const Title = styled.h1`
margin-bottom:15px;
text-transform:uppercase;
font-weight:bold;
text-align:center;
color: rgba(39, 90, 107, 1);
letter-spacing:1.1px;
font-size:20px;
`

export { Form, Input, Button, Div, FeedBack, Label, Title};
