// @ts-check
import { test, expect } from '@playwright/test'
import { CalculadoraPage } from '../../page/calculadoraPage'
const value = "zero"

test.beforeEach(async ({ page }) =>{

    await page.goto('http://localhost:3000/')
})

test.describe('Operações com Zero', ()=>{

    test('Adição', async ({ page }) => {
        
        const PageCalc = new CalculadoraPage(page,expect)
        PageCalc.soma(value)
       
    })
    
    test('Subtração', async ({page}) =>{
    
        const PageCalc = new CalculadoraPage(page,expect)
        PageCalc.subtraction(value)
    
    
    })
    
    test('Divisão', async ({page}) =>{
       
        const PageCalc = new CalculadoraPage(page,expect)
        PageCalc.division(value)
    
    })
    
    test('multiplicação', async ({page}) =>{
    
       
        const PageCalc = new CalculadoraPage(page,expect)
        PageCalc.multiply(value)
    
    })
    
    


})
