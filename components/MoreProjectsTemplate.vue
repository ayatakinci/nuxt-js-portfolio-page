<template>
  <div role="group"
    class="home-portfolio-slide w-slide"
    style="transform: translateX(0px); opacity: 1">
    <div class="w-dyn-list padding-top2">
      <div role="list" class="w-dyn-items">
        <div role="listitem" class="w-dyn-item more-projects-width">
          <a  class="card home-portfolio-card w-inline-block flex-direction-row">
            <div class="image-wrapper portfolio-card">
              <h3 class="title home-portfolio-card">{{ project.name }}</h3>
              <div class="wg-box-content">
                <a href="#">
                    <div class="wg-box-content-overlay"></div>
                    <img
                        :src="project.picture"
                        sizes="(max-width: 479px) 93vw, (max-width: 767px) 90vw, 575px"
                        class="border-radius image"
                        />
                    <div class="wg-box-content-details wg-box-fadeIn-bottom">
                        <h3 class="wg-box-content-title"></h3>
                        <p class="wg-box-content-text">{{ project.description }}</p>
                    </div>
                </a>
              </div>
          </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
      props: ["project", "onDelete"]
  };
</script>