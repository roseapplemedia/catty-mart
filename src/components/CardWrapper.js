import React from "react"
import DogCollar from "../images/dog-collars.jpg"
import CatCollar from "../images/cat-collars.jpg"
import Leashes from "../images/leashes.jpg"
import Bandanas from "../images/bandana.jpg"
import Flowers from "../images/flowers.jpg"
import Bows from "../images/bowties.jpg"
import "../css/style.css"

export default function CardWrapper() {
  return (
    <div class="main-grid">
      <div class="main-item dog-collars">
        <h2 class="dog-collars category-tag">dog collars</h2>
        <img class="card__image" src={DogCollar} alt="dog-collars" />
        <ul class="card-desc">
          <li>Polypropylene Webbing (no stretching)</li>
          <li>Washable Cotton Fabric Heavy</li>
          <li>Duty Outdoor Thread</li>
          <li>Aluminum side release Buckles (Engravable)</li>
          <li>Collars adjust tor a perfect fit for your pet</li>
          <li>XSmall, Small, Medium, Large, XLarge</li>
        </ul>
        <button class="card-button">browse dog-collars</button>
      </div>
      <div class="main-item cat-collars">
        <h2 class="cat-collars category-tag">cat collars</h2>
        <img class="card__image" src={CatCollar} alt="dog-collars" />
        <ul class="card-desc">
          <li>Polypropylene Webbing (no stretching)</li>
          <li>Washable Cotton Fabric</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Plastic Quick Release Buckle fro Safety</li>
          <li>Adjustable Collar for a perfect fit for your pet</li>
          <li>Collar is 8" and expands to 13"</li>
        </ul>
        <button class="card-button">browse cat-collars</button>
      </div>
      <div class="main-item leashes">
        <h2 class="leashes category-tag">leashes</h2>
        <img class="card__image" src={Leashes} alt="dog-collars" />
        <ul class="card-desc">
          <li>Polypropylene Webbing (no stretching)</li>
          <li>Washable Cotton Fabric Heavy</li>
          <li>Made ot order by the foot to fit your needs</li>
          <li>By The Foot</li>
        </ul>
        <button class="card-button">browse leashes</button>
      </div>
      <div class="main-item flowers">
        <h2 class="flowers category-tag">flowers</h2>
        <img class="card__image" src={Flowers} alt="dog-collars" />
        <ul class="card-desc">
          <li>Custom Made</li>
          <li>Washable Cotton Fabric Heavy</li>
          <li>Attaches with an elastic cord for a secure hold</li>
          <li>Small, Large</li>
        </ul>
        <button class="card-button">browse flowers</button>
      </div>
      <div class="main-item bandanas">
        <h2 class="bandanas category-tag">bandanas</h2>
        <img class="card__image" src={Bandanas} alt="dog-collars" />
        <ul class="card-desc">
          <li>Washable Cotton Fabric Heavy</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Over-the-collar style to prevent loss</li>
          <li>Small, Medium, Large</li>
        </ul>
        <button class="card-button">browse bandanas</button>
      </div>
      <div class="main-item bows">
        <h2 class="bows category-tag">bows</h2>
        <img class="card__image" src={Bows} alt="dog-collars" />
        <ul class="card-desc">
          <li>Washable Cotton Fabric Heavy</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Attaches with an elastic cord for a secure hold</li>
          <li>Small, Large</li>
        </ul>
        <button class="card-button">browse bows</button>
      </div>
    </div>
  )
}
