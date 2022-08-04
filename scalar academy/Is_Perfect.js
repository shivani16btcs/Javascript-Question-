// You are given N positive integers.
// For each given integer A, you have to tell whether it is a perfect number or not.
// A perfect number is a positive integer which is equal to the sum of its proper positive divisors.

// Problem Constraints
// 1 <= N <= 10
// 1 <= A <= 106

// Input Format
// The first line of the input contains a single integer N.
// Each of the next N lines contains a single integer A.



// Output Format
// In a separate line, print YES if a given integer is perfect, else print NO.

// Example Input
// Input 1:
// 2
// 4
// 6

// Input 2:
// 1
// 3


// Example Output
// Output 1:
// NO
// YES
// Output 2:
// NO 


//---------------------------------------------------------------------------------------------------------------

// YOUR CODE GOES HERE
// Please take input and print output to standard input/output (stdin/stdout)
// DO NOT USE ARGUMENTS FOR INPUTS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let input = '';

process.stdin.on('data', function (inputStdin) {
    input += inputStdin;
});

process.stdin.on('end', function () {
    input = input.split('\n');
    main();
});

function main() {
    let [N, ...A] = input;
    for (let i = 0; i < N; i++) {
        console.log(check(A[i]));
    }
}

function check(N) {
    let D = 0;
    for (let i = 1; i * i < N; i++) {
        if (N % i == 0) {
            if (i == 1) {
                D = D + i;
            } else {
                D = D + i + (N / i);
            }
            // console.log(i," ",N/i," ")
        }
    }
    // console.log(D," ",N)
    if (D == N) {
        return "YES"
    } else {
        return "NO"
    }
}

