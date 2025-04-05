// Arrays in TypeScript
function getMax(nums: number[]){
    let maxi = Number.MIN_VALUE;
    for(let i = 0 ; i < nums.length ; i++){
        maxi = Math.max(maxi, nums[i]);
    }
    return maxi;
}

interface Users {
    name : string;
    age : number;
    subjects : string[];
    isActive : boolean;
}