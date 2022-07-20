
class LogoutPage {
    
    get menuTabSol() {
        return $('~solHomeDashboardBackIcon');
        //android.view.ViewGroup[@content-desc="setDrawerOpen"]/android.view.ViewGroup
    }

     get logoutTab() {
        return $('~solDrawerLogoutBtn');
    }
    get logoutYes() {
        return $('~goToLogin');
    }
    get cancelBtn() {
        return $('~showLogoutModalSol');
    }
// NEon
     get menuTabNeon() {
         return $('~setDrawerOpen');
     }
get logoutTabNeon(){
    return $('~logoutNeon')
    //android.view.ViewGroup[@content-desc="logoutNeon"]/android.widget.TextView
}
get logoutYesNeon() {
    return $('~loginNeon');
}
get cancelBtnNeon() {
    return $('~logoutModalShowNeon');
}
//android.view.ViewGroup[@content-desc="loginNeon"]/android.widget.TextView


    async logout() {
        await browser.pause(10000);
        await this.menuTabSol.waitForDisplayed({ timeout: 60000 });
        await (this.menuTabSol).click();
        await (this.logoutTab).click();
        await (this.logoutYes).click();
    }
    async logoutNeon() {
        await browser.pause(10000);
        await this.menuTabNeon.waitForDisplayed({ timeout: 60000 });
         await (this.menuTabNeon).click();
        await (this.logoutTabNeon).click();
        await (this.logoutYesNeon).click();
    }

    async clickMenuSol(){
        await browser.pause(10000)
        await (await this.menuTabSol).click()
    }
    async clickMenuNeon(){
        await (await this.menuTabNeon).click()
    }

}
module.exports = new LogoutPage();