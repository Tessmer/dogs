import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import {
  PasswordLost,
  PasswordReset,
  SignUp,
  LoginForm,
} from "../../components";
import { NotFound } from "../Helper";
import { UserContext } from "../../contexts/UserContext";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useContext(UserContext);

  if (login === true) return <Navigate to="/account" />;
  return (
    <section className={styles.login}>
      <div className={styles.forms}>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="create" element={<SignUp />} />
          <Route path="lost" element={<PasswordLost />} />
          <Route path="reset" element={<PasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
