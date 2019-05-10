import React, { Component } from 'react'

export default class Details extends Component {
  render() {
    return (

      <div>
           <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
          </link>

      <div>
       <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>

        <div class="carousel-inner">
        <div class="carousel-item active">
        <img class="d-block w-100" src="https://media.gucci.com/content/DiaryHeroArticle_Standard_1600x812/1547391604/DiaryHeroArticle_ForeverGuilty-Campaign_001_Default.jpg" alt="First slide">
        </img>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="https://fashionista.com/.image/t_share/MTU2OTYwMDIzNTU2MTM4NzAy/givenchy-fall-2018-ad-campaign.png" alt="Second slide">
            </img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://eu.louisvuitton.com/images/is/image/lv/1/VE_DI3_L/louis-vuitton--1394_LVNow_The_Womens_Spring-Summer_2019_Campaign_Photos_3_DI3.jpg" alt="Third slide">
            </img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://trace.tv/wp-content/uploads/2017/11/Calvin-Klein-our-family-my-calvins-the-impression-07.jpg"alt="Fourth slide">
            </img>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0094/2252/files/1_6f082ea2-a45e-4e30-8a09-cd9e9b96d1fa.jpg?v=1549467773" alt="Fifth slide">
            </img>
          </div>
        </div>

        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
       
       </div>

      
       <div class="carousel-item">
        <img src="https://cdn.wallpaper.com/main/styles/responsive_1460w_scale/s3/vr_kunsthal18_int_0753_embed-.jpg?itok=JMWtR30Q" alt="indicador">
        </img>
        <div class="carousel-caption d-none d-md-block">
          <h5>...</h5>
          <p>...</p>
        </div>
      </div>
      </div>
      </div>

      

      
    )
  }
}