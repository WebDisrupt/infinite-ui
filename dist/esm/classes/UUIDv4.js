export class UUIDv4 {
    static generateNumber(limit) {
        var value = limit * Math.random();
        return value | 0;
    }
    static generateX() {
        var value = this.generateNumber(16);
        return value.toString(16);
    }
    static generateXes(count) {
        var result = '';
        for (var i = 0; i < count; ++i) {
            result += this.generateX();
        }
        return result;
    }
    static generateVariant() {
        var value = this.generateNumber(16);
        var variant = (value & 0x3) | 0x8;
        return variant.toString(16);
    }
    ;
    // UUID v4
    //
    //   varsion: M=4 
    //   variant: N
    //   pattern: xxxxxxxx-xxxx-Mxxx-Nxxx-xxxxxxxxxxxx
    //
    static generate = function () {
        var result = this.generateXes(8)
            + '-' + this.generateXes(4)
            + '-' + '4' + this.generateXes(3)
            + '-' + this.generateVariant() + this.generateXes(3)
            + '-' + this.generateXes(12);
        return result;
    };
}
//# sourceMappingURL=UUIDv4.js.map