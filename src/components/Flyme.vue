<template>
  <div class="center">
    <div class="flyme-box">
      <div class="title">
        <h3>Flyme</h3>
      </div>
      <div class="wrapper">
        <ul class="item-wrap container">
          <li class="big">
            <img src="../../public/imgs/Flyme/001.jpg" alt="" />
          </li>
          <li class="small" v-for="(items) in flymeListSmall" :key="items.id">
            <div class="item-box">
              <a href="">
                <div class="item-img">
                  <img v-lazy="items.itemImgUrl" alt="" />
                </div>
                <p>{{items.p}}</p>
              </a>
            </div>
          </li>
          <!-- <li class="small">
            <div class="item-box">
              <a href="">
                <div class="item-img">
                  <img src="../../public/imgs/Flyme/002.png" alt="" />
                </div>
                <p>魅族成为三大运营商 5G 战略合作伙伴</p>
              </a>
            </div>
          </li>
          <li class="small">
            <div class="item-box">
              <a href="">
                <div class="item-img">
                  <img src="../../public/imgs/Flyme/002.png" alt="" />
                </div>
                <p>魅族成为三大运营商 5G 战略合作伙伴</p>
              </a>
            </div>
          </li>
          <li class="small">
            <div class="item-box">
              <a href="">
                <div class="item-img">
                  <img src="../../public/imgs/Flyme/002.png" alt="" />
                </div>
                <p>魅族成为三大运营商 5G 战略合作伙伴</p>
              </a>
            </div>
          </li>
          <li class="small">
            <div class="item-box">
              <a href="">
                <div class="item-img">
                  <img src="../../public/imgs/Flyme/002.png" alt="" />
                </div>
                <p>魅族成为三大运营商 5G 战略合作伙伴</p>
              </a>
            </div>
          </li>
          <li class="small">
            <div class="item-box">
              <a href="">
                <div class="item-img">
                  <img src="../../public/imgs/Flyme/002.png" alt="" />
                </div>
                <p>魅族成为三大运营商 5G 战略合作伙伴</p>
              </a>
            </div>
          </li> -->
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
       flymeListSmall: [
        {
          id: "flymeList-0",
          itemImgUrl: require("../../public/imgs/Flyme/flymeList-0.png"),
          p: "魅族成为三大运营商 5G 战略合作伙伴",
        },
        {
          id: "flymeList-1",
          itemImgUrl: require("../../public/imgs/Flyme/flymeList-1.jpg"),
          p: "魅Hello 5G",
        },
        {
          id: "flymeList-2",
          itemImgUrl: require("../../public/imgs/Flyme/flymeList-2.jpg"),
          p: "京津冀互联互通卡",
        },
        {
          id: "flymeList-3",
          itemImgUrl: require("../../public/imgs/Flyme/flymeList-3.jpg"),
          p: "图库新功能",
        },
        {
          id: "flymeList-4",
          itemImgUrl: require("../../public/imgs/Flyme/flymeList-4.jpg"),
          p: "文档校正模式",
        },
        {
          id: "flymeList-5",
          itemImgUrl: require("../../public/imgs/Flyme/flymeList-5.jpg"),
          p: "专访魅族 Flyme 负责人周详",
        }
      ]
    }
  }
};
</script>

<style lang="scss">
.center{
    width: 100%;
    height: auto;
    background-color: #f4f4f4;
}
.title {
  font-size: 30px;
  text-align: center;
  line-height: 45px;
  margin-bottom: 10px;
  h3 {
    font-size: 1em;
    font-weight: 400;
    letter-spacing:1px;
  }
}
.item-wrap {
  width: 1248px;
  height: 520px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-bottom: 50px;
  li {
    margin-right: 9px;
    margin-bottom: 15px;
  }
  .big img {
    width: 615px;
    height: 245px;
  }
  .small .item-box {
    width: 303px;
    height: 245px;
    .item-img {
      width: 303px;
      height: 190px;
    }
    p {
      width: 303px;
      height: 55px;
      font-size: 16px;
      color: #333;
      text-align: center;
      line-height: 55px;
    }
  }
}
</style>
