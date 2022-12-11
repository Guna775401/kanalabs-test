const RemindMeLater = require("./remindmelater.page");

class SecureNowPage {


    get start() {
        return $('~showSecureNow');
    }
    //Secure your wallet pharse Start

    get secureStart() {
        return $('~showPhraseStart');
    }

    // But not Sure Element 
    get eyeIcon() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView');
    }
    // Need for all seed pharse elements

    // First seed pharse continue btn
    get continueBtn() {
        return $('~goToConfirmPhrase');
    }

    get copySeeds() {
        return $('~copySeedShowPhrase');
    }

    get backBtn() {
        return $('~goBackFromShowPhrase');
    }

    //confirm seed continue button
    get confirmSeedContinueBtn() {
        return $('~confrimSeedContinueBtn');
    }

    //confirm seed back button
    get confirmseeedbackBtn() {
        return $('~confrimSeedBackBtn');
    }

    // continue button seed correct answer after continue
    get correctContinueBtn() {
        return $('~confrimSeedContinueBtn');
    }

    get finishBtn() {
        return $('~goToHomeDashboardFromSuccessProtection');
    }


    get flashItem1() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[1]/android.widget.TextView');
    }
    get flashItem2() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[2]/android.widget.TextView');
    }
    get flashItem3() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup[3]/android.widget.TextView');
    }
    get flashItem4() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.TextView');
    }
    get flashItem5() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[2]/android.widget.TextView');
    }
    get flashItem6() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.TextView');
    }
    get flashItem7() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.widget.TextView');
    }
    get flashItem8() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[2]/android.widget.TextView');
    }
    get flashItem9() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[3]/android.widget.TextView');
    }
    get flashItem10() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.widget.TextView');
    }
    get flashItem11() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[2]/android.widget.TextView');
    }
    get flashItem12() {
        return $('//android.widget.ScrollView[@content-desc="flastListItems"]/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[3]/android.widget.TextView');
    }



    get flashInput1() {
        return $('//android.widget.ScrollView[@content-desc="FlatListSelectedArr"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.TextView');
    }
    get flashInput2() {
        return $('//android.widget.ScrollView[@content-desc="FlatListSelectedArr"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.TextView');
    }
    get flashInput3() {
        return $('//android.widget.ScrollView[@content-desc="FlatListSelectedArr"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[3]/android.widget.TextView');
    }


    get flashItemCopy1() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[1]/android.widget.TextView');
    }

    get flashItemCopy2() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[2]/android.widget.TextView');
    }
    get flashItemCopy3() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[3]/android.widget.TextView');
    }
    get flashItemCopy4() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[4]/android.widget.TextView');
    }
    get flashItemCopy5() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[5]/android.widget.TextView');
    }
    get flashItemCopy6() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[6]/android.widget.TextView');
    }
    get flashItemCopy7() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[7]/android.widget.TextView');
    }
    get flashItemCopy8() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[8]/android.widget.TextView');
    }
    get flashItemCopy9() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[9]/android.widget.TextView');
    }
    get flashItemCopy10() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[10]/android.widget.TextView');
    }
    get flashItemCopy11() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[11]/android.widget.TextView');
    }
    get flashItemCopy12() {
        return $('(//android.view.ViewGroup[@content-desc="phraseTextWrapperForFlatlist"])[12]/android.widget.TextView');
    }




    get secureyourwalletText() {
        const secureYourWallet = 'new UiSelector().text("Secure your wallet").className("android.widget.TextView")'
        const secureYourWallet1 =  $(`android=${secureYourWallet}`)
        return secureYourWallet1;
    }

    get secureyourwalletDesText() {
        const secureYourWalletDes = 'new UiSelector().text("Dont risk losing your funds. Protect your wallet by saving your Seed phrase in a place you trust. It is the only way to recover your wallet if you get locked out of the app or get a new device.").className("android.widget.TextView")'
        const secureYourWalletDes1 =  $(`android=${secureYourWalletDes}`)
        return secureYourWalletDes1;
    }
    // get secureyourseedphraseText() {
    //     const secureyourseedphrase = 'new UiSelector().text("").className("android.widget.TextView")'
    //     const secureyourseedphrase1 = await $(`android=${secureyourseedphrase}`)
    //     return secureyourseedphrase1;
    // }
    get writedownyourseedonPaperText() {
        const secureyourseedphraseonPaper = 'new UiSelector().text("Write down your seed phrase on a paper and store in a safe place.").className("android.widget.TextView")'
        const secureyourseedphraseonPaper1 =  $(`android=${secureyourseedphraseonPaper}`)
        return secureyourseedphraseonPaper1;
    }

    get secureyourwalletAllText() {
        const securitylevel = 'new UiSelector().text("Security level: Very strong").className("android.widget.TextView")'
        const securitylevel1 =  $(`android=${securitylevel}`)

        const risesAre = 'new UiSelector().text("Risks are:").className("android.widget.TextView")'
        const risesAre1 =  $(`android=${risesAre}`)

        const youlosit = 'new UiSelector().text("• You lose it").className("android.widget.TextView")'
        const youlosit1 =  $(`android=${youlosit}`)

        const youforget = 'new UiSelector().text("• You forget where you put it").className("android.widget.TextView")'
        const youforget1 =  $(`android=${youforget}`)

        const someone = 'new UiSelector().text("• Someone else finds it").className("android.widget.TextView")'
        const someone1 =  $(`android=${someone}`)

        // const otheroption = 'new UiSelector().text("Other options: Doesn't have to be paper!").className("android.widget.TextView")'
        // const otheroption1 = await $(`android=${otheroption}`)

        const tips = 'new UiSelector().text("Tips:").className("android.widget.TextView")'
        const tips1 =  $(`android=${tips}`)

        const storeinbank = 'new UiSelector().text("• Store in bank vault").className("android.widget.TextView")'
        const storeinbank1 =  $(`android=${storeinbank}`)

        const storeinsafe = 'new UiSelector().text("• Store in a safe place").className("android.widget.TextView")'
        const storeinsafe1 =  $(`android=${storeinsafe}`)

        const storeinmultiple = 'new UiSelector().text("• Store in multiple secret places").className("android.widget.TextView")'
        const storeinmultiple1 =  $(`android=${storeinmultiple}`)

        // const secureyourseedphrase = 'new UiSelector().text("").className("android.widget.TextView")'
        // const secureyourseedphrase1 = await $(`android=${secureYourWalletDes}`)

        // Doesn't work give a array or {}

        return securitylevel1, risesAre1, youlosit1, youforget1, someone1, tips1, storeinbank1, storeinsafe1, storeinmultiple1;



    }
    get writedownyourseedText() {
        const writedown = 'new UiSelector().text("Write down your seed phrase").className("android.widget.TextView")'
        const writedown1 =  $(`android=${writedown}`)
        return writedown1;
    }
    // get writedownyourseedDesText() {
    //     const writedownDes = `new UiSelector().text("This is your seed phrase. You'll be asked to re-enter this phrase (in order) on the next step.").className("android.widget.TextView")`
    //     const writedownDes1 = await $(`android=${writedownDes}`)
    //     return writedownDes1;    
    // }

    get copyseedText() {
        const copyseed = 'new UiSelector().text("Copy Seeds").className("android.widget.TextView")'
        const copyseed1 =  $(`android=${copyseed}`)
        return copyseed1;
    }
    get confirmyourseedText() {
        const confirmyourseed = 'new UiSelector().text("Confirm your seed").className("android.widget.TextView")'
        const confirmyourseed1 =  $(`android=${confirmyourseed}`)
        return confirmyourseed1;
    }
    get selecteachwordText() {
        const selecteach = 'new UiSelector().text("Select each word in the order it was presented to you").className("android.widget.TextView")'
        const selecteach1 =  $(`android=${selecteach}`)
        return selecteach1;
    }
    get congratulationsText() {
        const congratulations = 'new UiSelector().text("Congratulations!").className("android.widget.TextView")'
        const congratulations1 =  $(`android=${congratulations}`)
        return congratulations1;
    }
    // get congratulationDesText() {
    //     const congratulationsdes = 'new UiSelector().text("You've successfully protected your wallet. Remember to keep your seed phrase safe, it's your responsibility!").className("android.widget.TextView")'
    //     const congratulationsdes1 = await $(`android=${congratulationsdes}`)
    //     return congratulationsdes1;
    // }
    
    get tabtorevealText() {
        const tabtoreveal = 'new UiSelector().text("Tap to reveal your seed phrase").className("android.widget.TextView")'
        const tabtoreveal1 =  $(`android=${tabtoreveal}`)
        return tabtoreveal1;
    }
    get makesureText() {
        const makesure = 'new UiSelector().text("Make sure no one is watching your screen.").className("android.widget.TextView")'
        const makesure1 =  $(`android=${makesure}`)
        return makesure1;
    }
    get() {
        const selecteach = 'new UiSelector().text("").className("android.widget.TextView")'
        const selecteach1 =  $(`android=${selecteach}`)
        return;
    }
    get remindMeLaterBtn() {
        return $('~openReminMeLater');
    }
    async clickstartBtn() {
        await (await this.start).waitForDisplayed({ timeout: 60000 });
        await expect(this.secureyourwalletText).toBeDisplayed();
        await expect(this.secureyourwalletDesText).toBeDisplayed();
        await expect(this.remindMeLaterBtn).toBeDisplayed();
        await (await this.start).click();
        await expect(this.secureyourwalletText).toBeDisplayed();
        await expect(this.writedownyourseedonPaperText).toBeDisplayed();
        await expect(this.secureyourwalletAllText).toBeDisplayed();
        await (await this.secureStart).click();
    }

    async eyeIconClick() {
        await expect(this.tabtorevealText).toBeDisplayed();
        await expect(this.makesureText).toBeDisplayed();
        await (await this.eyeIcon).click();
    }

    async continueBtnClick() {
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.writedownyourseedText).toBeDisplayed();
        // await expect(this.writedownyourseedDesText).toBeDisplayed();
        await expect(this.copySeeds).toBeDisplayed();
        await expect(this.copyseedText).toBeDisplayed();
        await (await this.continueBtn).click();
    }

    async confirmSeedContinueBtnClick() {
        await expect(this.backBtn).toBeDisplayed();
        await expect(this.confirmyourseedText).toBeDisplayed();
        await expect(this.selecteachwordText).toBeDisplayed();
        await (await this.confirmSeedContinueBtn).click();

    }
    async clickContinueandFinishBtn() {
        await (await this.correctContinueBtn).waitForDisplayed({ timeout: 30000 });
        await (await this.correctContinueBtn).click();
        await expect(this.congratulationsText).toBeDisplayed();
        //await expect(this.congratulationsDesText).toBeDisplayed();
        await (await this.finishBtn).click();
    }


    async getAllKeyValue() {
        const flash1 = await (await this.flashItem1).getText();
        const flash2 = await (await this.flashItem2).getText();
        const flash3 = await (await this.flashItem3).getText();
        const flash4 = await (await this.flashItem4).getText();
        const flash5 = await (await this.flashItem5).getText();
        const flash6 = await (await this.flashItem6).getText();
        const flash7 = await (await this.flashItem7).getText();
        const flash8 = await (await this.flashItem8).getText();
        const flash9 = await (await this.flashItem9).getText();
        const flash10 = await (await this.flashItem10).getText();
        const flash11 = await (await this.flashItem11).getText();
        const flash12 = await (await this.flashItem12).getText();

        var keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        var values = [flash1, flash2, flash3, flash4, flash5, flash6, flash7, flash8, flash9, flash10, flash11, flash12];
        var pattern = new Map();
        for (var i = 0; i < keys.length; i++) {
            pattern.set(keys[i], values[i]);
        }
        return pattern;
    }

    async checkFlashKeys(pattern) {
        const flash1 = await (await this.flashItemCopy1).getText();
        const flash2 = await (await this.flashItemCopy2).getText();
        const flash3 = await (await this.flashItemCopy3).getText();
        const flash4 = await (await this.flashItemCopy4).getText();
        const flash5 = await (await this.flashItemCopy5).getText();
        const flash6 = await (await this.flashItemCopy6).getText();
        const flash7 = await (await this.flashItemCopy7).getText();
        const flash8 = await (await this.flashItemCopy8).getText();
        const flash9 = await (await this.flashItemCopy9).getText();
        const flash10 = await (await this.flashItemCopy10).getText();
        const flash11 = await (await this.flashItemCopy11).getText();
        const flash12 = await (await this.flashItemCopy12).getText();
        const flashInputKey1 = await (await this.flashInput1).getText();
        const flashInputKey2 = await (await this.flashInput2).getText();
        const flashInputKey3 = await (await this.flashInput3).getText();
        var flashAnswer1 = pattern.get(flashInputKey1);
        flashAnswer1 = flashAnswer1.replace(/[^a-z]+/i, '');
        var flashAnswer2 = pattern.get(flashInputKey2);
        flashAnswer2 = flashAnswer2.replace(/[^a-z]+/i, '');
        var flashAnswer3 = pattern.get(flashInputKey3);
        flashAnswer3 = flashAnswer3.replace(/[^a-z]+/i, '');

        var values = [flash1, flash2, flash3, flash4, flash5, flash6, flash7, flash8, flash9, flash10, flash11, flash12];
        var fa = [];
        for (var value of values) {
            if ((value == flashAnswer1)) {
                fa[0] = values.indexOf(value) + 1;
            }
            if (value == flashAnswer2) {
                fa[1] = values.indexOf(value) + 1;

            }
            if (value == flashAnswer3) {
                fa[2] = values.indexOf(value) + 1;

            }
        }
        for (var value of fa) {
            switch (value) {
                case 1:
                    await this.flashItemCopy1.click();
                    break;
                case 2:
                    await this.flashItemCopy2.click();
                    break;
                case 3:
                    await this.flashItemCopy3.click();
                    break;
                case 4:
                    await this.flashItemCopy4.click();
                    break;
                case 5:
                    await this.flashItemCopy5.click();
                    break;
                case 6:
                    await this.flashItemCopy6.click();
                    break;
                case 7:
                    await this.flashItemCopy7.click();
                    break;
                case 8:
                    await this.flashItemCopy8.click();
                    break;
                case 9:
                    await this.flashItemCopy9.click();
                    break;
                case 10:
                    await this.flashItemCopy10.click();
                    break;
                case 11:
                    await this.flashItemCopy11.click();
                    break;
                case 12:
                    await this.flashItemCopy12.click();
                    break;
                default:
                    console.log("Error");
            }
        }
    }
}


module.exports = new SecureNowPage();



// const Page = require('./page');

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class SecurePage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get flashAlert () {
//         return $('#flash');
//     }
// }

// module.exports = new SecurePage();
