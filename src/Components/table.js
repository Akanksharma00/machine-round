import React,{useRef, useState} from 'react';

import '../Style/table.css';

const Table = (props)=> {
    let [noOfRows,setNoOfRows] = useState([1]);
    // const [dataList,setDataList] = useState([]);
    const [checked,setChecked] = useState(false);
    const [selectedGender,setSelectedGender] = useState();
    const [selectedDate,setSelectedDate] = useState();

    const enteredName = useRef();
    const enteredEmail = useRef();
    
    const checkSelectedHandler = (event) => {
        event.preventDefault();

        if(event.target.checked){
            setChecked(true);
        }
        if(!event.target.checked){
            setChecked(false)
        }
    }

    
    const submitHandler = (event) => {
        event.preventDefault();
        const name = enteredName.current.value;
        const email = enteredEmail.current.value;
        const gender = selectedGender;
        const date = selectedDate;
        console.log(name,email,gender,date);
        localStorage.setItem(`data(${Math.random}*100)`,[
            Math.random(),
            name,
            email,
            gender,
            date
            
        ])
    }

    const addNewRowHandler = (event) => {
        event.preventDefault();
        setNoOfRows([...noOfRows,Math.random()]);
    }
    // console.log(noOfRows);

    const removeSelectedRowHandler = (event) => {
        event.preventDefault();
        
    }

    return(
        <div className='section-body'>
            <div>
                <ul>
                    <li>
                        <span></span>
                        <span>Name</span>
                        <span>Email</span>
                        <span>Gender</span>
                        <span>Date of Birth</span>
                    </li>
                    
                   {noOfRows.map((i)=>{
                    console.log(i)
                        return <li key={i}>  
                        <form onSubmit={submitHandler}>
                            <span>
                                <input 
                                    type='checkbox' 
                                    onChange={checkSelectedHandler}
                                />
                            </span>
                            <span>
                                <input 
                                    type='text' 
                                    placeholder='Enter name'
                                    ref={enteredName}
                                />
                            </span>
                            <span>
                                <input 
                                    type='email' 
                                    placeholder='Enter Email' 
                                    ref={enteredEmail}
                                    required
                                />
                            </span>
                            <span>
                                <select onChange={(e)=>setSelectedGender(e.target.value)}>
                                    <option value='Male'>Male</option>
                                    <option value='Female'>Female</option>
                                    <option value='Others'>Others</option>
                                </select>
                            </span>
                            <span>
                                <input 
                                    type='date' 
                                    onChange={(e)=>setSelectedDate(e.target.value)}
                                />
                            </span>
                            <button>Submit</button>
                        </form>
                    </li> 
                   })}
                   
                </ul>
            </div>
            <div className='button-grp'>
                <button onClick={addNewRowHandler}>Add New Row</button>
                <button onClick={removeSelectedRowHandler}>Delete Selected Row</button>
                
            </div>
        </div>
    )
};

export default Table;