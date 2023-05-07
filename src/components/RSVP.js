import React,{ useState } from 'react';
import ThankYou from './thankyou';


function RSVP () {
  const [count, setCount] = useState(0);
  const handleClick = ()=>{
    setCount(count+1)
  }

  return (
    <div
      id='rsvp'
      className='section-padding bg-img bg-fixed'
    >
    {
      count===1?<ThankYou/>:
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-6 bg-white p-40'>
            {' '}
            <span className='oliven-title-meta text-center'>Will you attend?</span>
            <h2 className='oliven-title text-center'>R.S.V.P</h2>
            <br />
            <form method='post' className='row' onSubmit={handleClick}>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    required
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='email' className='form-control' placeholder='Email' />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Guests'
                  />{' '}
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <textarea
                    name='message'
                    id='message'
                    cols='30'
                    rows='7'
                    className='form-control'
                    placeholder='Message'
                  ></textarea>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='form-group'>
                  <input type='submit' className='btn buttono' value='SEND' />{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    }
      
    </div>
  )
}

export default RSVP
