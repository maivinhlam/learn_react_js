//Khởi tạo thư viện icon của riêng bạn
import { library } from '@fortawesome/fontawesome-svg-core'; 

//Import các icon mà bạn muốn sử dụng trong từng gói
import { fas } from '@fortawesome/free-solid-svg-icons';
import {  far } from '@fortawesome/free-regular-svg-icons';

//Add các icon đã được import vào trong thư viện của bạn
library.add( fas, far )
