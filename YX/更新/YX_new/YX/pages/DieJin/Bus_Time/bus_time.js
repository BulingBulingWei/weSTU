// pages/DieJin/Bus_Time/bus_time.js
"use strict";
Page({

  /**
   * Page initial data
   */
  data: {
    arr:['1.校巴往返路线：汕大校训碑——过渡校区教学楼——过渡校区宿舍区\n2.如遇调课调休，发车班次相应调整。\n3.寒、暑假期间所有班次停开。\n4.考试周方案也有所变化。'],
    longitude: 120.12487,
    latitude: 35.99940,
    speed: 0,
    accuracy: 0,
    info:"定位中",
    point: "#FFB800",
    showLongitude: 120.124870,
    showLatitude: 35.999400
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
      var that = this
    }

    ,
  viewImg(e) {
    var current = e.currentTarget.dataset.viewimgurl;
    wx.previewImage({
      current: current,
      urls: [current]
    })
  },


  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})