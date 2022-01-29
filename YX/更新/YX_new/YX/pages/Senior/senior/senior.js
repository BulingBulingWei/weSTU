// pages/Life/canteen/canteen.js
Page({

  /**
   * Page initial data
   */
  data: {    //保留默认值，避免后端出问题时页面空白。一般情况下setData会把默认值覆盖
    data:["1.关于学习:\n①GPA是硬通货，在汕大申请奖项、考研、保研都先看GPA。\n②大一大二可以多参加比赛，多试试不同的项目，去寻找自己感兴趣的方向。\n③好好学英语，汕大有很好的英语学习资源，好好利用。\n④每一年都有大创，可以趁着这个机会找个项目练练手。",
          "2.关于生活:\n①参加社团或者组织，虽然不一定能学到什么，但一定能认识一些好玩的人。\n②汕大有很多志愿活动，还有很多奇奇怪怪的社团活动。\n③十点后的水库，很适合聊天。 ",
          "3.关于考研:\n①保研需要GPA、科研经历、比赛项目。所以要有目标的加入汕大的科研团队，并且尽量拥有科研成果。\n②认真上好专业课，在笔试和面试都需要专业课的知识。 ",
          "4.关于汕大:\n①汕大只是一间普通高等大学，不要指望它拥有超越它定位的成绩。\n②大学很多时候看个人，比起其他学校，汕大本科生获得科研成果机会更大，要主动加入科研项目，抓住机会。\n③机会与实力成正比，好好修炼内功。"]
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

onReady: function () {
    let tips = wx.getStorageSync('tips'),
        data = [];
        
    tips.forEach(val=>{
        data.push(val.content)
    })

    this.setData({
      tips:tips,
      data:data
    }),
    console.log(this.data.tips)
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */


  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {
  
  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})