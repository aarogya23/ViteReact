const recursionContent = {
  title: "Introduction to Recursion",
  introText: `The process in which a function calls itself directly or indirectly is called recursion, and the corresponding function is called a recursive function.
  A recursive algorithm takes one step toward a solution and then recursively calls itself to move further. The algorithm stops once we reach the solution.
  Since the called function may further call itself, this process might continue forever. So, it is essential to provide a base case to terminate the recursion process.`,

  factorialExample: {
    subtitle: "Example: Factorial using Recursion (Java)",
    code: `public class RecursionExample {
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
}`,
    output: "Factorial of 5 is: 120",
    explanation: [
      "The function calls itself until it reaches the base case (n == 0).",
      "Each recursive call reduces n by 1 until it reaches 0.",
      "The multiplication happens in a chain as the calls return their values."
    ]
  },

  fibonacciExample: {
    subtitle: "Example: Fibonacci Series Using Recursion Function (Java)",
    code: `package Chapter2;

import java.util.Scanner;

public class fibonacciseries {
    public static int fibonacci(int n) {
        if(n<=1){
            return n;
        } else {
            return fibonacci(n-1) + fibonacci(n-2);
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter the number of terms for the Fibonacci series: ");
        int n = scanner.nextInt();
        System.out.println("Fibonacci Series");
        for(int i = 0; i < n ;i++) {
            System.out.print(fibonacci(i) + " ");
        }
    }
}`,
    output: "Enter the number of terms for the Fibonacci series: 5\nFibonacci Series\n0 1 1 2 3",
  },

  fibonacciSumExample: {
    subtitle: "Example: Fibonacci Series Sum Using Recursion Function (Java)",
    code: `package Chapter2;

public class fibonancisum {
    public static int fibonacci(int n) {
        if(n<=1){
            return n;
        } else {
            return fibonacci(n-1) + fibonacci(n-2);
        }
    }

    public static void main(String[] args) {
        int sum = 0;
        int n = 5;
        System.out.println("Fibonacci Series");
        for(int i = 0; i < n ;i++) {
            System.out.print(fibonacci(i) + " ");
            int total = fibonacci(i);
            sum = sum + total;
            System.out.println("The sum of the series is " + sum);
        }
    }
}`,
    output: "Fibonacci Series\n0 The sum of the series is 0\n1 The sum of the series is 1\n1 The sum of the series is 2\n2 The sum of the series is 4\n3 The sum of the series is 7",
  }
};

export default recursionContent;
