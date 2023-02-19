const persons = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
  ];


//   ***REDUCE***

// Get total mass of all characters

let total_mass = persons.map((persons) => Number(persons.mass))

let total_mass2 = total_mass.reduce((value,mass) => value+mass)

console.log({total_mass2});

// 

// Get total height of all characters

let total_height = persons.map((persons) => Number(persons.height))

let total_height2 = total_height.reduce((value,height) => value + height)

console.log({total_height2});

// 

// ***FILTER***

let greater_Than100 = persons.filter((persons) => persons.mass > 100)

console.log({greater_Than100});

let less_Than200 = persons.filter((persons) => persons.height < 200)

console.log({less_Than200});

let all_male = persons.filter((persons) => persons.gender == "male")

console.log({all_male});

let all_female = persons.filter((persons) => persons.gender == "female")

console.log({all_female});


// ***EVERY***

// Does every character have blue eyes?

let blue_eyes_every = persons.every((persons) => persons.eye_color== "blue")
console.log({blue_eyes_every});

// 

// Is every character male?

let  every_character_male_every = persons.every((persons)=> persons.gender == "male")

console.log({every_character_male_every});

// 



// ***SOME***

// Is there at least one male character?

let  every_character_male_some = persons.some((persons)=> persons.gender == "male")

console.log({every_character_male_some});

// 

// Is there at least one character with blue eyes? 

let blue_eyes_some = persons.some((persons) => persons.eye_color== "blue")
console.log({blue_eyes_some});

// 

// ***MAP***

// Get array of all names

let all_names = persons.map((persons) => persons.name)

console.log({all_names});

// 

// Get array of all heights

let all_heights = persons.map((persons) => persons.height)

console.log({all_heights});

// 

let all_heights_names = persons.map((persons) => persons.height , persons.height)

console.log({all_heights_names});