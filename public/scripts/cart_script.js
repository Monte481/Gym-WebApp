let data;

document.addEventListener("DOMContentLoaded", function () {

    if (!sessionStorage.getItem('sessionId')) {
        sessionStorage.setItem('sessionId', 'sid_' + crypto.randomUUID());
    }

    const SID = sessionStorage.getItem('sessionId');

    console.log("Na cart sid: "+ SID);

    fetch('/cart/getAll', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({sid: SID})
    })
        .then(res => res.json())
        .then(fetchedData => {
            data = fetchedData;

            console.log(data);

            global_count = JSON.parse(sessionStorage.getItem("global_count"));

            const logo_picture = document.getElementById('logo_picture');
            logo_picture.addEventListener('click', function () {
                window.location.href = '/home';
            });

            document.getElementById("not_empty_cart").style.display = 'none';

            const element = document.getElementById("added_items");
            const total_amount = document.getElementById("amount");

            let amount = 0;
            let item_id = 0;
            let number_of_items = 0;

            for (let i = 0; i < 10; i++) {
                data[i].items.forEach((item, j) => {
                    if (item.count !== 0) {
                        let name = item.name;
                        let price = item.price;
                        let count = item.count;
                        let img = item.img;
                        amount += price*count;
                        element.innerHTML += `<li class="cart_inventory" id="cart_inventory_${item_id}"><img id="picture_in_cart" src="${img}" alt="Slika">
                                                             <span>${name}</span> 
                                                             <span>${price}</span>
                <span class="quantity" id="${item_id}_${i}_${j}"><button type="button" class="button minus" id="btn1_${item_id}">-</button>
                                                             ${count} <button type="button" class="button plus" id="btn2_${item_id}">+</button></span></li>`;
                        number_of_items++;
                    }
                    item_id++;
                });
            }

            if (number_of_items !== 0) {
                document.getElementById("empty_cart").style.display = 'none';
                document.getElementById("not_empty_cart").style.display = 'flex';
            } else {
                document.getElementById("not_empty_cart").style.display = 'none';
                document.getElementById("empty_cart").style.display = 'flex';
            }

            total_amount.innerText = amount.toFixed(2) + " €";

            document.addEventListener("click", function (btn) {
                if (btn.target.classList.contains("plus")) {
                    let id = btn.target.id;
                    let item_id_helper = id.split("_")[1];

                    fetch(`/cart/add/${Number(item_id_helper)}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({sid: SID, category: 'drugi'})
                    })
                        .then(res => res.json())
                        .then(fetchedData => {
                            const item = fetchedData;

                            let element = document.querySelector(`[id^="${item_id_helper}_"]`).id;
                            let i = element.split("_")[1];
                            let j = element.split("_")[2];
                            let count = item.count;
                            document.getElementById(element).innerHTML = `<button type="button" class="button minus" id="btn1_${item_id_helper}">-</button>
                                                         ${count} 
                                                         <button type="button" class="button plus" id="btn2_${item_id_helper}">+</button>`;
                            amount += item.price;
                            total_amount.innerText = amount.toFixed(2) + " €";
                            global_count++;
                            document.getElementById("total_items_in_cart").innerText = global_count;

                            sessionStorage.setItem("global_count", JSON.stringify(global_count));
                        });
                }
            });

            document.addEventListener("click", function (btn) {
                if (btn.target.classList.contains("minus")) {
                    let id = btn.target.id;
                    let item_id_helper = id.split("_")[1];

                    fetch(`/cart/remove/${Number(item_id_helper)}`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({sid: SID, category: 'drugi'})
                    })
                        .then(res => res.json())
                        .then(fetchedData => {
                            const item = fetchedData;

                            let element = document.querySelector(`[id^="${item_id_helper}_"]`).id;
                            let i = element.split("_")[1];
                            let j = element.split("_")[2];
                            let count = item.count;
                            if (count === 0) {
                                document.getElementById(`cart_inventory_${item_id_helper}`).style.display = 'none';
                                number_of_items--
                                if (number_of_items === 0) {
                                    document.getElementById("empty_cart").style.display = 'flex';
                                    document.getElementById("not_empty_cart").style.display = 'none';
                                }
                            } else {
                                document.getElementById(element).innerHTML = `<button type="button" class="button minus" id="btn1_${item_id_helper}">-</button>
                                                         ${count} 
                                                         <button type="button" class="button plus" id="btn2_${item_id_helper}">+</button>`;
                            }
                            amount -= item.price;
                            total_amount.innerText = amount.toFixed(2) + " €";
                            global_count--;
                            if (global_count === 0) {
                                document.getElementById("total_items_in_cart").style.display = 'none';
                            } else {
                                document.getElementById("total_items_in_cart").innerText = global_count;
                            }
                            sessionStorage.setItem("global_count", JSON.stringify(global_count));
                        });
                }
            });
        })
        .catch(reason => {
            console.log(reason);
        });
});