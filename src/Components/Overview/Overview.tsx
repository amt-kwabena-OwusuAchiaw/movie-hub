import React, { useState ,useRef,useEffect} from 'react'
import { image_500, unavailable } from '../../Config/Config';
import { Overviewing, StyFlex ,Lock} from '../Styles/Container.styled';
import { OverviewSub } from './OverviewSub';

export const Overview = ({children, media_type,id}:{children:any,media_type:string,id:number}) => {


  //const child = useRef<any>();
  //ref={child}
  const [open, setOpen]= useState(false);
  const [over,setOver] = useState<any>();
  const [video, setVideo] = useState<any>()
  
  const handleOpen =()=>{

          setOpen(true);
          //window.scroll({top: 100})
          }

  //   const scrollToSection=(elem:any)=>{
  //     window.scrollTo({
  //       top:elem.current.offsetTop,
  //       behavior:'smooth'
  //     }
      
  //     )
  // }

  console.log(media_type)

  useEffect(()=>{

 const wait1 = () => {

 fetch(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US`)
    .then(res=>res.json()).then(data=>{
  
      //console.log(data)
      setOver(data)
    })
  
  
 }
      const wait = () => {
    
      fetch(`https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US`).then(res=>res.json()).then(data=>{
       //console.log(data)
        data.results[0]?.key? setVideo(data.results[0]?.key):setVideo('')    
     })
   }   
   wait();
   wait1();
  }, [])
 

  const handleClose =()=>{
     setOpen(false);
      }
  
  return (
    
    <Lock >
      
     
        <div onClick={handleOpen}>
      {children}
      </div>
     

<div  >
    
     { open &&  <Overviewing > 
        <div onClick={handleClose} className='position'>X </div>
   <StyFlex>     
  <div className='logo'>
        <img src={over.poster_path?`${image_500}/${over.poster_path}`:unavailable} 
        alt={over.name||over.title}
        />

        {/*  
        <img src={over.backdrop_path?`${image_500}/${over.backdrop_path}`:unavailable} 
              alt={over.name||over.title}
              /> */}
</div>
<div style={{paddingLeft:'10px'}}>
             <span className='top'>
              {over.name || over.title}(
                  {(
                   over.first_air_date||over.release_date||"-------"
                  ).substring(0,4)}
                 
              )
            
              </span>
              <span  style={{fontSize:'15px'}}>
             { over.tagline &&(
                <i>{over.tagline}</i>
             )}
             </span>
               <br/>
            <div className='about'>
             <span >
              {
                over.overview
              }
             </span>
             </div>
             <br/>
              <div>
              <span className='cast'> Cast Crew</span>
              <br/>
              <OverviewSub media_type={media_type} id={id}/>
             </div>
             <br/>
               <button style={{backgroundColor:'red', height:'40px',borderRadius:'10px', border:'none'}}> <i className="fa fa-play"></i> 
               <a style={{textDecoration:'none', color:'white'}} href={`https://youtube.com/watch?v=${video}`}  target='_blank'> 
               
               Watch the Trailler Video </a></button>
    </div>
</StyFlex>
    </Overviewing>
}
</div>

      
  </Lock>
  )
}
