import React from 'react';
import './assets/Home.css'; // Import the CSS file for styling

function StackSection () {
  return (
    <div>
      {/* Stack Section */}
      <h3 className="subheading">Stack</h3>
      <p className="intro-text">
        A Stack is a linear data structure that follows the Last In First Out (LIFO) principle. This means that the last element added to the stack is the first one to be removed. Stacks are commonly used in scenarios like undo operations, function calls, and parsing expressions.
      </p>
      
      <h3 className="subheading">Stack Operations</h3>
      <ul className="operation-list">
        <li><strong>Push:</strong> Adds an element to the top of the stack.</li>
        <li><strong>Pop:</strong> Removes the element from the top of the stack.</li>
        <li><strong>Peek:</strong> Returns the element at the top of the stack without removing it.</li>
        <li><strong>IsEmpty:</strong> Checks whether the stack is empty.</li>
      </ul>

      <h3 className="subheading">Stack Code Example</h3>
      <p className="code-description">Here's an example of how a simple stack can be implemented in Java using an array:</p>
      <pre className="code-block">
        {`public class Stack {
    private static final int MAXSIZE = 5;
    private int[] stack = new int[MAXSIZE];
    private int top = -1;

    public void push(int value) {
        if(top == MAXSIZE - 1) {
            System.out.println("Stack is Full");
        } else {
            stack[++top] = value;
            System.out.println("Pushed " + value + " to the stack.");
        }
    }

    public void pop() {
        if(top == -1) {
            System.out.println("Stack is Empty");
        } else {
            System.out.println("Popped " + stack[top--] + " from the stack.");
        }
    }

    public static void main(String[] args) {
        Stack s = new Stack();
        s.push(10);
        s.push(20);
        s.push(30);
        s.pop();
        s.push(40);
    }
}
`}
      </pre>
      <p className="code-description">This simple implementation of a stack includes the common methods for pushing, popping, peeking, and checking if the stack is empty.</p>

      {/* Stack Output */}
      <h3 className="subheading">Stack Output</h3>
      <pre className="output-screen">
        {`Pushed 10 to the stack.
Pushed 20 to the stack.
Pushed 30 to the stack.
Popped 30 from the stack.
Pushed 40 to the stack.`}
      </pre>
    </div>
  );
}

export default StackSection;