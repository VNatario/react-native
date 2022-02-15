import React, { useState, useEffect } from 'react';
import { 
    View,
    Text,
    StyleSheet,
    TextInput,
    Platform,   
    FlatList,
 } from "react-native";

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){

    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState([]);
    const [greeting, setGreeting] = useState('');

    function handleNewAddNewSkill(){
        setMySkills(oldState => [...oldState, newSkill]);
    }

   useEffect(() => {
       const currentHour = new Date().getHours()
       
       if(currentHour < 12 ){
           setGreeting('Good morning')
       }
       else if(currentHour >= 12 && currentHour < 18 ){
           setGreeting('Good Afternoon')
       }
       else {
           setGreeting('Good Night')
       }
    }, [mySkills])

    return(
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome, Natario
            </Text>

            <Text style={styles.greetings}>
                {greeting}
            </Text>

            <TextInput
                style={styles.input}
                placeholder='New Skill'
                placeholderTextColor='#555'
                onChangeText={setNewSkill}
            />
            
            <Button onPress={handleNewAddNewSkill}/>

            <Text style={[styles.title, {marginVertical: 50}]}>
                My Skills
            </Text>


            <FlatList 
                data={mySkills}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <SkillCard skill={item}/>
                )}
            />

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
    greetings:{
        color: '#fff'
    }    
})