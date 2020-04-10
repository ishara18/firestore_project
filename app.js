const form = document.querySelector('#add_details');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('maincollection').add({
        name : form.name.value,
        email : form.email.value,
        subject : form.subject.value,
        description : form.description.value      
    });
    form.name.value = '';
    form.email.value = '';
    form.subject.value = '';
    form.description.value = '';
    thank();
})

function thank()
{
    alert("Thank You");
}
