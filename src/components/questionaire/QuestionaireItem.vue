<template>
  <div class="permissin">
    <h1> this is questionaire item</h1>
  </div>
</template>

<script>
export default {
  created () {
    console.log(this.$route.params.id)
  }
}
</script>
