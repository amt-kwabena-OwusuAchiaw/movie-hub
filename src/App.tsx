import React from 'react';
import { Header } from './Components/Header/Header';
import {BrowserRouter,Routes ,Route } from "react-router-dom";
import { HomePage } from './Pages/HomePage';
import { MoviePagePopular } from './Pages/MoviePagePopular';
import { SeriesPagePopular } from './Pages/SeriesPagePopular';
import { SearchPages } from './Pages/SearchPages';
import { Overview } from './Components/Overview/Overview';
import { PopularPeople } from './Pages/PopularPeople';
import { MovieNowPlaying } from './Pages/MovieNowPlaying';
import { MoviesTopRated } from './Pages/MoviesTopRated';
import { MoviesUpComing } from './Pages/MoviesUpComing';
import { SeriesAiringToday } from './Pages/SeriesAiringToday';
import { SeriesOnTV } from './Pages/SeriesOnTV';
import { SeriesTopRated } from './Pages/SeriesTopRated';



function App() {
  return (
    <div className="App">
      <BrowserRouter  basename='/movie-hub/'>
       <div> 
         <Routes>
          
         
            <Route  path="/" element={<HomePage/>}/>
             <Route path='popular'  element={<MoviePagePopular/>}/>
            <Route path='seriesPopular'  element={<SeriesPagePopular/>}/>
            <Route path='search' element={<SearchPages/>}/>
            <Route path='people' element={<PopularPeople/>}/>
            <Route path='movieNowPlaying' element={<MovieNowPlaying/>}/>
            <Route path='movieTopRated' element={<MoviesTopRated/>}/>
            <Route path='movieUpComing' element={<MoviesUpComing/>}/>
            <Route path='seriesAiringToday' element={<SeriesAiringToday/>}/>
            <Route path='seriesOnTV' element={<SeriesOnTV/>}/>
            <Route path='seriesTopRated' element={<SeriesTopRated/>}/>
            
         </Routes>
          
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
