import React, { useState ,useRef,useEffect} from 'react'
import { image_500, noPicture, unavailable } from '../../Config/Config';
import { ForEveryone, Overviewing, StyFlex } from '../Styles/Container.styled';

export const PeopleParent = ({children, media_type,id}:{children:any,media_type:string,id:number}) => {

   // const child = useRef<any>();
    const [open, setOpen]= useState(false);
    const [over,setOver] = useState<any>();

    const handleOpen =()=>{

        setOpen(true);
    
        }
        console.log(media_type);

        const handleClose =()=>{
            setOpen(false);
             }
         
             useEffect(()=>{

                const wait1 =async () => {
               
               
                await fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US`)
                   .then(res=>res.json()).then(data=>{
                 
                     console.log(data)
                     setOver(data)
                   })
                 
    }
                                   
     wait1();
 }, [])
               

  return (
    <ForEveryone>



        <div onClick={handleOpen}>
      {children}
      </div>
      { open &&  <Overviewing > 
        <div onClick={handleClose} className='position'>X </div>
   <StyFlex>     
  <div>
        <img src={over.profile_path?`${image_500}/${over.profile_path}`:noPicture} 
        alt={over.name||over.title}
        />

        {/*  
        <img src={over.backdrop_path?`${image_500}/${over.backdrop_path}`:unavailable} 
              alt={over.name||over.title}
              /> */}
</div>
<div style={{paddingLeft:'10px'}}>
             <span className='name'>
              {over.name || over.title}
              
              {/* (
                  {(
                   over.birthday||"-------"
                  ).substring(0,4)}
                 
              )
             */}
              </span>
              <span  className='born'>
             { over.birthday &&(
                <i> Born in {(over.birthday).substring(0,4)}</i>
             )}
             </span>
             
            <div className='bio'>
             <span >
              {
                over.biography
              }
             </span>
             </div>
             <br/>
          
           
            
    </div>
</StyFlex>
    </Overviewing>
}
      
    </ForEveryone>
  )
}
