const findTheOldest = function (people) {
  // First Try:
  // people.sort((first, second) => {
  //   if (first.yearOfDeath === undefined)
  //     first.yearOfDeath = new Date().getFullYear();
  //   if (second.yearOfDeath === undefined)
  //     second.yearOfDeath = new Date().getFullYear();
  //   return first.yearOfDeath - first.yearOfBirth >
  //     second.yearOfDeath - second.yearOfBirth
  //     ? -1
  //     : 1;
  // });
  // return people[0];
  return people.reduce((oldest, current) => {
    return getAge(oldest) < getAge(current) ? current : oldest;
  });
};

function getAge(person) {
  person.yearOfDeath ??= new Date().getFullYear();
  return person.yearOfDeath - person.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
