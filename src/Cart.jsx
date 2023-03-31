import './Section1.jsx';

var total=0;

function Cart() {
    return(
        <div className="cart">
            <h6>Added to cart items</h6>
            <button onClick={totalam}>Close Order</button>
            <section id='cartsection'>
            </section>
        </div>
    )
}

function totalam () 
{
    const f = document.createElement("h4");
    const sec = document.getElementById('cartsection');
    f.append("Thank You!!");
    f.append("Your Total Order is Rs.",total);
    sec.append(f);
    console.log(total);
    const du = document.createElement("button","Make another Order");
    du.onclick = function(){
        document.getElementById("cartsection").innerHTML = "";
    }
    du.append("Make another Order");
    sec.append(du);
    const dv = document.createElement("button","Make another Order");
    dv.onclick = function(){
        f.innerHTML = "";
        du.remove()
        dv.remove();
    }
    dv.append("Still Order");
    sec.append(dv);
}

var adder = (x,y) => () =>
{
    var v = document.getElementById(x).value;
    console.log(v);
    console.log(y);
    var sec = document.getElementById('cartsection');
    const p = document.createElement("p");
    p.append(y," ",v);
    sec.append(p);
    total = parseInt(total) + parseInt(v);
    console.log(total);
}

export {Cart,adder};