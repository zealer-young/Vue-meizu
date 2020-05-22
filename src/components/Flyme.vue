<template>
  <div class="center">
    <div class="flyme-box">
      <div class="title">
        <p>Flyme</p>
      </div>
      <div class="wrapper">
        <ul class="item-wrap container">
          <li class="big">
            <img src="../../public/imgs/Flyme/001.jpg" alt="" />
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
          
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.center{
    width: 100%;
    height: auto;
    background-color: #f4f4f4;
}
.title {
  font-size: 32px;
  text-align: center;
  line-height: 45px;
  margin-bottom: 10px;
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
