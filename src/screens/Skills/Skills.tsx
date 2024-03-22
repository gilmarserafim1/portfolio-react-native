import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './SkillsStyles';

export function Skills({navigation}: any) {
  return (
    <View style={styles.container}>
        
        <MaterialCommunityIcons name="face-man-profile" size={100} color="black" />
        <Text style={styles.title}>Minhas Habilidades</Text>

        <View style={styles.habilities}>

            <View style={styles.hability}>
                <Text style={styles.habilityText}>HTML:</Text>
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
            </View>

            <View style={styles.hability}>
                <Text style={styles.habilityText}>CSS:</Text>
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
            </View>

            <View style={styles.hability}>
                <Text style={styles.habilityText}>Javascript:</Text>
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
            </View>

            <View style={styles.hability}>
                <Text style={styles.habilityText}>React Native:</Text>
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
                <MaterialCommunityIcons name="star-box" size={40} color="yellow" />
            </View>

        </View>

    </View>
  );
}