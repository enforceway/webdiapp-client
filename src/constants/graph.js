let mxgraph = require('mxgraph')
let mxgraphModel = mxgraph({
  // mxResourceExtension: '',
  // mxForceIncludes: '',
  // mxLoadResources: true,
  // mxDefaultLanguage : '',
  mxImageBasePath: './mxgraph/images',
  mxBasePath: './mxgraph'
})
let MxEditor = mxgraphModel.mxEditor
let geditor = new MxEditor()

/* 图形中新增cell的事件捕捉 */
geditor.graph.addListener(mxgraphModel.mxEvent.CELLS_ADDED, function (graph, evt, arg1, arg2) {
  // console.log(evt.properties.cells[0])
})

/* 图形中移除cell的事件捕捉 */
geditor.graph.addListener(mxgraphModel.mxEvent.CELLS_REMOVED, function (graph, evt, arg1, arg2) {
  // console.log(evt.properties.cells)
})

/* 图形中移动cell的事件捕捉 */
geditor.graph.addListener(mxgraphModel.mxEvent.CELLS_MOVED, function (graph, evt, arg1, arg2) {
  // console.log(evt.properties.cells)
})

export const editor = geditor

export const graph = geditor.graph

export const mxGraph = mxgraphModel.mxGraph

export const mxRubberband = mxgraphModel.mxRubberband

export const mxGraphHandler = mxgraphModel.mxGraphHandler

export const mxEvent = mxgraphModel.mxEvent

export const mxConstants = mxgraphModel.mxConstants

export const mxUtils = mxgraphModel.mxUtils
