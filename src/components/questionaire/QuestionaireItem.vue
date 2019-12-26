<template>
  <div class="questionaire-item-page">
    <h1 v-html="questionaireObj.title"></h1>
    <section v-for="(que, index) in questionaireObj.questions" :key="que.id">
      <div>
        <p v-html="que.content">{{index}}</p>
        <div v-if="que.questionType === 1">
          <span v-for="(option, idx) in que.options" :key="idx">
            <input type="radio" :name="'s' + que.id" :value="option.optionContent">{{option.optionContent}}
          </span>
        </div>
        <div v-else-if="que.questionType === 2">
          
        </div>
        <div v-else-if="que.questionType === 3">
          
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import {qusetionaireSvc} from '@/services/questionaire/questionitem.service'
export default {
  data () {
    return {
      questionaireObj: {}
    }
  },
  created () {
    let id = this.$route.params.id
    qusetionaireSvc(id).then((res) => {
      this.questionaireObj = res
    })
  }
}
</script>
