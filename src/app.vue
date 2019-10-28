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
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-1">
        <span class="l-color--light-green">Programming Language</span>
      </div>
      <!-- CATEGORY END -->
      <Element
        elementClass="o-card--light-green-1"
        elementName="Kotlin"
        elementCode="Kn"
        elementDescription="Kotlin is a cross-platform, statically typed, general-purpose programming language with type inference. Kotlin has been Googles preferred language for Android app development since 7 May 2019."
        elementArticleName="Introduction To Kotlin"
        elementArticleLink="https://www.raywenderlich.com/1144981-kotlin-for-android-an-introduction"
        elementArticleClass="o-card--light-green-2"
        elementVideoName="Programming in Kotlin"
        elementVideoLink="https://www.raywenderlich.com/4736-programming-in-kotlin"
        elementVideoClass="o-card--light-green-3"
        @show-message="changeData"
      />
      <Element
        elementClass="o-card--light-green-2"
        elementName="Java"
        elementCode="Jv"
        elementDescription="..."
        @show-message="changeData"
      />
      <!-- EMPTY START -->
      <div class="o-card o-card--fill-top-right"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-2">
        <span class="l-color--green">Android Studio</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--dark-green-1"
        elementName="Android Studio"
        elementCode="As"
        elementDescription="..."
        elementArticleName="Installing Android Studio"
        elementArticleLink="https://www.raywenderlich.com/478209-beginning-android-development-with-kotlin-part-one-installing-android-studio"
        elementArticleClass="o-card--darker-green-2"
        elementVideoName="Your First Kotlin Android App"
        elementVideoLink="https://www.raywenderlich.com/4936497-your-first-kotlin-android-app"
        elementVideoClass="o-card--dark-green-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--fill"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-3">
        <span class="l-color--light-blue">Software Engineering</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--light-blue-1"
        elementName="Design Patterns"
        elementCode="Se"
        elementDescription="..."
        elementArticleName="Common Design Patterns"
        elementArticleLink="https://www.raywenderlich.com/470-common-design-patterns-for-android-with-kotlin"
        elementArticleClass="o-card--blue-1"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
       <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
       <!-- EMPTY START -->
      <div class="o-card o-card--fill-bottom-left"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-4">
        <span class="l-color--blue">App Components</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--blue-1"
        elementName="Activity"
        elementCode="Ay"
        elementDescription="..."
        elementArticleName="Introduction to Android Activities"
        elementArticleLink="https://www.raywenderlich.com/2705552-introduction-to-android-activities-with-kotlin"
        elementArticleClass="o-card--blue-2"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--blue-2"
        elementName="Intents"
        elementCode="In"
        elementDescription="..."
        elementArticleName="Android Intents"
        elementArticleLink="https://www.raywenderlich.com/4700198-android-intents-tutorial-with-kotlin"
        elementArticleClass="o-card--blue-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--blue-3"
        elementName="Services"
        elementCode="Sv"
        elementDescription="..."
        elementVideoName="Android Background Processing"
        elementVideoLink="https://www.raywenderlich.com/5306-android-background-processing"
        elementVideoClass="o-card--blue-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-5">
        <span class="l-color--purple">User Interface</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--purple-1"
        elementName="Material Design"
        elementCode="Md"
        elementDescription="..."
        elementArticleName="Introduction to Material Design"
        elementArticleLink="https://www.raywenderlich.com/2780045-android-an-introduction-to-material-design-with-kotlin"
        elementArticleClass="o-card--purple-2"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--purple-2"
        elementName="RecyclerView"
        elementCode="Ry"
        elementDescription="..."
        elementArticleName="Android RecyclerView"
        elementArticleLink="https://www.raywenderlich.com/1560485-android-recyclerview-tutorial-with-kotlin"
        elementArticleClass="o-card--purple-3"
        elementVideoName="Beginning RecyclerView"
        elementVideoLink="https://www.raywenderlich.com/4568-beginning-recyclerview"
        elementVideoClass="o-card--purple-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
       <Element
        elementClass="o-card--purple-3"
        elementName="UI Layouts"
        elementCode="Ui"
        elementDescription="..."
        elementArticleName="Adaptive UI"
        elementArticleLink="https://www.raywenderlich.com/179-adaptive-ui-tutorial-for-android-with-kotlin"
        elementArticleClass="o-card--purple-5"
        elementVideoName="Beginning Android Layouts"
        elementVideoLink="https://www.raywenderlich.com/4701-beginning-android-layouts"
        elementVideoClass="o-card--purple-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--purple-4"
        elementName="Fragments"
        elementCode="Fg"
        elementDescription="..."
        elementArticleName="Introduction to Android Fragments"
        elementArticleLink="https://www.raywenderlich.com/1364094-android-fragments-tutorial-an-introduction-with-kotlin"
        elementArticleClass="o-card--purple-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- FILL START -->
      <div class="o-card o-card--fill"></div>
      <!-- FILL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--purple-1"
        elementName="Custom Fonts"
        elementCode="Cu"
        elementDescription="..."
        elementArticleName="Custom and Downloadable Fonts"
        elementArticleLink="https://www.raywenderlich.com/213-custom-and-downloadable-fonts-on-android"
        elementArticleClass="o-card--purple-2"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--purple-2"
        elementName="Custom Views"
        elementCode="Ci"
        elementDescription="..."
        elementArticleName="Custom View Tutorial"
        elementArticleLink="https://www.raywenderlich.com/142-android-custom-view-tutorial"
        elementArticleClass="o-card--purple-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--purple-3"
        elementName="Constraint Layout"
        elementCode="Co"
        elementDescription="..."
        elementArticleName="ConstraintLayout Tutorial: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/9193-constraintlayout-tutorial-for-android-getting-started"
        elementArticleClass="o-card--purple-5"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--purple-1"
        elementName="Drawables"
        elementCode="Db"
        elementDescription="..."
        elementArticleName="Vector Graphics"
        elementArticleLink="https://www.raywenderlich.com/3988300-vector-graphics-on-android"
        elementArticleClass="o-card--purple-2"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--purple-2"
        elementName="ViewPager"
        elementCode="Vi"
        elementDescription="..."
        elementArticleName="ViewPager: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/324-viewpager-tutorial-getting-started-in-kotlin"
        elementArticleClass="o-card--purple-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-6">
        <span class="l-color--pink">More User Interface</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--pink-1"
        elementName="Animations"
        elementCode="Ai"
        elementDescription="..."
        elementArticleName="Animation"
        elementArticleLink="https://www.raywenderlich.com/2785491-android-animation-tutorial-with-kotlin"
        elementArticleClass="o-card--pink-4"
        elementVideoName="Android Animations"
        elementVideoLink="https://www.raywenderlich.com/3355-android-animations"
        elementVideoClass="o-card--pink-2"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--pink-2"
        elementName="Design Support Library"
        elementCode="Su"
        elementDescription="..."
        elementArticleName="Design Support Library: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/5299-android-design-support-library-getting-started"
        elementArticleClass="o-card--pink-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--pink-3"
        elementName="Accessibility"
        elementCode="As"
        elementDescription="..."
        elementArticleName="Accessibility: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/240-android-accessibility-tutorial-getting-started"
        elementArticleClass="o-card--pink-5"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--pink-4"
        elementName="Widgets"
        elementCode="Wi"
        elementDescription="..."
        elementArticleName="Android App Widgets"
        elementArticleLink="https://www.raywenderlich.com/33-android-app-widgets-tutorial"
        elementArticleClass="o-card--pink-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--fill-top-right"></div>
      <!-- EMPTY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--pink-1"
        elementName="Transitions"
        elementCode="Ti"
        elementDescription="..."
        elementArticleName="Transition Framework: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/1376936-android-transition-framework-getting-started"
        elementArticleClass="o-card--pink-2"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-7">
        <span class="l-color--red">Data Persistence</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--red-1"
        elementName="Shared Preferences"
        elementCode="Sd"
        elementDescription="..."
        elementVideoName="Saving Data on Android"
        elementVideoLink="https://www.raywenderlich.com/4561-saving-data-on-android"
        elementVideoClass="o-card--red-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--red-2"
        elementName="Filesystem"
        elementCode="Fe"
        elementDescription="..."
        elementVideoName="Saving Data on Android"
        elementVideoLink="https://www.raywenderlich.com/4561-saving-data-on-android"
        elementVideoClass="o-card--red-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--red-3"
        elementName="SQLite"
        elementCode="Sq"
        elementDescription="..."
        elementVideoName="Saving Data on Android"
        elementVideoLink="https://www.raywenderlich.com/4561-saving-data-on-android"
        elementVideoClass="o-card--red-5"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--red-4"
        elementName="Firebase"
        elementCode="Dp"
        elementDescription="..."
        elementArticleName="Firebase: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/5114-firebase-tutorial-for-android-getting-started"
        elementArticleClass="o-card--red-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--red-3"
        elementName="Room"
        elementCode="Ro"
        elementDescription="..."
        elementArticleName="Room DB: Advanced Data Persistence"
        elementArticleLink="https://www.raywenderlich.com/5686-room-db-advanced-data-persistence"
        elementArticleClass="o-card--red-5"
        elementVideoName="Saving Data on Android"
        elementVideoLink="https://www.raywenderlich.com/4561-saving-data-on-android"
        elementVideoClass="o-card--red-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-8">
        <span class="l-color--orange">Network Handling</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--orange-1"
        elementName="REST API's"
        elementCode="N"
        elementDescription="..."
        elementVideoName="Android Networking"
        elementVideoLink="https://www.raywenderlich.com/4539-android-networking"
        elementVideoClass="o-card--orange-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--orange-2"
        elementName="HTTP Basics"
        elementCode="Hi"
        elementDescription="..."
        elementVideoName="Android Networking"
        elementVideoLink="https://www.raywenderlich.com/4539-android-networking"
        elementVideoClass="o-card--orange-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--orange-3"
        elementName="JSON"
        elementCode="Jo"
        elementDescription="..."
        elementVideoName="Android Networking"
        elementVideoLink="https://www.raywenderlich.com/4539-android-networking"
        elementVideoClass="o-card--orange-5"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--orange-4"
        elementName="RetroFit"
        elementCode="Re"
        elementDescription="..."
        elementVideoName="Android Networking"
        elementVideoLink="https://www.raywenderlich.com/4539-android-networking"
        elementVideoClass="o-card--orange-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-9">
        <span class="l-color--light-orange">Location</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--light-orange-1"
        elementName="Google Maps"
        elementCode="L"
        elementDescription="..."
        elementArticleName="Introduction to the Google Maps API"
        elementArticleLink="https://www.raywenderlich.com/230-introduction-to-google-maps-api-for-android-with-kotlin"
        elementArticleClass="o-card--light-orange-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-10">
        <span class="l-color--yellow">Code Architecture</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--yellow-1"
        elementName="MVP"
        elementCode="Vp"
        elementDescription="..."
        elementArticleName="Getting Started with MVP (Model View Presenter)"
        elementArticleLink="https://www.raywenderlich.com/7026-getting-started-with-mvp-model-view-presenter-on-android"
        elementArticleClass="o-card--yellow-2"
        elementVideoName="MVP on Android"
        elementVideoLink="https://www.raywenderlich.com/9216-mvp-on-android"
        elementVideoClass="o-card--yellow-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--yellow-2"
        elementName="MVVM"
        elementCode="Vm"
        elementDescription="..."
        elementArticleName="MVVM and DataBinding: Android Design Patterns"
        elementArticleLink="https://www.raywenderlich.com/636803-mvvm-and-databinding-android-design-patterns"
        elementArticleClass="o-card--yellow-3"
        elementVideoName="MVVM on Android"
        elementVideoLink="https://www.raywenderlich.com/8984-mvvm-on-android"
        elementVideoClass="o-card--yellow-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--yellow-3"
        elementName="MVI"
        elementCode="Vi"
        elementDescription="..."
        elementArticleName="MVI Architecture: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/817602-mvi-architecture-for-android-tutorial-getting-started"
        elementArticleClass="o-card--yellow-5"
        elementVideoName="MVI on Android"
        elementVideoLink="https://www.raywenderlich.com/266607-mvi-on-android"
        elementVideoClass="o-card--yellow-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-11">
        <span class="l-color--turquoise">Dependency Injection</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--turquoise-1"
        elementName="Dagger"
        elementCode="Dr"
        elementDescription="..."
        elementVideoName="Getting Started With Dagger"
        elementVideoLink="https://www.raywenderlich.com/265010-getting-started-with-dagger"
        elementVideoClass="o-card--turquoise-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--turquoise-2"
        elementName="Koin"
        elementCode="Ki"
        elementDescription="..."
        elementArticleName="Dependency Injection With Koin"
        elementArticleLink="https://www.raywenderlich.com/9457-dependency-injection-with-koin"
        elementArticleClass="o-card--turquoise-4"
        elementVideoName="Dependency Injection With Koin"
        elementVideoLink="https://www.raywenderlich.com/5730-dependency-injection-with-koin"
        elementVideoClass="o-card--turquoise-5"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-12">
        <span class="l-color--dark-green">Thread Handling</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
       <Element
        elementClass="o-card--darker-green-1"
        elementName="Handlers"
        elementCode="Hl"
        elementDescription="..."
        elementArticleName="Threading With HandlerThread"
        elementArticleLink="https://www.raywenderlich.com/5466-threading-with-handlerthread-in-android"
        elementArticleClass="o-card--darker-green-3"
        elementVideoName="Android Background Processing"
        elementVideoLink="https://www.raywenderlich.com/5306-android-background-processing"
        elementVideoClass="o-card--darker-green-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--darker-green-2"
        elementName="AsyncTask"
        elementCode="As"
        elementDescription="..."
        elementVideoName="Android Background Processing"
        elementVideoLink="https://www.raywenderlich.com/5306-android-background-processing"
        elementVideoClass="o-card--darker-green-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--darker-green-3"
        elementName="Coroutines"
        elementCode="Co"
        elementDescription="..."
        elementArticleName="Coroutines: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/1423941-kotlin-coroutines-tutorial-for-android-getting-started"
        elementArticleClass="o-card--darker-green-5"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-13">
        <span class="l-color--turquoise-green">Architecture Components</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--turquoise-blue-1"
        elementName="Livedata"
        elementCode="La"
        elementDescription="..."
        elementVideoName="Android Architecture Components: LiveData"
        elementVideoLink="https://www.raywenderlich.com/4980-android-architecture-components-livedata"
        elementVideoClass="o-card--turquoise-blue-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--turquoise-blue-2"
        elementName="ViewModel"
        elementCode="Ve"
        elementDescription="..."
        elementVideoName="Android Architecture Components: ViewModel"
        elementVideoLink="https://www.raywenderlich.com/5046-android-architecture-components-viewmodel"
        elementVideoClass="o-card--turquoise-blue-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--turquoise-blue-3"
        elementName="Paging Library"
        elementCode="Pi"
        elementDescription="..."
        elementVideoName="Android Architecture Components: Paging Library"
        elementVideoLink="https://www.raywenderlich.com/5189-android-architecture-components-paging-library"
        elementVideoClass="o-card--turquoise-blue-5"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--turquoise-blue-4"
        elementName="WorkManager"
        elementCode="Wo"
        elementDescription="..."
        elementArticleName="WorkManager: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/6040-workmanager-tutorial-for-android-getting-started"
        elementArticleClass="o-card--turquoise-blue-5"
        elementVideoName="Android Background Processing"
        elementVideoLink="https://www.raywenderlich.com/5306-android-background-processing"
        elementVideoClass="o-card--turquoise-blue-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-14">
        <span class="l-color--other-blue">Build Configuration</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--dark-blue-1"
        elementName="Gradle"
        elementCode="Ga"
        elementDescription="..."
        elementArticleName="Gradle: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/249-gradle-tutorial-for-android-getting-started"
        elementArticleClass="o-card--dark-blue-2"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-15">
        <span class="l-color--other-purple">Android Jetpack</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--other-purple-1"
        elementName="Navigation"
        elementCode="Na"
        elementDescription="..."
        elementArticleName="Jetpack Navigation: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/6014-the-navigation-architecture-component-tutorial-getting-started"
        elementArticleClass="o-card--other-purple-3"
        elementVideoName="Jetpack: Navigation Controller"
        elementVideoLink="https://www.raywenderlich.com/5365-jetpack-navigation-controller"
        elementVideoClass="o-card--other-purple-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
       <Element
        elementClass="o-card--other-purple-2"
        elementName="Architecture Components"
        elementCode="Ar"
        elementDescription="..."
        elementArticleName="Jetpack Architecture Components: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/6729-android-jetpack-architecture-components-getting-started"
        elementArticleClass="o-card--other-purple-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--other-purple-3"
        elementName="KTX"
        elementCode="Kx"
        elementDescription="..."
        elementArticleName="KTX: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/5576-android-ktx-tutorial-getting-started"
        elementArticleClass="o-card--other-purple-4"
        elementVideoName="Android KTX"
        elementVideoLink="https://www.raywenderlich.com/3565197-android-ktx"
        elementVideoClass="o-card--other-purple-5"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--fill"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-16">
        <span class="l-color--other-pink">Testing</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--other-pink-1"
        elementName="UI Tests"
        elementCode="Te"
        elementDescription="..."
        elementArticleName="UI Testing with Kakao: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/1505688-ui-testing-with-kakao-tutorial-for-android-getting-started"
        elementArticleClass="o-card--other-pink-2"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--other-pink-2"
        elementName="Unit Tests"
        elementCode="Ue"
        elementDescription="..."
        elementArticleName="Unit Testing with Mockito"
        elementArticleLink="https://www.raywenderlich.com/195-android-unit-testing-with-mockito"
        elementArticleClass="o-card--other-pink-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--fill-bottom-right"></div>
      <!-- EMPTY END -->
      <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-17">
        <span class="l-color--other-red">App Publishing</span>
      </div>
      <!-- CATEGORY END -->
       <Element
        elementClass="o-card--other-red-1"
        elementName="Instant Apps"
        elementCode="In"
        elementDescription="..."
        elementArticleName="Instant Apps: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/9519-instant-apps-getting-started"
        elementArticleClass="o-card--other-red-3"
        @show-message="changeData"
      />
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--other-red-2"
        elementName="App Bundles"
        elementCode="Au"
        elementDescription="..."
        elementArticleName="Android App Bundles: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/9043-android-app-bundles-getting-started"
        elementArticleClass="o-card--other-red-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
    </div>

    <div class="l-space"></div>

    <div class="l-grid l-grid--5">
       <!-- CATEGORY START -->
      <div class="o-card o-card--empty o-card--category" id="section-18">
        <span class="l-color--grey">Also Nice To Know</span>
      </div>
      <!-- CATEGORY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--grey-1"
        elementName="Flutter"
        elementCode="Fu"
        elementDescription="..."
        elementArticleName="Getting Started with Flutter"
        elementArticleLink="https://www.raywenderlich.com/4529993-getting-started-with-flutter"
        elementArticleClass="o-card--grey-3"
        elementVideoName="Getting Started with Flutter in Android Studio"
        elementVideoLink="https://www.raywenderlich.com/4558-getting-started-with-flutter-in-android-studio"
        elementVideoClass="o-card--grey-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
       <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--grey-2"
        elementName="Notifications"
        elementCode="No"
        elementDescription="..."
        elementArticleName="Notifications: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/1214490-android-notifications-tutorial-getting-startedd"
        elementArticleClass="o-card--grey-4"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
       <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--grey-3"
        elementName="RxKotlin"
        elementCode="Rx"
        elementDescription="..."
        elementArticleName="Reactive Programming RxAndroid: An Introduction"
        elementArticleLink="https://www.raywenderlich.com/2071847-reactive-programming-with-rxandroid-in-kotlin-an-introduction"
        elementArticleClass="o-card--grey-5"
        elementVideoName="Beginning RxKotlin"
        elementVideoLink="https://www.raywenderlich.com/7419-beginning-rxkotlin"
        elementVideoClass="o-card--grey-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
       <!-- TUTORIAL START -->
       <Element
        elementClass="o-card--grey-4"
        elementName="Android Things"
        elementCode="Ad"
        elementDescription="..."
        elementArticleName="Android Things: Getting Started"
        elementArticleLink="https://www.raywenderlich.com/545672-android-things-tutorial-getting-started"
        elementArticleClass="o-card--grey-6"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--fill"></div>
      <!-- EMPTY END -->
      <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--grey-5"
        elementName="ARCore"
        elementCode="Ao"
        elementDescription="..."
        elementArticleName="Getting Started with ARCore"
        elementArticleLink="https://www.raywenderlich.com/408-getting-started-with-arcore-with-kotlin"
        elementArticleClass="o-card--grey-7"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
       <!-- TUTORIAL START -->
      <Element
        elementClass="o-card--grey-6"
        elementName="TensorFlow"
        elementCode="Ts"
        elementDescription="..."
        elementVideoName="Getting Started with TensorFlow"
        elementVideoLink="https://www.raywenderlich.com/4556-getting-started-with-tensorflow-on-android"
        elementVideoClass="o-card--grey-8"
        @show-message="changeData"
      />
      <!-- TUTORIAL END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--empty"></div>
      <!-- EMPTY END -->
      <!-- EMPTY START -->
      <div class="o-card o-card--fill"></div>
      <!-- EMPTY END -->
    </div>
  </div>
</template>

<script>
import Element from './components/Element.vue'
import Popup from './components/Popup.vue'
export default {
  name: 'app',
  data() {
    return {
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