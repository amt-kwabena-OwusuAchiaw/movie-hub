import React, { useRef } from 'react';
import { image_300, image_500, unavailable } from '../../Config/Config'
import { Overview } from '../Overview/Overview';
import { Appearance, OverviewStyle } from '../Styles/Container.styled';
import {BrowserRouter,Routes ,Route,useNavigate } from "react-router-dom";
import { OverviewSub } from '../Overview/OverviewSub';
import { PeopleParent } from './PeopleParent';



export const People = ({id,poster,title,date,media_type,vote_average,popularity}: {id:number, poster:string ,
     title:string , date:string,media_type:string, vote_average:number,popularity:number }) => {
  return (
    <div>
        <PeopleParent media_type={media_type} id={id}>
                    <Appearance >        
                    <img src={poster?`${image_500}/${poster}`: unavailable}  alt={title}/>  
                    <br/>        
                    <div className='b'><b > {title}</b></div>
                    <br/>
                    {vote_average?
                    <div className={vote_average>=7?'vote':'no'}>Ratings: {vote_average!=0?vote_average: 'Not Rated '}</div> 
                    :<div className='vote'>Poularity:{popularity}</div>
            }
                    <div className='b'>{media_type === 'tv' ? "TV Series": "" }</div>
                    <div className='b'>{media_type === 'movie' ? "Movie": "" }</div>
                    <div className='b'>{media_type === 'person' ? "Into Acting": "" }</div>
                    <div className='b'>{date}</div>  
                    {/* <div className='display' ref={clicking}>
                    
                    </div>  */}
                </Appearance>
    </PeopleParent>
    </div>
  )
}
