input.onButtonPressed(Button.A, function () {
    No1 += 1
    basic.showNumber(No1)
})
input.onButtonPressed(Button.AB, function () {
    sum = No1 + No1
    basic.showNumber(sum)
})
input.onButtonPressed(Button.B, function () {
    No1 += -1
    basic.showNumber(No2)
})
input.onGesture(Gesture.Shake, function () {
    a = No1 + 9
    b = No1 - 9
    c = No1 ** 2
    d = No1 / 3
    e = No1 % 4
    f = Math.sqrt(No1)
    g = Math.round(0.75)
    h = Math.ceil(0.33)
    i = No1 ** 3
    j = randint(No1, 100)
})
let j = 0
let i = 0
let h = 0
let g = 0
let f = 0
let e = 0
let d = 0
let c = 0
let b = 0
let a = 0
let sum = 0
let No2 = 0
let No1 = 0
No1 = 0
No2 = 0
sum = 0
basic.forever(function () {
	
})
