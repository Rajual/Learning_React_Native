import React, { useState } from 'react'
import { View, Text } from 'react-native';
import { ButtonCalculator } from '../components/ButtonCalculator';
import { styles } from '../themes/appTheme';

export const CalculatorScreens = () => {
   
   const [numero, setNumero] = useState('100')
   
   const clean=()=>{
      setNumero('0');
   }

   return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.smallResult}>7,000</Text>
            <Text style={styles.resultado}>{numero}</Text>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="C" onPress={clean}/>
               <ButtonCalculator text="+/-" />
               <ButtonCalculator text="Del" />
               <ButtonCalculator text="/"color="#FF9427"/>
            </View>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="7" />
               <ButtonCalculator text="8" />
               <ButtonCalculator text="9" />
               <ButtonCalculator text="X"color="#FF9427"/>
            </View>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="5" />
               <ButtonCalculator text="5" />
               <ButtonCalculator text="6" />
               <ButtonCalculator text="-"color="#FF9427"/>
            </View>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="1" />
               <ButtonCalculator text="2" />
               <ButtonCalculator text="3" />
               <ButtonCalculator text="+"color="#FF9427"/>
            </View>
            {/*Button row*/}
            <View style={styles.row}>
               <ButtonCalculator text="0" expanded/>
               <ButtonCalculator text="." />
               <ButtonCalculator text="="color="#FF9427"/>
            </View>
            
        </View>
    )
}
