import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.principal}>
      <Text style={styles.text}>OVERVIEW</Text>

      <TouchableOpacity style={styles.botao1}>
        <Text style={styles.textobotao1}>RECENT ACTIVITY</Text>
      </TouchableOpacity>

       <TouchableOpacity style={styles.botao2}>
        <Text style={styles.textobotao2}>REPORTS</Text>
      </TouchableOpacity>

      <View style={styles.cards}>
        <TouchableOpacity style={styles.card1}>
          <Text style={styles.textobotaocard1}>TRANSFER</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.textobotao}>REQUEST</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.textobotao}>EXCHANGE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card4}>
          <Text style={styles.textobotaocard4}>CREDIT</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.textobotao}>SECURITY</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card6}>
          <Text style={styles.textobotaocard6}>MORE</Text>
        </TouchableOpacity>
      </View>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  quadrado: {
    width:50,
    height: 50,
    backgroundColor: '#1fc936be',
    color: '#fff',
    margin: 4,
    borderWidth: 2, 
    borderColor: '#f00d0d'
  },
  txt: {
    color: '#fff'
  },
  botao: {
    borderWidth: 4,
    backgroundColor: '#f00d0d',
    borderColor: '#000',  
  },
  text:{
    marginTop: 30,
    fontSize: 20,
    fontFamily: 'Artifakt Element Heavy',
    color: '#2f9cc7'
  },
  principal:{
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#eeeded'
  },
  botao1: {
    width: 250,
    height: 30,
    margin: 15,
    backgroundColor: '#11a0cc',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#11a0cc',
  },
  botao2: {
    width: 250,
    height: 30,
    margin: 15,
    backgroundColor: '#fff',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#fff',
  },
  textobotao1:{
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Artifakt Element Heavy',
  },
  textobotao2:{
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Artifakt Element Heavy',
  },
  cards: {
    marginTop: 35,
    flexDirection: 'row',      
    flexWrap: 'wrap',     
    justifyContent: 'center',  
    width: 320,             
  },
  card: {
    width: 100,                 
    height: 100,
    backgroundColor: '#ffffff',
    borderColor: '#ffffff',
    borderWidth: 4,
    borderRadius: 10,
    margin: 8,                  
    justifyContent: 'center',   
    alignItems: 'center',
  },
  card1: {
    width: 100,                 
    height: 100,
    backgroundColor: '#292828',
    borderColor: '#292828',
    borderWidth: 4,
    borderRadius: 10,
    margin: 8,                  
    justifyContent: 'center',   
    alignItems: 'center',
  },
  card4: {
    width: 100,                 
    height: 100,
    backgroundColor: '#10a5eb',
    borderColor: '#10a5eb',
    borderWidth: 4,
    borderRadius: 10,
    margin: 8,                  
    justifyContent: 'center',   
    alignItems: 'center',
  },
  card6: {
    width: 100,                 
    height: 100,
    backgroundColor: '#eeeded',
    borderColor: '#d6d6d6',
    borderWidth: 4,
    borderRadius: 10,
    margin: 8,                  
    justifyContent: 'center',   
    alignItems: 'center',
  },
  textobotao:{
    fontWeight: 'bold',
    fontFamily: 'Artifakt Element Heavy',
  },
  textobotaocard1: {
     fontWeight: 'bold',
     fontFamily: 'Artifakt Element Heavy',
     color: '#fff'
  },
  textobotaocard4: {
     fontWeight: 'bold',
     fontFamily: 'Artifakt Element Heavy',
  },
   textobotaocard6: {
     fontWeight: 'bold',
     fontFamily: 'Artifakt Element Heavy',
     color: '#d6d6d6',
  }
});
