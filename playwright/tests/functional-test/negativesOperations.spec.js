// @ts-check
import { test, expect } from '@playwright/test'
import { CalculadoraPage } from '../../page/calculadoraPage'
const value = "negative"

test.beforeEach(async ({ page }) =>{

    await page.goto('http://localhost:3000/')
})

test.describe('Operações con negativos',()=>{
    test('Adição', async ({ page }) => {
       
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.soma(value)
       
    })
    
    test('Subtração', async ({page}) =>{
       
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.subtraction(value)    
    
    })
    
    test('Divisão', async ({page}) =>{
       
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.division(value)
    
    })
    
    test('multiplicação', async ({page}) =>{
    
      
        const PageCalc = new CalculadoraPage(page,expect)
        await PageCalc.multiply(value)

    
    })
    
    

})
