<template>
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration="400"
    data-w-id="58db7844-5919-d71b-dd74-2323ed8dffe9"
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    class="header w-nav navbar-scroll-animation"
    style="opacity: 1"
    id="navigation-bar"
    >
    <div class="container-default w-container">
      <div class="header-wrapper">
        <div class="split-content header-right">
          <a
            href="/"
            aria-current="page"
            class="brand w-nav-brand w--current"
            aria-label="home"
            >
            <img
              src="~/assets/image/Logo.png"
              alt="You X Webflow Template - Logo"
              class="header-logo"
              />
            <NuxtLink to="/"></NuxtLink>
          </a>
        </div>
        <div class="split-content header-center">
          <nav role="navigation" class="nav-menu w-nav-menu">
            <ul role="list" class="header-navigation">
              <li class="nav-item-wrapper"  >
                <a>
                  <NuxtLink aria-current="page" class="nav-link w--current opacity" to="/">Home</NuxtLink>
                </a>
              </li>
              <li class="nav-item-wrapper"  >
                <a>
                  <NuxtLink class="nav-link opacity" to="/AboutPage">About</NuxtLink>
                </a>
              </li>
              <li class="nav-item-wrapper">
                <a >
                  <NuxtLink  class="nav-link opacity" to="/Gallery">Gallery</NuxtLink>
                </a>
              </li>
              <li class="nav-item-wrapper">
                <div
                  data-hover="false"
                  data-delay="0"
                  data-w-id="db29b40c-7868-3d9a-45ad-267063d37dd8"
                  class="nav-link-dropdown w-dropdown"
                  style="max-width: 1248px"
                  >
                  <div
                    class="nav-link dropdown w-dropdown-toggle "
                    id="w-dropdown-toggle-0"
                    aria-controls="w-dropdown-list-0"
                    aria-haspopup="menu"
                    aria-expanded="false"
                    role="button"
                    
                    tabindex="0"
                    >
                    <div>
                      <NuxtLink class="nav-link opacity"  to="/MoreProjects">Projects</NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <a
              href="mailto:gulcatay.mimar@gmail.com"
              class="email-header-wrapper show-mobile w-inline-block"
              >
              <img
                src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg"
                class="image email-header-icon"
                />
              <div>gulcatay.mimar@gmail.com</div>
            </a
              >
          </nav>
          <div class="menu-button w-nav-button" style="-webkit-user-select: text;" aria-label="menu" role="button" tabindex="0"  aria-controls="w-nav-overlay-0"  aria-haspopup="menu" aria-expanded="false">
            <div class="menu-button-icon-main-wrapper">
              <div class="menu-button-icon-wrapper">
                <div class="menu-icon-line-top" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
                <div class="menu-icon-line-middle" style="opacity: 1;"></div>
                <div class="menu-icon-line-bottom" style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg); transform-style: preserve-3d;"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="split-content header-left">
          <a
            href="mailto:gulcatay.mimar@gmail.com"
            class="email-header-wrapper w-inline-block"
            >
            <img
              src="https://assets.website-files.com/61129bb2ecedf803564c68ec/6112a4fa0865622bd03376a4_email-icon-personal-x-template.svg"
              alt="Email Icon - You X Webflow Template"
              class="image email-header-icon"
              />
            <div>gulcatay.mimar@gmail.com</div>
          </a
            >
        </div>
      </div>
    </div>
  </div>
</template>

