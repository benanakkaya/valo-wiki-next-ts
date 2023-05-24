import React from 'react'
import { AgentType } from '../types/Types'
import AgentCard from './AgentCard'

type PropTypes = {
  agents: Array<AgentType>
}

const AgentList:React.FC<PropTypes> = ({agents}) => {

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {agents.map(agent => (
            <AgentCard agent={agent}  />
        ))}
    </div>
  )
}

export default AgentList