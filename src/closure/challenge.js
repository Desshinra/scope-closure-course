export function sumWithClosures(firstNumb) {
    return function(secondNumb) {
        return firstNumb + (secondNumb ?? 0);
    }
}

