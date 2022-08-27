const createwalletPage = require("./createwallet.page");
const { createwallet } = require("./createwallet.page");
const dashboardPage = require("./dashboard.page");
const { logout } = require("./logut.page");


class MenuTabsOptions {

    get menuTab() {
        return $('~solHomeDashboardBackIcon');
    }

    //Network tab

    get dashboardNetworkTab() {
        return $('~solDrawerNetworkBtn');
    }
    get mainNetworkTab() {
        return $('~changeNetworkToMainnet');
    }
    get devNetworkTab() {
        return $('~changeNetworkToDevnet');
    }
    get backBtnNetwork() {
        return $('~goBackFromNetwork');
    }



    // one click dark mode two click dark mode
    // get solDarkmode() {
    //     return $('~solDarkModeSwitch');
    // }

    // get language() {
    //     return $('~');
    // }

    //ChangePin tab

    get dashboardChangePin() {
        return $('~solDrawerChangePinBtn');
    }

    // First backbutton change pin to dashboard
    get changepinToBackDash() {
        return $('~goBackFromSetPin');
    }
    get referral() {
        return $('~solDrawerShareReferralBtn')
    }
    // Setpin after confirm pin screen to set pin
    get confirmPintoSetpinBackbtn() {
        return $('~goBackFromPinValid');
    }
    get logoutTab() {
        return $('~solDrawerLogoutBtn');
    }
    get show_seed_phrase() {
        return $('~solDrawerShowPhraseBtn')
    }

    // Displayed Functions

    async verifyMenuTab() {
        await browser.pause(10000);
        await expect(this.menuTab).toBeDisplayed();
    }


    // Menu Wallets Elements

    get menuSolWalletCard() {
        return $('~solShowAccount')
    }
    get menuSolWalletName() {
        return $('//android.view.ViewGroup[@content-desc="solShowAccount"]/android.widget.TextView[1]')
    }

    get menuSolWalletBalance() {
        return $('//android.view.ViewGroup[@content-desc="solShowAccount"]/android.widget.TextView[2]')
    }
    get menuPublicAddress() {
        return $('//android.view.ViewGroup[@content-desc="solShowAccount"]/android.widget.TextView[3]')
    }
    get menuMultipleWallet_ViewOption() {
        return $('//android.view.ViewGroup[@content-desc="solShowAccount"]/android.view.ViewGroup[2]')
    }
    get menuCancelButton() {
        return $('~SolDrawerClose');
    }
    get menuCreateWallet() {
        return $('~createWalletWrapper')
    }

