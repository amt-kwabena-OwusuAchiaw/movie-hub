export const useCreated =(genresSelected:any)=>{

 if(genresSelected.length<1) return "";
 
 interface c{
  id: number;
  name:string
 }

   //console.log(genresSelected)

  const Gen = genresSelected.map((g:c)=> g.id);
 // console.log(Gen)
    
  return Gen.reduce((acc:number,curr:number) => acc + ',' + curr)
}