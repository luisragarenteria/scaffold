import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ProductProp } from '../../../Interfaces/product'
import { useNavigation } from '@react-navigation/native'

interface Prop {
    product: ProductProp
}

export default function Product({ product }:Prop) {
  const {navigate}  = useNavigation()
  return (
    <View key={product.id} style={{
      marginTop:5,
      borderWidth:1
    }}>
      <Text>{ product.id }</Text>
      <Text>{ product.name }</Text>
      <Text>{ product.description }</Text>
      <TouchableOpacity onPress={() => navigate('ProductDetail')}>
        <Text>
            Ver mas
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})