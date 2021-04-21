import React, { useState, useCallback, useEffect, useMemo } from "react";

import _ from "lodash";

import { ToastContainer } from 'react-toastify';
import NavBar from "./components/Navbar";
import Routes from './routes';
import { NewsProvider, NewsContext } from "./contexts";
import getNews from "./fakeJsons/getNews";
import getUsers from "./fakeJsons/getUsers";
import MasterPage from "./Layouts/Master/Master";

const App = () => {

  const [userId, setUserId] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [allNews, setAllNews] = useState([]);
  const [allUsers, setAllUsers] = useState([]);

  const login = useCallback((userId) => {
    setIsLogedIn(true);
    setUserId(userId);
    // localStorage.setItem(
    //   "token",
    //   JSON.stringify(userId)
    // );
  }, []);

  const logout = useCallback(() => {
    setIsLogedIn(false);
    setUserId(null);
    localStorage.removeItem("token");
  }, []);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("token"));
    if (storedData) {
      login(storedData);
    }
  }, [login]);

  useEffect(() => {
    setAllNews(getNews.items);
    setAllUsers(getUsers.items);
  }, []);

  const memoizedValue = useMemo(() => ({
    isLogedIn,
    setIsLogedIn,
    userId,
    setUserId,
    allUsers,
    setAllUsers,
    allNews,
    setAllNews,
    login,
    logout
  }),
    [isLogedIn, userId, allNews, allUsers, login, logout]
  );


  return (
    <NewsProvider value={memoizedValue}>
      <MasterPage>
        <ToastContainer />
        {/* <NavBar /> */}
        <Routes />

      </MasterPage>
    </NewsProvider>
  );
};

export default App;
