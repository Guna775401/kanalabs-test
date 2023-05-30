

var fs = require('fs');

require('dotenv').config()

class StakePage {

    get stakeBtn() {
        return $('~stakeSol');
    }
    get startStakebtn() {
        return $('~startStaking');
    }
    get balance() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]');
    }
    get stakeTab() {
        return $('~Stake');
    }
    get unStakeTab() {
        return $('~Unstake');
    }
    get backBtn() {
        return $('~goBackFromStaking');
    }
    get stakeInputAmount() {
        return $('~stakeAmount');
    }
    get youWillReceiveAmount() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[2]');
    }
    get maxBtn() {
        return $('~maxUnstake');
    }
    get stakeDoneBtn() {
        return $('~goToHomeDone');
    }
    get stakeFailDoneBtn() {
        return $('~goToHomeFromTokenSendFailed');
    }



    // Success Staked
    get doneText() {
        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt = $(`android=${donetxt}`)
        return doneTxt;
    }
    get solStakedText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get successORFailSolStakedVerifymSOlText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]')
    }



    get stake_UnstakeText() {
        const stake_Unstaketxt = 'new UiSelector().text("Staking / Unstaking").className("android.widget.TextView")'
        const stake_UnstakeTxt = $(`android=${stake_Unstaketxt}`)
        return stake_UnstakeTxt;

    }

    get exchangeRateText() {
        const exchangeRatetxt = 'new UiSelector().text("Exchange rate").className("android.widget.TextView")'
        const exchangeRatetxt1 = $(`android=${exchangeRatetxt}`)
        return exchangeRatetxt1;
    }
    get depositFeeText() {
        const depositFeetxt = 'new UiSelector().text("Deposit fee").className("android.widget.TextView")'
        const depositFeetxt1 = $(`android=${depositFeetxt}`)
        return depositFeetxt1;
    }
    get slideToStakeText() {
        const slideToStaketxt = 'new UiSelector().text("Slide to stake").className("android.widget.TextView")'
        const slideToStakeTxt = $(`android=${slideToStaketxt}`)
        return slideToStakeTxt;
    }

    get availableBalanceText() {
        const availabletxt = 'new UiSelector().text("Available balance").className("android.widget.TextView")'
        const availableTxt = $(`android=${availabletxt}`)
        return availableTxt;
    }

    // Unstake 
    get unStakeInputAmount() {
        return $('~unstakeAmount');
    }

    get unStakeMaxBtn() {
        return $('~maxUnState');
    }

    get unstakeExchangeRate() {
        return $('~unstakeExchangeRate');
    }

    get slideToUnStakeText() {
        const slideToUnStaketxt = 'new UiSelector().text("Slide to unstake").className("android.widget.TextView")'
        const slideToUnStakeTxt = $(`android=${slideToUnStaketxt}`)
        return  slideToUnStakeTxt;
    }

    get firstToken() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView')
    }

    get secondToken() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]')
    }

    // Unstaked
    get solUnStakedText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get successORFailUnSolStakedVerifymSOlText() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[2]')
    }

    get slideBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup');
    }
    get exchangeRate() {
        return $('~stakeExchangeRate');
    }
    get depositfee() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[6]');
    }

    get unStakeDoneBtn() {
        return $('~goToHomeDone');
    }
    get unStakeFailDoneBtn() {
        return $('~goToHomeFromTokenSendFailed');
    }


    get() {
    }
    get() {
    }

    get() {
    }

    // Max btn , receive token field , unstake now, available balance , exchange rate, deposit fee
    // get backBtn() {
    //     return $('~goBackFromStaking');
    // }

    async verifyStakebtn() {
        await expect(this.stakeBtn).toBeDisplayed();
    }

    async clickStakebtn() {
        await this.stakeBtn.waitForDisplayed({ timeout: 30000 });
        await (await this.stakeBtn).click();
    }
    async clickStart_Stakingbtn() {
        await this.startStakebtn.waitForDisplayed({ timeout: 5000 });
        await (await this.startStakebtn).click();
    }
    async clickBakbtn() {
        await this.backBtn.waitForDisplayed({ timeout: 5000 });
        await (await this.backBtn).click();
    }
    async clickMaxbtn() {
        await this.maxBtn.waitForDisplayed({ timeout: 5000 });
        await (await this.maxBtn).click();
        await browser.pause(5000);
        var maxAmount = await (await this.stakeInputAmount).getText();
        var newMaxAmount = (maxAmount - (2))
        await (await this.stakeInputAmount).setValue(newMaxAmount);
        driver.hideKeyboard();
    }
    async clickDonebtn() {
        await this.doneText.waitForDisplayed({ timeout: 60000 });
        const solStaked = 'new UiSelector().text("SOL staked!").className("android.widget.TextView")'
        const solStaked1 = await $(`android=${solStaked}`)
        await expect(this.doneText).toBeDisplayed();

        const successOrFailRes = await (this.solStakedText).getText();
        const typeFailText = await (this.successORFailSolStakedVerifymSOlText).getText();

        let sucess = await (this.stakeDoneBtn).isDisplayed();
        let fail = await (this.stakeFailDoneBtn).isDisplayed();

        if (sucess) {
            await expect(solStaked1).toBeDisplayed();
            // fs.writeFile('./reports/stake_unstake.txt', successOrFailRes + '\n', function (err) {
            //     console.log(err)
            // })
            await (await this.stakeDoneBtn).click();
        }
        else if (fail) {
            fs.writeFile('./reports/stake_unstake.txt', successOrFailRes + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/stake_unstake.txt', typeFailText + '\n', function (err) {
                console.log(err)
            })
            await (await this.stakeFailDoneBtn).click();
        }
        else {
            fs.appendFile('./reports/stake_unstake.txt', successOrFailRes + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/stake_unstake.txt', typeFailText + '\n', function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
            await (await this.stakeFailDoneBtn).click();
        }
    }

    async clickUnstakeDonebtn() {
        await this.doneText.waitForDisplayed({ timeout: 60000 });
        const solunStaked = 'new UiSelector().text("SOL unstaked!").className("android.widget.TextView")'
        const solunStaked1 = await $(`android=${solunStaked}`)
        await expect(this.doneText).toBeDisplayed();

        const successOrFailRes = await (this.solUnStakedText).getText();
        const typeFailText = await (this.successORFailUnSolStakedVerifymSOlText).getText();

        let sucess = await (this.unStakeDoneBtn).isDisplayed();
        let fail = await (this.unStakeFailDoneBtn).isDisplayed();

        if (sucess) {
            await expect(solunStaked1).toBeDisplayed();
            // fs.appendFile('./report/stake_unstake.txt', successOrFailRes + '\n', function (err) {
            //     console.log(err)
            // })
            await (await this.unStakeDoneBtn).click();
        }
        else if (fail) {
            fs.appendFile('./report/stake_unstake.txt', successOrFailRes + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/stake_unstake.txt', typeFailText + '\n', function (err) {
                console.log(err)
            })
            await (await this.unStakeFailDoneBtn).click();
        }
        else {
            fs.appendFile('./report/stake_unstake.txt', successOrFailRes + '\n', function (err) {
                console.log(err)
            })
            fs.appendFile('./reports/stake_unstake.txt', typeFailText + '\n', function (err) {
                console.log(err)
            })
            await browser.saveScreenshot('screenshot.png')
            await (await this.unStakeFailDoneBtn).click();
        }
    }

    async twoClickBakbtn() {
        await this.backBtn.waitForDisplayed({ timeout: 5000 });
        await (await this.backBtn).click();
        await (await this.backBtn).click();
    }
    async clickUnstakeTab() {
        await this.unStakeTab.waitForDisplayed({ timeout: 5000 });
        await (await this.unStakeTab).click();
    }

    async verifyStake_UnstakeText() {
        // const stake_unStaketxt = 'new UiSelector().text("Staking / Unstaking").className("android.widget.TextView")'
        // const stake_UnStakeTxt = await $(`android=${stake_unStaketxt}`)
        await this.stake_UnstakeText.waitForDisplayed({ timeout: 30000 });
        await expect(this.stake_UnstakeText).toBeDisplayed();
    }

    async verifyStake_UnstakeScreen() {
        const stake_unStake = 'new UiSelector().text("Liquid Stake SOL with Marinade Finance, compound rewards and help secure the Solana ecosystem").className("android.widget.TextView")'
        const stake_UnStake = await $(`android=${stake_unStake}`)
        await stake_UnStake.waitForDisplayed({ timeout: 30000 });
        await expect(stake_UnStake).toBeDisplayed();
    }

    async slideToStake() {

        await (this.slideBtn).waitForDisplayed({ timeout: 10000 });
        // await expect(this.slideBtn).toBeDisplayed();
       // console.log(await expect(this.slideBtn).toBeDisplayed());
        
        //await this.slideToStakeText.waitForDisplayed({ timeout: 5000 });
        const res = await (this.slideToStakeText).isDisplayed();
        console.log(await expect(this.slideToStakeText).toBeDisplayed());

        fs.appendFile('./report/stake_unstake.txt', res + '\n', function (err) {
            console.log(err)
        })

        // await expect(this.slideToStakeText).toBeDisplayed();
        driver.touchAction([
            { action: 'longPress', x: 146, y: 1746 },
            { action: 'moveTo', x: 946, y: 1750 },
            'release'
        ]);
    }

    async slideToUnStake() {
        await (this.slideBtn).waitForDisplayed({ timeout: 10000 });
        await expect(this.slideBtn).toBeDisplayed();
        await this.slideToUnStakeText.waitForDisplayed({ timeout: 5000 });
        await expect(this.slideToUnStakeText).toBeDisplayed();
        driver.touchAction([
            { action: 'longPress', x: 146, y: 1750 },
            { action: 'moveTo', x: 919, y: 1762 },
            'release'
        ]);
    }

    async verifySOLStake() {
        await this.doneText.waitForDisplayed({ timeout: 60000 });
        await expect(this.doneText).toBeDisplayed();
        // const solStakedUI = 'new UiSelector().text("Please check your dashboard for mSOL").className("android.widget.TextView")'
        // const solStakedUI1 = await $(`android=${solStakedUI}`)
        // await solStakedUI1.waitForDisplayed({ timeout: 30000 });
        // await expect(solStakedUI1).toBeDisplayed();
    }

    async verifySOLUnStake() {
        await this.doneText.waitForDisplayed({ timeout: 30000 });
        const solUnStaked = 'new UiSelector().text("SOL unstaked!").className("android.widget.TextView")'
        const solUnStaked1 = await $(`android=${solUnStaked}`)
        await solUnStaked1.waitForDisplayed({ timeout: 30000 });
        await expect(solUnStaked1).toBeDisplayed();
    }


    async verifyStakeScreenFirst_Sol_Second_mSOL(sol, msol) {
        const firstToken = await (await this.firstToken).getText();
        const secondToken = await (await this.secondToken).getText();
        await (firstToken == sol);
        await (secondToken == msol);
    }

    async verifyUnStakeScreenFirst_mSol_Second_SOL(msol, sol) {
        await this.stake_UnstakeText.waitForDisplayed({ timeout: 30000 });
        await expect(this.stake_UnstakeText).toBeDisplayed();
        const firstToken = await (await this.firstToken).getText();
        const secondToken = await (await this.secondToken).getText();
        await (firstToken == msol);
        await (secondToken == sol);

    }

    async enterStakeAmount(stakeAmount) {
        await (await this.stakeInputAmount).waitForDisplayed({ timeount: 30000 });
        await expect(this.stake_UnstakeText).toBeDisplayed();
        await (await this.stakeInputAmount).click();
        await (await this.stakeInputAmount).clearValue();
        await (await this.stakeInputAmount).setValue(stakeAmount);
        driver.hideKeyboard();
    }

    async verify1SOLequalmSOL() {
        const youGetAmount = await (await this.youWillReceiveAmount).getText();
        var exchangeAmount = await (await this.exchangeRate).getText();
        exchangeAmount = exchangeAmount.replace('1 SOL', '').replace(/[^0-9 ^.]/g, '');   // (/[^a-z]+/i, ''); // (/^\D+/g /=, ''); (/[^0-9]/g, '');
        await (youGetAmount == exchangeAmount);

    }

    // Unstake 
    async enterUnStakeAmount(unStakeAmount) {
        await (await this.unStakeInputAmount).waitForDisplayed({ timeount: 30000 });
        await expect(this.unStakeInputAmount).toBeDisplayed();
        await (await this.unStakeInputAmount).click();
        await (await this.unStakeInputAmount).clearValue();
        await (await this.unStakeInputAmount).setValue(unStakeAmount);
        driver.hideKeyboard();
    }

    async verify1mSOLequalSOL() {
        const youGetAmount = await (await this.youWillReceiveAmount).getText();
        var exchangeAmount = await (await this.unstakeExchangeRate).getText();
        exchangeAmount = exchangeAmount.replace('1 mSOL', '').replace(/[^0-9 ^.]/g, '');   // (/[^a-z]+/i, ''); // (/^\D+/g /=, ''); (/[^0-9]/g, '');
        await (youGetAmount == exchangeAmount);

    }


    async clickUnStakeMaxBtn() {
        await this.unStakeMaxBtn.waitForDisplayed({ timeout: 5000 });
        await (await this.unStakeMaxBtn).click();
        await browser.pause(5000);
        var maxAmount = await (await this.unStakeInputAmount).getText();
        var newMaxAmount = (maxAmount - (0.1))
        await (await this.unStakeInputAmount).setValue(newMaxAmount);
        driver.hideKeyboard();
    }

    async() {

    } async() {

    } async() {

    } async() {

    } async() {

    }

}

module.exports = new StakePage();