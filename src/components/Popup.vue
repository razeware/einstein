<template>
  <transition name="slide-fade" >
    <div class="o-card__content-display" v-bind:class="elementClass" v-if="showModal">
      <button class="o-card__content-display--hide" @click="closeModal(a)"><svg><use xlink:href="#close"/></svg></button>
      <div class="l-block--960 l-center l-padding-sides--30">
        <h3 style="margin-bottom: 15px">{{ elementName }}</h3>
        <p class="l-font--14"><span>{{ elementDescription }}</span></p>
      </div>
      <div class="o-card__content-display-links">
        <a v-if="elementArticleLink" v-bind:href="elementArticleLink" v-bind:class="elementArticleClass" target="_blank"><span>ARTICLE <span class="o-card__content-display-links-title">({{ elementArticleName }})</span><svg><use xlink:href="#arrow"/></svg></span></a><a v-if="elementVideoLink" v-bind:href="elementVideoLink" v-bind:class="elementVideoClass" target="_blank"><span>VIDEO <span class="o-card__content-display-links-title">({{ elementVideoName }})</span><svg><use xlink:href="#arrow"/></svg></span></a>
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
    'elementArticleName',
    'elementArticleLink',
    'elementArticleClass',
    'elementVideoName',
    'elementVideoLink',
    'elementVideoClass',
    'showModal',
   ],
}
</script>