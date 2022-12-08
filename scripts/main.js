// get the slider and the output the HTML elements
let slider = document.getElementById("slider");
let slider2 = document.getElementById("slider2");
let output = document.getElementById("slider-output");
let bc;
let lc;

// Big Circle links
let bl1;
let bl2;
let bl3;
let bl4;
let bl5;
let bl6;
let bl7;

let bcdl1;
let bcdl2;
let bcdl3;

// Little Circle links
let l1p12;
let l1p23;
let l1p31;

let l2p12;
let l2p23;
let l2p31;

let l3p12;
let l3p23;
let l3p31;

let l4p12;
let l4p23;
let l4p31;


// start function run at page load
// display the default value of the slider, 1 big circle (bc)
window.onload = function init() {
    slider.addEventListener("change", check, false);
    slider2.addEventListener("change", check, false);
    slider3.addEventListener("change", check, false);
    slider5.addEventListener("change", check, false);

    /// tab handling
    document.getElementById("d-btn").disabled = true;
    document.getElementById("r-btn").disabled = true;
    document.getElementById("p-btn").disabled = true;
    document.getElementById("rds-btn").disabled = true;
}

// Main sliders events handler
function check(event) {

    // event obj catching
    let target = event.target || event.srcElement;
    let slider = target.id

    // value handling
    let input = Number(event.target.value);

    // Tab 1
    // display the right amount of bc with the slider
    // groups and little circles
    if (slider === "slider") {
        bc = input;

        //init primary state
        document.getElementById("bc1").classList.remove('bc-not')
        document.getElementById("bc2").classList.remove('bc-not')
        document.getElementById("bc3").classList.remove('bc-not')
        document.getElementById("bc4").classList.remove('bc-not')
        document.getElementById("bc1").classList.remove('bc-active')
        document.getElementById("bc2").classList.remove('bc-active')
        document.getElementById("bc3").classList.remove('bc-active')
        document.getElementById("bc4").classList.remove('bc-active')

        switch (input) {
            case 1:
                document.getElementById("bc2").style.display = "none";
                document.getElementById("bc3").style.display = "none";
                document.getElementById("bc4").style.display = "none";
                document.getElementById("group2").style.display = "none";
                document.getElementById("group3").style.display = "none";
                document.getElementById("group4").style.display = "none";
                break;
            case 2:
                document.getElementById("bc2").removeAttribute("style");
                document.getElementById("group2").removeAttribute("style");
                document.getElementById("bc3").style.display = "none";
                document.getElementById("bc4").style.display = "none";
                document.getElementById("group3").style.display = "none";
                document.getElementById("group4").style.display = "none";
                break;
            case 3:
                document.getElementById("bc2").removeAttribute("style");
                document.getElementById("bc3").removeAttribute("style");
                document.getElementById("group2").removeAttribute("style");
                document.getElementById("group3").removeAttribute("style");
                document.getElementById("bc4").style.display = "none";
                document.getElementById("group4").style.display = "none";
                break;
            case 4:
                document.getElementById("bc2").removeAttribute("style");
                document.getElementById("bc3").removeAttribute("style");
                document.getElementById("bc4").removeAttribute("style");
                document.getElementById("group2").removeAttribute("style");
                document.getElementById("group3").removeAttribute("style");
                document.getElementById("group4").removeAttribute("style");
                break;
        }
        // Tab 2
    } else if (slider === "slider2") {
        // Tab 2 slider
        lc = input;
        displayLC(input)
    } else if (slider === "slider3") {
        // Tab 3 slider

        switch (input) {
            case 1:
                // no links
                bl1.hide();
                bl2.hide();
                bl3.hide();
                bl4.hide();
                bl5.hide();
                bl6.hide();
                bl7.hide();
                l1p23.hide(); l1p31.hide(); l1p12.hide();
                l2p23.hide(); l2p31.hide(); l2p12.hide();
                l3p23.hide(); l3p31.hide(); l3p12.hide();
                l4p23.hide(); l4p31.hide(); l4p12.hide();
                break;
            case 2:
                // hide lc if any
                l1p23.hide(); l1p31.hide(); l1p12.hide();
                l2p23.hide(); l2p31.hide(); l2p12.hide();
                l3p23.hide(); l3p31.hide(); l3p12.hide();
                l4p23.hide(); l4p31.hide(); l4p12.hide();
                // big links
                if (bc > 1) {
                    if (bc === 2) { bl1.show() }
                    if (bc === 3) { bl1.show(); bl4.show(); bl5.show() }
                    if (bc === 4) { bl1.show(); bl2.show(); bl3.show(); bl4.show(); bl6.show(); bl7.show() }
                }
                break;
            case 3:
                // hide bl if any
                bl1.hide();
                bl2.hide();
                bl3.hide();
                bl4.hide();
                bl5.hide();
                bl6.hide();
                bl7.hide();
                // small links
                if (lc > 1) {
                    if (lc === 2) { l1p12.show(); l2p12.show(); l3p12.show(); l4p12.show(); }
                    if (lc === 3) {
                        l1p23.show(); l1p31.show(); l1p12.show();
                        l2p23.show(); l2p31.show(); l2p12.show();
                        l3p23.show(); l3p31.show(); l3p12.show();
                        l4p23.show(); l4p31.show(); l4p12.show();
                    }
                }
                break;
            case 4:
                // all connected
                // big links
                if (bc > 1) {

                    if (bc === 2) { bl1.show() }
                    if (bc === 3) { bl1.show(); bl4.show(); bl5.show() }
                    if (bc === 4) { bl1.show(); bl2.show(); bl3.show(); bl4.show(); bl6.show(); bl7.show() }
                }
                // small links
                if (lc > 1) {
                    if (lc === 2) { l1p12.show(); l2p12.show(); l3p12.show(); l4p12.show(); }
                    if (lc === 3) {
                        l1p23.show(); l1p31.show(); l1p12.show();
                        l2p23.show(); l2p31.show(); l2p12.show();
                        l3p23.show(); l3p31.show(); l3p12.show();
                        l4p23.show(); l4p31.show(); l4p12.show();
                    }
                }
                break;
        }
        // tab  5 slider
    } else if (slider === "slider5") {

        switch (input) {
            case 1:
                document.getElementById("groupd2").style.display = "none";
                document.getElementById("bubbled").style.display = "none";
                bcdl1.hide(); bcdl2.hide(); bcdl3.hide();
                break;
            case 2:
                // two linked o-o
                bcdl1.hide(); bcdl2.hide(); bcdl3.hide();
                document.getElementById("groupd2").style.display = "none";
                document.getElementById("bubbled").style.display = "none";
                bcdl1.show().postition();
                break;
            case 3:
                // 3 linked o-o-o
                document.getElementById("bcd2").classList.remove('bc-green')
                document.getElementById("bcd2").classList.add('bc-active')
                document.getElementById("bcd2").innerHTML = "<div>R</div>"
                document.getElementById("groupd2").removeAttribute("style");
                document.getElementById("bubbled").style.display = "none";
                bcdl1.hide()
                bcdl2.show().position();
                bcdl3.show().position();


                break;
            case 4:
                bcdl1.hide()
                document.getElementById("bcd2").classList.remove('bc-active')
                document.getElementById("bcd2").classList.add('bc-green')
                document.getElementById("bcd2").innerHTML = "<div>W</div>"
                document.getElementById("groupd2").removeAttribute("style");
                document.getElementById("bubbled").removeAttribute("style");
                bcdl2.show().position();
                bcdl3.show().position();
                break;
        }

    }

}

