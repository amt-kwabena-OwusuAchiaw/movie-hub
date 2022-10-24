export const useCreated =(genresSelected:any)=>{

 if(genresSelected.length<1) return "";


  const Gen = genresSelected.map((g:any)=> g.id);

    
  return Gen.reduce((acc:number,curr:number) => acc + ',' + curr)
}