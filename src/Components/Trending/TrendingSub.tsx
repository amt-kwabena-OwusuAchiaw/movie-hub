import React from 'react'
import { image_300, unavailable } from '../../Config/Config'
import { Overview } from '../Overview/Overview'
import { Appearance } from '../Styles/Container.styled'

export const TrendingSub = ({id,poster,title,date,media_type,vote_average}: {id:number, poster:string , title:string , date:string,media_type:string, vote_average:number }) => {
  

  return (
    <Overview media_type={media_type} id={id}>
    <Appearance>        
        <img src={poster?`${image_300}/${poster}`: unavailable}  alt={title}/>  
        <br/>        
        <div className='b'><b > {title}</b></div>
        <br/>

        <div className={vote_average>=7?'vote':'no'}>Ratings: <span  className={vote_average>=7?'checkPrimary':'checkSec'} >{vote_average!=0?(vote_average).toFixed(1):<span id ='scale' > Not Rated</span> }</span></div> 
       <div className='b'>{media_type === 'tv' ? "TV Series": "Movie " }</div>
        <div className='b'>{date}</div>  
       
    </Appearance>
    </Overview>

  )
} 


