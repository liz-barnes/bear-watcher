const buildBearCards = (array) => {
    $("#containerBearCards").html('');
    array.forEach((bear) => {
        $('#containerBearCards').append(`
            <div class="card text-center m-5" style="width: 18rem;">
                <div class="" id="containerImage">    
                    <img class="card-img-top" src="${bear.bearImage}">
                </div>    
                <div class="card-body">
                    <h3 class="card-text">${bear.bearName}</h3>
                </div>
            </div>
        `);
    });
};

  export { buildBearCards };
