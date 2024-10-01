/*
const output = document.getElementById("Info");

function getData() {

    let result = "";

    fetch("http://localhost:4001/details")
        .then(res => res.json())
        .then(dataa => {

            dataa.map((user) => {
                const {
                    name,
                    email,
                    password,
                    Cfpassword,
                    _id
                } = user;
                result += `
     <tr>
     <tr data-id="${_id}" class="edit-design">
    <td id="user_name">${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${Cfpassword}</td>
    <td>  <button class="edit-btn" onclick="Edit('${_id}')" > Edit <button>
          <button class="delete-btn" onclick="Delete('${_id}')">Delete <button>
    </td>
      </tr>
       `
            })
            output.innerHTML = result;
        })
}


window.onload = function() {

    const btn = document.querySelector("#submit");

    btn.addEventListener("click", () => {

        const names = document.getElementById("nameValue").value;
        const emails = document.getElementById("emailValue").value;
        const passwords = document.getElementById("passValue").value;
        const cfpasswords = document.getElementById("cfpassValue").value;

        if (names === "" || emails === "" || passwords === "" || cfpasswords === " " || passwords != cfpasswords) {
            alert("Please Fill all Details")
        } else {
            let obj = {
                name: names,
                email: emails,
                password: passwords,
                Cfpassword: cfpasswords
            }

            fetch("http://localhost:4001/register", {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                        "content-type": "application/json ",
                    }
                })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    getData();
                    resetData();
                })
        }

    })

    getData();

    function resetData() {
        document.getElementById("nameValue").value = "";
        document.getElementById("emailValue").value = "";
        document.getElementById("passValue").value = "";
        document.getElementById("cfpassValue").value = "";
    }
}


function Edit(id) {
    console.log(`Editing user with ID : ${id}`);

    let row = document.querySelector(`#Info tr[data-id="${id}"]`)
    if (!row) {
        console.log(`Row with ID ${id} not found`);
        return;
    }

    let name = row.querySelector(`td#user_name`).textContent.trim();
    let email = row.cells[1].textContent.trim();
    let password = row.cells[2].textContent.trim();
    let cfpassword = row.cells[3].textContent.trim();


    row.innerHTML = `
            <td><input type="text" id="edit_name" value="${name}"></td>
            <td><input type="email" id="edit_email" value="${email}"></td>
            <td><input type="password" id="edit_password" value="${password}"></td>
            <td><input type="password" id="edit_cfpassword" value="${cfpassword}"></td>
            <td>
                <button class="save-btn" onclick="Save('${id}')">Save</button>
            </td>
    `;
}

function Save(id) {

    const newName = document.getElementById("edit_name").value;
    const newEmail = document.getElementById("edit_email").value;
    const newPassword = document.getElementById("edit_password").value;
    const newCfpassword = document.getElementById("edit_cfpassword").value;

    let updateData = {
        name: newName,
        email: newEmail,
        password: newPassword,
        Cfpassword: newCfpassword,
    };

    fetch(`http://localhost:4001/details/${id}`, {
            method: 'PUT',
            body: JSON.stringify(updateData),
            headers: {
                "content-type": "application/json",
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(`User ${id} updated Successfully`);
            getData();
        })

}

function Delete(id1) {
    console.log(id1);

    fetch(`http://localhost:4001/details/${id1}`, {
            method: 'DELETE',
        })
        .then(response => {

            if (response.ok) {
                getData()
            } else {
                console.error("Failed to delete item:", id1)
            }

        })
        .catch(error => {
            console.error('Error deleting item:', error);
        });


};

*/

function tooglePopup() {
    document.getElementById('popup').classList.toggle("active");
}

const output = document.getElementById("Info");

function getData() {

    let result = "";

    fetch("http://localhost:4001/details")
        .then(res => res.json())
        .then(dataa => {

            dataa.map((user) => {
                const {
                    name,
                    email,
                    password,
                    Cfpassword,
                    _id
                } = user;
                result += `
     <tr>
     <tr data-id="${_id}" class="edit-design">
    <td id="user_name">${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${Cfpassword}</td>
    <td>  <button class="edit-btn" onclick="Edit('${_id}')" > Edit <button>
          <button class="delete-btn" onclick="Delete('${_id}')">Delete <button>
    </td>
      </tr>
       `
            })
            output.innerHTML = result;
        })
}


window.onload = function() {

    const btn = document.querySelector("#submit");

    btn.addEventListener("click", () => {

        const names = document.getElementById("nameValue").value;
        const emails = document.getElementById("emailValue").value;
        const passwords = document.getElementById("passValue").value;
        const cfpasswords = document.getElementById("cfpassValue").value;

        if (names === "" || emails === "" || passwords === "" || cfpasswords === " " || passwords != cfpasswords) {
            alert("Please Fill all Details")
        } else {
            let obj = {
                name: names,
                email: emails,
                password: passwords,
                Cfpassword: cfpasswords
            }

            fetch("http://localhost:4001/register", {
                    method: "POST",
                    body: JSON.stringify(obj),
                    headers: {
                        "content-type": "application/json ",
                    }
                })
                .then((res) => {
                    return res.json()
                })
                .then((data) => {
                    getData();
                    resetData();
                })
        }

    })

    getData();

    function resetData() {
        document.getElementById("nameValue").value = "";
        document.getElementById("emailValue").value = "";
        document.getElementById("passValue").value = "";
        document.getElementById("cfpassValue").value = "";
    }
}

// Edit Function 

function Edit(id) {
    console.log(`Editing user with ID : ${id}`);

    let row = document.querySelector(`#Info tr[data-id="${id}"]`)
    if (!row) {
        console.log(`Row with ID ${id} not found`);
        return;
    }

    let name = row.querySelector(`td#user_name`).textContent.trim();
    let email = row.cells[1].textContent.trim();
    let password = row.cells[2].textContent.trim();
    let cfpassword = row.cells[3].textContent.trim();


    row.innerHTML = `
            <td><input type="text" id="edit_name" value="${name}"></td>
            <td><input type="email" id="edit_email" value="${email}"></td>
            <td><input type="password" id="edit_password" value="${password}"></td>
            <td><input type="password" id="edit_cfpassword" value="${cfpassword}"></td>
            <td>
                <button class="save-btn" onclick="Save('${id}')">Save</button>
            </td>
    `;
}


function Save(id) {
    console.log(id);

    const updateData = {
        name: document.getElementById('edit_name').value,
        email: document.getElementById('edit_email').value,
        password: document.getElementById('edit_password').value,
        Cfpassword: document.getElementById('edit_cfpassword').value
    };


    fetch(`http://localhost:4001/details/${id}`, {
            method: "PUT",
            body: JSON.stringify(updateData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            response.json()
        })
        .then((res) => {
            console.log("Data Update Successfully");

            const row = document.querySelector(`tr[data-id="${id}"]`);
            row.innerHTML = `
           <td>${updateData.name}</td>
           <td>${updateData.email}</td>
           <td>${updateData.password}</td>
           <td>${updateData.Cfpassword}</td>
           <td>  
           <button class="edit-btn" onclick="Edit('${id}')" > Edit <button>
           <button class="delete-btn" onclick="Delete('${id}')">Delete <button>
           </td>
        `
        })
        .catch((error) => {
            console.log(error);
        })

}


// Delete Function
function Delete(id1) {
    console.log(id1);

    fetch(`http://localhost:4001/details/${id1}`, {
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((res) => {
            console.log("Data Delete Succesfully");

            document.querySelector(`tr[data-id="${id1}"]`).remove();
        })
        .catch((error) => {
            console.log(error);
        })

};