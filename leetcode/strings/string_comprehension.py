class Solution:
    def compress(self, chars):
        count = 0
        check = chars[0]

        for i in range(len(chars)):
            if chars[i] != check:
                if count > 1 and count < 10:
                    chars[i-1] = str(count)
                elif count > 9:
                    chars[i-2] = str(count)[0]
                    chars[i-1] = str(count)[1]
                check = chars[i]
                count = 1;

            
            elif i == len(chars)-1:
                count += 1;
                if count > 9:
                    chars[i-1] = str(count)[0]
                    chars[i] = str(count)[1]
                elif count > 1 and count < 10:
                    chars[i] = str(count)
                
            else:
                count += 1;
                check = chars[i]
                if count > 1:
                    chars[i] = 'cop'

        index = 0
        while index < len(chars)-1:
            if chars[index] == 'cop':
                chars.remove(chars[index])
            else:
                index += 1
        return chars
        

        


if __name__ == '__main__':
    les = Solution()

    print(les.compress(["a","a","a","a","a","a","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c","c","c","c","c","c","c","c","c","c","c"]))