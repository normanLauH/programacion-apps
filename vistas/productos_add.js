import React, { useState } from "react";
import { View, StyleSheet, ScrollView, TextInput, Button } from 'react-native';

const ProductosAdd = (props) => {
    const [state, setState] = useState({
        nombre: "",
        descripción: "",
        precio: "",
    });
    
    const changeText = (key, value) => {
        setState({ ...state, [key]:value });
    }
    
    const Agregar = () => {
        console.log(state);
    }
    
    return(
       <ScrollView style={styles.container}>
           <View style={styles.continer}>
            <TextInput placeholder='Nombre del producto' style={styles.input} onChangeText={(value) => changeText('nombre', value)}/>
           </View>
           <View style={styles.continer}>
            <TextInput placeholder='Descripción del producto' style={styles.input} onChangeText={(value) => changeText('descripcion', value)}/>
           </View>
           <View style={styles.continer}>
            <TextInput placeholder='Precio del producto' style={styles.input} onChangeText={(value) => changeText('precio', value)}/>
           </View>
           <View style={styles.viewButton}>
               <Button title='Agregar Producto' color='#779000' backgroundColor='#ffffff' onPress={ () => Agregar() }/>
           </View>
           <View style={styles.viewButton}>
               <Button title='Regresar' style={styles.button} color='#ff7f7f' onPress={ () => props.navigation.navigate('productos') }/>
           </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
        backgroundCOloer: '#bcbcbc',
    },
    view: {
        flex: 1,
        padding: 10,
    },
    viewButton: {
        flex: 1,
        padding: 5,
    },
    input: {
        flex: 1,
        backgroundColor: '#fff2cc',
        paddingHorizontal: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 5,
        height: 40
    }
})

export default ProductosAdd;
