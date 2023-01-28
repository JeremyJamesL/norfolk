import HomeStyles from './Home.module.css';
import background from "../assets/img/view.jpg"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div class={HomeStyles.home} style={{backgroundImage: `url(${background})`}}>
        <h1 className={HomeStyles.homeTitle}>The south coast is calling...</h1>
        <button className="btn">
        <Link to="/availability">
          Check availability
        </Link>  
        </button>
    </div>
  )
}
export default Home