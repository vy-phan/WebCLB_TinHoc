


class main {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}


var maplv=0;
 lvmap(maplv);


    function lvmap(m) {
        switch(m){
            case 0:
                console.log('Level 0');
                var tdcx = 0;
                var tdcy = 5;
                var x = 12;
                var y = 0;
                const ch = document.getElementById('chest');
                ch.style.paddingLeft = x+tdcx*50 + 'px'; // Thay đổi giá trị của padding-top
                ch.style.paddingTop = y+tdcy*50 + 'px'; // Thay đổi giá trị của padding-top

                break;
        }
    }


const vt = new main(15, 2);

const td = document.getElementById('art');
var tdx = 1;
var tdy = 1;

td.style.paddingLeft = vt.x + 'px'; // Thay đổi giá trị của padding-top
td.style.paddingTop = vt.y + 'px'; // Thay đổi giá trị của padding-top

var hh = 2; //huong
var vl = 0; //lap
var di = 0;
var intervalId; // Lưu trữ ID của setInterval 




function reset_run(k) {
    reset();
    runmain(k);
    console.log('reset_run ' + hh);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



async function runmain(bid) {
    let stack = [];
    let i = bid;

    while (i < boxes.length) {
        await delay(500); // Delay giữa các hộp

        switch (boxes[i].codeid) {
            //đi thẳng
            case 1:
                const vat = 50;
                switch (hh) {
                    case 1:
                        if (tdx > 1) {
                            vt.x -= vat;
                            td.style.paddingLeft = vt.x + 'px';
                            tdx--;
                        }
                        break;
                    case 2:
                        if (tdy < 10) {
                            vt.y += vat;
                            td.style.paddingTop = vt.y + 'px';
                            tdy++;
                        }
                        break;
                    case 3:
                        if (tdx < 10) {
                            vt.x += vat;
                            td.style.paddingLeft = vt.x + 'px';
                            tdx++;
                        }
                        break;
                    case 4:
                        if (tdy > 1) {
                            vt.y -= vat;
                            td.style.paddingTop = vt.y + 'px';
                            tdy--;
                        }
                        break;
                }
                break;
            case 2:
                hh--;
                if (hh == 0) {
                    hh = 4;
                }
                art.src = '../IMG/main' + hh + '.png'; // Thay đổi đường dẫn của ảnh
                break;
            case 3:
                hh++;
                if (hh == 5) {
                    hh = 1;
                }
                art.src = '../IMG/main' + hh + '.png'; // Thay đổi đường dẫn của ảnh
                break;
            case 4:
                //vòng lặp
                let loopCount = document.getElementById('box' + boxes[i].boxid).querySelector("input").value;
                stack.push({ index: i, count: loopCount });
                break;
            case 5:
                if (stack.length > 0) {
                    let loop = stack[stack.length - 1];
                    loop.count--;
                    if (loop.count > 0) {
                        i = loop.index; // Quay lại đầu vòng lặp
                    } else {
                        stack.pop(); // Kết thúc vòng lặp
                    }
                }
                break;
        }
        i++;
    }
}

function reset() {
    console.log("Tác vụ đã bị hủy bỏ");

    hh = 2; //huong
    vl = 0; //lap
    di = 0;
    vt.x = 15;
    vt.y = 2;
    tdx = 1;
    tdy = 1;
    td.style.paddingLeft = vt.x + 'px';
    td.style.paddingTop = vt.y + 'px';
    art.src = '../IMG/main' + 2 + '.png'; // Thay đổi đường dẫn của ảnh
}


class Box {
    constructor(x, y, width, height, text, color, boxid, codeid) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.text = text;
        this.color = color;
        this.boxid = boxid;
        this.codeid = codeid;
    }


}






// Tạo và gắn id CSS cho các phần tử HTML
const boxid = [];
const boxes = [];
const hb = 30;
let dem = 1;
// Thêm đối tượng Box mới vào danh sách
const widthmh = window.innerWidth;
const heightmh = window.innerHeight;

if (widthmh > 770) {
    boxes.push(new Box(550, 150, 300, 50, "Program start", "#FFD700", 0));
    addidbox(0);
} else {
    boxes.push(new Box(10, 700, 300, 50, "Program start", "#FFD700", 0));
    addidbox(0);
}

//test
// codeadd(4);
// codeadd(3);
// codeadd(1);


