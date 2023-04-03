import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Header,
  Footer,
  Home,
  Login,
  User,
  Photo,
  UserProfile,
} from "./components";
import { UserStorage } from "./contexts/UserContext";
import "./App.css";
import { NotFound, ProtectedRoute } from "./components/Helper";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="login/*" element={<Login />} />
              <Route
                path="account/*"
                element={
                  <ProtectedRoute>
                    <User />
                  </ProtectedRoute>
                }
              />
              <Route path="photo/:id" element={<Photo />} />
              <Route path="profile/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
