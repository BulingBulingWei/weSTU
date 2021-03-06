// pages/Study/Time/time.js
Page({

  /**
   * Page initial data
   */
  data: {
    classData0: [
      "每年有两次四六级考试，学生可自主报考。第一次为6月的第三个星期六，第二次为12月的第三个星期六。",
      "四六级满分750分，四级分数高于425分才能报考六级，所以普遍认为425分为四六级合格线，但是只要超过220分就会有成绩单。",
      "四六级考试地点一般在本部，考试当天会有专车送同学们去本部。",
      ],

    classData1:[
      "1.	坚持背单词。词汇要从更重要的记起。利用好零碎的时间片段。\n2.	提前刷真题，限制好时间，加快做题速度，保持做题手感。\n3.	听力在四六级考试中占比很大，得分高低对总分的影响很大。短时间内练得越多，效果越明显，比阅读写作和翻译更容易得分。\n4.	考前可以记一记常用句型，多看一些范文，了解分类的主题词。避免考试时不会写。"
    ]
  },
  viewImg(e) {
    var current = e.currentTarget.dataset.viewimgurl;
    wx.previewImage({
      current: current,
      urls: [current]
    })
  },

})