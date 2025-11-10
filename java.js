let form = document.getElementById("form")
let getCoinName = document.getElementById("get-coin-name")
let appendDiv = document.getElementById("append-data")
let getCurrencyValue = document.getElementById("get-cuurency-value")
let showError = document.getElementById("show-error")
let appendWhenSreach = document.getElementById("append-when-sreach")
let clear = document.getElementById("clear")
let setWidth = document.getElementById("lower-main")
let getCurrencyList = getCurrencyValue.value
let currencyValue = getCurrencyValue.value
let convertValue = getCoinName.value.trim().toLowerCase();

let api_key = "CG-qsA1kZUANJNstmr1fwBEXvWD"

function create(coinRank, coinImage, coinName, coinPrice, coinPricePercentage, coinMarketcap, coincurrency) {
    
    let createDiv = document.createElement('div')
    createDiv.setAttribute("class", "coin-layout")

    let createP1 = document.createElement('p')
    createP1.setAttribute("class", "text-design")
    createP1.textContent = `${coinRank}`

    let createP2 = document.createElement('p')
    createP2.setAttribute("class", "paragraph-design")
    
    let createImg = document.createElement('img')
    createImg.setAttribute("class", "img-design")
    createImg.src = `${coinImage}`
    createImg.style.width = "25px"
    
    let createParagraph = document.createElement('p')
    createParagraph.setAttribute("class", "text-design")
    createParagraph.textContent = `${coinName}`
    
    createP2.appendChild(createImg)
    createP2.appendChild(createParagraph)
    
    let createP3 = document.createElement('p')
    createP3.setAttribute("class", "text-design")
    
    let createP4 = document.createElement('p')
    createP4.setAttribute("class", "text-design")
    createP4.textContent = `${coinPricePercentage.toFixed(2)}`

    if(coinPricePercentage > 0) {
        createP4.style.color = "green"
    } else {
        createP4.style.color = "red"
    }

    // let obj = {
    //     "$": "usd",
    //     "PKR": "pkr",
    //     "¥": "cny",
    //     "₺": "try",
    //     "€": "eur",
    //     "¥": "yen"
    // }

    // if(Object.values(obj) === coincurrency) {
    //     createP3.textContent = `${Object.keys()}${coinPrice}`

    //     if(coinMarketcap > 1000000000000) {
    //         createP5.textContent = `${Object.keys()}${coinMarketcap}T`
    //     } else if (coinMarketcap > 1000000000) {
    //         createP5.textContent = `${Object.keys()}${coinMarketcap}B`
    //     } else if (coinMarketcap > 1000000) {
    //         createP5.textContent = `${Object.keys()}${coinMarketcap}M`
    //     } else if(coinMarketcap < 1000) {
    //         createP5.textContent = `${Object.keys()}${coinMarketcap}K`
    //     }
    // }
    
    let createP5 = document.createElement('p')
    createP5.setAttribute("class", "market-cap")
    if(coincurrency === "usd") {
        createP3.textContent = `$${coinPrice}`

        if(coinMarketcap > 1000000000000) {
            createP5.textContent = `$${coinMarketcap}T`
        } else if (coinMarketcap > 1000000000) {
            createP5.textContent = `$${coinMarketcap}B`
        } else if (coinMarketcap > 1000000) {
            createP5.textContent = `$${coinMarketcap}M`
        } else if(coinMarketcap < 1000) {
            createP5.textContent = `$${coinMarketcap}K`
        }

    } else if (coincurrency === "pkr") {
        createP3.textContent = `PKR${coinPrice}`

        if(coinMarketcap > 1000000000000) {
            createP5.textContent = `PKR${coinMarketcap}T`
        } else if (coinMarketcap > 1000000000) {
            createP5.textContent = `PKR${coinMarketcap}B`
        } else if (coinMarketcap > 1000000) {
            createP5.textContent = `PKR${coinMarketcap}M`
        } else if(coinMarketcap < 1000) {
            createP5.textContent = `PKR${coinMarketcap}K`
        }

    } else if (coincurrency === "cny") {
        createP3.textContent = `¥${coinPrice}`

        if(coinMarketcap > 1000000000000) {
            createP5.textContent = `¥${coinMarketcap}T`
        } else if (coinMarketcap > 1000000000) {
            createP5.textContent = `¥${coinMarketcap}B`
        } else if (coinMarketcap > 1000000) {
            createP5.textContent = `¥${coinMarketcap}M`
        } else if(coinMarketcap < 1000) {
            createP5.textContent = `¥${coinMarketcap}K`
        }

    } else if (coincurrency === "try") {
        createP3.textContent = `₺${coinPrice}`

        if(coinMarketcap > 1000000000000) {
            createP5.textContent = `₺${coinMarketcap}T`
        } else if (coinMarketcap > 1000000000) {
            createP5.textContent = `₺${coinMarketcap}B`
        } else if (coinMarketcap > 1000000) {
            createP5.textContent = `₺${coinMarketcap}M`
        } else if(coinMarketcap < 1000) {
            createP5.textContent = `₺${coinMarketcap}K`
        }

    } else if (coincurrency === "eur") {
        createP3.textContent = `€${coinPrice}`

        if(coinMarketcap > 1000000000000) {
            createP5.textContent = `€${coinMarketcap}T`
        } else if (coinMarketcap > 1000000000) {
            createP5.textContent = `€${coinMarketcap}B`
        } else if (coinMarketcap > 1000000) {
            createP5.textContent = `€${coinMarketcap}M`
        } else if(coinMarketcap < 1000) {
            createP5.textContent = `€${coinMarketcap}K`
        }

    } else if (coincurrency === "jpy") {
        createP3.textContent = `¥${coinPrice}`

        if(coinMarketcap > 1000000000000) {
            createP5.textContent = `¥${coinMarketcap}T`
        } else if (coinMarketcap > 1000000000) {
            createP5.textContent = `¥${coinMarketcap}B`
        } else if (coinMarketcap > 1000000) {
            createP5.textContent = `¥${coinMarketcap}M`
        } else if(coinMarketcap < 1000) {
            createP5.textContent = `¥${coinMarketcap}K`
        }

    }
    
    createDiv.appendChild(createP1)
    createDiv.appendChild(createP2)
    createDiv.appendChild(createP3)
    createDiv.appendChild(createP4)
    createDiv.appendChild(createP5)
    appendDiv.appendChild(createDiv)
}

