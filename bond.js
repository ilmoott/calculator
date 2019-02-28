var data = (()=>{

    var services = {
        cleaning:{
            regular:{
                bathroom: 30,
                kitchen: 30,
                dusting: 5,
                vacuum: 5,
                mop: 5
            },
            spring:{
                // bathroom: 30,
                // kitchen: 30,
                // dusting: 5,
                // vacuum: 5,
                // mop: 5
            },
            bond:{
                bathroom: 60,
                kitchen: 120,
                dusting: 5,
                vacuum: 5,
                mop: 5,
                wall: 15,
                blinds: 20,
                oven: 120
            }
        }
    };

    var prices = {
        cleaning: {
            regular:33,
            spring: 43,
            bond: 48
        }
    };

    return{
        getServices: ()=>{
            return services;
        },

        getPrices: ()=>{
            return prices;
        }

    };
})();

/////////////////////////
var view = {

    DOMStrings: {
        bedroom__field: ".input__bed",
        livingRoom__field: ".input__living",
        bathroom__field: '.input__bath',
        bedroom__add: '.btn__add--bed',
        livingRoom__add: '.btn__add--living',
        bathroom__add: '.btn__add--bath',
        btn__submit: '.btn__submit',
        blind__field:'.input__blind',
        blind__add:'.btn__add--blind',
        oven__field:'.input__oven',
        oven__add:'.btn__add--oven',
        result: '.result__text'
    }
};


/////////////////////////


var app = (dt,vw)=>{

    var bedInput = document.querySelector(vw.DOMStrings.bedroom__field);
    var livingInput = document.querySelector(vw.DOMStrings.livingRoom__field);
    var bathInput = document.querySelector(vw.DOMStrings.bathroom__field);
    var bathAddBtn = document.querySelector(vw.DOMStrings.bathroom__add);
    var bedAddBtn = document.querySelector(vw.DOMStrings.bedroom__add);
    var livingAddBtn = document.querySelector(vw.DOMStrings.livingRoom__add);
    var submitBtn = document.querySelector(vw.DOMStrings.btn__submit);
    var blindInput = document.querySelector(vw.DOMStrings.blind__field);
    var blindAddBtn = document.querySelector(vw.DOMStrings.blind__add);
    var ovenInput = document.querySelector(vw.DOMStrings.oven__field);
    var ovenAddBtn = document.querySelector(vw.DOMStrings.oven__add);
    var result = document.querySelector(vw.DOMStrings.result);


    //setting up event listeners for the add buttons
    bedAddBtn.addEventListener('click',()=>{
        var bedrooms = parseInt(bedInput.textContent);

        bedrooms++;

        bedInput.textContent = bedrooms;
    });

    livingAddBtn.addEventListener('click',()=>{
        var livingRooms = parseInt(livingInput.textContent);

        livingRooms++;

        livingInput.textContent = livingRooms;
    });

    bathAddBtn.addEventListener('click',()=>{
        var bathrooms = parseInt(bathInput.textContent);

        bathrooms++;

        bathInput.textContent = bathrooms;
    });

    blindAddBtn.addEventListener('click',()=>{
        var blinds = parseInt(blindInput.textContent);

        blinds++;

        blindInput.textContent = blinds;
    });

    ovenAddBtn.addEventListener('click',()=>{
        var oven = parseInt(ovenInput.textContent);

        oven++;

        ovenInput.textContent = oven;
    });


    //setting up event listener for the submit btn
    submitBtn.addEventListener('click',()=>{

        var services = dt.getServices();
        var price;

        var bedrooms = parseInt(bedInput.textContent);
        var livingRooms = parseInt(livingInput.textContent);
        var bathrooms = parseInt(bathInput.textContent);
        var blinds = parseInt(blindInput.textContent);
        var oven = parseInt(ovenInput.textContent);

        //we should include windows
        var quote = (bedrooms*(services.cleaning.bond.dusting + services.cleaning.bond.vacuum + services.cleaning.bond.mop + (services.cleaning.bond.wall*4)))
        + (livingRooms*(services.cleaning.bond.dusting + services.cleaning.bond.vacuum + services.cleaning.bond.mop) + (services.cleaning.bond.wall*4))
        + (bathrooms * (services.cleaning.bond.bathroom + services.cleaning.bond.mop))
        + (services.cleaning.bond.kitchen + services.cleaning.bond.vacuum + services.cleaning.bond.mop)
        + (blinds * services.cleaning.bond.blinds)
        + (oven * services.cleaning.bond.oven);
        
        quote = Math.ceil(quote / 60).toFixed(1); //this will give us the time in hours
        price = quote * dt.getPrices().cleaning.bond;
        
        result.textContent = `The time needed to finish this job will be approximately ${quote} hours. And the price would be ${price}$`; //we need to figure out a way to round up
    });

};

app(data, view);