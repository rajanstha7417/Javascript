# Javascript
A code repo for learning Javascript

Courses:
Chai Aur Code JS playlist from youtube 
Roadmap created by Claude



# 🟨 The Complete JavaScript Mastery Roadmap

> A deep, end-to-end path from absolute fundamentals to expert-level JavaScript.
> Nothing is skipped — even the "simple" topics are here, because mastery is built on a complete foundation.

**How to use this roadmap**

- Go top to bottom. Each stage assumes the previous one.
- For every topic: (1) read/learn, (2) write code by hand, (3) build something tiny, (4) explain it out loud.
- Check the box `[ ]` → `[x]` as you truly understand a topic (can teach it, not just recognize it).
- Don't rush. Depth beats speed. Aim to *understand why*, not just *how*.
- JS has famous "gotchas" (`this`, coercion, hoisting, async). Lean *into* them — they're where mastery lives.

---

## 🗺️ Roadmap Overview (Stages)

| Stage | Theme                           | Goal                                        |
| ----- | ------------------------------- | ------------------------------------------- |
| 0     | Setup & Mental Model            | How JS runs: engines, runtimes, the console |
| 1     | Core Syntax & Types             | Primitives, variables, coercion — deeply   |
| 2     | Operators & Control Flow        | Decisions, loops, the quirky operators      |
| 3     | Functions                       | Hoisting,`this`, arrows, parameters       |
| 4     | Scope, Closures & Execution     | The hard core of JS                         |
| 5     | Objects & Prototypes            | The real heart of the language              |
| 6     | Arrays & Iteration              | Collections and the array methods           |
| 7     | Strings & Regex                 | Text manipulation                           |
| 8     | OOP                             | Classes, prototypal inheritance             |
| 9     | Asynchronous JS                 | Event loop, promises, async/await           |
| 10    | Functional Programming          | First-class functions, immutability         |
| 11    | Iterators, Generators & Symbols | Protocols and lazy data                     |
| 12    | Modules                         | Organizing code (ESM & CJS)                 |
| 13    | Error Handling                  | Robust programs                             |
| 14    | The Browser: DOM & Web APIs     | Front-end fundamentals                      |
| 15    | Metaprogramming                 | Proxy, Reflect, descriptors                 |
| 16    | Node.js & Runtimes              | JS outside the browser                      |
| 17    | Tooling & Ecosystem             | Professional workflow                       |
| 18    | Testing & Quality               | Reliable code                               |
| 19    | Performance & Engine Internals  | How JS*really* works                      |
| 20    | TypeScript                      | Static typing for mastery                   |
| 21    | Specializations                 | React, Node backends, etc.                  |
| 22    | Capstone Projects               | Prove your mastery                          |

---

## 🧰 Stage 0 — Setup & Mental Model

- [ ] What is JavaScript? (interpreted/JIT-compiled, dynamically & weakly typed, single-threaded, prototype-based)
- [ ] JS vs ECMAScript (the spec) — ES5, ES6/ES2015, and yearly ESxxxx releases
- [ ] JS engines: V8 (Chrome/Node), SpiderMonkey (Firefox), JavaScriptCore (Safari)
- [ ] Runtimes/hosts: Browser vs Node.js vs Deno vs Bun (engine + APIs)
- [ ] How code runs: parsing → AST → bytecode → JIT optimization
- [ ] The browser console & DevTools (running snippets, `console.log/table/dir`)
- [ ] Running JS: `<script>` tag (and `defer`/`async`), Node REPL, `node file.js`
- [ ] `"use strict"` (strict mode) and why it exists
- [ ] Choosing an editor (VS Code) + extensions
- [ ] Reading MDN docs and the ECMAScript spec (awareness)

### 🧠 Stage 0 Challenges

1. Run the same snippet (`console.log(this)`) in three places: the browser console, a `<script>`, and Node. Explain why `this` differs (Window vs `module.exports`/`globalThis`).
2. Write a script that fails silently without strict mode (e.g. assigning to an undeclared variable `x = 5`) and throws *with* `"use strict"`. Explain what strict mode changed.

---

## 🔤 Stage 1 — Core Syntax & Types

### 1.1 Basics

- [ ] Statements vs expressions
- [ ] Semicolons & Automatic Semicolon Insertion (ASI) — and its traps
- [ ] Comments (`//`, `/* */`)
- [ ] Case sensitivity & identifier naming rules
- [ ] `console.log` and friends

```
1.2 Variables var vs let vs const (scope, hoisting, reassignment) The Temporal Dead Zone (TDZ) Block scope vs function scope const with objects (binding vs mutability)
```

### 1.3 The Type System

