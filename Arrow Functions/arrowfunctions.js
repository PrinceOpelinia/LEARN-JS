const greet = (name) => { return "Hello " + name + "!"; }
console.log(greet("Eric"));      // prints out Hello Eric!

const greet1 = name => { return "Hello " + name + "!"; } // 1 argument 
console.log(greet1("Eric"));      // prints out Hello Eric!

const greet2 = name => "Hello " + name + "!"; //explicit return
console.log(greet2("Eric"));      // prints out Hello Eric!