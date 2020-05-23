<template>
  <div class="footer container">
    <div class="footer-link">
      <div class="footer-wrap">
        <div class="footer-row">
          <ul class="footer-service">
            <li>
              <a href="">
                <img src="../../public/imgs/footer/row-01.png" alt="" />
                <span>满80免运费</span>
              </a>
            </li>
          </ul>
          <div class="hotline">
            <span>周一至周日 8:00-20:00</span>
            <p>400-788-3333</p>
            <a href="">在线客服</a>
          </div>
        </div>
        <div class="footer-co">
          <div class="info-left">
            <ul>
              <li>
                <a href="">了解魅族</a>
              </li>
            </ul>
            <div class="footer-certificate">
              "©2019 Meizu Telecom Equipment Co., Ltd. All rights reserved. "
            </div>
          </div>
          <div class="focus">
            <a href="">
              <img src="../../public/imgs/footer/001.png" alt="" />
            </a>
            <a href="">
              <img src="../../public/imgs/footer/001.png" alt="" />
            </a>
            <a href="">
              <img src="../../public/imgs/footer/001.png" alt="" />
            </a>
            <a href="">
              <img src="../../public/imgs/footer/001.png" alt="" />
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
      footer:[
        {
          service:[
            {
              id:'',
              url:'',
              info:''
            }
          ],
          infoLeft:[
            {
              id:'',
              info:''
            }
          ],
          focus:[
            {
              id:'',
              url:''
            }
          ]
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.footer-link {
  box-sizing: border-box;
  height: 248px;
  padding: 48px 0 20px;
  // display: flex;
  // justify-content: center;
  border-top: 1px solid #f1f1f1;
}
.footer-wrap {
  max-width: 1250px;
  height: 179px;
  display: flex;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;

  // padding: 48px 0 20px;

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
      width: 155.7px;
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
      }
      li:last-child {
        border-right: none;
      }
      .footer-certificate{
        margin-top: 8px;
        color: #999;
        text-align: left;
        font-size: 12px;
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
      a img {
        width: 20px;
        height: 20px;
      }
    }
  }
}
</style>
