let mynumbers : number []=[1,2,3,4,5,6,7,8,9,]
for (let i = 0; i < mynumbers.length; i++) {
    if(mynumbers [i]== 1){
        console.log(`${mynumbers[i]} st`);
        
    }else if(mynumbers [i] == 2){
        console.log(`${mynumbers[i]} nd`);
        
    }else if (mynumbers [i]== 3){
        console.log(`${mynumbers [i]} rd`);
        
    }else if (mynumbers [i] >= 4 && mynumbers [i]<= 9){
        console.log(`${mynumbers [i]} th`);
        
    }
    
}