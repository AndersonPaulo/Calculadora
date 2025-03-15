import React, { Component } from "react"
import './Calculator.css'
import Button from '../components/Button'
import Display from "../components/Display"

const initialState = {
    displayValue:'0',
    clearDisplay:false,
    operation:null,
    values:[0,0],
    current:0
}
export default class Calculator extends Component{

    state = { ...initialState }
    clearMemory(){
        this.setState({ ...initialState })
    }
    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({
                displayValue: this.state.displayValue + operation  ,  // Mostra a expressão no display
                operation,
                current: 1,
                clearDisplay: true,
            });
        } else {
            const equals = operation === "=";
            const currentOperation = this.state.operation;
    
            const values = [...this.state.values];
            try {
                if (currentOperation) {
                    // eslint-disable-next-line 
                    values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
                    if (isNaN(values[0]) || !isFinite(values[0])) {
                        this.clearMemory();
                        return;
                    }
                }
            } catch (e) {
                values[0] = this.state.values[0];
            }
    
            values[1] = 0; // Resetando o segundo valor após o cálculo
    
            this.setState({
                displayValue: equals ? `${values[0]}` : `${values[0]} ${operation}`, // Mostra a expressão antes do cálculo
                operation: equals ? null : operation,
                current: equals ? 0 : 1,
                clearDisplay: true,
                values,
            });
        }
    }
    addDigit(n){
        if (n === '.' && this.state.displayValue.includes('.')){
            return
        }
        const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
        const currentValue = clearDisplay ? '': this.state.displayValue
        const displayValue = currentValue + n
        this.setState({displayValue,clearDisplay:false})

        if (n !== '.'){
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({values})
        }
    }

    render(){
        const clearMemory =clear=> this.clearMemory(clear)
        const addDigit = n => this.addDigit(n)
        const setOperation = op => this.setOperation(op)
        return(
            <div className="calculator">
                    <Display value={this.state.displayValue}/>
                    <Button data-qa="AC" label="AC" click ={clearMemory} triple/>
                    <Button data-qa="/" label="/" click ={setOperation} operation/>
                    <Button data-qa="7" label="7"click ={addDigit}/>
                    <Button data-qa="8" label="8"click ={addDigit}/>
                    <Button data-qa="9" label="9"click ={addDigit}/>
                    <Button data-qa="*" label="*"click ={setOperation} operation/>
                    <Button data-qa="4" label="4"click ={addDigit}/>
                    <Button data-qa="5" label="5"click ={addDigit}/>
                    <Button data-qa="6" label="6"click ={addDigit}/>
                    <Button data-qa="-" label="-"click ={setOperation} operation/>
                    <Button data-qa="1" label="1"click ={addDigit}/>
                    <Button data-qa="2" label="2"click ={addDigit}/>
                    <Button data-qa="3" label="3"click ={addDigit}/>
                    <Button data-qa="+" label="+"click ={setOperation} operation/>
                    <Button data-qa="0" label="0"click ={addDigit} double/>
                    <Button data-qa="." label="."click ={addDigit}/>
                    <Button data-qa="=" label="="click ={setOperation} operation/>



            </div>
        )
        }
}