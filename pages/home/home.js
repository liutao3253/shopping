var CONFIG = require('../../utils/config.js');
var app = getApp()

Page({
  data: {
    // 初始化banner
    banners:[],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    // tab切换  
    currentTab: 0,
    
    itemsArr:[{
      "mode":"scaleToFill",
      "src":"//gw3.alicdn.com/bao/uploaded/i4/59589574/TB2vv2cqbFlpuFjy0FgXXbRBVXa_!!59589574.jpg_210x210.jpg",
      "text":"新品上市"
    }, {
        "mode": "scaleToFill",
      "src": "https://s2.mogucdn.com/mlcdn/c45406/180103_45jb3kh55f8kje0cg6gidbhc4j220_180x180.png_200x9999.v1c7E.70.webp",
      "text": "包治百病"
    }, {
        "mode": "scaleToFill",
        "src": "https://m.360buyimg.com/mobilecms/s357x357_jfs/t6526/187/2244851360/122073/cd00440e/595f3c7aN1598e9e3.jpg!q50.jpg",
        "text": "潮表精选"
    }, {
        "mode": "scaleToFill",
        "src": "https://m.360buyimg.com/mobilecms/s240x240_jfs/t12310/233/1791775444/14255/a6150285/5a5472dfNbfbbd882.jpg!q70.jpg",
      "text": "数码周边"
    }, {
        "mode": "scaleToFill",
        "src": "https://s2.mogucdn.com/mlcdn/c45406/180103_753ell4khkd43baic73039f4h9lde_180x180.png_200x9999.v1c7E.70.webp",
        "text": "分骚小物"
    }, {
        "mode": "scaleToFill",
      "src": "https://s17.mogucdn.com/mlcdn/c45406/180103_7fa0c6e7g1a518leaad5j5he415kj_180x180.png_200x9999.v1c7E.70.webp",
      "text": "家居百货"
    }, {
        "mode": "scaleToFill",
        "src": "https://m.360buyimg.com/mobilecms/s357x357_jfs/t11635/265/385185135/209990/ae2db173/59ef03abN77f2f653.jpg!q50.jpg",
        "text": "文房四宝"
    }, {
        "mode": "scaleToFill",
      "src": "https://s11.mogucdn.com/mlcdn/c45406/180103_2a2026cgfhll96abigdh00l7c8ile_180x180.png_200x9999.v1c7E.70.webp",
      "text": "味蕾培养"
    }],
    // 新品
    shelfNavList:[]
  },
  onLoad(){
    var that = this;
    wx.request({
      url: CONFIG.API_URL.BANNER_QUERY,
      method:'GET',
      data:{
        limit:6,
        img_size:'small'
      },
      success(res){
        if(res.statusCode == 200){
          that.setData({
            banners:res.data.objects
          })
        }
      }
    });
    wx.request({
      url: CONFIG.API_URL.SHELF_QUERY,
      method: 'GET',
      data: {
        img_size: 'small'
      },
      success(res) {
        console.log(res.data)
        if (res.statusCode == 200) {
          that.setData({
            shelfNavList: res.data
          })
        }
      }
    })
  },
  /** 
     * 滑动切换tab 
     */
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },
  /** 
   * 点击tab切换 
   */
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  }  
 
 
 
})