- [ ] The 7 primitives: `string`, `number`, `bigint`, `boolean`, `undefined`, `symbol`, `null`
- [ ] `object` (the only non-primitive)
- [ ] `typeof` operator (and the infamous `typeof null === "object"` bug)
- [ ] `undefined` vs `null` (and when each appears)
- [ ] Numbers: IEEE 754 double, `0.1 + 0.2`, `NaN`, `Infinity`, `-0`
- [ ] `Number`, `parseInt`, `parseFloat`, `Number.isNaN` vs global `isNaN`
- [ ] `BigInt` for large integers
- [ ] Booleans
- [ ] `Symbol` (intro; depth in Stage 11)

### 1.4 Type Coercion (the JS minefield — master this)

- [ ] Implicit vs explicit coercion
- [ ] Truthy & falsy values (the 8 falsy: `false, 0, -0, 0n, "", null, undefined, NaN`)
- [ ] `==` (loose, with coercion) vs `===` (strict)
- [ ] String/number coercion with `+` vs other operators
- [ ] `Boolean()`, `Number()`, `String()` explicit conversion
- [ ] Object-to-primitive conversion (`toString`, `valueOf`, `Symbol.toPrimitive`)

### 🧠 Stage 1 Challenges

1. Predict the output of each, then verify and explain: `[] + []`, `[] + {}`, `{} + []`, `1 + "2"`, `"5" - 2`, `true + true`, `null + 1`, `undefined + 1`.
2. Explain why `0.1 + 0.2 !== 0.3`. Write `almostEqual(a, b, epsilon = Number.EPSILON)` that compares floats safely.
3. Build a truth table: loop over `[0, "", "0", [], {}, null, undefined, NaN]` and log each value's truthiness and its `==` comparison to `false`. Explain every surprising result (especially `[] == false` being `true` but `[]` being truthy).

---

## ➗ Stage 2 — Operators & Control Flow

- [ ] Arithmetic operators (`+ - * / % **`) and `++`/`--`
- [ ] Assignment & compound assignment (`+=`, etc.)
- [ ] Comparison operators (`== === != !== < > <= >=`)
- [ ] Logical operators (`&& || !`) and **short-circuit evaluation**
- [ ] Logical operators returning values (not just booleans)
- [ ] Nullish coalescing `??` (vs `||`)
- [ ] Optional chaining `?.`
- [ ] Logical assignment (`&&=`, `||=`, `??=`)
- [ ] Ternary operator `?:`
- [ ] Bitwise operators (`& | ^ ~ << >> >>>`)
- [ ] Comma operator, `void`, `delete`, `in`, `instanceof`
- [ ] Operator precedence & associativity
- [ ] `if / else if / else`
- [ ] `switch` (and fall-through, `break`)
- [ ] Loops: `for`, `while`, `do...while`
- [ ] `for...of` (iterables) vs `for...in` (keys) — the critical difference
- [ ] `break`, `continue`, labeled statements

### 🧠 Stage 2 Challenges

1. Explain the difference between `a || b`, `a ?? b`, and `a && b` as *value-returning* expressions. Show a case where `||` gives a wrong result that `??` fixes (e.g. a valid `0` or `""`).
2. Use optional chaining + nullish coalescing to safely read `user?.profile?.name ?? "Anonymous"` from objects with missing layers.
3. Loop over an array with `for...in` and explain why it's wrong (gives indices as strings, includes inherited enumerable props), then fix it with `for...of` and `forEach`.

---

## ⚙️ Stage 3 — Functions

