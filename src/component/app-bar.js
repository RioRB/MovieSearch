class AppBar extends HTMLElement {
    connectedCallback() {
      this.render();
    }
  
    render() {
      $(this).html(`
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">MovieSearch</span>
          </div>
        </nav>
      `);
    }
  }
  
  customElements.define('app-bar', AppBar);
  