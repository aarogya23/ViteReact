// src/Tree.js
import React from 'react';
import './assets/Tree.css'; // Import the CSS file for styling
import { useNavigate } from 'react-router-dom';

// Import the images for each tree type
import fullTreeImage from './assets/full.png';
import strictTreeImage from './assets/full.png';
import perfectTreeImage from './assets/per.png';
import completeTreeImage from './assets/comp.png';
import skewed1 from './skewed1.png';
import degenerate from './degenerate.png';
import balanced from './balanced.png';

const Tree = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // Go back to the previous page
    navigate(-1);
  };

  const handleNext = () => {
    navigate('/recursion'); // Ensure this path matches the route for recursion.jsx
  };
  
  return (
    <div className="tree-container">
      <h2 className="title">Types of Trees in Data Structures</h2>

      {/* Binary Tree Section */}
      <h3 className="subheading">Binary Tree</h3>
      <p className="intro-text">
        A Binary Tree is a tree data structure where each node has at most two children, commonly referred to as the left child and the right child. It is one of the most fundamental tree structures and forms the basis for many other tree structures, such as Binary Search Trees (BSTs).
      </p>
      <p className="theory-text">
        A Binary Tree has the following properties:
        <ul>
          <li><strong>Each node has at most two children</strong> (left and right).</li>
          <li><strong>The root node</strong> is the topmost node in the tree.</li>
          <li><strong>Leaf nodes</strong> are nodes that have no children.</li>
        </ul>
        Binary Trees are commonly used for:
        <ul>
          <li>Expression trees</li>
          <li>Binary search trees (BSTs)</li>
          <li>Heap data structures</li>
        </ul>
      </p>

      <h3 className="subheading">Binary Tree Operations</h3>
      <ul className="operation-list">
        <li><strong>Insert:</strong> Adds a new node to the tree.</li>
        <li><strong>Delete:</strong> Removes a node from the tree.</li>
        <li><strong>Traversal:</strong> The process of visiting all nodes in a tree. Common traversal methods include Pre-order, In-order, and Post-order.</li>
      </ul>

      <h3 className="subheading">Binary Tree Code Example</h3>
      <p className="code-description">Here’s an example of a simple Binary Tree with in-order traversal:</p>
      <pre className="code-block">
        {`class BinaryTree {
    Node root;

    static class Node {
        int data;
        Node left, right;

        Node(int key) {
            key = data;
            left = right = null;
        }
    }

    public void inorderTraversal(Node node) {
        if (node == null){
        return;
        } 
        else{
        inorderTraversal(node.left);
        System.out.print(node.data + " ");
        inorderTraversal(node.right);
        }
    }

    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.root = new Node(1);
        tree.root.left = new Node(2);
        tree.root.right = new Node(3);
        tree.root.left.left = new Node(4);

        System.out.print("In-order Traversal: ");
        tree.inorderTraversal(tree.root);
    }
}
`}</pre>
      <p className="code-description">This example demonstrates how to traverse the tree in in-order fashion. The output will print the nodes in a sorted order for a Binary Search Tree.</p>

      {/* Binary Tree Output */}
      <h3 className="subheading">Binary Tree Output</h3>
      <pre className="output-screen">
        {`In-order Traversal: 4 2 1 3`}
      </pre>

      {/* New Tree Types Section */}
      <h3 className="subheading">Full Tree</h3>
      <p className="intro-text">
        A Full Tree (also called a Proper or Strict Binary Tree) is a binary tree where every node has either zero or exactly two children. There are no nodes with only one child.
      </p>
      <img src={fullTreeImage} alt="Full Tree" className="tree-image" />

      <h3 className="subheading">Strict Tree</h3>
      <p className="intro-text">
        A Strict Binary Tree is another term for a Full Tree. Each node has either zero or two children.
      </p>
      <img src={strictTreeImage} alt="Strict Tree" className="tree-image" />

      <h3 className="subheading">Perfect Tree</h3>
      <p className="intro-text">
        A Perfect Binary Tree is a binary tree in which all interior nodes have two children and all leaves are at the same level.
      </p>
      <p className="theory-text">
        Characteristics of a Perfect Binary Tree:
        <ul>
          <li>All internal nodes have exactly two children.</li>
          <li>All leaf nodes are at the same level.</li>
          <li>The number of leaf nodes at each level is a power of two.</li>
        </ul>
      </p>
      <img src={perfectTreeImage} alt="Perfect Tree" className="tree-image" />

      <h3 className="subheading">Complete Tree</h3>
      <p className="intro-text">
        A Complete Binary Tree is a binary tree where all levels, except possibly the last, are completely filled, and all nodes are as far left as possible.
      </p>
      <p className="theory-text">
        Characteristics of a Complete Binary Tree:
        <ul>
          <li>All levels are filled except for the last level, which is filled from left to right.</li>
          <li>The tree is balanced, meaning it does not leave gaps at the last level.</li>
        </ul>
      </p>
      <img src={completeTreeImage} alt="Complete Tree" className="tree-image" />

      <h3 className="subheading">Degenerate (or Pathological) tree</h3>
      <p className="intro-text">
      A Tree where every internal node has one child. Such trees are performance-wise same as linked list. A degenerate or pathological tree is a tree having a single child either left or right.
      </p>
      <p className="theory-text">
        Characteristics of a Complete Binary Tree:
        <ul>
          <li>All levels are filled except for the last level, which is filled from left to right.</li>
          <li>The tree is balanced, meaning it does not leave gaps at the last level.</li>
        </ul>
      </p>
      <img src={degenerate} alt="Complete Tree" className="tree-image" />

      <h3 className="subheading">Skewed Binary Tree</h3>
      <p className="intro-text">
      A skewed binary tree is a pathological/degenerate tree in which the tree is either dominated by the left nodes or the right nodes. Thus, there are two types of skewed binary tree: left-skewed binary tree and right-skewed binary tree.</p>
      <p className="theory-text">
        Characteristics of a Complete Binary Tree:
        <ul>
          <li>All levels are filled except for the last level, which is filled from left to right.</li>
          <li>The tree is balanced, meaning it does not leave gaps at the last level.</li>
        </ul>
      </p>
      <img src={skewed1} alt="Complete Tree" className="tree-image" />

      <h3 className="subheading">Balanced Binary Tree</h3>
      <p className="intro-text">
      A binary tree is balanced if the height of the tree is O(Log n) where n is the number of nodes. For Example, the AVL tree maintains O(Log n) height by making sure that the difference between the heights of the left and right subtrees is at most 1. Red-Black trees maintain O(Log n) height by making sure that the number of Black nodes on every root to leaf paths is the same and that there are no adjacent red nodes. Balanced Binary Search trees are performance-wise good as they provide O(log n) time for search, insert and delete.
      </p>
     
      <img src={balanced} alt="Complete Tree" className="tree-image" />
         {/* Binary Tree Section */}
         {/* Binary Search Tree Section */}
<h3 className="subheading">Binary Search Tree (BST)</h3>
<p className="intro-text">
  A Binary Search Tree (BST) is a type of binary tree in which the nodes are arranged in a specific order. In a BST, for any given node:
  <ul>
    <li>The left subtree contains only nodes with values smaller than the node's value.</li>
    <li>The right subtree contains only nodes with values greater than the node's value.</li>
  </ul>
  This ordering property makes it easier to search for a value, insert a new node, and delete a node. The time complexity for these operations is O(log n) for a balanced BST, but it can degrade to O(n) if the tree becomes unbalanced (like a linked list).
</p>
<p className="theory-text">
  A Binary Search Tree has the following properties:
  <ul>
    <li><strong>Left Subtree:</strong> All values are less than the parent node.</li>
    <li><strong>Right Subtree:</strong> All values are greater than the parent node.</li>
    <li><strong>Unique values:</strong> Each node's value is unique in the tree.</li>
  </ul>
  Binary Search Trees are widely used in applications like:
  <ul>
    <li>Efficient searching (like searching for a word in a dictionary)</li>
    <li>Sorted data storage</li>
    <li>Priority queues (in the form of heaps)</li>
  </ul>
</p>

<h3 className="subheading">Binary Search Tree Operations</h3>
<ul className="operation-list">
  <li><strong>Insert:</strong> Adds a new node to the BST while maintaining the BST property.</li>
  <li><strong>Search:</strong> Finds a node with a given value by comparing it with the current node and traversing left or right accordingly.</li>
  <li><strong>Delete:</strong> Removes a node from the tree and adjusts the tree to maintain the BST property.</li>
  <li><strong>Traversal:</strong> Similar to Binary Tree traversal but follows the BST property. In-order traversal returns values in sorted order.</li>
</ul>

<h3 className="subheading">Binary Search Tree Code Example</h3>
<p className="code-description">Here’s an example of a simple Binary Search Tree with insertion and in-order traversal:</p>
<pre className="code-block">
  {`
package Chapter2;

import java.util.Scanner;

public class BSt {
	int root;
	BSt left,right;
	
	BSt (int key){
		root = key;
	}
	
	public void insert (int node)
	{
		if(node<root) {
			if(left == null)
			{
				left = new BSt(node);
			}
			else {
				left.insert(node);
			}
		}
		else {
			if(right == null) {
				right = new BSt(node);
			}
			else {
				right.insert(node);
			}
		}
	}
	
	public void inOrder(BSt t1) {
		if(t1 == null) {
			return;
		}
		else {
			
			inOrder(t1.left);
			System.out.print(t1.root + "," );
			inOrder(t1.right);
		}
	}
	
	public void preOrder(BSt t1) {
		if(t1 == null) {
			return;
		}
		else {
			
			System.out.print(t1.root + "," );
			
			inOrder(t1.left);
			
			inOrder(t1.right);
		}
	}
	
	public void postOrder(BSt t1) {
		if(t1 == null) {
			return;
		}
		else {
			
		
			inOrder(t1.left);
			
			inOrder(t1.right);
			
			System.out.print(t1.root + "," );
			
		}
	}
	
	
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter any number from 1 to 3 i.e. 1. inOrder 2. preOrder 3. postOrder");
		
		
		int i = sc.nextInt();
		
		BSt t1 = new BSt(5);
		
		t1.insert(3);
		t1.insert(9);
		t1.insert(10);
		t1.insert(15);
		t1.insert(27);
		t1.insert(50);
		if(i == 1) {
			System.out.println("\nThis is for inOrder");
			t1.inOrder(t1);
		}
		else if(i == 2) {
			System.out.println("\nThis is for preOrder");
	        t1.preOrder(t1);
		}
		else {
    	System.out.println("\nThis is for postOrder");
        t1.postOrder(t1);
		}

	}
	

}

`}
</pre>
<p className="code-description">This example demonstrates how to insert values into a Binary Search Tree and perform an in-order traversal. The output will print the values in sorted order.</p>

{/* Binary Search Tree Output */}
<h3 className="subheading">Binary Search Tree Output</h3>
<pre className="output-screen">
  {`In-order Traversal: 3,5,9,10,15,27,50
    Pre-order Traversal: 5,3,9,10,15,27,50
    Post-order Traversal: 3,9,10,15,27,50,5`}
</pre>


      {/* Buttons at the Bottom */}
      <div className="navigation-buttons">
        <button className="back-button" onClick={handleBack} style={{height : '50px' , width : 'auto'}}>Back</button>
        <button className="next-button" onClick={handleNext} style={{height : '50px' , width : 'auto'}}>Next</button>
      </div>
    </div>
  );
};

export default Tree;
