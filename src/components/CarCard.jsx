import React from 'react'

const CarCard = ({car}) => {

    const cuttency = import.meta.env.VITE_CURRENCY
  return (
    <div className='group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all cursor-pointer duration-500'>
      

      <div className='relative h-48 overflow-hidden'>
        <img src={car.image} alt="Car Image" className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' />

        {car.isAvailable && <p className='absolute top-4 left-4 bg-primary/90 text-white text-xs px-2.5 py-1 rounded-full'>Available Now</p>}
        <div className='absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
        <span className='font-semibold'>{currency}{car.pricePerDay}</span>
        <span className='text-sm text-white/80'> / day</span>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default CarCard
