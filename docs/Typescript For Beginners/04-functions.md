---
sidebar_position: 4
---

# Functions

Functions are the building blocks of any application. TypeScript allows you to specify the types of arguments and return values.

## Typed Functions

Create a file named `functions.ts`:

```typescript
function add(a: number, b: number): number {
    return a + b;
}

function greetUser(name: string): string {
    return `Hello, ${name}!`;
}

const result = add(10, 20);
const greeting = greetUser("Bob");

console.log(result); // Output: 30
console.log(greeting); // Output: Hello, Bob!
```

## Optional Parameters

You can make parameters optional by adding a `?`:

```typescript
function buildName(firstName: string, lastName?: string) {
    if (lastName) {
        return `${firstName} ${lastName}`;
    } else {
        return firstName;
    }
}

console.log(buildName("John")); // Output: John
console.log(buildName("John", "Doe")); // Output: John Doe
```

## Running the Code

Run this example using `ts-node`:

```bash
npx ts-node functions.ts
```
