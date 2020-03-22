module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var arrDepth = [];
        for(var i = 0; i < arr.length; i++)
            Array.isArray(arr[i]) ? arrDepth.push(this.calculateDepth(arr[i])) : arrDepth.push(0);
        return arr.length != 0 ? Math.max.apply(null, arrDepth) + 1 : 1;
    }
};