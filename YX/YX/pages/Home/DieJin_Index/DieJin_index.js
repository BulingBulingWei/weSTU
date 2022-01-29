// pages/Home/DieJin_Index/DieJin_index.js
const app = getApp();

Page({
  data: {
    list: [
      {
        id: 'feedback',
        name: '新生指南',
        open: false,
        pages: ['来校路线','校巴时间表','防偷防骗','常用缴费','新生军训','必带物品','校标介绍（本部）'],
        url: ['/pages/Life/Traffic/traffic','/pages/DieJin/Bus_Time/bus_time', '/pages/NewStu/AntiFraud/antifraud', '/pages/NewStu/Payment/payment','/pages/NewStu/MilTrain/miltrain','/pages/NewStu/Necessary/necessary','/pages/Life/Campus_Info/campus_info']
      },
      {
        id: 'form',
        name: '校园生活',
        open: true,
        pages: ['外卖相关','抗疫相关','校园导览','校历','放假安排','社团一览表'],
        url: ['/pages/Life/Food/food','/pages/Life/Anti-epidemic/anti-epidemic','/pages/DieJin/DJ_Map/dj_map', '/pages/Sdust/Canlendar/calendar', '/pages/Sdust/Vacation/vacation', '/pages/Study/League/league']
      },
      {
        id: 'widget',
        name: '学习相关',
        open: false,
        pages: ['图书馆指南','上课时间','常用链接', '转专业相关','ELC','学分制','四六级','考研'],
        url: ['/pages/Study/Library/library','/pages/DieJin/DJ_classTime/dj_classtime', '/pages/Study/Link/link', '/pages/Study/Major/major', '/pages/Study/Elc/Elc', '/pages/Study/Credit/Credit', '/pages/Study/Cet/Cet', '/pages/Study/Ky/Ky']
      },
      {
        id: 'nav',
        name: '生活指南',
        open: false,
        pages: ['用电相关','宿舍相关','网络相关','餐厅相关','洗浴相关','医疗相关','早起相关','快递相关'],
        url: ['/pages/Life/Power/power','/pages/DieJin/DJ_living/dj_living', '/pages/DieJin/DJ_Network/dj_network', '/pages/DieJin/DJ_Canteen/dj_canteen', '/pages/DieJin/DJ_Shower/dj_shower', '/pages/DieJin/DJ_Medical/dj_medical', '/pages/Life/Getup/getup','/pages/DieJin/DJ_Express/dj_express']
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
