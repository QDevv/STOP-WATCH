// let pp = document.querySelectorAll('p')
// // console.log(pp[0].innerHTML);

// pp.forEach(par => {
//     const parr = par.innerText.includes('success') 
//     const err = par.innerText.includes('error')
//     if (parr) {
//         par.classList.add('success')
//         ;
//     }
//      if (err) {
//         par.classList.add('error')
//     }
// })
// const x = pp[4].textContent.includes('error')
// if (x) {
//     console.log('red');
// }

let hrs = document.querySelector('.hours')
let mins = document.querySelector('.minutes')
let sec = document.querySelector('.second')

let b1 = document.querySelector('.start')
let b2 = document.querySelector('.reset')
let b3 = document.querySelector('.stop')



// let counter = 0
// setInterval(() => {
//     sec.innerHTML = counter++
//     if(counter === 60) {
//         counter = 0;
//         counter++;
//     //    mins.innerHTML = counter++;
//         // mins.innerHTML += counter++;
//     }
//     // if()

// }, 1000);

let counter = 0
var interva;

let newFunc = () => {
  
 interva = setInterval(() => {
    sec.innerHTML = counter++
    if(counter === 60) {
        counter = 0;
        counter++; }
    }, 1000);
    // if(interva) {
    //   clearInterval(interva);
    // }
    b1.className = 'start'
}


// let counterr = 1
// setInterval(() => {
//     mins.innerHTML = counterr++
    // if(sec.innerHTML === 60) {
    //     counterr++;
    
// }, 60000);

// // let counterrr = 1
// // setInterval(() => {
    
// // }, interval);
// let Counter = 0
// let counterrr = () => {
    
//     sec.innerHTML = Counter++
//     if(Counter == 60) {
//       Counter = 0;
//       Counter++;
//     }
// }

b1.addEventListener('click', newFunc)




// let pause = () => {
    
//     clearInterval(interva)
//     b3.innerHTML = 'CONTINUE'
//     b3.className = 'continue'
//   }
//   b3.addEventListener('click', pause)
  
  const continues = () => {
  if (b3.innerHTML === 'CONTINUE') {
     setTimeout(() => {
           
interva = setInterval(() => {
    sec.innerHTML = counter++
    if(counter === 60) {
        counter = 0;
        counter++; }
    }, 1000);
     },500 )
//     setInterval(() => {
//           sec.innerHTML++
//   }, 1000);
//   if (sec.innerHTML == 60) {
//       sec.innerHTML = 0
//     setInterval(() => {
//         sec.innerHTML++
// }, 1000);
//   }
  }
  
  }
  
  b3.addEventListener('click',continues)



  var interva2;
   let counterr = 1
  let newMinutes = () => {
  
    interva2 = setInterval(() => {
       mins.innerHTML = counterr++
       if(mins.innerHTML === 60) {
           counterr = 0;
           counterr++; }
       }, 61000);
       // if(interva) {
       //   clearInterval(interva);
       // }
    
   }

   b1.addEventListener('click', newMinutes)
   

   let pause = () => {
    
    clearInterval(interva)
    clearInterval(interva2)
    b3.innerHTML = 'CONTINUE'
    b3.className = 'continue'
  }
  b3.addEventListener('click', pause)


  
//   const fn = (a,b) => {
//     if (a == 0) return b
//     if (b == 0) return a
//     return fn(a+1, b-1)
// }

//  let fd = fn(1,3)
//  console.log(fd);


//  const vv = (d,g) => {
//      if(d == 0) return g
//      if (g == 0) return d
//      return vv(d+1, g-1)
//  }

//  let vg = vv(2,1)
//  console.log(vg);