    // First Wallet 
    get menuFirst_Wallet() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[1]')
    }
    get menuFirst_WalletLogo() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[1]/android.view.ViewGroup')
    }
    get menuFirst_WalletName() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[1]/android.widget.TextView[1]')
    }
    get menuFirst_WalletBalance() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[1]/android.widget.TextView[2]')
    }

    // Second wallet 
    get menuSecond_Wallet() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[2]')
    }
    get menuSecond_WalletLogo() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[2]/android.view.ViewGroup')
    }
    get menuSecond_WalletName() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[2]/android.widget.TextView[1]')
    }
    get menuSecond_WalletBalance() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[2]/android.widget.TextView[2]')
    }

    // Third Wallet

    get menuThird_Wallet() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[3]')
    }
    get menuThird_WalletLogo() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[3]/android.view.ViewGroup')
    }
    get menuThird_WalletName() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[3]/android.widget.TextView[1]')
    }
    get menuThird_WalletBalance() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[3]/android.widget.TextView[2]')
    }

    // Fourth
    get menuFourth_Wallet() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[4]')
    }
    get menuFourth_WalletLogo() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[4]/android.view.ViewGroup')
    }
    get menuFourth_WalletName() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[4]/android.widget.TextView[1]')
    }
    get menuFourth_WalletBalance() {
        return $('(//android.view.ViewGroup[@content-desc="solChangeActiveWalletHome"])[4]/android.widget.TextView[2]')
    }


    // Text
    get createWalletText() {
        const createwalletText = 'new UiSelector().text("Create Wallet").className("android.widget.TextView")'
        const createwalletText1 =  $(`android=${createwalletText}`)
        return createwalletText1;
    }

    get nameYourWalletText() {
        const nameyourwalletText = 'new UiSelector().text("Name your wallet").className("android.widget.TextView")'
        const nameyourwalletText1 =  $(`android=${nameyourwalletText}`)
        return nameyourwalletText1;

    }
    get nameYourWalletDesText() {
        const nameyourwalletDesText = 'new UiSelector().text("Give an unique name to your wallet. You will be able to receive tokens using this wallet name, without the need for using a complicated public address! Powered by Kana and SNS").className("android.widget.TextView")'
        const nameyourwalletDesText1 =  $(`android=${nameyourwalletDesText}`)
        return nameyourwalletDesText1;


    } get() { } get() { } get() { } get() { } get() { } get() { } get() { }

    //return $('')

    async() {
        return $('')
    }

    async verifyNetwork() {
        await expect(this.dashboardNetworkTab).toBeDisplayed();
    }
    // async verifyLanguage() {
    //     await expect(this).toBeDisplayed();
    // }
    async verifyChangePinTab() {
        await expect(this.dashboardChangePin).toBeDisplayed();
    }
    async verifyReferralTab() {
        await expect(this.referral).toBeDisplayed();
    }

    // async verifyLightMode() {
    //     await expect(this.solDarkmode).toBeDisplayed();
    // }
    async verifyLogout() {
        await expect(this.logoutTab).toBeDisplayed();
    }
    async verifyShow_Seed_phrase() {
        await expect(this.show_seed_phrase).toBeDisplayed();
    }

    async verifyDisplay_DevNetAndMainNet() {
        await (await this.menuTab).waitForDisplayed({ timeout: 60000 });
        await browser.pause(10000);
        await this.menuTab.click();
        await this.dashboardNetworkTab.click();
        await expect(this.devNetworkTab).toBeDisplayed();
        await expect(this.mainNetworkTab).toBeDisplayed();
        await this.backBtnNetwork.click();
    }

    async VerifyMenu_Wallet() {
        await (await this.menuSolWalletCard).waitForDisplayed({ timeout: 30000 });
        await expect(this.menuCancelButton).toBeDisplayed();
        await expect(this.menuSolWalletCard).toBeDisplayed();
        await expect(this.menuSolWalletName).toBeDisplayed();
        await expect(this.menuSolWalletBalance).toBeDisplayed();
        await expect(this.menuPublicAddress).toBeDisplayed();
        await expect(this.menuMultipleWallet_ViewOption).toBeDisplayed();
        await (this.menuMultipleWallet_ViewOption).click();
        await expect(this.createWalletText).toBeDisplayed();
        await expect(this.menuCreateWallet).toBeDisplayed();
    }

    async enterWalletName(walletName) {
        await expect(createwalletPage.backBtn).toBeDisplayed();
        await expect(this.nameYourWalletText).toBeDisplayed();
        await expect(this.nameYourWalletDesText).toBeDisplayed();
        await (await createwalletPage.inputwalletName).click();
        await (await createwalletPage.inputwalletName).clearValue();
        await (await createwalletPage.inputwalletName).setValue(walletName)
        driver.hideKeyboard();
        await (await createwalletPage.continueBtn).click();
    }

    async verifyCreateFirstName(WalletName1) {
        var name = await (await dashboardPage.walletName).getText();
        (name == WalletName1)
    }
    async verifyCreateSecondName(WalletName2) {
        var name = await (await dashboardPage.walletName).getText();
        (name == WalletName2)
    }
    async verifyCreateThirdName(WalletName3) {
        var name = await (await dashboardPage.walletName).getText();
        (name == WalletName3)
    }
    async verifyCreateFourthName(WalletName4) {
        var name = await (await dashboardPage.walletName).getText();
        (name == WalletName4)
    }

    // Click Function

