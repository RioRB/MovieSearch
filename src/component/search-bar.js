class SearchBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    set submitEvent(event) {
      this._submitEvent = event;
      this.render();
    }
  
    get value() {
      return $(this).find('#search-element')[0].value;
    }
  
    render() {
      $(this).html(`
          <form id="searchForm" class="d-flex mt-5">
            <input class="form-control rounded" type="search" id="search-element" placeholder="Search Here.." aria-label="Search" aria-describedby="search-addon">
            <button class="btn btn-primary" type="submit">Search</button>
          </form>
      `);
  
      $('#searchForm').on('submit', this._submitEvent);
    }
  }
  
  customElements.define('search-bar', SearchBar);
  