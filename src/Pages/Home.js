import React, { useState, useEffect } from 'react';
import axios from "axios";
import Showcard from '../components/Showcard/Showcard';
import Header from '../components/Header/Header';

const Home = () => {
  const [show, setShow] = useState([]);

  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    var showArr = [];
    for (let i = 1; i <= 15; i++) {
      showArr.push(await getShowData(i));
    }
    console.log(showArr);
    setShow(showArr);
  };

  const getShowData = async (id) => {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return res;
  };

  //filter functionality
  const filterShow = (name) => {
    if(!name) return getShows();

    let showArray = [];
    for(let i in show){
      if(show[i].data.name.toLowerCase().includes(name)){
        showArray.push(show[i]);
      }
    }
    setShow(showArray)
  }

  return (
    <>
      <section id="header">
        <Header filterShow= {filterShow} />
      </section>
      <section id="home">
        {show.map((list) => {
          return <Showcard key={list.data.id} showdata={list.data} />;
        })}
      </section>
    </>
  );
}

export default Home