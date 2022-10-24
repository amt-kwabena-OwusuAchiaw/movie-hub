import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { MovieSub } from '../Components/Movie/MovieSub';
import { People } from '../Components/People/People';
import { Container, ContainerFlex, ContainerforSearch, MainApperance, MoviePop, MoviePopSub, SearchStyle } from '../Components/Styles/Container.styled';

export const SearchPages = (  ) => {
 

    const [searchText, setSearchText] = useState('');
  const [ searchMovie , setSearchMovie] = useState<any>();
   const [searchSer, setSearchSer] = useState<any>();
   const [searchPerson , setSearchPerson]= useState<any>();
    const [ results, setResults] = useState<any>(false)

    const [empty, setEmpty] =useState<any>(0);

    const [ begin, setBegin] = useState<any>(true);
  
    const [multiple, setMultiple] = useState<any>();
    const history = useNavigate();
            
    const handleSubmit =(event:any)=>{

        event.preventDefault();
          if (searchText!=''){
        const searchMovies =`https://api.themoviedb.org/3/search/movie?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US&query=${searchText}&page=1&include_adult=false`
        const searchSeries = `https://api.themoviedb.org/3/search/tv?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US&query=${searchText}&page=1&include_adult=false`;
        const  searchPeople = `https://api.themoviedb.org/3/search/person?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US&query=${searchText}&page=1&include_adult=false` 
          const all = `https://api.themoviedb.org/3/search/multi?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US&query=${searchText}&page=1&include_adult=false`
        fetch(searchMovies).then(res=> res.json()).then(data =>{
          
          setSearchMovie(data.results);       
         })

         fetch(searchSeries).then(res =>res.json()).then(data =>{
          setSearchSer(data.results);


         })

         fetch(searchPeople).then(res => res.json()).then(data =>{
        
          setSearchPerson(data.results);
          
         })
         
         fetch(all).then(res=>res.json()).then(data =>{
            setMultiple(data.results);
          
              
         })
    
}

setSearchText('')
 
  
}

useEffect(()=>{
  if ( multiple){
    setBegin(false)
    setResults(true)
    setEmpty(1)
  }    
  
  if(multiple?.length<1){
    setResults(false)
    setEmpty(true);
  }
})



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
    <SearchStyle >

<ContainerforSearch>
<h2 onClick={handleHomePage} style={{cursor:'pointer', color:'orange'}}>The Movie Hub</h2>
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

    <form  className='form' action=""  onSubmit={handleSubmit}>
    <input  type='text'  placeholder='Search for movies,tv series and people here'  value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
    <button type="submit"  className='letsSearch' onClick={handleSubmit}><i className="fa fa-search"></i></button>
    </form>      
    </ContainerforSearch>
       {begin && <div style={{textAlign:'center', fontSize:'20px',display:'flex', justifyContent:'center',marginTop:'40vh' ,height:'100vh'}}>Please Begin your Search </div>}
     
       {results===true ?<div  style={{fontSize:'20px',textAlign:'center'}}> Your Search Results</div>:'' }
       {typeof(empty)==='boolean' ? <p  style={{textAlign:'center', fontSize:'20px',display:'flex', justifyContent:'center',marginTop:'40vh' ,height:'100vh'}}>Nothing found please</p>:''}
    

       <MoviePopSub>
       {
      searchMovie?
      searchMovie && searchMovie.map((c:any)=>(

        <MovieSub 
              key={c.id}
              id={c.id}
              poster ={c.poster_path}
              title = {c.title || c.name }
              date = {c.first_air_date || c.release_date}
              media_type ='movie'
              vote_average ={c.vote_average}
              popularity ={c.popularity}
              /> 
            ))  : ' '
        }         
       
         


      {/* <div>Series</div> */}
          {
      searchSer?
      searchSer && searchSer.map((c:any)=>(

        <MovieSub 
              key={c.id}
              id={c.id}
              poster ={c.poster_path}
              title = {c.title || c.name }
              date = {c.first_air_date || c.release_date}
              media_type ='tv'
              vote_average ={c.vote_average}
              popularity ={c.popularity}
              /> 
            ))  : ' '
        }
      

      {/* <div> People </div> */}
     


{
            searchPerson?
            searchPerson && searchPerson.map((c:any)=>(

              <People 
              key={c.id}
              id={c.id}
              poster ={c.profile_path}
              title = {c.title || c.name }
              date = {c.first_air_date || c.release_date}
              media_type ='person'
              vote_average ={c.vote_average}
              popularity ={c.popularity}
              /> 
            ))  : ' '    
          }
      </MoviePopSub>

    </SearchStyle>
  )
}
