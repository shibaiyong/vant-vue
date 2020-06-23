<template>

<van-form validate-first @failed="onFailed" @submit="onSubmit">
  <!-- 通过 pattern 进行正则校验 -->
  <van-field
    v-model="name"
    label="银行名称"
    name="name"
  />

  <van-field
    v-model="displayName"
    label="展示名称"
    name="displayName"
  />

  <van-field
    v-model="pinyin"
    :rules="[{ regPinyin, message: '请输入正确内容' }]"
    label="银行拼音"
    name="pinyin"
  />
 
  <div style="margin: 16px;">
    <van-button round block type="info" native-type="submit">
      提交
    </van-button>
  </div>
</van-form>

</template>

<script>

import { bankAdd } from '@/api/api';

export default {
  name: 'bankadd',
  data() {
    return {
      bankList:[],
      pinyin:'',
      displayName:'',
      name:'',
      regPinyin:/^[a-zA-Z]{4,}$/
    }
  },

  methods: {
    onFailed(error){
      console.log(error)
    },
    onSubmit(values){
      this.bankAdd(values)
    },
    bankAdd(params){
      bankAdd(params).then( res => {
        if(res.errno==0){
          this.$router.push('/bank/banklist')
        }else{
          Toast.fail('新增失败');
        }
      }).catch(err => {console.log(err)})
    }
  },
  mounted(){

  }
}
</script>

<style lang="scss" scoped>



</style>
