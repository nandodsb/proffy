import React from 'react';
import { View, Image, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';


import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png'
import giveClassesIcon from '../../assets/images/icons/give-classes.png'
import heartIcon from '../../assets/images/icons/heart.png'

import styles from './styles';

function Landing() {

  const navigation = useNavigation();

  function handleNavigateToGiveClassesPage() {
    navigation.navigate('GiveClasses');
  }

  function handleNavigateToStudyPages() {
    navigation.navigate('Study');
  }


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
       <RectButton onPress={handleNavigateToStudyPages} style={[styles.button, styles.buttonPrimary]}>
         <Image source={studyIcon}/>
         <Text style={styles.buttonText}>Estudar</Text>
       </RectButton>

       <RectButton onPress={handleNavigateToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
         <Image source={giveClassesIcon}/>
         <Text style={styles.buttonText}>Dar{'\n'}Aulas</Text>
       </RectButton>
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