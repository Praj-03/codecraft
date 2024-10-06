const form = document.querySelector('form');
const submitButton = document.querySelector('button[type="submit"]');


submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  const firstName = document.getElementById('exampleInputEmail1').value;
  const lastName = document.getElementById('exampleInputPassword1').value;
  const email = document.getElementById('exampleInputEmail1').value;
  const mobileNumber = document.getElementById('inputPassword5').value;
  const address = document.getElementById('exampleInputEmail1').value;
  const graduation = document.getElementById('exampleInputEmail1').value;
  const passingYear = document.querySelector('select').value;
  const selectedCourse = document.getElementById('courseselect').value;
  const coursePrice = document.getElementById('inputprice').value;

  const receiptTemplate = `
    <h2>Receipt</h2>
    <p>Name: ${firstName} ${lastName}</p>
    <p>Email: ${email}</p>
    <p>Mobile Number: ${mobileNumber}</p>
    <p>Address: ${address}</p>
    <p>Graduation: ${graduation}</p>
    <p>Passing Year: ${passingYear}</p>
    <p>Selected Course: ${selectedCourse}</p>
    <p>Course Price: ${coursePrice}</p>
    <p>Date: ${new Date().toLocaleDateString()}</p>
    <p>Receipt No: ${Math.floor(Math.random() * 100000)}</p>
  `;

  const receiptContainer = document.createElement('div');
  receiptContainer.innerHTML = receiptTemplate;
  document.body.appendChild(receiptContainer);

  // Print receipt
  window.print();
  window.location.href="home.html";
});

