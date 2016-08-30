<template lang="jade">
  section#content
    article.copy-content
      h2 Contact
      form#contact_form(v-on:submit.prevent='submitForm', action='')
        .form-group
          label(for='name') Name:
          input.form-control(v-model='name', v-on:blur='isValidName', name='name', type='text')
        .form-group
          label(for='email') Email
          input.form-control(v-model='email', v-on:blur='isValidEmail', name='email', type='email')
        .form-group
          label(for='message')
            | Message 
            small
              | (
              span {{ message.length }}
              |  / 
              span {{ maxLength }}
              | )
          textarea.form-control(v-model='message', v-on:blur='isValidMessage', name='message')
        button.btn(type='submit') Send
</template>

<script>
  export default {
    data () {
      return {
        name: '',   // data for the name on the form
        email:'',   // data for the email on the form
        message:'', // data for the message on the form
        maxLength: 140 // maximum length of the form message
      }
    },
    route: {
      canReuse: false,
      activate: function() {
        $('body').animate({ scrollTop: 0 }, 5);
        setTimeout(function(){
          $('.copy-content').addClass('fade-in-slow')
        }, 150);
      }
    },
    methods: { // all the actions our app can do
      isValidName: function () { // TODO what if name is just spaces?
        var valid = this.name.length > 0;
        console.log('checking for a valid name: ' + valid);
        return valid;
      },
      isValidEmail: function () { // TODO is a@b a valid email?
        var valid = this.email.indexOf('@') > 0;
        console.log('checking for a valid email: ' + valid);
        return valid;
      },
      isValidMessage: function () { // what is message is just spaces?
        var valid = (this.message.length > 0) &&
            (this.message.length < this.maxLength);
        console.log('checking for a valid message: ' + valid);
        return valid;
      },
      checkMessage: function () {
        // TODO keep the message below maxMessageLength?
        //      or maybe change the text, background, or counter color?
      },
      submitForm: function () {
        // TODO prevent form from submitting if name, email, or message
        //      are invalid and display message
        // TODO submit to form processor
        console.log('submitting message...');
        this.$http({url: '/someUrl', method: 'POST', data: {
            name: this.name,
            email: this.email,
            message: this.message
        }}).then(function () {
            alert('Your form was submitted!');
        }, function () {
            alert('Form submission failed');
        });
      }
    }
  }
</script>

<style lang="sass?indentedSyntax">

  @import "../_sass/utilities/_utilities.sass"

  .form-content
    h2
      font-size: 4rem
      color: $black
      -webkit-text-fill-color: black
      -webkit-text-stroke-width: 1px
      -webkit-text-stroke-color: white
      -webkit-font-smoothing: antialiased
      margin-bottom: 2rem!important

</style>