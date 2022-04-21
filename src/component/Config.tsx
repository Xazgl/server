import y from '/public/images/y.png';
import d from '/public/images/d.png';
import t from '/public/images/t.png';
import u from '/public/images/u.png';
import crosslandImg from '/public/images/miniCrossland.jpg';
import zafiraImg from '/public/images/miniZafira.png';
import comboCargo from '/public/images/models/4.jpg';
import comboLife from '/public/images/models/0.jpg';
import zafira from '/public/images/models/3.jpg';
import vivaro from '/public/images/models/2.jpg';
import crossland from '/public/images/models/1.jpg';
import granlandX from '/public/images/models/5.jpg';

import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useMemo, useState } from "react"

type Complectation = {
    id: number,
    name: string,
    power: number,
    engine: string,
    transmission: string
}

type Model = {
    id: number,
    price: number,
    name: string,
    bodyType: string,
    img: string,
    complectations: Complectation[]
}

const modelList: Model[] = [
    {
        id: 1,
        price: 2000000,
        name: 'Combo Cargo',
        bodyType: 'Коммерческий',
        img: `${comboCargo.src}`,
        complectations: [
            {
                id: 1,
                name: 'Combo Cargo INJECTION',
                power: 115,
                engine: '1.6',
                transmission: '5-MT',
            },
            {
                id: 2,
                name: 'Combo Cargo INJECTION XL',
                power: 115,
                engine: '1.6',
                transmission: '5-MT',

            },
            {
                id: 3,
                name: 'Combo Cargo Disel',
                power: 90,
                engine: '1.6 Diesel',
                transmission: '5-MT',
            }
        ],
    },
    {
        id: 2,
        price: 2030000,
        name: 'Zafira Life',
        bodyType: 'Минивэн',
        img: `${zafira.src}`,
        complectations: [
            {
                id: 1,
                name: 'Innovation',
                power: 150,
                engine: '2.0',
                transmission: '6 АКПП'
            },
            {
                id: 2,
                name: 'Innovation',
                power: 150,
                engine: '2.0',
                transmission: '6 АКПП'

            },
            {
                id: 3,
                name: 'Cosmo',
                power: 150,
                engine: '2.0',
                transmission: '6 АКПП'
            }
        ],
    },
    {
        id: 3,
        price: 2030000,
        name: 'Combo Life',
        bodyType: 'Компактвэн',
        img: `${comboLife.src}`,
        complectations: [
            {
                id: 1,
                name: 'Combo Life MT',
                power: 115,
                engine: '1.6',
                transmission: 'MT-5'
            },
            {
                id: 2,
                name: 'Combo Life ATT',
                power: 115,
                engine: '1.6',
                transmission: '6 АКПП'

            },
            {
                id: 3,
                name: 'Combo Life Disel',
                power: 90,
                engine: '1.6 Disel',
                transmission: 'MT-5'
            }
        ],
    },
    {
        id: 4,
        price: 2030000,
        name: 'GrandLand X',
        bodyType: 'Кроссовер',
        img: `${granlandX.src}`,
        complectations: [
            {
                id: 1,
                name: 'Enjoy',
                power: 150,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'
            },
            {
                id: 2,
                name: 'Innovation',
                power: 150,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'

            },
            {
                id: 3,
                name: 'Cosmo',
                power: 150,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'
            }
        ],
    },
    {
        id: 5,
        price: 2030000,
        name: 'Crossland',
        bodyType: 'Кроссовер',
        img: `${crossland.src}`,
        complectations: [
            {
                id: 1,
                name: 'Edition',
                power: 110,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'
            },
            {
                id: 2,
                name: 'Elegance',
                power: 110,
                engine: '1.2 Turbo',
                transmission: '6 АКПП'

            },
            {
                id: 3,
                name: 'Selection M AT',
                power: 110,
                engine: '1.2 Turbo',
                transmission: '6 АКПП'
            }
        ],
    },
    {
        id: 6,
        price: 2030000,
        name: 'Vivaro',
        bodyType: 'Минивэн коммерческий',
        img: `${vivaro.src}`,
        complectations: [
            {
                id: 1,
                name: 'Selection',
                power: 90,
                engine: '1.6 Turbo',
                transmission: '6 АКПП'
            },
            {
                id: 2,
                name: 'Selection M',
                power: 150,
                engine: '2.0 Disel',
                transmission: 'МТ-5'

            },
            {
                id: 3,
                name: 'Selection M AT',
                power: 150,
                engine: '2.0 Disel',
                transmission: '6 АКПП'
            }
        ],
    },
]


