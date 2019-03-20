const view = (function(){

    const DOMStrings = {
        buttons:{
            homeButtons: '.btn',
            houseCleaning: '.houseCleaning',
            carWash: 'carWash',
            carpetCleaning: 'carpetCleaning',
            addNum: '.add--',
            subNum: '.sub--',
            exit: '.exit',
            submit: '.submit'
        },
        elements:{
            sectionBody: '.body',
            task__name: '.task__name--',
            task__total: '.task__total--',
            time: '.time',
            price: '.price',
            selection: '.selection'
        }  
    };

    const serviceStrings = {
        houseCleaning: {
            regular: {
                names: ['Bedrooms', 'Living Rooms', 'Bathrooms'],
                tags: ['bed','liv','bath']
            },
            spring:{
                names: ['Bedrooms', 'Living Rooms', 'Bathrooms', 'Blinds','Fans','Oven'],
                tags: ['bed','liv','bath', 'blnd','fan','oven']
            },
            bond:{
                names: ['Bedrooms', 'Living Rooms', 'Bathrooms', 'Blinds','Fans','Oven'],
                tags: ['bed','liv','bath', 'blnd','fan','oven']
            }
        }
    };

    return{
        getSelectors:()=>{
            return DOMStrings;
        },
        getNames: (service, type)=>{
            return serviceStrings[service][type].names;
        },
        getTags: (service, type)=>{
            return serviceStrings[service][type].tags;
        }
    };
})();

///////////////////////////////////////////////////////////////
const data = (function(){

    const serviceLength = {
        houseCleaning:{
            regular:{
                //
            },
            
        }
    }
})();



////////////////////////////////////////////////////////////////
const controller = (function (view, data) {

    const body = document.querySelector(view.getSelectors().elements.sectionBody);
    const homeButtons = document.querySelectorAll(view.getSelectors().buttons.homeButtons);
    const exit = document.querySelector(view.getSelectors().buttons.exit);
    const selection = document.querySelector(view.getSelectors().elements.selection);

    //Home buttons event listeners
    homeButtons.forEach((e) => {
        e.addEventListener('click', () => {
            body.style.visibility = "visible";

            /*
            //TODO:
                add different routes for each button
                render different HTML for each button
            */
        });
    });

    // //Popup close event listener
    exit.addEventListener('click', () => {
        body.style.visibility = "hidden";
    });

    /*
    TODO:
        *Section body event listener
    
    
        Selection event listener - ***
        Render different HTML for each home btn click
    */



    body.addEventListener('click', (e) => {
        const DOMStr = view.getSelectors();
        const tags = (service, type) => {
            return view.getTags(service, type);
        };

        tags('houseCleaning', 'regular').forEach((item) => {
            //ADD & SUB event listeners
            if (e.target.matches(`${DOMStr.buttons.addNum}${item}`)) {
                document.querySelector(`${DOMStr.elements.task__total}${item}`).textContent = parseInt(document.querySelector(`${DOMStr.elements.task__total}${item}`).textContent) + 1;

            } else if (e.target.matches(`${DOMStr.buttons.subNum}${item}`)) {
                document.querySelector(`${DOMStr.elements.task__total}${item}`).textContent = parseInt(document.querySelector(`${DOMStr.elements.task__total}${item}`).textContent) - 1;
            }
        });

        if(e.target.matches(DOMStr.buttons.submit)){
            
            /*
            //TODO:
                create the data module with the data for calculation
            */
            document.querySelector(DOMStr.elements.time).textContent = parseInt(document.querySelector(DOMStr.elements.time).textContent) + 20;
            document.querySelector(DOMStr.elements.price).textContent = parseInt(document.querySelector(DOMStr.elements.price).textContent) + 50;
        }
    });

})(view);







