import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

function Landing() {
   return( 
   <View style={styles.container}>
     <Image source={landingImg} style={styles.banner}/>

     <View style={styles.titleContainer}>
     <Text style={styles.title}>
       Seja bem-vindo(a),{'\n'}
       <Text style={styles.titleBold}>O que deseja fazer?</Text>
     </Text>
     </View>

     <View style={styles.buttonsContainer}>
       <TouchableOpacity style={[styles.button, styles.buttonPrimary]}>
         <Image source={studyIcon}/>
         <Text style={styles.buttonText}>Estudar</Text>
       </TouchableOpacity>

       <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
         <Image source={giveClassesIcon}/>
         <Text style={styles.buttonText}>Dar{'\n'}Aulas</Text>
       </TouchableOpacity>
     </View>

     <View style={styles.connectionsContainer}>
      <Text style={styles.totalConnections}>
        Total de 285 {' '} <Image source={heartIcon}/>
      </Text>
    </View>
     
   </View>
   )
}

export default Landing;