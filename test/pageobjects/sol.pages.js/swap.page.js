const menutabsPage = require("./menutabs.page");

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
    get youPaydropdownSearh() {
        return $("~swapTokenListViewText");
    }
    get youReceivedropdownSearch() {
        return $("~swapTokenListViewText");
    }
    get doneBtn() {
        return $('~goToHomeDone');
    }
    get result(){
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
        console.log(await this.marketPlaceName1.getText());
        console.log(await this.marketPlaceTokenName1.getText());


        //  await (await this.marketPlace1).click();

        //    driver.touchAction([
        //     {action: 'press', x: 498, y: 1961},
        //     {action: 'moveTo', x: 502, y: 1337},
        //     'release'
        //   ]);

        //   console.log (await this.marketPlace5.getText());
        //   await this.marketPlaceName7.scrollIntoView();
        //   console.log (await this.marketPlaceName7.getText());

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

        //    await this.marketPlace5.waitForDisplayed({ timeout: 60000 })
        //  await expect(this.marketPlace5).toBeDisplayed();
        await browser.pause(10000);
        console.log(await this.marketPlaceName6.getText());

        // const marketName5 = await this.marketPlaceName6.getText();
        //console.log("Third Market Name :" + " " + marketName5);
        //const marketTokenName5 = await this.marketPlaceTokenName6.getText();
        //console.log("Market Token Name :" + " " + marketTokenName5);
        await (await this.marketPlaceName5).click();
    }

    async refresh() {
        await browser.pause(2000)
        driver.touchAction([
            { action: 'longPress', x: 525, y: 172 },
            { action: 'moveTo', x: 517, y: 628 },
            'release'
        ]);
    }


    async clickSwapBtn() {
        await this.swapBtn.waitForDisplayed({ timeout: 60000 })
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
        browser.pause(30000);
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
        await (await this.youPaydropdownSearh).click();
        await (await this.youPaydropdownSearh).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        uSDTtxt.click();
        uSDTtxt.click();

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
        //uSDCtxt.click();
        //uSDCtxt.click();
    }

    async uSDCtoUSDT(usdc, usdt) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearh).click();
        await (await this.youPaydropdownSearh).setValue(usdc);
        const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
        const uSDCtxt = $(`android=${usdctxt}`)
        uSDCtxt.click();
        uSDCtxt.click();

        await (await this.youReceivedropdown).click();
        const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText1 = $(`android=${search1}`)
        await expect(searchText1).toBeDisplayed();
        await (await this.youReceivedropdownSearch).click();
        await (await this.youReceivedropdownSearch).setValue(usdt);
        const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
        const uSDTtxt = $(`android=${usdttxt}`)
        uSDTtxt.click();
        uSDTtxt.click();
    }
    async sOLtoUSDC(sol) {
        await (await this.youPaydropdown).click();
        const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
        const searchText = $(`android=${search}`)
        await expect(searchText).toBeDisplayed();
        await (await this.youPaydropdownSearh).click();
        await (await this.youPaydropdownSearh).setValue(sol);
        const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
        const sOLtxt = $(`android=${soltxt}`)
        sOLtxt.click();
        sOLtxt.click();

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
            await (await this.youPaydropdownSearh).click();
            await (await this.youPaydropdownSearh).setValue(usdc);
            const usdctxt = 'new UiSelector().text("USDC").className("android.widget.TextView")'
            const uSDCtxt = $(`android=${usdctxt}`)
            uSDCtxt.click();
            uSDCtxt.click();
    
            await (await this.youReceivedropdown).click();
            const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
            const searchText1 = $(`android=${search1}`)
            await expect(searchText1).toBeDisplayed();
            await (await this.youReceivedropdownSearch).click();
            await (await this.youReceivedropdownSearch).setValue(sol);
            const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
            const sOLtxt = $(`android=${soltxt}`)
            sOLtxt.click();
            sOLtxt.click();
        }

        async sOLtoUSDT(sol, usdt) {
            await (await this.youPaydropdown).click();
            const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
            const searchText = $(`android=${search}`)
            await expect(searchText).toBeDisplayed();
            await (await this.youPaydropdownSearh).click();
            await (await this.youPaydropdownSearh).setValue(sol);
            const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
            const sOLtxt = $(`android=${soltxt}`)
            sOLtxt.click();
            sOLtxt.click();
    
            await (await this.youReceivedropdown).click();
            const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
            const searchText1 = $(`android=${search1}`)
            await expect(searchText1).toBeDisplayed();
            await (await this.youReceivedropdownSearch).click();
            await (await this.youReceivedropdownSearch).setValue(usdt);
            const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
            const uSDTtxt = $(`android=${usdttxt}`)
            uSDTtxt.click();
            uSDTtxt.click();
        }

        async uSDTtoSOL(usdt,sol) {
            
            await (await this.youReceivedropdown).click();
            const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
            const searchText1 = $(`android=${search1}`)
            await expect(searchText1).toBeDisplayed();
            await (await this.youReceivedropdownSearch).click();
            await (await this.youReceivedropdownSearch).setValue(usdt);
            const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
            const uSDTtxt = $(`android=${usdttxt}`)
            uSDTtxt.click();
            uSDTtxt.click();

            await (await this.youPaydropdown).click();
            const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
            const searchText = $(`android=${search}`)
            await expect(searchText).toBeDisplayed();
            await (await this.youPaydropdownSearh).click();
            await (await this.youPaydropdownSearh).setValue(sol);
            const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
            const sOLtxt = $(`android=${soltxt}`)
            sOLtxt.click();
            sOLtxt.click();
 }

 async sOLtoSRM(sol, srm) {
    await (await this.youPaydropdown).click();
    const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText = $(`android=${search}`)
    await expect(searchText).toBeDisplayed();
    await (await this.youPaydropdownSearh).click();
    await (await this.youPaydropdownSearh).setValue(sol);
    const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
    const sOLtxt = $(`android=${soltxt}`)
    sOLtxt.click();
    sOLtxt.click();

    await (await this.youReceivedropdown).click();
    const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText1 = $(`android=${search1}`)
    await expect(searchText1).toBeDisplayed();
    await (await this.youReceivedropdownSearch).click();
    await (await this.youReceivedropdownSearch).setValue(srm);
    const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
    const sRMtxt = $(`android=${srmtxt}`)
    sRMtxt.click();
    sRMtxt.click();
}

