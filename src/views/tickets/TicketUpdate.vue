<template>

<van-form validate-first @failed="onFailed" @submit="onSubmit">
  <!-- 通过 pattern 进行正则校验 -->
  <van-field
    v-model="name"
    :rules="[{ pattern, message: '请输入正确内容' }]"
    label="银行名称"
    name="name"
  />

  <van-field
    v-model="displayName"
    :rules="[{ pattern, message: '请输入正确内容' }]"
    label="展示名称"
    name="displayName"
  />

  <van-field
    v-model="pinyin"
    :rules="[{ pattern, message: '请输入正确内容' }]"
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

import { bankUpdate } from '@/api/api';

export default {
  name: 'ticketupdate',
  data() {
    return {
      bankList:[],
      pinyin:'13456',
      displayName:'asdf',
      name:'123',
      pattern:/\d{6}/
    }
  },

  methods: {
    onFailed(error){
      console.log(error)
    },
    onSubmit(values){
      this.bankUpdate(values)
    },
    bankUpdate(params){
      bankUpdate(params).then( res => {
        console.log(res)
      })
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>



</style>
