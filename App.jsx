/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import pokemonList from './Data.json';
import Flatlist from './components/Flatlist';
import Section from './components/Section';
import data from "./groupedData.json"

// function Section(children, title) {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

function App() {
  return (
    <View style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
        {pokemonList.map(pokemon => (
          <View key={pokemon.id} style={styles.card}>
            <Text>{pokemon.name}</Text>
            <Text>{pokemon.type}</Text>
          </View>
        ))}
      </ScrollView> */}


      {/* <Flatlist/> */}


      <SectionList
      
      sections={data}
      renderItem={({item})=>{
        return(
          <View >

            <Text style={styles.card}>{item}</Text>
          </View>
        )
      }}
      renderSectionHeader={({section:{type}})=>{
        <Text style={styles.sectionHeader}>{type}</Text>
      }}
      
      />
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:StatusBar.currentHeight
  },
  scrollView:{
    paddingHorizontal:20
  },
  card:{
    backgroundColor:"white",
    padding:15,
    borderRadius:5,
    borderWidth:1,
    marginBottom:18
  },
  sectionHeader:{
    // textAlign:"center",
    // fontWeight:"bold",
    fontSize:19,
    // marginBottom:10
    color:"black",
    backgroundColor:"red",
    fontWeight:"bold"
  }
});

export default App;
