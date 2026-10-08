/* ISO229 Assessment 4 - JavaScript interactions
   Student-developed functionality for realistic customer needs. */

document.addEventListener('DOMContentLoaded', () => {
    // Feature 1: product/category search and filter.
    const searchInput = document.querySelector('#product-search');
    const filterSelect = document.querySelector('#category-filter');
    const productCards = [...document.querySelectorAll('[data-product-card]')];
    const resultCount = document.querySelector('#result-count');
    const clearFilters = document.querySelector('#clear-filters');

    function filterProducts() {
        if (!searchInput || !filterSelect || !resultCount) return;

        const searchTerm = searchInput.value.trim().toLowerCase();
        const selectedCategory = filterSelect.value;
        let visible = 0;

        productCards.forEach(card => {
            const text = card.textContent.toLowerCase();
            const category = card.dataset.category || '';
            const matchesText = !searchTerm || text.includes(searchTerm);
            const matchesCategory = !selectedCategory || category === selectedCategory;
            const show = matchesText && matchesCategory;

            card.hidden = !show;
            if (show) visible += 1;
        });

        resultCount.textContent = `${visible} product categories shown`;
    }

    searchInput?.addEventListener('input', filterProducts);
    filterSelect?.addEventListener('change', filterProducts);
    clearFilters?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        if (filterSelect) filterSelect.value = '';
        filterProducts();
        searchInput?.focus();
    });

    filterProducts();

    // Feature 2: accessible FAQ accordion.
    document.querySelectorAll('[data-faq-button]').forEach(button => {
        button.addEventListener('click', () => {
            const panelId = button.getAttribute('aria-controls');
            const panel = document.getElementById(panelId);
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!expanded));
            if (panel) panel.hidden = expanded;
        });
    });

    // Feature 3: client-side form validation and enquiry feedback.
    const form = document.querySelector('#enquiry-form');
    const formMessage = document.querySelector('#form-message');

    form?.addEventListener('submit', event => {
        event.preventDefault();
        if (!formMessage) return;

        if (!form.checkValidity()) {
            formMessage.textContent = 'Please correct the highlighted fields before sending your enquiry.';
            formMessage.className = 'form-message error';
            form.reportValidity();
            return;
        }

        const name = document.querySelector('#full-name')?.value.trim() || 'Customer';
        const category = document.querySelector('#category')?.value || 'your selected category';
        formMessage.textContent = `Thank you, ${name}. Your ${category.replace('-', ' ')} enquiry has passed the form checks. This academic website does not send data to a real business system.`;
        formMessage.className = 'form-message success';
        form.reset();
    });

    // Helpful interaction: save the visitor's preferred category locally.
    const categoryField = document.querySelector('#category');
    const savedCategory = localStorage.getItem('bbhc-preferred-category');
    if (categoryField && savedCategory) categoryField.value = savedCategory;
    categoryField?.addEventListener('change', () => {
        if (categoryField.value) localStorage.setItem('bbhc-preferred-category', categoryField.value);
    });
});
