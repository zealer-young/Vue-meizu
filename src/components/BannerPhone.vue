<template>
  <div class="bannerphone">
    <div class="center" v-for="item in product" :key="item.id">
      <div class="product" v-for="i in item.data" :key="i.id">
        <div class="item">
          <div class="info">{{ i.info }}</div>
          <a href="/#/product/30">
            <img v-lazy="i.bannerUrl" />
          </a>
        </div>
        <div class="wrap container">
          <ul class="goods-left">
            <li class="goods-item" v-for="j in i.blackList" :key="j.id">
              <div class="goods-box">
                <a href="" target="_blank"
                  ><img class="goods-img" v-lazy="j.urlLeft" /><span
                    class="box-info "
                    ><span class="goods-name">{{ j.nameLeft }}</span
                    ><span class="goods-desc">{{ j.descLeft }}</span
                    ><span class="goods-price"
                      ><i>￥</i>{{ j.priceLeft }}</span
                    ></span
                  ></a
                >
              </div>
            </li>
          </ul>
          <ul class="goods">
            <li class="goods-item" v-for="k in i.boxList" :key="k.id">
              <div class="goods-box">
                <a href="" target="_blank"
                  ><img
                    class="goods-img"
                    v-lazy="k.url"
                  /><span class="box-info "
                    ><span class="goods-name">{{k.name}}</span
                    ><span class="goods-desc"
                      >{{k.desc}}</span
                    ><span class="goods-price"><i>￥</i>{{k.price}}</span></span
                  ><span class="goods-sign" v-if="sign">{{k.sign}}</span></a
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sign: true,
      product: [
        {
          data: [
            {
              id: 1,
              info: "魅族声学",
              bannerUrl: require("../../public/imgs/bannerphone/002.jpg"),
              blackList: [
                {
                  id: "blackList-0",
                  urlLeft: require("../../public/imgs/bannergoods/blackList-0.jpg"),
                  nameLeft: "魅族 EP3C 耳机",
                  descLeft: "Hi-Res 认证高解析音质 | Type-C数字接口",
                  priceLeft: "129",
                },
                {
                  id: "blackList-1",
                  urlLeft: require("../../public/imgs/bannergoods/blackList-1.jpg"),
                  nameLeft: "魅族 HiFi 解码耳放 PRO",
                  descLeft: "超强二级运放 | Hi-Res 认证高解析音质",
                  priceLeft: "269",
                },
                {
                  id: "blackList-2",
                  urlLeft: require("../../public/imgs/bannergoods/blackList-1.jpg"),
                  nameLeft: "MEIZU UR 高端定制耳机  预约",
                  descLeft: "【预约专用】私人定制，为你而声",
                  priceLeft: "200",
                },
              ],
              boxList: [
                {
                  id: "boxList-0",
                  url: require("../../public/imgs/bannergoods/boxList-0.png"),
                  name: "魅族 POP2 真无线蓝牙耳机",
                  desc: "蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话",
                  price: "399",
                  sign: "热卖",
                },
                {
                  id: "boxList-1",
                  url: require("../../public/imgs/bannergoods/boxList-1.png"),
                  name: "魅族 HIFI 解码耳放",
                  desc: "高性能DAC芯片|纯净HiFi音质|600Ω高阻抗推力",
                  price: "169",
                  sign: "热卖",
                },
                {
                  id: "boxList-2",
                  url: require("../../public/imgs/bannergoods/boxList-2.png"),
                  name: "魅族 EP63NC 无线降噪耳机",
                  desc: "AMS 芯片智能降噪|Qualcomm apt-X™ 高清音质",
                  price: "399",
                  sign: "热卖",
                },
                {
                  id: "boxList-3",
                  url: require("../../public/imgs/bannergoods/boxList-3.png"),
                  name: "魅族 HD60 头戴式蓝牙耳机",
                  desc: "40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质",
                  price: "499",
                  sign: "热卖",
                },
                {
                  id: "boxList-4",
                  url: require("../../public/imgs/bannergoods/boxList-4.png"),
                  name: "魅族 EP52 Lite 蓝牙耳机",
                  desc: "生物纤维振膜|8小时续航|IPX5级防水|轻巧亲肤",
                  price: "129",
                  sign: "热卖",
                },
                {
                  id: "boxList-5",
                  url: require("../../public/imgs/bannergoods/boxList-5.png"),
                  name: "魅族 EP2X 耳机",
                  desc: "一体式线控 | 3.5mm接口 |流线设计",
                  price: "69",
                  sign: "热卖",
                },
                {
                  id: "boxList-6",
                  url: require("../../public/imgs/bannergoods/boxList-6.png"),
                  name: "魅族 EP21耳机",
                  desc: "三键一体式线控 | 3.5mm接口 ",
                  price: "39",
                  sign: "热卖",
                },
                {
                  id: "boxList-7",
                  url: require("../../public/imgs/bannergoods/boxList-7.png"),
                  name: "魅族 LIVE 四单元动铁耳机",
                  desc: "Knowles四动铁 双通道导音系统 现场级音乐表现",
                  price: "1099",
                  sign: "热卖",
                },
                {
                  id: "boxList-8",
                  url: require("../../public/imgs/bannergoods/boxList-8.png"),
                  name: "魅族 HALO 激光蓝牙耳机",
                  desc: "炫酷夜跑神器 随性张扬",
                  price: "499",
                  sign: "热卖",
                },
              ],
            },
          ],
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.center{
  width: 100%;
  height: auto;
  background-color: #f4f4f4;
}
.info {
  width: 100%;
  height: 108px;
  // background-color: #f4f4f4;
  font-size: 30px;
  font-weight: 400;
  text-align: center;
  line-height: 150px;
}
.item a {
  overflow: hidden;
  display: block;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  img {
    width: auto;
    height: 100%;
  }
}
.item a:hover{
  transition: opacity .2s linear;
  opacity: 0.8
}

.wrap {
  width: 1248px;
  height: 1155px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  // left: 5px;
  padding-bottom: 50px;
}
.goods-left {
  width: 312px;
  height: 1155px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .goods-item {
    float: left;
    position: relative;
    width: 303px;
    height: 375px;
    margin-right: 9px;
    margin-top: 10px;
    background-color: #fff;
    overflow: hidden;
    transition: all 0.3s ease;
    text-align: center;
    &:hover {
          box-shadow: 0px 0px 15px rgba(0,0,0,0.5);
        }
    .goods-img {
      width: 303px;
      height: 375px;
    }
    span {
      display: block;
    }
    .box-info {
      position: absolute;
      top: 270px;
      left: 0;
      width: 100%;
      text-align: center;
    }
    .goods-name {
      color: #fff;
      font-size: 21px;
      font-weight: 700;
    }
    .goods-desc {
      color: #fff;
      font-size: 14px;
    }
    .goods-price {
      color: #ebce6b;
      font-size: 21px;
      font-weight: 700;
    }
    a .goods-sign {
      position: absolute;
      top: 30px;
      left: 30px;
      display: block;
      background-image: linear-gradient(120deg, #ff3149, #ff64a6);
      width: 60px;
      height: 60px;
      line-height: 60px;
      color: #fff;
      font-size: 16px;
      text-align: center;
      border-radius: 50%;
    }

  }


}
.goods {
  width: 936px;
  height: 1155px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  .goods-item {
    float: left;
    position: relative;
    width: 303px;
    height: 375px;
    margin-right: 9px;
    margin-top: 10px;
    background-color: #fff;
    overflow: hidden;
    transition: all 0.3s ease;
    text-align: center;
    &:hover {
          box-shadow: 0px 0px 15px rgba(0,0,0,0.2);
        }
    .goods-img {
      width: 230px;
      height: 230px;
      margin-top: 30px;
    }
    span {
      display: block;
    }
    .box-info {
      position: absolute;
      top: 270px;
      left: 0;
      width: 100%;
      text-align: center;
    }
    .goods-name {
      color: #333;
      font-size: 16px;
    }
    .goods-desc {
      color: #999;
      font-size: 14px;
    }
    .goods-price {
      color: #cc0000;
      font-size: 22px;
    }
    a .goods-sign {
      position: absolute;
      top: 30px;
      left: 30px;
      display: block;
      background-image: linear-gradient(120deg, #ff3149, #ff64a6);
      width: 60px;
      height: 60px;
      line-height: 60px;
      color: #fff;
      font-size: 16px;
      text-align: center;
      border-radius: 50%;
    }
  }
}
</style>
