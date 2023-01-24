import HomeStyles from './Home.module.css';
import background from "../assets/img/home.jpeg"

function Home() {
  return (
    <div class={HomeStyles.home} style={{backgroundImage: `url(${background})`}}>
        <h1 className={HomeStyles.homeTitle}>The south coast is calling...</h1>
        <button className="btn">Check availability</button>
    </div>
  )
}
export default Home