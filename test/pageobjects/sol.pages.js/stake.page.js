class StakePage{

    get stakeBtn() {
        return $('~stakeSol');
    }
// Need for element

    get startStakebtn() {
        return $('~');
    }
    get unStakeTab() {
        return $('~Unstake');
    }
    
    // Max btn , receive token field , unstake now, available balance , exchange rate, deposit fee
    get backBtn() {
        return $('~goBackFromStaking');
    }

    async verifyStakebtn () {
        await expect(this.stakeBtn).toBeDisplayed();
    }





}

module.exports = new StakePage();