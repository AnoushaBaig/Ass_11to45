function make_album(artist:string, title:string, tracks?:number) {
 let album = {artist , title }
 if(tracks){
    album["tracks"] = tracks
 } 
  return album  
}
console.log(make_album("Artist one", "The first Album"));
console.log(make_album("Artist two","The second Album"));
console.log(make_album("Artist three","The third Album",12));


