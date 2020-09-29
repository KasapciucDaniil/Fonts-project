import React, {useState, useEffect} from 'react'
import _ from 'lodash'

import { Cards } from './Components/Cards'
import { BuyFont } from './Components/BuyFont'
import { Loader } from './Components/Loader'

function App() {
  const [type, setType] = useState('-')
  const [data, setData] = useState({}) 
  const [tabs, setTabs] = useState([])
  const [activeTab, setActiveTab] = useState()

  const fetchData = async item => {
    setActiveTab(item.id)
    setType(item.content_endpoint)
    setData({})
    const response = await fetch(`http://json.ffwagency.md/${item.content_endpoint}`)
    const data = await response.json()
    setData(data)
  }

  const fetchTabs = async () => {
    const response = await fetch('http://json.ffwagency.md/tabs')
    const data = await response.json()
    setTabs(data)
  }

  useEffect(() => {
    fetchTabs()
  }, [])

  return (
    <div className="app">
      <div className="header">
        <div className="title"><h2 className="display-4" style={{fontSize: '40px'}}>Please select font</h2></div>
        <div className="tabs">
          <ul className="nav nav-tabs">
            {
              tabs.length > 0
                ? tabs.map(tab => (
                  <li 
                    key={tab.id} 
                    className={`nav-item ${activeTab === tab.id ? 'tab-active' : ''}`}
                  >
                    <span
                      className="nav-link"
                      onClick={() => fetchData(tab)}
                    >
                      {tab.label}
                    </span>
                  </li>
                ))
                : <Loader />
            }
          </ul>
        </div>
      </div>
      <div className="content">
        {
          _.isEmpty(data)
            ? <h1 className="display-4" style={{textAlign: 'center', marginTop: '2rem'}}>Select Fonts!</h1>
            : type === 'fonts_a'
              ? <Cards data={data} />
              : <BuyFont data={data} />
        }
      </div>
    </div>
  )
}

export default App

