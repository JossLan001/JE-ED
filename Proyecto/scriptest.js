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
