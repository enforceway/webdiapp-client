<template>
  <div class="graph-jar">
    <p><button @click="triggerExecute">执行</button></p>
    <div id="container"></div>
  </div>
</template>

<script>
import { graph, editor, mxRubberband, mxGraphHandler, mxEvent, mxConstants, mxUtils } from '@/constants/graph'
// Vue.extends(bean, mxGraph)
export default {
  components: {
    // graph: mxgraphModel
  },
  methods: {
    triggerExecute () {
      var cellModel = graph.getModel().getCell(5)
      var previous = cellModel.getStyle
      cellModel.getStyle = function () {
        var cell = this
        if (cell != null) {
          var style = previous.apply(this, arguments)
          if (this.isEdge(cell)) {
            var target = this.getTerminal(cell, false)

            if (target != null) {
              var state = graph.getView().getState(target)
              var targetStyle = (state != null) ? state.style : graph.getCellStyle(target)
              var fill = mxUtils.getValue(targetStyle, mxConstants.STYLE_FILLCOLOR)
              if (fill != null) {
                style += ';strokeColor=' + fill
              }
            }
          } else if (this.isVertex(cell)) {
            var geometry = this.getGeometry(cell)
            if (geometry != null &&
              geometry.width >= 80) {
              style += ';fillColor=green'
            }
          }
          return style
        }
        return null
      }
      graph.refresh()
    }
  },
  mounted () {
    // mxGraph.call(this)
    console.log(this.createHandlers)
    this.$nextTick(() => {
      let container = document.querySelector('#container')
      // var graph = editor.createGraph()
      editor.setGraphContainer(container)
      graph.getView().updateStyle = true
      graph.setConnectable(true)
      graph.autoScroll = false
      graph.setTooltips(false)
      graph.setEnabled(true)

      // Enables guides
      mxGraphHandler.prototype.guidesEnabled = true
      /* eslint-disable */
      new mxRubberband(graph)
      // Gets the default parent for inserting new cells. This
      // is normally the first child of the root (ie. layer 0).
      var parent = graph.getDefaultParent()
      // Adds cells to the model in a single step
      graph.getModel().beginUpdate()
      /* 捆绑事件 */
      // graph.fireMouseEvent = function(name, mxEvt) {
      //   if(name === mxEvent.MOUSE_DOWN) {
      //     var e = mxEvt.evt.getProperty('event'); // mouse event
      //     var cell = mxEvt.getProperty('cell'); // cell may be null
      //     debugger
      //     console.log(cell)
      //   }
      // };
      graph.getModel().addListener(mxEvent.CHANGE, function(sender, evt) {
        debugger
        // console.log('graph CHANGE triggered')
      });
      
      graph.addListener(mxEvent.CLICK, function(sender, evt) {
        var e = evt.getProperty('event'); // mouse event
        var cell = evt.getProperty('cell'); // cell may be null
        console.log('graph click triggered')
        if (cell != null) {
          // Do something useful with cell and consume the event
          evt.consume();
        }
      });
      var text = graph.getModel().getCell(3);
      // debugger
      try {
        var v1 = graph.insertVertex(parent, null, 'Hello,', 20, 20, 80, 30, 'fillColor=green')
        var v2 = graph.insertVertex(parent, null, 'World!', 200, 150, 80, 30, 'fillColor=blue')
        graph.insertVertex(parent, null, 'World!', 20, 150, 80, 30, 'fillColor=red')
        graph.insertEdge(parent, null, 'Connect', v1, v2, 'perimeterSpacing=4;strokeWidth=4;labelBackgroundColor=white;fontStyle=1')
        // var e1 = graph.insertEdge(parent, null, '', v1, v2)
      } finally {
        // Updates the display
        graph.getModel().endUpdate()
        // mxEvent.addListener(text, 'keydown', function (evt) {
        //   console.log('onkeydown')
        // }); 
      }
    })
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
