<template>
  <div class="graph-jar">
    <div id="container"></div>
  </div>
</template>

<script>
import { graph, editor, mxRubberband, mxGraphHandler } from '@/constants/graph'

export default {
  components: {
    // graph: mxgraphModel
  },
  mounted () {
    this.$nextTick(() => {
      let container = document.querySelector('#container')
      // var graph = editor.createGraph()
      editor.setGraphContainer(container)
      graph.getView().updateStyle = true
      // Enables guides
      mxGraphHandler.prototype.guidesEnabled = true
      /* eslint-disable */
      new mxRubberband(graph)
      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      var parent = graph.getDefaultParent()
      // Adds cells to the model in a single step
      graph.getModel().beginUpdate()
      try {
        var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30, 'fillColor=green')
        var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30, 'fillColor=blue')
        graph.insertVertex(parent, null, 'World!', 20, 150, 80, 30, 'fillColor=red')
        graph.insertEdge(parent, null, 'Connect', v1, v2, 'perimeterSpacing=4;strokeWidth=4;labelBackgroundColor=white;fontStyle=1')

        // var e1 = graph.insertEdge(parent, null, '', v1, v2)
      } finally {
        // Updates the display
        graph.getModel().endUpdate()
      }
    })
    // MxgraphModel(document.querySelector('#container'))
    // console.log(window.mxGraph)
  },
  // name: 'HelloWorld',
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
<style scoped>
#container {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2QwZDBkMCIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDBkMGQwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=");
}
</style>
