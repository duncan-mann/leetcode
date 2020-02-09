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

//Set initial depth to 2, because first time it will be called is on children of root (i.e second )
const recursive = (node, dep = 2) => {
    let depth = dep;

    let children = [];

    if (node.left) {
        children.push(node.left);
    }
    if (node.right) {
        children.push(node.right);
    }

    if (children.length) {
        for (let child of children) {
            return recursive(child, depth + 1);
        }
    }
    
    return depth;
}

return recursive(root);
    

};

console.log(maxDepth(ex));