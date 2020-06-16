def reverseBits(n: int):
    value = 0
    for i in range(len(list(n))):
        digit = n.pop()
        if digit == '1':
            value += pow(2, int(i))
    return value

if __name__ == '__main__':
    print(reverseBits('00000010100101000001111010011100'))