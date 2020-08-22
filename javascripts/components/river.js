const buildBearCards = (array) => {
    $("#containerBearCards").html(`
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="${array.bearImage}" alt="Card image cap">
            <div class="card-body">
                <h3 class="card-text">${array.bearName}</h3>
            </div>
        </div>
        `);
    };

  export { buildBearCards }
