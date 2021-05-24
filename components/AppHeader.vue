<template>
  <div>
    <nav
      class="navbar is-dark"
      role="navigation"
      aria-label="main navigation"
    >
      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item has-text-white-ter ml-4">
            Home
          </nuxt-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light"> Log in </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped>
$navbar-item-hover-background-color: #fff;
.navbar {
  &.is-dark {
    background-color: #222831;
  }
}

.navbar.is-dark .navbar-start > a.navbar-item:hover {
  background-color: #313847;
}
</style>
