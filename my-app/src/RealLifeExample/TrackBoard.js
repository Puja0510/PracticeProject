import React, {useState} from "react";
import {
    TrackBoardContainer, 
    TrackBoardContent,
    TrackBoardHeader,
    AddTaskButton,
    Input,
    TaskList,
    Task,
    ColDisplay,

} from './skins'
import {useDebounce} from './useDebounce';

const TrackBoard = () => {
    const [inputVal, setInputVal] = useState('')
    const [colums, setColums] = useState(["Tasks", "InProgress", "Done"])
return (
    <TrackBoardContainer>
        <TrackBoardHeader>TrackBoard</TrackBoardHeader>
        <TrackBoardContent>
        <Input 
         type='text'
         value={inputVal}
         onChange={(e) => setInputVal(e.target.value, console.log("bb", e.target.value))}
         />
         <AddTaskButton>Add Task</AddTaskButton>
        </TrackBoardContent>

        <TaskList>
            <Task>{colums.map((col) => (
             <ColDisplay>
                <div>{col}</div>
                <div>lllllll</div>
             </ColDisplay>
            ))}</Task>
            
        </TaskList>
    </TrackBoardContainer>
)
}

export default TrackBoard;