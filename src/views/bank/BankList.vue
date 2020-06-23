<template>

<van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <div class="hotcardcontent">
    <h4><span>银行列表</span><van-button icon="add-o" type="primary" size="mini" @click="linkTo('bankadd')">新增</van-button></h4>
    <div class="hotbank-item" v-for="item in banks" :key="item.id">
      <ul>
        <li><span class="bankname">{{item.name}}</span><label>{{item.pinyin}}</label></li>
        <li>{{item.code}}</li>
        <li>{{item.time}}</li>
      </ul>
      <ol>
        <li><van-icon name="lajitong" color="#07c160" size="mini" @click="handleBankDelete(item.id,item.displayName)"/></li>
        <li><van-icon name="editor" color="#07c160" size="mini" @click="linkTo('bankupdate',item)"/></li>
      </ol>
    </div>
	</div>

</van-list>

  
	

</template>

<script>

import { getBankList, bankDelete } from '@/api/api';
import { Dialog } from 'vant';

export default {

  name: 'banklist',

  components: {

  },
  data() {
    return {

      loading:false,

      finished:false,

      banks:[],
      page:0
    }
  },

  methods: {

    onLoad() {
      ++this.page
      getBankList({page:this.page,limit:10}).then(res=>{
        console.log(res)
        this.banks = res.data.banks;
      })
    },

    linkTo(path,params){
      this.$router.push({
          name: path,
          query: params
        });
    },

    handleBankDelete(bankId, displayName){
      Dialog.confirm({
        title: '删除',
        message: '是否永久删除'+displayName,
      }).then(() => {

        bankDelete({bankId:bankId}).then(res=>{
          if(res.errno==0){
            this.page = 0;
            this.banks = [];
            this.onLoad();
          }
        }).catch(err=>{console.log(err)})

      }).catch(()=>{})
    },
    handleGetBankList(){
      getBankList({page:this.page,limit:10}).then(res=>{
        console.log(res)
      })
    }
  },

  mounted(){
    
  },
  components:{
    [Dialog.Component.name]: Dialog.Component
  }

}
</script>

<style lang="scss" scoped>

.bankname{
  margin-right:0.06rem;
  display:inline-block;
}

.hotcardcontent h4{
  font-size: 0.16rem;
  margin-bottom: 0.12rem;
  margin-top: 0.12rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding:0 0.16rem;
}



.hotcardcontent{
	background:#f2f2f2;
}

.hotcardcontent .hotbank-item{
  padding:0.16rem;
  display: flex;
  justify-content: space-between;
  align-items:center;
  margin-top:0.1rem;
  background:white;
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
