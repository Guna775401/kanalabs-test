
class AptosDashboardScreen {

    // Aptos wallet dashboard

    get solanaWalletIcon() {
        return $('(//android.view.ViewGroup[@content-desc="goToNeonWallet"])[2]/android.view.ViewGroup');
    }

    get NeonWalletIcon() {
        return $('(//android.view.ViewGroup[@content-desc="goToNeonWallet"])[1]/android.widget.ImageView');
    }

    get() {
        return $('~');
    }
    get() {
        return $('~');
    }
    get() {
        return $('~');
    }



    get aptosTestNetDash() {
        const aptosDash = 'new UiSelector().text("Aptos - TestNet").className("android.widget.TextView")'
        const aptosDash1 = $(`android=${aptosDash}`)
        return aptosDash1;
    }

    get() {
        const aptosDash = 'new UiSelector().text("").className("android.widget.TextView")'
        const aptosDash1 = $(`android=${aptosDash}`)
        return aptosDash1;
    }

    get() {
        const aptosDash = 'new UiSelector().text("").className("android.widget.TextView")'
        const aptosDash1 = $(`android=${aptosDash}`)
        return aptosDash1;
    }


    async verifyAptosTestNet() {
        await this.aptosTestNetDash.waitForDisplayed({ timeout: 60000 })
        await expect(this.aptosTestNetDash).toBeDisplayed();
    }





}

module.exports = new AptosDashboardScreen();