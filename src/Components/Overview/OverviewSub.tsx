import React,{useState} from 'react'
import { image_300, unavailable,noPicture } from '../../Config/Config';
import { Credits } from '../Styles/Container.styled';

export const OverviewSub = ({media_type,id}:{media_type:any, id:number}) => {
  const [credits, setCredits] =useState<any>();
  
   fetch(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US`)
  .then(res=> res.json())
  .then(data=>{

   // console.log(data.cast);
     setCredits(data.cast)
  })
  return (
    <Credits>

      {credits?.length>0?
        credits && credits.map((c:any)=>(
          <div style={{display:'flex',flexDirection:'column'}}>
          <img  
             src={c.profile_path ? `${image_300}/${c.profile_path}`: noPicture}
            alt={c.name}
            />
            <b className='name'>{c.name}</b>
            </div> 
        )):''
      }



    </Credits>
  )
}
