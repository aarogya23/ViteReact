import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './assets/Home.css'; // Import the CSS file for styling

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNext = () => {
    navigate('/tree'); // Navigate to the Tree page when the "Next" button is clicked
  };

  return (
    <div className="home-container">
      <h2 className="title">Dsa Topics</h2>

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
`}</pre>
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

      {/* Queue Section */}
      <h3 className="subheading">Queue</h3>
      <p className="intro-text">
        Queues are linear data structures that follow the First In First Out (FIFO) principle. This means that the first element added to the queue will be the first one to be removed. Queues are commonly used in scenarios like scheduling tasks, handling requests, and in breadth-first search (BFS) algorithms in graph theory.
      </p>
      
      <h3 className="subheading">Queue Operations</h3>
      <ul className="operation-list">
        <li><strong>Enqueue:</strong> Adds an element to the end of the queue.</li>
        <li><strong>Dequeue:</strong> Removes the element from the front of the queue.</li>
        <li><strong>Peek:</strong> Returns the element at the front of the queue without removing it.</li>
        <li><strong>IsEmpty:</strong> Checks whether the queue is empty.</li>
      </ul>

      <h3 className="subheading">Queue Code Example</h3>
      <p className="code-description">Here's an example of how a simple queue can be implemented in Java using an array:</p>
      <pre className="code-block">
        {`package Chapter2;

public class OperationsQueue {
    private static int MAXSIZE = 3;
    private int[] queue = new int [MAXSIZE];
    private int front = -1;
    private int rear = -1;
    
    public void enqueue(int value) {
        if(rear == MAXSIZE - 1) {
            System.out.println("Queue is Full");
        } else {
            rear++;
            queue[rear] = value;
            System.out.println("The value enqueued in queue is: " + queue[rear]);
            if(front == -1) {
                front = 0;
            }
        }
    }

    public void dequeue() {
        if(front == -1) {
            System.out.println("Queue is empty");
        } else {
            System.out.println("The value dequeued in queue is " + queue[front]);
            if(front == rear) {
                front = -1;
                rear = -1;
            } else {
                front = front + 1;
            }
        }
    }

    public static void main(String[] args) {
        OperationsQueue sc = new OperationsQueue();
        sc.enqueue(6);
        sc.enqueue(7);
        sc.enqueue(8);
        sc.dequeue();
        sc.dequeue();
        sc.enqueue(8);
        sc.enqueue(8);
    }
}
`}</pre>
      <p className="code-description">This simple implementation of a queue includes the common methods for enqueueing, dequeueing, peeking, and checking if the queue is empty.</p>

      {/* Queue Output */}
      <h3 className="subheading">Queue Output</h3>
      <pre className="output-screen">
        {`The value enqueued in queue is: 6
The value enqueued in queue is: 7
The value enqueued in queue is: 8
The value dequeued in queue is 6
The value dequeued in queue is 7
The value enqueued in queue is: 8
The value enqueued in queue is: 8`}
      </pre>

      {/* Buttons at the Bottom */}
      <div className="navigation-buttons">
        <button className="back-button" style={{height : '50px' , width : 'auto'}}>Back</button>
        <button className="next-button" onClick={handleNext} style={{height : '50px' , width : 'auto'}}>Next</button> {/* Add onClick handler */}
      </div>
    </div>
  );
};

export default Home;
