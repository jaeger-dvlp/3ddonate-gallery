import React, {Component} from 'react'
import ModelViewer from './ModelViewer'

export class Models extends Component {
  render() {
    const _3dModels = [
      {
        model: 'posetTutucu',
        name: 'Poşet Tutucu',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      },
      {
        model: 'adaptifAnahtar',
        name: 'Adaptif Anahtar',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      },
      {
        model: 'cimbiz',
        name: 'Cımbız',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      },
      {
        model: 'fonksiyonelAdaptifUrun',
        name: 'Fonksiyonel Adaptif Ürün',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      },
      {
        model: 'corapGiymeAparati',
        name: 'Çorap Giyme Aparatı',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      },
      {
        model: 'kasikCatalAparati',
        name: 'Kaşık-Çatal Aparatı',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      },
      {
        model: 'fermuarCekmeAparati',
        name: 'Fermuar Çekme Aparatı',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      },
      {
        model: 'atmKartTutucu',
        name: 'ATM Kart Tutucu',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      },
      {
        model: 'genisYemekAksesuari',
        name: 'Geniş Yemek Aksesuarı',
        desc: `Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.`
      }
    ]
    return (
      <div className="container mt-5">
        <div className=" col-12 d-flex row m-0">
          {_3dModels.map((object, id) => {
            return (
              <ModelViewer
                key={id}
                model={object.model}
                name={object.name}
                desc={object.desc}
              ></ModelViewer>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Models
