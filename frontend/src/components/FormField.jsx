import React from 'react'

const FormField = ({labelName,type,name,placeholder,value,handleChange,isSuprizeMe,handleSuprizeMe}) => {
  return (
    <>
    <div>
      <div className="flex items-center gap-2 mb-2">
         <label htmlFor={name} className='block text-sm font-medium text-gray-900'>{labelName}</label>
         {isSuprizeMe && (<button type='button' onClick={handleSuprizeMe} className='font-semibold text-xs bg-[#EcECF1] py-1 px-2 rounded-[5px] text-black'>Surprize Me</button>)}
      </div>
      <input
      type
      />
    </div>
    </>
  )
}

export default FormField