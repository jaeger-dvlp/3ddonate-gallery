import React, {Component} from 'react'
import STLViewer from 'stl-viewer'

export class ModelViewer extends Component {
  constructor(props) {
    super(props)
    this.state = {model: null}
  }
  render() {
    return (
      <div
        data-aos="zoom-in-down"
        data-aols-delay="200"
        className="model-viewer-cont mx-auto col-6 col-xl-4 col-lg-4 p-2"
      >
        <div className="model-viewer mx-auto col-12 p-2">
          <STLViewer
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="300"
            className="mx-auto"
            width={150}
            height={200}
            modelColor="white"
            backgroundColor="white"
            model={'./3dModels/' + this.props.model + '.stl'}
            rotate={true}
            rotationSpeeds={[0.0, 0.005, 0.0]}
            lights={[1, 1, 2]}
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

/*
,
  {
    "model": "bilekIlacKutusu",
    "name": "Bilek İlaç Kutusu",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
  },
  {
    "model": "oyunKonsoluBuyutucu",
    "name": "Oyun Konsolu Büyütücü",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
  },
  {
    "model": "pipetTutucu",
    "name": "Pipet Tutucu",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
  },
  {
    "model": "sifonluk",
    "name": "Sifonluk",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
  },
  {
    "model": "tekElKitapSayfaTutucu",
    "name": "Tek El Kitap Sayfa Tutucu",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
  },
  {
    "model": "tirnakMakasiAparati",
    "name": "Tırnak Makası Aparatı",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
  },
  {
    "model": "dugmeIliklemeAparati",
    "name": "Düğme İlikleme Aparatı",
    "desc": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown."
  }
*/
