import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import video from '@/components/videoPage'
import duanliang from '@/components/duanliang'
import diary from '@/components/diary'
import user from '@/components/user'
import message from '@/components/message'
import comSection from '@/components/comSection'
import vedioInfo from '@/components/vedioInfo'
import tabInfo from '@/components/tabInfo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/duanliang',
      name: 'duanliang',
      component: duanliang
    },
    {
      path: '/diary',
      name: 'diary',
      component: diary
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/message',
      name: 'message',
      component: message
    },
    {
      path: '/comSection',
      name: 'comSection',
      component: comSection
    },
    {
      path: '/vedioInfo',
      name: 'vedioInfo',
      component: vedioInfo
    },
    {
      path: '/tabInfo',
      name: 'tabInfo',
      component: tabInfo
    }
  ]
})