type typeOfService = {
    id: number,
    name: string,
    price: number,
}

type Service = {
    id: number,
    name: string,
    typeOfService: typeOfService[]
}

const serviceList:  Service [] = [
    {
        id: 1,
        name: 'Ремонт коробки передач',
        typeOfService: [
            {
                id: 1,
                name: 'Замена масла',
                price: 500,
            },
            {
                id: 2,
                name: 'Обновление программного обеспечения',
                price: 1000,

            },
            {
                id: 3,
                name: 'Диагностика КПП',
                price: 1000,
            }
        ],
        
    },
    {
        id: 2,
        name: 'Ремонт выхлопной системы',
        typeOfService: [
            {
                id: 1,
                name: 'Замена катализатора',
                price: 600,
            },
            {
                id: 2,
                name: 'Прошивка на Евро 2',
                price: 1000,

            },
            {
                id: 3,
                name: 'Замена лямда-зонд',
                price: 115,
            }
        ],
    },
    {
        id: 3,
        name: 'Ремонт двигателя',
        typeOfService: [
            {
                id: 1,
                name: 'Замена ГРМ',
                price: 2000,
            },
            {
                id: 2,
                name: 'Замена опоры двигателя',
                price: 115,

            },
            {
                id: 3,
                name: 'Замена свечей зажигания ',
                price: 115,
            }
        ],
    },
]

type ModelService = {
    id: number,
    price: number,
    name: string,
    img: string
}

