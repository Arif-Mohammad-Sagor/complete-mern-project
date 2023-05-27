import React from 'react'
import FoodCard from './FoodCard'

const FoodTab = ({items}) => {
  return (
      <div className='grid grid-cols-3 gap-4 space-x-8'>
          {items.map(item =><FoodCard key={item._id} item={item}></FoodCard>
            )}

    </div>
  )
}

export default FoodTab