

class NeonDashboardPage {


    // SolWallet in dashboard Neon Wallet logo
    get neonWallet() {
        return $('~goToNeonWallet');
    }
    // Need Send button

    // neon wallet menu tab
    get neonWalletMenuTab() {
        return $('~setDrawerOpen');
    }
    get neonWalletMenuTabCloseBtn() {
        return $('~drawerCloseNeon');
    }
    // Network tab
    get neonWalletMenuNetworkTab() {
        return $('~goToNetworkNeon');
    }
    get neonWalletDevNet() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup');
    }
    get neonWalletNetworkBackBtn() {
        return $('~backButtonNeon');
    }
    // Change Pin tab   
    get neonWalletMenuChangePin() {
        return $('~changePinNeon');
    }
    get neonWalletMenuChangePinBackBtn() {
        return $('~goBackFromSetPin');
    }


    get neonWalletLightModeBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.Switch');
    }
    // Logout 
    get neonWalletLogutBtn() {
        return $('~logoutNeon');
    }
    get neonWalletLogutCancelBtn() {
        return $('~logoutModalShowNeon');
    }
    get neonWalletLogoutYes() {
        return $('~loginNeon');
    }


    get neonWalletShowSeedPhrase() {
        return $('~showSeedPhraseNeon');
    }

    // incase use this unnecessery  Neon Wallet Dashboard in SOL Logo
    get solWallet() {
        return $('~changeWalletTypeNeon');
    }
    // Dashboard
    get neonWalletTokenTab() {
        return $('~Tokens');
    }
    get neonHistoryTab() {
        return $('~History');
    }
    get neonCreate_ViewWallet() {
        return $('~createOrViewValletNeon')
    }

    get neonScanQR() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup')
    }

    get neonSendBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup')
    }
    get neonFaucetBtn() {
        return $('~addFaucetNeon')
    }

    get neonCopyClipboard() {
        return $('~copyToClipboardNeon');
    }

    // need to element
    get neonNftBtn() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.view.ViewGroup');
    }
    //dashboard token tab bottom SOL send sol token
    get sendNeonToken() {
        return $('~sendTokenNeon');
    }




    // Display function

    async verifyNeonDash() {
        //await this.solWallet.waitForDisplayed({ timeout: 60000 });
        const walletNeon = 'new UiSelector().text("NEON Wallet").className("android.widget.TextView")'
        const walletNEON = await $(`android=${walletNeon}`)
        await walletNEON.waitForDisplayed({ timeout: 120000 })
        await expect(walletNEON).toBeDisplayed();
    }



    async verifyNeonChangePin() {
        //await this.solWallet.waitForDisplayed({ timeout: 60000 });
        const changePinNeon = 'new UiSelector().text("Change Pin").className("android.widget.TextView")'
        const pinChangeNeon = await $(`android=${changePinNeon}`)
        const changePinContentNeon = 'new UiSelector().text("Please enter your current Pin to update your new Pin").className("android.widget.TextView")'
        const pinChangecontentNeon = await $(`android=${changePinContentNeon}`)
        await pinChangeNeon.waitForDisplayed({ timeout: 120000 })
        await expect(pinChangeNeon).toBeDisplayed();
        await expect(pinChangecontentNeon).toBeDisplayed();
    }
    async verifyMenuOptions() {
        await expect(await this.neonWalletMenuTab).toBeDisplayed();
        await this.neonWalletMenuTab.click();
        await expect(await this.neonWalletMenuTabCloseBtn).toBeDisplayed();
        await expect(await this.neonWalletMenuNetworkTab).toBeDisplayed();
        await expect(await this.neonWalletMenuChangePin).toBeDisplayed();
        await expect(await this.neonWalletLightModeBtn).toBeDisplayed();
        await expect(await this.neonWalletLogutBtn).toBeDisplayed();
        await expect(await this.neonWalletShowSeedPhrase).toBeDisplayed();
        await (await this.neonWalletMenuTabCloseBtn).click();

    }
    async verifyNeonWalletSendBtnAndFaucetBtn() {
        await this.neonSendBtn.waitForDisplayed({ timeout: 60000 });
        await expect(this.neonSendBtn).toBeDisplayed();
        await expect(this.neonFaucetBtn).toBeDisplayed();
    }
    async verifyTokenAndHistoryAndCreate_ViewWallet() {
        await this.neonWalletTokenTab.waitForDisplayed({ timeout: 60000 });
        await expect(this.neonWalletTokenTab).toBeDisplayed();
        await expect(this.neonHistoryTab).toBeDisplayed();
        await expect(this.neonCreate_ViewWallet).toBeDisplayed();

    }

    async clickChangePin() {
        await (await this.neonWalletMenuChangePin).click();
        await this.neonWalletMenuChangePinBackBtn.waitForDisplayed({ timeout: 120000 })
    }



    async clickNeonWalletDash() {
        await browser.pause(10000)
        await expect(this.neonWallet).toBeDisplayed();
        await (await this.neonWallet).click();
    }
    async verifyNeonWallet() {
        await expect(this.neonWallet).toBeDisplayed();
    }

    async verifyTokensNeon() {
        await expect(this.neonWalletTokenTab).toBeDisplayed();
    }
    async verifyHistoryNeon() {
        await expect(this.neonHistoryTab).toBeDisplayed();
    }
    async verifyCreate_ViewWallet() {
        await expect(this.neonCreate_ViewWallet).toBeDisplayed();
    }
    async verifySOLWallet() {
        await browser.pause(3000)
        await expect(this.solWallet).toBeDisplayed();
    }

    async verifyNeonWalletMenuOption() {
        await expect(this.neonWalletMenuTab).toBeDisplayed();
    }
    async verifyNeonWalletCopyClipboard() {
        await expect(this.neonCopyClipboard).toBeDisplayed();
    }
    async verifyNeonWalletScanQR() {
        await expect(this.neonScanQR).toBeDisplayed();
    }


    async verifyNeonWalletHoldingValueTxt() {
        const holdingValue = 'new UiSelector().text("Holding value").className("android.widget.TextView")'
        const holdingValueTxt = await $(`android=${holdingValue}`)
        await expect(holdingValueTxt).toBeDisplayed();
    }



    // Click function
    async clickNeonWallet() {
        await browser.pause(3000)
        await (this.neonWallet).click();
    }
    async clickNeonWalletMenuOption() {
        await browser.pause(3000)
        await (await this.neonWalletMenuTab).click();
    }







}
module.exports = new NeonDashboardPage();