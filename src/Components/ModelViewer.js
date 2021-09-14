import React, {Component} from 'react'
import STLViewer from 'stl-viewer'

export class ModelViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {model: null}
  }
  render() {
    return (
      <div className="model-viewer-cont col-6 col-xl-4 col-lg-4 p-2">
        <div className="model-viewer mx-auto col-12 p-2">
          <STLViewer
            className="mx-auto"
            width={150}
            height={200}
            modelColor="white"
            backgroundColor="white"
            model={'./3dModels/' + this.props.model + '.stl'}
            rotate={true}
            rotationSpeeds={[0.0, 0.005, 0.0]}
            lights={[1, 1, 1]}
            lightColor="white"
            cameraY={0}
            cameraX={-300}
          ></STLViewer>
          <div className="model-header col-12 text-center p-1 p-xl-3 p-lg-3">
            {this.props.name}
          </div>
          <div className="model-desc col-12 text-justify p-1 p-xl-3 p-lg-3">
            {this.props.desc}
          </div>
        </div>
      </div>
    )
  }
}

export default ModelViewer
