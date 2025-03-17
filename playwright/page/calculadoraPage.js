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
        this.Display            =  expect(page.locator('[data-qa="display"]'))
        this.DisplayTow         =  page.locator('[data-qa="display"]')
    }
    async soma(value){        

        if( value === "basic"){
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonSum.click()
            await this.buttonThre.click()
            await this.buttonSeven.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('62')          
        }   
        else if( value === "negative"){
            await this.buttonSubtraction.click()
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonSum.click()
            await this.buttonOne.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('-13')
        }
        else if( value === "zero"){
            await this.buttonZero.click()
            await this.buttonSum.click()
            await this.buttonOne.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('12')
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
            await this.Display.toContainText('13')  
        }
        else if( value === "negative"){
            await this.buttonSubtraction.click()
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonSubtraction.click()
            await this.buttonOne.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('-37')
        } 
        else {
            await this.buttonThre.click()
            await this.buttonTwo.click()
            await this.buttonSubtraction.click()
            await this.buttonZero.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('32')            
        } 
        
    }
    async division(value){

        if( value === "basic"){

            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonDivision.click()
            await this.buttonFour.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('6.25')  
        }
        else if( value === "negative"){
            await this.buttonSubtraction.click()
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonDivision.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('-12.5')
        } 
        else if( value === "zero"){
            await this.buttonNine.click()
            await this.buttonDivision.click()
            await this.buttonZero.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('não é possível dividir por zero')            
        } 

    }
    async multiply(value){

        if( value === "basic"){

            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonMultiply.click()
            await this.buttonThre.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('75')  
        }
        else if( value === "negative"){
            await this.buttonSubtraction.click()
            await this.buttonTwo.click()
            await this.buttonFive.click()
            await this.buttonMultiply.click()
            await this.buttonOne.click()
            await this.buttonTwo.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('-300')
        }
        else if( value === "zero"){
            await this.buttonZero.click()
            await this.buttonMultiply.click()
            await this.buttonNine.click()
            await this.buttonEqual.click()
            await this.Display.toContainText('0')           
        }  
    }
    async operationsButton(){
        await this.buttonSum.click()
        await this.Display.toContainText('0+')
        await this.buttonAc.click()
        await this.buttonSubtraction.click()
        await this.Display.toContainText('0-')
        await this.buttonAc.click()
        await this.buttonDivision.click()
        await this.Display.toContainText('0/')
        await this.buttonAc.click()
        await this.buttonMultiply.click()
        await this.Display.toContainText('0*')
        await this.buttonAc.click()
        await this.buttonPoint.click()
        await this.Display.toContainText('.')
        await this.buttonAc.click()

    }
    async numbersButton(){

        await this.buttonOne.click()
        await this.buttonTwo.click()
        await this.buttonThre.click()
        await this.buttonFour.click()
        await this.buttonFive.click()
        await this.buttonSix.click()
        await this.buttonSeven.click()
        await this.buttonEight.click()
        await this.buttonNine.click()
        await this.buttonZero.click()
        await this.Display.toContainText('1234567890') 
    }
    async cleanButton(){

        await this.buttonOne.click()
        await this.buttonTwo.click()
        await this.buttonThre.click()
        await this.buttonFour.click()
        await this.buttonFive.click()
        await this.buttonSix.click()
        await this.Display.toContainText('123456')
        await this.buttonAc.click()
        await this.Display.toContainText('0')
        
    }
    async maxDigitoButton(expect){

        await this.buttonOne.click()
        await this.buttonTwo.click()
        await this.buttonThre.click()
        await this.buttonFour.click()
        await this.buttonFive.click()
        await this.buttonSix.click()
        await this.buttonSeven.click()
        await this.buttonEight.click()
        await this.buttonNine.click()
        await this.buttonZero.click()
        await this.buttonSeven.click()
        await this.buttonEight.click()
        
        const displayText = await this.DisplayTow.textContent() 

        const digitCount = displayText.replace(/\D/g, '').length;

        console.log(`Número de dígitos no display: ${digitCount}`);

        expect(digitCount).toBeLessThanOrEqual(10)
        
    }
}