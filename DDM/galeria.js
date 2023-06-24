import React from 'react';
import { Text, StyleSheet, View, FlatList, Image } from 'react-native';

const list = [
  { id: Math.random().toString(), origem: "internet", url: "https://i.pinimg.com/236x/10/f0/1b/10f01bf6314261f9067cf7255029ee93.jpg" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDA6vDMTKuVtmDsAvPn-pW2vvGireLn_fUnOlmgxcw&s" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQ-umflxIsohgnFMpr5hblCbyg3sx6gCXC5VY89UcZ0SatmbD8zs9jOo341wZgE9JoKQ&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEvzprukB5A5nYhmR4HAyz2GLzsN0Su4qnvPENWFm04u11RaCjFkc6kqmlf2klzCa_34&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcHYHqzOQY1CGKqTpBDVYEHzSS-oEnAIwvCKIqEFMyWgeh_1MWz_DKxFyfX_HTn4zjUU&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMd8Ju9tI4JF8yDjW2ORZHtm_eD9vLSc-ch_zSQMT3KDWd4FLDxVE8aCPg5oxYZIFtVSg&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwruAb3CxgncU8Q3B3l_2yxU4DalTb9x_d-Q&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8tZp9ljUlxAEtHORkQi4hSnE2VLRnxlYeQ&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUtSTRgLxRYTcNyLZguPQ4aiEiOyd2Ifhpg&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0-J4ml6nARcKVDuWuh8BfAOSW6ZsKpoJ4g&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPpi0swo2XupSXTL58SplDprCB7IF-TpHlQ&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzKQDaDcHskTV2F4EkXfBoNVsBI6BsPjDPdA&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1OTTdiTZU-VFcc6_FBH7DE0f4XEDTDQXYQ&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFZQTd-I70iD_bl_eSM2GeN39j54Vji6wIA&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOWXXTU93ClKBqB506jujKmtPj0Ufc3UUyX9uCE6Sm8X-FV0fFeYagwBSMEonW1oYPWg&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lFWkNPojH0sdPcTzPNuuguw2q3A5ariFbq3h6Rk2rWUqW9yZqQDmXprINw1ElQiPvN0&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://i.pinimg.com/236x/10/f0/1b/10f01bf6314261f9067cf7255029ee93.jpg" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDA6vDMTKuVtmDsAvPn-pW2vvGireLn_fUnOlmgxcw&s" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiQ-umflxIsohgnFMpr5hblCbyg3sx6gCXC5VY89UcZ0SatmbD8zs9jOo341wZgE9JoKQ&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCEvzprukB5A5nYhmR4HAyz2GLzsN0Su4qnvPENWFm04u11RaCjFkc6kqmlf2klzCa_34&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwcHYHqzOQY1CGKqTpBDVYEHzSS-oEnAIwvCKIqEFMyWgeh_1MWz_DKxFyfX_HTn4zjUU&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMd8Ju9tI4JF8yDjW2ORZHtm_eD9vLSc-ch_zSQMT3KDWd4FLDxVE8aCPg5oxYZIFtVSg&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwruAb3CxgncU8Q3B3l_2yxU4DalTb9x_d-Q&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-8tZp9ljUlxAEtHORkQi4hSnE2VLRnxlYeQ&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWUtSTRgLxRYTcNyLZguPQ4aiEiOyd2Ifhpg&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ0-J4ml6nARcKVDuWuh8BfAOSW6ZsKpoJ4g&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjPpi0swo2XupSXTL58SplDprCB7IF-TpHlQ&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzKQDaDcHskTV2F4EkXfBoNVsBI6BsPjDPdA&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG1OTTdiTZU-VFcc6_FBH7DE0f4XEDTDQXYQ&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsFZQTd-I70iD_bl_eSM2GeN39j54Vji6wIA&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeOWXXTU93ClKBqB506jujKmtPj0Ufc3UUyX9uCE6Sm8X-FV0fFeYagwBSMEonW1oYPWg&usqp=CAU" },
  { id: Math.random().toString(), origem: "internet", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6lFWkNPojH0sdPcTzPNuuguw2q3A5ariFbq3h6Rk2rWUqW9yZqQDmXprINw1ElQiPvN0&usqp=CAU" }
]

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.top}>
        <Text style={styles.texto}>Galeria</Text>
      </View>

      <View style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          numColumns={4}
          renderItem={({ item }) => (
            <View style={styles.item}>
             <Image style={styles.itemImg} source={{ uri: item.url }} />
            </View>
          )}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50
  },
  top: {
    flex:1,
    backgroundColor: 'lightgrey',
    justifyContent:'center',
    textAlign:'center',
    top:3
  },
   texto: {
    fontSize:18,
    fontWeight: "bold",
    textAlign:'center'
  },
  item: {
    alignItems: 'center',
    padding:1,
    flexGrow:1
  },
  itemImg:{
    width:'100%',
    height: 80
  },
  container: {
    padding: 5,
    flexDirection: 'column',
    textAlign:'center',
    justifyContent:'center',
    flex:9
  }
})
