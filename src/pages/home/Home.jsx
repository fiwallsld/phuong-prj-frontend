import React, { useEffect } from "react";
import Header from "../../components/header/Header";
import { useUser } from "../../store/userContext";
import alertify from "alertifyjs";

import "./home.css";
import HomeContent from "./HomeContent";

const Home = () => {
  const { user, userAxios } = useUser();

  useEffect(() => {
    const getData = async () => {
      try {
        // const res = await userAxios.get(`hotels`);
      } catch (err) {
        alertify.set("notifier", "position", "top-center");
        alertify.error(`Something went wrong!`);
      }
    };
    getData();
  }, [user]);

  return (
    <>
      <Header />
      <div className="p-10">
        <HomeContent />
      </div>
    </>
  );
};

export default Home;