const modelListService: ModelService[] = [
    {
        id: 1,
        price: 1,
        name: 'Combo Cargo',
        img: `${comboCargo.src}`,
    },
    {
        id: 2,
        price: 2,
        name: 'Zafira Life',
        img: `${zafira.src}`,
    },
    {
        id: 3,
        price: 1.2,
        name: 'Combo Life',
        img: `${comboLife.src}`,
    },
    {
        id: 4,
        price: 1.6,
        name: 'GrandLand X',
        img: `${granlandX.src}`,
    },
    {
        id: 5,
        price: 1.4,
        name: 'Crossland',
        img: `${crossland.src}`,
    },
    {
        id: 6,
        price: 1.6,
        name: 'Vivaro',
        img: `${vivaro.src}`,
    },
]
export function Config({ setShowModal }: { setShowModal: Dispatch<SetStateAction<boolean>> }) {
    const [mainId,setMainId]=useState('') // id услуги
     function changeMainId(event:ChangeEvent<HTMLInputElement>){
         setMainId(event.target.value)
     }
    //для сервиса 
    const [curIdService,setСurIdService] = useState(0)//id  раздела услуги Сервиса
    const [typeOfServicelId, setTypeOfServicelId] = useState(0) //id  конкретной услуги
    const [carModelId, setCarModelId] = useState(0) //id  машина 
    const priceService = useMemo(() => serviceList.find(model => model.id === curIdService)?. 
    typeOfService.find(type => type.id ===  typeOfServicelId)?.price, [curIdService, typeOfServicelId]); //цена услуги
    const carPrice =  modelListService.find(model => model.id === carModelId)?.price; // коэффициент машины на услугу
    const price = (carPrice && priceService) ? carPrice * priceService : 0 // итоговая цена 
    const imgCarSerivce = useMemo(() => modelListService.find(model => model.id === carModelId)?.img, [carModelId])

    //для покупки
    const [curModelId, setCurModelId] = useState(0) //id машины
    const [complectationlId, setcomplectationId] = useState(0) //id комплектации
    const power = useMemo(() => modelList.find(model => model.id === curModelId)?.
        complectations.find(comp => comp.id === complectationlId)?.power, [curModelId, complectationlId]);
    const engine = useMemo(() => modelList.find(model => model.id === curModelId)?.
        complectations.find(comp => comp.id === complectationlId)?.engine, [curModelId, complectationlId]);
    const transmission = useMemo(() => modelList.find(model => model.id === curModelId)?.
        complectations.find(comp => comp.id === complectationlId)?.transmission, [curModelId, complectationlId]);
    const imgCar = useMemo(() => modelList.find(model => model.id === curModelId)?.img, [curModelId])
    function showModal(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setShowModal(true)
    }

    return (
        <>
            <div className='containerForTitle'>
                <div className='el'><span className='title'>Поможем вам сделать выбор</span></div>
            </div>
            
            <div className='containerForMiniTitle'>Выберите вид услуги:</div>
            <div className='containerForSelectMain'>
              <div className='box1'>
                 <label htmlFor="checkbox1">Покупка авто</label>
                   <input type ="radio" id ="checkbox1" value ="Покупка" name ="mainId" checked ={mainId==='Покупка'} 
                     onChange ={changeMainId} />
             </div>   
             <div className='box1'>
                 <label htmlFor="checkbox3">Тест-драйв</label>
                   <input type ="radio" id ="checkbox3" value ="Ремонт" name ="mainId" checked ={mainId==='Ремонт'} 
                     onChange ={changeMainId} />
              </div>
             <div className='box1'>
                 <label htmlFor="checkbox2">Ремонт авто</label>
                   <input type ="radio" id ="checkbox2" value ="Ремонт" name ="mainId" checked ={mainId==='Ремонт'} 
                     onChange ={changeMainId} />
              </div>
            </div>

            {/* Если выбрали покупку, код ниже */}
            <div className='containerForSelect'>
            {
                   mainId === 'Покупка' &&
                   
                <select className="selectModel" value={curModelId} onChange={event => setCurModelId(+event.target.value)}>
                    <option value={0} selected disabled>Выберите модель</option>
                    {modelList.map(model => <option key={model.id} value={model.id}>{model.name}</option>)}
                </select>
            }
                {
                    curModelId !== 0 &&
                    <select className="selectModel" value={complectationlId} onChange={event => setcomplectationId(+event.target.value)}>
                        <option value={0} selected disabled>Укажите комплектацию</option>
                        {modelList.find(model => model.id === curModelId)?.complectations.map(comp => <option key={comp.id} value={comp.id}>{comp.name}</option>)}
                        {/* {modelList.find(model => model.id === curModelId =>complectation===complectationlId)?.complectation} */}
                    </select>
                }
            </div>
            <div className="twoModel">
                <div className="ColumCard">
                    <div className="titleCard">{modelList.find(model => model.id === curModelId)?.name}</div>
                    <div className="miniTitleCard">{modelList.find(model => model.id === curModelId)?.bodyType}</div>
                    <div className="carImg1"></div>
                    {(curModelId && complectationlId) ? <div className="twoROW">
                        <div className="twoColumCard">
                            <div className="inColum">
                                <div className="row3"> <img className="mini" src={y.src} /> </div>
                                <div className="row">{power}</div>
                                <div className="row1">Мощность</div>
                            </div>
                            <div className="inColum">
                                <div className="space"></div>
                                <div className="spaceJ"></div>
                            </div>
                            <div className="inColum">
                                <div className="row3"> <img className="mini" src={d.src} /> </div>
                                <div className="row">{engine}</div>
                                <div className="row1">Двигатель</div>
                            </div>
                        </div>

                        <div className="twoColumCard">
                            <div className="inColum1">
                                <div className="row3"> <img className="mini" src={t.src} /> </div>
                                <div className="row">{engine}</div>
                                <div className="row1">Разгон до 100км/ч,с</div>
                            </div>
                            <div className="inColum1">
                                <div className="space"></div>
                                <div className="spaceJ"></div>
                            </div>
                            <div className="inColum1">
                                <div className="row3"> <img className="mini" src={u.src} /> </div>
                                <div className="row">{transmission}</div>
                                <div className="row1">Трансмиссия</div>
                            </div>
                        </div>
                    </div> : null}
                    

                    {/* Если выбрали сервис, код ниже */}
          { 
              mainId === 'Ремонт' &&
                    <select className="selectModel" value={carModelId} onChange={event => setCarModelId(+event.target.value)}>
                    <option value={0} selected disabled>Выберите модель вашего авто</option>
                    {modelListService.map(model =><option key={model.id} value={model.id}>{model.name}</option>)}
                </select>
            }
                 

            { 
                 carModelId !== 0 &&
                <select className="selectModel" value={curIdService} onChange={event =>setСurIdService(+event.target.value)}>
                    <option value={0} selected disabled>Выберите вид услуг</option>
                    {serviceList.map(service => <option key={service.id} value={service.id}>{service.name}</option>)}
                </select>
            } 

            {
                curIdService !== 0 &&
                    <select className="selectModel" value={typeOfServicelId} onChange={event =>setTypeOfServicelId(+event.target.value)}>
                        <option value={0} selected disabled>Выберите конкретную услугу</option>
                        {serviceList.find(service => service.id === curIdService)?.typeOfService.map(type =><option key={type.id} value={type.id}>{type.name}</option>)}
                        {/* {modelList.find(model => model.id === curModelId =>complectation===complectationlId)?.complectation} */}
                    </select>
            }
             {(carModelId && curIdService && mainId) ?
                  <div className="ColumCard">
                    <div className="titleCard">{serviceList.find(model => model.id === curIdService)?.name}</div>
                    {/* <div className="miniTitleCard">{modelList.find(model => model.id === curIdService)}</div> */}
                    <div className="carImg2"></div>
                    <div className="inColum">
                            <div className="row1">Цена услуги на ваш авто</div>
                            <div className="row">{price}{' '} &#8381; </div>                    
                    </div>
                
                      
                    <div className="btnCard">
                        <form onSubmit={showModal}>
                            <button className="btn" type="submit">Узнать больше</button>
                        </form>
                    </div>
                </div> : null }
            </div>
            </div>
            <style jsx>{`
.containerForTitle{
    display:flex;
    flex-direction: column;  
    align-items: center;
    margin-top: 60px;
    font-family: 'Montserrat'; 
    background:black;
    color:white;
}
.containerForMiniTitle{
    display:flex;
    flex-direction: column;  
    align-items: center;
    font-family: 'Montserrat'; 
    font-size: 30px;
    margin-top:30px;
}
.title {
    font-size: 40px;
    margin-top:20px;
}
.containerForSelectMain{
    display:flex;
    flex-direction: row;
    justify-content:space-evenly; 
    align-items: center;
    margin-top:50px;
    font-size: 21px;
    font-family: 'Montserrat'; 
    font-weight:bold;
}
.box1{
    display:flex;
    flex-direction: row;
    justify-content:center; 
    align-items:center;
}
.containerForSelect {
    display:flex;
    flex-direction: column;
    justify-content:center;
    margin-top:50px;
    align-items: center;
}
.selectModel {
    width: 300px;
    height: 40px;
    font-size: 19px;
    background-color: #f7ff14;
    margin-top: 20px;
    font-family: 'Montserrat'; 
    border-radius: 5px;
}
.selectModel:hover {
    background-color: black;
    color:#f7ff14;
}

.twoModel {
    display:flex;
    flex-direction: row;
    margin-top:50px;
    justify-content: space-around;

}

.ColumCard {
    display: flex;
    align-items: center;
    flex-direction: row;
    max-height: inherit;

}

.titleCard {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 60px;
    font-weight: 300;
}

.miniTitleCard {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    color: #65656c;
    font-weight: 100;
}

.carImg {
    display: flex;
    width: 600px;
    height: 250px;
    background-image: url('${imgCar}');
    background-size: contain;
    background-repeat: no-repeat
}
.carImg1 {
    display: flex;
    width: 600px;
    height: 250px;
    background-image: url('${imgCar}');
    background-size: contain;
    background-repeat: no-repeat;
}
.carImg2 {
    display: flex;
    width: 600px;
    height: 250px;
    background-image: url('${imgCarSerivce}');
    background-size: contain;
    background-repeat: no-repeat;
}
.twoROW {
    display: flex;
    flex-direction: row;
}
.ColumCard {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

}

.inColum {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    margin-bottom: 80px;
}

.inColum1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    margin-bottom: 80px;
    margin-left: 100px;
}

.row {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    font-family: 'Montserrat', sans-serif;
    font-size: 80px;
    font-weight: 100;
}

.row1 {
    display: inline-flex;
    justify-content: center;
    align-items: baseline;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    color: #65656c;
}

.row3 {
    display: flex;
    justify-content: center;
}

.twoColumCard {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}


.btnCard {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}

.btn {
    font-family: 'Montserrat', sans-serif;
    border-radius: 3px;
    border:none;
    transition: transform.3s ;
    color: #ffffff;

    background-color: #48484d;
    width: 220px;
    height: 50px;
    font-size: 20px;
    padding: 12px;
}



.btn:hover {
    background-color: #f7ff14;
    font-size: 20px;
    border: none;
    font-family: 'Montserrat', sans-serif;
    color:black;
    transform: scale(1.02);
    font-size: 22px
    padding: 10px;
    box-shadow: -3px 15px 9px 3px rgba(34, 60, 80, 0.2);

}
  }
`}</style>

        </>
    )
}