async sRMtoSOL(srm,sol) {
   
    await (await this.youReceivedropdown).click();
    const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText1 = $(`android=${search1}`)
    await expect(searchText1).toBeDisplayed();
    await (await this.youReceivedropdownSearch).click();
    await (await this.youReceivedropdownSearch).setValue(srm);
    const srmtxt = 'new UiSelector().text("SRM").className("android.widget.TextView")'
    const sRMtxt = $(`android=${srmtxt}`)
    sRMtxt.click();
    sRMtxt.click();

    await (await this.youPaydropdown).click();
    const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText = $(`android=${search}`)
    await expect(searchText).toBeDisplayed();
    await (await this.youPaydropdownSearh).click();
    await (await this.youPaydropdownSearh).setValue(sol);
    const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
    const sOLtxt = $(`android=${soltxt}`)
    sOLtxt.click();
    sOLtxt.click();
}

async uSDHtoUSDT(usdh, usdt) {
    await (await this.youPaydropdown).click();
    const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText = $(`android=${search}`)
    await expect(searchText).toBeDisplayed();
    await (await this.youPaydropdownSearh).click();
    await (await this.youPaydropdownSearh).setValue(usdh);
    const usdhtxt = 'new UiSelector().text("USDH").className("android.widget.TextView")'
    const uSDHtxt = $(`android=${usdhtxt}`)
    uSDHtxt.click();
    uSDHtxt.click();

    await (await this.youReceivedropdown).click();
    const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText1 = $(`android=${search1}`)
    await expect(searchText1).toBeDisplayed();
    await (await this.youReceivedropdownSearch).click();
    await (await this.youReceivedropdownSearch).setValue(usdt);
    const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
    const uSDTtxt = $(`android=${usdttxt}`)
    uSDTtxt.click();
    uSDTtxt.click();
}

async uSDTtoUSDH(usdt, usdh) {
   
    await (await this.youReceivedropdown).click();
    const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText1 = $(`android=${search1}`)
    await expect(searchText1).toBeDisplayed();
    await (await this.youReceivedropdownSearch).click();
    await (await this.youReceivedropdownSearch).setValue(usdt);
    const usdttxt = 'new UiSelector().text("USDT").className("android.widget.TextView")'
    const uSDTtxt = $(`android=${usdttxt}`)
    uSDTtxt.click();
    uSDTtxt.click();
   
    await (await this.youPaydropdown).click();
    const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText = $(`android=${search}`)
    await expect(searchText).toBeDisplayed();
    await (await this.youPaydropdownSearh).click();
    await (await this.youPaydropdownSearh).setValue(usdh);
    const usdhtxt = 'new UiSelector().text("USDH").className("android.widget.TextView")'
    const uSDHtxt = $(`android=${usdhtxt}`)
    uSDHtxt.click();
    uSDHtxt.click();
}

async sOLtomSOL(sol, mSOL) {
    await (await this.youPaydropdown).click();
    const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText = $(`android=${search}`)
    await expect(searchText).toBeDisplayed();
    await (await this.youPaydropdownSearh).click();
    await (await this.youPaydropdownSearh).setValue(sol);
    const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
    const sOLtxt = $(`android=${soltxt}`)
    sOLtxt.click();
    sOLtxt.click();

    await (await this.youReceivedropdown).click();
    const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText1 = $(`android=${search1}`)
    await expect(searchText1).toBeDisplayed();
    await (await this.youReceivedropdownSearch).click();
    await (await this.youReceivedropdownSearch).setValue(mSOL);
    const msoltxt = 'new UiSelector().text("mSOL").className("android.widget.TextView")'
    const mSOLTxt = $(`android=${msoltxt}`)
    mSOLTxt.click();
    mSOLTxt.click();
}

