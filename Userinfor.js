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
  Animated,
  AsyncStorage,
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Swiper from 'react-native-swiper';

import ImagePicker from 'react-native-image-picker';
const options = {
    title: '照相机',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};

const styles = StyleSheet.create({
    boxs:{
        backgroundColor:'#fff',
        flexDirection:'column',
        marginTop:8,
        justifyContent:'center',
    },
})

export default class Doc extends Component{
    constructor(){
        super();
        this.state = {
            imageUrl:'',
            t:'0'
        }
    }
    
    componentDidMount(){
        AsyncStorage.getItem('photo').then((res)=>{
            if(res){
                this.setState({imageUrl:{uri:res}})
            }
            else{
                this.setState({imageUrl:''})
            }
        });
        AsyncStorage.getItem('t').then((res)=>{
            if(res === '1'){
                this.setState({t:res})
            }else{
                this.setState({t:'0'})
            }
        })
    }
    
    takephoto = ()=>{
        ImagePicker.showImagePicker(options, (response) => {
            
            if (response.didCancel) {
              return;
            } else if (response.error) {
              console.log('Error:', response.error);
            } else if (response.customButton) {
              console.log('custom:', response.customButton);
            } else {
                //const source = { uri: response.uri };
                this.setState({
                    imageUrl: { uri: response.uri },
                    t:'1'
                });
                
                AsyncStorage.setItem('photo',this.state.imageUrl.uri);
                AsyncStorage.setItem('t','1');
                
            }
          });
    }
    out=()=>{
        AsyncStorage.removeItem('user')
            .then(() => {
                Actions.login();
            });
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{justifyContent:'center',flexDirection:'column',backgroundColor:"red",height:100,width:480}}>
                <View 
                    style={{justifyContent:'center',
                    flexDirection:'row',
                    backgroundColor:"#fff",
                    width:80,height:80,
                    borderRadius:40,
                    marginLeft:200
                   }} >
                    <TouchableOpacity  onPress={()=>{this.takephoto()}}>
                    <Image
                    style={{width:80,height:80,borderRadius:40,}}
                    source={this.state.imageUrl}
                    />
                    </TouchableOpacity>
                           
                      
                  
                       
                    </View>
                    <Text style={{color:"#fff",marginLeft:190}}>BINNU DHILLON</Text>
                </View>
                <View  style={{justifyContent:'center',flexDirection:'row',width:480}}>
                  <Image source={require('./14.png')} style={{width:480}}/>
                 
                </View>
                <View style={{flexDirection:'row',backgroundColor:"#fff",width:480,paddingBottom:10}}>
                <Image source={require('./15.png')} style={{width:30,height:30}}/>
                <Text style={{marginTop:8,marginLeft:10,fontSize:12}}>我的个人中心</Text>
                </View>
                <View style={{justifyContent:'center',
                backgroundColor:"#fff",
                width:480,height:250,
                marginTop:1
                }}>
                    <FlatList  numColumns ={3} 
                        data={[{key:'账户管理',m:require('./16.png'),z:-3,d:0}, 
  		                        {key: '收货地址',m:require('./17.png'),z:0,d:0}, 
  		                        {key: '我的信息',m:require('./18.png'),z:-1,d:0}, 
                                {key: '我的订单',m:require('./19.png'),z:-3,d:0},
                                {key: '我的二维码',m:require('./20.png'),z:7,d:0}, 
                                {key: '我的积分',m:require('./21.png'),z:0,d:0},
                                {key: '我的收藏',m:require('./22.png'),z:-190,d:-188} ]}
                        renderItem={({item}) => 
                 <View  style={{justifyContent:'center',flexDirection:'row',flex:3}}>
                         <View style={styles.boxs}>
                         <Image source={item.m} style={{marginTop:15,marginLeft:20+item.z,width:20,height:20,marginBottom:8,}}/>
                         <Text style={{marginTop:0,marginLeft:item.d}}>{item.key}</Text>
                        </View>
                    </View>}/>
                </View>
                <View style={{flexDirection:'row',backgroundColor:"#fff",width:480,paddingBottom:10,marginTop:5}}>
                <Image source={require('./23.png')} style={{width:25,height:25,marginTop:7}}/>
                <Text style={{marginTop:8,marginLeft:10,fontSize:12}}>E族活动</Text>
                </View>
                <View style={{justifyContent:'center',
                backgroundColor:"#fff",
                height:180,width:480,
                marginTop:1
                }}>
                     <FlatList  numColumns ={3} 
                        data={[{key:'居家维修保养',m:require('./24.png'),z:12,d:0}, 
  		                        {key: '出行接送',m:require('./25.png'),z:0,d:0}, 
  		                        {key: '我的受赠人',m:require('./26.png'),z:5,d:0}, 
                                {key: '',m:require('./27.png'),z:-15,d:0},
                                {key: '',m:require('./28.png'),z:-15,d:0}, 
                                {key: '   ',m:require('./29.png'),z:-20,d:1},
                                 ]}
                        renderItem={({item}) => 
                 <View  style={{justifyContent:'center',flexDirection:'row',flex:3}}>
                         <View style={styles.boxs}>
                         <Image source={item.m} style={{marginTop:15,marginLeft:20+item.z,width:20,height:20,marginBottom:8,}}/>
                         <Text style={{marginTop:0,marginLeft:item.d}}>{item.key}</Text>
                        </View>
                    </View>}/>
                    <View style={{marginLeft:0,marginTop:0,justifyContent:'center',flexDirection:'row'}}>
                    <Text style={{marginLeft:-10,marginTop:-50}}>我的住宿优惠</Text>
                    <Text style={{marginLeft:90,marginTop:-50}}>我的活动</Text>
                    
 <TouchableOpacity onPress={()=>Actions.publish() } style={{marginLeft:100,marginTop:-50}} >
                        <Text >我的发布</Text>
                    </TouchableOpacity>

                                 
                        </View>
                </View>
                <View style={{justifyContent:'center',
                flex:1,
              width:480, 
                marginTop:1
                }}>
                    <View style={{justifyContent:'center',flexDirection:'row',}}>
                    
 <TouchableOpacity  onPress={this.out}>
                        <Text style={{fontSize:15,color:'#black'}}>退出登录</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
