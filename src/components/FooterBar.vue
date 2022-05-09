<template>
<div class="footer">
&copy; Josef Wolkersdorfer {{year}} LocalTime
</div>
</template>
<script>
export default {
    name: 'TestOne',
    data () {
      return {
          year: (new Date()).getFullYear(),
        //   localTime: (new Date()).toLocaleTimeString('de-DE').format('H:m')
      }
    }
}
</script>
<style>
.footer{
 background-color: #363945;
 color:#fff;
}
</style>