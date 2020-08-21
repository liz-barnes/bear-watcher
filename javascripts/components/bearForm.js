const buildBearForm = () => {
    // $('#bearForm').html("");
    // $('#bearForm').addClass('containerBearForm')
    $('#bearForm').html(`
        <form>
            <div class="form-group">
                <label for="bearImage">Image URL</label>
                <input type="url" class="form-control" id="imageBear" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="bearImage">Image URL</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="form-group form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        `);
}

export { buildBearForm }