import React,{useState,useEffect} from 'react'
import {Text,View,StyleSheet} from 'react-native'
import Axios from 'axios'
import {Button} from 'native-base'
import User from './components/User'

// const key="somerandom"
// const URL=`https://randomuser.me/api/${key}/params`
const App=()=> {
  const [details, setDetails] = useState(null)
  const fetch=async()=>{
    try{
      const {data}=await Axios.get('https://randomuser.me/api/')
      const details=data.results[0]

      setDetails(details)
    }catch(e){
      console.log(e)
    }
  }
  useEffect(()=>{
    fetch()
  },[])
  if(!details){
    return(
      <View style={styles.container}>
        <Text>Loading..</Text>
      </View>
    )
  }
  else{
    return (
    <View style={styles.container}>
      <View>
        <User details={details}/>
        <Button
        rounded
        style={styles.button}
        onPress={()=>fetch()}
        >
          <Text>New user</Text>
        </Button>
      </View>
    </View>
  )
  }
  
}

export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#222831"
  },
  button:{
    marginTop:30,
    paddingHorizontal:30
  }
})