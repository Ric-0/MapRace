import * as React from 'react';
import { StyleSheet, View, Text, Image, Pressable } from 'react-native';

export default function app() {
  return (
    <View style={[styles.container, { flex: 1 }]}>
        <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://i0.wp.com/www.3wallpapers.fr/wp-content/uploads/2021/07/iPhone-wallpapers-canada-lake-house-scaled.jpg?ssl=1',
            }}
          />
          
        <Pressable style={styles.button}>
          <Text style={styles.texte1}>Race Map</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Parcourez  <Text style={{color: 'red'}}>votre ville</Text> d'une nouvelle façon, pour les plus et moins <Text style={{color: 'red'}}>sportifs</Text> d'entre nous</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Allez sur la carte et trouvez des <Text style={{color: 'red'}}>points de départs</Text> pour vous divertir</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Profitez de la course, et pour les plus joueurs d entre vous vous pouvez <Text style={{color: 'red'}}>consulter un classement de la course</Text> !</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
  },
  texte1: {
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'yellow',
    textDecorationLine:'underline',
  },
  tinyLogo: {
    position:'absolute',
    width: '100%',
    height: '100%',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 60,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    width: '100%'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
    textShadowColor:'black',
    textAlign:'center',
  },
});
