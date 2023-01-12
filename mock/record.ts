import { MockMethod } from 'vite-plugin-mock';


const recordData = {
   personage: [
     {
       ranking: '特等奖',
       prize: 'iPhone14Pro iPhone14Pro iPhone14Pro iPhone14Pro',
       chainData: {
         title: '链1链1',
         number: '1996063',
         id: '3213kjh3k21j3h21k3l90sdfsd897sdfkl21hn312789as89df1h2klj3h219879ad12312das'
       },
       personsList: [
         {
           jobNumber: 'HZ237468',
           name: '雷火八神'
         }
       ] 
     }
   ],
   annualMeeting:[
     {
       ranking: '五等奖',
       prize: '一楼楼食堂酸菜鱼一份',
       chainData: {
         title: '链5链5',
         number: '1996077',
         id: 'sdf89787sdf09v7sdf578ds4f56bxc746sdf87xc5v67bx85sdf98xcbv67896sdf587xvc58'
       },
       personsList: [
         {
           jobNumber: 'HZ235674',
           name: '雷火酱瓜'
         },
         {
           jobNumber: 'HZ235674',
           name: '雷火酱瓜'
         },
         {
           jobNumber: 'HZ235674',
           name: '雷火酱瓜'
         },
         {
           jobNumber: 'HZ235674',
           name: '雷火酱瓜'
         }
       ] 
     },
     {
       ranking: '四等奖',
       prize: '计算器一个',
       chainData: {
         title: '链5链5',
         number: '1996077',
         id: 'zxcv89vxcsdfsd69f8698xcv56xc4cv65bc3424kj678bmnvmxcvx7ctv2t7t78zxc5788'
       },
       personsList: [
         {
           jobNumber: 'HZ235766',
           name: '雷火猪肝'
         },
         {
           jobNumber: 'HZ235766',
           name: '雷火猪肝'
         },
         {
           jobNumber: 'HZ235766',
           name: '雷火猪肝'
         },
         {
           jobNumber: 'HZ235766',
           name: '雷火猪肝'
         }
       ] 
     },
   ]
 }

export default [
  {
    url: '/api/v1/record',
    method: 'get',
    response: ({ query }) => {
      return recordData;
    },
  },

] as MockMethod[];