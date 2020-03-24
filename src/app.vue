<template>
  <div>

    <main>
    <Popup
      v-bind:elementClass="elementClass"
      v-bind:elementName="elementName"
      v-bind:elementDescription="elementDescription"
      v-bind:elementTutorials="elementTutorials"
      v-bind:showModal="showModal"
      @close-modal="closeModal"
    />

    <div class="l-grid l-grid--colors">

      <Element
        v-for="(data, index) in colorData"
        v-bind:key="data.id"
        v-bind:elementClass="data.elementClass"
        v-bind:elementName="data.elementClass"
      />

    </div>

    <div class="l-grid l-grid--5">

      <Element
        v-for="(data, index) in elementData"
        v-bind:key="data.id"
        v-bind:elementSection="data.elementSection"
        v-bind:elementClass="data.elementClass"
        v-bind:elementName="data.elementName"
        v-bind:elementCode="data.elementCode"
        v-bind:elementNumber="index"
        v-bind:elementDescription="data.elementDescription"
        v-bind:elementTutorials="data.elementTutorials"
        @show-message="changeData"
      />

    </div>

    </main>

    <nav class="c-navigation">
      <ul>
        <li v-for="data in elementData" v-if="data.elementSection" v-bind:key="data.id">
          <a v-bind:href="'#' + data.elementSection" v-bind:class="data.elementClass">{{ data.elementName }}</a>
        </li>
      </ul>
    </nav>

  </div>
</template>

<script>
import colors from './data/colors.json';
import content from './data/content.json';
import Element from './components/Element.vue';
import Popup from './components/Popup.vue';
export default {
  name: 'app',
  data() {
    return {
      colorData: colors,
      sidebarData: sidebar,
      elementData: content,
      elementClass: String,
      elementName: String,
      elementDescription: String,
      elementTutorials: String,
      showModal: false,
    }
  },
  components: {
    Element,
    Popup
  },
  methods: {
    changeData(a, b, c, d, e, f, g, h, i, j) {
      this.elementClass = a;
      this.elementName = b;
      this.elementDescription = c;
      this.elementTutorials = d;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
}
</script>