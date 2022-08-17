const findTheOldest = function(people) {
  const currrentYear = (new Date()).getFullYear();
  const sorted = people.sort((a, b) => {
    const aAge = (("yearOfDeath" in a) ? a.yearOfDeath : currrentYear) - a.yearOfBirth;
    const bAge = (("yearOfDeath" in b) ? b.yearOfDeath : currrentYear) - b.yearOfBirth;
    return (aAge < bAge) ? 1 : -1;
  });

  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
