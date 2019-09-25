Page({

  /**
   * 页面的初始数据
   */
  data: {
    navtablist:[
      '首页', '哈哈', '视屏', '番剧', '首页', '哈哈', '视屏', '番剧', '首页', '哈哈', '视屏', '番剧'
    ],
    currentindex:0,
    c:2
  },
  getNavtablist(){
    let vvv = this.data.c
    if (vvv === 2){
      console.log('yes')
    }else{
      console.log('no')
    }
  },
  clicknav(index){

    this.setData({
      currentindex: index.target.dataset.cc
    })
    
  },
  changecurrent(e){
    this.setData({
      currentindex:e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  this.getNavtablist()
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