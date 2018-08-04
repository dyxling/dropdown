var nav=require("./menu.js");//导入菜单
var imgs = require("./imgs.js");//导入图片
const app=getApp();
Page({
  data: {
    menu:nav,
    mvalue: [nav[0].level1, nav[1].level1,nav[2].level1,nav[3].level1],
    pos:[0,0,0,0],
    img: ["../../img/1.jpg", "../../img/1.jpg", "../../img/1.jpg"],
    clicked:999
  },
  onLoad:function(options){
    const that=this;
    
  },
  togg:function(event){
    const that=this;
    let i = event.currentTarget.dataset.choosen;
    let ix=event.target.dataset.index;
    let id=event.target.dataset.id;
    that.setData({ clicked: event.currentTarget.dataset.choosen});
    that.data.pos[i]=ix;
    if(i==id){
      that.data.mvalue[i] = event.target.dataset.text;
      that.setData({mvalue:that.data.mvalue});
      let t = that.data.pos;
      t=""+t[0]+t[1]+t[2]+t[3];
      console.log(t);
      if(i==3){
        that.data.img=imgs[t];
        that.setData({img:that.data.img});
      }
    }
  }
})
