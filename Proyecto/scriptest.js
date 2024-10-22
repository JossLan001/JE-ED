const FiltersG = document.querySelector(".Filters-G"),
    items = document.querySelectorAll(".item1");

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


const FiltersC = document.querySelector(".Filters-Chi"),
    item2C = document.querySelectorAll(".item2");

FiltersC.addEventListener("click", () =>{
    FiltersC.classList.toggle("open");
});

item2C.forEach(item =>{
    item.addEventListener("click", () => {
        item.classList.toggle("checked");
    
        let checked = document.querySelectorAll(".checked"),
            FiltersChi = document.querySelector(".Filters-Child");

        if (checked && checked.length > 0){
                FiltersChi.innerText = `${checked.length} Selected`;
        }else{
                FiltersChi.innerText = "Niños";
        }

    });

})


