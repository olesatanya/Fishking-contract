require('colors')
const he = require('hardhat')

const { expect } = require("chai")
var storeFront;
describe("testing MultiTransfer", function () {
    it("Deployment MultiTransfer contract", async function () {
        const Fishking = await ethers.getContractFactory("Fishking");

        fishking = await Fishking.deploy()

    })

}) 