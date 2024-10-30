import React from 'react'
import { View, Text, Pressable } from 'react-native';
import CalculatorButton from '../components/CalculatorButton';
import { colors, globalStyles } from '../../config/theme/app-theme';
import useCalculator from '../hooks/useCalculator';


const CalculatorScreen = () => {

  const {number, buildNumber, toggleSign, clean, deleteOperation} = useCalculator()

  return (
    <View style={ globalStyles.calculatorContainer } >
        <View style={{ paddingHorizontal: 30, paddingBottom: 20  }}  >
            <Text
            adjustsFontSizeToFit
            numberOfLines={1}
            style={ globalStyles.mainResult } >{number}</Text>
            <Text style={ globalStyles.subResult }  >15</Text>
        </View>

        <View style={ globalStyles.row} >
           <CalculatorButton onPress={clean}blackText label='C' color={colors.lightGray} />
           <CalculatorButton onPress={toggleSign}blackText label='+/-' color={colors.lightGray} />
           <CalculatorButton onPress={deleteOperation}blackText label='del' color={colors.lightGray}/>
           <CalculatorButton onPress={() => buildNumber('')}label='/' color={ colors.orange } />
        </View>

        <View style={ globalStyles.row} >
           <CalculatorButton onPress={() => buildNumber('7')}label='7' />
           <CalculatorButton onPress={() => buildNumber('8')}label='8' />
           <CalculatorButton onPress={() => buildNumber('9')}label='9' />
           <CalculatorButton onPress={() => buildNumber('')}label='X' color={ colors.orange } />
        </View>

        <View style={ globalStyles.row} >
            <CalculatorButton onPress={() => buildNumber('4')}label='4' />
           <CalculatorButton onPress={() => buildNumber('5')}label='5' />
           <CalculatorButton onPress={() => buildNumber('6')}label='6' />
           <CalculatorButton onPress={() => buildNumber('')}label='-' color={ colors.orange } />
        </View>
        <View style={ globalStyles.row} >
            <CalculatorButton onPress={() => buildNumber('1')}label='1' />
           <CalculatorButton onPress={() => buildNumber('2')}label='2' />
           <CalculatorButton onPress={() => buildNumber('3')}label='3' />
           <CalculatorButton onPress={() => buildNumber('')}label='+' color={ colors.orange } />
        </View>

        <View style={ globalStyles.row} >
            <CalculatorButton onPress={() => buildNumber('0')}label='0' doubleSize={ true } />
           <CalculatorButton onPress={() => buildNumber('.')}label='.' />
           <CalculatorButton onPress={() => buildNumber('')}label='=' color={ colors.orange } />
        </View>
    </View>

    
    
  )
}

export default CalculatorScreen
