import './TodoCounter.css';





function TodoCounter({total, completed}){

        if ( total === 0 ) {
         return  (
            <h1>
                You don't have todos  , add at least once. 
            </h1>)  
        } else {
            return (
                <h1>
                    You have finished <span className='completedNum'>{completed}</span> or <span className='totalNum'>{total}</span> TODOS
                </h1>
                )
        }
        
    };


    export {TodoCounter};

    // destructuracion 
