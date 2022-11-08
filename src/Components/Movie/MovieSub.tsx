import React, { useRef } from 'react';
import { image_300, image_500, unavailable } from '../../Config/Config'
import { Overview } from '../Overview/Overview';
import { Appearance, OverviewStyle } from '../Styles/Container.styled';
import {BrowserRouter,Routes ,Route,useNavigate } from "react-router-dom";
import { OverviewSub } from '../Overview/OverviewSub';






export const MovieSub = ({id,poster,title,date,media_type,vote_average,popularity}: {id:number, poster:string , title:string , date:string,media_type:string, vote_average:number,popularity:number }) => {
  const clicking:any = useRef();
  const history = useNavigate();
   const handleDisplay = ()=>{
    
   // clicking.current.style.display='block';
   // window.scroll({top: 0, behavior: "smooth"});
     //history('../overview')
   //history('/overview')
   //history('overview')
   }

  return (
   <Overview media_type={media_type} id={id}>
    <Appearance onClick={handleDisplay}>        
       <div style={{textAlign:'center'}}> <img src={poster?`${image_500}/${poster}`: unavailable}  alt={title}/></div>
        <br/>        
        <div className='b'><b > {title}</b></div>
        <br/>
        {vote_average?
        <div className={vote_average>=7?'vote':'no'}>Ratings: <span className={vote_average>=7?'checkPrimary':'checkSec'}>{vote_average!=0?(vote_average).toFixed(1): <span style={{backgroundColor:'#141212' , color: 'orange' , padding:'7px' , borderRadius:'50%'}}> Not Rated</span>}</span></div> 
        :<div className='vote'>Poularity:{popularity}</div>
}
        <div className='b'>{media_type === 'tv' ? "TV Series": "" }</div>
        <div className='b'>{media_type === 'movie' ? "Movie": "" }</div>
        <div className='b'>{media_type === 'person' ? "Into Acting": "" }</div>
        <div className='b'>{date}</div>  
         {/* <div className='display' ref={clicking}> 
         
         </div>  */}
    </Appearance>
  </Overview>
  )
}
