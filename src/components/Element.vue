<template>
  <div class="o-card" v-bind:class="elementClass">
    <span class="o-card__click" @click="showMessage(elementClass, elementName, elementDescription, elementArticleName, elementArticleLink, elementArticleClass, elementVideoName, elementVideoLink, elementVideoClass)"></span>
    <div class="o-card__wrapper">
      <div class="o-card__content-main">
        <span class="o-card__code">{{ elementCode }}</span>
        <span class="o-card__title">{{ elementName }}</span>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  methods: {
    showMessage(a, b, c, d, e, f, g, h, i) {
      this.$emit('show-message', a, b, c, d, e, f, g, h, i);
    },
  },
  props: [
          'elementClass',
          'elementName',
          'elementCode',
          'elementDescription',
          'elementArticleName',
          'elementArticleLink',
          'elementArticleClass',
          'elementVideoName',
          'elementVideoLink',
          'elementVideoClass',
         ],
}
</script>