const fs = require('fs');
const path = require('path');

const app = {};

app.baseDir = path.join(__dirname, './inputs/');

//read text from the file

fs.readFile(app.baseDir+'e_elaborate.in.txt', 'utf-8', (err, lines)=>{
    if(!err){
        let liness = lines.split('\n');
        
      
        let clientDislike = [];
        let clientLike = [];
        let count = 0;
        let client =[];
        for(let line of liness){
            count++;
            if(count%2===0){
                clientLike.push(line);
            }
            else{
                clientDislike.push(line);
            }
        }
        clientDislike.splice(0,1);
        clientLike.forEach((key,i)=>client[i]={'like': key, 'disLike':clientDislike[i]});
        
        //console.log(client[0].disLike);
        app.sortClient(client);
    }
})

app.sortClient =  function(client){

    let sorted = new Set(client.filter((value)=>value.disLike.split(' ')[0]<=1).map((value)=>value.like.replace(/[0-9]/,'')));
    let sortArr = new Set();
    let result = '';
    for (let value of sorted){
        for (let val of value.split(' ') ){
            sortArr.add(val);
        }
       
   };
      console.log(sortArr.size);
   sortArr.forEach((value, i)=>{
       result+=' '+value; 
})
    fs.open(path.join(__dirname,'./output/')+'e_elaborate.txt','wx', (err, fd)=>{
         if(!err){
             fs.writeFile(fd,result=sortArr.size-1+result,(err)=>{
                 if(!err){
                     console.log('file created;')
                 }
             })
         }
     })}