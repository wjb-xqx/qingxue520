<template>
    <div class="duanliang">
        <com-header></com-header>
        <div class="container clearfix">
            <div class="crumbs-nav">
                <van-icon name="location" />
                <a href="/">首页</a>
                <span>></span>
                <span>个人日记</span>
            </div>
            <div class="say-list clearfix">
                <li>
                    <div class="img">
                        <img src="@/assets/images/1537110981975.jpeg" alt="">
                        <div class="bgc"></div>
                    </div>
                    <div class="say-text">
                        <p>人不可缺少自己的道，要有一颗“利他之心<span>2018-09-16 23:10:46</span></p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/1537110981975.jpeg" alt="">
                        <div class="bgc"></div>
                    </div>
                    <div class="say-text">
                        <p>人不可缺少自己的道，要有一颗“利他之心<span>2018-09-16 23:10:46</span></p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/1537110981975.jpeg" alt="">
                        <div class="bgc"></div>
                    </div>
                    <div class="say-text">
                        <p>人不可缺少自己的道，要有一颗“利他之心<span>2018-09-16 23:10:46</span></p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/1537110981975.jpeg" alt="">
                        <div class="bgc"></div>
                    </div>
                    <div class="say-text">
                        <p>人不可缺少自己的道，要有一颗“利他之心<span>2018-09-16 23:10:46</span></p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/1537110981975.jpeg" alt="">
                        <div class="bgc"></div>
                    </div>
                    <div class="say-text">
                        <p>人不可缺少自己的道，要有一颗“利他之心<span>2018-09-16 23:10:46</span></p>
                    </div>
                </li>
                <li>
                    <div class="img">
                        <img src="@/assets/images/1537110981975.jpeg" alt="">
                        <div class="bgc"></div>
                    </div>
                    <div class="say-text">
                        <p>人不可缺少自己的道，要有一颗“利他之心<span>2018-09-16 23:10:46</span></p>
                    </div>
                </li>
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
    >.say-list{
        margin: 20px 0;
        
       >li{
            height: 130px;
            position: relative;
            >.img{
                width: 100px;
                height: 120px;
                float: left;
                >img{
                    width: 100px;
                    height: 100px;
                    border-radius: 50%;
                }
                >.bgc{
                    width: 75pt;
                    height: 30px;
                    background: url('../assets/images/dian.jpg') 3pc 0 repeat-y;
                }
            }
            >.say-text{
               float: right;
                width: 86%;
                height: 75pt;
                background: #f8f8f8;
                display: block;
                border-radius: 5px;
                border: 1px solid #e2dfdf;
                font-size: 14px;
                margin: 10px 10px 0 0;
                color: #10200a;
                padding: 10px;
                 position: relative;
                >p{
                    width: 100%;
                    height: 100%;
                    >span{
                        display: block;
                         width: 85px;
                         height: 25px;
                         line-height: 25px;
                         background: #ee5a5a;
                         border-radius: 3px;
                         text-align: center;
                         color: #fff;
                         position: absolute;
                         overflow: hidden;
                         right: 18px;
                         bottom: 1pc;
                         font-size: 14px;
                    }
                }
            }
            &:hover{
                &::after{
                    content: "";
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    position: absolute;
                    left: 139px;
                    top: 38px;
                    background: #333;
                    border: 2px solid #fff;
                    transition: all .5s;
                }
                &::before{
                    content: "";
                     width: 0;
                     height: 0;
                     border-style: solid;
                     border-width: 0 0 20px 22px;
                     border-color: transparent transparent transparent #cecccd;
                     position: absolute;
                     left: 100px;
                     top: 42px;
                }
            }
            &::after{
                    content: "";
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    position: absolute;
                    left: 139px;
                    top: 38px;
                    background: #ccccce;
                    border: 2px solid #fff;
                    transition: all .5s;
                }
                &::before{
                    content: "";
                     width: 0;
                     height: 0;
                     border-style: solid;
                     border-width: 0 0 20px 22px;
                     border-color: transparent transparent transparent #fff;
                     position: absolute;
                     left: 100px;
                     top: 42px;
                }
            
       }
    }
}
</style>

