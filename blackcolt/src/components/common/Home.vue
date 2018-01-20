<template>
 <div class="wrapper">

        <b-header></b-header>
        <b-sidebar></b-sidebar>
        <div class="content">
            <transition name="move" mode="out-in"><router-view></router-view></transition>
        </div>
    </div>
</template>

<script>
import bHeader from './topHead.vue'
import bSidebar from './Sidebar.vue'
export default {
  name: 'blackcolt',
  components: {
    bHeader,bSidebar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
