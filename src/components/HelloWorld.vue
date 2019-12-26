<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Name: {{name}}</h2>
    <say-hello v-if="test"></say-hello>
    <p v-else>this is v-else evaluate</p>
    <button @click="clickToChanage">请点击</button>
  </div>
</template>

<script>
import SayHello from './common/SayHello'
export default {
  components: {
    SayHello
  },
  name: 'HelloWorld',
  methods: {
    clickToChanage () {
      this.test = !this.test
    }
  },
  props: {
    msg: String
  },
  data () {
    return {
      test: false,
      name: 'enforceway'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
