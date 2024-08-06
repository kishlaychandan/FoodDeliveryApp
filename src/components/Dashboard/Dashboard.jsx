import React, { useContext, useState } from 'react';
import AuthContext from '../../AuthContext';
import data from "../data";
import Navbar from '../Navbar/Navbar';
import style from "./Dashboard.module.css";
import Banner from './Banner/Banner';
import MenuCard from './MenuCard/MenuCard';
import Search from './Search/Search';
import FloatingForm from '../FloatingForm/FloatingForm';
import ChatBots from '../ChatBot/ChatBots';
import Footer from '../Footer/Footer';
function Dashboard() {
  const { logout } = useContext(AuthContext);
  const [filteredData, setFilteredData] = useState(data);

  return (
    <>
      <div className={style.dashboard}>
        <FloatingForm />
        <ChatBots />
        <Navbar />
        <Banner />
        <Search data={data} setFilteredData={setFilteredData} />
        <MenuCard filteredData={filteredData} />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
