<template>
  <div class="container">
        <div class="alert alert-success right" id="right">
            <img src="../assets/images/sent.png" alt="" width="150px" height="150px">
            <p>تم ارسال الرسالة بنجاح</p>
        </div>
    
    

        <div class="alert alert-danger wrong" id="wrong">
            <img src="../assets/images/notsent.png" alt="" width="150px" height="150px">
            <p>فشل ارسال الرسالة</p>
        </div>

    <center>
        <button class="btn btn-dark sendagin" id="sendagin" v-on:click="sendAgin"> ارسل مرة اخرى</button>
    </center>
    
    <div class="theform" id="theform">
    <textarea type="text" dir="auto" rows="10"  class="form-control" v-model="msg"></textarea>
    <center>
        <button class="btn subntn" v-on:click="sendMsg" id="sendbtns">ارسل</button>
        </center>
    </div>

  </div>
</template>
<script>
import axios from "axios"
import {API , channel} from'../../keys/Keys'
export default {
data(){
    return{
        msg:'',
        token : API,
        chat_id : channel
    }
},
methods:{
    sendMsg(){
        document.getElementById("sendbtns").classList.add("disabled")
        this.msg = encodeURIComponent(this.msg)
        axios.get('https://api.telegram.org/bot'+this.token+'/sendMessage?chat_id='+this.chat_id+'&text='+this.msg)
        .then(function (response) {
            if (response.status === 200 || response.status == "200") {
                document.getElementById('theform').style.display = "none"
                document.getElementById('right').style.display  = "block"
                document.getElementById('sendagin').style.display = "block"
            }else{
                document.getElementById('theform').style.display = "none"
                document.getElementById('wrong').style.display  = "block"
                document.getElementById('sendagin').style.display = "block"

                }
            }).catch(function () {
                document.getElementById('theform').style.display = "none"
                document.getElementById('wrong').style.display  = "block"
                document.getElementById('sendagin').style.display = "block"
            })

      },
    sendAgin(){
        document.getElementById("sendbtns").classList.remove("disabled")
        this.msg =  '',
        document.getElementById('right').style.display  = "none"
        document.getElementById('wrong').style.display  = "none"
        document.getElementById('sendagin').style.display = "none"
        document.getElementById('theform').style.display = "block"

    }
}
}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');

.container{
    margin-top:100px;
}
.subntn{
    margin-top:25px;
    background:#212529 ;
    color: white;
}
.right{
    display: none;
    text-align: center;
    font-family: 'Lalezar', cursive;
    color:black;
    font-size: 25px;

}
.theform{
    display: block;
}
.wrong{
    display: none;
    text-align: center;
    font-family: 'Lalezar', cursive;
    color:black;
    font-size: 25px;
}
.sendagin{
    display: none;
    font-family: 'Lalezar', cursive;
    font-size: 19px;
    margin: 20px;
}
</style>