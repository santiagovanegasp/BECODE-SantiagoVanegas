
// export function Greeting (props){
//     console.log(props)
//     return <h1> {`${props.title} ${props.name}`}</h1>
// };  traditional form 

// using destructuration
export function Greeting({ title, name, salary }) {
    // console.log(title, name);
    return <h1>{`${title} ${name} ${salary}`}</h1>;
  }

  export function UserCard (props){
    console.log(props)
    return <h1> User card</h1>
  }