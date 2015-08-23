export class Welcome {

    execHandler() {

        {
            let a = 10;
            var b = 1;
        }
        // console.log(a);
        console.log(b);

        for (let i = 0; i < 10; i++) {

        }

        console.log(i);

        var a = [];
        for (var i = 0; i < 10; i++) {
            a[i] = function() {
                console.log(i);
            };
        }
        a[6](); // 10

        var a = [];
        for (let i = 0; i < 10; i++) {
            a[i] = function() {
                console.log(i);
            };
        }
        a[6](); // 6

        var tmp = 123;

        if (true) {
            tmp = 'abc'; // ReferenceError
            let tmp;
        }

        let foo = 'outer';

        function bar(func = x => foo) {
            let foo = 'inner';
            console.log(func()); // outer
        }

        bar();

        if (true) {
            const MAX = 5;
        }

        const foo1 = Object.freeze({});

        var [a, b, c] = [1, 2, 3];

        // let [foo, [[bar], baz]] = [1, [[2], 3]];


        let [, , third] = ["foo", "bar", "baz"];

        let [x, , y] = [1, 2, 3];

        let [head, ...tail] = [1, 2, 3, 4];

        // var { foo, bar } = { foo: "aaa", bar: "bbb" };

        // const [a, b, c, d, e] = 'hello';

        var map = new Map();
        map.set('first', 'hello');
        map.set('second', 'world');

        for (let [key, value] of map) {
            console.log(key + " is " + value);
        }

        $("#result").append(`
          There are <b>${basket.count}</b> items
           in your basket, <em>${basket.onSale}</em>
          are on sale!
        `);
    }

}

function do_something() {
    console.log(foo); // ReferenceError
    let foo = 2;
}

// 报错
function dfdfg() {
    let a = 10;
    // var a = 1;
}

// 报错
function rtert() {
    let a = 10;
    // let a = 1;
}
