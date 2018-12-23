<template>
    <div class="duanliang">
        <com-header></com-header>
        <div class="container clearfix">
            <div class="crumbs-nav">
                <van-icon name="location" />
                <a href="/">首页</a>
                <span>></span>
                <span>学无止境</span>
            </div>
           <div class="learn-wrap-box clearfix">
               <ul class="list">
                   <li>Web前端</li>
                   <li>程序人生</li>
                   <li>WEO常见问题</li>
               </ul>
           </div>
            <div class="main-content clearfix">
              <div class="container1">
                    <div class="left">
                        <!-- 文章推荐 -->
                            <ul class="article-list-box clearfix">
                                 <li v-for="(item,index) in newList" :key="index">
                                 <div class="news-img-box">
                                     <a href="#">
                                         <img :src="item.url" alt="">
                                     </a>
                                     <span class="common-label">{{item.rm}}
                                         <span class="triangle"></span>
                                     </span>
                                 </div>
                                 <div class="news-content">
                                     <h3><a href="#">{{item.title}}</a></h3>
                                     <div class="author-info">
                                         <p>
                                             <a href="#">
                                                 <img src="@/assets/images/x.jpg" alt="">
                                                 <p>{{item.zuozhe}}</p>
                                             </a>
                                         </p>
                                         <span class="data-time">发布时间：<em>{{item.time}}</em></span>
                                         <span class="classify">分类：<a href="#">{{item.fl}}</a></span>
                                     </div>
                                     <p class="news-info">{{item.news}}</p>

                                      </div>
                                  </li>
                            </ul>
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
    name:'duanliang',
    data(){
        return{
            newList:[{
                    id:1,
                    url:require('../assets/images/wenz.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-06-05 10:24:00',
                    title:'如何建立个人博客？',
                    fl:'学无止境',
                    news:'想必很多人都想建立一个，属于自己的个人博客，把自己的一些学习的经验和经历，通过互联网的形式来分享给别人。通过分享与网友进行互动，让更多的人了解和认识你，并且树立自己在互联网上的个人品牌，其实这就是一种“自媒体”。那么我们怎么去建立自己独立...',
                    rm:'热'
                },{
                    id:2,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    title:'Javascript设计模式之"观察者模式"',
                    time:'2014-07-05 10:24:00',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'热'
                },{
                    id:3,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-07-05 10:24:00',
                     title:' 一个前端的自我修养（转）',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'新'
                },{
                    id:4,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-07-05 10:24:00',
                     title:' 一个前端的自我修养（转）',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'新'
                },{
                    id:5,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-07-05 10:24:00',
                     title:' 一个前端的自我修养（转）',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'新'
                },{
                    id:6,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-07-05 10:24:00',
                     title:' 一个前端的自我修养（转）',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'新'
                },{
                    id:7,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-07-05 10:24:00',
                     title:' 一个前端的自我修养（转）',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'新'
                },{
                    id:8,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-07-05 10:24:00',
                     title:' 一个前端的自我修养（转）',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'新'
                },{
                    id:9,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-07-05 10:24:00',
                     title:' 一个前端的自我修养（转）',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'新'
                },{
                    id:10,
                    url:require('../assets/images/1-150R30926000-L.jpg'),
                    zuozhe:'晴雪',
                    time:'2014-07-05 10:24:00',
                     title:' 一个前端的自我修养（转）',
                    fl:'WEB前端',
                    news:'前言：最近在看vuejs相关源码的时候发现，有个词语反复的出现在自己的脑海里。那么是哪个神奇的词语呢？就是大家经常听到的“观察者模式" ，对于前端而言用（发布-订阅）模式，来描述它更加亲切。  一、什么是观察者模式？...',
                    rm:'新'
            }],
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
    >.learn-wrap-box{
        margin: 20px 0;
        >.list{
            height: 45px;
            >li{
                width: 185px;
                float: left;
                height: 40px;
                line-height: 40px;
                color: #fff;
                border-radius: 3px;
                margin: 5px 10px 0 45px;
                text-align: center;
                background-color: #868584;
                cursor: pointer;
                color: #fff;
                &:hover{
                    background-color: #2577e3;
                }
            }
        }
    }
    >.main-content{
    margin: 20px 0;
    >.container1{
       height: 100%;
       >.left{
           width: 860px;
           height: 100%;
           float: left;
            >.article-list-box{
                >li{
                    padding: 25px 0;
                    border-bottom: 1px solid #f0f0f0;
                    background-color: #fff;
                    margin-bottom: 20px;
                    display: flex;
                    position: relative;
                    >.news-img-box{
                        flex: 1;
                            padding-left: 10px;
                            height: 137px;
                        >a{
                            display: inline-block;
                            width: 205px;
                            height: 137px;
                            background: #f0f0f0;
                            cursor: pointer!important;
                            >img{
                                width: 205px;
                            }                          
                        }
                        >.common-label{
                                position: absolute;
                                width: 30px;
                                height: 24px;
                                line-height: 24px;
                                text-align: center;
                                color: #fff;
                                background-color: #db4659;
                                top: 30px;
                                left: -10px;
                                z-index: 145;
                                >.triangle{
                                    position: absolute;
                                    top: 24px;
                                    left: -10px;
                                    width: 0;
                                    height: 0;
                                    z-index: 33;
                                    border-left: 10px solid transparent;
                                    border-right: 13px solid #df0d3a;
                                    border-bottom: 9px solid transparent;
                                }
                            }
                    }
                    >.news-content{
                        flex: 5;
                        margin-left: 15px;
                        >h3{
                            >a{
                                display: inline-block;
                                color: #3d3d3d;
                                font-size: 1pc;
                                height: 41px;
                            }
                        }
                        >.author-info{
                             height: 33px;
                             line-height: 33px;
                             color: #919898;
                             font-size: 14px;
                             >p{
                                 float: left;
                                 width: 90px;
                                 height: 33px;
                                 line-height: 33px;
                                 a{
                                     display: inline-block;
                                     height: 33px;
                                     >img{
                                         width: 33px;
                                         height: 33px;
                                         border-radius: 50%;
                                     }
                                     >p{
                                     float: right;
                                      overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    padding-left: 3px;
                                    }
                                 }
                             }
                             >.data-time{
                                 float: left;
                                     display: block;
                                    width: 218px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    padding-right: 5px;
                             }
                             >.classify{
                                     display: block;
                                     float: right;
                                    width: 180px;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                             }
                        }
                        >.new-info{
                                color: #526163;
                                height: 56px;
                                overflow: hidden;
                                font-size: 14px;
                                padding: 8px 9pt 3px 5px;
                        }
                    }
                    &:hover{
                        border-radius: 4px;
                        box-shadow: 1px 3px 9px #ccc;
                        transition: .3s;
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
           //    关注博客
           >.title-h2{
                font-size: 1pc;
                font-weight: 400;
                color: #333;
                padding: 2px 0 2px 10px;
                border-left: 2px solid #3472ef;
                margin: 20px 0 20px 2px;
                height: 25px;
                line-height: 25px;
           }
           >.concern-blog{
                 padding-top: 20px;
                 margin-top: 20px;
                 background-color: #fff;
                 >.list{
                     height: 215px;
                    padding: 2px 20px 10px 30px;
                    >li{
                        line-height: 30px;
                        color: #545454;
                        margin-bottom: 10px;
                        >p{
                            width: 90px;
                            height: 30px;
                            float: left;
                        }
                        >a{ 
                            width: 91px;
                            height: 25px;
                            float: left;
                            display: inline-block;
                            >img{
                                width: 93px;
                                height: 93px;
                            }
                             
                        }
                        .ico-1{
                                 height: 25px;
                                 width: 91px;
                                 top: 5px;
                                 background: url('../assets/images/qq-bg.1215f1b.png') no-repeat;
                                 background-position: -117px 0;
                        }
                        .ico-2{
                                 height: 25px;
                                 width: 91px;
                                 top: 5px;
                                 background: url('../assets/images/qq-bg.1215f1b.png') no-repeat;
                                 background-position: -13pc 0;
                        }
                    }
                 }
           }
            //    点击排名
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
    }
}
}
</style>

