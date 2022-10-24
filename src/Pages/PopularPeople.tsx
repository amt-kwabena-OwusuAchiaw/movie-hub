import React, {useState,useEffect} from 'react'
import Footer from '../Components/Footer/Footer'
import { Header } from '../Components/Header/Header'
import { MovieSub } from '../Components/Movie/MovieSub'
import { People } from '../Components/People/People'
import { CenteringButtons, MoviePop } from '../Components/Styles/Container.styled'

export const PopularPeople = () => {

    const [people, setPeople] = useState<any>()
    const [page, setPage] = useState<number>(1)

    const popular:string =`https://api.themoviedb.org/3/person/popular?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&page=${page}`;

     useEffect(()=>{
      fetch(popular).then(res=>res.json()).then(data=>{
         
        console.log(data)
        setPeople(data.results)
    })    
    } ,[page])  
 

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
      
  return (
    <div style={{backgroundColor:'#141212'}}>
        <Header/>
        <div><h1 style={{textAlign:'center',color:'orange'}}> Popular People</h1></div>
        <MoviePop>
      {
        people && people.map((c:any)=>(
             <People
             key={c.id}
                  id={c.id}
                  poster ={c.profile_path}
                  title = {c.title || c.name }
                  date = {c.first_air_date || c.release_date}
                  media_type ={'person'}
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
