---
sidebar_position: 2
---

# Hello World

Now that we have our environment set up, let's write our first TypeScript program.

## Writing the Code

Create a new file named `index.ts` in your project folder and add the following code:

```typescript
let message: string = "Hello, World!";
console.log(message);
```

## Compiling and Running

### 1. Compile to JavaScript

TypeScript code needs to be compiled into JavaScript to run. Run the compiler:

```bash
npx tsc
```

This will create an `index.js` file in your folder.

### 2. Run the Code

Now, run the compiled JavaScript file using Node.js:

```bash
node index.js
```

You should see the output:
```
Hello, World!
```

## Using `ts-node` (Optional)

For a faster workflow, you can run TypeScript files directly:

1. Install `ts-node`:
   ```bash
   npm install ts-node --save-dev
   ```

2. Run your file:
   ```bash
   npx ts-node index.ts
   ```
