class NeonLogoutPage {

    get neonLogout() {
        return $('~logoutNeon');
    }
    
    get neonYesLogout() {
        return $('~loginNeon');
    }
    get cancelBtn() {
        return $('~logoutModalShowNeon');
    }
    


}
module.exports = new NeonLogoutPage();