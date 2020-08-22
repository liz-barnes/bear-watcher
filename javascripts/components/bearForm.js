import { buildBearCards } from './../components/river.js';

let bears = [];

const buildBearForm = () => {
    $('#containerBearForm').html(`
        <form>
            <div class="text-center">
                <div class="form-inline pb-4 ml-4">
                    <label for="bearImage" class="pr-2"><b>Image URL:</b> </label>
                    <input type="url" class="form-control w-75" id="inputBearImage" placeholder="Enter Image URL">
                </div>
                <div class="form-inline pb-4 ml-4">
                    <label for="bearImage" class="pr-2"><b>Bear Name:</b> </label>
                    <input type="text" class="form-control w-75" id="inputBearName" placeholder="Example: Yogi">
                </div>
                <button type="button" class="btn btn-primary" id="btnTrackBear">Track my bear!</button>
            </div>
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