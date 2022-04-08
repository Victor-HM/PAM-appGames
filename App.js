import { FlatList, StyleSheet, Text, View } from "react-native";
import Cabecalho from "./src/components/cabecalho";
import Botao from "./src/components/botao";
import Jogos from "./src/components/jogos";
import Dados from './src/dados/dadosJogos'

export default function App() {
  return (
    <View>
      <Cabecalho />
      <Botao
        logo="game-controller"
        texto="App"
        cor="#2ecc71"
        logo2="game-controller"
        texto2="Categoria"
        cor2="#8e44ad"
      />
      <Botao
        logo="game-controller"
        texto="jogos"
        cor="#95a5a6"
        logo2="game-controller"
        texto2="jogos 2 !"
        cor2="#1abc9c"
      />
      <Botao
        logo="game-controller"
        texto="jogos"
        cor="#e67e22"
        logo2="game-controller"
        texto2="jogos 2 !"
        cor2="#f1c40f"
      />

      <View>
        <FlatList
          horizontal={true}
          data={Dados}
          keyExtractor={(item) => item.id}
          renderItem = {({ item }) => (
            <Jogos
              titulo={item.nome}
              imagem={item.imagem}
              valor={item.valor}
            />
          )}
        />
      </View>
    </View>
  );
}
