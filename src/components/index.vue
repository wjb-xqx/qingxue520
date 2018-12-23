<template>
    <div class="index">
        <com-header></com-header>
        <!-- 轮播图 -->
        <div class="banner clearfix">
            <div class="container">
                <div class="left">
                    <router-link to="/comSection" tag="ul" class="bigImg">
                        <van-swipe :autoplay="3000"  indicator-color="white">
                            <van-swipe-item v-for="(item,index) in imgList" :key="index">
                                <img :src="item.url" alt="">
                            </van-swipe-item>
                        </van-swipe>
                    </router-link>
                </div>
               <div class="right">
                   <div class="title">
                       毕竟不是作家，写不出那么好的文章。--因为没有丰富阅历和经验！
                       <p>好消息！博客3.0模板现在对外出售啦！
                           <router-link to="/comSection" style="color:#fff">点击查看</router-link>
                       </p>
                   </div>
               </div>
            </div>
        </div>
        <!-- 免费视频在线学习 -->
        <div class="video-module clearfix">
            <div class="container">
                <h2>免费视频在线学习<span>Video Learn</span> </h2>
                <div class="content">
                    <ul>
                        <router-link tag="li" to="/vedioInfo" >
                            <a href="javascript:;">
                                <img src="@/assets/images/jc.jpg" alt="">
                                <h4>
    	      						第五节：常用的CSS样式 - 网页制作视频基础教程
    	      					</h4>
                                  <p>
    	      						本节课主要讲解一些常用的CSS样式
    	      					</p>
                            </a>
                        </router-link>
                        <router-link  tag="li" to="/vedioInfo" >
                            <a href="javascript:;">
                                <img src="@/assets/images/jc.jpg" alt="">
                                <h4>
    	      						第五节：常用的CSS样式 - 网页制作视频基础教程
    	      					</h4>
                                  <p>
    	      						本节课主要讲解一些常用的CSS样式
    	      					</p>
                            </a>
                        </router-link>
                        <router-link tag="li" to="/vedioInfo" >
                            <a href="javascript:;">
                                <img src="@/assets/images/jc.jpg" alt="">
                                <h4>
    	      						第五节：常用的CSS样式 - 网页制作视频基础教程
    	      					</h4>
                                  <p>
    	      						本节课主要讲解一些常用的CSS样式
    	      					</p>
                            </a>
                        </router-link>
                        <router-link tag="li" to="/vedioInfo" >
                            <a href="javascript:;">
                                <img src="@/assets/images/jc.jpg" alt="">
                                <h4>
    	      						第五节：常用的CSS样式 - 网页制作视频基础教程
    	      					</h4>
                                  <p>
    	      						本节课主要讲解一些常用的CSS样式
    	      					</p>
                            </a>
                        </router-link>
                        <router-link tag="li" to="/vedioInfo" >
                            <a href="javascript:;">
                                <img src="@/assets/images/jc.jpg" alt="">
                                <h4>
    	      						第五节：常用的CSS样式 - 网页制作视频基础教程
    	      					</h4>
                                  <p>
    	      						本节课主要讲解一些常用的CSS样式
    	      					</p>
                            </a>
                        </router-link>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 内容 -->
        <div class="main-content clearfix">
            <div class="container">
                <div class="left">
                    <!-- tab栏切换 -->
                    <div class="column-list-box">
                        <van-tabs  swipeable>
                             <van-tab v-for="(item,index) in tabList" :title="item.name" :key="index">
                                 <div class="column-list-content">
                                     <div class="img-list">
                                         <a href="javascript:;">
                                             <img src="@/assets/images/tab1.jpg" alt="">
                                         </a>
                                         <a href="javascript:;">
                                             <img src="@/assets/images/tab2.jpg" alt="">
                                         </a>
                                     </div>
                                     <div class="article-list">
                                         <router-link to="/tabInfo" tag="a" href="javascript:;" v-for="(item,index) in articleList" :key="index"
                                         @mouseenter="changCoent(index)" :class="{hover:changShow==index}">
                                             <h3><span>{{item.id}}</span>{{item.title}}</h3>
                                             <p>
                                                 {{item.content}}
                                             </p>
                                         </router-link>
                                     </div>
                                 </div>
                             </van-tab>
                        </van-tabs>
                    </div>
                    <!-- 文章推荐 -->
                    <h2 class="title-h2">文章推荐</h2>
                    <ul class="article-list-box clearfix">
                        <router-link to="/tabInfo" tag="li" v-for="(item,index) in newList" :key="index">
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
                                            <router-link tag="p" to="/user">{{item.zuozhe}}</router-link tag="p" to="/user">
                                        </a>
                                    </p>
                                    <span class="data-time">发布时间：<em>{{item.time}}</em></span>
                                    <span class="classify">分类：<a href="#">{{item.fl}}</a></span>
                                </div>
                                <p class="news-info">{{item.news}}</p>

                            </div>
                        </router-link>
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
                        <li><router-link tag="a" to="/user">关于我</router-link></li>
                        <li><router-link tag="a" to="/video">视频教程</router-link></li>
                        <li><router-link tag="a" to="/">SEO优化</router-link></li>
                        <li><router-link tag="a" to="/message">留言版</router-link></li>
                    </ul>
                     <!-- 关注博客 -->
                    <h2 class="title-h2">关注博客</h2>
                    <div class="concern-blog clearfix">
                        <ul class="list">
                            <li class="clearfix">
                                <p>联系段亮:</p>
                                <a href="#"  title="联系段亮" class="bg-icon ico-1"></a>
                            </li>
                            <li class="clearfix">
                                <p>加入群聊：</p>
                                <a href="#"  title="段亮Web前端、SEO优化交流群" class="bg-icon ico-2"></a>
                            </li>
                            <li class="clearfix">
                                <p>微信公众号：</p>
                                <a href="#" class="bg-icon ico-3">
                                    <img src="@/assets/images/weixin.png" alt="">
                                </a>
                            </li>
                        </ul>
                    </div>
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
                     <!-- 最新评价-->
                    <div class="news-guestbook clearfix">
                        <h2>最新评价</h2>
                        <ul class="guestbook-content ">
                            <li class="clearfix" v-for="(item,index) in guestbook" :key="index">
                                <div class="user-imf">
                                    <img :src="item.url" alt="">
                                </div>
                                <div class="comments-text-box">
                                    <h3>{{item.uer}}</h3>
                                    <p>{{item.text}}</p>
                                    <p>{{item.time}}</p>
                                </div>
                            </li>
                        </ul>
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
    name:"index",
    data(){
        return{
            imgList:[{
                     id:'001',
                     url:require('../assets/images/banner1.jpeg')
                 },{
                     id:'002',
                     url:require('../assets/images/banner2.jpeg')
                 },{
                     id:'003',
                     url:require('../assets/images/banner3.jpeg')
                 },{
                     id:'004',
                     url:require('../assets/images/banner4.jpeg')
                 },{
                     id:'005',
                     url:require('../assets/images/banner5.jpeg')
            }],
            tabList:[{
                id:'001',
                name:'建站必知'
                },{
                    id:'002',
                    name:'SEO优化'
                },{
                    id:'003',
                    name:'WEB前端'
                },{
                    id:'004',
                    name:'DEDE CMS'
            }],
            articleList:[{
                     id: 1,
                     title:'什么是404错误页面？',
                     content:'什么是404错误页面： 告诉浏览者其所请求的页面不存在或链接错误，同时引导用户使用网站其他页面而不是关闭窗口离开。 产生404错误页面原因： 1.网页URL生成规则改变。 2.网页文件更名或移动位置。 3.导入链接拼写错误。 注：以上3个为常见原因，从而导致原'
                },{
                    id: 2,
                    title:'关键词排名的三个时期',
                    content:'相信有很多seoer们都想让自己的目标关键词，快速进入百度排名，可是很苦恼的是，优化了很久排名也不见很大的效果。 一句话说的好：“方法不对，努力白费”。如果你的优化方法不对，在怎么去优化，也是在做无用功。只有知道自己的网站关键词处在哪个时期，我'
                },{
                    id: 3,
                    title:'新手须知：域名该如何选择',
                    content:'建立网站之前，域名的选取是必不可少的，网站的域名和人的名字是一样的，一旦确定了就不能再次更改了。因此我们一定要选择好域名，那么究竟应该如何选择域名呢？《百度搜索引擎优化指南》中提到：域名是用户对网站的第一印象，能否让用户迅速记住域名对网站发'
                },{
                    id: 4,
                    title:'聊聊我们说的网站优化',
                    content:'前言：网站打开的快慢，在一定程度上影响着用户的流失率。据不完全统计网站打开时间超过3s，就有将近40%的用户会选择关闭。因此，加载速度也成为了，搜索引擎排序中的一项因素。让我们一起看看有哪些优化点是我们值得关注的！'
                },{
                    id: 5,
                    title:'什么是网站权重',
                    content:'网站权重：是指搜索引擎给网站（包括网页）赋予一定的权威值，对网站（包括网页）权威的评估评价（也就是网站与网站在搜索引擎眼中的分级制待遇的不同表现，还有一个想法就是综合搜索引擎算法中所有有利因素所带来的数值效果被搜索引擎所认可）。一个网站权重'
            }],
            changShow:0,
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
    methods:{
        changCoent(index){
            this.changShow=index
        }
    },
    components:{
        comHeader,
        comFooter
    }
}
</script>

<style lang="less" scoped>
.banner{
    margin-top: 100px;
    >.container{
        display: flex;
        height: 330px;
        >.left{
            flex: 2;
            height: 100%;
            >.bigImg{
                width: 630px;
                height: 330px;
                float: left;
                img{
                    width: 100%;
                    height: 100%;
                }
                /deep/.van-swipe{
                     width: 630px;
                     height: 330px;
                }
               
            }
        }
        >.right{
            flex: 1;
            height: 272px;
            margin-top: 15px;
            position: relative;
            background: url('../assets/images/say-bg.3808a5f.jpg') no-repeat;
            >.title{
                width: 230px;
                 height: 90pt;
                 position: absolute;
                 right: 20px;
                 bottom: 50px;
                 color: #f7b0b0;
                 line-height: 25px;
                 font-size: 1pc;
                 font-family: \\5B8B\4F53;
                 font-weight: 500;
            }
        }
    }
    
}
// <!-- 免费视频在线学习 -->
.video-module{
   .container{
       margin-top: 20px;
        >h2{
            width: 235px;
            height: 30px;
            line-height: 30px;
            padding-left: 5px;
            font-size: 1pc;
            color: #fff;
            font-weight: 500;
            background: #4b5153;
            box-shadow: 5px 3px 10px #756f71;
            border-radius: 3px;
            margin: 0 0 10px 3px;
            text-align: center;
            >span{
                color: #32c7f7;
                font-size: 14px;
                padding-left: 10px;
             }
        }
        >.content{
            height: 281px;
            >ul{
                height: 100%;
                >li{
                    float: left;
                    width: 220px;
                    height: 100%;
                    border-radius: 3px;
                    border-bottom: 1px solid #e0dbdb;
                    margin-right: 24px;
                    background: #fff;
                    box-shadow: 0 1px 1px #ccc;
                    &:hover{
                        box-shadow: 0 3px 10px #999;
                    }
                    &:last-child{
                        margin-right: 0;
                    }
                    a{
                        display: inline-block;
                        width: 100%;
                        height: 100%;
                        >img{
                              height: 145px;
                              width: 100%;
                        }
                        >h4{
                             padding: 5px 10px 0;
                             line-height: 22px;
                             min-height: 46px;
                             overflow: hidden;
                             text-overflow: ellipsis;
                             display: -webkit-box;
                             -webkit-line-clamp: 2;
                             -webkit-box-orient: vertical;
                             font-size: 1pc;
                             font-weight: 500;
                             color: #000;
                             text-align: center;
                         }
                         >p{
                                 height: 56px;
                                padding: 6px 10px 4px;
                                font-size: 14px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 3;
                                -webkit-box-orient: vertical;
                         }
                    }
                }
            }
        }
   }
}
.main-content{
    margin: 20px 0;
    >.container{
       height: 100%;
       >.left{
           width: 860px;
           height: 100%;
           float: left;
             // tab栏切换
            >.column-list-box{
                height: 255px;
                background-color: #fff;
                padding: 10px;
                /deep/.van-tabs__line{
                    background-color: #333;
                }
                /deep/.van-tab{
                    flex: none;
                }
                /deep/.van-ellipsis{
                    width: 120px;
                }
                .column-list-content{
                    display: flex;
                    width: 840px;
                    height: 188px;
                    >.img-list{
                        width: 200px;
                        height: 182px;
                        background-color: pink;
                        >a{
                            display: inline-block;
                            width: 200px;
                            height: 86px;
                            
                            >img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                    >.article-list{
                        width: 619px;
                        height: 188px;
                        flex: 1;
                        padding-left: 20px;
                        >a{
                            display: block;
                            margin-bottom: 10px;
                            >h3{
                                font-size: 14px;
                                color: #333;
                                margin-left: 5px;
                                font-weight: 400;
                                font-size: 14px;
                                 color: #333;
                                 height: 20px;
                                 >span{
                                    display: inline-block;
                                    width: 20px;
                                    height: 20px;
                                    line-height: 20px;
                                    background: #9a9a9a;
                                    color: #fff;
                                    text-align: center;
                                    font-size: 14px;
                                    border-radius: 2px;
                                 }
                            }
                            >p{
                                font-size: 13px;
                                height: 38px;
                                margin-top: 5px;
                                display: -webkit-box;
                                -webkit-box-orient: vertical;
                                -webkit-line-clamp: 2;
                                overflow: hidden;
                                display: none;
                            }
                        }
                        .hover{
                                p{
                                    display: block;
                                }
                                span{
                                    background-color: #333;
                                }
                            }
                    }
                }
            }
            // 文章推荐
            .title-h2{
                font-size: 1pc;
                font-weight: 400;
                color: #333;
                padding: 2px 0 2px 10px;
                border-left: 2px solid #3472ef;
                margin: 20px 0 20px 2px;
                height: 25px;
                line-height: 25px;
            }
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
</style>

