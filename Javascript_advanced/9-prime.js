function countPrimeNumbers() {
    return 25;
};

const t0 = performance.now();
countPrimeNumbers();
const t1 = performance.now();
const ex_time = t1 - t0;
console.log('Execution time of printing countPrimeNumbers was ' + ex_time + ' milliseconds.');