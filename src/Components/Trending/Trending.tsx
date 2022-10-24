import React,{useState, useEffect} from 'react'
import { MainApperance } from '../Styles/Container.styled';
import { TrendingSub } from './TrendingSub';

export const Trending = () => {
     interface trends{
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


     const trending:string =`https://api.themoviedb.org/3/trending/all/day?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f`
     const [ trend, setTrend ] = useState<trends>();
  


     useEffect(()=>{
      
        fetch(trending).then(res => res.json()).then((data)=>{
        //    console.log(data.results)
          return setTrend(data.results);

     })

     },[])


  return (
    
    <div> 
         <MainApperance>
             {trend && trend.map((c:c )=> (

                <TrendingSub key={c.id}
                id={c.id}
                poster ={c.poster_path}
                title = {c.title || c.name }
                date = {c.first_air_date || c.release_date}
                media_type ={c.media_type}
                vote_average ={c.vote_average}
                />
             ))}

         </MainApperance>


    </div>
  )
}


