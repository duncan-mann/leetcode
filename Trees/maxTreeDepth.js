/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */



// Ex. [3,9,20,null,null,15,7]
let ex = {
    val : 3,
    left: {
        val : 9, 
        left: null,
        right: null
    },
    right: {
        val: 20,
        left: {
            val: 15,
            left: null,
            right: null
        },
        right: {
            val: 7,
            left: null,
            right: null
        }
    }
}

var maxDepth = function(root) {

    let children = [{depth: 1, node: root}];
    let depth = 1;

    while (children.length > 0) {
        let nextNode = children.shift();
        depth = nextNode.depth;

        if (nextNode.node.left) {
            children.push({
                depth: (depth + 1),
                node: nextNode.node.left
            });
        }
    
        if (nextNode.node.right) {
            children.push({
                depth: (depth + 1),
                node: nextNode.node.right
            });
        }

        console.log(children);
    }

    return depth;
};

console.log(maxDepth(ex));