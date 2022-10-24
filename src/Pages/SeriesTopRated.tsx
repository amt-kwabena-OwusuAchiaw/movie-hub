import React ,{useState,useEffect}from 'react'
import Footer from '../Components/Footer/Footer';
import { Genres } from '../Components/Genres/Genres';
import { Header } from '../Components/Header/Header'
import { MovieSub } from '../Components/Movie/MovieSub';
import { CenteringButtons, GenreFlex, MoviePop } from '../Components/Styles/Container.styled';
import { useCreated } from '../Components/CustomHooks/useCreated';

///////////////////////////////////////// Series/////////////////////////////
export interface genre{
    id:number,
    name:string,
    map?:any
  
  }
export const SeriesTopRated = () => {
 
    const [page, setPage] = useState<number>(1);
    const [genresSelected, setGenresSelected] = useState<any>([]);
    const [allgenres,setAllGenres] = useState<any>([]);
  
    const createdGenre = useCreated(genresSelected);
  
    const popular:string = `https://api.themoviedb.org/3/tv/popular?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US&include_adult=false&include_video=false&page=${page}&with_genres=${createdGenre}` ;
      interface genre{
            id:number,
            name:string
  
      }
  
  
      interface movie{
          page?:number,
          results?:any[],
          total_pages?:number,
          total_results?:number,
          map?: any
           }
      
          interface c{
             adult:boolean,
             backdrop_path: string,
             first_air_date: string,
             genre_ids: number[],
             id:number,
             media_type:string,
             name: string,
             origin_country:string[],
             original_language:string,
             overview:string,
             popularity:number,
             poster_path: string,
             vote_average: number,
             vote_count:number,
             title:string,
             release_date: string,
          
          }
      
      
      
      
             const [popularMovies, setPopularMovies] = useState<movie>();
        
             const back = () =>{
              
              if (page!==1){
                window.scroll({top: 0, behavior: "smooth"})
                return setPage(page-1)
              }
      
             }
              const next = ()=>{
                window.scroll({top: 0, behavior: "smooth"})
               return setPage(page+1)
      
              }
        useEffect(()=>{
      
          fetch(popular).then(res=> res.json()).then(data=>{
      
            console.log(data)
            setPopularMovies(data.results);
      
          })
      
        },[page,createdGenre])
      
      
    return (
      <div style={{backgroundColor:'#141212'}}>
        <Header/>
         
         <div><h1 style={{textAlign:'center',color:'orange'}}> Top Rated Series</h1></div>
       <Genres type='tv' genresSelected={genresSelected} setGenresSelected={setGenresSelected}  allgenres={allgenres} setAllGenres={setAllGenres} setPage={setPage}/> 
       <MoviePop>
        {
          popularMovies && popularMovies.map((c:c)=>(
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
          ))
        }
        <br/>
        <br/>
        </MoviePop>
        <CenteringButtons>
        <div className='button' > <button onClick={back}><i className="fa fa-arrow-left" style={{paddingRight:'6px'}}></i>Back </button> {page} <button onClick={next}>Next<i className="fa fa-arrow-right" style={{paddingLeft:'6px'}}></i></button> </div>
       </CenteringButtons>
       <Footer/>
  
      
      
      
      </div>
    )
  }
  