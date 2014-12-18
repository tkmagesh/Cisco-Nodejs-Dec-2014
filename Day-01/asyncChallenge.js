function f1(next){
   console.log("beginning f1");
   setTimeout(function(){
      console.log("f1 is done")
      if (typeof next=== "function") next();
   },3000);
}

function f2(next){
   console.log("beginning f2");
   setTimeout(function(){
      console.log("f2 is done")
      if (typeof next=== "function") next();
   },3000);
}

function f3(next){
   console.log("beginning f3");
   setTimeout(function(){
      console.log("f3 is done")
      if (typeof next=== "function") next();
   },3000);
}


function run(fns){
   if (arguments.length === 0) return;
   fns[0](fns[1](fns[2]()));
   
}

function run(fns){
   if (fns.length === 0) return;
   var fn = fns[0];
   var remaining = fns.slice(1);
   var nextFn = function(){
      run(remaining);
   };
   fn(nextFn);
}