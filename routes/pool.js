var mysql= require('mysql2')
var pool= mysql.createConnection({
    host:'localhost',
    port: '3306',
    database: 'sdctest',
    user: 'root',
    password:'1234',
    multipleStatements:true,
    
})

   
pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });


module.exports=pool