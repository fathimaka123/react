import { useState } from "react";

const Student = () => {
    const [mark,setmark] =useState(85);
    return(
    <div>
       <h3>name:fathima</h3>
        <h3>age:25</h3>
        <h3>email:fathima@gmail.com</h3>
        <h3>mark:{mark}</h3>

    </div>)
}
export default Student