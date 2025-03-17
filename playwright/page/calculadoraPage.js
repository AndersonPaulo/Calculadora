export class CalculadoraPage {

    constructor(page,expect){

        this.page               =  page
        this.buttonZero         =  page.locator('[data-qa="0"]')
        this.buttonOne          =  page.locator('[data-qa="1"]')
        this.buttonTwo          =  page.locator('[data-qa="2"]')
        this.buttonThre         =  page.locator('[data-qa="3"]')
        this.buttonFour         =  page.locator('[data-qa="4"]')
        this.buttonFive         =  page.locator('[data-qa="5"]')
        this.buttonSix          =  page.locator('[data-qa="6"]')
        this.buttonSeven        =  page.locator('[data-qa="7"]')
        this.buttonEight        =  page.locator('[data-qa="8"]')
        this.buttonNine         =  page.locator('[data-qa="9"]')
        this.buttonDivision     =  page.locator('[data-qa="/"]')
        this.buttonMultiply     =  page.locator('[data-qa="*"]')
        this.buttonSum          =  page.locator('[data-qa="+"]')
        this.buttonSubtraction  =  page.locator('[data-qa="-"]')
        this.buttonAc           =  page.locator('[data-qa="AC"]')
        this.buttonEqual        =  page.locator('[data-qa="="]')
        this.buttonPoint        =  page.locator('[data-qa="."]')
        this.buttonDisplay      =  expect(page.locator('[data-qa="display"]'))
    }
    async soma(value){        

        if( value === "basic"){
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonSum.click()
            await this.buttonThre.click()
            await this.buttonSeven.click()
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('62')          
        }   
        else if( value === "negative"){
            await this.buttonSubtraction.click()
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonSum.click()
            await this.buttonOne.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('-13')
        }
        else if( value === "zero"){
            await this.buttonZero.click({force: true })
            await this.buttonSum.click()
            await this.buttonOne.click()
            await this.buttonTwo.click({ force: true })
            await this.buttonEqual.click({ force: true })
            await this.buttonDisplay.toContainText('12')
        }    

    }
    async subtraction(value){

        if( value === "basic"){

            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonSubtraction.click()
            await this.buttonOne.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('13')  
        }
        else if( value === "negative"){
            await this.buttonSubtraction.click()
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonSubtraction.click()
            await this.buttonOne.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('-37')
        } 
        else if( value === "zero"){
            await this.buttonThre.click({ force: true })
            await this.buttonTwo.click({ force: true })
            await this.buttonSubtraction.click({ force: true })
            await this.buttonZero.click({ force: true })
            await this.buttonEqual.click({ force: true })
            await this.buttonDisplay.toContainText('32')            
        } 
        
    }
    async division(value){

        if( value === "basic"){

            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonDivision.click()
            await this.buttonFour.click()
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('6.25')  
        }
        else if( value === "negative"){
            await this.buttonSubtraction.click()
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonDivision.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('-12.5')
        } 
        else if( value === "zero"){
            await this.buttonNine.click({ force: true })
            await this.buttonDivision.click({ force: true })
            await this.buttonZero.click({ force: true })
            await this.buttonEqual.click({ force: true })
            await this.buttonDisplay.toContainText('não é possível dividir por zero')            
        } 

    }
    async multiply(value){

        if( value === "basic"){

            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonMultiply.click()
            await this.buttonThre.click()
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('75')  
        }
        else if( value === "negative"){
            await this.buttonSubtraction.click()
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonMultiply.click()
            await this.buttonOne.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('-300')
        }
        else if( value === "zero"){
            await this.buttonZero.click({ force: true })
            await this.buttonMultiply.click({ force: true })
            await this.buttonNine.click({ force: true })
            await this.buttonEqual.click()
            await this.buttonDisplay.toContainText('0')           
        }  
    }

}