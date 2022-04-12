
const fs = require('fs');
const {ethers} = require('hardhat')
async function main() {
	const PoolContract = await ethers.getContractFactory("Fishking");
	const poolContract = await PoolContract.deploy(); //ethers.utils.parseUnits("3")

	// var tokens = ["0x9c2582bf7648dc75825a26758206b6610d7c989c6ac940285503d77e5ad27bdc"];
	// var tx = await poolContract.buy(tokens,0);
	// await tx.wait();

	const contract = poolContract.address
	fs.writeFileSync(__dirname + '/./v1.json', JSON.stringify({ contract }, null, '\t'))
}

main().then(() => {
}).catch((error) => {
	console.error(error);
	// process.exit(1);
});
