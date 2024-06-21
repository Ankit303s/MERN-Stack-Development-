import logo from './images/logo.png'
import './card.css'


const Card = () => {
    return (
        <div className="card">
            <img src={logo} alt="Alex image" className="card-img"/>
            <h1 className="card-title">Alex Gamerz</h1>
            <p className="card-des">Alex Gamerz is famous indian Minecraft Animator.</p>
        </div>
    )
}
export default Card