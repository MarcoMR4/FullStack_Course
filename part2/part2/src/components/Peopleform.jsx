
const PeopleForm = ({addNewContact, handleNameChange, handleNumberChange}) => {
    
    return (
        <div>
               <form onSubmit={addNewContact}>
                    <div>
                        name: <input required onChange = {handleNameChange} />
                    </div>
                    <div>
                        number: <input required onChange = {handleNumberChange} />
                    </div>
                    <div>
                        <button type = "submit" >add</button>
                    </div>
                </form>
        </div>
    )
}

export default PeopleForm;