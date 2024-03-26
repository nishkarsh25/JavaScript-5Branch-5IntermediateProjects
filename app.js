class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





class MyClass {
    constructor(name) {
      this.name = name;
      this.localVar = 5;
      this.val = 6;
    }
  
    // Method defined outside constructor but within the class body
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const obj1 = new MyClass('Alice');
  
  console.log(obj1);







function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = {
                result: 'Some data',
                status: 'Success'
            };
            resolve(data); // Resolve with an object containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result.result); // Accessing the result property
        console.log('Status:', result.status); // Accessing the status property
    })
    .catch(error => {
        console.error('Error:', error);
    });






function fetchData() {
    return new Promise((resolve, reject) => {
        // Simulating fetching data
        setTimeout(() => {
            const data = ['Some data', 'Success'];
            resolve(data); // Resolve with an array containing multiple values
        }, 2000);
    });
}

// Usage
fetchData()
    .then(result => {
        console.log('Result:', result[0]); // Accessing the first element
        console.log('Status:', result[1]); // Accessing the second element
    })
    .catch(error => {
        console.error('Error:', error);
    });
    






function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const data = 'Some data';
            resolve(data); // Resolve the promise with data
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Usage
async function processData() {
    try {
        const data = await fetchData();
        console.log('Data received:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

processData();
    





// Asynchronous function 1
function asyncFunction1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction1');
        }, 1000); // Simulate delay of 1 second
    });
}

// Asynchronous function 2
function asyncFunction2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction2');
        }, 1500); // Simulate delay of 1.5 seconds
    });
}

// Asynchronous function 3
function asyncFunction3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful completion
            resolve('Result from asyncFunction3');
        }, 2000); // Simulate delay of 2 seconds
    });
}

// Execute asynchronous functions sequentially
async function executeAsyncFunctions() {
    try {
        const result1 = await asyncFunction1();
        console.log('Async function 1 completed successfully:', result1);
        
        const result2 = await asyncFunction2();
        console.log('Async function 2 completed successfully:', result2);

        const result3 = await asyncFunction3();
        console.log('Async function 3 completed successfully:', result3);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to execute asynchronous functions
executeAsyncFunctions();





// In JavaScript, there are several shorthand forms of writing functions:

// Arrow Functions:
const add = (a, b) => a + b;

// Implicit Return Arrow Functions (for single expression functions):
const add = (a, b) => a + b;

// Function Expressions (using function keyword)(whenever you use a function keyword you cant use arrow operator even for a single line):
const add = function(a, b) {
    return a + b;
};


// Arrow Functions with Single Argument (parentheses optional for single argument):
const double = num => num * 2;

// Immediately Invoked Function Expressions (IIFE):
(function() {
    // code here
})();





const numbers = [1, 2, 3, 4, 5];

// Using shorthand arrow function
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // Output: 15



// To use the fetch API to retrieve a text file and handle it using promises in JavaScript, you can follow these steps:

fetch('example.txt') // Replace 'example.txt' with the URL of your text file
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.text();
})
.then(text => {
// Handle the text content of the file
console.log(text);
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json') // Replace 'example.json' with the URL of your JSON file or API endpoint
.then(response => {
if (!response.ok) {
    throw new Error('Network response was not ok');
}
return response.json();
})
.then(data => {
// Handle the JSON data
console.log(data); // Assuming 'example.json' contains an array of objects
})
.catch(error => {
// Handle any errors
console.error('There was a problem with the fetch operation:', error);
});






fetch('example.json')
.then(response => response.json())
.then(data => {
// Assuming 'example.json' contains an array of objects with 'name' and 'age' properties
data.forEach(item => {
    console.log(`Name: ${item.name}, Age: ${item.age}`);
    // Do something else with the data, such as updating the UI
});
})
.catch(error => {
console.error('There was a problem with the fetch operation:', error);
});





