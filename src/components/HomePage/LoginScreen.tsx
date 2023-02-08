import React, { useRef, useEffect } from "react";
import FormType from "../Forms/FormType";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useShoppingCart } from "./../UserContext";

import {
  Form,
  Input,
  Button,
  Div,
  FeedBack,
  Label,
  Title
} from "../Forms/FormStyles";

const LoginScreen = () => {
  let navigate: NavigateFunction = useNavigate();
  const {setFirstName} = useShoppingCart()

  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormType) => {
    console.log(JSON.stringify(data, null, 2));
    fetch('https://dummyjson.com/auth/RESOURCE', {
      method: 'GET', 
      headers: {
        'Authorization': `Bearer /${data}/` ,
        'Content-Type': 'application/json'
      }, 
    })
    .then(res => res.json())
    .then(data =>setFirstName(data))
    navigate("/");
  };

  const elementRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.onclick = (event: MouseEvent) => {
      const target = event.target as HTMLDivElement;
      if (
        target?.contains(elementRef.current) &&
        target !== elementRef.current
      ) {
        navigate("/");
      }
    };
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Div ref={elementRef}>
        <Title>Login</Title>
        <div>
          <Label> Email</Label>
          <Input type="text" {...register("email")} />
          <FeedBack>{errors.email?.message}</FeedBack>
        </div>
        <div>
          <Label> Password</Label>
          <Input type="password" {...register("password")} />
          <FeedBack>{errors.password?.message}</FeedBack>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="submit"
            className="gradient__bg"
          >
            sign in
          </Button>
        </div>
      </Div>
    </Form>
  );
};
export default LoginScreen;
