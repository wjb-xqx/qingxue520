<template>
    <div class="duanliang">
        <com-header></com-header>
        <div class="container clearfix">
            <div class="main-content clearfix">
                  <div class="container1 clearfix">
                        <div class="left">
                           <h3>第八节：CSS定位 - 网页制作视频基础教程</h3>  
                           <img src="@/assets/images/jc.jpg" alt="">                           
                        </div>
                         <div class="right">
                             <!-- 搜索 -->
                             <div class="search-wrap">
                                 <input type="text" name="" id="" placeholder="请输入你需要的内容">
                                 <van-icon name="search" />
                             </div>
                              <!-- 分类 -->
                             <ul class="side-nav clearfix">
                                 <li><a href="#">关于我</a></li>
                                 <li><a href="#">视频教程</a></li>
                                 <li><a href="#">SEO优化</a></li>
                                 <li><a href="#">留言版</a></li>
                             </ul>
                             <!-- 点击排名 -->
                             <div class="hot-recommend-wrap">
                                <h2>点击排行</h2>
                                <ul>
                                    <li v-for="(item,index) in recommendList" :key="index">
                                        <span>{{item.id}}</span>
                                        <a href="#">{{item.title}}</a>
                                    </li>
                                 </ul>
                             </div>
                       </div>
                 </div>
            </div>    
        </div>
        <com-footer></com-footer>
    </div>
</template>

<script>
import comHeader from './comHeader'
import comFooter from './comFooter'
export default {
    name:'diary',
    data(){
        return{
            recommendList:[{
                     id:1,
                     title:'浅谈：html5和html的区别'
                 },{
                     id:2,
                     title:'如何建立个人博客？'
                 },{
                     id:3,
                     title:'HTML5移动端手机网站开发流程'
                 },{
                     id:4,
                     title:'dedecms5.7安装百度(ueditor)编辑器的方法'
                 },{
                     id:5,
                     title:'关于响应式布局'
                 },{
                     id:6,
                     title:'一个网站的开发流程'
            }],
             // 最新评价
            guestbook:[{
                    id:1,
                    url:require('../assets/images/tx.jpg'),
                    uer:'1107******@qq.com',
                    text:'我爱你',
                    time:'2天前'
                },{
                    id:2,
                    url:require('../assets/images/tx.jpg'),
                    uer:'354******@qq.com',
                    text:'我爱你',
                    time:'2天前'
                },{
                    id:3,
                    url:require('../assets/images/tx.jpg'),
                    uer:'✨筱胜会努力的👊',
                    text:'我爱你',
                    time:'2天前'
                },{
                    id:4,
                    url:require('../assets/images/tx.jpg'),
                    uer:'1107******@qq.com',
                    text:'本人路过此地，有幸看到这个该博客，留个脚印吧',
                    time:'2天前'
                },{
                    id:5,
                    url:require('../assets/images/tx.jpg'),
                    uer:'1107******@qq.com',
                    text:'本人路过此地，有幸看到这个该博客，留个脚印吧',
                    time:'2天前'
            }]
        }
    },
    components:{
        comHeader,
        comFooter
    }
}
</script>

