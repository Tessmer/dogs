import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import {
  Feed,
  UserHeader,
  UserPhotoPost,
  UserStatistics,
} from "../../components";
import { Head, NotFound } from "../Helper";
import { UserContext } from "../../contexts/UserContext";

const User = () => {
  const { data } = useContext(UserContext);

  return (
    <section className="container">
      <Head title="Minha conta" />
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="post" element={<UserPhotoPost />} />
        <Route path="statistics" element={<UserStatistics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
