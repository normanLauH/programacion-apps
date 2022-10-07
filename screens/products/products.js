import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../config/firebase'
import { firestore } from '../../config/firebase'


const ProductsView = (props) => {
  const [products, setProducts] = useState('');

  firestore
    .collection('Productos')
    .get()
    .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
        console.log('Product ID: ', documentSnapshot.id, documentSnapshot.data());
    });
  });


  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }

  return(
    <View style={styles.container}>
      <Button title='Agregar Producto' onPress={ () => props.navigation.navigate('ProductsAdd') } />

      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: '16',
  },
})

export default ProductsView;
