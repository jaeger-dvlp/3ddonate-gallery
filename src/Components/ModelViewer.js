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
            className="mx-auto col-12"
            height={200}
            modelColor="white"
            backgroundColor="white"
            model={'./3dModels/' + this.props.model + '.stl'}
            rotate={true}
            rotationSpeeds={[0.0, 0.005, 0.0]}
            cameraY={0}
            cameraX={-300}
          ></STLViewer>
          <div className="model-header col-12 text-center">Poşet Tutucu</div>
          <div className="model-desc col-12 text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.
          </div>
        </div>
      </div>
    )
  }
}

export default ModelViewer
