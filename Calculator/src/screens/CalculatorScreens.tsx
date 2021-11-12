import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { styles } from '../themes/appTheme';

export const CalculatorScreens = () => {
   
   const [smallNumber, setSmallNumber] = useState('0')
   const [numero, setNumero] = useState('0')
   
   const clean=()=>{
      setNumero('0');
   }

   const numerAseembler=(textNumber:string)=>{
setNumero(numero+textNumber);
   }

   return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>{smallNumber}</Text>
            <Text style={styles.resultado} numberOfLines={1} adjustsFontSizeToFit>{numero}</Text>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="C" onPress={clean}/>
               <ButtonCalculator text="+/-" onPress={clean}/>
               <ButtonCalculator text="Del" onPress={clean}/>
               <ButtonCalculator text="/"color="#FF9427" onPress={clean}/>
            </View>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="7" onPress={numerAseembler}/>
               <ButtonCalculator text="8" onPress={numerAseembler}/>
               <ButtonCalculator text="9" onPress={numerAseembler}/>
               <ButtonCalculator text="X"color="#FF9427" onPress={clean}/>
            </View>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="5" onPress={numerAseembler}/>
               <ButtonCalculator text="5" onPress={numerAseembler}/>
               <ButtonCalculator text="6" onPress={numerAseembler}/>
               <ButtonCalculator text="-"color="#FF9427" onPress={clean}/>
            </View>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="1" onPress={numerAseembler}/>
               <ButtonCalculator text="2" onPress={numerAseembler}/>
               <ButtonCalculator text="3" onPress={numerAseembler}/>
               <ButtonCalculator text="+"color="#FF9427" onPress={clean}/>
            </View>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="0" expanded onPress={numerAseembler}/>
               <ButtonCalculator text="." onPress={numerAseembler}/>
               <ButtonCalculator text="="color="#FF9427" onPress={clean}/>
            </View>
            
        </View>
    )
}
