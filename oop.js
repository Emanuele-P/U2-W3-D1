class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.location = location
  }

  isOlder(ageToCompare) {
    if (this.age > ageToCompare.age) {
      console.log(
        `${this.firstName} ${this.lastName} is older than ${ageToCompare.firstName} ${ageToCompare.lastName}.`
      )
    } else if (this.age < ageToCompare.age) {
      console.log(
        `${ageToCompare.firstName} ${ageToCompare.lastName} is older than ${this.firstName} ${this.lastName}.`
      )
    } else {
      console.log(
        `${this.firstName} ${this.lastName} and ${ageToCompare.firstName} ${ageToCompare.lastName} are of the same age.`
      )
    }
  }

  static isOlderStatic(user1, user2) {
    if (user1.age > user2.age) {
      console.log(
        `${user1.firstName} ${user1.lastName} is older than ${user2.firstName} ${user2.lastName}.`
      )
    } else if (user1.age < user2.age) {
      console.log(
        `${user2.firstName} ${user2.lastName} is older than ${user1.firstName} ${user1.lastName}.`
      )
    } else {
      console.log(
        `${user1.firstName} ${user1.lastName} and ${user2.firstName} ${user2.lastName} are of the same age.`
      )
    }
  }
}

const user1 = new User('Cloud', 'Strife', 21, 'Nibelheim')
const user2 = new User('Tifa', 'Lockhart', 21, 'Nibelheim')
const user3 = new User('Aerith', 'Gainsborough', 22, 'Midgar')
const user4 = new User('Barret', 'Wallace', 35, 'Midgar')
const user5 = new User('Yuffie', 'Kisaragi', 16, 'Wutai')

console.log(user1, user2, user3, user4, user5)

//dynamic log
user1.isOlder(user2)
user3.isOlder(user4)
user5.isOlder(user2)

//static log
User.isOlderStatic(user1, user4)

//Ex2 ------------------------------------------------

document.addEventListener('DOMContentLoaded', (event) => {
  document.getElementById('submitBtn').addEventListener('click', submitEntry)
})

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName
    this.ownerName = ownerName
    this.species = species
    this.breed = breed
  }

  sameOwner(ownerToCompare) {
    return this.ownerName === ownerToCompare
  }
}

const allPets = []

const submitEntry = function () {
  const petName = document.getElementById('petName').value
  const ownerName = document.getElementById('ownerName').value
  const species = document.getElementById('species').value
  const breed = document.getElementById('breed').value

  const newPet = new Pet(petName, ownerName, species, breed)
  allPets.push(newPet)

  const petList = document.getElementById('list')
  const entry = document.createElement('li')
  entry.innerText = `${newPet.petName}, ${newPet.ownerName}, ${newPet.species}, ${newPet.breed}`
  petList.appendChild(entry)

  document.getElementById('petForm').reset()

  logSameOwner(newPet)
}

const logSameOwner = function (newPet) {
  const sameOwnerPets = allPets.filter(
    (pet) => pet.ownerName === newPet.ownerName && pet !== newPet
  )
  if (sameOwnerPets.length >= 1) {
    const names =
      sameOwnerPets.map((pet) => pet.petName).join(', ') + `, ${newPet.petName}`
    console.log(`Pets with the same owner (${newPet.ownerName}): ${names}`)
  }
}
