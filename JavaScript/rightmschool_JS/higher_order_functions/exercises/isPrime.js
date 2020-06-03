function isPrime(number) {
    if(number > 1) {
        let bool = false;
        for(let i = 2; i < number; i++) {
            if(number % i == 0) {
                bool = true;
            }
        }

        if(bool) {
            return false;
        }

        return true;

    }
}