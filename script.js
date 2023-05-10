addEventListener("DOMContentLoaded", (event) => {
    particlesJS.load('stars', 'assets/stars.json', function() {});
});

addEventListener("scroll", () => {

    var nebula = document.querySelector(".nebula");
    var nebulaAnimation = lerp(0, 1, scrollY / 2000);
    nebula.style.transform = `translate(-50%, -50%) scale(${1 - nebulaAnimation}) rotate(${nebulaAnimation * 15}deg)`;

    var starSmall = document.querySelector(".starSmall");
    var starAnimation = lerp(0, 1, (scrollY - 2000) / 1000);
    starSmall.style.transform = `translate(-50%, -50%) scale(${starAnimation}) rotate(${(1 - starAnimation) * 15}deg)`;

    var seperator = document.querySelector(".seperator");
    var seperatorAnimation = lerp(0, 1, (scrollY - 3000) / 3000);
    seperator.style.height = `${seperatorAnimation * 100}vh`;

    var starLarge = document.querySelector(".starLarge");
    if (starAnimation == 1) starLarge.style.transform = `translate(-50%, -50%) scale(1)`;
    else starLarge.style.transform = `translate(-50%, -50%) scale(0)`;

    var splitAnimation = lerp(0, 1, (scrollY - 3000) / 3000);
    starSmall.style.left = `${lerp(25, 50, 1 - splitAnimation)}%`;
    starLarge.style.left = `${lerp(50, 75, splitAnimation)}%`;

    var densityMeter = document.querySelector(".density");
    var densityMeterFill = document.querySelector(".density .fill");

    if (scrollY >= 6000 && scrollY <= 10000) densityMeter.style.display = 'inline';
    else densityMeter.style.display = 'none';

    var densityAnimation = lerp(0, 1, (scrollY - 7000) / 2000);
    starLarge.style.filter = `hue-rotate(${densityAnimation * 200}deg)`;
    densityMeterFill.style.width = `${densityAnimation * 100}%`;
    
    var growAnimation = lerp(0, 1, (scrollY - 11000) / 2000);
    if (growAnimation > 0) {
        starSmall.style.width = `${growAnimation * 30 + 30}em`;
        starSmall.style.height = `${growAnimation * 30 + 30}em`;

        starLarge.style.width = `${growAnimation * 60 + 30}em`;
        starLarge.style.height = `${growAnimation * 60 + 30}em`;
        starLarge.style.filter = `hue-rotate(${((1 - growAnimation) * 200) - 20}deg)`
    }

    // LEFT HALF
    var planetaryNebula = document.querySelector(".planetaryNebula");
    var nebulaAnimation = lerp(0, 1, (scrollY - 14000) / 2000);
    if (nebulaAnimation > 0) {
        starSmall.style.transform = `translate(-50%, -50%) scale(${((1 - nebulaAnimation) * 0.8) + 0.2}) rotate(0deg)`;
        starSmall.style.filter = `brightness(${1 + (nebulaAnimation * 3)}) saturate(${1 - nebulaAnimation})`
        planetaryNebula.style.transform = `translate(-50%, -50%) scale(${nebulaAnimation * 2})`;
    } else {
        planetaryNebula.style.transform = `translate(-50%, -50%) scale(0)`;
        starSmall.style.filter = `brightness(1) saturate(1)`
    }

    var nebulaGoneAnimation = lerp(0, 1, (scrollY - 16000) / 2000);
    if (nebulaGoneAnimation > 0) {
        planetaryNebula.style.transform = `translate(-50%, -50%) scale(${2 + (nebulaGoneAnimation * 2)})`;
        planetaryNebula.style.filter = `brightness(${1 - nebulaGoneAnimation})`;
    } else {
        planetaryNebula.style.filter = `brightness(1)`;
    }

    // RIGHT HALF
    var rightSeperator = document.querySelector(".seperatorRight");
    var rightSeperatorAnimation = lerp(0, 1, (scrollY - 14000) / 1500);
    rightSeperator.style.width = `${rightSeperatorAnimation * 50}vw`;

    var starLargeBlackHole = document.querySelector(".starLargeBlackHole");
    var supernovaSplitAnimation = lerp(0, 1, (scrollY - 14000) / 1500);
    if (supernovaSplitAnimation > 0) {
        starLargeBlackHole.style.transform = `translate(-50%, -50%) scale(${1 - (supernovaSplitAnimation * 0.5)})`
        starLarge.style.transform = `translate(-50%, -50%) scale(${1 - (supernovaSplitAnimation * 0.5)})`

        starLargeBlackHole.style.top = `${50 + (supernovaSplitAnimation * 25)}%`
        starLarge.style.top = `${50 - (supernovaSplitAnimation * 25)}%`
    } else {
        starLargeBlackHole.style.transform = `translate(-50%, -50%) scale(0)`
    }

    var supernovaNeutron = document.querySelector(".supernova.neutron");
    var supernovaBlackHole = document.querySelector(".supernova.hole");
    var supernovaAnimation = lerp(0, 1, (scrollY - 16000) / 2000);
    
    if (supernovaAnimation > 0) {
        starLarge.style.transform = `translate(-50%, -50%) scale(${(1 - supernovaAnimation) * 0.5})`;
        starLargeBlackHole.style.transform = `translate(-50%, -50%) scale(${(1 - supernovaAnimation) * 0.5})`;
    }

    supernovaNeutron.style.opacity = `${supernovaAnimation}`;
    supernovaBlackHole.style.opacity = `${supernovaAnimation}`;

    var neutronStar = document.querySelector(".neutronStar");
    var blackHole = document.querySelector(".blackHole");

    var explodeAnimation = lerp(0, 1, (scrollY - 18000) / 2000);
    if (explodeAnimation > 0) {
        supernovaNeutron.style.transform = `translate(-50%, -50%) scale(${1 + explodeAnimation})`;
        supernovaBlackHole.style.transform = `translate(-50%, -50%) scale(${1 + explodeAnimation})`;

        supernovaNeutron.style.opacity = `${1 - explodeAnimation}`;
        supernovaBlackHole.style.opacity = `${1 - explodeAnimation}`;

        neutronStar.style.transform = `translate(-50%, -50%) scale(${explodeAnimation * 0.5})`
        blackHole.style.transform = `translate(-50%, -50%) scale(${explodeAnimation * 0.5})`
    } else {
        supernovaNeutron.style.transform = `translate(-50%, -50%) scale(1)`;
        supernovaBlackHole.style.transform = `translate(-50%, -50%) scale(1)`;
    }
});

