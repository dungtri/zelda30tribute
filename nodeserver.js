var http = require("http");
var path = require("path");
var url = require("url");
var fs = require("fs");

http.createServer(function(request,response){
	var my_path = url.parse(request.url).pathname;
	var full_path = path.join(process.cwd(), '/', my_path);

  var closurePath = path.join(process.cwd(), '/../../../third_party/src/closure/closure/');
  

  if (my_path.indexOf('/closure') == 0) {
    full_path = path.join(process.cwd(), '/../../../third_party/src/closure/', my_path);
  }

	fs.exists(full_path,function(exists){
		if(!exists){
			response.writeHeader(404, {"Content-Type": "text/plain"});  
			response.write("404 Not Found\n");  
			response.end();
		}
		else{
			fs.readFile(full_path, "binary", function(err, file) {  
			     if(err) {  
			         response.writeHeader(500, {"Content-Type": "text/plain"});  
			         response.write(err + "\n");  
			         response.end();  
			   
			     }  
				 else{
					response.writeHeader(200);  
			        response.write(file, "binary");  
			        response.end();
				}
					 
			});
		}
	});
}).listen(9378);
console.log("Server Running on 9378");			
