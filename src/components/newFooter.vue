<template>
  <div class="footer container">
    <div class="footer-link">
      <div class="footer-wrap">
        <div class="footer-row">
          <ul class="footer-service">
            <li v-for="item in footer.service" :key="item.id">
              <a href="https://github.com/zealer-young/Imitate-MI-Store">
                <img v-lazy="item.url" alt="" />
                <span>{{item.info}}</span>
              </a>
            </li>
          </ul>
          <div class="hotline">
            <span>周一至周日 8:00-20:00</span>
            <p>400-788-3333</p>
            <a href="https://github.com/zealer-young/Imitate-MI-Store">在线客服</a>
          </div>
        </div>
        <div class="footer-co">
          <div class="info-left">
            <ul>
              <li v-for="item in footer.infoLeft" :key="item.id">
                <a href="https://github.com/zealer-young/Imitate-MI-Store">{{item.info}}</a>
              </li>
            </ul>
            <div class="footer-certificate">
              Github:<a href="https://github.com/zealer-young/Imitate-MI-Store">https://github.com/zealer-young/Imitate-MI-Store</a>
            </div>
          </div>
          <div class="focus">
            <a href="https://github.com/zealer-young/Imitate-MI-Store" v-for="item in footer.focus" :key="item.id">
              <img v-lazy="item.onePic" alt="" class="focusOne"/>
              <img v-lazy="item.twoPic" alt="" class="focusTwo"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footer:{
          service:[
            {
              id:'servise-1',
              url:require('../../public/imgs/footer/row-01.png'),
              info:'满80免运费'
            },{
              id:'servise-2',
              url:require('../../public/imgs/footer/row-02.png'),
              info:'100+ 城市次日送达'
            },{
              id:'servise-3',
              url:require('../../public/imgs/footer/row-03.png'),
              info:'7天无理由退货'
            },{
              id:'servise-4',
              url:require('../../public/imgs/footer/row-04.png'),
              info:'15天换货保障'
            },{
              id:'servise-5',
              url:require('../../public/imgs/footer/row-05.png'),
              info:'1年免费保修'
            },{
              id:'servise-6',
              url:require('../../public/imgs/footer/row-06.png'),
              info:'上门快修'
            }
          ],
          infoLeft:[
            {
              id:'indoleft-1',
              info:'了解魅族'
            },{
              id:'indoleft-2',
              info:'加入我们'
            }
            ,{
              id:'indoleft-3',
              info:'联系我们'
            }
            ,{
              id:'indoleft-4',
              info:'Flyme'
            }
            ,{
              id:'indoleft-5',
              info:'魅族社区'
            }
            ,{
              id:'indoleft-6',
              info:'天猫旗舰店'
            }
            ,{
              id:'indoleft-7',
              info:'问题反馈'
            }
            ,{
              id:'indoleft-8',
              info:'线上销售授权名单公示'
            }
            ,{
              id:'indoleft-9',
              info:'出版物经营许可证'
            }
            ,{
              id:'indoleft-10',
              info:'简体中文'
            }

          ],
          focus:[
            {
              id:'focus-1',
              onePic:require('../../public/imgs/footer/01.png'),
              twoPic:require('../../public/imgs/footer/001.png')
            },{
              id:'focus-2',
              onePic:require('../../public/imgs/footer/02.png'),
              twoPic:require('../../public/imgs/footer/002.png')
            }
            ,{
              id:'focus-3',
              onePic:require('../../public/imgs/footer/03.png'),
              twoPic:require('../../public/imgs/footer/003.png')
            }
            ,{
              id:'focus-4',
              onePic:require('../../public/imgs/footer/04.png'),
              twoPic:require('../../public/imgs/footer/004.png')
            }
          ]
        }
    }
  }
};
</script>

<style lang="scss" scoped>
.footer-link {
  box-sizing: border-box;
  height: 248px;
  padding: 48px 0 20px;
  border-top: 1px solid #f1f1f1;
}
.footer-wrap {
  max-width: 1250px;
  height: 179px;
  display: flex;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
  .footer-row {
    position: relative;
    width: 1240px;
    height: 85px;
    border-bottom: 1px solid #eee;
    ul {
      width: 1000px;
      float: left;
      display: flex;
      justify-content: flex-start;
      a {
        display: block;
        width: 150px;
        height: 69px;
        text-align: center;
        img {
          width: 50px;
          height: 39px;
        }
        span {
          display: block;
          color: #999;
        }
      }
    }
    .hotline {
      position: absolute;
      bottom: 16px;
      right: 0;
      width: 180px;
      height: 103;
      text-align: right;
      span {
        font-size: 12px;
        line-height: 30px;
        color: #999;
      }
      p {
        color: #008cff;
        font-size: 25px;
        font-weight: 400;
        margin-top: -6px;
        line-height: 40px;
      }
      a {
        height: 30px;
        padding: 0 16px;
        overflow: hidden;
        position: relative;
        text-align: center;
        line-height: 30px;
        color: #fff;
        border-radius: 20px;
        margin-top: 3px;
        display: inline-block;
        font-size: 14px;
        background: #008cff;
      }
      a:hover{
        transition: opacity .2s linear;
        opacity: .8;
      }
    }
  }
  .footer-co {
    width: 1240px;
    height: 55px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .info-left {
      width: 940px;
      height: 54px;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      li {
        padding-right: 15px;
        border-right: 1px solid #d6d6d6;
        float: left;
        height: 18px;
        margin-right: 15px;
        a {
        display: block;
        line-height: 18px;
        color: #999;
        font-size: 12px;
      }
      a:hover{
        color: #008cff;
      }
      }
      li:last-child {
        border-right: none;
      }
      .footer-certificate{
        width: 100%;
      }
      .footer-certificate,.footer-certificate a{
        margin-top: 8px;
        color: #999;
        text-align: center;
        font-size: 15px;
      }
    }
    .focus {
      margin-top: 30px;
      width: 160px;
      height: 30px;
      display: flex;
      justify-content: flex-start;
      a{
        display: block;
        width: 40px;
        height: 30px;
      }
      a:hover {
        .focusOne{
          opacity: 1;
        }
        .focusTwo{
          opacity: 0;
        }
      }
      a img {
        width: 20px;
        height: 20px;
      }
      .focusOne{
        margin-right: -20px;
        opacity: 0;
      }
    }
  }
}
</style>
