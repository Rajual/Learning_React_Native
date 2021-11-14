import React from 'react'
import { View, Text } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { useCalculator } from '../hooks/useCalculator';
import { styles } from '../themes/appTheme';



export const CalculatorScreens = () => {
   const { smallNumber,
      numero,
      clean,
      positiveNegative,
      operationAdd,
      operationDivide,
      operationMultiply,
      operationSubtract,
      deleteButton,
      numerAseembler,
      calculate } = useCalculator();
   return (
      <View style={styles.calculatorContainer}>
         {(smallNumber !== '0') && <Text style={styles.smallResult}>{smallNumber}</Text>}
         <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
         {/*Button row*/}
         <View style={styles.row}>
            <ButtonCalculator text="C" onPress={clean} />
            <ButtonCalculator text="+/-" onPress={positiveNegative} />
            <ButtonCalculator text="Del" onPress={deleteButton} />
            <ButtonCalculator text="/" color="#FF9427" onPress={operationDivide} />
         </View>
         {/*Button row*/}
         <View style={styles.row}>
            <ButtonCalculator text="7" onPress={numerAseembler} />
            <ButtonCalculator text="8" onPress={numerAseembler} />
            <ButtonCalculator text="9" onPress={numerAseembler} />
            <ButtonCalculator text="X" color="#FF9427" onPress={operationMultiply} />
         </View>
         {/*Button row*/}
         <View style={styles.row}>
            <ButtonCalculator text="5" onPress={numerAseembler} />
            <ButtonCalculator text="5" onPress={numerAseembler} />
            <ButtonCalculator text="6" onPress={numerAseembler} />
            <ButtonCalculator text="-" color="#FF9427" onPress={operationSubtract} />
         </View>
         {/*Button row*/}
         <View style={styles.row}>
            <ButtonCalculator text="1" onPress={numerAseembler} />
            <ButtonCalculator text="2" onPress={numerAseembler} />
            <ButtonCalculator text="3" onPress={numerAseembler} />
            <ButtonCalculator text="+" color="#FF9427" onPress={operationAdd} />
         </View>
         {/*Button row*/}
         <View style={styles.row}>
            <ButtonCalculator text="0" expanded onPress={numerAseembler} />
            <ButtonCalculator text="." onPress={numerAseembler} />
            <ButtonCalculator text="=" color="#FF9427" onPress={calculate} />
         </View>

      </View>
   )
}
