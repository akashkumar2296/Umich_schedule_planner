var csv = require('csv')

var obj = csv();


obj.from.path('courses.csv').to.array(function (data){
	for(var index = 0; index < data.length; index++){

		var request = require('request');

		request.post(
		    'http://localhost:3000/classes',
		    { json: { 'deptName': data[index][2],
		    'classNum' : data[index][3] ,
		    'className' : data[index][4],
		    'credits': 'tbd',
		    'professor': 'unknown',
		    'description': data[index][5],
		    'difficulty': 'tbd'} },
		    function (error, response, body) {
		        if (!error && response.statusCode == 200) {
		            console.log(body)
		        }
		    }
		);
	}

});
