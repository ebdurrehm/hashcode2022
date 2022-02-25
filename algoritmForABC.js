//Dependencies 
const fs = require('fs');
const path = require('path');

const app = {};

app.baseDir = path.join(__dirname, './inputs/');

//read text from the file
//change input file name that you want
fs.readFile(app.baseDir+'c_coarse.out.txt', 'utf-8', (err, lines)=>{
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
    console.log(client);
    var result = '';
    const sortedClients=client.sort((a,b)=>{return a.disLike.split(' ')[0]-b.disLike.split(' ')[0]});
    //console.log(sortedClients)
     sortedClients.map((obj,i)=>{
         if(result.indexOf(obj.disLike.split(' ')[0])=== -1&&result.indexOf(obj.disLike.split(' ')[1])=== -1 ){
           // console.log('0-ci '+ typeof (result.indexOf(obj.like.replace(/[0-9]/g,'').split(' ')[3]))!=='undefined')
             if(result.indexOf(obj.like.replace(/[0-9]/g,'').split(' ')[0])===-1){
                
                result+=' '+obj.like.split(' ')[0];  
             }
             if(result.indexOf(obj.like.replace(/[0-9]/g,'').split(' ')[1])===-1 && typeof (obj.like.replace(/[0-9]/g,'').split(' ')[1])!=='undefined'){
                result+=' '+obj.like.split(' ')[1]; 
             }
             if(result.indexOf(obj.like.replace(/[0-9]/g,'').split(' ')[2])===-1 && typeof (obj.like.replace(/[0-9]/g,'').split(' ')[2])!=='undefined'){
                result+=' '+obj.like.split(' ')[2]; 
             }
             if(result.indexOf(obj.like.replace(/[0-9]/g,'').split(' ')[3])===-1 && typeof (obj.like.replace(/[0-9]/g,'').split(' ')[3])!=='undefined'){
                result+=' '+obj.like.split(' ')[3]; 
             }
             if(result.indexOf(obj.like.replace(/[0-9]/g,'').split(' ')[4])===-1 && typeof (obj.like.replace(/[0-9]/g,'').split(' ')[4])!=='undefined'){
                result+=' '+obj.like.split(' ')[4]; 
             }
            

         }
     })

     let splittedRes=result.split(' ')
     console.log(splittedRes.length)
     splittedRes.forEach((value, i)=>{
         if(i===splittedRes.length-1){
            result=i+' '+result;
         }
        
     })

     //change the output file name you want
     fs.open(path.join(__dirname,'./output/')+'c_coarse.txt','wx', (err, fd)=>{
         if(!err){
             fs.writeFile(fd,result,(err)=>{
                 if(!err){
                     console.log('file created;')
                 }
             })
         }
     })

     
}