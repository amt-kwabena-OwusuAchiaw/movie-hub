import styled, {keyframes}from 'styled-components';
import background from '../../images/6366.jpg';
import a from '../../images/1.jpg';
import b from '../../images/2.jpg';
import c from '../../images/3.jpg';
import d from '../../images/4.jpg';
import e from '../../images/5.jpg';
import f from '../../images/6.jpg';


export const Container = styled.div`
*{
  margin:0px;
  padding:0px;
}


padding-top: 25px;
padding-bottom:20px;

background:linear-gradient(0deg,rgba(0,0,0,0.6),#502c18);
//#141212;
display: flex;

justify-content: space-evenly;
.ham{
  display:none;
}
.form{
      margin-top:-15px;
      border:none;
      border-radius:5px;
     input {
      width: 350px;
      height: 30px;
     }

     button{
      height: 35px;
     }
     
  }

  .h2{
    color: orange;
    cursor:pointer;   
  }

  .h2:hover{
    color:white;
  }


  @media screen and (max-width:980px){
    h2{
      font-size:2.0vw;
    }
  }


  @media screen and (max-width:700px){
    justify-content: space-between;

    .h2{
      font-size:20px;
      padding-left:20px;
     }
    #phone{
      display:none;
    }

    .ham{
      display:block;
      background:transparent;
      padding-right:20px;
    }
    
  }


  @media screen and (max-width:650px){
    h2{
      font-size: 20px;
    }
   
    .form{
    input{
     width: 300px;
    }
}

  }


  @media screen and (max-width:500px){
    h2{
      font-size: 15px;
    }
  
    .form{
      input{
       width: 200px;
      }
  }

  }


  @media screen and (max-width:390px){

  
.form{
    input{
     margin-left:25px;
      width: 80vw;
    }
  }
  
`


export const ContainerforSearch= styled.div`

*{
  margin:0px;
  padding:0px;
}


padding-top: 25px;
padding-bottom:20px;

background:linear-gradient(0deg,rgba(0,0,0,0.6),#502c18);
//#141212;
display: flex;

justify-content: space-evenly;
.ham{
  display:none;
}
.form{
      margin-top:-15px;
      border:none;
      border-radius:5px;
     input {
      width: 350px;
      height: 30px;
     }

     button{
      height: 35px;
     }
     
  }

  .h2{
    color: orange;
    cursor:pointer;   
  }

  .h2:hover{
    color:white;
  }


  @media screen and (max-width:980px){
    h2{
      font-size:2.0vw;
    }
  }


  @media screen and (max-width:700px){
    justify-content: space-between;

    .h2{
      font-size:20px;
      padding-left:20px;
     }
    #phone{
      display:none;
    }

    .ham{
      display:block;
      background:transparent;
      padding-right:20px;
    }
    
  }


  @media screen and (max-width:650px){
    h2{
      font-size: 20px;
    }
   
    .form{
    input{
     width: 300px;
    }
}

  }


  @media screen and (max-width:500px){
    h2{
      font-size: 15px;
    }
  
    .form{
      input{
       width: 200px;
      }
  }

  }


  @media screen and (max-width:390px){

    display:grid;
    text-align:center;
    grid-gap 15px;
.form{
    input{
     margin-left:25px;
      width: 80vw;
    }
  }
  
`
export const ContainerFlex = styled.ul`
 display:flex;
 width: 30vw;
 list-style-type: none;

justify-content: space-evenly;  
  li a{
    text-decoration: none;
    color:orange;
 }
    li ul{
        display: none;
    }  

    li:hover > ul{
    display: block;
    list-style-type:none;
        //margin-left: -45px;
        color:orange;
        padding-top:2px;
        
}

    li> ul >li: hover{
        padding-top: 10px;
        cursor: pointer;
        color:white;
    }


    @media screen and (max-width:980px){
       li{
        font-size:1.7vw;
       } 
    }


    @media screen and (max-width:700px){
      display: none;




   }
`