function codeadd(num) {
    switch (num) {
        case 1:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 160, hb, "Đi thẳng", "#DC143C", dem, num));
            break;
        case 2:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 160, hb, "Quay trái", "#1E90FF", dem, num));
            break;
        case 3:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 160, hb, "Quay phải", "#1E90FF", dem, num));
            break;
        case 4:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 200, hb, "Vòng lặp", "#8B008B", dem, num));
            break;
        case 5:
            boxes.push(new Box(boxes[0].x, boxes[dem - 1].y + boxes[dem - 1].height, 80, hb, "end.", "#FF8C00", dem, num));
            break;
    }

    addidbox(dem++);
    if (num == 4) {
        codeadd(5);
    }
}


function removeBox() {

    if (boxes.length - 1 !== 0) {

        // Lấy id của hộp cần xóa
        const boxIdToRemove = 'box' + (boxes.length - 1);
        // const boxIdToRemove = 'box' + (boxes[dem - 1].boxid);
        const elementToRemove = document.getElementById(boxIdToRemove);

        // console.log('length ' + boxes.length);
        elementToRemove.parentNode.removeChild(elementToRemove);



        // Tìm và xóa phần tử HTML của hộp cần xóa
        // for (var i = 1; i < boxes.length; i++) {
        //     boxIdToRemove = 'box' + i;

        // }
        // xep lai cac hop
        // for (var i = 1; i < dem; i++) {
        //     document.getElementById('box' + boxes[i].boxid).id = 'box' + i;
        // }



        // Xóa hộp cần xóa khỏi danh sách
        // boxes.splice(boxes.length-1, 1);
        boxes.splice(boxes[boxes.length - 1].boxid, 1);
        // boxes.splice(1, dem - 1);



        // xep lai cac hop
        // for (var i = 1; i < dem; i++) {
        //     boxes[i].boxid = i;
        // }



        dem--;

        infor();



    }



    reset();
    // formatbox();

}

function infor() {
    for (let i = 0; i < boxes.length; i++) {
        console.log(boxes[i].boxid);
    }
    console.log(' ');
}







