def reverseBits(n: int):
    result = 0
    for i in range(32):
        result <<= 1
        result |= int(n) & 1
        int(n) >>= 1
    return result

if __name__ == '__main__':
    print(reverseBits('00000010100101000001111010011100'))