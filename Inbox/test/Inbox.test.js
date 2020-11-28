const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
// We used capital in Web3 since this will initialize using the constructor option
//We require a provider to help us connect web3 to ganache
const web3 = new Web3(ganache.provider());



// describe("Dummy Test",() => {
//   it("First Test", () => {
//     assert.equal("Stopped","Stopped");
//   });
// });

beforeEach(() => {
  //Get a list of all accounts
  //Use one of them to deploy our contract
  web3.eth.getAccounts()
    .then(fetchedAccounts => {
      console.log(fetchedAccounts);
    })
  //Every funtion in web3 is asynchronous so need to use .then
});

describe('Inbox Account Verifiation', () => {
  it('deploys a contract',() => {});
});
