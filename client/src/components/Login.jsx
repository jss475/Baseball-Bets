import { Form, Button } from 'react-bootstrap'
import { useEffect } from 'react'
export default function Login () {

  const handleSubmit = async (e) => {
    e.preventDefault()

    let form = new FormData(document.querySelector('#login-form')) 

    for (let i of form.values) {
       console.log('i', i)
    }
    
    {/* let req = await fetch('/login', {*/}
      {/*method: 'POST',*/}
      {/*body: form*/}
    {/*})*/}

  }
 
  return (

    <form 
      id='login-form' 
      onSubmit={handleSubmit} 
    >
      <input type='text' name='username'/>
      <input type='text' name='password'/>
      <button type='submit'>
        submit
      </button>
    </form>

  )
      {/*<Form id='login-form' onSubmit={handleSubmit}>*/}

        {/*<Form.Group className='my-3'>*/}
          {/*<Form.Label>username:</Form.Label>*/}
          {/*<Form.Control */}
            {/*name='username'  */}
            {/*type='text'*/}
          {/*/>*/}
        {/*</Form.Group>*/}

        {/*<Form.Group className='mb-3'>*/}
          {/*<Form.Label>password:</Form.Label>*/}
          {/*<Form.Control */}
            {/*name='password'*/}
            {/*type='text'*/}
          {/*/>*/}
        {/*</Form.Group>*/}

        {/*<Button variant='primary' type='submit'>*/}
          {/*Submit*/}
        {/*</Button>*/}

      {/*</Form>*/}
  
}
