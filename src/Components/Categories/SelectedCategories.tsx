import React from 'react'
import { GenreFlex } from '../Styles/Container.styled'

export const SelectedCategories = ({name,onClick}:{name:string,onClick?:any}) => {
  return (
<div>
    <GenreFlex>
       <button onClick={onClick}> <div style={{color:'white'}}>{name} <span style={{cursor:'pointer',color:'white'}}> X </span></div> </button>
    </GenreFlex>
    </div>  )
}
