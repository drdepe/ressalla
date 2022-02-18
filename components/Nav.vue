<template>
  <nav class="navbar navbar-dark bg-dark mynav">
    
        <div class="container-fluid realnav">
    <div class="nav-text">
          رسالة من مجهول | سكول
      </div>
    <button class="navbar-toggler men-btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <br>
     <div class="realtext">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/images"><a class="nav-link active" aria-current="page" href="#">ارسل صورة</a></router-link>
        </li>
        <li class="nav-item ">
          <a class="nav-link active" href="#">ارسل فيديو</a>
        </li>
      </ul>
     </div>
    
    </div>
  </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
 @import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
.mynav{
        font-family: 'Lalezar', cursive;
        color:white
}
.nav-text{
    margin: 0 auto;
    font-size: 24px;
    font: 900;
}
.realnav{
    text-align: right;
}
.realtext{
    font-size: 20px;
}
.men-btn{
    border:none;
    
}
</style>