async clickmenuINMultipleWallet_ViewOption(){
    await expect(this.menuMultipleWallet_ViewOption).toBeDisplayed();
    await (this.menuMultipleWallet_ViewOption).click();

}

    async clickMenuTab() {
        await this.menuTab.click();
    }
    async clickChangePin() {
        await expect(this.dashboardChangePin).toBeDisplayed();
        await this.dashboardChangePin.click();
    }
    async clickCancelbtn() {
        await (await this.cancelButton).click();
    }

    async clickCreateWalletINMenutab() {
        await (await this.menuCreateWallet).click();
    }


    // Clickable Functions

    // async verifyMenuTabClickable() {
    //     await expect(this.menuTab).toBeClickable();
    // }
    // async verifyNetworkClickable() {
    //     await expect(this.dashboardNetworkTab).toBeClickable();
    // }
    // async verifyChangePinClickable() {
    //     await this.dashboardChangePin.toBeClickable();
    // }
    // async verifyLanguageClickable() {
    //     await expect(this).toBeClickable();
    // }
    // async verifyLightModeClickable() {
    //     await expect(this.solDarkmode).toBeClickable();
    // }
    // async verifyLogoutClickable() {
    //     await expect(this.logoutTab).toBeClickable();
    // }
    // async verifyShow_Seed_phraseClickable() {
    //     await expect(this.show_seed_phrase).toBeClickable();
    // }


    async verifyCLickable_DevNetAndMainNet() {
        await (await this.menuTab).waitForDisplayed({ timeout: 60000 });
        await this.menuTab.click();
        await this.dashboardNetworkTab.click();
        await expect(this.devNetworkTab).toBeClickable();
        await expect(this.mainNetworkTab).toBeClickable();
        await this.backBtnNetwork.click();
    }

    async verifyClickable_MainNet() {
        await expect(this.dashboardNetworkTab).toBeClickable();
        await expect(this.mainNetworkTab).toBeClickable();
        await expect(this.backBtnNetwork).toBeClickable();
    }

    async changeToMaintoDev() {
        await (await this.menuTab).waitForDisplayed({ timeout: 60000 });
        await this.menuTab.click();
        await this.dashboardNetworkTab.click();
        await this.devNetworkTab.click();

    }

    async changeToDevtoMain() {
        await (await this.menuTab).waitForDisplayed({ timeout: 60000 });
        await this.menuTab.click();
        await this.dashboardNetworkTab.click();
        await this.mainNetworkTab.click();
        await browser.pause(2000)
        driver.touchAction([
            { action: 'longPress', x: 486, y: 149 },
            { action: 'moveTo', x: 452, y: 904 },
            'release'
        ]);
    }

    // async changeToLightMode() {
    //     await (await this.solDarkmode).click();
    // }

    // async changeToDarkMode() {
    //     await (await this.solDarkmode).click();
    // }

    async changePin(pin1, pin2, pin3, pin4, pin5, pin6) {
        await (await createwalletPage.loginPin1).waitForDisplayed({ timeout: 240000 });

        await (await createwalletPage.loginPin1).click();
        await (await createwalletPage.loginPin1).setValue(pin1);
        await (await createwalletPage.loginPin2).setValue(pin2);
        await (await createwalletPage.loginPin3).setValue(pin3);
        await (await createwalletPage.loginPin4).setValue(pin4);
        await (await createwalletPage.loginPin5).setValue(pin5);
        await (await createwalletPage.loginPin6).setValue(pin6);
    }
    async changePin_SetPin(pin1, pin2, pin3, pin4, pin5, pin6) {
        await (await createwalletPage.loginPin1).waitForDisplayed({ timeout: 240000 });

        await (await createwalletPage.loginPin1).click();
        await (await createwalletPage.loginPin1).setValue(pin1);
        await (await createwalletPage.loginPin2).setValue(pin2);
        await (await createwalletPage.loginPin3).setValue(pin3);
        await (await createwalletPage.loginPin4).setValue(pin4);
        await (await createwalletPage.loginPin5).setValue(pin5);
        await (await createwalletPage.loginPin6).setValue(pin6);
    }
    async changePin_ConfirmPin(pin1, pin2, pin3, pin4, pin5, pin6) {
        await (await createwalletPage.loginPin1).waitForDisplayed({ timeout: 240000 });

        await (await createwalletPage.loginPin1).click();
        await (await createwalletPage.loginPin1).setValue(pin1);
        await (await createwalletPage.loginPin2).setValue(pin2);
        await (await createwalletPage.loginPin3).setValue(pin3);
        await (await createwalletPage.loginPin4).setValue(pin4);
        await (await createwalletPage.loginPin5).setValue(pin5);
        await (await createwalletPage.loginPin6).setValue(pin6);
    }

    async verifychangePintoDashBackbtn() {
        await expect(this.changepinToBackDash).toBeDisplayed();
    }
    async verifyConfirmPinToSetPin() {
        await expect(this.confirmPintoSetpinBackbtn).toBeDisplayed();
    }

    async verifyConfirmPinToSetPinClickable() {
        await expect(this.confirmPintoSetpinBackbtn).toBeClickable();
    }



    open() {
        return super.ChangePin();
    }



    //Language tabs element need    




}
module.exports = new MenuTabsOptions();