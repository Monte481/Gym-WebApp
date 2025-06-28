let products;
let categoriesNames;
let global_count;
let SID;

/* ========== INDEX SCRIPT ========== */
document.addEventListener("DOMContentLoaded", function () {

    if (!sessionStorage.getItem('sessionId')) {
        sessionStorage.setItem('sessionId', 'sid_' + crypto.randomUUID());
    }

    const SID = sessionStorage.getItem('sessionId'); // sigurno postoji

    fetch('home/loadImages')
        .then(res => res.json())
        .then(fetchedData => {
            preloadImages(fetchedData);
        });

    let categories = document.getElementById("category_list");
    const main = document.getElementById("main");
    const welcoming_pictures = document.getElementById("welcoming_pictures");
    const logo_picture = document.getElementById("logo_picture");
    const number_of_items = document.querySelectorAll(".add_to_cart_picture");
    const total_items_in_cart = document.getElementById("total_items_in_cart");

    const pictures = [
        document.getElementById("picture_1"),
        document.getElementById("picture_2"),
        document.getElementById("picture_3"),
        document.getElementById("picture_4"),
        document.getElementById("picture_5"),
        document.getElementById("picture_6"),
    ];
    const items_in_cart = [
        document.getElementById("number_of_items_1"),
        document.getElementById("number_of_items_2"),
        document.getElementById("number_of_items_3"),
        document.getElementById("number_of_items_4"),
        document.getElementById("number_of_items_5"),
        document.getElementById("number_of_items_6"),
    ];
    const names = [
        document.getElementById("name_1"),
        document.getElementById("name_2"),
        document.getElementById("name_3"),
        document.getElementById("name_4"),
        document.getElementById("name_5"),
        document.getElementById("name_6"),
    ];
    const prices = [
        document.getElementById("price_1"),
        document.getElementById("price_2"),
        document.getElementById("price_3"),
        document.getElementById("price_4"),
        document.getElementById("price_5"),
        document.getElementById("price_6"),
    ];

    let last_category = -1;
    let current_category;

    fetch('/home/getCategories', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({sid: SID})
    })
        .then(res => res.json())
        .then(fetchedData => {
            categoriesNames = fetchedData;
            populateCategories();
        });

    if (sessionStorage.getItem("global_count")) {
        global_count = JSON.parse(sessionStorage.getItem("global_count"));
        if (global_count !== 0) {
            document.getElementById("total_items_in_cart").style.display = 'block';
            document.getElementById("total_items_in_cart").innerText = global_count;
        }
    } else {
        global_count = 0;
    }

    main.style.display = 'none';

    categories.addEventListener("click", function (category) {
        fetch(`/home/getProducts/${category.target.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({sid: SID})
        })
            .then(res => res.json())
            .then(fetchedData => {
                products = fetchedData;
                let number = Number(category.target.id);
                if (number >= 0 && number <= 9) {
                    current_category = number;
                    if (last_category !== -1) {
                        document.getElementById(last_category).style.backgroundColor = "";
                        document.getElementById(last_category).style.color = "";
                    }
                    last_category = number;
                    document.getElementById(number).style.backgroundColor = "rgb(0, 176, 251)";
                    document.getElementById(number).style.color = "white";

                    main.style.display = 'flex';
                    products.forEach((item, i) => {
                        names[i].innerText = item.name;
                        prices[i].innerText = item.price + " €";
                        let pic = item.img;
                        pictures[i].innerHTML = `<img src="${pic}" width="100%">`;

                        if (item.count === 0) {
                            items_in_cart[i].style.display = 'none';
                        } else {
                            items_in_cart[i].style.display = 'block';
                            items_in_cart[i].innerText = item.count;
                        }
                    });

                    welcoming_pictures.style.display = 'none';
                    window.scrollTo(
                        {top: 0, behavior: 'smooth'}
                    );
                }
            });
    });

    logo_picture.addEventListener("click", function () {
        main.style.display = 'none';
        welcoming_pictures.style.display = 'flex';
        if (last_category !== -1) {
            document.getElementById(last_category).style.backgroundColor = "initial";
            document.getElementById(last_category).style.color = "initial";
        }
        window.scrollTo(
            {top: 0, behavior: 'smooth'}
        );
    });

    number_of_items.forEach(element => {
        element.addEventListener("click", function (clicked) {
            let number = Number(clicked.target.id.toString().split("_")[1]) - 1;
            fetch(`/cart/add/${number}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    sid: SID,
                    category: current_category
                })
            })
                .then(res => res.json())
                .then(fetchedData => {
                    const item = fetchedData;
                    items_in_cart[number].style.display = 'block';
                    items_in_cart[number].innerText = item.count;
                    total_items_in_cart.style.display = 'block';
                    global_count++;
                    total_items_in_cart.innerText = global_count;
                    sessionStorage.setItem("global_count", JSON.stringify(global_count));
                });
        });
    });

    document.querySelectorAll(".redirect").forEach(link => {
        link.addEventListener("click", function () {
            window.location.href = '/cart';
        });
    });
});

function preloadImages(list) {
    list.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

function populateCategories() {
    const ul = document.getElementById("category_list");

    ul.innerHTML = '';

    for (let cat in categoriesNames) {
        const li = document.createElement("li");
        li.textContent = categoriesNames[cat];
        li.classList.add("categories");
        li.id = cat;
        ul.appendChild(li);
    }
}


