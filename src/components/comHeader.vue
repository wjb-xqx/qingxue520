<template>
    <div class="header">
        <div class="container">
            <router-link to="/">
                <img src="@/assets/images/logo.png" alt="" class="logo">
            </router-link>
            <div class="nav-wrap clearfix">
                <ul>
                    <router-link tag="li" to="/" class="active">首页</router-link>
                    <router-link tag="li" to="/video" >免费视频教程</router-link>
                    <router-link tag="li" to="/duanliang" >学无止境</router-link>
                    <router-link tag="li" to="/diary" >个人日记</router-link>
                    <router-link tag="li" to="/user" >关于晴雪</router-link>
                    <router-link tag="li" to="/message" >留言板</router-link>
                   
                </ul>
                <img src="@/assets/images/hot.gif" alt="" class="hot">
            </div>
            <!-- <div class="login-box">
                <span>登录</span>
                <b class="kong">/</b>
                <span>注册</span>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    name:"comHeader",
    data(){
        return{
            changIndex:0
        }
    },
    methods:{
        addActive(index){
            this.changIndex = index
        }
    }
}
</script>
<style lang="less" scoped>
.header{
    position: fixed;
    top: 0;
    z-index: 888;
    width: 100%;
    height: 80px;
    background: #fff;
    box-shadow: 0 2px 6px 0 rgba(0,0,0,.17);
    >.container{
        display: flex;
        .logo{
            cursor: pointer;
            display: block;
            width: 120px;
            height: 60px;
            margin: 10px;
        }
        >.nav-wrap{
            flex: 5;
            margin-top: 10px;
            position: relative;
            >ul{
                height: 60px;
                >li{
                    display: block;
                    width: 90pt;
                    margin-right: 3px;
                    height: 60px;
                    font-size: 1pc;
                    color: #333;
                    line-height: 60px;
                    float: left;
                    text-align: center;
                    cursor: pointer;
                    &:hover{
                        color: #ef4868;
                    }
                }
                .active{
                    color: #ef4868;
                }
            }
            >.hot{
               position: absolute;
                top: 2px;
                left: 225px;
            }
        }
        >.login-box{
            flex: 1;
            text-align: right;
            height: 80px;
            line-height: 80px;
            text-align: center;
            font-size: 1pc;
            margin-right: 20px;
            cursor: pointer; 
            >.kong{
                padding: 0 5px;
            }
            >span{
                &:hover{
                   color: #ef4868;
                }
            }
        }
    }
}
</style>

