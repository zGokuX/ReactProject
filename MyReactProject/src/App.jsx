import './App.css'
import UpBar from './upbar-component'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <title>Home</title>
      <main>
        <UpBar />
        <div className='container-desc'>
          <h2>Benvenuto nella home della mia pagina!</h2>
          <span>Qui sei nella home principale, fatti un giro per scoprire al meglio la mia pagina. </span>
          <Link to={'/about'}>Clicca qui per sapere qualcosa sulla mia pagina</Link>
        </div>
      </main>
    </>
  )
}