
import React from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from "./components/HeroSection/Hero";
import Section from "./components/Section/Section";
import Filter from "./components/FilterSection/Filter";
import { useState,useEffect } from 'react';
//import { fetchTopAlbum,fetchNewAlbum } from './Api/Api';

const ENDPOINT = 'https://qtify-backend-labs.crio.do/';

function App() {

  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [genres, setGenres] = useState([]);


  useEffect(() => {
    axios.get(`${ENDPOINT}albums/top`)
    .then(({data}) =>{
       setTopAlbums(data)
    })
    axios.get(`${ENDPOINT}albums/new`)
    .then(({data}) =>{
       setNewAlbums(data)
    })
    axios.get(`${ENDPOINT}songs`)
    .then(({data}) =>{
       setSongs(data)
       setFilteredSongs(data)
    })
    axios.get(`${ENDPOINT}genres`)
    .then(({data}) =>{
      setGenres([{"key":"all","label":"All"}, ...data.data])
    })
  }, [])
 

  console.log(topAlbums);


  return (
    //  <div className="App">
    //    <header className="App-header">
    // //     {/* <img src={logo} className="App-logo" alt="logo" />
    // //     <p>
    

    <>
    <Navbar />
    <HeroSection />
    <Section  navID = "ta" title='Top Albums' data={topAlbums}/>
    <Section  navID = "na" title='New Albums' data={newAlbums}/>
    <Filter title='Songs'  data={filteredSongs} filters={genres} 
     executeFilter = {(genre) =>{
       if(genre==='all'){
        setFilteredSongs(songs)
        } else{
        setFilteredSongs(songs.filter(song => song.genre.key === genre))
       }

     }}/>
    </>
  );
}

export default App;