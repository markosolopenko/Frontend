from collections import Counter
from fractions import gcd
from functools import reduce

class Solution:
    def hasGroupsSizeX(self, deck) -> bool:
        count = Counter(deck).values()
        print(reduce(lambda a, b: gcd(a, b), count))
        


if __name__ == '__main__' :
    cls_ne = Solution()
    print(cls_ne.hasGroupsSizeX([1,1,1,2,2,2,3,3]))