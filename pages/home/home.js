var CONFIG = require('../../utils/utils.js');


Page({
  data: {
    // 是否显示赠品
    show:0,
    // 初始化banner
    banners:[],
    autoplay: true,
    interval: 5000,
    duration: 1000,
    total:0,
    currentTab:1,
    guaranteeList: [{
      'text': '正品保证'
    }, {
      'text': '七天退换'
    }, {
      'text': '极速退款'
    }, {
      'text': '全场包邮'
    }],
    // 分类
    category:[],
    // 新品上新
    shelf:{
      id:1,
      english:'New Arrivals',
      text:'新品上新'
    },
    shelfNavList:[]
  },
  onLoad(){
    var that = this;
    // 轮播
    wx.request({
      url: CONFIG.API_URL.BANNER_QUERY,
      method:'GET',
      data:{
        order_by: '-priority',
        order_by: '-id',
        banner_type: 'banner',
        img_size: 'medium',
        limit: 10,
        page: 0,
        offset: 0
      },
      success(res){
        if(res.statusCode == 200){
          that.setData({
            banners:res.data.objects,
            total: res.data.objects.length,
          })
        }
      }
    });
    guaranteeList:[{
       'text':'正品保证'
    },{
        'text': '七天退换'
    },{
        'text': '极速退款'
    },{
        'text': '全场包邮'
    }]
    // 分类
    wx.request({
      url: CONFIG.API_URL.CATEGORY_QUERY,
      method: 'GET',
      data: {
        limit:100 ,
        img_size:'medium'
      },
      success(res) {
        if (res.statusCode == 200) {
          that.setData({
            category: res.data.objects
          })
        }
      }
    });
    // 列表
    wx.request({
      url: CONFIG.API_URL.SHELF_QUERY,
      method: 'GET',
      data: {
        limit:1000,
        img_size:'small'
      },
      success(res) {
        if (res.statusCode == 200) {
          var data = res.data.objects.slice(0,4);
          that.setData({
            shelfNavList: data
          })
        }
      }
    })
  },
  //  获取轮播下表
  intervalChange (e) {
    this.setData({
      currentTab: e.detail.current+1
    })
  },
  // 关闭优惠券
  close(e){
    this.setData({
      show:0
    })
  }
 
 
})