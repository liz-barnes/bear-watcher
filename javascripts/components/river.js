const buildBearCards = (array) => {
    $("#containerBearCards").html('');
    array.forEach((bear) => {
        $('#containerBearCards').append(`
            <div class="card" style="width: 18rem;">
                <img class="card-img-top" src="${bear.bearImage}">
                <div class="card-body">
                    <h3 class="card-text">${bear.bearName}</h3>
                </div>
            </div>
        `);
    });
};

  export { buildBearCards };
