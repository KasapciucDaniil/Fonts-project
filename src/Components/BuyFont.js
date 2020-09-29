import React from 'react'

export const BuyFont = ({ data }) => {
   console.log(data)
   return (
      <div>
        <h4 className="display-4 buy-txt" style={{textAlign: 'center', marginTop: '2rem'}}>{data.content}</h4>  
      </div> 
   ) 
}