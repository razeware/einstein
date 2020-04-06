<template>
  <div>

    <div class="l-space"></div>

    <div class="l-center l-block--1200">

      <div v-if="devMode" class="l-development-mode">
        <span>[Development Mode]</span>
        <span> · </span>
        <a @click="setHtmlClass()">Home</a>
        <span> · </span>
        <a @click="setHtmlClass('l-grid-mode')">Grid (Numbers)</a>
        <span> · </span>
        <a @click="setHtmlClass('l-color-mode')">Colors</a>
      </div>

      <h1 class="l-page-title l-color-white">{{ tableTitle }}</h1>
      <p class="l-block--690 l-font--15 l-line-height--125">{{ tableDescription1 }}</p>
      <p class="l-font--15 l-line-height--125 l-margin--26">{{ tableDescription2 }}</p>
      <p class="l-font--15 l-line-height--125 l-margin--26">{{ tableDescription3 }}</p>
      <p class="l-font--15 l-line-height--125 l-margin--26">{{ tableDescription4 }}</p>
    </div>

    <div class="l-space"></div>

    <div class="l-grid-wrapper">
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
              <a v-bind:href="'#' + data.elementSection" v-bind:class="'o-card--section o-card--' + data.elementClass">{{ data.elementName }}</a>
            </li>
          </ul>
        </nav>

      </div>
    </div>

    <div class="l-space"></div>

    <div class="l-center l-block--1200">
      <p class="l-block--690 l-font--15 l-line-height--125"> {{ tableFooterQuote }} <br><br> &mdash; {{ tableFooterQuoteOwner }}</p>
    </div>

    <div class="l-space"></div>
    <div class="l-space"></div>

  </div>
</template>

<script>
import colors from './data/colors.json';
import content from './data/content.json';
import copy from './data/copy.json';
import Element from './components/Element.vue';
import Popup from './components/Popup.vue';
export default {
  name: 'app',
  data() {
    return {
      colorData: colors,
      elementData: content,
      elementClass: String,
      elementName: String,
      elementDescription: String,
      elementTutorials: String,
      tableTitle: copy.title,
      tableFooter: copy.footer,
      tableDescription1: copy.description1,
      tableDescription2: copy.description2,
      tableDescription3: copy.description3,
      tableDescription4: copy.description4,
      tableFooterQuote: copy.footerQuote,
      tableFooterQuoteOwner: copy.footerQuoteOwner,
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
    setHtmlClass(newClass) {
      const htmlElement = document.getElementsByTagName('html')[0];

      htmlElement.classList.remove('l-color-mode', 'l-grid-mode');
      htmlElement.classList.add(newClass);
    },
  },
  computed: {
    devMode() {
      console.log(process.env.NODE_ENV);
      return process.env.NODE_ENV === 'development';
    }
  }
}
</script>