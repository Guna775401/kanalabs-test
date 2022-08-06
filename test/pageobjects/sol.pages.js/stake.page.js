



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
    get maxBtn() {
        return $('~maxUnstake');
    }
    get stakeDoneBtn() {
        return $('~goToHomeDone');
    }
    get doneText() {
        const donetxt = 'new UiSelector().text("Done").className("android.widget.TextView")'
        const doneTxt =  $(`android=${donetxt}`)
        return doneTxt;
    }

    get slideBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup');
    }
    get exchangeRate() {
        return $('~stakeExchangeRate');
    }
    get depositfee() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[6]');
    }

    get stake_UnstakeText() {
        const stake_Unstaketxt = 'new UiSelector().text("Staking / Unstaking").className("android.widget.TextView")'
        const stake_UnstakeTxt =  $(`android=${stake_Unstaketxt}`)
        return stake_UnstakeTxt;

    }

    get exchangeRateText() {
        const exchangeRatetxt = 'new UiSelector().text("Exchange rate").className("android.widget.TextView")'
        const exchangeRatetxt1 =  $(`android=${exchangeRatetxt}`)
        return exchangeRatetxt1;
    }
    get depositFeeText() {
        const depositFeetxt = 'new UiSelector().text("Deposit fee").className("android.widget.TextView")'
        const depositFeetxt1 =  $(`android=${depositFeetxt}`)
        return depositFeetxt1;
    }
    get slideToStakeText() {
        const slideToStaketxt = 'new UiSelector().text("Slide to stake").className("android.widget.TextView")'
        const slideToStakeTxt =  $(`android=${slideToStaketxt}`)
        return slideToStakeTxt;
    }

    get availableBalanceText() {
        const availabletxt = 'new UiSelector().text("Available balance").className("android.widget.TextView")'
        const availableTxt =  $(`android=${availabletxt}`)
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

    get slideToUnStake() {
        const slideToUnStaketxt = 'new UiSelector().text("Slide to unstake").className("android.widget.TextView")'
        const slideToUnStakeTxt =  $(`android=${slideToUnStaketxt}`)
        return slideToUnStakeTxt;
    }

    get firstToken() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView')
    }

    get secondToken() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.FrameLayout/androidx.viewpager.widget.ViewPager/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView[1]')
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
        await (await this.stakeBtn).click();
    }
    async clickStart_Stakingbtn() {
        await (await this.startStakebtn).click();
    }
    async clickMaxbtn() {
        await (await this.maxBtn).click();
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

        await (this.slideBtn).waitForDisplayed({ timeout: 30000 });
        await expect(this.slideBtn).toBeDisplayed();
        await this.slideToStakeText.waitForDisplayed({ timeout: 30000 });
        await expect(this.slideToStakeText).toBeDisplayed();
        driver.touchAction([
            { action: 'longPress', x: 142, y: 1750 },
            { action: 'moveTo', x: 934, y: 1750 },
            'release'
        ]);
    }

    async verifySOLStake() {
        await this.doneText.waitForDisplayed({ timeout: 30000 });
        const solStaked = 'new UiSelector().text("SOL staked!").className("android.widget.TextView")'
        const solStaked1 = await $(`android=${solStaked}`)
        await solStaked1.waitForDisplayed({ timeout: 30000 });
        await expect(solStaked1).toBeDisplayed();

        const solStakedUI = 'new UiSelector().text("Please check your dashboard for mSOL").className("android.widget.TextView")'
        const solStakedUI1 = await $(`android=${solStakedUI}`)
        await solStakedUI1.waitForDisplayed({ timeout: 30000 });
        await expect(solStakedUI1).toBeDisplayed();
    }

    async verifyStakeScreenFirst_Sol_Second_mSOL() {
        await this.stake_UnstakeText.waitForDisplayed({ timeout: 30000 });
        await expect(this.stake_UnstakeText).toBeDisplayed();
        const firstToken = await (await this.firstToken).getText();
        const secondToken = await (await this.secondToken).getText();
        await (firstToken == process.env.SOL);
        await (secondToken == process.env.MSOL);
    }

    async verifyUnStakeScreenFirst_mSol_Second_SOL() {
        await this.stake_UnstakeText.waitForDisplayed({ timeout: 30000 });
        await expect(this.stake_UnstakeText).toBeDisplayed();
        const firstToken = await (await this.firstToken).getText();
        const secondToken = await (await this.secondToken).getText();
        await (firstToken == process.env.MSOL);
        await (secondToken == process.env.SOL);

    }

   async() {

    } async() {

    } async() {

    } async() {

    } async() {

    } async() {

    } async() {

    } async() {

    }

}

module.exports = new StakePage();