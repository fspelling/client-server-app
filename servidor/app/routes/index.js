module.exports = function(application){
	application.get('/', function(req, res){
		res.format({
			html: function(){
				res.send('Bem vindo a sua app NodeJS!');
			},
			json: function(){
				let result = { body: 'Bem vindo a sua app NodeJS!' };
				res.json(result);
			}
		});
	});

	application.post('/', function(req, res){
		res.send(req.body);
	});
}