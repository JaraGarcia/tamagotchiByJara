console.log('Catochi file is loaded');

class Catochi {
    constructor (name){
        this.name = name;
        this.count = 0
        this.hungry = 0;
        this.mood = 0;
        this.health = 0;
    }

    norm(){
        console.log("ThankYou!!!!");
        document.getElementById("myImg").src = "norm.png";
    }

    feed(){
      this.hungry = this.hungry +1;
      console.log("I'm full now :) you earned: " + this.hungry + "points");
      document.getElementById("myImg").src = "eat.png";

      setTimeout(() => {
      this.norm();
    }, 2000);
  }

    play(){
        this.mood = this.mood +1;
        console.log("Not in a mood anymore :) you earned: " + this.mood + "points");
        document.getElementById("myImg").src = "play.png";

        setTimeout(() => {
        this.norm();
      }, 2000);
    }

    sleep(){
      this.health = this.health +1;
      console.log("Good rest :) you earned: " + this.health + "points");
      document.getElementById("myImg").src = "sleep.png";

      setTimeout(() => {
        this.norm();
      }, 2000);
    }
}


const newCatochi1 = new Catochi('helloCat');
Btn1.addEventListener("click", () => newCatochi1.feed());
Btn2.addEventListener("click", () => newCatochi1.play());
Btn3.addEventListener("click", () => newCatochi1.sleep());