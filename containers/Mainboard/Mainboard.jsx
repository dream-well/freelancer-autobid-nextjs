import React from 'react'
import Payment from './Payment'
import projects from './projects'

function calcUSD(budget, currency){
  return parseInt(budget * currency.exchange_rate)
}

function Mainboard() {
  return (
    <div className='flex-grow px-8'>
      <div className='font-bold text-2xl'>My Job Feed</div>
      <div>
        {
          projects.map( (project, index) => (
            <div className='flex flex-col py-4' key={index}>
              <div className='flex items-center'>
                <div className='pr-4'>
                  <img 
                    src={"https://freelancer.com" + project.client.location.country.flag_url} 
                    title={project.client.location.country.name}
                  />
                </div>
                <div className='text-sm'>
                  {calcUSD(project.budget.minimum, project.currency)} ~ {calcUSD(project.budget.maximum, project.currency)} $
                </div>
                { project.client.status.payment_verified && <Payment /> }
              </div>
              <a className='font-bold text-xl' href={'https://freelancer.com/jobs/' + project.seo_url} target="_blank">
                {project.title}
              </a>
              <div className='text-sm pt-2'>
                {project.preview_description}
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Mainboard
