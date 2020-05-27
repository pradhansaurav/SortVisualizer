export function getAnimationsForBubbleSort(array){
    const animation=[];
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-i-1;j++){
            //Push Twice For Color change.
            animation.push([j,j+1]);
            animation.push([j,j+1]);
            if(array[j]>array[j+1]){
                //Swapping has to happen in this case
                animation.push([j+1,j]);
                let c = array[j];
                array[j] = array[j+1];
                array[j+1] = c;
            }
            else{
                animation.push([j,j+1]);
            }
        }
    }
    console.log(animation)
    return animation;
}