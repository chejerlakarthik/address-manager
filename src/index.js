const addressService = require('./addressService')
const prettyJson = require('prettyjson')

const allAddresses = addressService.getAllAddresses();
console.log(prettyJson.render(allAddresses));

const oneAddress = addressService.getAddress('Aarthi Sundar');
console.log('Finding address of Aarthi Sundar..')
console.log(prettyJson.render(oneAddress));

console.log('Adding new address..');
let addedAddress = addressService.addAddress('Daksha Chejerla', 'home', oneAddress['addresses']);
console.log(`Added address : ${prettyJson.render(addedAddress)}`)