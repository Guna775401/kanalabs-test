const dashboardPage = require("../pageobjects/sol.pages.js/dashboard.page");
const stakePage = require("../pageobjects/sol.pages.js/stake.page");

require('dotenv').config()


describe('Stake DevNet', () => {

    it.only('StD1 : Verify Maxout amount Stake or Not ', async () => {
        await dashboardPage.verifySolDash();
        await stakePage.clickStakebtn();
        await stakePage.verifyStake_UnstakeText();
        await stakePage.clickStart_Stakingbtn();
        await stakePage.clickMaxbtn();
        await stakePage.slideToStake();


    })

    it('StD1 :  ', async () => { })

    it('StD1 :  ', async () => { })
    it('StD1 :  ', async () => { })


    it('StD1 :  ', async () => { })
    it('StD1 :  ', async () => { })
    it('StD1 :  ', async () => { })
    it('StD1 :  ', async () => { })
    it('StD1 :  ', async () => { })
})