addEventListener("scroll", () => {
    var introneb = document.querySelector(".introneb");
    var introneb2 = lerp(0, 1, (scrollY - 50) / 50);
    introneb.style.opacity = 1 - introneb2;
    
    var nebp1 = document.querySelector(".nebulap1");
    var nebp1in = lerp(0, 1, (scrollY - 100) / 250);
    var nebp1out = lerp(0, 1, (scrollY - 450) / 500);
    nebp1.style.opacity =  nebp1in - nebp1out;

    var nebp2 = document.querySelector(".nebulap2");
    var nebp2in = lerp(0, 1, (scrollY - 750) / 500);
    var nebp2out = lerp(0, 1, (scrollY - 1350) / 500)
    nebp2.style.opacity = nebp2in - nebp2out;

    var nebp3 = document.querySelector(".nebulap3");
    var nebp3in = lerp(0, 1, (scrollY - 1850) / 500);
    var nebp3out = lerp(0, 1, (scrollY - 10000) / 500)
    nebp3.style.opacity = nebp3in - nebp3out;

    var introstar = document.querySelector(".introstar");
    var introstarin = lerp(0, 1, (scrollY - 3000) / 500);
    var introstarout = lerp(0, 1, (scrollY - 4500) / 500)
    introstar.style.opacity = introstarin - introstarout;

    var starp1 = document.querySelector(".starp1");
    var starp1in = lerp(0, 1, (scrollY - 3000) / 500);
    var starp1out = lerp(0, 1, (scrollY - 4500) / 500)
    starp1.style.opacity = starp1in - starp1out;
    
    var starp2 = document.querySelector(".starp2");
    var starp2in = lerp(0, 1, (scrollY - 3000) / 500);
    var starp2out = lerp(0, 1, (scrollY - 4500) / 500)
    starp2.style.opacity = starp2in - starp2out;

    var pcycle = document.querySelector(".pcycle");
    var pcyclein = lerp(0, 1, (scrollY - 5000) / 500);
    var pcycleout = lerp(0, 1, (scrollY - 5500) / 250)
    pcycle.style.opacity = pcyclein - pcycleout;
    
    var pcycle2 = document.querySelector(".pcycle2");
    var pcycle2in = lerp(0, 1, (scrollY - 5750) / 250);
    var pcycle2out = lerp(0, 1, (scrollY - 6000) / 500)
    pcycle2.style.opacity = pcycle2in - pcycle2out;

    var PPCHAINFORM = document.querySelector(".PPCHAINFORM");
    var PPCHAINFORMin = lerp(0, 1, (scrollY - 5000) / 500);
    var PPCHAINFORMout = lerp(0, 1, (scrollY - 5500) / 250)
    PPCHAINFORM.style.opacity = PPCHAINFORMin - PPCHAINFORMout;

    var PPCHAINFORM2 = document.querySelector(".PPCHAINFORM2");
    var PPCHAINFORM2in = lerp(0, 1, (scrollY - 5750) / 250);
    var PPCHAINFORM2out = lerp(0, 1, (scrollY - 6000) / 500)
    PPCHAINFORM2.style.opacity = PPCHAINFORM2in - PPCHAINFORM2out;

    var CNOFORM = document.querySelector(".CNOFORM");
    var CNOFORMin = lerp(0, 1, (scrollY - 5000) / 500);
    var CNOFORMout = lerp(0, 1, (scrollY - 6000) / 500)
    CNOFORM.style.opacity = CNOFORMin - CNOFORMout;

    var cno = document.querySelector(".cno");
    var cnoin = lerp(0, 1, (scrollY - 5000) / 500);
    var cnoout = lerp(0, 1, (scrollY - 5500) / 500)
    cno.style.opacity = cnoin - cnoout;

    var cno2 = document.querySelector(".cno2");
    var cno2in = lerp(0, 1, (scrollY - 5500) / 500);
    var cno2out = lerp(0, 1, (scrollY - 6000) / 500)
    cno2.style.opacity = cno2in - cno2out;

    var star3 = document.querySelector(".star3");
    var star3in = lerp(0, 1, (scrollY - 6500) / 500);
    var star3out = lerp(0, 1, (scrollY - 8000) / 500)
    star3.style.opacity = star3in - star3out;

    var star4 = document.querySelector(".star4");
    var star4in = lerp(0, 1, (scrollY - 6500) / 500);
    var star4out = lerp(0, 1, (scrollY - 8000) / 500)
    star4.style.opacity = star4in - star4out;

    var star5 = document.querySelector(".star5");
    var star5in = lerp(0, 1, (scrollY - 9000) / 500);
    var star5out = lerp(0, 1, (scrollY - 10500) / 500)
    star5.style.opacity = star5in - star5out;

    var star6 = document.querySelector(".star6");
    var star6in = lerp(0, 1, (scrollY - 9000) / 500);
    var star6out = lerp(0, 1, (scrollY - 10500) / 500)
    star6.style.opacity = star6in - star6out;

    var intro1 = document.querySelector(".intro1");
    var intro1in = lerp(0, 1, (scrollY - 12500) / 500);
    var intro1out = lerp(0, 1, (scrollY - 13000) / 500)
    intro1.style.opacity = intro1in - intro1out;

    var intro2 = document.querySelector(".intro2");
    var intro2in = lerp(0, 1, (scrollY - 12500) / 500);
    var intro2out = lerp(0, 1, (scrollY - 13000) / 500)
    intro2.style.opacity = intro2in - intro2out;

    var gt = document.querySelector(".gt");
    var gtin = lerp(0, 1, (scrollY - 13500) / 500);
    var gtout = lerp(0, 1, (scrollY - 14000) / 500)
    gt.style.opacity = gtin - gtout;

    var gb = document.querySelector(".gb");
    var gbin = lerp(0, 1, (scrollY - 13500) / 500);
    var gbout = lerp(0, 1, (scrollY - 14000) / 500)
    gb.style.opacity = gbin - gbout;

    var sgt = document.querySelector(".sgt");
    var sgtin = lerp(0, 1, (scrollY - 13500) / 500);
    var sgtout = lerp(0, 1, (scrollY - 14000) / 500)
    sgt.style.opacity = sgtin - gtout;

    var sgb = document.querySelector(".sgb");
    var sgbin = lerp(0, 1, (scrollY - 13500) / 500);
    var sgbout = lerp(0, 1, (scrollY - 14000) / 500)
    sgb.style.opacity = sgbin -sgbout;

    var introp = document.querySelector(".introp");
    var intropin = lerp(0, 1, (scrollY - 15000) / 500);
    var intropout = lerp(0, 1, (scrollY - 15500) / 500)
    introp.style.opacity = intropin -intropout;

    var planeb = document.querySelector(".planeb");
    var planebin = lerp(0, 1, (scrollY - 16000) / 500);
    var planebout = lerp(0, 1, (scrollY - 17000) / 500)
    planeb.style.opacity = planebin - planebout;

    var planeb2 = document.querySelector(".planeb2");
    var planeb2in = lerp(0, 1, (scrollY - 16000) / 500);
    var planeb2out = lerp(0, 1, (scrollY - 17000) / 500)
    planeb2.style.opacity = planeb2in - planeb2out;

    var introsnova = document.querySelector(".introsnova");
    var introsnovain = lerp(0, 1, (scrollY - 16500) / 500);
    var introsnovaout = lerp(0, 1, (scrollY - 17500) / 500)
    introsnova.style.opacity = introsnovain - introsnovaout;

    var snova1 = document.querySelector(".snova1");
    var snova1in = lerp(0, 1, (scrollY - 16500) / 500);
    var snova1out = lerp(0, 1, (scrollY - 17500) / 500)
    snova1.style.opacity = snova1in - snova1out;

    var snova2 = document.querySelector(".snova2");
    var snova2in = lerp(0, 1, (scrollY - 16500) / 500);
    var snova2out = lerp(0, 1, (scrollY - 17500) / 500)
    snova2.style.opacity = snova2in - snova2out;

    var snova3 = document.querySelector(".snova3");
    var snova3in = lerp(0, 1, (scrollY - 18000) / 500);
    var snova3out = lerp(0, 1, (scrollY - 18500) / 500)
    snova3.style.opacity = snova3in - snova3out;

    var introneut = document.querySelector(".introneut");
    var introneutin = lerp(0, 1, (scrollY - 19500) / 500);
    var introneutout = lerp(0, 1, (scrollY - 20000) / 500)
    introneut.style.opacity = introneutin - introneutout;

    var introhole = document.querySelector(".introhole");
    var introholein = lerp(0, 1, (scrollY - 19500) / 500);
    var introholeout = lerp(0, 1, (scrollY - 20000) / 500)
    introhole.style.opacity = introholein - introholeout;

    var neut1 = document.querySelector(".neut1");
    var neut1in = lerp(0, 1, (scrollY - 20500) / 500);
    var neut1out = lerp(0, 1, (scrollY - 21000) / 500)
    neut1.style.opacity = neut1in - neut1out;

    var neut2 = document.querySelector(".neut2");
    var neut2in = lerp(0, 1, (scrollY - 21500) / 500);
    var neut2out = lerp(0, 1, (scrollY - 22000) / 500)
    neut2.style.opacity = neut2in - neut2out;

    var neut3 = document.querySelector(".neut3");
    var neut3in = lerp(0, 1, (scrollY - 22500) / 500);
    var neut3out = lerp(0, 1, (scrollY - 25000) / 500)
    neut3.style.opacity = neut3in - neut3out;

    var hole1 = document.querySelector(".hole1");
    var hole1in = lerp(0, 1, (scrollY - 20500) / 500);
    var hole1out = lerp(0, 1, (scrollY - 21000) / 500)
    hole1.style.opacity = hole1in - hole1out;

    var hole2 = document.querySelector(".hole2");
    var hole2in = lerp(0, 1, (scrollY - 21500) / 500);
    var hole2out = lerp(0, 1, (scrollY - 22000) / 500)
    hole2.style.opacity = hole2in - hole2out;

    var hole3 = document.querySelector(".hole3");
    var hole3in = lerp(0, 1, (scrollY - 22500) / 500);
    var hole3out = lerp(0, 1, (scrollY - 25000) / 500)
    hole3.style.opacity = hole3in - hole3out;


    

    var introdwarf = document.querySelector(".introdwarf");
    var introdwarfin = lerp(0, 1, (scrollY - 18000) / 500);
    var introdwarfout = lerp(0, 1, (scrollY - 19000) / 500)
    introdwarf.style.opacity = introdwarfin -introdwarfout;

    var dwar1 = document.querySelector(".dwar1");
    var dwar1in = lerp(0, 1, (scrollY - 20000) / 500);
    var dwar1out = lerp(0, 1, (scrollY - 21000) / 500)
    dwar1.style.opacity = dwar1in - dwar1out;

    var dwar2 = document.querySelector(".dwar2");
    var dwar2in = lerp(0, 1, (scrollY - 21500) / 500);
    var dwar2out = lerp(0, 1, (scrollY - 22000) / 500)
    dwar2.style.opacity = dwar2in - dwar2out;

    var dwar3 = document.querySelector(".dwar3");
    var dwar3in = lerp(0, 1, (scrollY - 22500) / 500);
    var dwar3out = lerp(0, 1, (scrollY - 25000) / 500)
    dwar3.style.opacity = dwar3in - dwar3out;
})

function clamp(value, min, max) {
    return Math.max(Math.min(value, max), min);
}

function lerp(start, end, weight) {
    return clamp((1 - weight) * start + weight * end, start, end);
}
