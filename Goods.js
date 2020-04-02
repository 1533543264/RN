import React, { Component } from 'react'
import {
    View, 
    Text, 
    StyleSheet,
    Dimensions,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const {width,scale} = Dimensions.get('window');
const s = width / 640;

export default class TeOne extends Component {
    constructor(){
        super();
        this.state = {
            tits: []
        }
    }
    render() {
        return (
            <View style={{flex: 1,backgroundColor: '#fff'}}>
              <View style={{justifyContent:'center',flexDirection:'row',backgroundColor:"#fff",height:50}} >
                    {/* 文本输入框 */}
                    <View style={{flexDirection:'row',flex: 1}}>
	  <TextInput
			   placeholder={"请输入商品名称" }  
			   placeholderTextColor="#999999"
			    style={{
                width:342.5,
                height:37.5,
                backgroundColor:'#eeeeee',
				borderTopLeftRadius: 4,
				borderBottomLeftRadius: 4,
                paddingLeft:20,
				paddingTop: 0,
				paddingBottom: 0,
				marginTop:5,
				marginLeft:50
      }}></TextInput>
      </View>
	  <View  style={{
                width:60,
                height:37.5,
                backgroundColor:'#eeeeee',
                borderTopRightRadius: 4,
            	borderBottomRightRadius: 4,
                paddingLeft:0,
				paddingTop: 0,
				paddingBottom: 0,
                marginTop:5,
                marginRight:30 ,
                justifyContent:'center'     
      }}>
		  <Image source={require('./3.png')} style={{
        width:60,
        height:37.5
      }}/>
	  </View>
	  </View>		
	  <View  style={{flex:5,flexDirection:'row',justifyContent:"center",fontSize:18,backgroundColor:'#fff',}}>
	  <FlatList numColumns ={5}
  data={[{key: '综合',color:'red'}, {key: '销量',color:'#000'},{key: '新品',color:'#000'},{key: '价格',color:'#000' },{key: '信用',color:'#000'}]}
  renderItem={({item}) => <Text style={{flex:1,
	justifyContent:"center",
	marginTop:14,
	marginLeft:40,
	color:item.color}} >{item.key}</Text>}/>
    </View>
	<FlatList numColumns ={2} style={{marginTop:0,backgroundColor:'#eeeeee',paddingTop:5}}
  data={[{key: 'Oishi/上好佳玉米卷20包膨化休',x:'闲食品Oishi/上好佳',m:require('./4.png')}, 
  		{key: 'Oishi/上好佳玉米卷20包膨化休',x:'闲食品Oishi/上好佳',m:require('./5.png')}, 
  		{key: 'Oishi/上好佳玉米卷20包膨化休',x:'闲食品Oishi/上好佳',m:require('./4.png')}, 
  		{key: 'Oishi/上好佳玉米卷20包膨化休',x:'闲食品Oishi/上好佳',m:require('./5.png')}, 
  		{key: 'Oishi/上好佳玉米卷20包膨化休',x:'闲食品Oishi/上好佳',m:require('./4.png')}, 
  		{key: 'Oishi/上好佳玉米卷20包膨化休',x:'闲食品Oishi/上好佳',m:require('./5.png')}]}
  renderItem={({item}) => <View style={{marginLeft:20,marginTop:10,backgroundColor:'#ffffff'}}><Image source={item.m} style={{marginTop:10,marginLeft:60,marginBottom:20,width:90,height:120,backgroundColor:'#eeeeee'}}/>
  <Text style={{marginLeft:5}}>{item.key}</Text>
  <Text style={{marginLeft:5}}>{item.x}</Text>
  <Text style={{color:"red",marginLeft:5,marginTop:10}}>36.00</Text></View>}/>
            </View>
        )
    }
}