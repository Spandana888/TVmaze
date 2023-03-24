import React, { useState, useEffect } from 'react';
import axios from "axios";
import Showcard from '../components/Showcard/Showcard';

const Home = () => {
  const [show, setShow ] = useState([]);

    useEffect(() => {
      getShows();
    }, []);

  const getShows = async() =>{
     var showArr = [];
     for(let i=1; i<=15; i++){
        showArr.push(await getShowData(i));
     }
     console.log(showArr);
     setShow(showArr);
  }

  const getShowData = async (id) =>{
    const res = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return res;
  }

  return (
    <>
      {show.map((list)=>{
        return(
            <Showcard key={list.data.id}
              showdata={list.data}
            />
        )
      })}
    </>
  )
}

export default Home