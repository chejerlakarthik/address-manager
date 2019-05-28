const uuid = require("uuid");
const prettyJson = require("prettyjson")

const addressList = [
  {
    userId: "df8ca37b-fc0e-430d-91c0-49c08f09d355",
    addresses: [
      {
        type: "home",
        detail: {
          streetNumber: 1584,
          streetName: "Doctors Enclave",
          suburb: "Pragati Nagar",
          city: "Hyderabad",
          zip: 500090,
          country: "India"
        }
      },
      {
        type: "office",
        detail: {
          streetNumber: 10,
          streetName: "Janpath",
          suburb: "Karol Bagh",
          city: "New Delhi",
          zip: 100001,
          country: "India"
        }
      }
    ]
  },
  {
    userId: "b9d0e27f-a575-453f-97e2-c445ed3887dc",
    addresses: [
      {
        type: "home",
        detail: {
          streetNumber: 32,
          streetName: "Mons road",
          suburb: "Westmead",
          city: "Sydney",
          zip: 2145,
          country: "Australia"
        }
      }
    ]
  }
];

const allUsers = {
  "karthik chejerla": "df8ca37b-fc0e-430d-91c0-49c08f09d355",
  "aarthi sundar": "b9d0e27f-a575-453f-97e2-c445ed3887dc"
};

const findUserId = userName => {
  let lowercasedUserName = String(userName).toLowerCase();
  let userId = allUsers[lowercasedUserName];
  if (userId) {
    return userId;
  } 
  else {
      const newId = uuid.v4().toString();
      allUsers[lowercasedUserName] = newId;
      console.log(`Adding new user ${lowercasedUserName} with id ${newId}`);
      return allUsers[lowercasedUserName];
  }
};

const addAddress = (userName, addressType, address) => {
  let userId = findUserId(userName);
  console.log(`Adding address to userId ${userId}`)
  addressList[userId] = {
    type: addressType,
    detail: address
  };
  console.log(prettyJson.render(addressList));
  return addressList[userId];
};

module.exports = {
addressList,
  allUsers,
  addAddress,
  findUserId
};
