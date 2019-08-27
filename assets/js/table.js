const allTables = document.querySelectorAll('table');

for (let table of allTables) {
    table.classList.add('pure-table', 'pure-table-bordered');

    const rows = table.querySelectorAll('tr');

    for (let index = 0; index < rows.length; index++) {
        if (index % 2 === 0) {
            rows[index].classList.add('pure-table-odd');
        }
    }
}