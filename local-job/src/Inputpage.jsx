import  { useState }  from 'react';
import {useNavigate} from 'react-router-dom'
import './Inputpage.css'

function Inputpage() {
  
  let [place, setPlace]= useState('select');
  let [qualification, setQualification]= useState('select');

  let navigate= useNavigate();
  function handelplace(e){
      setPlace(e.target.value);
  }

  function handelqualification(e) {
       setQualification(e.target.value);
  }

  function handelsubmit(e) {
    if (place === 'select' || qualification === 'select') {
      e.preventDefault();
      alert('Select all values');
    }else{
       navigate('/jobs/'+ place +'/' + qualification);
    }
  }

  return (
    <div className='fulldiv'>
    <div className='carddiv'>
      <h1>search for jobs.</h1>
            <form onSubmit={handelsubmit} className='inputdiv' method='get' action=''>
              
              <label htmlFor='place'>Place</label>
            <select id='place' onChange={handelplace} value={place}>
                <option value='select' disabled >Select</option>
                <option value='dehradun'>Dehradun</option>
                <option value='tehriGarhwal'>Tehri Garhwal</option>
                <option value='haridwar'>Haridwar</option>
                <option value='rishikesh'>Rishikesh</option>
                <option value='pauri'>Pauri</option>
                <option value='uttarkashi'>Uttarkashi</option>
            </select>

            <label htmlFor='qualification'>Qualification</label>
            <select id='qualification' onChange={handelqualification} value={qualification}>
               <option value='select' disabled>Select</option>
                <option value='10'>10 th</option>
                <option value='12'>12 th</option>
                <option value='bachelors'>Bachelers</option>
             </select>

             <button type='submit'>Show me jobs</button>
             
             </form>
    </div>
    </div>
  )
}

export default Inputpage