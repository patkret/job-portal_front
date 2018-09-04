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
        <div class="last-offers-list" v-if="fourthInfo">
            <h1>Recent offers</h1>
           <table>
               <thead>
               <tr>
                   <th>Added</th>
                   <th>Expires</th>
                   <th>Offer name</th>
                   <th>Technologies</th>
                   <th>Status</th>
                   <th>Actions</th>
               </tr>
               </thead>
               <tbody>
               <tr>
                   <td>20.05.2018</td>
                   <td>20.06.2018</td>
                   <td>Junior Frontend Developer</td>
                   <td>JavaScript, React, PHP</td>
                   <td><span class="status-badge status-new">new</span></td>
                   <td>Actions</td>
               </tr>
               <tr>
                   <td>15.05.2018</td>
                   <td>30.07.2018</td>
                   <td>ABB Summer Internship</td>
                   <td>Java, Maven</td>
                   <td><span class="status-badge status-added">added</span></td>
                   <td>Actions</td>
               </tr>
               <tr>
                   <td>20.05.2018</td>
                   <td>20.06.2018</td>
                   <td>Junior Frontend Developer</td>
                   <td>JavaScript, React, PHP</td>
                   <td><span class="status-badge status-new">new</span></td>
                   <td>Actions</td>
               </tr>
               <tr>
                   <td>20.05.2018</td>
                   <td>20.06.2018</td>
                   <td>Junior Frontend Developer</td>
                   <td>JavaScript, React, PHP</td>
                   <td><span class="status-badge status-added">added</span></td>
                   <td>Actions</td>
               </tr>
               <tr>
                   <td>20.05.2018</td>
                   <td>20.06.2018</td>
                   <td>Junior Frontend Developer</td>
                   <td>JavaScript, React, PHP</td>
                   <td><span class="status-badge status-added">added</span></td>
                   <td>Actions</td>
               </tr>
               <tr>
                   <td>20.05.2018</td>
                   <td>20.06.2018</td>
                   <td>Junior Frontend Developer</td>
                   <td>JavaScript, React, PHP</td>
                   <td><span class="status-badge status-new">new</span></td>
                   <td>Actions</td>
               </tr>
               <tr>
                   <td>20.05.2018</td>
                   <td>20.06.2018</td>
                   <td>Junior Frontend Developer</td>
                   <td>JavaScript, React, PHP</td>
                   <td><span class="status-badge status-added">added</span></td>
                   <td>Actions</td>
               </tr>

               </tbody>
           </table>
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
