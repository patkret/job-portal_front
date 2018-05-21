<template>
    <div class="component-container">
        <transition name="fade">
            <h1 v-if="headerShow">Welcome to Admin Panel Patrycja!</h1>
        </transition>

        <div class="short-info-row">
            <transition name="slide-left">
                <div class="col-1" v-if="firstInfo">
                    <div class="offer-icon">
                    </div>
                    <span>857</span>
                    <span>OFFERS</span>
                </div>
            </transition>
            <transition name="slide-left">
                <div class="col-2" v-if="secondInfo">
                    <div class="users-icon">
                    </div>
                    <span>354</span>
                    <span>USERS</span>
                </div>
            </transition>
            <transition name="slide-left">
                <div class="col-3" v-if="thirdInfo">
                    <div class="juniors-icon">
                    </div>
                    <span>145</span>
                    <span>HIRED JUNIORS</span>
                </div>
            </transition>
            <transition name="slide-left">
                <div class="col-4" v-if="fourthInfo">
                    <div class="technologies-icon">
                    </div>
                    <span> 25 </span>
                    <span>TECHNOLOGIES</span>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'Dashboard',
    data () {
      return {
        headerShow: false,
        firstInfo: false,
        secondInfo: false,
        thirdInfo: false,
        fourthInfo: false,
      }
    },
    methods: {
      showHeader () {
        setTimeout(() => {
          this.headerShow = true
        }, 700)
      },

      showFirstInfo () {
        setTimeout(() => {
          this.firstInfo = true
        }, 800)
      },
      showSecondInfo () {
        setTimeout(() => {
          this.secondInfo = true
        }, 1800)
      },
      showThirdInfo () {
        setTimeout(() => {
          this.thirdInfo = true
        }, 2800)
      },
      showFourthInfo () {
        setTimeout(() => {
          this.fourthInfo = true
        }, 3800)
      },
    },

    created: function () {
      this.showHeader()
      this.showFirstInfo()
      this.showSecondInfo()
      this.showThirdInfo()
      this.showFourthInfo()
    },
  }
</script>

<style scoped lang="scss">


</style>
