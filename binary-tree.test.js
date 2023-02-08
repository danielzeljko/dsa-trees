"use strict";

const { BinaryTree, BinaryTreeNode } = require("./binary-tree");

let smallTree;
let largeTree;
let emptyTree;
let longTree;

beforeEach(function() {
  emptyTree = new BinaryTree();

  // build small tree
  //
  //            root
  //              |
  //              6
  //            /   \
  //           5     5
  //

  let smallLeft = new BinaryTreeNode(5);
  let smallRight = new BinaryTreeNode(5);
  let smallRoot = new BinaryTreeNode(6, smallLeft, smallRight);
  smallTree = new BinaryTree(smallRoot);

  // build large tree
  //
  //                  root
  //                   |
  //                   6
  //                /     \
  //               5       5
  //                    /     \
  //                   3       1
  //                 /   \
  //                2     1
  //

  let node6 = new BinaryTreeNode(1);
  let node5 = new BinaryTreeNode(1);
  let node4 = new BinaryTreeNode(2);
  let node3 = new BinaryTreeNode(3, node4, node6);
  let node2 = new BinaryTreeNode(5, node3, node5);
  let node1 = new BinaryTreeNode(5);
  let root = new BinaryTreeNode(6, node1, node2);
  largeTree = new BinaryTree(root);

  // build long tree
  //                   6
  //                /     \
  //               5       5
  //              /         \
  //             4           3
  //            /          /  \
  //           3          2    1
  //         /   \       /
  //        2     1     1
  //

  let j = new BinaryTreeNode(1);
  let i = new BinaryTreeNode(1);
  let h = new BinaryTreeNode(2);
  let g = new BinaryTreeNode(1);
  let f = new BinaryTreeNode(2, j, null);
  let e = new BinaryTreeNode(3, h, i);
  let d = new BinaryTreeNode(3, f, g);
  let c = new BinaryTreeNode(4, e, null);
  let b = new BinaryTreeNode(5, null, d);
  let a = new BinaryTreeNode(5, c, null);
  let r = new BinaryTreeNode(6, a, b);
  longTree = new BinaryTree(r);
});

describe("minDepthToIncompleteNode", function() {
  it("handles simple trees", function() {
    expect(smallTree.minDepthToIncompleteNode()).toBe(2);
  });

  it("handles more complex trees", function() {
    expect(largeTree.minDepthToIncompleteNode()).toBe(2);
  });

  it("handles empty trees", function() {
    expect(emptyTree.minDepthToIncompleteNode()).toBe(0);
  });

  it("handles long tree", function () {
    expect(longTree.minDepthToIncompleteNode()).toBe(2);
  });
});

describe("maxDepth", function() {
  it("handles simple trees", function() {
    expect(smallTree.maxDepth()).toBe(2);
  });

  it("handles more complex trees", function() {
    expect(largeTree.maxDepth()).toBe(4);
  });

  it("handles empty trees", function() {
    expect(emptyTree.maxDepth()).toBe(0);
  });

  it("handles long tree", function () {
    expect(longTree.maxDepth()).toBe(5);
  });
});

describe("minDepth", function() {
  it("handles simple trees", function() {
    expect(smallTree.minDepth()).toBe(2);
  });

  it("handles more complex trees", function() {
    expect(largeTree.minDepth()).toBe(2);
  });

  it("handles empty trees", function() {
    expect(emptyTree.minDepth()).toBe(0);
  });

  it("handles long tree", function () {
    expect(longTree.minDepth()).toBe(4);
  });
});

describe("nextLarger", function() {
  it("handles simple trees", function() {
    expect(smallTree.nextLarger(4)).toBe(5);
    expect(smallTree.nextLarger(5)).toBe(6);
    expect(smallTree.nextLarger(6)).toBe(null);
  });

  it("handles empty trees", function() {
    expect(emptyTree.nextLarger(0)).toBe(null);
  });

  it("handles more complex trees", function() {
    expect(largeTree.nextLarger(1)).toBe(2);
    expect(largeTree.nextLarger(2)).toBe(3);
    expect(largeTree.nextLarger(3)).toBe(5);
    expect(largeTree.nextLarger(4)).toBe(5);
    expect(largeTree.nextLarger(5)).toBe(6);
    expect(largeTree.nextLarger(6)).toBe(null);
  });

  it("handles long tree", function () {
    expect(longTree.nextLarger(3)).toBe(4);
  });
});

describe("areCousins", function() {
  // build tree1 with cousins
  //
  //                  root
  //                    |
  //                    1
  //                 /     \
  //               2         3
  //             /   \     /   \
  //            4     5   6     7
  //

  let n7 = new BinaryTreeNode(7);
  let n6 = new BinaryTreeNode(6);
  let n5 = new BinaryTreeNode(5);
  let n4 = new BinaryTreeNode(4);
  let n3 = new BinaryTreeNode(3, n6, n7);
  let n2 = new BinaryTreeNode(2, n4, n5);
  let root = new BinaryTreeNode(1, n2, n3);
  let tree1 = new BinaryTree(root);

  // build tree2 with cousins
  //                   6
  //                /     \
  //               5       5
  //              /         \
  //             4           3
  //            /          /  \
  //           3          2    1
  //         /   \       /
  //        2     1     1
  //

  let j = new BinaryTreeNode(1);
  let i = new BinaryTreeNode(1);
  let h = new BinaryTreeNode(2);
  let g = new BinaryTreeNode(1);
  let f = new BinaryTreeNode(2, j, null);
  let e = new BinaryTreeNode(3, h, i);
  let d = new BinaryTreeNode(3, f, g);
  let c = new BinaryTreeNode(4, e, null);
  let b = new BinaryTreeNode(5, null, d);
  let a = new BinaryTreeNode(5, c, null);
  let r = new BinaryTreeNode(6, a, b);
  let tree2 = new BinaryTree(r);

  it("tree1: returns true if they are cousins, false if not", function() {
    expect(tree1.areCousins(n4, n6)).toBe(true);
    expect(tree1.areCousins(n4, n7)).toBe(true);
    expect(tree1.areCousins(n5, n6)).toBe(true);
    expect(tree1.areCousins(n5, n7)).toBe(true);
    expect(tree1.areCousins(n2, n3)).toBe(false);
    expect(tree1.areCousins(n4, n5)).toBe(false);
    expect(tree1.areCousins(n6, n7)).toBe(false);
    expect(tree1.areCousins(n4, n3)).toBe(false);
    expect(tree1.areCousins(root, n3)).toBe(false);
  });

  it("tree2: returns true if they are cousins, false if not", function(){
    expect(tree2.areCousins(h, j)).toBe(true);
    expect(tree2.areCousins(c, d)).toBe(true);

    expect(tree2.areCousins(a, b)).toBe(false);
    expect(tree2.areCousins(f, g)).toBe(false);
  });
});

