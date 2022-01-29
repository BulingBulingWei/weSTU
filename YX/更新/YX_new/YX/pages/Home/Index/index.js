const app = getApp();

Page({
  data: {
   
    //各话题的网页索引
    list: [
      {
        id: 'feedback',
        name: '新生指南',
        open: false,
        pages: ['来校路线','防偷防骗','常用缴费','新生军训','必带物品','校标介绍'],
        url: ['/pages/Life/Traffic/traffic', '/pages/NewStu/AntiFraud/antifraud', '/pages/NewStu/Payment/payment','/pages/NewStu/MilTrain/miltrain','/pages/NewStu/Necessary/necessary','/pages/Life/Campus_Info/campus_info']
      },
      {
        id: 'form',
        name: '校园生活',
        open: false,
        pages: ['外卖相关','抗疫相关','校园导览','校历','放假安排','社团一览表'],
        url: ['/pages/Life/Food/food','/pages/Life/Anti-epidemic/anti-epidemic','/pages/Sdust/Map/map', '/pages/Sdust/Canlendar/calendar', '/pages/Sdust/Vacation/vacation', '/pages/Study/League/league']
      },
      {
        id: 'widget',
        name: '学习相关',
        open: false,
        pages: ['图书馆指南','上课时间','常用链接', '转专业相关','ELC','学分制','四六级','考研'],
        url: ['/pages/Study/Library/library','/pages/Study/Time/time', '/pages/Study/Link/link', '/pages/Study/Major/major', '/pages/Study/Elc/Elc', '/pages/Study/Credit/Credit', '/pages/Study/Cet/Cet', '/pages/Study/Ky/Ky']
      },
      {
        id: 'nav',
        name: '生活指南',
        open: false,
        pages: ['用电相关','宿舍相关','网络相关','餐厅相关','洗浴相关','医疗相关','早起相关','快递相关'],
        url: ['/pages/Life/Power/power','/pages/Life/Living/living', '/pages/Life/Network/network', '/pages/Life/Canteen/canteen', '/pages/Life/Shower/shower', '/pages/Life/Medical/medical', '/pages/Life/Getup/getup','/pages/Life/Express/express']
      }
    ],
    version: getApp().globalData.version
  },
  kindToggle: function (e) {
    if (app.globalData.canSend === "true") this.sendMessage(e);
    var id = e.detail.value.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onLoad(e){
    wx.setNavigationBarColor({
      frontColor: '#000000',
      backgroundColor: '#f8f8f8',
      animation: {
        duration: 200,
        timingFunc: 'easeIn'
      }
    })
  },
  onReady: function () {
  
    wx.request({ //请求地址
     url: 'https://news.stuhb.top/api.php/yx',
     method: 'post',
     data:{},//没有数据可以不写 
     header: { //请求头
      'content-type': 'application/x-www-form-urlencoded'
      // "Content-Type": "application/json"
      //"Content-Type":"application/x-www-form-urlencoded"
     },
     success: function (res) { 
       console.log(res.data)
      if(res.data.code == 1){

        // var list = res.data.msg;
        // let origin = JSON.stringify(list);
        // origin = origin.replace(/\\r\\n/g,"\\n");
        // list = JSON.parse(origin);

        //将公告、外卖、学长学姐说等数据存进本地缓存storage
        if(list){
          wx.setStorageSync('notice', list.notice); 
          wx.setStorageSync('takeout', list.takeout);
          wx.setStorageSync('tips', list.tips);
          wx.setStorageSync('url', list.url);
        }
        
      }
     }
    })
    
    //从缓存调取公告信息
    let notice = wx.getStorageSync('notice'),
        data = [];
        
    notice.forEach(val=>{
        data.push(val.content)
    })

    this.setData({
      notice:notice,
      data:data
    }),
    console.log(this.data.notice)

     },

  onShareAppMessage: function () {},
  sendMessage(e){
    app.globalData.canSend = "false";
    var url = app.globalData.url + "qfunct/message/" + ((typeof (qq) === "undefined" ? "signalSendWxMessage" : "signalSendQQMessage"));
    app.ajax({
      load: 0,
      url: url,
      method: "POST",
      data: {
        formId: e.detail.formId
      },
      complete: (res) => {
        console.log(res);
        if (res.data.errcode !== 0)  app.globalData.canSend = "true";
        wx.setStorageSync("cansend", app.globalData.canSend);
      }
    })
  },
  toAbout(){
    wx.navigateTo({
      url: "/pages/User/About/about"
    })
  }
});
