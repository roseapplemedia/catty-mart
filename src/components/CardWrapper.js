import React from "react"
import DogCollar from "../logo-images/dog-collars.jpg"
import CatCollar from "../logo-images/cat-collars.jpg"
import Leashes from "../logo-images/leashes.jpg"
import Bandanas from "../logo-images/bandana.jpg"
import Flowers from "../logo-images/flowers.jpg"
import Bows from "../logo-images/bowties.jpg"
import "../css/style.css"
import { Link } from "gatsby"

export default function CardWrapper() {
  return (
    <div className="main-grid">
      <div className="main-item dog-collars">
        <h2 className="dog-collars category-tag">dog collars</h2>
        <img className="card__image" src={DogCollar} alt="dog-collars" />
        <ul className="card-desc">
          <li>Polypropylene Webbing (no stretching)</li>
          <li>Washable Cotton Fabric</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Engravable Aluminum side release Buckles</li>
          <li>Collars adjust for a perfect fit</li>
          <li>XSmall, Small, Medium, Large, XLarge</li>
        </ul>
        <Link to="../dog-collars">
          <button className="card-button">browse dog-collars</button>
        </Link>
      </div>

      <div class="main-item cat-collars">
        <h2 class="cat-collars category-tag">cat collars</h2>
        <img class="card__image" src={CatCollar} alt="dog-collars" />
        <ul class="card-desc">
          <li>Polypropylene Webbing (no stretching)</li>
          <li>Washable Cotton Fabric</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Plastic Quick Release Buckle for Safety</li>
          <li>Adjustable Collar for a perfect fit</li>
          <li>Collar is 8" and expands to 11"</li>
        </ul>
        <Link to="../cat-collars">
          <button className="card-button">browse cat-collars</button>
        </Link>
      </div>
      <div class="main-item leashes">
        <h2 class="leashes category-tag">leashes</h2>
        <img class="card__image" src={Leashes} alt="dog-collars" />
        <ul class="card-desc">
          <li>Polypropylene Webbing (no stretching)</li>
          <li>Washable Cotton Fabric</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Made to order by the foot</li>
        </ul>
        <Link to="../leashes">
          <button class="card-button">browse leashes</button>
        </Link>
      </div>

      <div class="main-item flowers">
        <h2 class="flowers category-tag">flowers</h2>
        <img class="card__image" src={Flowers} alt="dog-collars" />
        <ul class="card-desc">
          <li>Custom Made</li>
          <li>Washable Cotton Fabric</li>
          <li>Attaches with an elastic cord for a secure hold</li>
          <li>Small, Large</li>
        </ul>
        <Link to="../flowers">
          <button class="card-button">browse flowers</button>
        </Link>
      </div>
      <div class="main-item bandanas">
        <h2 class="bandanas category-tag">bandanas</h2>
        <img class="card__image" src={Bandanas} alt="dog-collars" />
        <ul class="card-desc">
          <li>Washable Cotton Fabric</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Over-the-collar style to prevent loss</li>
          <li>Small, Medium, Large</li>
        </ul>
        <Link to="../bandanas">
          <button class="card-button">browse bandanas</button>
        </Link>
      </div>
      <div class="main-item bows">
        <h2 class="bows category-tag">bows</h2>
        <img class="card__image" src={Bows} alt="dog-collars" />
        <ul class="card-desc">
          <li>Washable Cotton Fabric</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Attaches with an elastic cord for a secure hold</li>
          <li>Small, Large</li>
        </ul>
        <Link to="../bows">
          <button class="card-button">browse bows</button>
        </Link>
      </div>
    </div>
  )
}
