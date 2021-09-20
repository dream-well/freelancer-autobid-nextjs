import React, {useState, useEffect} from 'react'
import skills from './skills'
import axios from 'axios'

function Settings() {
  const [fixed, setFixed] = useState(0)
  const [hourly, setHourly] = useState(0)
  
  const [payment, setPayment] = useState(true)

  const [country, setCountry] = useState("")
  const [countryX, setCountryX] = useState("")
  
  const [countries, setCountries] = useState([])
  const [countriesX, setCountriesX] = useState([])

  const addCountry = (country) => {
    countries.push(country)
    setCountries([...countries])
    setCountry("")
  }

  const addCountryX = (country) => {
    countriesX.push(country)
    setCountriesX([...countriesX])
    setCountryX("")
  }

  const removeCountry = (country) => {
    countries.splice(countries.indexOf(country), 1)
    setCountries([...countries])
  }
  const removeCountryX = (country) => {
    countriesX.splice(countriesX.indexOf(countryX), 1)
    setCountriesX([...countriesX])
  }

  const saveSettings = () => {
    const settings = {
      fixed, hourly, payment, countries, countriesX
    }
    axios.post('/api/settings', settings).then(( response ) => {
      alert(response.data)
    }).catch(e => {
      alert("error")
    })
  }

  useEffect(async () => {
    const settings = (await axios.get('/api/settings')).data
    const { fixed, hourly, countries, countriesX, payment } = settings
    setFixed(fixed)
    setHourly(hourly)
    setCountries(countries)
    setCountriesX(countriesX)
    setPayment(payment)
  }, [])

  return (
    <div className='w-60 pl-8 flex flex-col'>
      <div className='font-bold text-xl pb-2'>
        Settings
      </div>
      <div className='py-2 border-t'>
        <div className='font-medium text-lg'>
          Budget
        </div>
        <div className='flex pt-2'>
          Fixed: &nbsp;
          <input 
            value={fixed}
            onChange={ e => setFixed(e.target.value) }
            className='text-right outline-none border-b w-16 px-1 ml-2'/>$ ~
        </div>
        <div className='flex pt-2'>
          Hourly: 
          <input 
            value={hourly}
            onChange={ e => setHourly(e.target.value) }
            className='text-right outline-none border-b w-16 px-1 ml-2'/>$ ~
        </div>
      </div>
      <div className='py-2 border-t'>
        <div className='font-medium text-lg'>
          Client
        </div>
        <div className='flex items-center pt-2'>
          Payment Verified
          <input type="checkbox" className='ml-2' checked={payment} onChange={e => setPayment(e.target.value)}/>
        </div>
        <div className='pt-2 flex-col'>
          <div className='flex'>
            Include 
            <input 
              value={country}
              onChange={ e => setCountry(e.target.value) }
              onKeyPress= { e => e.key == "Enter" && addCountry(country) }
              className='text-right outline-none border-b w-24 px-1 ml-2'/>➕
          </div>
          <div className='flex flex-wrap pt-2'>
            {
              countries.map( country => (
                <div className='border rounded w-auto px-2 mr-1 mb-2'>{country} <span onClick={() => removeCountry(country)}>❎</span></div>
              ))
            }
          </div>
        </div>
        <div className='pt-2'>
          <div className='flex'>
            Exclude 
            <input 
              value={countryX}
              onChange={ e => setCountryX(e.target.value) }
              onKeyPress= { e => e.key == "Enter" && addCountryX(countryX) }
              className='text-right outline-none border-b w-24 px-1 ml-2'/>➕
          </div>
          <div className='flex flex-wrap pt-2'>
            {
              countriesX.map( country => (
                <div className='border rounded w-auto px-2 mr-1 mb-2'>{country} <span onClick={() => removeCountryX(country)}>❎</span></div>
              ))
            }
          </div>
        </div>
      </div>
      <button className='border' onClick={saveSettings}>
        Save Settings
      </button>
      {/* <div className='py-2 border-t'>
        <div className='font-medium text-lg'>
          Your skills
        </div>
        <div className='pt-2'>
          {
            skills.map(skill => (
              <div>
                {skill}
              </div>
            ))
          }
        </div>
      </div> */}
    </div>
  )
}

export default Settings
