<template>
  <div id="app"  >
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {
  },
  data:()=>({
  }),
  methods: {
    
  }
  
}
</script>
<style>
::-webkit-scrollbar-track
{
	border: 1px solid transparent;
	background-color: #F5F5F5;
}

::-webkit-scrollbar
{
	width: 10px;
	background-color: #F5F5F5;
}

::-webkit-scrollbar-thumb
{
	background-color: #F27405;	
}


</style>