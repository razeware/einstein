<template>
  <div>

    <Popup
      v-bind:elementClass="elementClass"
      v-bind:elementName="elementName"
      v-bind:elementDescription="elementDescription"
      v-bind:elementArticleName="elementArticleName"
      v-bind:elementArticleLink="elementArticleLink"
      v-bind:elementArticleClass="elementArticleClass"
      v-bind:elementVideoName="elementVideoName"
      v-bind:elementVideoLink="elementVideoLink"
      v-bind:elementVideoClass="elementVideoClass"
      v-bind:showModal="showModal"
      @close-modal="closeModal"
    />

    <div class="l-grid l-grid--5">

      <Element
        v-for="data in elementData"
        v-bind:key="data.id"
        v-bind:elementSection="data.elementSection"
        v-bind:elementClass="data.elementClass"
        v-bind:elementName="data.elementName"
        v-bind:elementCode="data.elementCode"
        v-bind:elementDescription="data.elementDescription"
        v-bind:elementArticleName="data.elementArticleName"
        v-bind:elementArticleLink="data.elementArticleLink"
        v-bind:elementArticleClass="data.elementArticleClass"
        v-bind:elementVideoName="data.elementVideoName"
        v-bind:elementVideoLink="data.elementVideoLink"
        v-bind:elementVideoClass="data.elementVideoClass"
        @show-message="changeData"
      />

    </div>

    <div class="l-space"></div>

    <div class="l-grid l-grid--5">

      <Element
        v-for="data in elementDataExtended"
        v-bind:key="data.id"
        v-bind:elementSection="data.elementSection"
        v-bind:elementClass="data.elementClass"
        v-bind:elementName="data.elementName"
        v-bind:elementCode="data.elementCode"
        v-bind:elementDescription="data.elementDescription"
        v-bind:elementArticleName="data.elementArticleName"
        v-bind:elementArticleLink="data.elementArticleLink"
        v-bind:elementArticleClass="data.elementArticleClass"
        v-bind:elementVideoName="data.elementVideoName"
        v-bind:elementVideoLink="data.elementVideoLink"
        v-bind:elementVideoClass="data.elementVideoClass"
        @show-message="changeData"
      />

    </div>
  </div>
</template>

<script>
import content from './data/content.json';
import extraContent from './data/extra-content.json';
import Element from './components/Element.vue'
import Popup from './components/Popup.vue'
export default {
  name: 'app',
  data() {
    return {
      elementData: content,
      elementDataExtended: extraContent,
      elementClass: String,
      elementName: String,
      elementDescription: String,
      elementArticleName: String,
      elementArticleLink: String,
      elementArticleClass: String,
      elementVideoName: String,
      elementVideoLink: String,
      elementVideoClass: String,
      showModal: false,
    }
  },
  components: {
    Element,
    Popup
  },
  methods: {
    changeData(a, b, c, d, e, f, g, h, i) {
      this.elementClass = a;
      this.elementName = b;
      this.elementDescription = c;
      this.elementArticleName = d;
      this.elementArticleLink = e;
      this.elementArticleClass = f;
      this.elementVideoName = g;
      this.elementVideoLink = h;
      this.elementVideoClass = i;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
}
</script>