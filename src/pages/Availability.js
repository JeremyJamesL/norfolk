import AvailabilityStyles from "./Availability.module.css";
import PageStyles from './Page.module.css';
import background from "../assets/img/sauna.jpeg";

function Availability() {
  return (
    <div>
       <div className={`${PageStyles.hero} mb-3`} style={{backgroundImage: `url(${background})`}}>
        <div className="row" style={{textAlign: "left"}}>
          <h1 className={PageStyles.title}>Availability</h1>
        </div>  
      </div>
      <main class={PageStyles.main}>
        <div className="row text-center mb-3">
        <h2 class={PageStyles.headingSecondary} style={{textAlign: 'center'}}>
            For more information contact
        </h2>
        <p>
            bookings@norfolkgerringong.com.au
        </p>
        </div>
      </main>
    </div>
  )
}
export default Availability