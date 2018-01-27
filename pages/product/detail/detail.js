// pages/product/detail/detail.js

var CONFIG = {};

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 初始化轮博
    detailbanners: [],
    total: 0,
    currentTab: 1,
    product:0,
    productmess:[],
    guaranteeList: [{
      'text': '正品保证'
    }, {
      'text': '七天退换'
    }, {
      'text': '极速退款'
    }, {
      'text': '全场包邮'
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setData({
    //   product:options.product
    // })
    CONFIG = {
      // PRODUCT: 'https://ifanr.in/api/v1.4/product/'+this.data.product
      PRODUCT: 'https://ifanr.in/api/v1.4/product/2651'
    };

    var that = this;
    // 轮播
    wx.request({
      url: CONFIG.PRODUCT,
      method: 'GET',
      data: {
        img_size: 'medium'
      },
      success(res) {
        if (res.statusCode == 200) {
          that.setData({
            productmess: res.data,
            detailbanners: res.data.images,
            total: res.data.images.length,
          })
        }
      }
    });
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
  
  },

  //  获取轮播下表
  intervalChange(e) {
    this.setData({
      currentTab: e.detail.current + 1
    })
  },
})