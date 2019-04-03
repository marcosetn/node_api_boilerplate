process.env.NODE_ENV = 'test';

let TEMPLATE = require('../api/models/templateModel');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let assert = require('assert');
const chaiFetch = require('chai-fetch');



chai.use(chaiFetch);
chai.use(chaiHttp);


describe('test the templates api', ()=>{

	beforeEach((done)=>{
		TEMPLATE.deleteMany({}, (err)=>{
			done();
		});
	});

	it('should read the database', ()=>{
		return chai.request(server)
		.get('/template')
		.then(res=>{
			assert.equal(res.status, 200);
			assert.equal(Array.isArray(res.body), true);
			assert.equal(res.body.length, 0);
		})
		.catch(err=>{assert.fail(1,0,err.message);});
	});

	it('should add an item', ()=>{
		return chai.request(server)
		.post('/template/')
		.set('content-type', 'application/x-www-form-urlencoded')
		.send({name: 'test'})
		.then(()=>{
			TEMPLATE.find({}, function(err, data){
				assert.equal(data[0].name, 'test');
			});			
		})
		.catch(err=>{assert.fail(1,0,err.message);});
	});

	it('should update an item', (done)=>{
		TEMPLATE.create({name:'test'}, ()=>{
			TEMPLATE.find({}, function(err, data)
			{
				return chai.request(server)
				.put('/template/'+data[0].id)
				.set('content-type', 'application/x-www-form-urlencoded')
				.send({ name: 'testing'})
				.then(()=>{
					TEMPLATE.find({}, function(err, data){
						assert.equal(data[0].name, 'testing');
					});			
					done();
				})
				.catch(err=>{assert.fail(1,0,err.message);});
			});
		});
	});
	
	it('should delete an item', (done)=>{
		TEMPLATE.create({name:'test'}, ()=>{
			TEMPLATE.find({}, function(err, data)
			{
				return chai.request(server)
				.delete('/template/'+data[0].id)
				.set('content-type', 'application/x-www-form-urlencoded')
				.send({ name: 'testing'})
				.then(()=>{
					TEMPLATE.find({}, function(err, data){
						assert.equal(data.length, 0);
					done();
					});		
				})
				.catch(err=>{assert.fail(1,0,err.message);});
			});
		});
	});	
});	