async mSOLtoSOL(mSOL,sol) {
    
    await (await this.youReceivedropdown).click();
    const search1 = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText1 = $(`android=${search1}`)
    await expect(searchText1).toBeDisplayed();
    await (await this.youReceivedropdownSearch).click();
    await (await this.youReceivedropdownSearch).setValue(mSOL);
    const msolTxt1 = 'new UiSelector().text("mSOL").className("android.widget.TextView")'
    const mSOLTxt1 = $(`android=${msolTxt1}`)
    mSOLTxt1.click();
    mSOLTxt1.click();

    await (await this.youPaydropdown).click();
    const search = 'new UiSelector().text("Search for a token").className("android.widget.EditText")'
    const searchText = $(`android=${search}`)
    await expect(searchText).toBeDisplayed();
    await (await this.youPaydropdownSearh).click();
    await (await this.youPaydropdownSearh).setValue(sol);
    const soltxt = 'new UiSelector().text("SOL").className("android.widget.TextView")'
    const sOLtxt = $(`android=${soltxt}`)
    sOLtxt.click();
    sOLtxt.click();
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
        await (uSDTSwap).waitForDisplayed({ timeout: 60000 })
        await expect(uSDTSwap).toBeDisplayed();
        await (this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (this.doneBtn).click();
    }
    
    async verifyUSDCSwapped() {
       const uSDcSwap = 'new UiSelector().text("USDC swapped!").className("android.widget.TextView")'
        const uSDCSwap = $(`android=${uSDcSwap}`)
        await expect(uSDCSwap).toBeDisplayed();
        await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
        await (await this.doneBtn).click();
    }

    async verifySOLSwapped() {
        const uSDcSwap = 'new UiSelector().text("SOL swapped!").className("android.widget.TextView")'
         const uSDCSwap = $(`android=${uSDcSwap}`)
         await expect(uSDCSwap).toBeDisplayed();
         await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
         await (await this.doneBtn).click();
     }
     async verifyUSDHSwapped() {
        const uSDcSwap = 'new UiSelector().text("USDH swapped!").className("android.widget.TextView")'
         const uSDCSwap = $(`android=${uSDcSwap}`)
         await expect(uSDCSwap).toBeDisplayed();
         await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
         await (await this.doneBtn).click();
     }
 
     async verifySRMSwapped() {
        const uSDcSwap = 'new UiSelector().text("SRM swapped!").className("android.widget.TextView")'
         const uSDCSwap = $(`android=${uSDcSwap}`)
         await expect(uSDCSwap).toBeDisplayed();
         await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
         await (await this.doneBtn).click();
     }
     async verifymSOLSwapped() {
        const uSDcSwap = 'new UiSelector().text("mSOL swapped!").className("android.widget.TextView")'
         const uSDCSwap = $(`android=${uSDcSwap}`)
         await expect(uSDCSwap).toBeDisplayed();
         await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
         await (await this.doneBtn).click();
     }
     async verifysoSUSHISwapped() {
        const uSDcSwap = 'new UiSelector().text("soSUSHI swapped!").className("android.widget.TextView")'
         const uSDCSwap = $(`android=${uSDcSwap}`)
         await expect(uSDCSwap).toBeDisplayed();
         await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
         await (await this.doneBtn).click();
     }
     async verifyUSTSwapped() {
        const uSDcSwap = 'new UiSelector().text("UST swapped!").className("android.widget.TextView")'
         const uSDCSwap = $(`android=${uSDcSwap}`)
         await expect(uSDCSwap).toBeDisplayed();
         await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
         await (await this.doneBtn).click();
     }
     async verifyORCASwapped() {
        const uSDcSwap = 'new UiSelector().text("ORCA swapped!").className("android.widget.TextView")'
         const uSDCSwap = $(`android=${uSDcSwap}`)
         await expect(uSDCSwap).toBeDisplayed();
         await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
         await (await this.doneBtn).click();
     }
     async verifyETHSwapped() {
        const uSDcSwap = 'new UiSelector().text("ETH swapped!").className("android.widget.TextView")'
         const uSDCSwap = $(`android=${uSDcSwap}`)
         await expect(uSDCSwap).toBeDisplayed();
         await (await this.doneBtn).waitForDisplayed({ timeout: 120000 })
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
        await browser.pause(10000);

        driver.touchAction([
            { action: 'longPress', x: 525, y: 172 },
            { action: 'moveTo', x: 517, y: 628 },
            'release'
        ]);
        await browser.pause(5000);
        await this.swapBtn.click();
    }


}
module.exports = new SwapPage(); 