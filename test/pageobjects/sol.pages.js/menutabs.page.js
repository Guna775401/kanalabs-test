const createwalletPage = require("./createwallet.page");
const { createwallet } = require("./createwallet.page");
const { logout } = require("./logut.page");


class MenuTabsOptions{

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
get solDarkmode() {
    return $('~solDarkModeSwitch');
}

get language() {
    return $('~');
}

//ChangePin tab

get dashboardChangePin() {
    return $('~solDrawerChangePinBtn');
}

// First backbutton change pin to dashboard
get changepinToBackDash() {
    return $('~goBackFromSetPin');
}
// Setpin after confirm pin screen to set pin
get confirmPintoSetpinBackbtn(){
    return $('~goBackFromPinValid');
   
}


get logoutTab() {
    return $('~solDrawerLogoutBtn');
}
get cancelButton() {
    return $('~SolDrawerClose');
}

get show_seed_phrase(){
    return $('~solDrawerShowPhraseBtn')
}

async verifyMenuTab(){
    await expect(this.menuTab).toBeDisplayed();
}
async clickMenuTab(){
    await this.menuTab.click();
}
async verifyNetwork(){
    await expect(this.dashboardNetworkTab).toBeDisplayed();
}
async clickChangePin(){
    await this.dashboardChangePin.click();
}

async verifyLanguage(){
    await expect(this).toBeDisplayed();
}
async verifyChangePinTab(){
    await expect(this.dashboardChangePin).toBeDisplayed();
}
async verifyLightMode(){
    await expect(this.solDarkmode).toBeDisplayed();
}
async verifyLogout(){
    await expect(this.logoutTab).toBeDisplayed();
}
async verifyShow_Seed_phrase(){
    await expect(this.show_seed_phrase).toBeDisplayed();
}

async changeToMaintoDev(){
    await this.menuTab.click();
    await this.dashboardNetworkTab.click();
    await this.devNetworkTab.click();
    await (await this.backBtnNetwork).click();
    }

async changeToDevtoMain(){
await this.menuTab.click();
await this.dashboardNetworkTab.click();
await this.mainNetworkTab.click();
await (await this.backBtnNetwork).click();
}

async changeToLightMode(){
await (await this.solDarkmode).click();
}

async changeToDarkMode(){
    await (await this.solDarkmode).click();
    }
    
async changePin(pin1, pin2, pin3, pin4, pin5, pin6) {
    await (await this.loginPin1).waitForDisplayed({ timeout: 240000 });

        await (await createwalletPage.loginPin1).click();
        await (await createwalletPage.loginPin1).setValue(pin1);
        await (await createwalletPage.loginPin2).setValue(pin2);
        await (await createwalletPage.loginPin3).setValue(pin3);
        await (await createwalletPage.loginPin4).setValue(pin4);
        await (await createwalletPage.loginPin5).setValue(pin5);
        await (await createwalletPage.loginPin6).setValue(pin6);
    }
    async changePin_SetPin(pin1, pin2, pin3, pin4, pin5, pin6) {
        await (await this.loginPin1).waitForDisplayed({ timeout: 240000 });
    
            await (await createwalletPage.loginPin1).click();
            await (await createwalletPage.loginPin1).setValue(pin1);
            await (await createwalletPage.loginPin2).setValue(pin2);
            await (await createwalletPage.loginPin3).setValue(pin3);
            await (await createwalletPage.loginPin4).setValue(pin4);
            await (await createwalletPage.loginPin5).setValue(pin5);
            await (await createwalletPage.loginPin6).setValue(pin6);
         }
         async changePin_ConfirmPin(pin1, pin2, pin3, pin4, pin5, pin6) {
            await (await this.loginPin1).waitForDisplayed({ timeout: 240000 });
        
                await (await createwalletPage.loginPin1).click();
                await (await createwalletPage.loginPin1).setValue(pin1);
                await (await createwalletPage.loginPin2).setValue(pin2);
                await (await createwalletPage.loginPin3).setValue(pin3);
                await (await createwalletPage.loginPin4).setValue(pin4);
                await (await createwalletPage.loginPin5).setValue(pin5);
                await (await createwalletPage.loginPin6).setValue(pin6);
             }
        
async verifychangePintoDashBackbtn(){
    await expect(this.changepinToBackDash).toBeDisplayed();
}
async verifyConfirmPinToSetPin(){
    await expect(this.confirmPintoSetpinBackbtn).toBeDisplayed();
}

open (){
return super.ChangePin();
}



//Language tabs element need    




}
module.exports = new MenuTabsOptions();