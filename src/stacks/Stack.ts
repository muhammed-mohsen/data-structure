export class Stack {
  /**
   * calculateBalanceExpressions
   */
  public calculateBalanceExpressions(input: string) {
    const expressionsStack: string[] = [];
    const expressions: { [key: string]: string } = {
      "(": ")",
      "[": "]",
      "<": ">",
      "{": "}",
    };

    [...input].forEach((char, index) => {
      if (expressions[char]) {
        expressionsStack.push(char);
      } else if (
        expressions[expressionsStack[expressionsStack.length - 1]] === char
      ) {
        expressionsStack.pop();
      }
    });
    return !expressionsStack.length
  }
}

// import { Stack } from './stacks/Stack';
// const stack = new Stack();
// const isBalanced = stack.calculateBalanceExpressions("[(1+1)]")
// console.log("🚀 ~ file: index.ts ~ line 3 ~ isBalanced ", isBalanced )
