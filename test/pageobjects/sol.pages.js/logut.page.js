
class LogoutPage {

    get menuTabSol() {
        return $('~solHomeDashboardBackIcon');
    }

    get logoutTab() {
        return $('~solDrawerLogoutBtn');
    }
    get logoutYes() {
        return $('~goToLogin');
    }
    get logoutCancelBtn() {
        return $('~showLogoutModalSol');
    }
    // NEON
    get menuTabNeon() {
        return $('~setDrawerOpen');
    }
    get logoutTabNeon() {
        return $('~logoutNeon')
        //android.view.ViewGroup[@content-desc="logoutNeon"]/android.widget.TextView
    }
    get logoutYesNeon() {
        return $('~loginNeon');
    }
    get cancelBtnNeon() {
        return $('~logoutModalShowNeon');
    }

    get areYouSureLogoutText() {
        const areYouSureLogout = 'new UiSelector().text("Are you sure you want to Log out?").className("android.widget.TextView")'
        const areYouSureLogout1 = $(`android=${areYouSureLogout}`)
        return areYouSureLogout1;
    }
    //android.view.ViewGroup[@content-desc="loginNeon"]/android.widget.TextView


    async logout() {
        await browser.pause(5000);
        await this.menuTabSol.waitForDisplayed({ timeout: 15000 });
        await (this.menuTabSol).click();
        await (this.logoutTab).click();
        await expect(this.areYouSureLogoutText).toBeDisplayed();
        await expect(this.logoutCancelBtn).toBeDisplayed();
        await (this.logoutYes).click();
    }

    async logoutNeon() {
        await browser.pause(5000);
        await this.menuTabNeon.waitForDisplayed({ timeout: 60000 });
        await (this.menuTabNeon).click();
        await (this.logoutTabNeon).click();
        await expect(this.areYouSureLogoutText).toBeDisplayed();
        await expect(this.cancelBtnNeon).toBeDisplayed();
        await (this.logoutYesNeon).click();
    }

    async clickMenuSol() {
        await (await this.menuTabSol).click()
    }
    async clickMenuNeon() {
        await (await this.menuTabNeon).click()
    }
    async clickLogoutCancelBtn() {
        await (await this.logoutCancelBtn).click()
    }

}
module.exports = new LogoutPage();