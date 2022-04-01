import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/cabecalho';
import Botao from './src/components/botao';

export default function App() {
  return (
    <View>
      <Cabecalho />
      <Botao logo="game-controller"
             texto="jogos"
             cor="black"
             logo2="game-controller"
             texto2="jogos 2 !"
             cor2="black" />
    </View>
  );
}