var CONFIG = require('../../utils/utils.js');

Page({
  data:{
    // shelfId:0,
    productNewList:[],
    // tab切换 
    currentTab: 0, 
  },
  onLoad(){
    var that = this;
    // var id = 12;
    // this.setData({
    //   shelfId:id
    // });
    wx.request({
      url:CONFIG.API_URL.PRODUCT_LIST,
      method:'GET',
      data:{
        order_by:'-priority',
        order_by: '-id',
        limit: 100,
        img_size: 'medium'
      },
      success:function(res){
        if (res.statusCode == 200){
          that.setData({
            productNewList:res.data.objects
          })
        }
      }
    });
  },
  /** 
  * 点击tab切换 
  */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.currentTarget.id) {
      return false;
    } else {
      that.setData({
        currentTab: e.currentTarget.id
      })
    }
  }  
})