- [ ] Function declarations vs function expressions
- [ ] Arrow functions (`=>`) — syntax variations
- [ ] **Hoisting**: declarations hoisted fully, expressions are not
- [ ] Parameters vs arguments
- [ ] Default parameters
- [ ] Rest parameters (`...args`)
- [ ] The `arguments` object (and why arrows don't have it)
- [ ] Spread syntax in calls
- [ ] Return values (and implicit `undefined`)
- [ ] First-class functions (functions as values)
- [ ] Higher-order functions
- [ ] Callbacks
- [ ] IIFE (Immediately Invoked Function Expression)
- [ ] **`this`** — the 4 binding rules: default, implicit, explicit, `new`
- [ ] Arrow functions and lexical `this` (no own `this`)
- [ ] `call`, `apply`, `bind`
- [ ] Recursion & the call stack
- [ ] Named function expressions & `function.name`
- [ ] Pure functions & side effects

### 🧠 Stage 3 Challenges

1. Write the same method as a regular function and an arrow function inside an object. Call them, and a `setTimeout` version of each. Explain exactly why `this` is the object in one case and `undefined`/`window`/`globalThis` in the other.
2. Implement your own `myBind(fn, context, ...presetArgs)` from scratch using `apply`, so it behaves like `Function.prototype.bind` (including partial application).
3. Predict the output: a `console.log(typeof foo)` and `foo()` placed *before* a function declaration `function foo(){}` and *before* a function expression `var bar = function(){}`. Explain hoisting differences.

---

## 🔒 Stage 4 — Scope, Closures & Execution Context

- [ ] Lexical (static) scoping
- [ ] Global, function, and block scope
- [ ] The scope chain
- [ ] Execution context (creation & execution phases)
- [ ] The call stack (and stack overflow)
- [ ] Hoisting deeply (variables vs functions, TDZ recap)
- [ ] **Closures** — functions remembering their lexical environment
- [ ] Practical closures: data privacy, function factories, memoization
- [ ] The classic loop-closure bug (`var` in a loop with `setTimeout`)
- [ ] Module pattern via closures (pre-ESM)
- [ ] Garbage collection & how closures keep variables alive (memory leaks)

### 🧠 Stage 4 Challenges

1. Write a `for (var i = 0; i < 3; i++) setTimeout(() => console.log(i))`. Explain why it logs `3 3 3`. Fix it three ways: `let`, an IIFE, and `setTimeout`'s third argument.
2. Build a `createCounter()` factory that returns `{ increment, decrement, get }` where the count is **truly private** (inaccessible from outside the closure).
3. Write a `once(fn)` higher-order function using a closure so the wrapped function can only ever run a single time, returning the cached result afterward.

---

## 🧱 Stage 5 — Objects & Prototypes (the heart of JS)

### 5.1 Objects

- [ ] Object literals
- [ ] Properties, accessing with dot vs bracket notation
- [ ] Computed property names
- [ ] Shorthand properties & methods
- [ ] Adding/updating/deleting properties (`delete`)
- [ ] Nested objects
- [ ] `in` operator and `hasOwnProperty` / `Object.hasOwn`
- [ ] Iterating: `for...in`, `Object.keys/values/entries`
- [ ] Reference semantics (objects copied by reference)
- [ ] Shallow vs deep copy (`Object.assign`, spread, `structuredClone`, JSON trick & its limits)
- [ ] Object equality (reference vs value)

### 5.2 Property Descriptors

- [ ] `Object.defineProperty` / `getOwnPropertyDescriptor`
- [ ] `writable`, `enumerable`, `configurable`
- [ ] Getters & setters (`get` / `set`)
- [ ] `Object.freeze`, `seal`, `preventExtensions`

### 5.3 Prototypes (the core mental model)

- [ ] `[[Prototype]]`, `__proto__`, `Object.getPrototypeOf`
- [ ] The prototype chain & property lookup
- [ ] `Object.create`
- [ ] Constructor functions & the `prototype` property
- [ ] `new` operator — what it actually does (4 steps)
- [ ] `instanceof` and how it walks the chain
- [ ] Prototypal inheritance (pre-class)
- [ ] Shadowing properties

### 🧠 Stage 5 Challenges

1. Without using `class`, build an inheritance chain with constructor functions: `Animal` → `Dog`, sharing a `speak()` method via the prototype. Verify with `instanceof` and inspect the chain via `Object.getPrototypeOf`.
2. Use `Object.defineProperty` to add a read-only, non-enumerable `id` property to an object. Prove it doesn't show up in `Object.keys` or `for...in` and can't be reassigned (in strict mode it throws).
3. Demonstrate that `JSON.parse(JSON.stringify(obj))` "deep copy" loses `Date`, `undefined`, functions, and breaks on circular refs — then do it correctly with `structuredClone`.

---

## 📚 Stage 6 — Arrays & Iteration

- [ ] Array literals, `Array()`, `Array.of`, `Array.from`
- [ ] Indexing, `length`, sparse arrays & holes
- [ ] Mutating methods: `push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin`
- [ ] Non-mutating: `slice, concat, flat, flatMap`, and the new immutable ones (`toSorted, toReversed, toSpliced, with`)
- [ ] Searching: `indexOf, lastIndexOf, includes, find, findIndex, findLast, findLastIndex`
- [ ] **Iteration methods**: `forEach, map, filter, reduce, reduceRight, some, every`
- [ ] `entries, keys, values`
- [ ] Spread & destructuring with arrays
- [ ] Array destructuring (defaults, skipping, rest, swapping)
- [ ] Multidimensional arrays
- [ ] Typed Arrays & ArrayBuffer (awareness)
- [ ] `Set` and `Map` (and `WeakSet`/`WeakMap`)
- [ ] When to use Map vs object, Set vs array

### 🧠 Stage 6 Challenges

1. Using only `reduce`, implement: a sum, a `map`, a `filter`, and a function that counts occurrences of each item into an object. Explain `reduce`'s accumulator/initial-value mechanics.
2. Take an array of user objects and produce a `Map` keyed by `id`, then a `Set` of unique cities. Explain why `Map`/`Set` beat plain objects/arrays here (key types, O(1) lookup, iteration order).
3. Show the difference between `sort()` default (lexicographic — why `[10, 9, 1].sort()` gives `[1, 10, 9]`) and `sort((a, b) => a - b)`. Then use the non-mutating `toSorted` and prove the original is unchanged.

---

## 🔡 Stage 7 — Strings & Regular Expressions

- [ ] String primitives vs `String` objects
- [ ] Template literals (backticks, `${}`, multiline)
- [ ] Tagged templates
- [ ] Common methods: `slice, substring, indexOf, includes, startsWith, endsWith`
- [ ] `toUpperCase, toLowerCase, trim, padStart, padEnd, repeat, replace, replaceAll, split, at`
- [ ] String immutability
- [ ] Unicode, code points, `charCodeAt`/`codePointAt`, surrogate pairs, emoji length gotchas
- [ ] `String.raw`
- [ ] Regular expressions:
  - [ ] Literal `/pattern/flags` vs `new RegExp`
  - [ ] Metacharacters, character classes, anchors, quantifiers
  - [ ] Groups (capturing, non-capturing, named), alternation, backreferences
  - [ ] Flags: `g i m s u y`
  - [ ] Methods: `test, exec`, and string's `match, matchAll, replace, split`
  - [ ] Lookahead / lookbehind

### 🧠 Stage 7 Challenges

1. Write a regex with **named groups** to parse a date string `2026-06-26` into `{ year, month, day }` using `match`/`groups`.
2. Demonstrate the emoji-length gotcha: `"👍".length` (it's 2!). Then correctly count "characters" using `[...str]` or `Intl.Segmenter`. Explain surrogate pairs.
3. Use `replaceAll` with a callback function to convert `snake_case` to `camelCase`.

---

## 🏛️ Stage 8 — Object-Oriented Programming (Classes)

- [ ] `class` syntax (sugar over prototypes — never forget this)
- [ ] Constructor, instance fields, methods
- [ ] Public class fields & methods
- [ ] **Private fields/methods** (`#name`)
- [ ] Static fields, methods, and static blocks
- [ ] Getters & setters in classes
- [ ] **Inheritance**: `extends` and `super` (constructor + method calls)
- [ ] Method overriding & polymorphism
- [ ] `instanceof` with classes
- [ ] Abstract-class patterns (no native abstract, but conventions)
- [ ] Mixins
- [ ] `new.target`
- [ ] When to use classes vs factory functions vs plain objects

### 🧠 Stage 8 Challenges

1. Convert your Stage 5 constructor-function inheritance (`Animal`/`Dog`) into ES6 `class` syntax with `extends`/`super`. Then prove it's the *same thing* by inspecting the prototype chain — show `class` is just sugar.
2. Build a `BankAccount` class with a **truly private** `#balance` field, public `deposit`/`withdraw` methods that validate, and a getter for the balance. Confirm `account.#balance` throws a syntax error from outside.
3. Implement a `Serializable` mixin (a function returning a class) and apply it to two unrelated classes. Explain why mixins exist given JS has no multiple inheritance.

---

## ⏳ Stage 9 — Asynchronous JavaScript (critical mastery zone)

- [ ] Synchronous vs asynchronous; single-threaded model
- [ ] The **call stack**, **Web/Node APIs**, **callback queue**, **microtask queue**
- [ ] The **Event Loop** (the single most important async concept)
- [ ] Macrotasks vs microtasks (`setTimeout` vs `Promise.then` ordering)
- [ ] Callbacks & "callback hell"
- [ ] `setTimeout`, `setInterval`, `queueMicrotask`
- [ ] **Promises**: states (pending/fulfilled/rejected), `then/catch/finally`
- [ ] Creating promises (`new Promise`, `Promise.resolve/reject`)
- [ ] Promise chaining & error propagation
- [ ] `Promise.all`, `allSettled`, `race`, `any`
- [ ] **`async`/`await`** (syntax sugar over promises)
- [ ] Error handling with `try/catch` in async functions
- [ ] Sequential vs parallel awaits (a common performance bug)
- [ ] Top-level `await` (in modules)
- [ ] `fetch` API and handling responses
- [ ] `AbortController` for cancellation
- [ ] Async iterators & `for await...of`

### 🧠 Stage 9 Challenges

1. **The classic event-loop puzzle.** Predict the exact log order:

   ```js
   console.log("A");
   setTimeout(() => console.log("B"), 0);
   Promise.resolve().then(() => console.log("C"));
   console.log("D");
   ```

   Explain it using the microtask vs macrotask queues.
2. You have 3 async `fetchUser(id)` calls. Write them once **sequentially** (awaiting each) and once **in parallel** (`Promise.all`). Time both and explain why parallel is ~3× faster for independent requests.
3. Implement a `delay(ms)` that returns a promise, then build an async `retry(fn, attempts, ms)` that retries a failing async function with a delay between attempts.

---

## λ Stage 10 — Functional Programming

- [ ] First-class & higher-order functions (recap)
- [ ] Pure functions & referential transparency
- [ ] Immutability (and how to fake it: spread, `Object.freeze`)
- [ ] `map` / `filter` / `reduce` as the FP core
- [ ] Function composition & piping
- [ ] Currying & partial application
- [ ] Point-free style
- [ ] Closures for FP (recap)
- [ ] Recursion vs iteration (and tail-call awareness)
- [ ] Avoiding shared mutable state & side effects
- [ ] Declarative vs imperative style

### 🧠 Stage 10 Challenges

1. Write a `compose(...fns)` and a `pipe(...fns)` utility. Use them to build a data transformation from several small pure functions (e.g. `trim → toLowerCase → capitalize`).
2. Write a generic `curry(fn)` that turns `add(a, b, c)` into something callable as `add(1)(2)(3)`, `add(1, 2)(3)`, or `add(1)(2, 3)`.
3. Take an imperative loop that mutates an array and rewrite it purely with `map`/`filter`/`reduce`, leaving the original untouched.

---

## 🔄 Stage 11 — Iterators, Generators & Symbols

- [ ] `Symbol` deeply (unique, as object keys, well-known symbols)
- [ ] Well-known symbols: `Symbol.iterator`, `Symbol.asyncIterator`, `Symbol.toPrimitive`, `Symbol.hasInstance`
- [ ] The **iterable protocol** (`[Symbol.iterator]()`) & **iterator protocol** (`next()` → `{value, done}`)
- [ ] What makes `for...of`, spread, and destructuring work
- [ ] Building a custom iterable
- [ ] **Generators** (`function*`, `yield`)
- [ ] Generator delegation (`yield*`)
- [ ] Two-way communication (`.next(value)`, `.return()`, `.throw()`)
- [ ] Infinite & lazy sequences
- [ ] Async generators & `for await...of`

### 🧠 Stage 11 Challenges

1. Make a plain object iterable by implementing `[Symbol.iterator]`, so it works with `for...of` and `[...obj]`. (e.g. a `Range` object that yields numbers.)
2. Write an infinite generator `idGenerator()` that yields `1, 2, 3, ...` forever, and a `take(gen, n)` helper that pulls the first `n` values lazily.
3. Build a generator-based `fibonacci()` and use spread + a slice to grab the first 10 numbers. Explain why generators are memory-efficient vs building an array.

---

## 📦 Stage 12 — Modules

- [ ] Why modules (avoiding globals, encapsulation)
- [ ] History: IIFEs → CommonJS → AMD → ESM
- [ ] **ES Modules (ESM)**: `export` / `import`, named vs default
- [ ] `import * as`, re-exporting, aliasing
- [ ] Dynamic `import()` (lazy loading, returns a promise)
- [ ] Module scope & singletons (modules run once, cached)
- [ ] `<script type="module">` (and deferred, CORS behavior)
- [ ] **CommonJS** (`require` / `module.exports`) — Node's legacy system
- [ ] ESM vs CJS interop & the `.mjs`/`.cjs`/`"type": "module"` story
- [ ] Top-level await in modules
- [ ] Import maps (browser) & bare specifiers

### 🧠 Stage 12 Challenges

1. Split a small program into 3 ES modules (a util, a model, a `main`). Use named and default exports, and one dynamic `import()` that loads a module only when a condition is met.
2. Demonstrate that a module is a **singleton**: export a mutable counter object from one module, import it into two others, mutate it in one, and observe the change in the other.
3. Write the *same* tiny module in both CommonJS and ESM and explain the key differences (synchronous `require` vs async/static `import`, `this`, live bindings).

---

## 🛡️ Stage 13 — Error Handling

- [ ] The `Error` object and built-in error types (`TypeError`, `RangeError`, `SyntaxError`, `ReferenceError`, etc.)
- [ ] `throw` (you can throw anything, but throw `Error`s)
- [ ] `try / catch / finally`
- [ ] Optional catch binding (`catch {}`)
- [ ] Custom error classes (`extends Error`, setting `name`, `cause`)
- [ ] Error `cause` option (chaining)
- [ ] `AggregateError` (with `Promise.any`)
- [ ] Synchronous vs asynchronous errors (why `try/catch` misses async callbacks)
- [ ] Handling promise rejections (`.catch`, `try/catch` with await)
- [ ] `unhandledrejection` / `uncaughtException` events
- [ ] Defensive coding vs failing fast
- [ ] `console.error`, `console.trace`, and the `debugger` statement

### 🧠 Stage 13 Challenges

1. Build a custom error hierarchy: `AppError` → `ValidationError`, `NetworkError`, each carrying extra fields. Write a handler that branches on `instanceof` and uses the `cause` option to wrap a lower-level error.
2. Show that a `throw` inside a `setTimeout` callback is **not** caught by a surrounding `try/catch`. Explain why (different tick / call stack) and how to handle it properly.
3. Use `Promise.allSettled` to run several tasks where some reject, then collect successes and failures separately without the whole batch failing.

---

## 🌐 Stage 14 — The Browser: DOM & Web APIs

- [ ] How the browser works: HTML → DOM tree, CSSOM, render tree
- [ ] `document`, selecting elements (`getElementById`, `querySelector`/`All`)
- [ ] Traversing the DOM (parent/children/siblings)
- [ ] Creating/inserting/removing nodes (`createElement`, `append`, `remove`, fragments)
- [ ] Modifying content (`textContent` vs `innerHTML` vs `innerText`) & XSS awareness
- [ ] Attributes vs properties; `dataset`, `classList`, `style`
- [ ] **Events**: `addEventListener`, the event object
- [ ] Event propagation: capturing, target, **bubbling**
- [ ] Event delegation
- [ ] `preventDefault`, `stopPropagation`
- [ ] Forms & input handling
- [ ] `fetch` & AJAX, JSON APIs, CORS basics
- [ ] Browser storage: `localStorage`, `sessionStorage`, cookies, IndexedDB (awareness)
- [ ] Timers, `requestAnimationFrame`
- [ ] Web APIs awareness: History, Geolocation, Web Workers, WebSockets, Intersection/Mutation Observers
- [ ] The `window` / `document` / `globalThis` objects

### 🧠 Stage 14 Challenges

1. Build a to-do list with vanilla JS: add/remove/toggle items, persisting to `localStorage`. Use **event delegation** (one listener on the parent) instead of one listener per item.
2. Demonstrate event bubbling vs capturing: nest 3 elements, attach listeners in both phases, click the inner one, and explain the firing order. Then stop propagation at one level.
3. Fetch data from a public JSON API, render it to the DOM, and handle loading + error states. Show why `innerHTML` with untrusted data is an XSS risk and fix it with `textContent`.

---

## 🪄 Stage 15 — Metaprogramming

- [ ] Property descriptors (recap) & `Object.defineProperties`
- [ ] **`Proxy`** — trapping operations (`get`, `set`, `has`, `deleteProperty`, `apply`, `construct`, ...)
- [ ] **`Reflect`** — the companion API for default behavior
- [ ] Practical proxies: validation, logging, reactive objects, negative array indices
- [ ] `Symbol` for metaprogramming (well-known symbols recap)
- [ ] `eval` and `Function` constructor (and why to avoid them)
- [ ] `globalThis`
- [ ] Tagged templates as a metaprogramming tool

### 🧠 Stage 15 Challenges

1. Use a `Proxy` to create a "default value" object: reading any missing key returns `0` instead of `undefined`. Then make a validating proxy that throws if you assign a non-number to any property (combine with `Reflect.set`).
2. Build a logging proxy that prints every property access and mutation, delegating real behavior to `Reflect`.
3. Implement negative-index array access (`arr[-1]` → last element) using a `Proxy` over an array.

---

## 🟩 Stage 16 — Node.js & Runtimes

- [ ] What Node is (V8 + libuv + APIs); the event loop in Node (phases, `process.nextTick`)
- [ ] Globals: `process`, `__dirname`, `__filename`, `Buffer`, `globalThis`
- [ ] CommonJS vs ESM in Node (recap)
- [ ] Core modules: `fs` (sync/async/promises), `path`, `os`, `http`, `events`, `stream`, `crypto`, `url`, `util`
- [ ] The `EventEmitter` pattern
- [ ] **Streams** (readable/writable/transform) & backpressure
- [ ] `Buffer` & binary data
- [ ] File system operations (callbacks vs promises vs sync)
- [ ] Building an HTTP server (raw `http`, then Express/Fastify awareness)
- [ ] Environment variables & config
- [ ] `npm`/`package.json` (scripts, dependencies vs devDependencies, semver)
- [ ] `npx`, the `node_modules` resolution algorithm
- [ ] Child processes & worker threads (awareness)
- [ ] Modern runtimes: **Deno** (secure, TS-first) and **Bun** (speed, all-in-one)

### 🧠 Stage 16 Challenges

1. Build a tiny HTTP server with the raw `http` module that routes `/` and `/api/users` (returning JSON). No frameworks.
2. Use streams to read a large file and pipe it through a transform (e.g. uppercase) to an output file, without loading it all into memory. Explain backpressure.
3. Create an `EventEmitter`-based system: an emitter that fires `data` and `error` events, with multiple listeners. Then explain how this pattern underlies streams and much of Node.

---

## 🛠️ Stage 17 — Tooling & Ecosystem

- [ ] `npm` / `pnpm` / `yarn` (and lockfiles)
- [ ] Semantic versioning (`^`, `~`, exact)
- [ ] **Transpilers**: Babel (and why — older browser support)
- [ ] **Bundlers**: Vite, esbuild, Rollup, webpack (what & why)
- [ ] Module bundling, tree-shaking, code-splitting
- [ ] Source maps
- [ ] **Linters/formatters**: ESLint, Prettier
- [ ] Polyfills & `core-js`
- [ ] Monorepos (awareness: workspaces, Turborepo, Nx)
- [ ] `.gitignore`, `.env`, dotenv
- [ ] Browser DevTools mastery (debugger, network, performance, memory tabs)

### 🧠 Stage 17 Challenges

1. Set up a fresh project with Vite, ESLint, and Prettier from scratch. Write code that violates a lint rule and fix it, then auto-format with Prettier.
2. Build a tiny library, bundle it with esbuild/Rollup, and inspect the output. Demonstrate **tree-shaking** by importing one function and confirming the unused ones are dropped.
3. Use Chrome DevTools to set a breakpoint, step through a buggy function, inspect the scope/closures, and find the bug — without a single `console.log`.

---

## ✅ Stage 18 — Testing & Quality

- [ ] Why test: unit vs integration vs e2e
- [ ] Test runners: **Vitest** / **Jest** (and Node's built-in `node:test`)
- [ ] Writing tests: `describe`, `it`/`test`, assertions (`expect`)
- [ ] Setup/teardown (`beforeEach`, etc.)
- [ ] Mocking, spies, stubs (`vi.fn`/`jest.fn`, mocking modules & timers)
- [ ] Testing async code & promises
- [ ] Snapshot testing
- [ ] Code coverage
- [ ] DOM/component testing (Testing Library) — awareness
- [ ] E2E testing: Playwright / Cypress — awareness
- [ ] TDD concept

### 🧠 Stage 18 Challenges

1. Write a small pure module (e.g. a `cart` with `addItem`, `total`) and fully test it with Vitest/Jest, including edge cases and `expect(...).toThrow()`.
2. Test an async function that calls `fetch` by **mocking** `fetch` to return a fake response, plus a case where it rejects. Use fake timers to test a debounce/retry.
3. Get one module to 100% coverage and explain what branch coverage caught that line coverage didn't.

---

## 🔬 Stage 19 — Performance & Engine Internals

- [ ] How V8 works: parsing, Ignition (bytecode), TurboFan (JIT optimization)
- [ ] Hidden classes / shapes & inline caches (why consistent object shapes are fast)
- [ ] Deoptimization triggers (changing object shape, mixing types)
- [ ] The memory model: stack vs heap, primitives vs references
- [ ] **Garbage collection** (mark-and-sweep, generational) & avoiding leaks
- [ ] Common memory leaks (forgotten timers, detached DOM nodes, closures, global refs)
- [ ] `WeakMap`/`WeakRef`/`FinalizationRegistry` for memory-friendly references
- [ ] Measuring: `performance.now`, DevTools Performance/Memory panels, benchmarking pitfalls
- [ ] Debounce & throttle
- [ ] Rendering performance: reflow/repaint, layout thrashing, `requestAnimationFrame`
- [ ] Web Workers for offloading CPU work
- [ ] Microtask starvation & long tasks
- [ ] Big-O awareness for array/object/Map operations

### 🧠 Stage 19 Challenges

1. Write a function that builds objects two ways — consistent shape vs adding properties in different orders/types — and benchmark. Explain hidden classes and why one is faster.
2. Create a deliberate memory leak (an interval capturing a growing array, or detached DOM nodes held by a closure), observe it in the DevTools Memory tab, then fix it.
3. Implement `debounce(fn, ms)` and `throttle(fn, ms)` from scratch and explain when to use each (resize/scroll/search-input scenarios).

---

## 🔷 Stage 20 — TypeScript (static typing for mastery)

- [ ] Why TypeScript (catching errors before runtime; superset of JS)
- [ ] Basic types: `string`, `number`, `boolean`, `null`, `undefined`, arrays, tuples
- [ ] `any` vs `unknown` vs `never` vs `void`
- [ ] Type inference & explicit annotations
- [ ] Object types & `interface` vs `type`
- [ ] Union & intersection types
- [ ] Literal types & `as const`
- [ ] **Generics** (functions, interfaces, classes, constraints)
- [ ] Type narrowing & type guards (`typeof`, `instanceof`, `in`, custom `is`)
- [ ] Discriminated unions
- [ ] Utility types (`Partial, Required, Pick, Omit, Record, Readonly, ReturnType`, etc.)
- [ ] Mapped & conditional types
- [ ] `keyof`, indexed access, `typeof` (type queries)
- [ ] Enums (and why many prefer unions/`as const`)
- [ ] Function types, overloads
- [ ] Modules & declaration files (`.d.ts`), `@types`
- [ ] `tsconfig.json` essentials & `strict` mode
- [ ] Typing async code, the DOM, and third-party libs

### 🧠 Stage 20 Challenges

1. Type a function that processes `{ id: number } | { name: string }` using a **discriminated union** and narrowing, so TS knows which shape you have in each branch.
2. Write a generic `pluck<T, K extends keyof T>(items: T[], key: K): T[K][]` and let TS infer the return type. Confirm it errors on an invalid key.
3. Recreate `Partial<T>` and `Pick<T, K>` yourself using **mapped types**, then convert a small JS module to strict TypeScript and resolve every error.

---

## 🚀 Stage 21 — Specialization Tracks (pick based on goals)

### 🖥️ Front-End Frameworks

- [ ] **React** (components, hooks, state, context, effects) — most in-demand
- [ ] Vue, Svelte, Angular, or SolidJS (alternatives)
- [ ] State management (Redux/Zustand/Pinia)
- [ ] Routing, forms, data fetching (TanStack Query)
- [ ] Meta-frameworks: **Next.js**, Nuxt, SvelteKit, Remix
- [ ] Styling: CSS-in-JS, Tailwind, CSS Modules

### ⚙️ Back-End / Full-Stack

- [ ] **Express** / **Fastify** / NestJS
- [ ] REST APIs, middleware, routing
- [ ] Databases: SQL (Postgres) + ORMs (Prisma, Drizzle), MongoDB
- [ ] Authentication (JWT, sessions, OAuth)
- [ ] WebSockets (Socket.IO), real-time
- [ ] Validation (Zod), API design
- [ ] Deployment (Docker, serverless, edge)

### 📱 Other

- [ ] Mobile: React Native
- [ ] Desktop: Electron, Tauri
- [ ] Build tools / compilers, CLI tools
- [ ] Canvas / WebGL / Three.js (graphics)
- [ ] Data viz: D3.js

---

## 🏆 Stage 22 — Capstone Projects (prove mastery)

**Beginner**

- [ ] Calculator (DOM + events)
- [ ] To-do app with localStorage
- [ ] Weather app (fetch + API + async)
- [ ] Quiz game
- [ ] Markdown previewer

**Intermediate**

- [ ] A small SPA with client-side routing (no framework)
- [ ] REST API with Express + a database + auth
- [ ] Real-time chat (WebSockets)
- [ ] Your own utility library (published to npm, with tests + types)
- [ ] A debounce/throttle/event-emitter mini-library

**Advanced**

- [ ] Full-stack app (React/Next + Node + DB + auth + deploy)
- [ ] Implement a mini reactive state library (Proxy-based, like a tiny Vue/Signals)
- [ ] Build a small bundler or a template engine (deep understanding)
- [ ] A Chrome extension or a CLI tool
- [ ] Contribute a PR to an open-source JS project

---

## 📌 Cross-Cutting Principles (apply throughout)

- [ ] Clean, readable, idiomatic JS (and a style guide, e.g. Airbnb)
- [ ] `const` by default, `let` when needed, never `var`
- [ ] Prefer immutability & pure functions
- [ ] Understand `this`, closures, and the event loop cold — they appear everywhere
- [ ] Always handle errors and promise rejections
- [ ] Security: XSS, CSRF, never `eval` untrusted input, sanitize DOM insertion
- [ ] Accessibility (a11y) basics for DOM work
- [ ] DRY, KISS, YAGNI, SOLID
- [ ] Read source of great libraries (lodash, the React core ideas)
- [ ] Keep up with TC39 proposals (awareness of what's coming)

---

## 🎯 Study Tips for Deep Mastery

1. **Type every example by hand.** Don't copy-paste. Muscle memory matters.
2. **Predict before you run.** Especially for coercion, `this`, hoisting, and the event loop — write your guess, then check.
3. **Embrace the "wat" moments.** JS's quirks are the doorway to understanding the engine.
4. **Use the console & DevTools constantly.** Debugger > `console.log`.
5. **Build small projects** after each stage — application beats memorization.
6. **Read MDN** for every API — it's the authoritative reference.
7. **Explain it out loud** (rubber-duck). If you can teach `closures` or the `event loop`, you've mastered them.
8. **Revisit fundamentals** after async/OOP — they get deeper.
9. **Don't skip the "boring" basics** — experts have airtight fundamentals.
10. **Keep a gotchas file** of every surprising behavior you discover.

---

*Roadmap created 2026-06-26. Work through it patiently — JavaScript is small to start but deep to master. Good luck! 🟨*
