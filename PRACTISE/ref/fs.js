const fs = require('fs');
const path = require('path');

//creates a new directory
fs.mkdir(path.join(__dirname, '/stopplaying'), {}, (err) => {
    if (err) { throw err; }

    console.log('folder created');
});

//writes to a new file but overrides content everytime its called
fs.writeFile(path.join(__dirname,'stopplaying','index.txt'),'fuck the club up!',(err)=>{
    if(err){throw err}

    console.log('file written to..');
    //wrties to file but appends content instead of overriding
    fs.appendFile(path.join(__dirname,'stopplaying','index.txt'),'who are tits?',(err)=>{
        if(err){throw err}
    
        console.log('file appended..');
    });
});

//reads contents of a file
fs.readFile(path.join(__dirname, 'stopplaying', 'index.txt'), 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
})