import React, { useEffect } from 'react'
import { genre } from '../../Pages/MoviePagePopular';
import { Categories } from '../Categories/Categories';
import { SelectedCategories } from '../Categories/SelectedCategories';
import { Color, GenreFlex } from '../Styles/Container.styled';

export const Genres = ({type, genresSelected, setGenresSelected,allgenres ,setAllGenres, setPage} :
     {type:string, genresSelected:any,setGenresSelected:any, allgenres:any,setAllGenres:any, setPage:any})  => {

        
        interface c{
            id:number;
            name:string;
            onClick?:any
        }

        const HandleAdd=(genre:any)=>{
            setGenresSelected([...genresSelected, genre]);
         //let k =  allgenres.isArray? setAllGenres(allgenres.filter((g:c)=>g.name !== genre.name)):[]
            setPage(1)
            //console.log('yes')
            return   setAllGenres(allgenres.filter((g:c)=>g.name !== genre.name)) ;

        }

        const handleRemove =(genre:any) =>{
          setAllGenres([...allgenres,genre]) 
          setPage(1)
          setGenresSelected(
            genresSelected.filter((select:c)=> select.id!== genre.id)
           )

        }

        const api = `https://api.themoviedb.org/3/genre/${type}/list?api_key=5eb7eaa6c60e68b38ecb9bcb17fee24f&language=en-US`
      useEffect(()=>{

      fetch(api).then(res=> res.json()).then(data=> {

             console.log(data.genres);
             setAllGenres(data.genres)

            })

      },[])          


  return (
    <div>
        <div><h2 style={{textAlign:'center',color:'orange'}}> Categories </h2></div>
  <GenreFlex> 
    <Color>
    {
        genresSelected && genresSelected.map((c:c, index:number)=>(                                     
                        <SelectedCategories
                        key={index}
                        name={c.name}
                        onClick={ ()=>handleRemove(c)}                       
                        />

              
            ))

    }

    </Color>
    {
        allgenres && allgenres.map((c:c ,index:number)=>(
                        <Categories
                        key={index}
                        name={c.name}
                        onClick ={()=>HandleAdd(c)}
                        />
            ))

    }
    </GenreFlex>
    </div>
  )
}
