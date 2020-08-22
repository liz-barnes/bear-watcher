import { buildBearCards } from './../components/river.js';

let bears = [];

const buildBearForm = () => {
    $('#containerBearForm').html(`
        <form>
            <div class="form-group">
                <label for="bearImage">Image URL: </label>
                <input type="url" class="form-control" id="inputBearImage">
            </div>
            <div class="form-group">
                <label for="bearImage">Bear Name: </label>
                <input type="text" class="form-control" id="inputBearName">
            </div>
            <button type="button" class="btn btn-primary" id="btnTrackBear">Track my bear!</button>
        </form>
        `);
}

const resetForm = () => {
    $('#inputBearImage').val("");
    $('#inputBearName').val("");
}

const getBearInfo = () => {
    $('#btnTrackBear').on('click',() => {
        const inputImage = $('#inputBearImage').val();
        const inputName = $('#inputBearName').val();
        bears.push({
            bearImage: inputImage,
            bearName: inputName
        })

        console.log(bears);
        resetForm();
        buildBearCards(bears);
})
}

export { buildBearForm, getBearInfo }