export const Containergrid = styled.ul`
*{
  margin-top:0px;
  padding-top:0px;
}
display:grid;
grid-template-columns: 1fr;
//width: 30vw;
text-align:center;
 list-style-type: none;

justify-content: space-evenly;  
  li a{
    font-size: 15px;

    text-decoration: none;
    color:orange;
 }
    li ul{
        display: none;
    }  

    li:hover > ul{
      font-size: 12px;
    display: block;
    list-style-type:none;
        //margin-left: -45px;
        color:orange;
        padding-top:2px;
        
}

    li> ul >li: hover{
        padding-top: 10px;
        cursor: pointer;
        color:white;
        font-size: 12px;

    }


 h4{color:orange;}

`

export const List = styled.ul`
  display:none;
`


export const Appearance = styled.div`
display:column;
background-color: transparent;
color:orange;
margin: 10px;
border-radius: 10px;
overflow:hidden !important;
img{
  height: 265px;
  transition:transform 1s;
  
}
.b{
  text-align: center; 
  margin-top:5px;
}
.checkPrimary{

 background-color:blue;
 padding:6px;
 border-radius:50%;
 color:white;
}

.checkSec{

  background-color:red;
  padding:3px;
  border-radius:50%;
  color:white;

}

.vote{
  background-color: transparent ;
  text-align: center;
}
.no{
  background-color: transparent;
  text-align: center;

}
:hover{
   img{
  overflow:hidden !important;
   transform: scale(1.05);

   }
  cursor: pointer;
}

.display
{
  display:none;
  position: relative;
  width:800px;
  height:700px;
  top:0;
  z-index:-0; 
  background-color:blue;

}


@media screen and (max-width:780px){
  font-size: 13px;

   img{

     height: 200px;
   }


}


@media screen and (max-width:470px){
  font-size: 10px;

   img{

     height: 150px;
   }


}





`


export const MainApperance = styled.div`
 display:flex;
 overflow-x: auto !important;

 ::-webkit-scrollbar{
  color: orange;
  width:10px;
}

::-webkit-scrollbar-thumb{

 border-radius:10px;
 box-shadow: inset 0 0 50px #502c18;
}

::-webkit-scrollbar-track{

  background-color: black;
}
`



export const CenteringButtons = styled.div`
  display: flex;
  justify-content:center;
  color: orange;
  .buttonStyling{
    border : 2px solid #502c18;
    border-radius: 20px;
     button {
      width: 200px;
      height:30px;
      border: none;
      cursor: pointer;
     }      
     #buttonDesign1{
      border-radius: 20px 0px 0px 20px;
  }
  #buttonDesign2{
    border-radius: 0px 20px 20px 0px;
}
    .color{
      background:linear-gradient(0deg,rgba(0,0,0,0.6),#502c18);
      color:orange
    }
  }


  .button{
    margin-bottom: 40px;
    button{
    width: 120px;
    marigin: 0px 20px 20px 0px;
    background:linear-gradient(0deg,rgba(0,0,0,0.6),#502c18);
    padding: 10px 0px 10px 0px;
    border-radius:20px;
    border:none;  
    color:orange;
    
  }
  }



  @media screen and (max-width:980px){
    
    .buttonStyling{
   button{
    width:23vw;
   }

  }


  @media screen and (max-width:330px){

    #buttonDesign1{
      font-size:9px;
      }
  #buttonDesign2{
    font-size:9px;
  }

  }
  
`


const yes = keyframes`
  0%
  {
  background:url(${f});
}
  20%
  {
    background:url(${a});
  }
  40%
  {
    background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${b});
  }
  60%
  {
    background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${c});
   
  }
  80%
  {
    background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${d});
  }
  100%
  {
    background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${e});
  }

`;


