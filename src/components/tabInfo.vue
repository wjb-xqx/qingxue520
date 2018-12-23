<template>
    <div class="duanliang">
        <com-header></com-header>
        <div class="container clearfix">
            <div class="main-content clearfix">
                  <div class="container1 clearfix">
                        <div class="left">
                            <h1>什么是404错误页面？</h1>   
                            <div class="content">
                                <p>告诉浏览者其所请求的页面不存在或链接错误，同时引导用户使用网站其他页面而不是关
                                    闭窗口离开。<br/> &nbsp;&nbsp;&nbsp;&nbsp;产生404错误页面原因：
                                    <br/> &nbsp;&nbsp;&nbsp;&nbsp;1.网页URL生成规则改变。
                                    <br/> &nbsp;&nbsp;&nbsp;&nbsp;2.网页文件更名或移动位置。
                                    <br/> &nbsp;&nbsp;&nbsp;&nbsp;3.产生404错误页面原因：
                                    <br/> &nbsp;&nbsp;&nbsp;&nbsp;4.导入链接拼写错误。
                                    <br/>    注：以上3个为常见原因，从而导致原来的URL地址无法访问；当Web 服务器接到类似请求时，会返回一个404 状态码，告诉浏览器要请求的资源并不存在。
                               
                                    <p>域名：一般会选择比较正规点的域名商购买，比如：万网、西部数码...（一年也才几十块钱）。考虑到我们的域名是要续费的，如果说你买的域是那种不正规的域名商，哪天域名商倒闭了，那么我的域名就不能使用了。还有一点值得注意的是:域名的选择最好“见名知意”越短越好。一般会用自己的名字来命名。比如：段亮个人博客：www.duanliang920.com

空间：分为国内空间和国外空间。

1、国内空间：需要备案网站才能上线，但是速度比国外空间要快一点，并且也稳定。

2、国外空间：指（除大陆外的空间）则不需要备案，可以直接使用。

一般我们对空间的选择有两点：第一、稳定性，第二、性价比。在这里我推荐大家可以去阿里云上去买服务器（因为现在对于新用户优惠大，价格便宜，服务稳定），想当年买个一年的服务器最便宜也要将近600块，现在都可以买二年了。

备注： 一个服务器可以放多个网站，至于数量多少在于你选的服务器配置有关系。（比如：cpu、内存...）</p>
                               
                                </p>

                            </div>                     
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
             width: 850px;
             background-color: #fff;
             float: left;
             padding: 20px;
             >h1{
                 font-size: 20px;
                font-weight: 500;
                color: #0088db;
                text-align: center;
                padding: 10px 0;
             }
             >.content{
                 color: #1a1919;
                line-height: 28px;
                font-size: 1pc;
                padding: 10px 0;
                overflow-x: hidden;
                >p{
                    text-indent: 2em;
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

