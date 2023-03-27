import React, { useState, useEffect } from 'react';
import axios from "axios";
import Showcard from '../components/Showcard/Showcard';
import Header from '../components/Header/Header';
import  './Home.css';

const Home = () => {
  const [show, setShow] = useState([]);
  const [filtered, setFiltered] = useState('');
 
  useEffect(() => {
    getShows();
  }, []);

  const getShows = async () => {
    var showArr = [];
    for (let i = 1; i <= 15; i++) {
      showArr.push(await getShowData(i));
    }
    setShow(showArr);
    setFiltered(showArr);
  };

  const getShowData = async (id) => {
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return res;
  };

  //search functionality
  const searchShow = (name) => {
    if(!name) return getShows();

    let showArray = [];
    for(let i in show){
      if(show[i].data.name.toLowerCase().includes(name)){
        showArray.push(show[i]);
      }
    }
    setShow(showArray)
  }

  //filter by genre

     const filterGenre = (filterValue) =>{
     var genreArray = filtered.filter((genreList)=>{
       if (genreList.data.genres.includes(filterValue)) {
         return genreList;
       } else if (filterValue === "All") {
         return filtered;
       } 
      return genreArray;
     });
     setShow(genreArray);
  }

  return (
    <>
      <section id="header">
        <Header searchShow= {searchShow}  filterGenre={filterGenre} />
      </section>
      <section id="home">
        {show.map((list) => {
          return (
            <Showcard
              key={list.data.id}
              showdata={list.data}
              filterGenre={filterGenre}
            />
          );
        })}
      </section>
    </>
  );
}

export default Home