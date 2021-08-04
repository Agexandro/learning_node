const http = require("http");
const fs = require("fs");
const formidable = require("formidable");

//Abriendo el server
http.createServer((req, res) => {
    //Se envia el formulario?
    if (req.url == "/fileupload") {
        //Se obtiene el form enviado
        var form = new formidable.IncomingForm();
        //Se parsea el form
        form.parse(req, function (err, fields, files) {
            if (err) throw err;
            //Ubicación actual del archivo
            var oldpath = files.myfile.path;
            //Nueva ubicación del archivo
            var newpath = "upload/" + files.myfile.name;
            fs.rename(oldpath, newpath, function (err) {
                if (err) throw err;
                res.write("Archivo subido")
                res.end();
            })
        });
    } else {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="myfile"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.end();
    }
}).listen(4300);

