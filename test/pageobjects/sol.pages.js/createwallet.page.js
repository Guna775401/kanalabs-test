const remindmelaterPage = require("./remindmelater.page");

class CreateWalletPage {

    //FirstTime open the application What is Kana page NextButton

    get nextBtn() {

        return $('~nextButton');
    }
    // Choose wallet Sol
    get solWallet() {
        return $('~solWalletCard');
    }
    get createNewWalletbtn() {
        return $('~goToCreateWallet');
    }
    get inputwalletName() {
        return $('~SOLWalletName');
    }
    get continueBtn() {
        return $('~createWalletSOL');
    }
    get backBtn() {
        return $('~goBackFromNameWallet');
    }
    
    get loginPin1() {
        return $('~pin1');
    }
    get loginPin2() {
        return $('~pin2');
    }
    get loginPin3() {
        return $('~pin3');
    }
    get loginPin4() {
        return $('~pin4');
    }
    get loginPin5() {
        return $('~pin5');
    }
    get loginPin6() {
        return $('~pin6');
    }

async firstnextBtn() {
    await this.nextBtn.waitForDisplayed({ timeout: 120000 });
        await (await this.nextBtn).click();
        await (await this.nextBtn).click();
        await (await this.nextBtn).click();
        };

    async createwallet(walletName) {
        // await createWalletPage.nextBtn.waitForDisplayed({timeout : 60000}) 
        await (await this.solWallet).click();
        await (await this.createNewWalletbtn).click();
        await (await this.inputwalletName).setValue(walletName);
        driver.hideKeyboard();
        await (await this.continueBtn).click();
     
        }

    async enterSetPin(pin){
        await (await this.loginPin1).waitForDisplayed({timeout:240000});
        
        await (await this.loginPin1).click(); 
        await (await this.loginPin1).addValue(pin);
        await (await this.loginPin2).click(); 
        await (await this.loginPin2).addValue(pin);
        await (await this.loginPin3).click(); 
        await (await this.loginPin3).addValue(pin);
        await (await this.loginPin4).click(); 
        await (await this.loginPin4).addValue(pin);
        await (await this.loginPin5).click(); 
        await (await this.loginPin5).addValue(pin);
        await (await this.loginPin6).click(); 
        await (await this.loginPin6).addValue(pin);

    }
    async enterConfirmPin(pin){
        await (await this.loginPin1).waitForDisplayed({timeout:240000});
        
        await (await this.loginPin1).click(); 
        await (await this.loginPin1).addValue(pin);
        await (await this.loginPin2).click(); 
        await (await this.loginPin2).addValue(pin);
        await (await this.loginPin3).click(); 
        await (await this.loginPin3).addValue(pin);
        await (await this.loginPin4).click(); 
        await (await this.loginPin4).addValue(pin);
        await (await this.loginPin5).click(); 
        await (await this.loginPin5).addValue(pin);
        await (await this.loginPin6).click(); 
        await (await this.loginPin6).addValue(pin);

 }
    async enterLoginPin(pin){
        await (await this.loginPin1).waitForDisplayed({timeout:240000});
        
        await (await this.loginPin1).click(); 
        await (await this.loginPin1).addValue(pin);
        await (await this.loginPin2).click(); 
        await (await this.loginPin2).addValue(pin);
        await (await this.loginPin3).click(); 
        await (await this.loginPin3).addValue(pin);
        await (await this.loginPin4).click(); 
        await (await this.loginPin4).addValue(pin);
        await (await this.loginPin5).click(); 
        await (await this.loginPin5).addValue(pin);
        await (await this.loginPin6).click(); 
        await (await this.loginPin6).addValue(pin);


    }

    
   
}
module.exports = new CreateWalletPage();