/*jshint node:true*/

// app.js
// This file contains the server side JavaScript code for your application.
// This sample application uses express as web application framework (http://expressjs.com/),
// and jade as template engine (http://jade-lang.com/).

var express = require('express');

// var jdbc = new ( require('jdbc') );

// if (VCAP_SERVICES != null) {
//     obj = JSON.parse(VCAP_SERVICES);

//     // Extract the MapReduce Connection
//     list = obj["IBM Analytics for Hadoop"];
//     list = obj.get(thekey);
//     obj = list.get("0");
//     obj = obj.get("credentials");
//     jdbcuser = obj.get("userid");
//     jdbcpassword = obj.get("password");
//     jdbcurl = obj.get("HiveUrl");
// }

// var jdbc_config = {
//     libpath: __dirname + '/node_modules/jdbc/node_modules/java/hive-jdbc-0.12.0.jar',
//     drivername: 'com.java.driverclass',
//     url: jdbcurl,
//     // optionally  
//     user: jdbcuser,
//     password: jdbcpassword,
// };

// jdbc.initialize(jdbc_config, function(err, res) {
//         if (err) {
//             console.log(err);
//         }
//     });


// setup middleware
var app = express();
app.use(app.router);
app.use(express.errorHandler());
app.use(express.static(__dirname + '/public')); //setup static public directory
app.set('view engine', 'jade');
app.set('views', __dirname + '/views'); //optional since express defaults to CWD/views

// render index page
app.get('/', function(req, res){
	res.render('index');
});

// There are many useful environment variables available in process.env.
// VCAP_APPLICATION contains useful information about a deployed application.
var appInfo = JSON.parse(process.env.VCAP_APPLICATION || "{}");
// TODO: Get application information and use it in your app.

// VCAP_SERVICES contains all the credentials of services bound to
// this application. For details of its content, please refer to
// the document or sample of each service.
var services = JSON.parse(process.env.VCAP_SERVICES || "{}");
// TODO: Get service credentials and communicate with bluemix services.

// The IP address of the Cloud Foundry DEA (Droplet Execution Agent) that hosts this application:
var host = (process.env.VCAP_APP_HOST || 'localhost');
// The port on the DEA for communication with the application:
var port = (process.env.VCAP_APP_PORT || 3000);
// Start server
app.listen(port, host);
console.log('App started on port ' + port);

