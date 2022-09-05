<template>
  <div class="section pd-top-bottom-200px wf-section">
    <div class="container-default w-container">
      <div class="top-content portfolio-top-content">
        <div class="split-content portfolio-left content-overlay">
          <h2 class="title portfolio">Take a look at my projects</h2>
          <img src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112bdfb2b341387dfa368b4_portfolio-underline-personal-x-template.svg"
               class="image portfolio-underline"/>
        </div>
      </div>
      <div class="home-portfolio-slider-main-wrapper">
        <div>
          <div class="home-portfolio-slider-mask w-slider-mask flex-direction-column"
               id="w-slider-mask-0">
            <div role="group"
                 class="home-portfolio-slide w-slide"
                 style="transform: translateX(0px); opacity: 1">
              <div class="w-dyn-list" v-for="project in projects"
                   :key="project.id">
                <div role="list" class="w-dyn-items">
                  <div role="listitem" class="w-dyn-item more-projects-width">
                    <a class="card home-portfolio-card w-inline-block flex-direction-row">
                      <div class="image-wrapper portfolio-card">
                        <h3 class="title home-portfolio-card">{{project.title}}</h3>
                        <div class="wg-box-content">
                          <a>
                            <div class="wg-box-content-overlay"></div>
                            <img :src="project.image" alt="Todo List Mobile App Redesign"
                              sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, 575px"
                              class="border-radius image"/>
                            <div class="wg-box-content-details wg-box-fadeIn-bottom">
                              <h3 class="wg-box-content-title">{{project.role}}<br>{{project.role2}}</h3>
                              <p class="wg-box-content-text">{{project.year}}</p>
                              <p class="wg-box-content-text">{{project.description}}</p>
                              <p class="wg-box-content-text">{{project.reference}}</p>
                            </div>
                          </a>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        projects: [
          {
            name: 'Ağaoğlu Maslak 1453',
            role:'Project Manager - AB Section',
            role2:'Head of Construction Group 1',
            year: '10.2014 - 10.2018',
            description: '870 000m2, 3880 Residences, 1000 Offices, University, Shopping Mall, Hotel, 10 Cinema Halls, 3 Congress Halls, 32 Blocks between 11 and 51 variable floors',
            img: require('assets/image/Maslak-1453.jpg'),
            reference: 'Reference: Abdullah Murad ACAR - General Coordinator'
          },
          {
            name: 'Ağaoğlu My Home Ayazağa',
            role:'Deputy Project Manager',
            role2:'Decoration Works Manager',
            year: '05.2013 - 10.2014',
            description: '260000m2, 800 Residences,  100 Offices, Markets,  3 Blocks with 41 floors',
            img: require('assets/image/MyHomeAyazağa.jpg'),
            reference: 'Reference: Adem Yıldırım - Project Manager'
          },
          {
            name: 'Dünya Göz Hospital',
            role:'Project Manager',
            year: '02.2011 - 06.2011',
            description: '2500m2 Construciton Zone',
            img: require('assets/image/dunyagoz-pendik.jpg'),
            reference: 'Reference: Enver Küçükalı (Serpent Architecture)'
          },
          {
            name: 'Vodafone Digital Operations Center',
            role:'Project Manager',
            year: '10.2009 - 02.2011',
            description: '19000m2 Construciton Zone',
            img: require('assets/image/Vodafone.png'),
            reference: 'Reference: Enver Küçükalı (Serpent Architecture)'
          },
          {
            name: 'WOW Congress Center Istanbul',
            role:'Site Chief',
            year: '06.2011 - 04.2012',
            description: '15000m2 Construciton Zone',
            img: require('assets/image/wow.webp'),
            reference: 'Reference: Muzaffer Küpe'
          }
        ],
      }
    },
    async fetch() {
      this.projects = await fetch(
        'https://api.nuxtjs.dev/rivers'
      ).then(res => res.json())
    },
  }
</script>
<style>
  .top-content.portfolio-top-content {
     margin-bottom: 0px!important; 
}
  .main-title{
  color: #2d2d2d;
  text-align: center;
  text-transform: capitalize;
  padding: 0.7em 0;
  }
  .container{
  padding: 1em 0;
  }

    @media screen and (max-width: 500px){
  

.wg-box-content-details{
    line-height: 11px;
    padding:0px;
}
  }
  @media screen and (max-width: 640px){
  .container{
  display: block;
  width: 100%;

  }
  .wg-box-content-details p {

line-height: 1;

}
  }
  @media screen and (max-width: 480px){
  }
  .container .title{
  color: #1a1a1a;
  text-align: center;
  margin-bottom: 10px;
  }
  .content {
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: auto;
  overflow: hidden;
  }
  .content .content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 99%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  }
  .content:hover .content-overlay{
  opacity: 1;
  }
  .content-image{
  width: 100%;
  }
  .content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  }
  .content:hover .content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
  }
  .content-details h3{
  color: #fff;
  font-weight: 500;
  letter-spacing: 0.15em;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  }
  .content-details p{
  color: #fff;
  font-size: 0.8em;
  }
  .fadeIn-bottom{
  top: 80%;
  }
  .fadeIn-top{
  top: 20%;
  }
  .fadeIn-left{
  left: 20%;
  }
  .fadeIn-right{
  left: 80%;
  }
  .wg-box-content {
  position: relative;
  width: 97%;
  overflow: hidden;
  }
  .wg-box-content .wg-box-content-overlay {
  background: rgba(0,0,0,0.7);
  position: absolute;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  opacity: 0;
  -webkit-transition: all 0.4s ease-in-out 0s;
  -moz-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  border-radius: 23px;
  }
  .wg-box-content:hover .wg-box-content-overlay{
  opacity: 1;
  }
  .wg-box-content-image{
  width: 100%;
  }
  .wg-box-content-details {
  position: absolute;
  text-align: center;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
  top: 50%;
  left: 50%;
  opacity: 0;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  -webkit-transition: all 0.3s ease-in-out 0s;
  -moz-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
  }
  .wg-box-content:hover .wg-box-content-details{
  top: 50%;
  left: 50%;
  opacity: 1;
  }
  .wg-box-content-details h3{
  color: #fff;
  font-weight: 500;
  margin-bottom: 0.5em;
  text-transform: uppercase;
  }
  .wg-box-content-details p{
  color: #fff;
  font-size: 0.8em;
  }

  @media screen and (max-width: 480px){
    .wg-box-content-details p {
      font-size: 0.6em;
    }
  }

  @media screen and (max-width: 768px){
    
  }
  
  .wg-box-fadeIn-bottom{
  top: 80%;
  }
  .background-color-projects {
  background: linear-gradient(180deg, #F5F5F3, #A09881);
  }
  
</style>