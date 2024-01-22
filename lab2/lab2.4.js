//IIFE : là hàm được định nghĩa ngay lập tức
(function () {
    const header = document.querySelector('h1'); // biến header được tạo đại diện cho cho thẻ h1
    header.style.color = 'red'; // gán màu đỏ cho header 
    
    //Callback function là hàm được thực thi khi sự kiện click sảy ra ,
    //  trong trường hợp này khi click vào thẻ h1 thì sẽ chuyển từ đỏ thành xanh dương
    document.querySelector('body').addEventListener('click', function () {
        header.style.color = 'blue';
    });
})();
