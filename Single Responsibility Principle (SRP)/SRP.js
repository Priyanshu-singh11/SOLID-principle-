class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class EmailService{
    sendWelcomeEmail(user){
        console.log("Email send to", user.name)
    }
}

const user = new User("Priyanshu", "abc@gmail.com");
console.log(user)
const email = new EmailService();
console.log(email)
email.sendWelcomeEmail(user);

