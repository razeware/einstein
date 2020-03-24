<template>
  <div class="o-card" v-bind:class="elementClass" v-bind:id="elementSection">
    <span class="o-card__click" @click="showMessage(elementClass, elementName, elementDescription, elementTutorials)"></span>
    <div class="o-card__wrapper">
      <div class="o-card__content-main">
        <span class="o-card__code">{{ elementCode }}</span>
        <span class="o-card__number">{{ elementNumber }}</span>
        <span class="o-card__title">{{ elementName }}</span>
      </div>
    </div>
  </div>
</template>
<script>
module.exports = {
  methods: {
    showMessage(a, b, c, d) {
      this.$emit('show-message', a, b, c, d);
    },
  },
  props: [
          'elementClass',
          'elementSection',
          'elementName',
          'elementCode',
          'elementNumber',
          'elementDescription',
          'elementTutorials'
         ],
}
</script>