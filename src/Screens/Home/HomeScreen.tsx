import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { Context } from '../../Context/Index';
import Product from './Components/Product';

export const HomeScreen = () => {

  const { products, getProducts } = useContext(Context)

  
  useEffect(() => {
    
       getProducts()

  },[])



  console.log('products => ', products);
  

  
  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>

      {products.map((product, index) =>(
        <Product product={product} key={index} />
      ))}


    </SafeAreaView>
  )
}