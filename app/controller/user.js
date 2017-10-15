// app/controller/user.js
module.exports = app => {
  class UserController extends app.Controller {
    * info() {
      this.ctx.body = {
        name: `hello ${this.ctx.params.id}`,
      };
    }
  }
  return UserController;
};