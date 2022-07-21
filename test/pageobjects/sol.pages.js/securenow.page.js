var assert = require('assert');

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




    get flashItemCopy() {
        return $('');
    }


    async clickstartBtn() {
        await (await this.start).waitForDisplayed({ timeout: 120000 });
        await (await this.start).click();
        await (await this.secureStart).click();
    }

    async eyeIconClick() {
        await (await this.eyeIcon).click();

    }

    async continueBtnClick() {
        await (await this.continueBtn).click();
    }

    async confirmSeedContinueBtnClick() {
        await (await this.confirmSeedContinueBtn).click();

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
        
    
        var keys = ['1','2','3','4','5','6','7','8','9','10','11','12'];
        var values = [flash1, flash2, flash3, flash4, flash5, flash6, flash7, flash8, flash9, flash10, flash11, flash12];
        var pattern = new Map();
        for (var i = 0; i < keys.length; i++) {
            pattern.set(keys[i], values[i]);
        }

        // for (var key of pattern.keys()) {
        //     console.log(key + ":" + Map.get(key) + "\t");
        // }
       // var ptn = { 1: "ramesh", 2: "guna" };

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
        flashAnswer1=flashAnswer1.replace(/[^a-z]+/i,'');
        var flashAnswer2 = pattern.get(flashInputKey2);
        flashAnswer2=flashAnswer2.replace(/[^a-z]+/i,'');
        var flashAnswer3 = pattern.get(flashInputKey3);
        flashAnswer3=flashAnswer3.replace(/[^a-z]+/i,'');

        var values = [flash1, flash2, flash3, flash4, flash5, flash6, flash7, flash8, flash9, flash10, flash11, flash12];
        var fa = [];
        for (var value of values) {
            if ((value==flashAnswer1)) {
                fa[0] = values.indexOf(value) + 1;
            }
            if (value==flashAnswer2) {
                fa[1] = values.indexOf(value) + 1;

            }
            if (value==flashAnswer3) {
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
