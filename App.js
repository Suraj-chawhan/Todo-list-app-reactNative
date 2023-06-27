import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Pressable,Image,TouchableOpacity,TextInput, Component,ScrollView} from 'react-native';
import Checkbox from 'expo-checkbox';
import React from 'react';
export default function App() {
  
  const[data,setData]=React.useState([])
  
    const [input,setInput]=React.useState('')
 const [val,setVal]=React.useState(true)
 
 const[count,setCount]=React.useState(1)

 function push(){
   setCount(val=>val+1)
   const obj={
     data:input,
     id:count,
     check:false
   }
   
   
   
 setData(val=>[...val,obj])
 setVal(val=>!val)
 setInput('')
 }
 
 
 function changeval(){
   
 setVal(val=>!val)
 if(!val){
 alert("process cancel")
 }
 setInput('')
 }
 
  function changecheck(id){
 setData(val=>{
   return val.map((val2)=>{
     return val2.id===id ?{...val2,check:!val2.check}:val2
 })
 })
  }
  function call(){
  const filter=data.filter(val=>val.check===true)
  
   
  if(data.length===0){
    alert("Please provide data first")
    }
    else if(filter.length===0){
   alert("Please check the list first")
   }
  else{
    setData(val=>{
    const b=val.filter(val2=>val2.check===false)
  return [...b]
    })
    setCount(0)
    alert("Selected list deleted");
    }
    if(!val){
     setVal(val=>!val)
    }
  }
 
  return(
  <ScrollView >
  <View style={styles.container} >
  <Text style={styles.details}>Task Details</Text>
  <Text style={styles.text}>Task Title</Text>
  <Text>NFT Webapp Prototype</Text>
  <Text style={styles.text}>Description</Text>
  <Text>
  Last year was the fantastic year for NFTs,with the
  reaching of $40 billion valuation for the first time
  addition $10 billion worth of NFTs are now sold every week-with NFTs
  </Text>
  <Image
     source={require('./assets/img.jpg')} 
     style={{ width: 100, height: 35,  marginRight: 30}}
   />
 <View style={styles.horizontal}>
 <Text style={styles.text}>Task List</Text>
 <TouchableOpacity  onPress={call} >
 <Image
     source={require('./assets/delete.png')}
     style={{ width: 20, height: 20,  marginRight: 30}}
  />
</TouchableOpacity>
</View>
{data.map(val=>{
return(
<TouchableOpacity onPress={()=>changecheck(val.id)} key={val.id} >
<View style={styles.data} >
<TouchableOpacity onPress={changecheck}>
<Checkbox
 value={val.check}  style={{marginLeft:30, marginTop:10}}
 />
</TouchableOpacity>
<Text style={styles.list}>{val.data}</Text>
</View>
</TouchableOpacity>
)
}
)
  
}




{val?"":<View style={styles.adddata}>
        <TextInput
         value={input}
         onChangeText={(e)=>setInput(e)}
         placeholder={'Enter the list here'}
         style={styles.inputtext}
         />
         <Pressable onPress={push}><Text style={styles.pushbtn}>Save</Text></Pressable></View>}
<Pressable onPress={changeval} style={styles.addtask}><Text>{val?`Add Task a+`:"Cancel"}</Text></Pressable>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  text:{
    display:'flex',
    alignItems:'flex-start',
    color:'purple',
   
  },
  inputtext:{
    
   backgroundColor:'white',
   borderColor:'white',
   marginLeft:150,
   width:150,
   paddingLeft:15,
   color:'black',
   borderRadius:5,
   marginTop:5,
  },
  details:{
    marginTop:100,
    marginLeft:200,
  },
  
  data:{
  flexDirection:'row',
  backgroundColor:'#f9f9fb',
  borderRadius:10,
  width:450,
   height:50,
marginLeft:15,
   gap:70,
   alignItems:'center',
  },
  

  
  adddata:{
    color:'white',
    width:450,
    height:100,
   marginLeft:15,
    backgroundColor:'purple',
    borderRadius:20,
    flexDirection:'column',
    gap:30,
  },
  
  addtask:{
    width:450,
   height:50,
   backgroundColor:'#f9f9fb',
   borderRadius:10,
   marginLeft:15,
   paddingLeft:200,
   paddingTop:15,
   color:'#555555',
  },
  horizontal:{
   flexDirection:'row',
   justifyContent:'space-between',
  },
  
  pushbtn :{
    paddingLeft:20,
  color:'white',
  borderRadius:4,
  backgroundColor:'blue',
  marginLeft:185,
  padding:5,
  fontSize:18,
  width:80,
  fontWeight:'bold',
  marginTop:-15,
  },
  
  container: {
     flexDirection:'column',
     gap:40,
    backgroundColor: '#fff',
    fontSize:50,
  },
  
  
});
