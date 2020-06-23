<template>

<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <div class="hotcardcontent">
    <h4><span>银行列表</span><van-button icon="add-o" type="primary" size="mini" @click="linkTo('/bank/bankadd')">新增</van-button></h4>
    <div class="hotbank-item">
      <ul>
        <li><span>银行名称</span><label>银行拼音</label></li>
        <li>银行码</li>
        <li>时间</li>
      </ul>
      <ol>
        <li><van-icon name="lajitong" color="#07c160" size="mini" @click="handleBankDelete"/></li>
        <li><van-icon name="editor" color="#07c160" size="mini"/></li>
      </ol>
    </div>
	</div>

</van-list>

  
	

</template>

<script>

import { getBankList, bankDelete } from '@/api/api';

export default {

  name: 'ticketlist',

  components: {

  },
  data() {
    return {

      loading:false,

      finished:false
    }
  },

  methods: {

    onLoad() {

      ++this.page
      getBankList({page:this.page,limit:10}).then( res => {

        console.log(res)

      }).catch( err => {

        console.log( err )

      })
    },

    linkTo(path){

      this.$router.push(path)

    },

    handleBankDelete(){

      bankDelete().then(res=>{

        console.log(res)

      })

    }
  },

  mounted(){
    
  }

}
</script>

<style lang="scss" scoped>

.hotcardcontent h4{
  font-size: 0.16rem;
  margin-bottom: 0.12rem;
  margin-top: 0.12rem;
  position: relative;
  display: flex;
  justify-content: space-between;
}



.hotcardcontent{
	background:white;
	padding:0 0.18rem;
}

.hotcardcontent .hotbank-item{
  padding:0.16rem 0;
  display: flex;
  justify-content: space-between;
  align-items:center;
}




.hotcardcontent .hotbank-item ul li:nth-child(1){
	font-size: 0.14rem;
	color:rgb(51,51,51);
	font-weight: bold;
}

.hotcardcontent .hotbank-item ul li:nth-child(2){
	font-size: 0.13rem;
	margin:0.05rem 0;
	color:#555b6c;
}
.hotcardcontent .hotbank-item ul li:nth-child(3) span{
	display:inline-block;
	border:0.005rem solid #6C8FFF;
	width:0.64rem;
	height:18px;
	border-radius:8px;
	text-align: center;
	line-height:18px;
	overflow:hidden;
	font-size: 0.11rem;
	color:#6C8FFF;
}

.hotcardcontent .hotbank-item ul li:nth-child(3) span+span{
	margin-left:0.06rem;
}

</style>
