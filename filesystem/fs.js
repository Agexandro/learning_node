var fs = require("fs");


//Read files
fs.readFile("filesystem/fs.js", function(err, data){
    console.log(data.toString())
});

//Create/update a file to write in it. Does not replace existing files
fs.appendFile("filesystem/new.txt", "El muñeco se levanta en la noche...",function(err){
    err? console.log("**Error al crear archivo**"):console.log("Creado");
})

//Create/open a file to write in it.

fs.open('filesystem/new.txt','w', function(err, file){
    err? console.log("Error"):console.log("Creado-Guardado");
})

//Create/update a file and its content
fs.writeFile('filesystem/new.txt', "Nuevo contenido", (err) =>{
    if(err) throw err;
     console.log("Saved");
})

//delete file
fs.unlink('filesystem/new.txt', (err)=>{
    if(err) throw err;
    console.log("Eliminado");
})