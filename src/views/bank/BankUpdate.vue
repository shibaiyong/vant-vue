<template>

<van-form validate-first @failed="onFailed" @submit="onSubmit">
  <!-- 通过 pattern 进行正则校验 -->
  <van-field
    v-model="editForm.name"
   
    label="银行名称"
    name="name"
  />

  <van-field
    v-model="editForm.displayName"
   
    label="展示名称"
    name="displayName"
  />

  <van-field
    v-model="editForm.pinyin"
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

import { bankUpdate } from '@/api/api';

export default {
  name: 'bankupdate',
  data() {
    return {
      bankList:[],
      
      editForm:{
        pinyin:'',
        displayName:'',
        name:''
      },
      
      regPinyin:/^[a-zA-Z]{4,}$/
    }
  },

  methods: {
    initEditForm(){
      Object.assign(this.editForm,this.$route.query)
    },
    onFailed(error){
    },
    onSubmit(values){

      let params = Object.assign({},values,{ id:this.$route.query.id })

      bankUpdate(params).then( res => {
        console.log(res)
        if(res.errno==0){
          this.$router.push('/bank/banklist')
        }else{
          console.log('更新失败')
        }
      }).catch(err => {console.log(err)})
    },
    bankUpdate(params){
      bankUpdate(params).then( res => {
        console.log(res)
      })
    }
  },
  mounted(){

    this.initEditForm()
    
  }
}
</script>

<style lang="scss" scoped>



</style>
