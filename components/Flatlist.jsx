import { FlatList, View ,Text, StyleSheet} from "react-native"
import pokemonList from '../Data.json';


const Flatlist = () => {
  return (
    <FlatList
      
       data={pokemonList}
       renderItem={({item})=>{
        return(
          <View key={item.id} style={styles.card}>
            <Text>{item.name}</Text>
            <Text>{item.type}</Text>
          </View>
        )
         
       }}
       style={{padding:10}}
      //  horizontal={true} //to view card  horizontally 
      keyExtractor={(item,index)=>item.id.toString()} //to give unique charector
      ListEmptyComponent={<Text>No items</Text>} //displays when no items found in data
      
      ListHeaderComponent={<Text style={styles.header}>Pokemon list</Text>}
      ListFooterComponent={<Text style={styles.header}>End of list</Text>}
      />
  )
}

export default Flatlist


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5f5f5',
    //   paddingTop:StatusBar.currentHeight
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
    header:{
      textAlign:"center",
      fontWeight:"bold",
      fontSize:19,
      marginBottom:10
    }
  });