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
                // bathroom: 30,
                // kitchen: 30,
                // dusting: 5,
                // vacuum: 5,
                // mop: 5
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


    //setting up event listener for the submit btn
    submitBtn.addEventListener('click',()=>{

        var services = dt.getServices();
        var price;

        var bedrooms = parseInt(bedInput.textContent);
        var livingRooms = parseInt(livingInput.textContent);
        var bathrooms = parseInt(bathInput.textContent);

        var quote = (bedrooms*(services.cleaning.regular.dusting + services.cleaning.regular.vacuum + services.cleaning.regular.mop))
        + (livingRooms*(services.cleaning.regular.dusting + services.cleaning.regular.vacuum + services.cleaning.regular.mop))
        + (bathrooms * (services.cleaning.regular.bathroom + services.cleaning.regular.mop))
        + (services.cleaning.regular.kitchen + services.cleaning.regular.vacuum + services.cleaning.regular.mop);
        
        quote = Math.ceil(quote / 60).toFixed(1); //this will give us the time in hours
        price = quote * dt.getPrices().cleaning.regular;
        
        result.textContent = `The time needed to finish this job will be approximately ${quote} hours. And the price would be ${price}$`; //we need to figure out a way to round up
    });

};

app(data, view);