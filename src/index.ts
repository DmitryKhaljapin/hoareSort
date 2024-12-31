export const hoaraSort = function<T>(array: T[]): T[] {

    function boundSubArray(array: T[], left: number, right: number) {
        const pivot = array[~~((right + left)/2)];
        while(left <= right) {
            while (array[left] < pivot) left++;
            while (array[right] > pivot) right--;

            if (left <= right) {
                [array[left], array[right]] = [array[right], array[left]];
                right--;
                left++;
            }
        }
        return left;
    }

    function sort(array: T[], start: number, end: number) {
        if (start >= end) return;
        const rightStart = boundSubArray(array, start, end);
        sort(array, start, rightStart - 1);
        sort(array, rightStart, end);
    }

    sort(array, 0, array.length - 1);

    return array
};

module.exports = { hoaraSort }