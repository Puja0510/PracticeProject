import React from "react"

const Practise = () => {
    const textIdea = [
        {className: "text-muted"}, 
        {className: "text-primary"},
        {className: "text-success"},
        {className: "text-info"},
        {className: "text-warning"},
        {className: "text-danger"},
        {className: "text-secondary"},
        {className: "text-white"},
        {className: "text-dark"},
        {className: "text-body"},
        {className: "text-white-50 bg-dark"},
        {className: "bg-primary"},
        {className: "bg-success"},
        {className: "bg-info"},
        {className: "bg-warning"},
        {className: "bg-danger"},
        {className: "bg-secondary"},

    ]
    const users = [
        {first: "Puja", last: "Rani", gmail: "puja@gmail.com"},
        {first: "Puja", last: "Rani", gmail: "puja@gmail.com"},
        {first: "Puja", last: "Rani", gmail: "puja@gmail.com"}
    ]
    const doggy = "https://picsum.photos/id/237/300/200";
    return(
        <div>
            {/* <div class="container mt-3">
            <h2>Rounded Corners</h2>
            <p>The .rounded class adds rounded corners to an image:</p>            
            <img src={doggy} class="rounded" alt="OYO" width="304" height="236"/> 
            <img src={doggy} class="rounded-circle" alt="OYO" width="304" height="236"/> 
            <img src={doggy} class="img-thumbnail" alt="OYO" width="304" height="236"/> 
            <img src={doggy} class="float-start" alt="OYO" width="304" height="236"/> 
            <img src={doggy} class="float-end" alt="OYO" width="304" height="236"/> 
            </div> */}
            {/* <div className="container mt-3">
                <div className="table table-bordered table-hover">
                    <thead>
                    <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((u) => (
                     <tr>
                        <td>{u.first}</td>
                        <td>{u.last}</td>
                        <td>{u.gmail}</td>
                     </tr>
                    ))}
                </tbody>
                </div>
            </div> */}
            {/* <div className="contained">
                {textIdea.map((c) => (
                    <p className={c.className}>This text is {c.className}.</p>
                ))}
            </div> */}
            {/* <div className="row text-center gap-10">
                <div className="col-sm-3 border">
                    <p>A</p>
                </div>
                 <div className="col-sm-3 border">
                    <p>B</p>
                </div>
                 <div className="col-sm-3 border">
                    <p>C</p>
                </div>
                 <div className="col-sm-3 border">
                    <p>D<kbd>ctrl+P</kbd></p>
                </div>
                <div className="col-sm-3 border">
                    <p>A<code>code</code></p>
                </div>
                <div className="col-sm-3 border">
                    <p><abbr title="hhh">HHHHHH</abbr>B</p>
                </div>
                 <div className="col-sm-3 border">
                    <p>C</p>
                </div>
                 <div className="col-sm-3 border">
                    <p>D</p>
                </div>
                
            </div> */}
            {/* <div className="container-xxl p-5 my-5 bg-dark text-white">
                <h1>My First Bootstrap Page</h1>
                <p>Resize this responsive page to see the effect!</p>
            </div> */}
            {/* <div className="container-fluid bg-primary text-white p-5 text-center">
                  <h1>My First Bootstrap Page</h1>
                    <p>Resize this responsive page to see the effect!</p>
            </div> */}

            {/* <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Column 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                     <div className="col-sm-4">
                        <h3>Column 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                     <div className="col-sm-4">
                        <h3>Column 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export default Practise;