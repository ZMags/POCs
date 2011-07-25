function warenkorbmenge(e, v) {

    var min = 1;
    var max = 100;
    var menge = document.getElementById(e).value;

    if( menge < max && v) {
        document.getElementById(e).value++;
    }

    if( menge > min && !v ) {
        document.getElementById(e).value--;
    }
}

