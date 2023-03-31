import {adder} from './Cart.jsx';

function Section1() {
    return(
        <div className="secdisplay">
            <ul>
                <h4>Coffee</h4>
                <li>
                    Hot Coffee 
                    <button id="addb1" value={50} onClick={adder("addb1","Hot Coffee")}>Add</button>
                </li>
                <li>
                    Cold Coffee 
                    <button id="addb2" value={40} onClick={adder("addb2","Cold Coffee")}>Add</button> 
                </li>
                <li>
                    Capuccino 
                    <button id="addb3" value={70} onClick={adder("addb3","Capuccino")}>Add</button> 
                </li>
            </ul>
            <ul>
                <h4>Milkshakes</h4>
                <li>
                    Chocolate Milkshake
                    <button id="addb4" value={60} onClick={adder("addb4","Indian")}>Add</button> 
                </li>
                <li>
                    KitKat Milkshake
                    <button id="addb5" value={70} onClick={adder("addb5","American")}>Add</button> 
                </li>
                <li>
                    Snicker Milkshake 
                    <button id="addb6" value={80} onClick={adder("addb6","Chinese")}>Add</button> 
                </li>
            </ul>
            <ul>
                <h4>Pasteries</h4>
                <li>
                    Red Velvet Cake 
                    <button id="addb7" value={100} onClick={adder("addb7","Chocolate Cake")}>Add</button> 
                </li>
                <li>
                    Black Frost cake 
                    <button id="addb8" value={80} onClick={adder("addb8","Cup cake")}>Add</button> 
                </li>
                <li>
                    Chocolate Truff
                    <button id="addb9" value={60} onClick={adder("addb9","Ice cream")}>Add</button> 
                </li>
            </ul>
        </div>
    )
}


export default Section1;