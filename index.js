function saturdayFun (activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
let mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}`
}
const wrapAdjective = (activity = '*') => {
    return (pram = 'special')=> {
        return `You are ${activity}${pram}${activity}!`    }
}