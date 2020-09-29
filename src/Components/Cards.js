import React, {useState} from 'react'

export const Cards = ({data}) => {
  const [activeCard, setActiveCard] = useState()

  const cardHandler = item => {
    setActiveCard(item.id)
  }

  return (
  <div className="cards-wrapper"> 
    <div className="cards">
      {data.content.map(item => {
        return (
          
          <div key={item.id} className={`wrapper-card ${activeCard === item.id ? 'card-active' : ''}`}>
             <div className="card" style={{backgroundColor: item.color}} onClick={() => cardHandler(item)}>
               <h2 className={`font-title font-${item.abbr}`} >{item.abbr}</h2>
             </div>
             <ul>
              <li className={`font-txt font-${item.abbr}`}><span className="txt">{item.label}</span></li>
             </ul>
           </div>
          )
         })
        }
      </div>
    </div>   
   ) 
}
