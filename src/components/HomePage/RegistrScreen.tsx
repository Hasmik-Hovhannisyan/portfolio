import { useEffect, useRef} from "react";
import FormType from "../Forms/FormType";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm} from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Div,
  FeedBack,
  Label,
  Title
} from "../Forms/FormStyles";

const RegisterScreen = () => {
  let navigate: NavigateFunction = useNavigate();

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string()
      .required("Last name is required")
      .min(4, "Username must be at least 4 characters")
      .max(20, "Username must not exceed 20 characters"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match"),
    acceptTerms: Yup.bool().oneOf([true], "Accept Terms is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data: FormType) => {
    console.log(JSON.stringify(data, null, 2));
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(console.log);
    navigate("/login");
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
        <Title>Registration</Title>
              <div>
          <Label> First Name</Label>
          <Input type="text" {...register("firstName")} />
          <FeedBack>{errors.firstName?.message}</FeedBack>
        </div>
        <div>
          <Label> Last Name</Label>
          <Input type="text" {...register("lastName")} />
          <FeedBack>{errors.lastName?.message}</FeedBack>
        </div>
        <div>
          <Label> Email</Label>
          <Input type="text" {...register("email")} />
          <FeedBack>{errors.email?.message}</FeedBack>
        </div>
        <div>
          <Label> Birthday</Label>
          <Input type="date" {...register("birthday")} />
          <FeedBack>{errors.birthday?.message}</FeedBack>
        </div>
        <div>
          <Label> Password</Label>
          <Input type="password" {...register("password")} />
          <FeedBack>{errors.password?.message}</FeedBack>
        </div>
        <div>
          <Label> Confirm Password</Label>
          <Input type="password" {...register("confirmPassword")} />
          <FeedBack>{errors.confirmPassword?.message}</FeedBack>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            type="submit"
            className = "gradient__bg"
          >
            Register
          </Button>
          <Button
            type="button"
            onClick={() => reset()}
            style={{
              backgroundColor: "grey",
            }}
          >
            Reset
          </Button>
        </div>
      </Div>
    </Form>
  );
};
export default RegisterScreen;
