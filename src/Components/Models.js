import React, {Component} from 'react'
import ModelViewer from './ModelViewer'

export class Models extends Component {
  render() {
    return (
      <div className="container mt-5">
        <ModelViewer model="posetTutucu"></ModelViewer>
      </div>
    )
  }
}

export default Models
