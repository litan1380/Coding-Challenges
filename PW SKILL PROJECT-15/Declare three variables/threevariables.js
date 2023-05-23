{
    console.log(a); // undefined
    console.log(b); // ReferenceError: b is not defined
    console.log(c); // ReferenceError: c is not defined
  
    let a = 1;
    var b = 2;
    const c = 3;
  
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 3
  }
  