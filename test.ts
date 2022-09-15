// @ts-ignore
const a: number = 4;
const b: string = '4';
const c = true;
const d: string[] = ["4", "5"];
const e: any = 3;

function test(e: string): string {
    return ''
}

test(e);

const t = d.map((x) => x.toLowerCase());

type Point = { x: number, y: number };

type i3Point = Point & {
    z: number;
}

interface iPoint {
    x: number,
    y
        :
        number
}
;

interface i3dpoint extends iPoint {
    z: number;
}

type stringOrNumber = string | number;

function print(coord: iPoint) {

}

interface infoType {
    desc: string,
    isActive: boolean
}

interface tags {
    name: string,
    value: number
}

interface arrayApi {
    userId: number,
    id: number,
    title: string,
    info: infoType,
    tags: tags[]
}

const array: arrayApi = {
    "userId": 1,
    'id': 1,
    'title': 'delectus aut autem',
    'info': {
        'desc': 'detected aut autem',
        'isActive': true
    },
    'tags': [
        {
            'name': 'name',
            'value': 1000
        }
    ]
}


let te: 'test' = 'test';

type actionType = 'up' | 'down';

function perfAction(action: actionType): -1 | 1 {
    switch (action) {
        case "down":
            return -1
        case "up":
            return 1
    }
}

enum Direction {
    Up,
    Down = 2,
    Left,
    Right
}

enum DirectionTwo {
    Up = "UP",
    Down = "DOWN",
    Left = "lEFT",
    Right = "Right"
}

enum Decision {
    Yes = 1,
    No = calcEnum()
}

enum DecisionTwo {
    Yes = 1,
    No = "NO"
}

function calcEnum() {
    return 2
}

function runEnum(obj: { Up: string }) {

}

runEnum(DirectionTwo)

enum Test {
    A
}

let testTwo = Test.A;
let nameA = Test[testTwo];

const enum ConstEnum {
    A,
    B
}

const cc = ConstEnum.A;

enum Dice {
    One = 1,
    Two,
    Three
}

function ruDice(dice: Dice) {
    switch (dice) {
        case Dice.One:
            return "один";
        case Dice.Two:
            return "два";
        case Dice.Three:
            return "три";
        default:
            const a: never = dice
    }
}

const cort: [number, string, number] = [0, '1', 10];

cort.push(1);

cort.map(s => {
    switch (typeof s) {
        case 'string':

            break;
    }
})

function logTime<T>(item: T): T {
    console.log(new Date());
    return item
}

logTime<number>(1);
logTime<string>('test');

function logTimeTwo<T>(item: T): T {
    if (typeof item === 'string') {
        item.toLocaleUpperCase();
    }
    return item
}

interface myInterface {
    transform: <T, F>(a: T) => F;
}

class myGenClass<T> {
    // value: T;
}

interface TimeStamp {
    stamp: number;
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
    console.log(num.stamp);
    return num
}

