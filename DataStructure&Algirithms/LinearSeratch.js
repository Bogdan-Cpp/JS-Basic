function linearSeratch(array, n){

   for(let i = 0; i < array.length; i++){

    if(n == array[i]){

        return i;
    }
   }
   return -1;
}

let array = [1, 4, 34, 56, 78, 90, 99];

let num = linearSeratch(array, 99);

if(num == -1){

    console.log("The num was not found!");
}

else{

    console.log("Index: " + num);
}