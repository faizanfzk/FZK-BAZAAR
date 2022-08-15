import React from 'react'
import { HomeProducts } from './HomeProducts'
import { HNews } from './NewsLetter'
import "./Home.css"
export const Home = () => {
  return (
    <div className='imp'>
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"400px"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/WLA/July/PFS_Unrechero/D50756151_WLA_GW_Heroes_Unrec__Tall_Hero_3000x1200._CB632954420_.jpg"class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"400px"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wearables/Unrec/GW/August/Unrec_DesktopTallHero_3000x1200._CB630557043_.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img style={{height:"400px"}} src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/HomeImprovement/AugART/Landing/3000x1200._CB629216944_.jpg"  class="d-block w-100" alt="..."/>
    </div> 
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<HNews/>
<HomeProducts/>
    </div>
  )
}
