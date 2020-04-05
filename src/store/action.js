/**
 * 商城Vuex-actions
 */
export default {
  //保存用户信息
  saveUserName(context,username){
    context.commit('saveUserName',username);
  },
  saveCartCount(context,count){
    context.commit('saveCartCount', count);
  },
}
