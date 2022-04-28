import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function ButtonLogin(){
    return (
        <LinearGradient
            colors={['#000', '#000']}
            style={styles.button}>
            <Text style={styles.text}>Ingresar</Text>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    text: {
      fontSize: 15,
      color: 'white',
      fontWeight: 'bold',
    },
    button: {
        width: '60%',
        height: 50,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });