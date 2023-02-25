import { SearchPages } from '../../Pages/SearchPages';
import { Container, ContainerFlex, List } from '../Styles/Container.styled';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import ham from '../../images/icon-hamburger.svg';
import { PhoneMenu } from './PhoneMenu';



export const Header = () => {
   
      const [isOpen, setIsOpen] = useState(false)

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
    <>
    <Container>
    <h2 onClick={handleHomePage}  className='h2' >The Movie Hub</h2>
   <ContainerFlex>
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
    </ContainerFlex>
    <h2 onClick={handleSearch} id='phone' className='h2'>Click to Search</h2>
    <div className='ham'>
            <button onClick={()=>setIsOpen(!isOpen)}>{ isOpen===false?<img src={ham}/>:<div style={{color:'orange'}}>&times;</div>}</button>
    </div>
    </Container>
    {isOpen && <PhoneMenu onHandleClick={setIsOpen} isOpen={isOpen} />}
    </> 
  )
}
