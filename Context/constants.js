import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorgeData from "./UserStorageData.json";

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0x91A1EeE63f300B8f41AE6AF67eDEa2e2ed8c3f79";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0xBe6Eb4ACB499f992ba2DaC7CAD59d56DA9e0D823";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0x1f53E116c31F171e59f45f0752AEc5d1F5aA3714";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

export const userStorageDataAddrss =
  "0x54287AaB4D98eA51a3B1FBceE56dAf27E04a56A6";
export const userStorageDataABI = userStorgeData.abi;
