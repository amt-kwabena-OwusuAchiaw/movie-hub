import React from 'react'
import { GenreFlex } from '../Styles/Container.styled'

export const Categories = ({name,onClick}:{name:string,onClick?:any}) => {
  return (
    <div>
      <GenreFlex>
       <button onClick={onClick}> <div>{name} </div> </button>
       </GenreFlex>
    </div>
  )
}
