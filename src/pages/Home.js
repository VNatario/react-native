import React, { useState } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,
    TouchableOpacity,
 } from "react-native";
import { Button } from '../components/Button';

export function Home(){

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);

    function handleNewAddNewSkill(){
        setMySkills(oldState => [...oldState, newSkill]);
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Natario
            </Text>

            <TextInput
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />
            
            <Button/>

            <Text style={[styles.title, {marginVertical: 50}]}>
                My Skills
            </Text>

            {
                mySkills.map(skill => (
                    <TouchableOpacity key={skill} style={styles.buttonSkill}>
                        <Text style={styles.textSkill}>
                            {skill}
                        </Text>
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input:{
        backgroundColor: '#1f1e25',
        color: '#fff',
        fontSize: 16,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 8
    },
    buttonSkill:{
        backgroundColor: '#1f1e25',
        padding: 16,
        borderRadius: 50,
        alignItems: 'center',
        marginVertical: 10,

    },
    textSkill:{
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
})