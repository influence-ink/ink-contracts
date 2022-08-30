import { ethers } from "hardhat"
import { output } from "./util"
import inkpurchaseParams from "./deploymentParams/inkpurchase.json"

async function main() {
	const INKPurchase = await ethers.getContractFactory("INKPurchase")
	const inkPurchase = await INKPurchase.deploy(
		inkpurchaseParams.routerAddress,
		inkpurchaseParams.usdc
	)

	await inkPurchase.deployed()

	output(process.env.HARDHAT_NETWORK || "", {
		INKPurchase: inkPurchase.address,
	})
	console.log("INKPurchase deployed to:", inkPurchase.address)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
	console.error(error)
	process.exitCode = 1
})
