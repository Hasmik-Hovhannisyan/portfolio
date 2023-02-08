import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./components/HomePage/Layout";
import "./App.css";
import LoginScreen from "./components/HomePage/LoginScreen";
import ProfileScreen from "./components/HomePage/ProfileScreen/ProfileScreen";
import NoMatch from "./components/HomePage/NoMatch";
import { ShoppingCartProvider } from "./components/UserContext";
import RegisterScreen from "./components/HomePage/RegistrScreen";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} >
      <Route index element={<ProfileScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      <Route path="login" element={<LoginScreen />} />
      <Route path="*" element={<NoMatch />} />
    </Route>
  )
);

function App() {
  return (
    <ShoppingCartProvider >
      <RouterProvider router={router} />
    </ShoppingCartProvider>
  );
}

export default App;
