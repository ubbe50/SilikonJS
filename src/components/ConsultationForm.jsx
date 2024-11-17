import React, { useState} from 'react'

const ConsultationForm = () => {


  const [formData, setFormData] = useState({ fullName: '', email: '', specialist: ''})
  const [errors, setErrors] = useState({ })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({...formData, [name]: value})

    if (value.trim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: "This field is required."}))

        } else {
          setErrors(prevErrors => ({...prevErrors, [name]: ''}))

     }
  }
    const handleOk = () => {
      setSubmitted(false)
    }
    const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await fetch('https://win24-assignment.azurewebsites.net/api/forms/contact', {
      method: 'post',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      setSubmitted(true)
      setFormData({ fullName: '', email: '', specialist: '' })
    }
      if (submitted) {
        return (
          <div className="informationbox">
            <h1>Vi återkommer så snart vi kan!</h1>
            <button className="btn-primary" onClick={handleOk}>OK</button>
          </div>
        )
      }
  
  } 

  
    
  
    return (

    <div className='pop-up'>
    <form onSubmit={handleSubmit} noValidate className='consultation-form'> 
        <div className="headline">
            <h1 className='h2'>Get a free Consultation</h1>
        </div>
        <div className="body">
          <div className="form-group">
             <label htmlFor="fullName">Full Name</label>
            <input type="text" name='fullName' id= "fullName" value={formData.fullName} onChange={handleChange}  required placeholder=''/><br/>
            <p className='error'>{errors.fullName && errors.fullName}</p>

            </div>
            
            <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id= "email" value={formData.email} onChange={handleChange} required placeholder=''/><br/>
            <p className='error'>{errors.email && errors.email}</p>
            </div>
            <div className="form-group">
            <label htmlFor="specialist">Specialist</label>
            <select 
            id='specialist'
            name='specialist'
            value={formData.specialist}
            onChange={handleChange}
            required
          >
            <option value="">select specialist</option>
            <option value="Consultation">Consultation</option>
            <option value="Support">Support</option>
            <option value="Training">Training</option>
          </select>
          <p className='error'>{errors.specialist && errors.specialist}</p>
          </div>
            <button className="btn btn-primary"type='submit'>Make an appointment</button>
        </div>
    </form>
    </div>
    
  )
}

export default ConsultationForm