import { useContext } from 'react'
import { SoMeContext } from '../App'

export default function Header() {
    const { appName } = useContext(SoMeContext)
    
    return <h1>{ appName }</h1>
}
