const productlist = document.querySelector('#newlist');
function loaddata(doc)
{
  let li = document.createElement('li');
  let id = document.createElement('span');
  let cat = document.createElement('span');
  let det = document.createElement('span');

  li.setAttribute('data-id' , doc.id);
  id.textContent = doc.data().productid;
  cat.textContent = doc.data().productcategory;
  det.textContent = doc.data().productdetails;

  li.appendChild(id);
  li.appendChild(cat);
  li.appendChild(det);

  productlist.appendChild(li);
}


db.collection('products').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
  console.log(doc.data());
  loaddata(doc);
  })
})
