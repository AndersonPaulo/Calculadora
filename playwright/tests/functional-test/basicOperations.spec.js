// @ts-check
import { test, expect } from '@playwright/test'
import { CalculadoraPage } from '../../page/calculadoraPage'
const value = "basic"
test.beforeEach(async ({ page }) =>{

    await page.goto('http://localhost:3000/')
})

test.describe('Operações Basicas' , () =>{
   

    test('Sum', async ({ page }) => {
        
        
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.soma(value)
    })  
    
    test('Subtraction', async ({page}) =>{
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.subtraction(value)  
    
    
    })
    
    test('Division', async ({page}) =>{
    
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.division(value)  
    
    })
    
    test('Multipply', async ({page}) =>{
    
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.multiply(value)  
    
    })
    
    

})
