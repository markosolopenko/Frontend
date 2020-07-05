def move_stones(a, b, c):
    stones = sorted([a, b, c])
    if sum(range(stones[-1], stones[0]-1, -1)) == sum(stones):
        return [0, 0];
    else:
        max_num = stones[0]
        max_turns = 0
        min_turns = 0
        for i in range(1, len(stones)):
            if stones[i] - max_num > 1:
                min_turns += 1
                max_turns += (stones[i] - max_num - 1)
            max_num = stones[i]
        if stones[1] - stones[0] > 2:
            min_turns = 2
        else:
            min_turns = 1
        return [min_turns, max_turns]
    

if __name__ == '__main__':
    print(move_stones(3, 5, 1))