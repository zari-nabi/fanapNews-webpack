import React, { useState, useCallback, useEffect, useMemo } from "react";

import _ from "lodash";

import { ToastContainer } from 'react-toastify';
import Routes from './routes';
import { NewsProvider, NewsContext } from "./contexts";
import getNews from "./fakeJsons/getNews";
import getUsers from "./fakeJsons/getUsers";
import getPadNews from "./fakeJsons/getPadNews";
import MasterPage from "./Layouts/Master/Master";
// import "./assets/css/style.css";

const App = () => {

  const [userId, setUserId] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [allNews, setAllNews] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [padNews, setPadNews] = useState([]);
  const [toggle, setToggle] = useState(true);

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
    setPadNews(getPadNews.items);
  }, []);


  const handleClickToggle = () => {
    setToggle(!toggle);
    console.log(toggle)
  }

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
    logout,
    padNews,
    setPadNews,
    toggle,
    setToggle
  }),
    [isLogedIn, userId, allNews, allUsers, padNews, login, logout, toggle]
  );


  return (
    <NewsProvider value={memoizedValue}>
      <MasterPage handleClick={handleClickToggle}>
        <link rel="stylesheet" href={`${process.env.PUBLIC_URL}/${toggle ? 'assets/css/style.css' : 'assets/css/style-dark.css'}`} />
        <ToastContainer />
        {/* <NavBar /> */}
        <Routes />

      </MasterPage>
    </NewsProvider>
  );
};

export default App;
