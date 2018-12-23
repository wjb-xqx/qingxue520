<template>
    <div class="duanliang">
        <com-header></com-header>
        <div class="container clearfix">
            <div class="crumbs-nav">
                <van-icon name="location" />
                <a href="/">首页</a>
                <span>></span>
                <span>关于晴雪</span>
            </div>
               <div class="main-content clearfix">
                  <div class="container1 clearfix">
                        <div class="left">
                                <div class="personal-profile">
                                   <img src="@/assets/images/x.jpg" alt="">
                                   <ul class="profile-text">
                                          <li>
                                              <h2>一、关于段亮</h2>
                                              <p>1. 一个对于"web前端"和"SEO技术"稍有研究的，90后草根站长。</p>
                                              <p>2. 段亮博客的创始人。</p>
                                          </li>
                                          <li>
                                              <h2>二、关于天蝎座</h2>
                                              <p>
	 								             我属于天蝎座:很多时候觉得自己对待任何事都很执着，一旦定了目标，就会不达目标不罢休，永不退缩！ 面对爱情也是一样，当真正遇到自己喜欢的一个人，会不顾一切去追。
	 							              </p>
                                          </li>
                                   </ul>
                                </div>    
                                <div class="personal-info">
                                    <p>在我认为：不管学习什么东西，一定要有属于自己的“学习方法”和善于“对事物的总结”。</p>
                                    <p>俗话说的好：“方向不对，努力白费！”很多人都是盲目的去学习，导致花了大量的时间，在学习一些没有用处的东西，到头来什么都没学会，因此会打击自己的学习欲望，也会让自己处于迷茫当中...一个优秀的传道授业者“不单单传授的是知识，更多传授的是思维和方法”。---授人以鱼不如授人以渔
					                </p>
                                    <p>其实，人的一生中都是在不断的学习，不管是技术也好，做人也罢！我觉得都应该以一颗“谦卑的心态来学习，秉持利他之心来帮助他人。</p>
                                    <p>人就得学会感恩，滴水之恩应当涌泉相报。感谢那些曾经帮助过我的人，因为有你们我才会变得如此的优秀。</p>
                                    <div class="name">晴雪</div>     
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
                             <div class="myInfo clearfix">
                                 <h2>个人信息</h2>
                                 <ul>
                                     <li>姓名：晴雪</li>
                                     <li>Q Q：1025529920</li>
                                     <li>职业：前端工程师</li>
                                     <li>爱好：旅游、K歌、敲代码</li>
                                     <li>喜欢的歌手：陈奕迅、张学友...</li>
                                     <li>喜欢的音乐：只要好听就行，偏爱于粤语，哈哈！</li>
                                     <li>人生格言：夫唯不争，故天下莫能与之争</li>
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
                >.personal-profile{
                    height: 404px;
                    display: flex;
                    >img{
                        width: 300px;
                        height: 404px;
                    }
                    >.profile-text{
                         flex: 1;
                         padding: 20px;
                        li{
                             margin: 15px 0 40px;
                            >h2{
                                 font-size: 1pc;
                                 font-weight: 600;
                                 color: #73706d;
                                 margin-bottom: 10px;
                             }
                             >p{
                                 font-size: 15px;
                                 color: #666;
                                 line-height: 25px;
                                 margin-bottom: 8px;
                                 text-indent: 22px;
                            }
                        }
                    }   
                }
                >.personal-info{
                    padding: 20px 10px 78px;
                    >p{
                        font-size: 15px;
                        color: #666;
                        line-height: 25px;
                        text-indent: 25px;
                    }
                    >.name{
                        font-size: 30px;
                        float: right;
                        padding-right: 8px;
                        padding-top: 8px;
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
             >.myInfo{
                margin-top: 20px;
                padding: 10px 0 30px;
                background-color: #fff;
                >h2{
                    position: relative;
                    left: -2px;
                    font-size: 1pc;
                    font-weight: 400;
                    color: #333;
                    padding: 2px 0 2px 10px;
                    border-left: 2px solid #3472ef;
                    margin: 0 0 5px 2px;
                }
                >ul{
                    padding: 0 20px;
                    >li{
                        font-size: 14px;
                        color: #484646;
                        line-height: 25px;
                    }
                }
             }
           }
        }
   }     
    
}
</style>

