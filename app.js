//app.js
App({
  onLaunch() {
    // require SDK
    require('./sdk-v1.1.4');
    // 初始化 SDK
    let clientID = 'f2b15a4adafddbc3fb6e'
    wx.BaaS.init(clientID)

  },
 
})