

class MenuTabsOptions{

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
    get backBtn() {
        return $('~goBackFromNetwork');
    }



   // one click dark mode two click dark mode
get solDarkmode() {
    return $('~solDarkModeSwitch');
}

//ChangePin tab

get dashboardChangePin() {
    return $('~solDrawerChangePinBtn');
}
get changePinOld() {
    return $('~');
}
get dashboardSetPin() {
    return $('~');
}
get dashboardConfirmPin() {
    return $('~');
}
get backBtn() {
    return $('~goBackFromSetPin');
}

async changePin(oldpin, newpin, confirmpin) {
    await (await dashboardPage.menuTab).click();
    await (await this.dashboardChangePin).click();
    await (await this.changePinOld).setValue(oldpin);
    await (await this.dashboardSetPin).setValue(newpin);
    await (await this.dashboardConfirmPin).setValue(confirmpin);
    await (await this.backBtn).click();
}
open (){
return super.ChangePin();
}

 //Language tabs element need    




}
module.exports = new MenuTabsOptions();