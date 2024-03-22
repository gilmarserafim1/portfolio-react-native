import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './MainStyles';

export function Main({navigation}: any) {
  return (
    <View style={styles.container}>

        <MaterialCommunityIcons name="face-man-profile" size={200} color="black" />
        <Text style={styles.name}>Gilmar Serafim</Text>

        <View style={styles.buttons}>

            <Pressable
              onPress={ null }
              style={[styles.button, {backgroundColor: '#0A78B5'}]}
              android_ripple={{ color: 'grey' }} >
                <Text style={styles.buttonText}>LinkedIn</Text>
            </Pressable>

            <Pressable
              onPress={ null }
              style={[styles.button, {backgroundColor: '#17171F'}]}
              android_ripple={{ color: 'grey' }} >
                <Text style={styles.buttonText}>GitHub</Text>
            </Pressable>

            <Pressable
              onPress={ null }
              style={[styles.button, {backgroundColor: '#DF4943'}]}
              android_ripple={{ color: 'grey' }} >
                <Text style={styles.buttonText}>Email</Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('skills')}
              style={[styles.button, {backgroundColor: 'yellow'}]}
              android_ripple={{ color: 'grey' }} >
                <Text style={[styles.buttonText, {color: 'black'}]}>Skills</Text>
            </Pressable>

        </View>
    </View>
  );
}