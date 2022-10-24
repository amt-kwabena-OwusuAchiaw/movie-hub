import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Containergrid } from '../Styles/Container.styled';


export const PhoneMenu = ({onHandleClick,isOpen}:{onHandleClick:any,isOpen:any}) => {
    let history = useNavigate();
    const handleMoviePopular =()=>{
          history('/popular')
   }

   const handleHomePage=()=>{
      history('/')
   }

   const handleMovieNowPlaying =()=>{

      history('/movieNowPlaying')
   }

   const handleMovieTopRated =()=>{
       history('/movieTopRated')
   }

    const handleMovieUpComing =()=>{
          history('/movieUpComing')

    }

    const handleSeriesPopular =()=>{
       history('/seriesPopular')
    }

    const handleSeriesAiringToday =()=>{
      history('/seriesAiringToday')
    }

    const handleSeriesOnTV =()=>{
        history('/seriesOnTV')
    }


    const handleSeriesTopRated =()=>{
       history('/seriesTopRated')
    }


    const handlePeople =()=>{

       history('/people')
    }

    const handleSearch =()=>{

      history('/search')
    }


  return (
    <Containergrid>
          <li><a href='#'>Movies <i className="fas fa-caret-down" />  </a>
             <ul>
                <li onClick={handleMoviePopular}>Popular</li>
                <li onClick={handleMovieNowPlaying}>Now Playing</li>
                <li onClick={handleMovieTopRated}>Top Rated</li>
                <li onClick={handleMovieUpComing}> Up Coming</li>
            </ul>
        </li>
        <li><a href='#'>TV shows <i className="fas fa-caret-down" /> </a>
            <ul>
                <li onClick={handleSeriesPopular}>Popular</li>
                <li onClick={handleSeriesAiringToday}>Airing Today</li>
                <li onClick={handleSeriesOnTV}> On TV</li>
                <li onClick={handleSeriesTopRated}> Top Rated</li>
            </ul>
        </li>
        <li><a href='#'>People  <i className="fas fa-caret-down" /> </a>
            <ul>
                <li onClick={handlePeople}>Popular People </li>        
            </ul>
         </li>

      <li>    <h4 onClick={handleSearch}  className='h2' >Click to Search</h4>
      </li> 
    </Containergrid>
  )
}
