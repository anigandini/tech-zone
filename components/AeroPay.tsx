import User from '../interfaces/user.interface'
import AddBalance from './AddBalance'
import RedeemHistory from './RedeemHistory'
import { useState } from 'react'

const AeroPay = (props: {user: User, addPoints: Function}) => {
    const [activeModule, setActiveModule] = useState<'balance'|'history'>('balance')
    
    return <div>
        <div>
            <button className={activeModule === 'balance'? 'active': ''} onClick={()=>setActiveModule('balance')}>Add Balance</button>
            <button className={activeModule === 'history'? 'active': ''} onClick={()=>setActiveModule('history')}>Redeem History</button>
        </div>
        {activeModule === 'balance' ? <AddBalance user={props.user} addPoints={props.addPoints}/> : <RedeemHistory user={props.user}/>}
    </div> 
}

export default AeroPay 