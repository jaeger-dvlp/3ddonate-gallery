import React, {Component} from 'react'
import ModelViewer from './ModelViewer'
import json3dModels from '../_3dmodels.json'

export class Models extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ready3dModels: []
    }
  }
  componentDidMount = () => {
    this.renderModels()
  }

  renderModels = async () => {
    const _3dModels = JSON.parse(JSON.stringify(json3dModels))
    this.setState({ready3dModels: _3dModels})
  }

  render() {
    const models = this.state.ready3dModels.map((object, id) => {
      return (
        <ModelViewer
          key={id}
          model={object.model}
          name={object.name}
          desc={object.desc}
        ></ModelViewer>
      )
    })
    return (
      <div className="container mt-5 mb-5">
        <div className=" col-12 d-flex row m-0">{models}</div>
      </div>
    )
  }
}

export default Models
