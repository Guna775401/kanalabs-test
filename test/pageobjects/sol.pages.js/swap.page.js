class SwapPage {

    get swapBtn() {
        return $('~swapSol');
    }

    get startSwappinBtn() {
        return $('~startSwapping');
    }

    get backBtn() {
        return $('~goBackFromSwapToken');
    }

    get dropdownTokens() {
        return $('~createWalletSOL');
    }
    // Search options 
    get inputSearchToken() {
        return $('~swapTokenListViewText');
    }

    get inputTokenField() {
        return $('~createWalletSOL');
    }
    // Need balance element
    get balance() {
        return $('~');
    }
    get maxBtn() {
        return $('~maxAmountForSwap');
    }
    // Receive token dropdown
    get searchDropdown() {
        return $('~searchTextForToken2');
    }
    get receiveTokens() {
        return $('~setTokenAmount2');
    }
    get swapNowBtn() {
        return $('~token1Amount');
    }
    
    async verifySwapbtn () {
        await expect(this.swapBtn).toBeDisplayed();
    }


}
module.exports = new SwapPage(); 