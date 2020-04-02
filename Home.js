import React,{Component} from 'react';
import {
	SafeAreaView,
	StyleSheet,
	View,//相当于div
	Text,
	Image,
	TextInput,
	Button,
	ScrollView,
	ImageBackground,
	StatusBar,
	Dimensions,
	PixelRatio,
	BackHandler,
  ToastAndroid,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';
const styles = StyleSheet.create({

    img: {
        height: 200,
        width:480,
    },
    swiper:{
        height: 200
    
    },
    boxs:{
        backgroundColor:'#fff',
        flexDirection:'row',
        marginTop:8
    },
    button:{
        backgroundColor:'red',
        color:"#000",
        justifyContent:'center',
        flexDirection:'row',
        padding: 10,
        width:380,
        alignItems:'center',
        marginLeft:50,
        marginTop:30,
        borderRadius:6,
        height:44
    }

})

export default class FirstOne extends Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    render(){
        return(
            <View style={{flex:1}}>
                		<View style={{justifyContent:'center',flexDirection:'row',backgroundColor:"#f23030",height:60}} >
                    {/* 文本输入框 */}
                    <View  style={{
           
                backgroundColor:'#fbb8b8',
                height:35,
                borderTopLeftRadius: 20,
				borderBottomLeftRadius: 20,
                width:50,
				paddingTop: 0,
				paddingBottom: 0,
				marginTop:15,      
      }}>
		  <Image source={require('./7.png')} style={{
        width:30,
        height:30,
        marginLeft:15,
        marginTop:5
      }}/>
	  </View>
      <TextInput
			   placeholder={"请输入您要搜索的关键字" }  
			   placeholderTextColor="#ffffff"
			    style={{
                width:342.5,
                height:35,
                backgroundColor:'#fbb8b8',
				
                borderTopRightRadius: 20,
                borderBottomRightRadius: 20,
                paddingLeft:10,
				paddingTop: 0,
				paddingBottom: 0,
				marginTop:15,
				marginLeft:0
      }}></TextInput>
                  <View  style={{
           width:50,
           paddingTop: 0,
           paddingBottom: 0,
           marginTop:15,      
 }}>
     <Image source={require('./8.png')} style={{
        width:30,
        height:30,
   marginLeft:15,
   marginTop:5
      }}/>
 </View>
	  </View>	
      <View style={{justifyContent:'center',flexDirection:'row',}} >
            <Swiper
            style={styles.swiper}
            height={200}
            horizontal={true}
            paginationStyle={{top:135,flex:3,padding:50}}
            autoplay={true}
            activeDotColor='red'
            autoplayTimeout={3}
            showsButtons={false}>
            <Image source={require('./4.png')} style={styles.img}/>
            <Image source={require('./5.png')} style={styles.img}/>
            <Image source={require('./6.png')} style={styles.img}/>
            </Swiper>
            </View>
            <View>
            <FlatList  style={{}}
  data={[{key:'居家维修保养  ',m:require('./9.png'),z:15}, 
  		{key: '住宿优惠      ',m:require('./10.png'),z:0}, 
  		{key: '出行接送      ',m:require('./11.png'),z:0}, 
  		{key: 'E族活动       ',m:require('./12.png'),z:0}]}
        renderItem={({item}) => 
        <View style={styles.boxs}>
            <Image source={item.m} style={{marginTop:5,marginLeft:20,width:70,height:70,marginBottom:5}}/>
  <Text style={{marginLeft:20,marginTop:30}}>{item.key}</Text>
   <Image source={require('./13.png')} style={{marginLeft:260-item.z,marginTop:29}}/>
</View>}/>
</View>
 <View style={styles.button}>
    <TouchableOpacity ><Text style={{color:"#fff"}}>发布需求</Text></TouchableOpacity>
 </View>
 <Text style={{color:"#767676",fontSize:10,marginTop:50,marginLeft:200}}>©E族之家 版权所有</Text>
            </View>
        )
    }
}