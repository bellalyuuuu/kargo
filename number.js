function intToString(arr) {
    const conv = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    out = ''

    for(num of arr){
        if(typeof(num) != "number") {
            process.stderr.write("Error in input" + '\n')
            return
        }
        numS = num.toString()
        tempS = ''
        for(i = 0; i < numS.length; i++) {
            tempS += conv[numS.charAt(i)]
        }
        out += tempS
        out += ','
    }
    // console.log(out.slice(0,-1))
    process.stdout.write(out.slice(0,-1) + '\n')
}
intToString([3, 300, 209])
// intToString(['s'])