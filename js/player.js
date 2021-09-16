

// // 1. give id and change color

// const colar = document.getElementById('style-top').style.color = 'red';

// const blog = document.getElementById('blog-style').style.color = 'red';

// // 2. 

// const back = document.getElementsByClassName('player');
// for (var i = 0; i <= back.length; i++) {

//             back[i].style.backgroundColor = "rgba(117, 190, 218, 0.5)";
// }




// 3. add li by click in ul

document.getElementById('click-me').addEventListener('click', function () {
            // const liList = document.getElementsByClassName('room');
            const liList = document.createElement('li');
            liList.innerText = 'room no $'


            const parant = document.getElementById('unorder-list');
            parant.appendChild(liList);



})


// 4. input field with increament value up to 5 

document.getElementById('clik').addEventListener('click', function () {
            const fieldValue = document.getElementById('increament');
            const value = parseInt(fieldValue.value);

            if (value < 10) {

                        fieldValue.value = value + 1;
            }
            if (value > 3) {
                        document.getElementById('clik').disabled = true;
            }

})





