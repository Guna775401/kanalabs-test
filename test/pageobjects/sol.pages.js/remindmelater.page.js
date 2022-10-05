const securenowPage = require("./securenow.page");

class RemindMeLaterPage {

    get remindMeLaterBtn() {
        return $('~openReminMeLater');
    }

    open () {
        return super.open('remindMeLaterBtn');
    }
    
    get skipNowBtn() {
        return $('~skipNow');
    }
    // Need for element
    get checkBox() {
        return $('//android.view.ViewGroup[@content-desc="checkBoxWrapper"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup');
    }
    get secureNowBtn() {
        return $('~secureNowCheckBox');
    }
    get skipYourAccountSecurityText() {
        const skipYourAccountSecurity = 'new UiSelector().text("Skip Account Security?").className("android.widget.TextView")'
        const skipYourAccountSecurity1 = $(`android=${skipYourAccountSecurity}`)
        return skipYourAccountSecurity1;
    }
    get pleaseAcceptTheConditionText() {
        const pleaseAcceptTheCondition = 'new UiSelector().text("Please Accept the Condition ").className("android.widget.TextView")'
        const pleaseAcceptTheCondition1 = $(`android=${pleaseAcceptTheCondition}`)
        return pleaseAcceptTheCondition1;
    }

    get pleaseEnsureText() {
        const pleaseensure = 'new UiSelector().text("Please ensure you back up your ").className("android.widget.TextView")'
        const pleaseensure1 = $(`android=${pleaseensure}`)

        const walletNow = 'new UiSelector().text("wallet now!").className("android.widget.TextView")'
        const walletNow1 = $(`android=${walletNow}`)

        return pleaseensure1, walletNow1;
    }
    get() {
        const mainDash = 'new UiSelector().text("").className("android.widget.TextView")'
        const mainDash1 = $(`android=${mainDash}`)
        return mainDash1;
    }


    async remindmelater() {
        await (await this.remindMeLaterBtn).waitForDisplayed({ timeout: 60000 });
        await expect(securenowPage.secureyourwalletText).toBeDisplayed();
        await expect(securenowPage.secureyourwalletDesText).toBeDisplayed();
        await expect(securenowPage.start).toBeDisplayed();
        await (await this.remindMeLaterBtn).click();
        await expect(this.skipYourAccountSecurityText).toBeDisplayed();
        await expect(this.pleaseAcceptTheConditionText).toBeDisplayed();
        await expect(await this.skipNowBtn).toBeDisabled();
        await (await this.checkBox).click();
        await expect(this.skipNowBtn).toBeEnabled();
        await expect(this.secureNowBtn).toBeDisplayed();
        await (await this.skipNowBtn).click();
        await expect(this.pleaseEnsureText).toBeDisplayed();
    }

}

module.exports = new RemindMeLaterPage();