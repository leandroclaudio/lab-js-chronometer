// Iteration 1: The Chronometer class
// Let's implement the Chronometer class following the below requirements:

// The class (constructor) should not take any arguments.

// The class (constructor) should initialize two properties for each new chronometer object:

// currentTime, with the initial value set to 0.

// intervalId, with the initial value set to null.

// Once done, check the test results and verify that your code is passing the checks.

class Chronometer {
  constructor() {
    this.currentTime = 0
    this.intervalId = null
    } 

    // ... your code goes here
  

  start(printTimeCallback) {
    this.intervalId = setInterval(() => {
      if (printTimeCallback) {
        printTimeCallback () 
      }
      this.currentTime += 1      
    }, 1000)    
  // this.outroid = setInterval(() => console.log('tetse'), 2000)
    // ... your code goes here
  }

  getMinutes() {
    return Math.floor (this.currentTime/60)
    // ... your code goes here
  }

  getSeconds() {
    return this.currentTime % 60
    // ... your code goes here
  }

  computeTwoDigitNumber(value) {
    let str = String (value)
    if (str.length < 2) {
      str = "0" + str
     }
     return str
    // ... your code goes here
  }

  stop() {
    clearInterval (this.intervalId)
    
    // clearInterval (this.outroid)
    // ... your code goes here
  }

  reset() {
    this.currentTime = 0
    
    // ... your code goes here
  }

  split() {
    let strhour = split.currentTime (":")

    // ... your code goes here
  }
}
// let x = 0
// const crono /*instância*/ = new Chronometer ()
// console.log(crono.currentTime)
// crono.start()
// crono.stop ()
// crono.reset ()