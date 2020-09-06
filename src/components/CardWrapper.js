import React from "react"
import "../css/style.css"
import { Link } from "gatsby"
import { Image } from "cloudinary-react"

export default function CardWrapper() {
  return (
    <div className="main-grid">
      <div className="main-item dog-collars">
        <h2 className="dog-collars category-tag">dog collars</h2>
        <Image
          cloudName="roseapplemedia"
          publicId="/catty/dog-collars.jpg"
          className="card-image"
          width="275"
          // radius="max"
          crop="fill"
          gravity="auto"
          fetchFormat="auto"
          quality="auto"
          secure="true"
        ></Image>
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
        <Image
          cloudName="roseapplemedia"
          publicId="/catty/cat-collars.jpg"
          className="card-image"
          width="300"
          crop="fill"
          gravity="auto"
          fetchFormat="auto"
          quality="auto"
          secure="true"
        ></Image>
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
        <Image
          cloudName="roseapplemedia"
          publicId="/catty/leashes.jpg"
          className="card-image"
          width="300"
          crop="fill"
          gravity="auto"
          fetchFormat="auto"
          quality="auto"
          secure="true"
        ></Image>
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
        <Image
          cloudName="roseapplemedia"
          publicId="/catty/flowers.jpg"
          className="card-image"
          width="300"
          crop="fill"
          gravity="auto"
          fetchFormat="auto"
          quality="auto"
          secure="true"
        ></Image>
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
        <Image
          cloudName="roseapplemedia"
          publicId="/catty/bandana.jpg"
          className="card-image"
          width="300"
          crop="fill"
          gravity="auto"
          fetchFormat="auto"
          quality="auto"
          secure="true"
        ></Image>
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
        <h2 class="bows category-tag">bow-ties</h2>
        <Image
          cloudName="roseapplemedia"
          publicId="/catty/bowties.jpg"
          className="card-image"
          width="300"
          crop="fill"
          gravity="auto"
          fetchFormat="auto"
          quality="auto"
          secure="true"
        ></Image>
        <ul class="card-desc">
          <li>Washable Cotton Fabric</li>
          <li>Heavy Duty Outdoor Thread</li>
          <li>Attaches with an elastic cord for a secure hold</li>
          <li>Small, Large</li>
        </ul>
        <Link to="../bows">
          <button class="card-button">browse bow-ties</button>
        </Link>
      </div>
    </div>
  )
}
