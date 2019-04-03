# node_api_boilerplate

Just a very simple boilerplate for getting node api projects started and tested.

Code in directories controllers, models and routes can be copied and edited to accomodate new endpoints.

After cloning, run npm install.

To run & view with Postman, run npm run start

To run tests run npm run test

(The above assume that you have mongodb running)

Its a work in progress - next I would like to

1) extend it to make the controller, model and route read from a "pseudo" env file - so you could set endpoints with minimum editing 
(and testing would read from the env file to automatically test every endpoint)
2) re-do the testing to use fetch and promises rather than chai.request
