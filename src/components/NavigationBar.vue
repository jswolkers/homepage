<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href=""></a>
            <span class="fa-layers fa-fw" size="3x">
            <font-awesome-icon :icon="['fas', 'square']" size="3x"/> 
            <span class="fa-layers-text" style="color:#fff;font-size:25pt;font-weight: 900;margin-left:10px;">W</span>
            </span>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="/about"><font-awesome-icon class="icon" :icon="['fas', 'address-card']" /> About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/experience"><font-awesome-icon class="icon" :icon="['fas', 'ranking-star']" /> Experience</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact"><font-awesome-icon class="icon" :icon="['fas', 'paper-plane']" /> Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
  name: 'NavigationBar',
  props: {
    
  }
}
</script>