// Tab 1 D tab event
function dState() {

    document.getElementById("slider-tab2").style.display = "none";
    document.getElementById("slider-tab1").removeAttribute("style");

    //tab handling
    document.getElementById("d-btn").disabled = true;
    document.getElementById("s-btn").disabled = false;
    document.getElementById("r-btn").disabled = true;
    document.getElementById("p-btn").disabled = true;
    document.getElementById("rds-btn").disabled = true;
    document.getElementById("place").innerHTML = "<h1 style='color:#dc3e29'>Distinctions (identity-other)</h1>";

    // inits
    for (let i = 1; i < bc + 1; i++) {
        document.getElementById("bubble" + i).style.display = "none";
        document.getElementById("bc" + i).setAttribute('onclick', 'bcClick(this.id)');
        document.getElementById("bc" + i).removeAttribute("style");
    }
    document.getElementById("bc1").innerHTML = "<div>i<sub>1</sub></div>";
    document.getElementById("bc2").innerHTML = "<div>i<sub>2</sub></div>";
    document.getElementById("bc3").innerHTML = "<div>i<sub>3</sub></div>";
    document.getElementById("bc4").innerHTML = "<div>i<sub>4</sub></div>";
}

// Tab 2 S tab event
function sState() {

    //if user clicked the tab2 directly set bc to 1
    if (bc === undefined) { bc = 1 }
    if (lc === undefined) { lc = 0 }
    // put slider on the correct number of lc
    document.getElementById("slider2").value = lc;

    // sliders handling
    document.getElementById("slider-tab1").style.display = "none";
    document.getElementById("slider-tab3").style.display = "none";
    document.getElementById("slider-tab2").removeAttribute("style");

    // tab handling
    document.getElementById("d-btn").disabled = false;
    document.getElementById("s-btn").disabled = true;
    document.getElementById("r-btn").disabled = false;
    document.getElementById("p-btn").disabled = true;
    document.getElementById("rds-btn").disabled = true;
    document.getElementById("place").innerHTML = "<h1 style='color:#85bf42'>Systems (part-whole)</h1>";

    // init state
    for (let i = 1; i < bc + 1; i++) {
        document.getElementById("bc" + i).classList.remove('bc-not')
        document.getElementById("bc" + i).classList.remove('bc-active')
        // document.getElementById("bc" + i).onclick = null;
        document.getElementById("bc" + i).removeAttribute('onclick');
        document.getElementById("bc" + i).style.cursor = "default";
    }

    // BC styles
    document.getElementById("bc1").innerHTML = "<div>w<sub>1</sub></div>";
    document.getElementById("bc2").innerHTML = "<div>w<sub>2</sub></div>";
    document.getElementById("bc3").innerHTML = "<div>w<sub>3</sub></div>";
    document.getElementById("bc4").innerHTML = "<div>w<sub>4</sub></div>";

    document.getElementById("bc1").style.background = "linear-gradient(162deg, rgb(0, 100, 0) 11%, rgb(1, 66, 1) 100%)";
    document.getElementById("bc2").style.background = "linear-gradient(162deg, rgb(0, 100, 0) 11%, rgb(1, 66, 1) 100%)";
    document.getElementById("bc3").style.background = "linear-gradient(162deg, rgb(0, 100, 0) 11%, rgb(1, 66, 1) 100%)";
    document.getElementById("bc4").style.background = "linear-gradient(162deg, rgb(0, 100, 0) 11%, rgb(1, 66, 1) 100%)";

    // LC display
    if (lc > 1) {
        switch (bc) {
            case 1:
                displayLC(lc)
                break;
            case 2:
                displayLC(lc)
                break;
            case 3:
                displayLC(lc)
                break;
            case 4:
                displayLC(lc)
                break;
        }
    }

    // Links removal
    removeLinks()
}

