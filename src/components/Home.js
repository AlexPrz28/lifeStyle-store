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
        <img class="d-block w-100" src= {require('../Imagenes/home.jpeg')} alt="First slide" fluid> 
        </img>
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src={require('../Imagenes/ciclo.JPG')} alt="Second slide" fluid>
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