export const ShowChase = styled.div`
   
      display: flex;
      flex-direction:column;
      text-align:center;
      background-color:#102525;
      color: orange;
      height:400px;
          background:linear-gradient(0deg,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url(${background});
          background-position: center;
          background-size: cover;
          //background-repeat: no-repeat;
          padding-top: 100px;
          animation: ${yes} 5s infinte ease-in-out;

         

      h1{
        margin-top: 0px;
        padding-top:  20px
      }
      padding-bottom: 10px;

 @media screen and (max-width:1100px){
            height: 300px;
      }
     
  @media screen and (max-width:980px){
     
    height: 320px; 
    
    h1{
      font-size:4.1vw;
     }

     h2{
      font-size:2.7vw;
     }
  }

  @media screen and (max-width:540px){
   
   height:320px; 
   
   
   .background{
    h1{
      font-size:18px;
         }
    }

     h2{
      font-size:16px;
     }

  }


  @media screen and (max-width:300px){
     height: 220px;

  }
    `;


 export const Homepage = styled.div`
 h1{
 text-align:center;
 color:orange;
 
 }
 @media screen and (max-width:980px){
  
   h1{
     font-size: 3.4vw;
   }
 } 
 

 @media screen and (max-width:500px){
  
  h1{
    font-size: 4.8vw;
  }
} 

 `



export  const Foot = styled.div`
.footer {
  margin-top: 500px;
  display: grid;
  grid-template-columns: 1.5fr 0.7fr 0.7fr 0.7fr 1fr;
  grid-template-rows: 1fr;
  background:linear-gradient(180deg,rgba(0,0,0,0.6),#141212);
  color: orange;
  margin: auto;
  justify-content: center;
  padding-bottom: 55px;
}
.footer .Ex {
  font-size: 30px;
  color: orange;
  margin: 2.5% auto;
}
.footer ul, .footer li {
  font-size: 15px;
  font-weight: 500;
  color: #141212;
  list-style-type: none;
  justify-content: flex-start;
  padding-left: 0px;
  padding-top: 10px;
}
.footer ul .align, .footer li .align {
  text-align: left !important;
  justify-content: flex-start;
}
.footer ul button, .footer li button {
  font-size: 17px;
  font-weight: 500;
  color: orange;
  list-style-type: none;
  justify-content: flex-start;
  padding-left: 0px;
  padding-top: 0px;
  background-color:transparent;
  border: 2px solid transparent;
}
.footer ul button:hover, .footer li button:hover {
  color: #FFF;
  border: 2px solid transparent;
  margin-top:3px;

}
.footer ul a:hover, .footer li a:hover {
  background-color:orange;
}
.footer .footer-list-flex {
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  justify-items: center;
  margin-top: 30px;
}
.footer .footer-list-flex li {
  padding-left: 15px;
}
.footer article {
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
}


@media screen and (max-width:980px){


  .footer{
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    text-align: center;
}

  
.footer .footer-list-flex{

  justify-content: center;
}


}

`



export const MoviePop = styled.div`

display:grid;
 grid-template-columns: 0.85fr 0.85fr 0.85fr 0.85fr 0.85fr;

 column-gap: 10px;
//flex-wrap:wrap;

 img{
  height: 450px;
}

@media screen and (max-width:1700px){
  
  img{
    height: 24vw;
  }
}

@media screen and (max-width:1495px){

  grid-template-columns: 0.9fr 0.9fr 0.9fr 0.9fr ;

 img{
  height: 28vw;
}

}


@media screen and (max-width:550px){

  grid-template-columns: 0.9fr 0.9fr 0.9fr  ;
 

  
 img{
  height: 40vw;
}

}




@media screen and (max-width:400px){

  grid-template-columns: 0.9fr 0.9fr   ; 
 img{
  height: 58vw;
}
}
`
export const MoviePopSub = styled.div`

display:grid;
 grid-template-columns: 0.9fr 0.9fr 0.9fr 0.9fr 0.9fr;
 column-gap: 10px;
 img{
  height: 450px;
}


@media screen and (max-width:1700px){
  
  img{
    height: 24vw;
  }
}

@media screen and (max-width:1495px){

  grid-template-columns: 0.9fr 0.9fr 0.9fr 0.9fr ;

 img{
  height: 28vw;
}

}


@media screen and (max-width:550px){

  grid-template-columns: 0.9fr 0.9fr 0.9fr  ;
 

  
 img{
  height: 35vw;
}

}


@media screen and (max-width:450px){

  grid-template-columns: 0.9fr 0.9fr   ; 
 img{
  height: 58vw;
}
}

`




export const Color =  styled.div`
display:flex;
justify-content:center;

button{  
background-color: #2BD0D0;
}

`



