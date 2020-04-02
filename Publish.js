import React, {Component,useEffect} from 'react';
import {View,Button, Text,StatusBar, FlatList, Dimensions ,ScrollView,Image, ToastAndroid ,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
//import Button from 'react-native-button';
import { MessageBarManager } from 'react-native-message-bar';
import {Actions} from 'react-native-router-flux';

/*import { Pagination, Icon } from '@ant-design/react-native';
const locale = {
  prevText: '上一页',
  nextText: '下一页',
};*/

const {width} = Dimensions.get('window');

export default class Publish extends Component {
    constructor(){
        super();
        this.state ={
            data:[],
            page:0
        }
    };
    componentWillMount() {
        this.getTitle();
      }
      storeData =async ()=>{
          await AsyncStorage.setItem('userName','helloworld',
              ()=>{console.log('store success')}
          )
      }
      getData = ()=>{//异步存储  返回Promise
          var s=1
          var randomnumber = parseInt(Math.random()*s);
          this.state.number=randomnumber;
          console.log(this.state.page)
          this.state.page--;
          if(this.state.page<=0){
              this.state.page=-1;
              this.state.page1=1;
          }
          else{
              this.state.page1=this.state.page;
          }
        
          fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+this.state.page)
          .then((res)=>res.json())
          .then(res=>{
              this.isLoading = false;  //数据加载成功后，加载动画取消
              this.posts = res.data.data;
           
              this.setState({
                  data:res.data,
                  posts:res.data.data,
                  x:this.state.number
              })  //拿到数据以后，把数据复制给posts
          })
          .catch(err=>{
              console.log(err);
          })
  
      }
      getTitle = ()=>{
  
          if(this.state.page==-1)this.state.page+=2;
          
          this.state.page++
          this.state.page1=this.state.page;
          fetch('https://cnodejs.org/api/v1/topics?limit=10&page='+this.state.page)
          .then((res)=>res.json())
          .then(res=>{
              this.isLoading = false;  //数据加载成功后，加载动画取消
             
              this.posts = res.data.data;
          
              this.setState({
                  data:res.data,
                  posts:res.data.data,
                  x:Math.random()*res.data
              })  //拿到数据以后，把数据复制给posts
          })
          .catch(err=>{
              console.log(err);
          })
          
      }
      getD = ()=>{
          var s=1
  
          var randomnumber =Math.random()*s;
          console.log(randomnumber)
          this.state.number=randomnumber;
          if(randomnumber>0.5){this.state.tex="待回复"
          console.log(1)
  
          }
          else{this.state.tex="已回复" 
          console.log(0)
          } 
      }
  

    render() {
        
        return (
            <ScrollView style={{backgroundColor:'#f5f5f5'}}>
                <View style={{flex: 1,}}>
                    <StatusBar backgroundColor="red" />
                    
                    <View style={{width:width,height:48,position:'relative',backgroundColor:'#f23030'}}>
                        <TouchableOpacity style={{width:25,height:25,position:'absolute',top:'25%',left:'5%',}}  onPress={()=>Actions.pop()}>
                            <View  >
                                <Image style={{width:25,height:25}} source={require('../../assets/icon/back.png')}/> 
                            </View> 
                        </TouchableOpacity>  
                        <Text style={{color:'white',fontSize:20,position:'absolute',top:'18%',left:'40%'}}>我的发布</Text>
                        
                    </View>
                    
                    
                    
                    <View style={{backgroundColor:"white",width:width,marginTop:'2%'}}>

  {
                        this.state.data.map((item) =>{
                            this.getD();
                            return(
                                <View style={{flex:6,flexDirection:'row',justifyContent:"center",marginTop:15,backgroundColor:"#fff"}}>
                                <Text style={{flex:3,}}>{item.title?(item.title.length>15?item.title.substr(0,15)+"...":item.title):""} </Text>
                                <Text style={{flex:2}}>{item.create_at?(item.create_at.length>15?item.create_at.substr(0,10)+"":item.create_at):""}</Text>   
                                <Text style={{flex:1,color:this.state.number<0.5?'#000':'red'}} >{this.state.tex} </Text>   
                                                     
                            </View>
                            )
                           
                            
                        })

                    }
                  
                            
                            <View style={{flexDirection:'row',marginTop:55,paddingBottom:20}} >
                            <Text title='获取' onPress={this.state.page==-1? ToastAndroid.showWithGravityAndOffset(
              "A wild toast appeared!",
              ToastAndroid.LONG,
              ToastAndroid.TOP,
              25,
              50
            ):this.getData} style={{width:100,height:30,backgroundColor:"red",marginLeft:20,paddingTop:5,paddingLeft:30,color:"#fff",borderRadius:15}}>上一页</Text>
                            <Text  style={{width:100,height:30,backgroundColor:"",marginLeft:50,paddingTop:5,paddingLeft:50,color:""}}>{"第"+this.state.page1+"页"}</Text>
                            <Text title='请求title' onPress={this.getTitle}  style={{width:100,height:30,backgroundColor:"red",marginLeft:60,paddingTop:5,paddingLeft:30,color:"#fff",borderRadius:15}}>下一页</Text>
                            </View>
                            </View>
                        
                    

                   
                </View>
            </ScrollView>
        )
    }
}
