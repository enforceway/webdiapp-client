let mxgraph = require('mxgraph')
let mxgraphModel = mxgraph({
  // mxResourceExtension: '',
  // mxForceIncludes: '',
  // mxLoadResources: '',
  mxImageBasePath: './mxgraph/images',
  mxBasePath: './mxgraph'
})
let MxEditor = mxgraphModel.mxEditor
let geditor = new MxEditor()
// export default mxgraphModel
export const editor = geditor

export const graph = geditor.graph

export const mxRubberband = mxgraphModel.mxRubberband

export const mxGraphHandler = mxgraphModel.mxGraphHandler
