import React from 'react'

export const CustomForm = () => {

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(ee)
    }

  return (
    <form
    className='todo'
    onSubmit={handleFormSubmit}
    >
        <div className="wrapper">
            
        </div>
    </form>
  )
}
