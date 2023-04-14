// import React from 'react';

// import axios from 'axios';

// export default class UserList extends React.Component {
//   state = {
//     users: [],
//   };

//   componentDidMount() {
//     axios.get(`https://6437ef6ec1565cdd4d61c84f.mockapi.io/`).then(res => {
//       const users = res.data;
//       this.setState({ users });
//     });
//   }

//   render() {
//     return (
//       <ul>
//         {this.state.users.map(person => (
//           <li>{person.name}</li>
//         ))}
//       </ul>
//     );
//   }
// }
