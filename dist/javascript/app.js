const view = (function(){

    const DOMStrings = {
        buttons:{
            homeButtons: '.btn',
            houseCleaning: '.houseCleaning',
            carWash: '.carWash',
            carpetCleaning: '.carpetCleaning',
            addNum: '.add--',
            subNum: '.sub--',
            exit: '.exit',
            submit: '.submit'
        },
        elements:{
            popup: '.popup',
            popupView: '.popup__view',
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

    const renderHtml = {
        houseCleaning: {
            regular :`
            <table class="tasks">
                <!-- Table will be generated with JS related to the selection -->
                <tr>
                    <td class="task__name--bed">Bedroom</td>
                    <td class="task__total--bed">0</td>
                    <td class="task__add--bed">
                        <button class="add add--bed">+</button>
                    </td>
                    <td class="task__sub--bed">
                        <button class="sub sub--bed">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--liv">Living Room</td>
                    <td class="task__total--liv">0</td>
                    <td class="task__add--liv">
                        <button class="add add--liv">+</button>
                    </td>
                    <td class="task__sub--liv">
                        <button class="sub sub--liv">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--bath">Bathroom</td>
                    <td class="task__total--bath">0</td>
                    <td class="task__add--bath">
                        <button class="add add--bath">+</button>
                    </td>
                    <td class="task__sub--bath">
                        <button class="sub sub--bath">-</button>
                    </td>
                </tr>
            </table>
            <button class="submit">Calculate</button>`,
            spring: `
            <table class="tasks">
                <!-- Table will be generated with JS related to the selection -->
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[0]}">${serviceStrings.houseCleaning.spring.names[0]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[0]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[0]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[0]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[0]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[0]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[1]}">${serviceStrings.houseCleaning.spring.names[1]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[1]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[1]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[1]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[1]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[1]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[2]}">${serviceStrings.houseCleaning.spring.names[2]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[2]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[2]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[2]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[2]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[2]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[3]}">${serviceStrings.houseCleaning.spring.names[3]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[3]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[3]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[3]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[3]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[3]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[4]}">${serviceStrings.houseCleaning.spring.names[4]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[4]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[4]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[4]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[4]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[4]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.spring.tags[5]}">${serviceStrings.houseCleaning.spring.names[5]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[5]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.spring.tags[5]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[5]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.spring.tags[5]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[5]}">-</button>
                    </td>
                </tr>
            </table>
            <button class="submit">Calculate</button>`,
            bond: `
            <table class="tasks">
                <!-- Table will be generated with JS related to the selection -->
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[0]}">${serviceStrings.houseCleaning.bond.names[0]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[0]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[0]}">
                        <button class="add add--${serviceStrings.houseCleaning.spring.tags[0]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[0]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.spring.tags[0]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[1]}">${serviceStrings.houseCleaning.bond.names[1]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[1]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[1]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[1]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[1]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[1]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[2]}">${serviceStrings.houseCleaning.bond.names[2]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.spring.tags[2]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[2]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[2]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[2]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[2]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[3]}">${serviceStrings.houseCleaning.bond.names[3]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[3]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[3]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[3]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[3]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[3]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[4]}">${serviceStrings.houseCleaning.bond.names[4]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[4]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[4]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[4]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[4]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[4]}">-</button>
                    </td>
                </tr>
                <tr>
                    <td class="task__name--${serviceStrings.houseCleaning.bond.tags[5]}">${serviceStrings.houseCleaning.bond.names[5]}</td>
                    <td class="task__total--${serviceStrings.houseCleaning.bond.tags[5]}">0</td>
                    <td class="task__add--${serviceStrings.houseCleaning.bond.tags[5]}">
                        <button class="add add--${serviceStrings.houseCleaning.bond.tags[5]}">+</button>
                    </td>
                    <td class="task__sub--${serviceStrings.houseCleaning.bond.tags[5]}">
                        <button class="sub sub--${serviceStrings.houseCleaning.bond.tags[5]}">-</button>
                    </td>
                </tr>
            </table>
            <button class="submit">Calculate</button>`
        },
        carWash: {
            hatch: 'Hatch',
            sedan: 'Sedan',
            suv: 'SUV'
        },
        carpetCleaning: 'Carpet Cleaning'
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
        },
        getHtml: (service, type)=>{
            return renderHtml[service][type];
        }
    };
})();

///////////////////////////////////////////////////////////////
const data = (function(){

    const serviceLength = {
        houseCleaning:{
            regular:{
                bathroom: 30,
                kitchen: 30,
                dusting: 5,
                vacuum: 5,
                mop: 5
            },
            spring:{
                bathroom: 45,
                kitchen: 45,
                dusting: 8,
                vacuum: 8,
                mop: 5,
                fan: 10,
                blinds: 15,
                oven: 120
            },
            bond:{
                bathroom: 60,
                kitchen: 120,
                dusting: 5,
                vacuum: 5,
                mop: 5,
                fan: 10,
                wall: 15,
                blinds: 20,
                oven: 120
            }
        }
    };

    var prices = {
        houseCleaning: {
            regular:33,
            spring: 43,
            bond: 48
        }
    };

    return{
        getTime: (service, type)=>{
            if(service === 'houseCleaning'){
                //regular cleaning
                if(type === 'regular'){
                    return (bedCount, livCount, bathCount)=>{
                        return (bedCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (livCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (bathCount * serviceLength[service][type].bathroom) + serviceLength[service][type].kitchen;
                    }
                }
                //spring cleaning
                else if(type === 'spring'){
                    return (bedCount, livCount, bathCount, blindsCount, ovenCount, fansCount)=>{
                        return (bedCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (livCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (bathCount * serviceLength[service][type].bathroom) + serviceLength[service][type].kitchen + (ovenCount * serviceLength[service][type].oven) +
                                (blindsCount * serviceLength[service][type].blinds) + (fansCount * serviceLength[service][type].fan);
                    };
                }
                //bond cleaning
                else if(type === 'bond'){
                    return (bedCount, livCount, bathCount, blindsCount, ovenCount, fansCount)=>{
                        return (bedCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (livCount * (serviceLength[service][type].mop + serviceLength[service][type].dusting + serviceLength[service][type].vacuum)) +
                                (bathCount * serviceLength[service][type].bathroom) + serviceLength[service][type].kitchen + (ovenCount * serviceLength[service][type].oven) +
                                (blindsCount * serviceLength[service][type].blinds) + ((bedCount + livCount + bathCount + 1) * 4 * serviceLength[service][type].wall) + (fansCount * serviceLength[service][type].fan);
                    };
                }
            }
            
            else if(service === 'carWash'){

            }
            
            else if(service === 'carpetCleaning'){

            }
        },

        getPrice : (service, type)=>{
            return prices[service][type];
        }
    };
})();



////////////////////////////////////////////////////////////////
const controller = (function (view, data) {

    //ELEMENT SELECTORS
    const popup = document.querySelector(view.getSelectors().elements.popup);
    const popupView = document.querySelector(view.getSelectors().elements.popupView);
    const homeButtons = document.querySelectorAll(view.getSelectors().buttons.homeButtons);
    const exit = document.querySelector(view.getSelectors().buttons.exit);

    //TODO:
    const addButtons = document.querySelectorAll(view.getSelectors().buttons.addNum);
    const subButtons = document.querySelectorAll(view.getSelectors().buttons.subNum);
    

    let state = {};

    //Home buttons event listeners
    homeButtons.forEach((e) => {

        e.addEventListener('click', (el) => {
            state.serviceName = el.target.id;
            console.log(state.serviceName);

            if(state.serviceName === 'houseCleaning'){
                state.typeID = 'regular';
                popup.style.visibility = "visible";
            }
            else if(state.serviceName === 'carWash'){
                popup.innerHTML = 'Under development...';
                popup.style.visibility = "visible";
            }
            else if(state.serviceName === 'carpetCleaning'){
                popup.innerHTML = 'Under development...';
                popup.style.visibility = "visible";
            }
        });
    });

    

    // //Popup close event listener
    exit.addEventListener('click', () => {
        popup.style.visibility = "hidden";

        const DOMStr = view.getSelectors();
        const tags = (service, type) => {
            return view.getTags(service, type);
        };
        
        tags(state.serviceName, state.typeID).forEach((item) => {
        document.querySelector(`${DOMStr.elements.task__total}${item}`).textContent = 0;
        document.querySelector(DOMStr.elements.time).textContent = 0;
        document.querySelector(DOMStr.elements.price).textContent = 0;
        });

    });



    //POPUP EVENT LISTENER
    popup.addEventListener('click', (e) => {
        //TypeID selector buttons
        if (e.target.matches('#regular')){
            state.serviceName = 'houseCleaning';
            state.typeID = 'regular';
            popupView.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }
        else if (e.target.matches('#spring')){
            state.serviceName = 'houseCleaning';
            state.typeID = 'spring';
            popupView.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }
        else if (e.target.matches('#bond')){
            state.serviceName = 'houseCleaning';
            state.typeID = 'bond';
            popupView.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }
        else if (e.target.matches('#hatch')){
            state.serviceName = 'carWash';
            state.typeID = 'hatch';
            popupView.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }
        else if (e.target.matches('#sedan')){
            state.serviceName = 'carWash';
            state.typeID = 'sedan';
            popupView.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }
        else if (e.target.matches('#suv')){
            state.serviceName = 'carWash';
            state.typeID = 'suv';
            popupView.innerHTML = view.getHtml(state.serviceName, state.typeID);
        }



        //ADD & SUB BUTTONS
        //TODO:
        addButtons.forEach((btn)=>{
            btn.addEventListener('click', ()=>{
                console.log('Cuzinho');
            });
        });
        
    });

})(view, data);