export const GenreFlex =styled.div`
display:flex;
justify-content:center;
padding-right: 10px;
flex-wrap:wrap;

button{
  border-radius: 20px;
  padding: 10px;
  border:none;  
  color:orange;
  background:linear-gradient(0deg,rgba(0,0,0,0.6),#502c18);
 
}

`



 export const OverviewStyle = styled.div`
 
 //display:none;

//  position:absolute;
//  background-color:blue;
//  width: 700px;
//  height: 700px;
//  top: 40%;

 
 ` 



 export const Overviewing=styled.div`
 
 
 width:100vw;
  position:fixed;
   background-color:#141212;
  //display:flex; 
 align-items: center;
 justify-content: center;
 height: 100vh;
 color:orange;
 overflow-y: scroll;

 top:0;
 left: 0;

 
 .position{
 position:relative;
  font-size:30px;
 margin-left:90vw;
 margin-top:0.2vw;
 cursor:pointer;
 }

 
 
 `



 export const Credits = styled.div`
    
 overflow-x:auto;
 display: flex;
 max-width: 70vw;

 img{
  height: 200px;
  margin-right: 10px;
 }

  ::-webkit-scrollbar{
    color: orange;
    width:10px;
  }
  
  ::-webkit-scrollbar-thumb{
  
   border-radius:10px;
   box-shadow: inset 0 0 50px #502c18;
  }
  
  ::-webkit-scrollbar-track{
  
    background-color: black;
  }



@media screen and (max-width:1400px){

img{
   height: 20vw;
}

}

@media screen and (max-width:800px){

  img{
    height:24vw;
    width:25vw;
    margin-right:2px;
  }

  .name{

    font-size:10px;
  }
}

@media screen and (max-width:600px){
max-width:95vw;


.about{
  width:85vw;
}

}
  `



 export const StyFlex= styled.div`
  display: flex;
  flex-direction:row; 


  @media screen and (max-width:620px){

  display:grid;


  .logo{

    display:none;
  }
  }
 `



 export const SearchStyle = styled.div`
 background:linear-gradient(0deg,rgba(0,0,0,0.6),#502c18);
 background-color:#141212;
 color:orange;
 width:98.9vw;
 min-height:100vh;
 max-height:auto !important;

  input{
    background: transparent;
    color: orange;
    border-top:0px;
    border-right: 0px;
    border-left:0px;
    border-bottom: 6px solid orange;
    ::placeholder{
      color: rgba(255,165,0,0.5);
    }
  }


  .letsSearch{

    background:transparent;
    border:transparent;
     color:orange;
  }
 
 
 `




 export const MovieContainer= styled.div`
 
 h3{
text-align:center;
 background:linear-gradient(0deg,rgba(0,0,0,0.6),#502c18);
 width:200px;
  margin:auto;
  border-radius:20px;
   margin-top:20px;
padding-top:7px;
  height:30px;
  color:orange;
 }
 

  @media screen and (max-width:980px){

      h3{
          width:25vw;
          font-size:2.4vw;
      }

  }
 

  
  @media screen and (max-width:440px){

    h3{
        width:25vw;
        font-size:13px;
    }

}




@media screen and (max-width:245px){

  h3{
      width:25vw;
      font-size:5.8vw;
  }

}
 
 `


 export  const Lock = styled.div`
 max-width:1500px;
 
 .about{
  font-size:22px;
   border:2px solid black;
    width:65vw;
  margin-Top:50px;
   border-radius:10px;
  }

  .top{

   font-size:33px;
   max-width:1500px;
  }
  .cast {
font-size: 24px;
    
  }
 .logo{

   img{
    height: 40vw;
   }
 }
 

 @media screen and (max-width:610px){

  .about{
    
      width:90vw;
    
    }

 }


 @media screen and (max-width:450px){
  .top{
   font-size:18px;  
  }
  
   .about{
    font-size: 12px;
   }


   .cast{
    font-size:18px;
   }
 ` 




 export const ForEveryone= styled.div`
 .name{
  font-size:28px;
 }
 .bio{
 font-size:22px;
  border:2px solid black;
  
  margin-top:50px;
   border-radius:10px;
 }


 .born{

  font-size:15px;
 }
 
 `