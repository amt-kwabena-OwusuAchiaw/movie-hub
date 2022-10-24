import React ,{useState}from 'react'
import Footer from '../Components/Footer/Footer'
import { Display } from '../Components/Header/Display'
import { Header } from '../Components/Header/Header'
import { Movie } from '../Components/Movie/Movie'
import { CenteringButtons, Homepage } from '../Components/Styles/Container.styled'
import { Trending } from '../Components/Trending/Trending'
import { TrendingThisWeek } from '../Components/Trending/TrendingThisWeek'
// import { centeringButtons } from '../Components/Styles/Container.styled';


export const HomePage = () => {

  const [toggle, setToggle] = useState<boolean>(false);
  const [forDay , setForDay] = useState<boolean>(true);

  const toggling:any =()=>{
   
    setToggle(false)
    setForDay(true)

  }

  const  weekToggle:any =()=>{

        setToggle(true)
        setForDay(false)
  }
  
  return (
    <Homepage style={{backgroundColor:'#141212'}}>
      <Header/>
     <Display/>
      <div><h1 >Trending</h1></div>
          <CenteringButtons>         
            <div  className='buttonStyling'>
              <button id='buttonDesign1' className={forDay?'color':''} onClick={toggling}>Today</button>
              <button  id ='buttonDesign2' className={toggle?'color':''} onClick={weekToggle}>This Week</button>
              </div>
          </CenteringButtons>
       {forDay && <Trending/>}
       {toggle && <TrendingThisWeek/>}
      <br/>
      <div><h1 style={{textAlign:'center',color:'orange'}}>What's Popular ?</h1></div>
      <Movie/>
      
      <Footer/>


    </Homepage>
  )
}