<style lang="less" scoped>
.container{
    padding-top: 90px;
    >.crumbs-nav{
        height: 35px;
        margin-top: 15px;
        /deep/.van-icon-location{
            font-size: 22px;
            margin-right: 5px;
        }
        >a{
            color: #565b63;
        }
        >span{
            padding: 0 2px;
            font-size: 15px;       
        }
        >h1{
            display: inline-block;
            font-size: 15px;
            color: #565b63;
            font-weight: 400;
        }
    }
   >.main-content{
    margin: 20px 0;
        >.container1{
           height: 100%;
           padding: 10px;
           >.left{
               width: 860px;
               height: 100%;
               float: left;
               background-color: #fff;
               >h3{
                   font-size: 20px;
                    font-weight: 500;
                    color: #0088db;
                    text-align: center;
                    padding: 10px 0;
               }
               >img{
                   width: 850px;
                   height: 500px;
               }
              .h{
                  display: flex;
                  >.comment-header-box{
                      >.img{
                            width: 65px;
                            >img{
                                width: 60px;
                                height: 64px;
                            }
                        }
                        >.comments-textarea{
                              flex: 1;
                              width: 89%;
                              height: 152px;
                              position: relative;
                              border: 1px solid #ccc;
                              border-radius: 5px;
                              >.textarea{
                                  width: 97%;
                                  margin: 10px 1.5% 0;
                                  height: 95px;
                                  font-size: 14px;
                                  border-radius: 5px;
                                  border: none;
                                  color: #333;
                                  resize: none;
                                  overflow: auto;
                              }
                        }
                    }
              }
               //  最新评价
           >.news-guestbook{
               background-color: #fff;
               margin-top: 20px;
               >h2{
                   font-size: 1pc;
                   font-weight: 400;
                   color: #333;
                   padding: 2px 0 2px 10px;
                   border-left: 2px solid #3472ef;
                   margin: 20px 0 20px 2px;
                   height: 25px;
                   line-height: 25px;
               }
               >ul{
                   height: 403px;
                   padding: 0 10px;
                   >li{
                       border-top: 1px solid #ccc;
                       padding-bottom: 3px;
                       padding-top: 10px;
                       >.user-imf{
                           width: 50px;
                           margin-right: 10px;
                           float: left;
                           >img{
                               width: 50px;
                               height: 50px;
                           }
                       }
                       >.comments-text-box{
                           width: 75%;
                           float: right;
                           >h3{
                                font-size: 14px;
                                color: #d32;
                                font-weight: 600;
                           }
                           >p{
                             max-height: 60px;
                             overflow: hidden;
                             text-overflow: ellipsis;
                             display: -webkit-box;
                             -webkit-line-clamp: 2;
                             -webkit-box-orient: vertical;
                           }
                       }
                   }
               }
           }
           }
           >.right{
             width: 290px;
             height: 100%;
             float: right;
              //    搜索
             >.search-wrap{
                background-color: #fff;
                padding: 20px 0;
                margin-bottom: 20px;
                position: relative;
                >input{
                     display: block;
                    width: 200px;
                    margin: 0 auto;
                    height: 30px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    color: #556566;
                    padding: 0 35px 0 20px;
                }
                /deep/.van-icon-search{
                    position: absolute;
                    top: 25px;
                    right: 50px;
                    cursor: pointer;
                    z-index: 33;
                    font-size: 20px;
                }
             }
               //    分类
             >.side-nav{
                padding: 20px 0 13px;
                background-color: #fff;
                >li{
                    float: left;
                    width: 110px;
                    height: 50px;
                    line-height: 50px;
                    margin: 0 10px 15px;
                    text-align: center;
                    border-radius: 5px;
                    font-size: 1pc;
                    font-weight: 500;
                    &:hover{
                        >a{
                            background: hsla(0,0%,100%,.2);
                            transform: rotate(360deg);
                        }
                    }
                    >a{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        color:#fff;
                        transition: all 1s;
                    }
                    &:nth-child(1){
                        background-color: #666;
                    }
                    &:nth-child(2){
                        background-color: #0cc;
                    }
                    &:nth-child(3){
                        background-color: #c96;
                    }
                    &:nth-child(4){
                        background-color: #63c;
                    }
                }
             }
              >.hot-recommend-wrap{
                margin-top: 20px;
                background-color: #fff;
                >h2{
                    font-size: 1pc;
                    font-weight: 400;
                    color: #333;
                    padding: 2px 0 2px 10px;
                    border-left: 2px solid #3472ef;
                    margin: 20px 0 20px 2px;
                    height: 25px;
                    line-height: 25px;
                }
                >ul{
                   height: 100%;
                    >li{
                        height: 35px;
                        line-height: 35px;
                        width: 3in;
                        list-style: none;
                        border-bottom: 1px solid #cecece;
                        >span{
                            display: block;
                            float: left;
                            width: 20px;
                            height: 20px;
                            line-height: 20px;
                            text-align: center;
                            border-radius: 4px;
                            margin: 8px 5px 0;
                            color: #fff;
                            background-color: #979598;
                            
                        }
                        >a{
                            float: left;
                            width: 255px;
                            display: block;
                            color: #545151;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            &:hover{
                                color: #181616;
                            }
                        }
                        &:nth-child(1){
                           >span{
                                background-color: #ff858e;
                           }
                        }
                        &:nth-child(2){
                            >span{
                                background-color: #77d549;;
                           }
                        }
                        &:nth-child(3){
                            >span{
                                 background-color: #62c1ff;
                           }
                        }
                    }
                }
           }
           }
        }
   }     
    
}
</style>