// Tab 3 R tab event
function rState() {

    //init primary state
    document.getElementById("bc1").classList.remove('bc-not')
    document.getElementById("bc2").classList.remove('bc-not')
    document.getElementById("bc3").classList.remove('bc-not')
    document.getElementById("bc4").classList.remove('bc-not')
    document.getElementById("bc1").classList.remove('bc-active')
    document.getElementById("bc2").classList.remove('bc-active')
    document.getElementById("bc3").classList.remove('bc-active')
    document.getElementById("bc4").classList.remove('bc-active')
    document.getElementById("bc1").classList.remove('bc-not2')
    document.getElementById("bc2").classList.remove('bc-not2')
    document.getElementById("bc3").classList.remove('bc-not2')
    document.getElementById("bc4").classList.remove('bc-not2')
    document.getElementById("bc1").classList.remove('bc-active2')
    document.getElementById("bc2").classList.remove('bc-active2')
    document.getElementById("bc3").classList.remove('bc-active2')
    document.getElementById("bc4").classList.remove('bc-active2')

    // Display LCs
    if (lc > 0) {
        for (let i = 1; i < bc + 1; i++) {
            document.getElementById("bubble" + i).style.display = "";
        }
    }


    // BC styles
    document.getElementById("bc1").innerHTML = "<div>i<sub>1</sub></div>";
    document.getElementById("bc2").innerHTML = "<div>i<sub>2</sub></div>";
    document.getElementById("bc3").innerHTML = "<div>i<sub>3</sub></div>";
    document.getElementById("bc4").innerHTML = "<div>i<sub>4</sub></div>";
    for (let i = 1; i < bc + 1; i++) {
        document.getElementById("bc" + i).removeAttribute("style");
    }


    // sliders handling
    document.getElementById("slider-tab2").style.display = "none";
    document.getElementById("slider-tab3").removeAttribute("style");
    document.getElementById("slider3").value = 1;

    // tab handling
    document.getElementById("d-btn").disabled = true;
    document.getElementById("s-btn").disabled = false;
    document.getElementById("r-btn").disabled = true;
    document.getElementById("p-btn").disabled = false;
    document.getElementById("rds-btn").disabled = true;
    document.getElementById("place").innerHTML = "<h1 style='color:#00a1b3'>Relationship (action-reation)</h1>";

    // BC Links
    bl1 = new LeaderLine(document.getElementById('bc1'),
        document.getElementById('bc2'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });
    bl2 = new LeaderLine(document.getElementById('bc2'),
        document.getElementById('bc4'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });
    bl3 = new LeaderLine(document.getElementById('bc4'),
        document.getElementById('bc3'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });
    bl4 = new LeaderLine(document.getElementById('bc3'),
        document.getElementById('bc1'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });
    bl5 = new LeaderLine(document.getElementById('bc2'),
        LeaderLine.pointAnchor(document.getElementById('bc3'), { x: '50%', y: 0 }), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });
    bl6 = new LeaderLine(document.getElementById('bc1'),
        document.getElementById('bc4'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });
    bl7 = new LeaderLine(document.getElementById('bc2'),
        document.getElementById('bc3'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });
    // LC Links
    l1p12 = new LeaderLine(document.getElementById('lc1-1'),
        document.getElementById('lc1-2'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    l1p23 = new LeaderLine(document.getElementById('lc1-2'),
        document.getElementById('lc1-3'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    l1p31 = new LeaderLine(document.getElementById('lc1-3'),
        document.getElementById('lc1-1'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    // bc2 little links
    l2p12 = new LeaderLine(document.getElementById('lc2-1'),
        document.getElementById('lc2-2'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    l2p23 = new LeaderLine(document.getElementById('lc2-2'),
        document.getElementById('lc2-3'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    l2p31 = new LeaderLine(document.getElementById('lc2-3'),
        document.getElementById('lc2-1'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });

    // bc3 little links
    l3p12 = new LeaderLine(document.getElementById('lc3-1'),
        document.getElementById('lc3-2'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    l3p23 = new LeaderLine(document.getElementById('lc3-2'),
        document.getElementById('lc3-3'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    l3p31 = new LeaderLine(document.getElementById('lc3-3'),
        document.getElementById('lc3-1'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });

    // bc4 little links
    l4p12 = new LeaderLine(document.getElementById('lc4-1'),
        document.getElementById('lc4-2'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    l4p23 = new LeaderLine(document.getElementById('lc4-2'),
        document.getElementById('lc4-3'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });
    l4p31 = new LeaderLine(document.getElementById('lc4-3'),
        document.getElementById('lc4-1'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#4b88d3',
        path: 'straight',
        hide: true
    });

    // Restyle LC with black text
    restyleLC(lc)

}

// Tab 4 P tab event
function pState() {

    //Removing slider
    document.getElementById("slider-tab3").style.display = "none";
    document.getElementById("slider-tab5").style.display = "none";

    if (bcdl1) {
        bcdl1.hide();
    }
    if (bcdl2) {
        bcdl2.hide();
    }
    if (bcdl3) {
        bcdl3.hide();
    }

    // tab handling
    document.getElementById("d-btn").disabled = true;
    document.getElementById("s-btn").disabled = true;
    document.getElementById("r-btn").disabled = false;
    document.getElementById("p-btn").disabled = true;
    document.getElementById("rds-btn").disabled = false;
    document.getElementById("place").innerHTML = "<h1 style='color:#ffb912'>Perspectives (point-view)</h1>";
    document.getElementById("p1").removeAttribute("style");
    document.getElementById("p2").removeAttribute("style");
    document.getElementById("p3").style.display = "none";


    // Removing existing links
    removeLinks();

    // Removing LC
    for (let i = 1; i < bc + 1; i++) {
        document.getElementById("bubble" + i).style.display = "none";
        document.getElementById("bc" + i).removeAttribute("style");
        document.getElementById("bc" + i).setAttribute('onclick', 'bctClick(this.id)');
    }

}

// Tab 5 RDS tab event
function rdsState() {
    document.getElementById("groupd1").removeAttribute("style");
    document.getElementById("groupd3").removeAttribute("style");
    document.getElementById("slider-tab5").removeAttribute("style");

    document.getElementById("p-btn").disabled = false;
    document.getElementById("r-btn").disabled = true;
    document.getElementById("rds-btn").disabled = true;
    document.getElementById("place").innerHTML = "<h1><span style='color:#00a1b3'>R</span><span style='color:#dc3e29'>D</span><span style='color:#85bf42'>S</span></h1>";

    document.getElementById("p1").style.display = "none";
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").removeAttribute("style");

    //init
    document.getElementById("groupd2").style.display = "none";
    document.getElementById("bubbled").style.display = "none";
    document.getElementById("slider5").value = 1;

    if (bcdl1) {
        bcdl1.remove()
    }
    if (bcdl2) {
        bcdl2.remove()
    }
    if (bcdl3) {
        bcdl3.remove()
    }
    bcdl1 = new LeaderLine(document.getElementById('bcd1'),
        document.getElementById('bcd3'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });

    bcdl2 = new LeaderLine(document.getElementById('bcd1'),
        document.getElementById('bcd2'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });

    bcdl3 = new LeaderLine(document.getElementById('bcd2'),
        document.getElementById('bcd3'), {
        startPlug: 'behind',
        endPlug: 'behind',
        color: '#00a1b3',
        path: 'straight',
        hide: true
    });

}

/**
 * Links removal
 */
function removeLinks() {
    //links handling//
    // BC links
    if (bl1) {
        bl1.remove()
    }
    if (bl2) {
        bl2.remove()
    }
    if (bl3) {
        bl3.remove()
    }
    if (bl4) {
        bl4.remove()
    }
    if (bl5) {
        bl5.remove()
    }
    if (bl6) {
        bl6.remove()
    }
    if (bl7) {
        bl7.remove()
    }
    // LC links
    if (l1p12) {
        l1p12.remove()
    }
    if (l1p23) {
        l1p23.remove()
    }
    if (l1p31) {
        l1p31.remove()
    }

    if (l2p12) {
        l2p12.remove()
    }
    if (l2p23) {
        l2p23.remove()
    }
    if (l2p31) {
        l2p31.remove()
    }

    if (l3p12) {
        l3p12.remove()
    }
    if (l3p23) {
        l3p23.remove()
    }
    if (l3p31) {
        l3p31.remove()
    }

    if (l4p12) {
        l4p12.remove()
    }
    if (l4p23) {
        l4p23.remove()
    }
    if (l4p31) {
        l4p31.remove()
    }
}

/**
 * Remove style colors from little circles
 * 
 * @param {int} input 1 to 3 lc to display
 */
function restyleLC(input) {

    switch (input) {
        case 1:
            for (let i = 1; i < bc + 1; i++) {
                document.getElementById("lc" + i + "-1").style.background = "";
            }
            break;
        case 2:
            for (let i = 1; i < bc + 1; i++) {
                document.getElementById("lc" + i + "-1").style.background = "";
                document.getElementById("lc" + i + "-2").style.background = "";
            }
            break;
        case 3:
            for (let i = 1; i < bc + 1; i++) {
                document.getElementById("lc" + i + "-1").style.background = "";
                document.getElementById("lc" + i + "-2").style.background = "";
                document.getElementById("lc" + i + "-3").style.background = "";
            }
            break;
    }
}

/**
 * Display little circles
 * 
 * @param {int} input 1 to 3 lc to display
 */
function displayLC(input) {

    switch (input) {
        case 0:
            for (let i = 1; i < bc + 1; i++) {
                document.getElementById("bubble" + i).style.display = "none";
                document.getElementById("lc" + i + "-1").style.display = "none";
                document.getElementById("lc" + i + "-2").style.display = "none";
                document.getElementById("lc" + i + "-3").style.display = "none";
            }
            break;
        case 1:
            for (let i = 1; i < bc + 1; i++) {
                document.getElementById("bubble" + i).removeAttribute("style");
                document.getElementById("lc" + i + "-" + input).removeAttribute("style");
                document.getElementById("lc" + i + "-2").style.display = "none";
                document.getElementById("lc" + i + "-3").style.display = "none";
                document.getElementById("lc" + i + "-1").innerHTML = "<div>p<sub>1</sub></div>";
                document.getElementById("lc" + i + "-1").style.background = "linear-gradient(162deg, rgb(144 238 144) 11%, rgb(97 159 97) 100%)";
            }
            break;
        case 2:
            for (let i = 1; i < bc + 1; i++) {
                document.getElementById("bubble" + i).removeAttribute("style");
                document.getElementById("lc" + i + "-1").removeAttribute("style");
                document.getElementById("lc" + i + "-2").removeAttribute("style");
                document.getElementById("lc" + i + "-3").style.display = "none";
                document.getElementById("lc" + i + "-1").innerHTML = "<div>p<sub>1</sub></div>";
                document.getElementById("lc" + i + "-2").innerHTML = "<div>p<sub>2</sub></div>";
                document.getElementById("lc" + i + "-1").style.background = "linear-gradient(162deg, rgb(144 238 144) 11%, rgb(97 159 97) 100%)";
                document.getElementById("lc" + i + "-2").style.background = "linear-gradient(162deg, rgb(144 238 144) 11%, rgb(97 159 97) 100%)";
            }
            break;
        case 3:
            for (let i = 1; i < bc + 1; i++) {
                document.getElementById("bubble" + i).removeAttribute("style");
                document.getElementById("lc" + i + "-1").removeAttribute("style");
                document.getElementById("lc" + i + "-2").removeAttribute("style");
                document.getElementById("lc" + i + "-" + input).removeAttribute("style");
                document.getElementById("lc" + i + "-1").innerHTML = "<div>p<sub>1</sub></div>";
                document.getElementById("lc" + i + "-2").innerHTML = "<div>p<sub>2</sub></div>";
                document.getElementById("lc" + i + "-3").innerHTML = "<div>p<sub>3</sub></div>";
                document.getElementById("lc" + i + "-1").style.background = "linear-gradient(162deg, rgb(144 238 144) 11%, rgb(97 159 97) 100%)";
                document.getElementById("lc" + i + "-2").style.background = "linear-gradient(162deg, rgb(144 238 144) 11%, rgb(97 159 97) 100%)";
                document.getElementById("lc" + i + "-3").style.background = "linear-gradient(162deg, rgb(144 238 144) 11%, rgb(97 159 97) 100%)";
            }
            break;
    }
}

/**
 * Tab 1 BC onClick handling
 * 
 * @param {string} input bc1 to bc4
 */
function bcClick(e) {
    switch (e) {
        case "bc1":
            document.getElementById("bc1").classList.add('bc-active')
            document.getElementById("bc2").classList.remove('bc-active')
            document.getElementById("bc3").classList.remove('bc-active')
            document.getElementById("bc4").classList.remove('bc-active')

            document.getElementById("bc1").innerHTML = "<div>i<sub>1</sub></div>";
            document.getElementById("bc2").innerHTML = "<div>i<sub>1</sub></div>";
            document.getElementById("bc3").innerHTML = "<div>i<sub>1</sub></div>";
            document.getElementById("bc4").innerHTML = "<div>i<sub>1</sub></div>";

            document.getElementById("bc1").classList.remove('bc-not')
            document.getElementById("bc2").classList.add('bc-not')
            document.getElementById("bc3").classList.add('bc-not')
            document.getElementById("bc4").classList.add('bc-not')
            break;
        case "bc2":
            document.getElementById("bc1").classList.remove('bc-active')
            document.getElementById("bc2").classList.add('bc-active')
            document.getElementById("bc3").classList.remove('bc-active')
            document.getElementById("bc4").classList.remove('bc-active')

            document.getElementById("bc1").innerHTML = "<div>i<sub>2</sub></div>";
            document.getElementById("bc2").innerHTML = "<div>i<sub>2</sub></div>";
            document.getElementById("bc3").innerHTML = "<div>i<sub>2</sub></div>";
            document.getElementById("bc4").innerHTML = "<div>i<sub>2</sub></div>";

            document.getElementById("bc1").classList.add('bc-not')
            document.getElementById("bc2").classList.remove('bc-not')
            document.getElementById("bc3").classList.add('bc-not')
            document.getElementById("bc4").classList.add('bc-not')
            break;
        case "bc3":
            document.getElementById("bc1").classList.remove('bc-active')
            document.getElementById("bc2").classList.remove('bc-active')
            document.getElementById("bc3").classList.add('bc-active')
            document.getElementById("bc4").classList.remove('bc-active')

            document.getElementById("bc1").innerHTML = "<div>i<sub>3</sub></div>";
            document.getElementById("bc2").innerHTML = "<div>i<sub>3</sub></div>";
            document.getElementById("bc4").innerHTML = "<div>i<sub>3</sub></div>";
            document.getElementById("bc3").innerHTML = "<div>i<sub>3</sub></div>";

            document.getElementById("bc1").classList.add('bc-not')
            document.getElementById("bc2").classList.add('bc-not')
            document.getElementById("bc3").classList.remove('bc-not')
            document.getElementById("bc4").classList.add('bc-not')
            break;
        case "bc4":
            document.getElementById("bc1").classList.remove('bc-active')
            document.getElementById("bc2").classList.remove('bc-active')
            document.getElementById("bc3").classList.remove('bc-active')
            document.getElementById("bc4").classList.add('bc-active')

            document.getElementById("bc1").innerHTML = "<div>i<sub>4</sub></div>";
            document.getElementById("bc2").innerHTML = "<div>i<sub>4</sub></div>";
            document.getElementById("bc3").innerHTML = "<div>i<sub>4</sub></div>";
            document.getElementById("bc4").innerHTML = "<div>i<sub>4</sub></div>";

            document.getElementById("bc1").classList.add('bc-not')
            document.getElementById("bc2").classList.add('bc-not')
            document.getElementById("bc3").classList.add('bc-not')
            document.getElementById("bc4").classList.remove('bc-not')
            break;
    }
}


/**
 * Tab 4 BC onClick handling
 * 
 * @param {string} input bc1 to bc4
 */
function bctClick(e) {
    switch (e) {
        case "bc1":
            document.getElementById("bc1").classList.add('bc-active2')
            document.getElementById("bc2").classList.remove('bc-active2')
            document.getElementById("bc3").classList.remove('bc-active2')
            document.getElementById("bc4").classList.remove('bc-active2')

            document.getElementById("bc1").innerHTML = "<div>p<sub>1</sub></div>&#128065;";
            document.getElementById("bc2").innerHTML = "<div>v<sub>2</sub></div>";
            document.getElementById("bc3").innerHTML = "<div>v<sub>3</sub></div>";
            document.getElementById("bc4").innerHTML = "<div>v<sub>4</sub></div>";

            document.getElementById("bc1").classList.remove('bc-not2')
            document.getElementById("bc2").classList.add('bc-not2')
            document.getElementById("bc3").classList.add('bc-not2')
            document.getElementById("bc4").classList.add('bc-not2')
            break;
        case "bc2":
            document.getElementById("bc1").classList.remove('bc-active2')
            document.getElementById("bc2").classList.add('bc-active2')
            document.getElementById("bc3").classList.remove('bc-active2')
            document.getElementById("bc4").classList.remove('bc-active2')

            document.getElementById("bc1").innerHTML = "<div>v<sub>1</sub></div>";
            document.getElementById("bc2").innerHTML = "<div>p<sub>2</sub></div>&#128065;";
            document.getElementById("bc3").innerHTML = "<div>v<sub>3</sub></div>";
            document.getElementById("bc4").innerHTML = "<div>v<sub>4</sub></div>";

            document.getElementById("bc1").classList.add('bc-not2')
            document.getElementById("bc2").classList.remove('bc-not2')
            document.getElementById("bc3").classList.add('bc-not2')
            document.getElementById("bc4").classList.add('bc-not2')
            break;
        case "bc3":
            document.getElementById("bc1").classList.remove('bc-active2')
            document.getElementById("bc2").classList.remove('bc-active2')
            document.getElementById("bc3").classList.add('bc-active2')
            document.getElementById("bc4").classList.remove('bc-active2')

            document.getElementById("bc1").innerHTML = "<div>v<sub>1</sub></div>";
            document.getElementById("bc2").innerHTML = "<div>v<sub>2</sub></div>";
            document.getElementById("bc3").innerHTML = "<div>p<sub>3</sub></div>&#128065;";
            document.getElementById("bc4").innerHTML = "<div>v<sub>4</sub></div>";

            document.getElementById("bc1").classList.add('bc-not2')
            document.getElementById("bc2").classList.add('bc-not2')
            document.getElementById("bc3").classList.remove('bc-not2')
            document.getElementById("bc4").classList.add('bc-not2')
            break;
        case "bc4":
            document.getElementById("bc1").classList.remove('bc-active2')
            document.getElementById("bc2").classList.remove('bc-active2')
            document.getElementById("bc3").classList.remove('bc-active2')
            document.getElementById("bc4").classList.add('bc-active2')

            document.getElementById("bc1").innerHTML = "<div>v<sub>1</sub></div>";
            document.getElementById("bc2").innerHTML = "<div>v<sub>2</sub></div>";
            document.getElementById("bc3").innerHTML = "<div>v<sub>3</sub></div>";
            document.getElementById("bc4").innerHTML = "<div>p<sub>4</sub></div>&#128065;";

            document.getElementById("bc1").classList.add('bc-not2')
            document.getElementById("bc2").classList.add('bc-not2')
            document.getElementById("bc3").classList.add('bc-not2')
            document.getElementById("bc4").classList.remove('bc-not2')
            break;
    }
}