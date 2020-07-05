class Solution:
    def findSecondMinimumValue(self, root: TreeNode) -> int:
        arr = self.inOrder(root)
        min_num = min(arr) 
        while min_num in arr:
            
            arr.remove(min(arr))
        if arr:
            return min(arr)
        return -1
    

    def inOrder(self, root):
        res = []
        if root:
            res.append(root.val)
            res = res + self.inOrder(root.left)
            res = res + self.inOrder(root.right)
        return res



if __name__ == '__main__':
    find = Solution();
    print(find.findSecondMinimumValue())