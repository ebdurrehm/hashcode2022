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