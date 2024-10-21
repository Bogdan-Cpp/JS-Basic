function binarrySeartch(array, num){

 let size = Math.floor(array.length / 2);
 let temp = 0;
 //size--
 if(array[size] >= num){

  while (array[size] > num) {
  
    array[size] = array[size - 1];
    size--;
  }
  
  if(array[size] < num){return -1;
  }
  else{return size;
  }
 }
 
 //size ++
 if(array[size] <= num){

  while(array[size] < num){

    array[size] = array[size + 1];
    size++

  }
  if(array[size] > num){return -1;
  }
  else{return size;
  }
 }  
}


let array = [2, 4, 23, 45, 56, 78, 95];
let num = 95;

let Num = binarrySeartch(array, num);

if(Num == -1){console.log("The target was not found!")
}

else{console.log("Index: " + Num)
}
