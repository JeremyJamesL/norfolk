import PageStyles from './Page.module.css';
import background from "../assets/img/view-2.jpg";
import diningImg from "../assets/img/dining.jpg";
import studyImg from "../assets/img/study.jpg";
import { Link } from 'react-router-dom';


function About() {
  return (
    <>
    <div className={PageStyles.hero} style={{backgroundImage: `url(${background})`}}>
      <div className="row" style={{textAlign: "left"}}>
        <h1 className={PageStyles.title}>About the house</h1>
      </div>  
    </div>

    <main class={PageStyles.main}>
      <div className={`row ${PageStyles.columnHalf}`}>
          <div>
              <img src={diningImg} alt="" className={PageStyles.halfImg} />
          </div>
          <div>
            <h2 className={PageStyles.headingSecondary}>
                Your perfect family vacation home
            </h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh libero, cursus nec ultricies non, lacinia sit amet velit. Integer euismod ex risus, ac posuere risus tincidunt non. Duis aliquam eros in felis suscipit, a vulputate leo mattis. Phasellus finibus molestie tellus, eget venenatis nibh commodo quis. Nam in hendrerit felis. 
            <br/>
            <br/>
            Duis aliquam eros in felis suscipit, a vulputate leo mattis. Phasellus finibus molestie tellus, eget venenatis nibh commodo quis. Nam in hendrerit felis. 
            </p>
          </div>
      </div>

      <div className="row">
      <div className={PageStyles.divider}></div>
      </div>

      <div className={`row ${PageStyles.columnThird}`}>
        <div className="">
        <h2 className={PageStyles.headingSecondary}>
            Amenities
        </h2>
        <ul className={PageStyles.amenitiesList}>
          <li>Large Master suite with King bed and jacuuzi tub</li>
          <li>2 bedrooms upstairs, each with king beds</li>
          <li>Three sleep sofas</li>
          <li>Large living area with three sofas</li>
          <li>Wrap around porch</li>
          <li>Beautiful sunroom with forest and mountain views</li>
          <li>Wooden deck overlooking a creek</li>
          <li>Game room with pool table and foosball</li>
          <li>Parking for multiple cars</li>
          <li>Large, fully equipped kitchen with granite counter tops</li>
        </ul>
        </div>
        <div className="">
          <img src={studyImg} alt="" className={`mb-3 ${PageStyles.halfImg}`}/>
          <button className="btn btn--black">
            <Link to="/availability">
              Check availability
            </Link>
          </button>
        </div>
      </div>
    </main>

    </>
  )
}
export default About