const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'x-cg-demo-api-key': `${api_key}`}
};

async function getCionName(coinName, currency) {

    let api_data;

    setWidth.style.height = "325px"

    if(window.screen.width < 768) {
        setWidth.style.height = "355px"
    }

    if(window.screen.width < 568) {
        setWidth.style.height = "375px"
    }

    if(coinName.length <= 8) {
        api_data = `symbols=${coinName}`
    } else {
        api_data = `ids=${coinName}`
    }

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&${api_data}`, options)
    .then((response) => {
        if(!response) {
            showError.textContent = `Api limit is full try again later!`
        }
        return response.json()
    })
    .then((data) => {
        Object.entries(data).forEach(([code, name]) => {
            if(coinName.length <= 3) {
                create(name.market_cap_rank, name.image, name.id ,name.current_price, name.price_change_percentage_24h, name.market_cap, currency)
            } else {
                create(name.market_cap_rank, name.image, name.name ,name.current_price, name.price_change_percentage_24h, name.market_cap, currency)
            }
        });  
    })
    .catch((error) => {
        throw new Error("failed to fetch data", error)
    })
}

async function getCionList(currency) {
    
    setWidth.style.height = "1000px"

    if(window.screen.width < 568) {
        setWidth.style.height = "900px"
    }
    
    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`, options)
    .then((response) => {
        if(!response) {
            showError.textContent = `Api limit is full try again later!`
        }
        return response.json()
    })
    .then((data) => {
        Object.entries(data).forEach(([code, name]) => {
            if(name.market_cap_rank <= 10) {
                create(name.market_cap_rank, name.image, name.name ,name.current_price, name.price_change_percentage_24h, name.market_cap, currency)
            }
        })
    })
    .catch((error) => {
        throw new Error("failed to fetch data", error)
    })

}

function hideShowElement() {
    appendDiv.innerHTML = "";
    appendWhenSreach.innerHTML = `
        <p>#</p>
        <p class="text-design">Coins</p>
        <p class="text-design">Price</p>
        <p class="text-design">24h %</p>
        <p class="market-cap">Market Cap</p>
    `
    appendDiv.appendChild(appendWhenSreach)
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    currencyValue = getCurrencyValue.value
    convertValue = getCoinName.value.trim().toLowerCase();
    
    if (!convertValue || !isNaN(convertValue)) {
        alert("Please enter coin");
        return;
    } else {
        setTimeout(() => {
            hideShowElement()
            getCionName(convertValue, currencyValue);
        }, 500)
    }
});

window.onload = () => {
    getCionList(getCurrencyList)
}

getCurrencyValue.addEventListener("change", () => {

    getCurrencyList = getCurrencyValue.value;
    currencyValue = getCurrencyValue.value

    if(appendDiv.childElementCount <= 2) {
        hideShowElement();
        getCionName(convertValue, currencyValue);
    } else {
        hideShowElement();
        getCionList(getCurrencyList);
    }
});

clear.addEventListener("click", () => {
    setTimeout(() => {
        getCionList(getCurrencyList.value = "usd")
        hideShowElement()
    }, 500)
})

// Additional feature by chatgpt suggestion
getCoinName.addEventListener("input", () => {
    if (getCoinName.value.trim() === "") {
        getCionList(getCurrencyList);
        hideShowElement()
    }
});