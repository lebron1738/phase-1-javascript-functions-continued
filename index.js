function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(deed = "go to the office") {
  return `This Monday, I will ${deed}.`;
}
function wrapAdjective(term = "*") {
  return function (name = "special") {
    return `You are ${term}${name}${term}!`;
  };
}
