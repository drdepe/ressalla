<template>
  <div>
      <div class="choose">
  <button style="display:block;width:180px; height:60px;" onclick="document.getElementById('getFile').click()" class="chose_btn btn  btn-danger">اختر الصورة</button>
    <input type='file' id="getFile" style="display:none"> 

            <center>
            <button class="imgsend">
                <img width="40px" height="40px" src="../assets/images/send.png" alt="" class="sendbtn">
            </button>
            </center>       
         
         
         
         </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');

.choose{
margin: 0 auto;
margin-top: 190px;
/* width: 300px; */
}
.chose_btn{
    margin: 0 auto;
    width: 1000px;
    height: 12px;
    font-size: 26px;
    font-family: 'Lalezar', cursive;
    background-color: 0dcaf0 ;
    border: 2px black solid;
}
.imgsend{
    margin: 0 auto;
    margin-top: 30px;
    border-radius: 80px;   
    background: none;
    border:2px #BB2D3B solid;
    width: 70px;
    height: 70px;
    transition: all .50s;
}
.imgsend:hover{
    background: #BB2D3B;
    color: white;
}
.sendbtn{
    rotate: 270deg;
}
</style>