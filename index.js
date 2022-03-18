// Code your solution here

// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const fun = (element) => {
//     element / 2
// }

// console.log(x.map((element) => element/2))


// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];


const findMatching = (array , name) => {


    const fun = (element) => {
        if (element.toLowerCase() === name.toLowerCase()) {
            return true 
        }
        return false
    }

    let x = array.filter(fun)
    let emptyArr = []
    if (x === undefined) {
        return emptyArr
    }
    return x
}

// console.log(findMatching(drivers, 'Alex'));




const fuzzyMatch = (array, letters) => {

    const fun = (element) => {
        if (element.startsWith(letters)) {
            return true
        }
        return false
    }


    let y = array.filter(fun)
    let emptyArray = []
    if (y === undefined) {
        return emptyArray
    }
    return y
}


// console.log(fuzzyMatch(drivers, "Sa"))


const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];




  const matchName = (array, name) => {
    
    const fun = (element) => {
        // console.log(element)
        if (element.name === name) {
            return true 
        }
        return false
    }
    // const func = array.filter(fun)
    let x = array.filter(fun)
        return x
  }

  console.log(matchName(drivers, "Annette"))