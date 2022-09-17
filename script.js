function calculate_square(){
    let side=Number(document.getElementById("side_of_the_sqare").value)

    result_square.innerText="S="+side**2+"\n"+"P="+2*(side+side)
}

function calculate_rectangle(){
    let height=Number(document.getElementById("height_rectangle").value)
    let width=Number(document.getElementById("width_rectangle").value)

    result_rectangle.innerText="S="+height*width+"\n"+"P="+2*(height+width)
}

function calculate_circle(){
    let radius=Number(document.getElementById("radius_of_circle").value)

    result_circle.innerText="S="+Math.PI*radius**2+"\n"+"P="+2*Math.PI*radius
}

function calculate_triangle(){
    let A=Number(document.getElementById("side_a").value)
    let B=Number(document.getElementById("side_b").value)
    let C=Number(document.getElementById("side_c").value)
    let P=(A+B+C)*0.5;

    result_triangle.innerText="S="+Math.sqrt(P*(P-A)*(P-B)*(P-C))
}

