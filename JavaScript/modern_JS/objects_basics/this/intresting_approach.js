let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() { // shows the current step
      alert( this.step );
      return this;
    }
  };

  // Повертає об'єкт після кожного виклику  
