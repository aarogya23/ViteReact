// src/Recursion.js
import React from 'react';
import './assets/Tree.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

const Recursion = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/tower-of-hanoi'); // Ensure this path matches the route for recursion.jsx
  };

  return (
    <div className="tree-container">
      <h2 className="title">Introduction to Recursion</h2>

      <p className="intro-text">
        The process in which a function calls itself directly or indirectly is called recursion, and the corresponding function is called a recursive function.
        <br /><br />
        A recursive algorithm takes one step toward a solution and then recursively calls itself to move further. The algorithm stops once we reach the solution.
        Since the called function may further call itself, this process might continue forever. So, it is essential to provide a base case to terminate the recursion process.
      </p>

      {/* Example Code Section */}
      <h3 className="subtitle">Example: Factorial using Recursion (Java)</h3>
      <pre className="code-block">
        {`
public class RecursionExample {
    // Recursive function to calculate factorial
    public static int factorial(int n) {
        if (n == 0) {
            return 1; // Base case
        }
        return n * factorial(n - 1); // Recursive call
    }

    public static void main(String[] args) {
        int num = 5;
        System.out.println("Factorial of " + num + " is: " + factorial(num));
    }
}
        `}
      </pre>

      <h3 className="subheading">Factorial Using Recursion Output Screen</h3>
      <pre className="output-screen">
        {`
Factorial of 5 is: 120
        `}
      </pre>

      <p><strong>Explanation:</strong></p>
      <ul>
        <li>The function calls itself until it reaches the base case (`n == 0`).</li>
        <li>Each recursive call reduces `n` by 1 until it reaches 0.</li>
        <li>The multiplication happens in a chain as the calls return their values.</li>
      </ul>
      
      <h3 className="subtitle">Example: Fibonnaci Series Using Recursion Function (Java)</h3>
      <pre className="code-block">
        {`
package Chapter2;

import java.util.Scanner;

public class fibonacciseries {

	public static int fibonacci(int n) {
		if(n<=1){
			return n;
		}
		else {
			return fibonacci(n-1) + fibonacci(n-2);
		}
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
        
        System.out.print("Enter the number of terms for the Fibonacci series: ");
        int n = scanner.nextInt();
		System.out.println("Fibonacci Series");
		
		
		for(int i = 0; i < n ;i++) {
			
		System.out.print(fibonacci(i)+" ");
		}
	}
}

        `}
      </pre>

      <h3 className="subheading">Fibonacci series Using Recursion Output Screen</h3>
      <pre className="output-screen">
        {`
Enter the number of terms for the Fibonacci series: 5
Fibonacci Series
0 1 1 2 3
        `}
      </pre>
      <h3 className="subtitle">Example: Fibonnaci Series Sum Using Recursion Function (Java)</h3>
      <pre className="code-block">
        {`
package Chapter2;

public class fibonancisum {

		public static int fibonacci(int n) {
			if(n<=1){
				return n;
			}
			else {
				return fibonacci(n-1) + fibonacci(n-2);
			}
		}
		
		public static void main(String[] args) {
			int sum = 0;
			int n = 5;
			System.out.println("Fibonacci Series");
			
			
			for(int i = 0; i < n ;i++) {
				
			System.out.print(fibonacci(i)+" ");
			int total = fibonacci(i);
			sum = sum + total;
			System.out.println("The sum of the series is "+ sum);
			}
		}
	}
        `}
      </pre>

      <h3 className="subheading">Fibonacci series Using Recursion Output Screen</h3>
      <pre className="output-screen">
        {`
Fibonacci Series
0 The sum of the series is 0
1 The sum of the series is 1
1 The sum of the series is 2
2 The sum of the series is 4
3 The sum of the series is 7

        `}
      </pre>
      <div className="navigation-buttons">
        <button className="back-button" onClick={handleBack} style={{height : '50px' , width : 'auto'}}>Back</button>
        <button className="next-button" onClick={handleNext} style={{height : '50px' , width : 'auto'}}>Next</button>
      </div>
    </div>
  );
};

export default Recursion;
