<template>
  <transition name="slide-fade" >
    <div class="o-card__content-display" v-bind:class="elementClass" v-if="showModal">
      <button class="o-card__content-display--hide" @click="closeModal(a)"><svg><use xlink:href="#close"/></svg></button>
      <div class="l-block--960 l-center l-padding-sides--30">
        <h3 style="margin-bottom: 15px">{{ elementName }}</h3>
        <p class="l-font--15"><span>{{ elementDescription }}</span></p>
      </div>
      <div class="o-card__content-display-links">
        <a v-for="(data, index) in elementTutorials" v-bind:href="data[1]" target="_blank">
          <span>
            <span class="o-card__content-display-links-title">{{ data[0] }}</span>
            <svg><use xlink:href="#arrow"/></svg>
          </span>
        </a>
      </div>
    </div>
  </transition>
</template>

<script>
module.exports = {
  methods: {
    closeModal(a) {
      this.$emit('close-modal', a);
    },
  },
  props: [
    'elementClass',
    'elementName',
    'elementDescription',
    'elementTutorials',
    'showModal',
   ],
}
</script>