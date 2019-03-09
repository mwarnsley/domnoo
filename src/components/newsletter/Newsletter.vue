<template>
  <div class="container newsl_container">
    <h2>Join to our newsletter</h2>
    <div class="form">
      <input
        type="text"
        v-model="email"
      />
      <button @click="subscribe(email)">Subscribe</button>
    </div>
    <div class="error_label">
      <div>{{ error.message }}</div>
    </div>
    <div class="success_label">
      <div>{{ success.message }}</div>
    </div>
    <div class="small">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
    </div>
  </div>
</template>

<script>
import forEach from "lodash/forEach";
import { firebaseLooper, validateEmail } from "../../helpers";

export default {
  name: "Newsletter",
  data() {
    return {
      email: "",
      error: {
        message: ""
      },
      success: {
        message: ""
      }
    };
  },
  methods: {
    async checkUserEmail() {
      // Fetching the users from the firebase databae
      const findUser = await this.$http.get(
        `users.json?orderBy=\"email\"&&equalTo=\"${this.email}\"`
      );
      // Turning the users into json forma
      const user = await findUser.json();
      // Formatting the users into an array of users
      const checkUser = firebaseLooper(user);
      // Setting whether or not the user is already registered
      let userRegistered = false;
      forEach(checkUser, user => {
        if (user.email === this.email) {
          userRegistered = true;
        }
      });

      // We need to check and see if the user email is already in the database
      if (!userRegistered) {
        // Posting the users email to the database
        await this.$http.post("users.json", { email: this.email });
        this.success.message = "User registered successfully";
        this.clearSuccess();
      } else {
        this.success.message = "User is already registered";
        this.clearSuccess();
      }
    },
    clearSuccess() {
      setTimeout(() => {
        this.success.message = "";
      }, 3000);
    },
    subscribe() {
      const valid = this.validate(this.email);

      if (!valid.message) {
        this.error.message = "";
        this.checkUserEmail();
      } else {
        this.error.message = valid.message;
      }
    },
    validate(email) {
      let valid = {
        message: ""
      };
      if (!email) {
        valid.message = "Must enter an email address";
      } else if (!validateEmail(email)) {
        valid.message = "Please enter a valid email address";
      } else {
        valid.message = "";
      }
      return valid;
    }
  }
};
</script>
