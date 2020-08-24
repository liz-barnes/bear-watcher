
const buildBearCards = (array) => {
    $("#containerBearCards").html('');
    array.forEach((bear) => {
        $('#containerBearCards').append(`
            <div id="containerBearCard" class="card text-center m-5" style="width: 20rem;">
                <div id="containerBearInfo">
                    <div id="bearImage">
                        <img class="card-img-top" src="${bear.bearImage}">
                    </div>
                    <div id="bearName">
                        <h3 class="card-text">${bear.bearName}</h3>
                    </div>
                </div>
                <div id="containerButtons" class="mt-5">
                    <button type="button" class="btn btn-primary mr-2" id="btnCaught">Caught Fish!</button>
                    <button type="button" class="btn btn-primary ml-2" id="btnAttempt">Attempt Fish!</button>
                </div>
                <div id="containerJournalLog">
                    <div id="activity"></div>
                    <div id="timestamp"></div>
                </div>
            </div>
        `);
    });
};

const caughtFish = () => {
    $('#btnCaught').on('click', () => {
        let caught = [];
        const timestamp = new Date();
        $('#activity').html(`
            Caught a fish! [Total: 1]
        `)
        $('#timestamp').html(`
        ${timestamp}
        `)
    });
    // const attemptButtonClick = (arr) => {
    //     arr.forEach((bear, index) => {
    //         $(`#attempt-${index}`).click(() => {
    //             let attempts = {};
    //             attempts.time = new Date();
    //             attempts.type = 'Attempt';
    //             $(`#attemptsAndCatches-${index}`).append(
    //                 `<div class="${attempts.type} m-2">
    //                     <div>${attempts.type}: ${attempts.time}</div>
    //                 </div>`
    //             )
    //         })
    //     })
    };

  export { buildBearCards };

//   <div class="card text-center m-5" style="width: 18rem;">
//                 <div class="" id="containerImage">    
//                     <img class="card-img-top" src="${bear.bearImage}">
//                 </div>    
//                 <div class="card-body">
//                     <h3 class="card-text">${bear.bearName}</h3>
//                 </div>
//             </div>
