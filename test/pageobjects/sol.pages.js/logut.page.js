class LogoutPage{

    get logoutTab() {
        return $('~solDrawerLogoutBtn');
    }
    get logoutYes() {
        return $('~goToLogin');
    }
    get cancelBtn() {
        return $('~showLogoutModalSol');
    }

    
}
module.exports = new LogoutPage();