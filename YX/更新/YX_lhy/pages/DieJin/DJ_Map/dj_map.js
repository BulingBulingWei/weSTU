// pages/DieJin/DJ_Map/dj_map.js
"use strict";
Page({

  /**
   * Page initial data
   */
  data: {
    arr:['叠金校区常用地点：宿舍楼、食堂、教学楼、架空层等。\n① 宿舍楼作为大家生活起居的主要场所，位于操场和食堂的西侧；\n② 食堂位于操场的北侧，是大家日常吃饭的地方；\n③ 教学楼位于操场的南侧，分为A座、B座、C座和实训楼1、2。学术报告厅在实训楼1的一楼哦，校区有很多活动都会在这里举办的；\n④ 架空层位于教学楼A座与综合楼的连接处，是教学楼和实训楼1之间的必经之路。'],
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