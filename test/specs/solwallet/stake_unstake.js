const dashboardPage = require("../../pageobjects/sol.pages.js/dashboard.page");
const stakePage = require("../../pageobjects/sol.pages.js/stake.page");
const swapPage = require("../../pageobjects/sol.pages.js/swap.page");
const menutabsPage = require("../../pageobjects/sol.pages.js/menutabs.page");

require('dotenv').config()


describe('Stake/UnStake DevNet', () => {

    it('StD1 : Verify ExchangeRate eqaul to display mSOL or Not (Like 1 Sol = 0.94904 Need to give a 1 SOL recieve mSOl equal) PleaseUi see ', async () => {
        await dashboardPage.verifySolDash();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickStart_Stakingbtn();
        await stakePage.enterStakeAmount(process.env.ONESOL);
        await stakePage.verify1SOLequalmSOL();
    })
    it('StD2 : Verify Stake Screen SOL first mSOL Second or Not ', async () => {
        await stakePage.verifyStakeScreenFirst_Sol_Second_mSOL(process.env.SOL, process.env.MSOL);
    })
    it('StD3 : Verify decimal value SOL can Stake or not ', async () => {
        await stakePage.enterStakeAmount(process.env.DECIMALAMOUNT);
        await stakePage.slideToStake();
        await stakePage.clickDonebtn();
    })
   it('StD4 : Verify  1 SOL can Stake or not  ', async () => {
        await swapPage.refresh();
        await dashboardPage.verifySolDash();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickStart_Stakingbtn();
        await stakePage.enterStakeAmount(process.env.ONESOL);
        await stakePage.slideToStake();
        await stakePage.clickDonebtn();
    })

    it('StD5 : Verify Maxout amount Stake or Not ', async () => {
        await swapPage.refresh();
        await dashboardPage.verifySolDash();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickStart_Stakingbtn();
        await stakePage.clickMaxbtn();
        await stakePage.slideToStake();
        await stakePage.clickDonebtn();
    })

    // Unstaked

    it('UnStD1 : Verify ExchangeRate eqaul to display mSOL or Not (Like 1 Sol = 0.94904 Need to give a 1 SOL recieve mSOl equal) PleaseUi see ', async () => {

        await dashboardPage.verifySolDash();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickUnstakeTab();
        await stakePage.enterUnStakeAmount(process.env.ONEMSOL);
        await stakePage.verify1mSOLequalSOL();
    })

    it('UnStD2 : Verify Stake Screen SOL first mSOL Second or Not ', async () => {

        await stakePage.verifyUnStakeScreenFirst_mSol_Second_SOL(process.env.MSOL, process.env.SOL);
    })

    it('UnStD3 : Verify decimal value mSOL can UnStake or not ', async () => {

        await stakePage.enterUnStakeAmount(process.env.DECIMALAMOUNT);
        await stakePage.slideToUnStake();
        await stakePage.clickUnstakeDonebtn();
    })

    it('UnStD4 : Verify decimal value 1 mSOL can UnStake or not  ', async () => {
        await swapPage.refresh();
        await dashboardPage.verifySolDash();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickUnstakeTab();
        await stakePage.enterUnStakeAmount(process.env.ONESOL);
        await stakePage.slideToUnStake();
        await stakePage.clickUnstakeDonebtn();
    })

    it('UnStD5 : Verify Maxout amount UnStake or Not ', async () => {
        await swapPage.refresh();
        await dashboardPage.verifySolDash();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickUnstakeTab();
        await stakePage.clickUnStakeMaxBtn();
        await stakePage.slideToUnStake();
        await stakePage.clickUnstakeDonebtn();
    })
})

describe('Stake/UnStake MainNet', () => {

    it('StM1 : Verify MainNet ExchangeRate eqaul to display mSOL or Not (Like 1 Sol = 0.94904 Need to give a 1 SOL recieve mSOl equal) PleaseUi see ', async () => {
        await dashboardPage.verifySolDash();
        await menutabsPage.changeToDevtoMain();
        await dashboardPage.verifySolDashMainNet();
        await swapPage.refresh();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickStart_Stakingbtn();
        await stakePage.enterStakeAmount(process.env.ONESOL);
        await stakePage.verify1SOLequalmSOL();
    })

    it('StM2 : Verify MainNet Stake Screen SOL first mSOL Second or Not ', async () => {

        await stakePage.verifyStakeScreenFirst_Sol_Second_mSOL(process.env.SOL, process.env.MSOL);
    })

    it('StM3 : Verify MainNet decimal value SOL can Stake or not ', async () => {
       
        await stakePage.enterStakeAmount(process.env.STAKEDECI);
        await stakePage.slideToStake();
        await stakePage.clickDonebtn();
    })

    it('StM4 : Verify MainNet decimal value 1 SOL can Stake or not  ', async () => {
        await swapPage.refresh();
        await dashboardPage.verifySolDashMainNet();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickStart_Stakingbtn();
        await stakePage.enterStakeAmount(process.env.STAKEDECIMAL);
        await stakePage.slideToStake();
        await stakePage.clickDonebtn();
    })

    it('StM5 : Verify MainNet Maxout amount Stake or Not ', async () => {
        await swapPage.refresh();
        await dashboardPage.verifySolDashMainNet();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickStart_Stakingbtn();
        await stakePage.clickMaxbtn();
        await stakePage.enterStakeAmount(process.env.STAKEAMOUNT);
        await stakePage.slideToStake();
        await stakePage.clickDonebtn();
    })

    // Unstaked

    it('UnStM1 : Verify MainNet ExchangeRate eqaul to display mSOL or Not (Like 1 Sol = 0.94904 Need to give a 1 SOL recieve mSOl equal) PleaseUi see ', async () => {

        await dashboardPage.verifySolDashMainNet();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickUnstakeTab();
        await stakePage.enterUnStakeAmount(process.env.ONEMSOL);
        await stakePage.verify1mSOLequalSOL();
        })

    it('UnStM2 : Verify MainNet UnStake Screen mSOL first SOL Second or Not ', async () => {
        
        await stakePage.verifyUnStakeScreenFirst_mSol_Second_SOL(process.env.MSOL, process.env.SOL);
      })

    it('UnStM3 : Verify MainNet decimal value mSOL can UnStake or not ', async () => {

        await stakePage.enterUnStakeAmount(process.env.UNSTAKEDECIMAL);
        await stakePage.slideToUnStake();
        await stakePage.verifySOLUnStake();
        await stakePage.clickUnstakeDonebtn();
    })

    it('UnStM4 : Verify MainNet decimal value 1 mSOL can UnStake or not  ', async () => {
        await swapPage.refresh();
        await dashboardPage.verifySolDashMainNet();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickUnstakeTab();
        await stakePage.enterUnStakeAmount(process.env.STAKEDECI);
        await stakePage.slideToUnStake();
        await stakePage.verifySOLUnStake();
        await stakePage.clickUnstakeDonebtn();
    })

    it('UnStM5 : Verify MainNet Maxout amount UnStake or Not ', async () => {
        await swapPage.refresh();
        await dashboardPage.verifySolDashMainNet();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickUnstakeTab();
        await stakePage.clickUnStakeMaxBtn();
        await stakePage.slideToUnStake();
        await stakePage.clickUnstakeDonebtn();
    })
})

// it('StD1 :  ', async () => { })
// it('StD1 :  ', async () => { })
// it('StD1 :  ', async () => { })
// it('StD1 :  ', async () => { })
// it('StD1 :  ', async () => { })