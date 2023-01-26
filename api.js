console.log("JS07 Fetch API");

const getUsers = (page = 1) => {
    const url = `https://reqres.in/api/users?delay=3` ;

    fetch(url)
        .then( response=> {
            console.log("Status: " + response.status);
            return response.json();
        })
        .then( users => {
            console.log("Total de elementos: " +  users.total  );
            localStorage.setItem("users", JSON.stringify(users)  );

            let i = 1;
            let j = 7;
            let k = 13;
            let l = 19;
            let m= 25;
            for ( let user of users.data){
                             console.log(`${user.id} - ${user.first_name} ${user.last_name} ${user.email} ${user.avatar}`);
              document.getElementById(i).innerHTML = ` ${user.id}`;
              document.getElementById(j).innerHTML = ` ${user.first_name}`;
              document.getElementById(k).innerHTML = ` ${user.last_name}`;
              document.getElementById(l).innerHTML = ` ${user.email}`;
              document.getElementById(m).innerHTML = `<img src= "${user.avatar}" width="50" height="50"></img>`;
              i++, j++, k++, l++, m++;
            }           

        })
        .catch( error => console.log(error));
}
