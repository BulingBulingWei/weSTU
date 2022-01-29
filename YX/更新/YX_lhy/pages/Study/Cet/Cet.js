// pages/Study/Time/time.js
Page({

  /**
   * Page initial data
   */
  data: {
    classData0: [
      "每年有两次四六级考试，学生可自主报考。第一次为6月的第三个星期六，第二次为12月的第三个星期六。",
      "四六级满分750分，四级分数高于425分才能报考六级，所以普遍认为425分为四六级合格线，但是只要超过220分就会有成绩单。",
      ],
  },
  viewImg(e) {
    var current = e.currentTarget.dataset.viewimgurl;
    wx.previewImage({
      current: current,
      urls: [current]
    })
  },

})