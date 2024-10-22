// const wrapper = document.querySelector('.wrapper');
// const loginLink = document.querySelector('.login-link');
// const registerLink = document.querySelector('.register-link');

// const btnPopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

// registerLink.addEventListener('click', ()=> {
//     wrapper.classList.add('active');
// });

// loginLink.addEventListener('click', ()=> {
//     wrapper.classList.remove('active');
// });

// btnPopup.addEventListener('click', ()=> {
//     wrapper.classList.add('active-popup');
// });

// iconClose.addEventListener('click', ()=> {
//     wrapper.classList.remove('active-popup');
// });


const FiltersG = document.querySelector(".Filters-G"),
     items = document.querySelectorAll(".item");

 FiltersG.addEventListener("click", () =>{
     FiltersG.classList.toggle("open");
 });

items.forEach(item =>{
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    
        let checked = document.querySelectorAll(".checked"),
            FiltersGen = document.querySelector(".Filters-Gen");

        if (checked && checked.length > 0){
                FiltersGen.innerText = `${checked.length} Selected`;
        }else{
                FiltersGen.innerText = "Genero";
        }

    });

})