function addidbox(i) {
    const box = boxes[i];
    const boxElement = document.createElement('div');
    boxElement.className = 'boxcss'; // Gán class CSS
    boxElement.id = 'box' + i;
    boxElement.style.width = box.width + 'px';
    boxElement.style.height = box.height + 'px';
    boxElement.style.backgroundColor = box.color;
    boxElement.style.left = box.x + 'px'; // Định vị theo trục x
    boxElement.style.top = box.y + 'px'; // Định vị theo trục y
    boxElement.style.color = box.color; // Đổi màu nền
    boxElement.style.color = 'white'; // Đổi màu text
    // Hiển thị text
    boxElement.textContent = box.text;
    document.body.appendChild(boxElement);

    if (box.codeid == 4) {
        // Thêm input number
        const inputElement = document.createElement('input');
        inputElement.type = 'number';
        inputElement.min = 1; // Giá trị tối thiểu
        inputElement.max = 10; // Giá trị tối đa
        inputElement.inputMode = "numeric";
        inputElement.style.marginLeft = '10px';
        inputElement.setAttribute('inputmode', 'numeric'); // Thêm thuộc tính inputmode để hỗ trợ nhập số trên điện thoại
        boxElement.appendChild(inputElement);
    }

    // Thêm sự kiện cho các Box (hoạt động bình thường)
    let isDragging = false;
    let initialX;
    let initialY;


    boxElement.addEventListener('mousedown', (event) => {
        isDragging = true;
        initialX = event.clientX - box.x;
        initialY = event.clientY - box.y;
        boxElement.style.opacity = 0.7;
        boxElement.style.zIndex = boxes.length; // Tăng zIndex để ưu tiên hiển thị
        boxElement.style.backgroundColor = "green";

    });

    boxElement.addEventListener('touchstart', (event) => {
        event.preventDefault(); // Ngăn chặn sự kiện mặc định của touchstart
        isDragging = true;
        initialX = event.touches[0].clientX - box.x;
        initialY = event.touches[0].clientY - box.y;
        boxElement.style.opacity = 0.7;
        boxElement.style.zIndex = boxes.length; // Tăng zIndex để ưu tiên hiển thị
        boxElement.style.backgroundColor = "green";
    });


    document.addEventListener('mousemove', (event) => {
        if (isDragging) {

            boxElement.style.left = event.clientX - initialX + 'px';
            boxElement.style.top = event.clientY - initialY + 'px';
            //gioi han
            if (boxElement.offsetLeft < 0) {
                boxElement.style.left = 0 + 'px';
            }
            if (boxElement.offsetLeft > window.innerWidth - boxElement.offsetWidth) {
                boxElement.style.left = (window.innerWidth - boxElement.offsetWidth) + 'px';
            }

            if (boxElement.offsetTop < 0) {
                boxElement.style.top = 0 + 'px';
            }


        }




    });

    document.addEventListener('touchmove', (event) => {
        if (isDragging) {
            boxElement.style.left = event.touches[0].clientX - initialX + 'px';
            boxElement.style.top = event.touches[0].clientY - initialY + 'px';
            //gioi han
            if (boxElement.offsetLeft < 0) {
                boxElement.style.left = 0 + 'px';
            }
            if (boxElement.offsetLeft > window.innerWidth - boxElement.offsetWidth) {
                boxElement.style.left = (window.innerWidth - boxElement.offsetWidth) + 'px';
            }

            if (boxElement.offsetTop < 0) {
                boxElement.style.top = 0 + 'px';
            }
        }
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            boxElement.style.opacity = 1;
            checksx = false;
            pgst = false;


            boxElement.style.zIndex = 0; // Xóa zIndex để trả lại giá trị mặc định
            boxElement.style.backgroundColor = box.color;



            // Lưu lại vị trí mới
            box.x = boxElement.offsetLeft;
            box.y = boxElement.offsetTop;



            // Sắp xếp lại danh sách các hộp theo vị trí y tăng dần
            for (let i = 1; i < boxes.length; i++) {
                for (let j = 1; j < boxes.length - 1; j++) {
                    if (boxes[j].y > boxes[j + 1].y) {
                        // Hoán đổi vị trí của hai hộp
                        const temp = boxes[j];
                        boxes[j] = boxes[j + 1];
                        boxes[j + 1] = temp;
                        checksx = true;


                    }


                }




            }

            infor();


            if (checksx) {
                for (let i = 1; i < boxes.length; i++) {
                    // xet vi tri
                    boxes[i].y = boxes[i - 1].y + boxes[i - 1].height;
                    document.getElementById('box' + boxes[i].boxid).style.top = boxes[i - 1].y + boxes[i - 1].height + 'px';

                }
            }







            // for (let i = 0; i < boxes.length; i++) {
            //     console.log(boxes[i].boxid);
            //     console.log(boxes[i].y);
            // }
            // console.log(' ');

        }

    });

    document.addEventListener('touchend', () => {
        if (isDragging) {
            isDragging = false;
            boxElement.style.opacity = 1;
            checksx = false;
            pgst = false;


            boxElement.style.zIndex = 0; // Xóa zIndex để trả lại giá trị mặc định
            boxElement.style.backgroundColor = box.color;



            // Lưu lại vị trí mới
            box.x = boxElement.offsetLeft;
            box.y = boxElement.offsetTop;



            // Sắp xếp lại danh sách các hộp theo vị trí y tăng dần
            for (let i = 1; i < boxes.length; i++) {
                for (let j = 1; j < boxes.length - 1; j++) {
                    if (boxes[j].y > boxes[j + 1].y) {
                        // Hoán đổi vị trí của hai hộp
                        const temp = boxes[j];
                        boxes[j] = boxes[j + 1];
                        boxes[j + 1] = temp;
                        checksx = true;


                    }


                }




            }


            if (checksx) {
                for (let i = 1; i < boxes.length; i++) {
                    // xet vi tri
                    boxes[i].y = boxes[i - 1].y + boxes[i - 1].height;
                    document.getElementById('box' + boxes[i].boxid).style.top = boxes[i - 1].y + boxes[i - 1].height + 'px';

                }
            }







            // for (let i = 0; i < boxes.length; i++) {
            //     console.log(boxes[i].boxid);
            //     console.log(boxes[i].y);
            // }
            // console.log(' ');

        }
    });

}






function formatbox() {
    for (let i = 1; i < boxes.length; i++) {
        // xet vi tri
        boxes[i].y = boxes[i - 1].y + boxes[i - 1].height;
        document.getElementById('box' + boxes[i].boxid).style.top = boxes[i - 1].y + boxes[i - 1].height + 'px';
        boxes[i].x = boxes[0].x;
        document.getElementById('box' + boxes[i].boxid).style.left = boxes[0].x + 'px';

    }
    reset();
}






