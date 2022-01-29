"use strict";
const app = getApp();
const time = require('../../../vector/time.js');
function getFormateDateAcceptDate(date){
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  if (month < 10) month = "0" + month;
  if (day < 10) day = "0" + day;
  return year + "-" + month + "-" + day;
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [
      "1. 实践周有选课（包括军训）及医学院的同学8月28日注册，其余同学9月11日注册；20届医学院新生10月5日报到，20届非医学院新生10月9日报到。",
      "2. 1-2周为实践周，3-18周为教学周。",
      "3.2020年10月12日-2021年1月8日为新生教学周，2021年1月11日-15日为新生考试周；\n2020年9月14日-2021年1月1日为其他年级教学周，2021年1月4日-15日为其他年级考试周。",
      "4. 学生从2021年1月16日至2月23日放寒假，共五周。（2月12日春节）",
      "5.2021-2022年春季学期：2021年2月24日学生注册，2月25日-6月16日为教学周，6月17日-6月25日为考试周，6月28日-7月9日为实践周。",
      "6.学生从2021年7月10日-8月25日放暑假，共七周。"
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var weekCount = 26;
    // var startDate = app.globalData.curTermStart;
    var startDate = "2020-08-31";
    var vacationWeekStart = 20;
    var startDateObj = new Date(startDate);
    var curDateObj = time.getNowFormatDate();
    console.log(startDateObj.getDay());
    var calendarObj = [];
    var monthFlag = 0;
    for(var i = 1 ; i <= weekCount ; ++i){
      var lineCalen=[];
      if(i>20){
        lineCalen.push({ "className": "week", "day": '寒假' })
      }else{
        lineCalen.push({ "className": "week", "day": i.toString() })
      }
      for(var k = 1;k <= 7 ; ++k){
        var unitCalen = {className:"m1"};
        var calcMonth = (startDateObj.getMonth() + 1);
        if(calcMonth % 2 === 0) unitCalen.className="m2";
        if (calcMonth !== monthFlag){
          unitCalen.day = calcMonth + "月";
          unitCalen.className += " strong";
          monthFlag = calcMonth;
        } else unitCalen.day = startDateObj.getDate().toString();
        if(k === 6 || k ===7 || i >= 22) unitCalen.className += " vacation";
        if (curDateObj === getFormateDateAcceptDate(startDateObj)) unitCalen.className += " today";
        lineCalen.push(unitCalen);
        startDateObj.addDate(0,0,1);
      }
      calendarObj.push(lineCalen);
    }
    this.setData({
      calendarObj: calendarObj
    })
    console.log(calendarObj);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})