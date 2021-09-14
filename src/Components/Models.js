import React, {Component} from 'react'
import ModelViewer from './ModelViewer'

export class Models extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className=" col-12 d-flex row m-0">
          <ModelViewer
            model="posetTutucu"
            name="Poşet Tutucu"
            desc="
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown."
          ></ModelViewer>
          <ModelViewer
            model="posetTutucu"
            name="Poşet Tutucu"
            desc="
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown."
          ></ModelViewer>
          <ModelViewer
            model="posetTutucu"
            name="Poşet Tutucu"
            desc="
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown."
          ></ModelViewer>
        </div>
      </div>
    )
  }
}

export default Models
