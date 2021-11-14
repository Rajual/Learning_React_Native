import React, { useRef, useState } from 'react'

enum MathOperation {
    add, subtract, multiply, divide
}
 
export const useCalculator = () => {


    const [smallNumber, setSmallNumber] = useState('0')
    const [numero, setNumero] = useState('0')

    const lastOperation = useRef<MathOperation>();


    const clean = () => {
        setNumero('0');
        setSmallNumber('0');
    }

    const numerAseembler = (textNumber: string) => {
        //Not acepte double '.'.
        if (numero.includes('.') && (textNumber === '.')) return;
        //Not acepte '00', '000...'
        if ((numero === '0' || numero === '-0') && (textNumber === '0')) return;
        //Not acepte '02' or '0033', etc.
        if (numero === '0' && textNumber !== '0') {
            if (textNumber !== '.') {
                setNumero(textNumber);
                return;
            }
        }
        setNumero(numero + textNumber);
    }

    const positiveNegative = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero)
        }
    }

    const deleteButton = () => {
        if (numero.includes('-')) {
            if (numero.length < 3) {
                setNumero('0');
                return;
            }
        } else {
            if (numero.length < 2) {
                setNumero('0');
                return;
            }
        }
        setNumero(numero.slice(0, -1));
    }

    const savePreviousNumber = () => {
        if (numero.endsWith('.')) {
            setSmallNumber(numero.slice(0, 1));
        } else {
            setSmallNumber(numero);
        }

        setNumero('0');
    }

    const operationDivide = () => {
        savePreviousNumber();
        lastOperation.current = MathOperation.divide;
    }

    const operationMultiply = () => {
        savePreviousNumber();
        lastOperation.current = MathOperation.multiply;
    }

    const operationSubtract = () => {
        savePreviousNumber();
        lastOperation.current = MathOperation.subtract;
    }

    const operationAdd = () => {
        savePreviousNumber();
        lastOperation.current = MathOperation.add;
    }

    const calculate = () => {
        const numerUno = Number(smallNumber);
        const numerTwo = Number(numero);

        switch (lastOperation.current) {
            case MathOperation.add:
                setNumero(`${numerUno + numerTwo}`);
                break;

            case MathOperation.divide:
                setNumero(`${numerUno / numerTwo}`);
                break;


            case MathOperation.multiply:
                setNumero(`${numerUno * numerTwo}`);
                break;
            case MathOperation.subtract:
                setNumero(`${numerUno - numerTwo}`);
                break;
            default:
                break;
        }
        setSmallNumber('0');
    }

    return {
        smallNumber,
        numero,
        clean,
        positiveNegative,
        deleteButton,
        operationDivide,
        numerAseembler,
        operationMultiply,
        operationSubtract,
        operationAdd,
        calculate
    }
}
