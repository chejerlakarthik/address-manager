const Address = require('./model/addressDetail')
const db = require('./db/addressDatabase')
const _ = require('lodash/fp')

const getAllAddresses = () => {
    return db.addressList;
}

const getAddress = (userName) => {
    let userId = db.allUsers[String(userName).toLowerCase()];
    console.log(`UserId is ${userId}`)
    return db.addressList.filter(function(addr){return addr.userId == userId});
}

const addAddress = (userName, addressType, addressDetail) => {
    return db.addAddress(userName, addressType, addressDetail);
}

module.exports = {
    getAllAddresses, getAddress, addAddress
}