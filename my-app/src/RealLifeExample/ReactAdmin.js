import React,{useState, useEffect} from "react";
import { Modal, Button, Form, Table } from "react-bootstrap";


const API_URL = "https://jsonplaceholder.typicode.com/users";

const ReactAdmin = () => {
    const [user, setUser] = useState([]); // api data store
    const [show, setShow] = useState(false); // show model for edit/create
    const [formData, setFormData] = useState({name: "", email: ""}); // handle form data
    const [showDelete, setShowDelete] = useState(false); // show delete confirmation model
    const [editId, setEditId] = useState(null); // store id
    const [deleteId, setDeleteId] = useState(null); //delete Id

    // fetch user on load
    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((data) => setUser(data.slice(0,5))) // only take 5 users for demo
        .catch((err) => console.error(err))
    }, [])

    // open model
    const handleShow = (user = null) => {
        if(user){
            setFormData({ name: user.name, email: user.email})
            setEditId(user.id)
        } else {
            setFormData({ name: "", email: ""})
            setEditId(null)
        }
        setShow(true)
    }
    // close model 
    const handleClose = () => setShow(false);

      // Open Delete Confirmation modal
  const handleShowDelete = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleCloseDelete = () => setShowDelete(false);

    // handle Input
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

     // Save user (Create/Update)
        const handleSave = () => {
        if(editId){
            fetch(`${API_URL}/${editId}`, {
                method: 'PUT', 
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
            .then((res) => res.json())
            .then((data) => {
                setUser(user.map((u) => (u.id === editId ? data : u)))
                handleClose();
            })
        } else {
            //create
            fetch(API_URL, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            })
            .then((res) => res.json())
            .then((data) => { setUser([...user, {...data, id: user.length+1}])
            handleClose()
        });
        }
    }
   const confirmDelete = () => {
    fetch(`${API_URL}/${deleteId}`, { method: "DELETE" })
      .then(() => {
        setUser(user.filter((u) => u.id !== deleteId));
        handleCloseDelete();
      })
      .catch((err) => console.error(err));
  };

    return (
        <div className="container mt-5">
            <h2>User Management (CURD)</h2>
            <Button variant="primary" className="mb-3" onClick={() => handleShow()}>Add User</Button>

            <Table striped border hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((u,i) => (
                        <tr key={u.id}>
                            <td>{i+1}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                <Button 
                                    variant="warning" 
                                    size="sm"
                                    className="me-2"
                                    onClick={() => handleShow(u)}
                                >Edit
                                </Button>
                                <Button
                                    variant="danger"
                                    size="sm"
                                    onClick={() => handleShowDelete(u.id)}
                                >Delete
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* Modal for Add/Edit */}
            <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{editId ? "Edit User" : "Add User"}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="success" onClick={handleSave}>
                            Save
                        </Button>
                    </Modal.Footer>
            </Modal>
             {/* Delete Confirmation Modal */}
      <Modal show={showDelete} onHide={handleCloseDelete}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
        </div>
    )
}

export default ReactAdmin;