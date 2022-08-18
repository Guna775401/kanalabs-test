const menutabsPage = require("./menutabs.page");

const fs = require('fs');

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
    // Ok Button
    get devToMain_OkButton() {
        return $('~goToNetworkSolana');
    }
    // Cancel Button
    get devToMain_CancelBtn() {
        return $('~showLogoutModalSol1');
    }


    get slidetBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup');
    }
    // get swapNowText() {
    //     const swapScreen = 'new UiSelector().text("Swap").className("android.widget.TextView")'
    //     const SwapScreen =  $(`android=${swapScreen}`)
    //     return SwapScreen;
    // }

    get balance() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView[3]');
    }
    get maxBtn() {
        return $('~maxAmountForSwap');
    }

    // New Elements

    get youPaydropdown() {
        return $("~selectedToken1");
    }
    get youPayInputAmount() {
        return $("~tokenAmountForSwap");
    }
    get youReceivedropdown() {
        return $("~searchTextForToken2");
    }
    get youPaydropdownSearch() {
        return $("~swapTokenListViewText");
    }
    get youReceivedropdownSearch() {
        return $("~swapTokenListViewText");
    }
    get doneBtn() {
        return $('~goToHomeDone');
    }
    get result() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView[1]')
    }
    // const findindBestRoute = 'new UiSelector().text("Finding you the best route and price").className("android.widget.TextView")'
    // const findindBestRoute1 = $(`android=${findindBestRoute}`)


    // Swap Ui elements

    //await browser.pause(10000);


    get bestPricetxt() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView')
    }

    // Market places

    get marketPlace1() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup');
    }
    get marketPlace2() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup');
    }

    get marketPlace3() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup');
    }
    get marketPlace4() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup');
    }
    get marketPlace5() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup');
    }

    get marketPlace6() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup');
    }

    // Market Place route Name 
    get marketPlaceName1() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName2() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName3() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName4() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName5() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.widget.TextView[1]')
    }
    get marketPlaceName6() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup/android.widget.TextView[1]')
    }


    // Market Place route token Name 
    get marketPlaceTokenName1() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName2() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName3() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName4() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName5() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[6]/android.view.ViewGroup/android.widget.TextView[2]')
    }
    get marketPlaceTokenName6() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[7]/android.view.ViewGroup/android.widget.TextView[2]')
    }


    async firstMarketPlace() {
        await this.marketPlaceName1.waitForDisplayed({ timeout: 60000 })
        await expect(this.marketPlaceName1).toBeDisplayed();

        const marketName1 = await this.marketPlaceName1.getText()
        const marketTokenName2 = await this.marketPlaceTokenName1.getText()
        console.log(marketName1)
        console.log(marketTokenName2)
        // fs.open('result.txt', marketName1, function(err) {
        //     if(err) throw err;
        //          console.log(err);
        //     //console.log("marketName2");
        // }); 

        // fs.open('result.txt', marketTokenName2, function(err, ) {
        //     if(err) throw err; 
        //          console.log(err);
        //          // console.log("marketTokenName2");
        // }); 

      //  fs.writeFileSync('F:\KanaLabs\Reports', marketName1);
       // fs.writeFileSync('F:\KanaLabs\Reports', marketTokenName2);
    }

    async secondMarketPlace() {
        await this.marketPlace2.waitForDisplayed({ timeout: 60000 })
        await expect(this.marketPlace2).toBeDisplayed();
        const marketName2 = await this.marketPlaceName2.getText();
        const marketTokenName2 = await this.marketPlaceTokenName2.getText();
        console.log("Second Market Name :" + " " + marketName2);
        console.log("Market Token Name :" + " " + marketTokenName2);
        await (await this.marketPlace2).click();
    }

    async thirdMarketPlace() {
        await this.marketPlace3.waitForDisplayed({ timeout: 60000 })
        await expect(this.marketPlace3).toBeDisplayed();
        const marketName3 = await this.marketPlaceName3.getText();
        const marketTokenName3 = await this.marketPlaceTokenName3.getText();
        console.log("Third Market Name :" + " " + marketName3);
        console.log("Market Token Name :" + " " + marketTokenName3);
        await (await this.marketPlace3).click();
    }

    async fourthMarketPlace() {
        await this.marketPlace4.waitForDisplayed({ timeout: 60000 })
        await expect(this.marketPlace4).toBeDisplayed();
        const marketName4 = await this.marketPlaceName4.getText();
        const marketTokenName4 = await this.marketPlaceTokenName4.getText();
        console.log("Third Market Name :" + " " + marketName4);
        console.log("Market Token Name :" + " " + marketTokenName4);
        await (await this.marketPlace4).click();
    }

    async fivthMarketPlace() {

        driver.touchAction([
            { action: 'longPress', x: 670, y: 2011 },
            { action: 'moveTo', x: 643, y: 1383 },
            'release'
        ]);

        //  await this.marketPlace5.waitForDisplayed({ timeout: 60000 })
        //  await expect(this.marketPlace5).toBeDisplayed();
        await browser.pause(10000);
        console.log(await this.marketPlaceName6.getText());
        // const marketName5 = await this.marketPlaceName6.getText();
        //console.log("Third Market Name :" + " " + marketName5);
        //const marketTokenName5 = await this.marketPlaceTokenName6.getText();
        //console.log("Market Token Name :" + " " + marketTokenName5);
        await (await this.marketPlaceName5).click();
    }
    async getBalance() {

    }
    async getMaxAmount() {
        await this.maxBtn.waitForDisplayed({ timeout: 60000 })
        await (await this.maxBtn).click();
        const maxAmount = await (this.youPayInputAmount).getText();
        const balanceAmount = await (this.balance).getText();
        const res = (maxAmount == balanceAmount);
        console.log(res);
        //console.log(await maxAmount.isEqual(balanceAmount));
        // await (await this.youPayInputAmount).getText();
    }

    async refresh() {
        await browser.pause(2000)
        driver.touchAction([
            { action: 'longPress', x: 486, y: 149 },
            { action: 'moveTo', x: 452, y: 904 },
            'release'
        ]);
    }

    async clickSwapBtn() {
        await (await this.swapBtn).waitForDisplayed({ timeout: 60000 })
        await expect(this.swapBtn).toBeDisplayed();
        await this.swapBtn.click();
    }

    async verifyBeforeStartSwapping() {
        browser.pause(10000);
        //await this.swapBtn.waitForDisplayed({ timeout: 6000 })
        //await expect(this.swapBtn).toBeDisplayed();
        await this.swapBtn.waitForClickable({ reverse: true });
        await (await this.swapBtn).click();

        // await expect(this.backBtn).toBeDisplayed();
        // await expect(this.startSwappinBtn).toBeDisplayed();
        const swapScreen = 'new UiSelector().text("Swap").className("android.widget.TextView")'
        const SwapScreen = await $(`android=${swapScreen}`)
        await SwapScreen.waitForDisplayed({ timeout: 6000 })
        await expect(SwapScreen).toBeDisplayed();
        await (await this.startSwappinBtn).click();
    }

    async verifySwapScreen() {
        //await this.swapBtn.waitForClickable({ reverse: true });
        //await this.swapBtn.waitForDisplayed({ timeout: 20000 })
        // await (await this.swapBtn).click();// Need to delete
        //await (await this.swapBtn).click();
        await this.startSwappinBtn.waitForDisplayed({ timeout: 10000 })
        await (await this.startSwappinBtn).click();
        await expect(this.backBtn).toBeDisplayed();
        const swapScreen = 'new UiSelector().text("Swap").className("android.widget.TextView")'
        const SwapScreen = await $(`android=${swapScreen}`)
        await SwapScreen.waitForDisplayed({ timeout: 30000 })
        await expect(SwapScreen).toBeDisplayed();
    }

    async verifySwapNow() {
        const swapNow = 'new UiSelector().text("Swap now").className("android.widget.TextView")'
        const SwapNow = await $(`android=${swapNow}`)
        await SwapNow.waitForDisplayed({ timeout: 120000 })
        await expect(SwapNow).toBeDisplayed();
    }

    async enterAmtInput(amount) {

        await (await this.youPayInputAmount).click();
        await (await this.youPayInputAmount).setValue(amount);
        driver.hideKeyboard();

        const findindBestRoute = 'new UiSelector().text("Finding you the best route and price").className("android.widget.TextView")'
        const findindBestRoute1 = $(`android=${findindBestRoute}`)
        await (await findindBestRoute1).waitForDisplayed({ timeout: 60000 })
        await expect(findindBestRoute1).toBeDisplayed();
    }

    async uSDTtoUSDC(usdt) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        await uSDTtxt.click();
        await uSDTtxt.click();

        // await (await this.youReceivedropdown).click();
        //const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        //const searchText1 = $(`android=${search1}`)
        //await expect(searchText1).toBeDisplayed();
        //await (await this.youReceivedropdownSearch).click();
        //await (await this.youReceivedropdownSearch).setValue(usdc);
        const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDCtxt = $(`android=${usdctxt}`)
        await (await uSDCtxt).waitForDisplayed({ timeout: 60000 })
        await expect(uSDCtxt).toBeDisplayed();
        //await uSDCtxt.click();
        //await uSDCtxt.click();
    }

    async uSDCtoUSDT(usdc, usdt) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdc);
        const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDCtxt = $(`android=${usdctxt}`)
        await uSDCtxt.click();
        await uSDCtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        await uSDTtxt.click();
        await uSDTtxt.click();
    }
    async sOLtoUSDC(sol) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(sol);
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        await sOLtxt.click();
        await sOLtxt.click();

        const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDCtxt = $(`android=${usdctxt}`)
        await (await uSDCtxt).waitForDisplayed({ timeout: 60000 })
        await expect(uSDCtxt).toBeDisplayed();
    }

    async uSDCtoSOL(usdc, sol) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdc);
        const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDCtxt = $(`android=${usdctxt}`)
        await uSDCtxt.click();
        await uSDCtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(sol);
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        await sOLtxt.click();
        await sOLtxt.click();
    }

    async sOLtoUSDT(usdt) {
        // await (await this.youPaydropdown).click();
        // const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        // const searchText = $(`android=${search}`)
        // await expect(searchText).toBeDisplayed();
        // await (await this.youPaydropdownSearch).click();
        // await (await this.youPaydropdownSearch).setValue(sol);
        // const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        // const sOLtxt = $(`android=${soltxt}`)
        // sOLtxt.click();
        // sOLtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        await uSDTtxt.click();
        await uSDTtxt.click();
    }

    async uSDTtoSOL(usdt, sol) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        await uSDTtxt.click();
        await uSDTtxt.click();


        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(sol);
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        await sOLtxt.click();
        await sOLtxt.click();
    }

    async sOLtoSRM(sol, srm) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(sol);
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        await sOLtxt.click();
        await sOLtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(srm);
        const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
        const sRMtxt = $(`android=${srmtxt}`)
        await sRMtxt.click();
        await sRMtxt.click();
    }

    async sRMtoSOL(srm, sol) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(srm);
        const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
        const sRMtxt = $(`android=${srmtxt}`)
        await sRMtxt.click();
        await sRMtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(sol);
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        await sOLtxt.click();
        await sOLtxt.click();

    }

    async sRMtoUST(srm, ust) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(srm);
        const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
        const sRMtxt = $(`android=${srmtxt}`)
        await sRMtxt.click();
        await sRMtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(ust);
        const usttxt = 'new UiSelector().text("UST").className("android.widget.TextView")'
        const uSTtxt = $(`android=${usttxt}`)
        await uSTtxt.click();
        await uSTtxt.click();
    }

    async uSTtoSRM(ust, srm) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(ust);
        const usttxt = 'new UiSelector().text("UST").className("android.widget.TextView")'
        const uSTtxt = $(`android=${usttxt}`)
        await uSTtxt.click();
        await uSTtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(srm);
        const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
        const sRMtxt = $(`android=${srmtxt}`)
        await sRMtxt.click();
        await sRMtxt.click();
    }

    async uSDHtoUSDT(usdh, usdt) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdh);
        const usdhtxt = 'new UiSelector().text("USDH").className("android.widget.TextView")'
        const uSDHtxt = $(`android=${usdhtxt}`)
        await uSDHtxt.click();
        await uSDHtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        await uSDTtxt.click();
        await uSDTtxt.click();
    }

    async uSDTtoUSDH(usdt, usdh) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        await uSDTtxt.click();
        await uSDTtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdh);
        const usdhtxt = 'new UiSelector().text("USDH").className("android.widget.TextView")'
        const uSDHtxt = $(`android=${usdhtxt}`)
        await uSDHtxt.click();
        await uSDHtxt.click();
    }

    async sOLtomSOL(sol, mSOL) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(sol);
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        await sOLtxt.click();
        await sOLtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(mSOL);
        const msoltxt = 'new UiSelector().text("mSOL").className("android.widget.TextView")'
        const mSOLTxt = $(`android=${msoltxt}`)
        await mSOLTxt.click();
        await mSOLTxt.click();
    }

    async mSOLtoSOL(mSOL, sol) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(mSOL);
        const msolTxt1 = 'new UiSelector().text("mSOL").className("android.widget.TextView")'
        const mSOLTxt1 = $(`android=${msolTxt1}`)
        await mSOLTxt1.click();
        await mSOLTxt1.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(sol);
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        await sOLtxt.click();
        await sOLtxt.click();
    }

    async soSUSHItoORCA(soSUSHI, orca) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(soSUSHI);
        const sosushiItxt = 'new UiSelector().text("soSUSHI").className("android.widget.TextView")'
        const soSUSHItxt = $(`android=${sosushiItxt}`)
        await soSUSHItxt.click();
        await soSUSHItxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(orca);
        const orcatxt = 'new UiSelector().text("ORCA").className("android.widget.TextView")'
        const oRCAtxt = $(`android=${orcatxt}`)
        await oRCAtxt.click();
        await oRCAtxt.click();
    }

    async oRCAtosoSUSHI(orca,soSUSHI) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(orca);
        const orcatxt = 'new UiSelector().text("ORCA").className("android.widget.TextView")'
        const oRCAtxt = $(`android=${orcatxt}`)
        await oRCAtxt.click();
        await oRCAtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(soSUSHI);
        const sosushiItxt = 'new UiSelector().text("soSUSHI").className("android.widget.TextView")'
        const soSUSHItxt = $(`android=${sosushiItxt}`)
        await soSUSHItxt.click();
        await soSUSHItxt.click();
       
    }

    async selectUSDC(usdc) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdc);
        const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDCtxt = $(`android=${usdctxt}`)
        await uSDCtxt.click();
        await uSDCtxt.click();
    }
    async selectUST(ust) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(ust);
        const usttxt = 'new UiSelector().text("UST").className("android.widget.TextView")'
        const uSTtxt = $(`android=${usttxt}`)
        await uSTtxt.click();
        await uSTtxt.click();
    }
    async selectUSDT(usdt) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        await uSDTtxt.click();
        await uSDTtxt.click();
    }

    async selectSRM(srm) {

        await (await this.youPaydropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(srm);
        const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
        const sRMtxt = $(`android=${srmtxt}`)
        await sRMtxt.click();
        await sRMtxt.click();
    }

    async selectmSOL(mSOL) {

        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearch).click();
        await (await this.youPaydropdownSearch).setValue(mSOL);
        const msolTxt1 = 'new UiSelector().text("mSOL").className("android.widget.TextView")'
        const mSOLTxt1 = $(`android=${msolTxt1}`)
        await mSOLTxt1.click();
        await mSOLTxt1.click();
    }

    async slidetoSwap() {
        const slide = $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/android.view.ViewGroup/android.view.ViewGroup');
        await slide.waitForDisplayed({ timeout: 120000 })
        const slideToSwapTxt = 'new UiSelector().text("Slide to swap").className("android.widget.TextView")'
        const slideToSwapTxt1 = $(`android=${slideToSwapTxt}`)
        await expect(slideToSwapTxt1).toBeDisplayed();

        driver.touchAction([
            { action: 'longPress', x: 158, y: 2183 },
            { action: 'moveTo', x: 930, y: 2168 },
            'release'
        ])
    }

    async verifyUSDTSwapped() {
        const usDtSwap = 'new UiSelector().text("USDT swapped!").className("android.widget.TextView")'
        const uSDTSwap = $(`android=${usDtSwap}`)
        await (uSDTSwap).waitForDisplayed({ timeout: 120000 })
        await expect(uSDTSwap).toBeDisplayed();
        // await (this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (this.doneBtn).click();
    }

    async verifyUSDCSwapped() {
        const uSDcSwap = 'new UiSelector().text("USDC swapped!").className("android.widget.TextView")'
        const uSDCSwap = $(`android=${uSDcSwap}`)
        await (uSDCSwap).waitForDisplayed({ timeout: 60000 })
        await expect(uSDCSwap).toBeDisplayed();
        await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }

    async verifySOLSwapped() {
        const solSwap = 'new UiSelector().text("SOL swapped!").className("android.widget.TextView")'
        const sOLSwap = $(`android=${solSwap}`)
        await (sOLSwap).waitForDisplayed({ timeout: 120000 })
        await expect(sOLSwap).toBeDisplayed();
        //  await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }
    async verifyUSDHSwapped() {
        const usdhSwap = 'new UiSelector().text("USDH swapped!").className("android.widget.TextView")'
        const uSDHSwap = $(`android=${usdhSwap}`)
        await (uSDHSwap).waitForDisplayed({ timeout: 120000 })
        await expect(uSDHSwap).toBeDisplayed();
        //   await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }

    async verifySRMSwapped() {
        const srmSwap = 'new UiSelector().text("SRM swapped!").className("android.widget.TextView")'
        const sRMSwap = $(`android=${srmSwap}`)
        await (sRMSwap).waitForDisplayed({ timeout: 120000 })
        await expect(sRMSwap).toBeDisplayed();
        // await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }
    async verifymSOLSwapped() {
        const msolSwap = 'new UiSelector().text("mSOL swapped!").className("android.widget.TextView")'
        const mSOLSwap = $(`android=${msolSwap}`)
        await (mSOLSwap).waitForDisplayed({ timeout: 120000 })
        await expect(mSOLSwap).toBeDisplayed();
        // await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }
    async verifysoSUSHISwapped() {
        const sosushiSwap = 'new UiSelector().text("soSUSHI swapped!").className("android.widget.TextView")'
        const soSUSHISwap = $(`android=${sosushiSwap}`)
        await (soSUSHISwap).waitForDisplayed({ timeout: 90000 })
        await expect(soSUSHISwap).toBeDisplayed();
        //await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }
    async verifyUSTSwapped() {
        const ustSwap = 'new UiSelector().text("UST swapped!").className("android.widget.TextView")'
        const uSTSwap = $(`android=${ustSwap}`)
        await (uSTSwap).waitForDisplayed({ timeout: 90000 })
        await expect(uSTSwap).toBeDisplayed();
        //await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }
    async verifyORCASwapped() {
        const orcaSwap = 'new UiSelector().text("ORCA swapped!").className("android.widget.TextView")'
        const oRCASwap = $(`android=${orcaSwap}`)
        await (oRCASwap).waitForDisplayed({ timeout: 90000 })
        await expect(oRCASwap).toBeDisplayed();
        // await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }
    async verifyETHSwapped() {
        const ethSwap = 'new UiSelector().text("ETH swapped!").className("android.widget.TextView")'
        const eTHSwap = $(`android=${ethSwap}`)
        await (eTHSwap).waitForDisplayed({ timeout: 90000 })
        await expect(eTHSwap).toBeDisplayed();
        // await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }

    async clickDoneBtn() {
        await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }

    async verifySwapScreenUI() {

        // const swapScreen = 'new UiSelector().text("Swap").className("android.widget.TextView")'
        // const SwapScreen = $(`android=${swapScreen}`)
        // await SwapScreen.waitForDisplayed({ timeout: 10000 })
        // await expect(swapScreen).toBeDisplayed();

        const youPay = 'new UiSelector().text("You pay").className("android.widget.TextView")'
        const youPay1 = $(`android=${youPay}`)
        await (youPay1).waitForDisplayed({ timeout: 10000 })
        await expect(youPay1).toBeDisplayed();

        const youReceive = 'new UiSelector().text("You receive").className("android.widget.TextView")'
        const youReceive1 = $(`android=${youReceive}`)
        await expect(youReceive1).toBeDisplayed();

        const rate = 'new UiSelector().text("Rate").className("android.widget.TextView")'
        const rate1 = $(`android=${rate}`)
        await (rate1).waitForDisplayed({ timeout: 30000 })
        await expect(rate1).toBeDisplayed();

        const bestPrice = 'new UiSelector().text("Best price").className("android.widget.TextView")'
        const bestPrice1 = $(`android=${bestPrice}`)
        await expect(bestPrice1).toBeDisplayed();

    }

    async verifyDevToMainNetWarning() {
        await expect(this.devToMain_OkButton).toBeDisplayed();
        await expect(this.devToMain_CancelBtn).toBeDisplayed();
        const swapWarning = 'new UiSelector().text("Swap Warning").className("android.widget.TextView")'
        const SwapWarning = $(`android=${swapWarning}`)
        await SwapWarning.waitForDisplayed({ timeout: 120000 })
        const changeNetworkAsmain = 'new UiSelector().text("Please change network as mainnet").className("android.widget.TextView")'
        const changeNetworkAsMain = $(`android=${changeNetworkAsmain}`)
        await changeNetworkAsMain.waitForDisplayed({ timeout: 120000 })
        await (await this.devToMain_OkButton).click();
    }

    async okBtnClick() {
        await (await this.devToMain_OkButton).click();
    }

    async changeToDevtoMain() {
        await menutabsPage.mainNetworkTab.click();
        await this.swapBtn.waitForDisplayed({ timeout: 6000 })
        await expect(this.swapBtn).toBeDisplayed();
        await browser.pause(5000);

        driver.touchAction([
            { action: 'longPress', x: 525, y: 172 },
            { action: 'moveTo', x: 517, y: 628 },
            'release'
        ]);
        await this.swapBtn.click();
    }

    async changeToMainToDev() {
        await menutabsPage.mainNetworkTab.click();
        await this.swapBtn.waitForDisplayed({ timeout: 6000 })
        await expect(this.swapBtn).toBeDisplayed();
        await browser.pause(5000);

        driver.touchAction([
            { action: 'longPress', x: 525, y: 172 },
            { action: 'moveTo', x: 517, y: 628 },
            'release'
        ]);

    }
}
module.exports = new SwapPage(); 