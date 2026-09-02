import { StatusBar } from 'expo-status-bar';
import { Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { styles } from './components/Style';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {
  return (
    <View style={styles.principal}>
      <Image
        source={require('./assets/cruzeiro_do_sul.png')}
        style={styles.localImage}
      />

      <View style={styles.cards}>
        <TouchableOpacity style={styles.card1}>
          <Ionicons name='phone-portrait-outline' style={styles.icons} size={32} color="white"></Ionicons>
          <Text style={styles.textobotaocard}>Carteirinha Digital</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card2}>
          <Ionicons name='qr-code-outline' style={styles.icons} size={32} color="white"></Ionicons>
          <Text style={styles.textobotaocard}>QRCode [Acesso]</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card3}>
          <Ionicons name='card-outline' style={styles.icons} size={32} color="white"></Ionicons>
          <Text style={styles.textobotaocard}>Carteirinha Fisica</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card4}>
          <Ionicons name='gift-outline' style={styles.icons} size={32} color="white"></Ionicons>
          <Text style={styles.textobotaocard}>Ofertas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card5}>
          <Ionicons name='person-outline' style={styles.icons} size={32} color="white"></Ionicons>
          <Text style={styles.textobotaocard}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card6}>
          <Ionicons name='camera-outline' style={styles.icons} size={32} color="white"></Ionicons>
          <Text style={styles.textobotaocard}>Minha Foto</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card7}>
          <Ionicons name='notifications-outline' style={styles.icons} size={32} color="white"></Ionicons>
          <Text style={styles.textobotaocard}>Notificações</Text>
        </TouchableOpacity>
      </View>

    </View>

  );
}