---
sidebar_position: 1
---

# Environment Setup

Welcome to the **TypeScript Beginners Guide**. In this section, we will cover how to set up your development environment to start writing TypeScript.

## Prerequisites

Before we begin, make sure you have **Node.js** installed on your computer.
- Download it from [nodejs.org](https://nodejs.org/).
- Verify installation by running `node -v` in your terminal.

## Installation Guide

### 1. Create a Project Folder

Open your terminal (Command Prompt, PowerShell, or VS Code Terminal) and run:

```bash
mkdir my-ts-app
cd my-ts-app
```

### 2. Initialize the Project

Create a `package.json` file to manage your project:

```bash
npm init -y
```

### 3. Install TypeScript

Install TypeScript as a development dependency:

```bash
npm install typescript --save-dev
```

### 4. Initialize TypeScript Configuration

Generate a `tsconfig.json` file. This file controls how TypeScript compiles your code.

```bash
npx tsc --init
```

You are now ready to write TypeScript code!
