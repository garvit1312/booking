// public/js/main.js

const placeholder = document.querySelector('#placeholder');
const userName = document.querySelector('#userName');
const userEmail = document.querySelector('#userEmail');
const userPhone = document.querySelector('#userPhone');
const userDate = document.querySelector('#userDate');
const userTime = document.querySelector('#userTime');
const noOfapp = document.querySelector('#noOfapp');

placeholder.addEventListener('click', onclick);

function showOutput(response) {
    placeholder.innerHTML = "";
    let totappointment = 0;
    response.data.forEach((ele, index) => {
        totappointment++;
        const htmlText = `
            <tr>
                <td>${index + 1}</td>
                <td>${ele.uName}</td>
                <td>${ele.emailId}</td>
                <td>${ele.phoneNo}</td>
                <td>${ele.date}</td>
                <td>${ele.time}</td>
                <td>
                    <button class="btn btn-outline-success edit-btn" id=${ele.id}>Edit</button>
                </td>
                <td>
                    <button class="btn btn-outline-danger del-btn" id=${ele.id}>Delete</button>
                </td>
            </tr>`;
        placeholder.innerHTML += htmlText;
    });
    noOfapp.innerHTML = totappointment;
}

async function onclick(e) {
    e.preventDefault();
    if (e.target && e.target.classList.contains("del-btn")) {
        const dID = e.target.id;
        try {
            await axios.get(`http://localhost:3000/user/appointments/delete/${dID}`);
            refresh();
        } catch (err) {
            console.log(err);
        }
    } else if (e.target && e.target.classList.contains('edit-btn')) {
        e.preventDefault();
        const eID = e.target.id;
        try {
            const response = await axios.get(`http://localhost:3000/user/appointments/edit/${eID}`);
            const { uName, emailId, phoneNo, date, time } = response.data;
            userName.value = uName;
            userEmail.value = emailId;
            userPhone.value = phoneNo;
            userDate.value = date;
            userTime.value = time;
            await axios.get(`http://localhost:3000/user/appointments/delete/${eID}`);
            refresh();
        } catch (err) {
            console.log(err);
        }
    }
}

async function refresh() {
    try {
        const response = await axios.get('http://localhost:3000/user/appointments/data');
        showOutput(response);

    } catch (error) {
        console.log(error);
    }
}

const form = document.querySelector('form');

form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    try {
        const response = await axios.post('http://localhost:3000/user/appointments', userData);
        console.log(response.data);
        refresh();
    } catch (error) {
        console.error(error);
    }
});

refresh();
