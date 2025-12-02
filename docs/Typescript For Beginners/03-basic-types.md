---
sidebar_position: 3
---

# Variables & Basic Types

One of the main benefits of TypeScript is its type system. Let's explore how to declare variables with types.

## Basic Types

Create a file named `types.ts` and try the following code:

```typescript
// String
let username: string = "Alice";

// Number
let age: number = 25;

// Boolean
let isStudent: boolean = true;

// Array
let skills: string[] = ["HTML", "CSS", "TypeScript"];

console.log(`User: ${username}, Age: ${age}`);
console.log(`Skills: ${skills.join(", ")}`);
```

## Type Inference

TypeScript is smart! You don't always need to specify the type explicitly.

```typescript
let country = "USA"; // TypeScript infers this is a string
// country = 10; // Error: Type 'number' is not assignable to type 'string'.
```

## Running the Code

Run this example using `ts-node`:

```bash
npx ts-node types.ts
```
