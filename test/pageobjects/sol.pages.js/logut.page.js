
class LogoutPage {
    // get menuTab() {
    //     return $('~setDrawerOpen');
    // }
    get menuTab() {
        return $('~solHomeDashboardBackIcon');
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
    async logout() {
        await (await this.menuTab).click();
        await (await this.logoutTab).click();
        await (await this.logoutYes).click();
    }


}
module.exports = new LogoutPage();