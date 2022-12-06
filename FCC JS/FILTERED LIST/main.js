// Get input element

let filterInput = document.getElementById('filterInput');

// Add event Listener
filterInput.addEventListener('keyup', filterNames);

function filterNames() {
    // get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();

    // Get names uL
    let ul = document.getElementById('names');
    
    // get li's from ul
    let li = ul.querySelectorAll('li.collection-item');

    // Loop through collection-item li's
    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        // If matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
            li[i].style.display = '';
        }
        else {
            li[i].style.display = 'none';
        }
    }
    
}

