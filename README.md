# Visual Compiler

is a web-application to help students and enthusiasts explore compiler concepts in an interactive, user-friendly way. The app guides users through the five main compiler stages with clear visualizations. At each step, users can see how C source code is transformed into lower-level representations, supported by visualizations of memory and stack operations in the last step. The application is powered by a compiler for a subset of the C programming language. The focus is mainly on fundamental operations, control-flow mechanisms, and function calls. Users can write their own code or experiment with pre-defined examples organized in structured folders.

### Supported Language Features:

- Unary Operation.
- Binary, Logical and Relational Operations.
- Local Variables.
- If Statements and Conditional Expressions.
- Compound Statements.
- Loops.
- Functions.

### Optimizations

The compiler supports machine-independent optimizations applied to each function of the program, including:

- Constant Folding
- Copy Propagation
- Dead Store Elimination
- Unreachable Block Elimination

## Try It Out

You can test the app live here:
🔗 [Visual Compiler Playground](https://visualcompiler.github.io/compiler-app/#/playground/root/d241ccc5-12d3-4577-b0c9-3303d3531299)

## Getting Started

### Available Scripts

In the project directory, you can run:

### `npm install`

Downloads project dependencies.

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in your browser.
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### Technologies Used

- React + Vite
- TypeScript
- Tailwind CSS
- CodeMirror Editor
- ShadCN/UI Components

### Contribution

We welcome contributions of all kinds — bug fixes, language feature improvements, documentation, or new ideas.
**How to Contribute:**

1. Fork the repository to your own GitHub account.
2. Create a new branch for your work:
   `git checkout -b your-feature-name`
3. Make your changes and run the project locally to test them using **Available Scripts**.
4. Commit with a clear and concise message.
5. Push the branch.
6. Open a Pull Request to the main branch. In the PR description, clearly explain:

- The purpose of the changes.
- What has been implemented or fixed.
- Any additional context or screenshots if helpful.
