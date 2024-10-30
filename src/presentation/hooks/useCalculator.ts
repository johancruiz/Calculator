import { useState } from "react"


const useCalculator = () => {

    const [number, setNumber] = useState('0')

    const buildNumber = ( numberString: string ) => {
        

        if (number.includes('.') && numberString === '.') return;

        if (number.startsWith('0') || number.startsWith('-0') ) {

          // Punto decimal
          if (numberString === '.') {
            return setNumber(number + numberString);
          }

          // Evaluar si es otro cero y no hay punto
          if (numberString === '0' && numberString.includes('.')) {
            return setNumber(number + numberString);
          }

          // Evaluar si es diferente de cero, no hay punto dcimal y es el primer nùmero
          if (numberString !== '0' && !number.includes('.')) {
            return setNumber(numberString)
          }
          // Evitar 00000000
          if (numberString === '0' && !number.includes('.')) {
            return;
          }

          return setNumber( number + numberString )
        }

        setNumber( number + numberString )


        

    }

    const clean = () => {
      setNumber('0')
    }

    const deleteOperation = () => {
      if (number.includes('')) {
        return setNumber('0')
      }
      setNumber(number.substring(0, number.length -1))

    }

    const toggleSign = () => {
      if (number.includes('-')) {
        return setNumber( number.replace('-', '') )
      }

      setNumber( '-' + number )
    }


  return {
    number,
    buildNumber,
    toggleSign,
    clean,
    deleteOperation
  }
}

export default useCalculator
