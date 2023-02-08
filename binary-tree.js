"use strict";

/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */
  minDepthToIncompleteNode() {
    let depth = 1;
    let seen = [this];

    while (seen.length) {
      let current = seen.shift();
      if (!current.left || !current.right) return depth;
      depth++;
      seen.push(current.left);
      seen.push(current.right);
    }

    return depth;
  }

  /** maxDepth(): return the maximum depth from the invoking node -- that is,
   * the length of the longest path from the invoking node to a leaf. */

  maxDepthNonRecursion() {
    // TODO: Come back we're off by 1
    let maxDepth = 0;
    let depth = 0;

    let seen = [this];

    while (seen.length) {
      depth++;
      let current = seen.pop();

      if (current.left) seen.push(current.left);
      if (current.right) seen.push(current.right);
      maxDepth = Math.max(maxDepth, depth);
      if (!current.left && !current.right) depth++;
    }

    return maxDepth;
  }

  // DFS w/ recursion

  maxDepth() {

    // base case
    if(!this.left && !this.right) {
      return 1;
    }

    // check the left branch
    let leftDepth = this.left ? this.left.maxDepth() : 0;

    // check the right branch
    let rightDepth = this.right ? this.right.maxDepth() : 0;

    // we are not counting the node we are currently at, so we add 1
    return Math.max(leftDepth, rightDepth) + 1;
  }

  /** minDepth(): return the minimum depth from the invoking node -- that is,
   * the length of the shortest path from the invoking node to a leaf. */
  minDepth() {}
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepthToIncompleteNode(): return the minimum depth of the tree to an
   * incomplete node-- that is, the length of the shortest path from the root to
   * a node with less than two children. */

  // this is a stack or recursion problem; we'll use recursion

  minDepthToIncompleteNode() {
    if (this.root === null) return 0; // edge case
    return this.root.minDepthToIncompleteNode();
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  maxDepth() {
    if (this.root === null) return 0; // edge case
    return this.root.maxDepth();
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  // this is a stack or recursion problem; we'll use recursion

  minDepth() {}

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {}

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {}
}

module.exports = { BinaryTree, BinaryTreeNode };
